export const fadeUpPreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

export const fadeInPreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

export const slideInPreset = (delay = 0, duration = 1.2, direction = 'left') => {
  const directions = {
    left: { x: -20 },
    right: { x: 20 },
    up: { y: 20 },
    down: { y: -20 }
  };
  
  return {
    initial: { opacity: 0, ...directions[direction] },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { delay, duration, ease: "easeOut" }
  };
};