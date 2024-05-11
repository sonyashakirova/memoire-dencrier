export const useDeviceType = () => {
  const isTouchDevice = !!(
    'ontouchstart' in window || navigator.maxTouchPoints
  );

  return { isTouchDevice };
};
