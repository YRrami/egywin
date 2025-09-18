import React from "react";
import { PALETTE } from "./theme";

export default function ScrollProgressThin() {
  const [p, setP] = React.useState(0);

  React.useEffect(() => {
    const on = () => {
      const sc = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? (sc / h) * 100 : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);

  return (
    <div className="h-0.5 w-full">
      <div className="h-full" style={{ background: PALETTE.caramel, width: `${p}%` }} />
    </div>
  );
}
