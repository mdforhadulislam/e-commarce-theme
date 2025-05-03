import Image from 'next/image'
import React from 'react'

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width, height }) => {
  return (
    <div>
        <Image src="/LOGO.png" width={width?? 200} height={height?? 150} alt='LOGO' />
    </div>
  )
}

export default Logo