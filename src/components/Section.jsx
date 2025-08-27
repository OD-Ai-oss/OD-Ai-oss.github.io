import { useEffect, useRef, useState } from "react";

export default function Section({ id, title, children }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={visible ? "visible" : ""}>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
}
