import React, { createContext, useContext, useEffect, useState } from "react";

import clsxm from "@/lib/helpers/clsxm";

const PreloadContext = createContext<boolean>(false);

export function PreloadProvider({ children }: { children: React.ReactNode }) {
  const [isPreLoaded, setPreIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setPreIsLoaded(true);
    }, 200);
  }, []);

  return (
    <PreloadContext.Provider value={isPreLoaded}>
      <div
        className={clsxm(
          "fixed inset-0 flex items-center justify-center",
          "bg-white transition-opacity dark:bg-errieblack-500",
          isPreLoaded && "pointer-events-none opacity-0"
        )}
      />
      {children}
    </PreloadContext.Provider>
  );
}

export const usePreloadState = () => useContext(PreloadContext);
