// 'use client';

// import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
// import Tempus from '@studio-freight/tempus';
// import Lenis from '@studio-freight/lenis';
// import { usePathname, useSearchParams } from 'next/navigation';

// export default function SmoothScroller() {
//   const [isClient, setIsClient] = useState(false);
//   const lenis = useRef<Lenis | null>(null);
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   useEffect(() => {
//     if (lenis.current) {
//       lenis.current.scrollTo(0, { immediate: true });
//     }
//   }, [pathname, searchParams]);

//   useLayoutEffect(() => {
//     if (!isClient) return; // Don't run on the server
//     lenis.current = new Lenis({
//       smoothWheel: true,
//     });

//     const resize = setInterval(() => {
//       lenis.current!.resize();
//     }, 150);

//     function onFrame(time: number) {
//       lenis.current!.raf(time);
//     }

//     const unsubscribe = Tempus.add(onFrame);

//     return () => {
//       unsubscribe();
//       clearInterval(resize);
//       lenis.current!.destroy();
//       lenis.current = null;
//     };
//   }, [isClient]);

//   if (!isClient) return null; // Prevent rendering on the server

//   return null;
// }
