import React, { useState } from "react";

import { usePreloadState } from "@/context/PreloadContext";

export default function useLoaded() {
  const isPreLoaded = usePreloadState();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  React.useEffect(() => {
    if (isPreLoaded) {
      setIsLoaded(true);
    } else {
      setTimeout(() => {
        setIsLoaded(true);
      }, 200);
    }
  }, [isPreLoaded]);
  return isLoaded;
}
