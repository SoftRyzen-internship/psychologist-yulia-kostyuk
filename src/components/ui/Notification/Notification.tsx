import React from 'react';
import { SuccessIcon, ErrorIcon } from '@/../public/icons';
import data from '@/data/common.json';
import { NotificationProps } from './types';
import { classnames } from '@/utils/classnames';

export function Notification({ type }: NotificationProps) {
  const title =
    type === 'success'
      ? data.notification.success.title
      : data.notification.error.title;

  const text =
    type === 'success'
      ? data.notification.success.text
      : data.notification.error.text;

  const titleStyles = classnames(
    'mb-6 font-tenor text-2xl text-center md:text-[28px] md:leading-9 xl:text-4xl xl:leading-[48px] tracking-wider',
    type === 'success' ? 'text-accent' : 'text-error',
  );

  return (
    <div className="flex flex-col items-center">
      {type === 'success' ? (
        <SuccessIcon width={64} height={64} className="mb-8 xl:mb-10" />
      ) : (
        <ErrorIcon width={64} height={64} className="mb-8 xl:mb-10" />
      )}
      <p className={titleStyles}>{title}</p>
      <p className="whitespace-pre-line text-center font-montserrat text-sm xl:text-base">
        {text}
      </p>
    </div>
  );
}
