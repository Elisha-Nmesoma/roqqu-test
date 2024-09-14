'use client'
import { useState,useEffect } from 'react'

export default function ScreenWidth() {

    //get device screen width
  const [isDesktop, setIsDesktop]= useState(window.innerWidth >= 768);

  // Effect to handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
  
    window.addEventListener('resize', handleResize);
    
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  },[isDesktop]);

  return isDesktop;
}