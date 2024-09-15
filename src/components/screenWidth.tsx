// 'use client'
// import { useState,useEffect } from 'react'

// export default function ScreenWidth(): boolean {

//     //get device screen width
//     const [isDesktop, setIsDesktop] = useState<boolean>(() => {
//       if (typeof window !== 'undefined') {
//         return window.innerWidth >= 768;
//       }
//       return false; // Default to false if window is not available
//     });

//   // Effect to handle window resize
//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth >= 768);
//     };
  
//     window.addEventListener('resize', handleResize);
    
//     // Cleanup the event listener on component unmount
//     return () => window.removeEventListener('resize', handleResize);
//   },[isDesktop]);

//   return isDesktop;
// }


'use client'
import { useState, useEffect } from 'react';

// Custom Hook to determine if the screen width is >= 768 pixels
export default function useScreenWidth(): boolean {
  // Initial state setup with a check for the existence of window
 const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    
    // Initial check to set the state based on the current window width
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array ensures this effect runs only once

  return isDesktop;
}
