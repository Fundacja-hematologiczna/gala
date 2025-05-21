export const breakPoints = {
  320: 1,
  640: 2,
  1024: 3,
  1440: 5,
};

export const getSliderPerView = (width) => {
  if (width >= 1440) return breakPoints[1440];
  if (width >= 1024) return breakPoints[1024];
  if (width >= 640) return breakPoints[640];
  if (width >= 320) return breakPoints[320];
};
