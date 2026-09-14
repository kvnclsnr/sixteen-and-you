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
      duration: 250,
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
      duration: 250,
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
      duration: 250,
      easing: "ease",
      fill: "forwards",
    }
  );
};