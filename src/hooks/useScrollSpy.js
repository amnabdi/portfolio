import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in the reading position and returns its id.
 *
 * The root margin collapses the viewport to a thin band a little above centre,
 * so a section becomes "active" when it reaches the spot a reader is actually
 * looking at rather than the moment its top edge appears.
 *
 * `ids` must be a stable reference — define it at module scope.
 */
export function useScrollSpy(ids, rootMargin = "-45% 0px -50% 0px") {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin, threshold: 0 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids, rootMargin]);

  return activeId;
}
