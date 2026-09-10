'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import gsap from 'gsap';

const MIN_DISPLAY_TIME = 1800; // ms — how long loader stays minimum
const MAX_WAIT_TIME = 8000;    // ms — hard cap so it never hangs forever

function LoaderInner() {
  // Hydration safety
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const centerContentRef = useRef(null);

  const startTimeRef = useRef(null);
  const assetsLoadedRef = useRef(false);
  const exitStartedRef = useRef(false);

  // 1. Client mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 2. Main loader logic
  useEffect(() => {
    if (!isMounted) return;

    startTimeRef.current = Date.now();

    // ---- Helper: run the exit animation ----
    const runExitAnimation = () => {
      if (exitStartedRef.current) return;
      exitStartedRef.current = true;

      setProgress(100);

      gsap.timeline()
        .to(centerContentRef.current, {
          opacity: 0,
          scale: 0.95,
          duration: 0.35,
          ease: 'power2.in',
        })
        .to(
          leftPanelRef.current,
          { xPercent: -100, duration: 0.85, ease: 'power4.inOut' },
          '-=0.1'
        )
        .to(
          rightPanelRef.current,
          {
            xPercent: 100,
            duration: 0.85,
            ease: 'power4.inOut',
            onComplete: () => setIsLoading(false),
          },
          '<'
        );
    };

    // ---- Helper: check if we can exit ----
    const tryFinish = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const minTimePassed = elapsed >= MIN_DISPLAY_TIME;

      if (minTimePassed && assetsLoadedRef.current) {
        runExitAnimation();
      }
    };

    // ---- Asset loading detection ----
    const onWindowLoad = () => {
      assetsLoadedRef.current = true;
      tryFinish();
    };

    if (document.readyState === 'complete') {
      assetsLoadedRef.current = true;
    } else {
      window.addEventListener('load', onWindowLoad);
    }

    // ---- Progress animation (capped at 95% until assets ready) ----
    let current = 0;
    const interval = setInterval(() => {
      if (exitStartedRef.current) {
        clearInterval(interval);
        return;
      }

      const cap = assetsLoadedRef.current ? 100 : 95;
      const step = Math.floor(Math.random() * 6) + 3;

      current = Math.min(current + step, cap);
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        tryFinish();
      }
    }, 60);

    // ---- Min-time watcher ----
    const minTimeTimer = setTimeout(() => {
      tryFinish();
    }, MIN_DISPLAY_TIME + 50);

    // ---- Hard cap: force exit ----
    const maxWaitTimer = setTimeout(() => {
      assetsLoadedRef.current = true;
      runExitAnimation();
    }, MAX_WAIT_TIME);

    return () => {
      clearInterval(interval);
      clearTimeout(minTimeTimer);
      clearTimeout(maxWaitTimer);
      window.removeEventListener('load', onWindowLoad);
    };
  }, [isMounted]);

  if (!isMounted) return null;

  const formattedProgress = progress < 10 ? `0${progress}` : `${progress}`;

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-[999998] flex select-none overflow-hidden">
          <div
            ref={leftPanelRef}
            className="w-1/2 h-full bg-[#FAFAF8] border-r border-[#E5E5E0] relative"
          />
          <div
            ref={rightPanelRef}
            className="w-1/2 h-full bg-[#FAFAF8] border-l border-[#E5E5E0] relative"
          />

          <div
            ref={centerContentRef}
            className="absolute inset-0 z-10 flex flex-col justify-between p-8 sm:p-12 pointer-events-none"
          >
            <div className="flex items-center justify-between text-xs font-bold tracking-[0.2em] text-[#1A1A1A] uppercase">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A9744F] animate-pulse" />
                <span>92° ARCHIVAL LOAD</span>
              </div>
              <span className="text-[#6B6B6B]">SEASON 01 // 2026</span>
            </div>

            <div className="my-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-[#1A1A1A]">
                  92DEGREE
                </span>
                <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#A9744F]" />
              </div>

              <p className="text-xs text-[#6B6B6B] uppercase tracking-[0.3em] font-semibold">
                Thermal Outerwear & Streetwear
              </p>

              <div className="pt-2 font-mono text-4xl sm:text-6xl font-black text-[#A9744F]">
                {formattedProgress}%
              </div>
            </div>

            <div className="max-w-md mx-auto w-full space-y-2">
              <div className="w-full h-[2px] bg-[#E5E5E0] relative overflow-hidden">
                <div
                  className="h-full bg-[#A9744F] transition-all duration-100 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-bold text-[#6B6B6B] uppercase tracking-widest">
                <span>INITIALIZING SYSTEM</span>
                <span>100% SECURE</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function PageLoader() {
  return (
    <Suspense fallback={null}>
      <LoaderInner />
    </Suspense>
  );
}