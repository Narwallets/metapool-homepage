import { useRef, useEffect } from "react";

const useSmoothScrollTo = (id: string) => {
  const ref = useRef<null | HTMLAnchorElement>(null);
  useEffect(() => {
    const listener = (e: any) => {
      if (ref.current && location.hash === id) {
        ref?.current?.scrollIntoView({ behavior: "smooth" });
      }
    };
    if (typeof window !== "undefined")
      window.addEventListener("hashchange", listener, true);

    return () => {
      if (typeof window !== "undefined")
        window.removeEventListener("hashchange", listener);
    };
  }, [id]);
  return {
    "data-anchor-id": id,
    ref,
  };
};

export default useSmoothScrollTo;
