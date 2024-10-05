export const startTimer = () => {
    const startTime = Date.now();
    return () => Date.now() - startTime;
  };
  