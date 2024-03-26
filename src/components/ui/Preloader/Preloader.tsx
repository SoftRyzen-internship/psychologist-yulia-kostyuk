'use client';
import React, { useEffect, useState } from 'react';

import s from './Preloader.module.css';

import { classnames } from '@/utils/classnames';

import data from '@/data/common.json';

export const Preloader = () => {
  const { layout } = data;
  const { logo } = layout;
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-mainBcg">
      <div>
        <p
          className={classnames(
            s.gradient,
            'section-title mb-4 text-center font-tenor',
          )}
        >
          {logo.label}
        </p>
        <p className="text-center uppercase text-text">
          {logo.preloaderSubtitle}
        </p>
      </div>
    </div>
  );
};
