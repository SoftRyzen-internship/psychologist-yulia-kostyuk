'use client';
import React, { useEffect, useState } from 'react';
import { layout } from '@/data/common.json';

export const Preloader = () => {
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
        <p className="section-title mb-4 text-center font-tenor text-accent">
          {layout.logo.label}
        </p>
        <p className="text-center uppercase text-text">
          {layout.logo.preloaderSubtitle}
        </p>
      </div>
    </div>
  );
};
