import { useEffect, RefObject, useRef } from 'react';

export type InitialFocus = 'first' | 'none' | number;

export interface Options {
  initialFocus?: InitialFocus;
  tabbableElems?: string;
}

const useFocusTrap = <T extends HTMLElement>(
  ref: RefObject<T>,
  isActive: boolean,
  options: Options = {},
) => {
  const { initialFocus = 'none', tabbableElems = '' } = options;

  const lastFocusedElem = useRef<HTMLElement | null>(null);

  const TABBABLE_ELEMS =
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), area[href], form, audio[controls], video[controls], [tabindex="0"]';

  useEffect(() => {
    if (isActive) {
      const target = ref.current as T;
      lastFocusedElem.current = document.activeElement as HTMLElement;
      lastFocusedElem.current.blur();
      const focusableElems = target.querySelectorAll(
        TABBABLE_ELEMS + tabbableElems,
      );
      const numFocusableElems = focusableElems.length;

      if (numFocusableElems === 0)
        throw 'At least one tabbable element needs to be present within your target. If you feel this is a mistake and there is a tabbable element on your target, try adding your tabbable element within the optional tabbableElems parameter.';

      const firstElement = focusableElems[0] as HTMLElement;
      const lastElement = focusableElems[numFocusableElems - 1] as HTMLElement;

      if (initialFocus === 'first') firstElement.focus();
      else if (typeof initialFocus === 'number') {
        if (initialFocus < 0)
          throw `initialFocus cannot be a negative number: you entered ${initialFocus}`;
        if (initialFocus >= numFocusableElems)
          throw `initialFocus cannot be greater than or equal to the total number of focusable elements within the target: you entered ${initialFocus}`;

        const elem = focusableElems[initialFocus] as HTMLElement;
        elem.focus();
      } else if (initialFocus === 'none') {
      } else {
        throw `initialFocus must be either the values 'first', 'none', or a number. You specified initialFocus as ${typeof initialFocus}`;
      }

      const handleTab = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          const focusedElement = document.activeElement as HTMLElement;

          const focusEvent = (elem: HTMLElement) => {
            elem.focus();
            return event.preventDefault();
          };

          if (!event.shiftKey && focusedElement === lastElement) {
            focusEvent(firstElement);
          }
          if (event.shiftKey && focusedElement === firstElement) {
            focusEvent(lastElement);
          }
        }
      };

      target.addEventListener('keydown', handleTab);
      return () => {
        lastFocusedElem.current!.focus();

        target.removeEventListener('keydown', handleTab);
      };
    }
  }, [isActive]);
};

export default useFocusTrap;
