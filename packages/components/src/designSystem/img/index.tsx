import React from "react";
export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  borderRadius?: number | string;
  size?: "small" | "medium" | "large";
}

const sizeMapping = {
  small: { width: "100px", height: "100px" },
  medium: { width: "200px", height: "200px" },
  large: { width: "300px", height: "300px" },
};

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  size,
  width,
  height,
  borderRadius,
}) => {
  const resolveSize = size ? sizeMapping[size] : { width, height };
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: `${resolveSize.width}px` || "auto",
        height: `${resolveSize.height}px` || "auto",
        borderRadius: `${borderRadius}px`,
      }}
    />
  );
};

export default Image;
