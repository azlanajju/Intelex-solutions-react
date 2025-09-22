import { useEffect } from "react";
import { initializeGSAP } from "./useGSAP";

// Custom hook to initialize GSAP on app load
export const useGSAPInit = () => {
  useEffect(() => {
    // Initialize GSAP with all optimizations
    initializeGSAP();

    // Cleanup function
    return () => {
      // Cleanup will be handled by individual components
    };
  }, []);
};

export default useGSAPInit;
