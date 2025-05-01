import Image from "next/image";
import React from "react";

const Logo: React.FC<{ width?: number; height?: number }> = ({
  width,
  height,
}) => {
  return <Image src="/logo.webp" alt="Logo" width={width?? 200} height={height?? 100} />;
};

export default Logo;
