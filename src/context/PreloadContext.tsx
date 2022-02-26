import React, { createContext, useContext, useEffect, useState } from "react";

import clsxm from "@/lib/helpers/clsxm";

const PreloadContext = createContext<boolean>(false);

export function PreloadProvider({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 200);
  }, []);

  return (
    <PreloadContext.Provider value={isLoaded}>
      <div
        className={clsxm(
          "fixed inset-0 flex items-center justify-center",
          "bg-white transition-opacity dark:bg-dark",
          isLoaded && "pointer-events-none opacity-0"
        )}
      />
      {children}
    </PreloadContext.Provider>
  );
}

export const usePreloadState = () => useContext(PreloadContext);
