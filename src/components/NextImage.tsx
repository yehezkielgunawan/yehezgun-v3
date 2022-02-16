import Image, { ImageProps } from "next/image";
import React, { useState } from "react";

import clsxm from "@/lib/helpers/clsxm";

type NextImageProps = {
  useSkeleton?: boolean;
  imgClassName?: string;
  blurClassName?: string;
  alt: string;
  width: string | number;
} & (
  | { width: string | number; height: string | number }
  | { layout: "fill"; width?: string | number; height?: string | number }
) &
  ImageProps;

export default function NextImage({
  useSkeleton = false,
  src,
  width,
  height,
  alt,
  className,
  imgClassName,
  blurClassName,
  ...rest
}: NextImageProps) {
  const [status, setStatus] = useState(useSkeleton ? "loading" : "complete");
  const widthIsSet = className?.includes("w-") ?? false;

  return (
    <figure
      className={className}
      style={!widthIsSet ? { width: `${width}px` } : undefined}
    >
      <Image
        className={clsxm(
          imgClassName,
          status === "loading" && clsxm("animate-pulse", blurClassName)
        )}
        src={src}
        width={width}
        height={height}
        alt={alt}
        onLoadingComplete={() => setStatus("complete")}
        layout="responsive"
        {...rest}
      />
    </figure>
  );
}
