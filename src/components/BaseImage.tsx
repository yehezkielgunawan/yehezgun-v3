import React, { useState } from "react";

import clsxm from "@/lib/helpers/clsxm";

type BaseImageProps = {
  className?: string;
} & React.ComponentPropsWithRef<"img">;

const BaseImage = React.forwardRef<HTMLImageElement, BaseImageProps>(
  ({ className, ...rest }, ref) => {
    const [status, setStatus] = useState<boolean>(false);
    return (
      <img
        ref={ref}
        className={clsxm(
          className,
          "transition duration-500",
          status ? "scale-100 blur-0" : "scale-120 blur-2xl"
        )}
        alt={rest.alt}
        onLoad={() => setStatus(true)}
        loading="lazy"
        decoding="async"
        {...rest}
      />
    );
  }
);

export default BaseImage;
