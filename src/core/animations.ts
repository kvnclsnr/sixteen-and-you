export const animationBlurFadeIn = (element: HTMLElement) => {
  return element.animate(
    [
      {
        opacity: 0,
        backdropFilter: "blur(0)",
      },
      {
        opacity: 1,
        backdropFilter: "blur(0.5rem)",
      },
    ],
    {
      duration: 350,
      easing: "ease",
      fill: "forwards",
    }
  );
};

export const animationBlurFadeOut = (element: HTMLElement) => {
  return element.animate(
    [
      {
        opacity: 1,
        backdropFilter: "blur(0.5rem)",
      },
      {
        opacity: 0,
        backdropFilter: "blur(0)",
      },
    ],
    {
      duration: 350,
      easing: "ease",
      fill: "forwards",
    }
  );
};

export const animationScaleFadeIn = (element: HTMLElement) => {
  return element.animate(
    [
      {
        opacity: 0,
        transform: "scale(0.65)",
      },
      {
        opacity: 1,
        transform: "scale(1)",
      },
    ],
    {
      duration: 350,
      easing: "ease",
      fill: "forwards",
    }
  );
};

export const animationOpacityFadeIn = (element: HTMLElement) => {
  return element.animate(
    [
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
    ],
    {
      duration: 350,
      easing: "ease",
      fill: "forwards",
    }
  );
};

export const animationOpacityFadeOut = (element: HTMLElement) => {
  return element.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 350,
      easing: "ease",
      fill: "forwards",
    }
  );
};

export const animationShake = (element: HTMLElement) => {
  return element.animate(
    [
      { transform: "translateX(0)" },
      { transform: "translateX(-6px)" },
      { transform: "translateX(6px)" },
      { transform: "translateX(-4px)" },
      { transform: "translateX(4px)" },
      { transform: "translateX(0)" },
    ],
    {
      duration: 350,
      easing: "ease-in-out",
    }
  );
};

export const animationPress = (element: HTMLElement) => {
  return element.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(0.95)" },
      { transform: "scale(1)" }
    ],
    {
      duration: 200,
      easing: "ease-out"
    }
  );
};

const animationSlide = (
  element: HTMLElement,
  startX: string,
  endX: string,
  startOpacity: number,
  endOpacity: number,
  direction: "in" | "out"
) => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  
  return element.animate(
    [
      { transform: `translate3d(${startX}, 0, 0)`, opacity: startOpacity },
      { transform: `translate3d(${endX}, 0, 0)`, opacity: endOpacity },
    ],
    {
      duration: prefersReducedMotion ? 1 : direction === "in" ? 250 : 250,
      easing: "ease",
      fill: "forwards",
    }
  );
};

export const animationSlideOutToLeft = (element: HTMLElement) =>
  animationSlide(element, "0%", "-17.5%", 1, 0.1, "out");

export const animationSlideOutToRight = (element: HTMLElement) =>
  animationSlide(element, "0%", "17.5%", 1, 0.1, "out");

export const animationSlideInFromLeft = (element: HTMLElement) =>
  animationSlide(element, "-17.5%", "0%", 0.1, 1, "in");

export const animationSlideInFromRight = (element: HTMLElement) =>
  animationSlide(element, "17.5%", "0%", 0.1, 1, "in");