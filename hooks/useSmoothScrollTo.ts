import { useRef, useEffect } from "react";

const useSmoothScrollTo = (id: string) => {
  console.info({ id });
  const ref = useRef(null);
  useEffect(() => {
    const listener = (e: any) => {
      console.info({ hash: location.hash, id: id });
      if (ref.current && location.hash === id) {
        ref?.current?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("hashchange", listener, true);
    return () => {
      window.removeEventListener("hashchange", listener);
    };
  }, []);
  return {
    "data-anchor-id": id,
    ref,
  };
};

export default useSmoothScrollTo;
