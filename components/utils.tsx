// import { useState, useEffect } from 'react';

// const useWindowSize = () => {
//   const [windowSize, setWindowSize] = useState({ width: 0 });
//   const [windowHeight, setWindowHeight] = useState({ height: 0 });

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowSize({ width: window.innerWidth });
//       setWindowHeight({ height: window.innerHeight });
//     };

//     // Set initial window size
//     handleResize();

//     // Listen to resize events
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return  { width: windowSize.width, height: windowHeight.height };
// };

// export default useWindowSize;