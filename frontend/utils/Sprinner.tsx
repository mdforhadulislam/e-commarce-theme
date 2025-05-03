"use client";
import { useLoad } from "@/context/LoadingContext";
import { RotatingLines } from "react-loader-spinner";

const Sprinner = () => {
  const load = useLoad();

  if (load.isLoading)
    return (
      <div className="fixed w-full h-full flex justify-center items-center top-0 left-0 bg-white opacity-90 z-[100]">
        <RotatingLines
          visible={true}
          width="100"
          strokeWidth="5"
          strokeColor="#000"  
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
      </div>
    );
};

export default Sprinner;