import { useState, useEffect } from "react";

const Loading = ({ children, isLoading }) => {
  const [load, setLoad] = useState(0);
  const [loadtext, setLoadText] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      if (typeof document !== "undefined") {
        if (load === 0) {
          setLoadText(" .");
          setLoad(1);
        } else if (load === 1) {
          setLoadText(" . .");
          setLoad(2);
        } else if (load === 2) {
          setLoadText(" . . .");
          setLoad(3);
        } else if (load === 3) {
          setLoadText(" . . . .");
          setLoad(0);
        }
      }
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, [load]);

  return isLoading ? (
    <>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="flex justify-center items-center pt-[50vh]">
          <span
            className="loading loading-infinity"
            style={{ width: "80px" }}
          ></span>
          <div>
            <text>LOADING{loadtext}</text>
          </div>
        </div>
      </div>
    </>
  ) : (
    children
  );
};

export default Loading;
