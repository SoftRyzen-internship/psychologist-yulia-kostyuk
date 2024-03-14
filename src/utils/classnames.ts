import clsx, { ClassValue } from 'clsx';

export const classnames = <T extends ClassValue[]>(...classes: T) =>
  clsx(...classes);
