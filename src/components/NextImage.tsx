import Image, { ImageProps } from "next/image";
import React, { useState } from "react";

import clsxm from "@/lib/helpers/clsxm";

type NextImageProps = {
  imgClassName?: string;
  blurClassName?: string;
  alt: string;
} & (
  | { width: string | number; height: string | number }
  | { layout: "fill"; width?: string | number; height?: string | number }
) &
  ImageProps;

export default function NextImage({
  src,
  width,
  height,
  alt,
  className,
  imgClassName,
  ...rest
}: NextImageProps) {
  const [status, setStatus] = useState<boolean>(false);
  const widthIsSet = className?.includes("w-") ?? false;

  return (
    <figure
      className={className}
      style={!widthIsSet ? { width: `${width}px` } : undefined}
    >
      <Image
        className={clsxm(
          imgClassName,
          "transition duration-500",
          status ? "scale-100 blur-0" : "scale-120 blur-2xl"
        )}
        src={src}
        width={width}
        height={height}
        alt={alt}
        onLoadingComplete={() => setStatus(true)}
        priority
        decoding="async"
        unoptimized
        {...rest}
      />
    </figure>
  );
}
