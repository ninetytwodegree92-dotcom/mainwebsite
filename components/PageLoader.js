'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import gsap from 'gsap';

function LoaderInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Hydration safety flag
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Refs for GSAP Split Panels
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const centerContentRef = useRef(null);
  const navBarRef = useRef(null);

  // 1. Ensure Client-Only Mount (Prevents 100% of Hydration Errors)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 2. Preloader Progress & Split Door Exit Animation
  useEffect(() => {
    if (!isMounted) return;

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 10) + 5;

      if (current >= 100) {
        current = 100;
        clearInterval(interval);

        // Runway Split Exit Timeline
        gsap.timeline()
          .to(centerContentRef.current, {
            opacity: 0,
            scale: 0.95,
            duration: 0.35,
            ease: 'power2.in',
          })
          .to(
            leftPanelRef.current,
            {
              xPercent: -100,
              duration: 0.85,
              ease: 'power4.inOut',
            },
            '-=0.1'
          )
          .to(
            rightPanelRef.current,
            {
              xPercent: 100,
              duration: 0.85,
              ease: 'power4.inOut',
              onComplete: () => {
                setIsLoading(false);
              },
            },
            '<'
          );
      }
      setProgress(current);
    }, 35);

    return () => clearInterval(interval);
  }, [isMounted]);

  // 3. Top Navigation Progress Line (Triggered on Page Changes)
  useEffect(() => {
    if (!isMounted || !navBarRef.current) return;

    gsap.fromTo(
      navBarRef.current,
      { scaleX: 0, opacity: 1, transformOrigin: 'left' },
      {
        scaleX: 1,
        duration: 0.45,
        ease: 'power2.out',
        onComplete: () => {
          gsap.to(navBarRef.current, { opacity: 0, duration: 0.3, delay: 0.1 });
        },
      }
    );
  }, [pathname, searchParams, isMounted]);

  // If not mounted yet, render null to guarantee zero hydration mismatch
  if (!isMounted) return null;

  const formattedProgress = progress < 10 ? `0${progress}` : `${progress}`;

  return (
    <>
      {/* Top Cognac Tan Route Navigation Line */}
      <div
        ref={navBarRef}
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#A9744F] z-[999999] pointer-events-none opacity-0"
      />

      {/* Runway Split Doors Preloader */}
      {isLoading && (
        <div className="fixed inset-0 z-[999998] flex select-none overflow-hidden">
          
          {/* Left Split Door */}
          <div
            ref={leftPanelRef}
            className="w-1/2 h-full bg-[#FAFAF8] border-r border-[#E5E5E0] relative"
          />

          {/* Right Split Door */}
          <div
            ref={rightPanelRef}
            className="w-1/2 h-full bg-[#FAFAF8] border-l border-[#E5E5E0] relative"
          />

          {/* Floating Center Overlay */}
          <div
            ref={centerContentRef}
            className="absolute inset-0 z-10 flex flex-col justify-between p-8 sm:p-12 pointer-events-none"
          >
            {/* Header Info */}
            <div className="flex items-center justify-between text-xs font-bold tracking-[0.2em] text-[#1A1A1A] uppercase">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A9744F] animate-pulse" />
                <span>92° ARCHIVAL LOAD</span>
              </div>
              <span className="text-[#6B6B6B]">SEASON 01 // 2026</span>
            </div>

            {/* Center Logo & Big Percentage Counter */}
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

              {/* Monospaced Progress Counter */}
              <div className="pt-2 font-mono text-4xl sm:text-6xl font-black text-[#A9744F]">
                {formattedProgress}%
              </div>
            </div>

            {/* Bottom Progress Bar Track */}
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