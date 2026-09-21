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
        opacity: 0.35,
        offset: 0.35,
      },
      {
        opacity: 1,
      },
    ],
    {
      duration: 500,
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