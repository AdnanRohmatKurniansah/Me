import { useState, useEffect } from "react";

const LoadingBar = () => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercentage((prevPercentage) => {
        const newPercentage = prevPercentage + 10;
        if (newPercentage >= 100) {
          clearInterval(interval);
        }
        return newPercentage;
      });
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex bg-black items-center justify-center h-screen">
      <div className="container mx-5 md:mx-auto rounded w-full max-w-lg h-2 bg-white my-auto">
        <div
          className="h-full bg-gradient-to-r from-green-500 to-cyan-500"
          style={{ width: `${loadingPercentage}%` }}
        ></div>
        <p className="text-center text-white ml-2">{loadingPercentage}%</p>
      </div>
    </div>
  );
};

export default LoadingBar;
