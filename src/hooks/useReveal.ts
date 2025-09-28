import { useEffect } from "react";

const REVEAL_SELECTOR = ".reveal";

export const useReveal = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observed = new Set<Element>();

    const makeVisible = (elements: Iterable<Element>) => {
      for (const el of elements) {
        (el as HTMLElement).classList.add("reveal-visible");
      }
    };

    const root = document.body;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      {
        rootMargin: "0px 0px -10%",
        threshold: 0.15,
      }
    );

    const registerElements = () => {
      const elements = document.querySelectorAll(REVEAL_SELECTOR);
      if (reduceQuery.matches) {
        makeVisible(elements);
        return;
      }

      elements.forEach((element) => {
        if (!observed.has(element)) {
          observed.add(element);
          element.classList.remove("reveal-visible");
          observer.observe(element);
        }
      });
    };

    const mutationObserver = new MutationObserver(() => {
      registerElements();
    });

    if (!reduceQuery.matches) {
      registerElements();
    } else {
      makeVisible(document.querySelectorAll(REVEAL_SELECTOR));
    }

    mutationObserver.observe(root, {
      childList: true,
      subtree: true,
    });

    const handlePreferenceChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        makeVisible(document.querySelectorAll(REVEAL_SELECTOR));
        observer.disconnect();
        observed.clear();
      } else {
        registerElements();
      }
    };

    if (typeof reduceQuery.addEventListener === "function") {
      reduceQuery.addEventListener("change", handlePreferenceChange);
    } else {
      // Safari < 14 fallback
      // @ts-expect-error -- addListener is legacy but still needed for some browsers
      reduceQuery.addListener(handlePreferenceChange);
    }

    return () => {
      if (typeof reduceQuery.removeEventListener === "function") {
        reduceQuery.removeEventListener("change", handlePreferenceChange);
      } else {
        // @ts-expect-error -- removeListener is legacy but still needed for some browsers
        reduceQuery.removeListener(handlePreferenceChange);
      }
      mutationObserver.disconnect();
      observer.disconnect();
      observed.clear();
    };
  }, []);
};

export default useReveal;
