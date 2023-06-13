export const useStyles = (position: number) => {
  const centerStyles = {
    transition: "transform .4s ease-in-out",
    transform:
      position === 0
        ? `translate(-50%, -50%) scale(1.15, 1.25)`
        : position === 1
          ? `translate(-102%, -50%)`
          : position === 2
            ? `translate(2%, -50%)`
            : "",
    zIndex: position === 0 ? 2 : position === 1 ? 1 : position === 2 ? 1 : 0,
  };

  const leftStyles = {
    transition: "transform .4s ease-in-out",
    transform:
      position === 0
        ? `translate(0%, -50%)`
        : position === 1
          ? `translate(104%, -50%)`
          : position === 2
            ? `translate(52%, -50%) scale(1.15, 1.25)`
            : "",
    zIndex: position === 0 ? 1 : position === 1 ? 1 : position === 2 ? 2 : 0,
  };

  const rightStyles = {
    transition: "transform .4s ease-in-out",
    transform:
      position === 0
        ? `translate(0%, -50%)`
        : position === 1
          ? `translate(-50%, -50%) scale(1.15, 1.25)`
          : position === 2
            ? `translate(-104%, -50%) `
            : "",
    zIndex: position === 0 ? 1 : position === 1 ? 2 : position === 2 ? 1 : 0,
  };

  return { leftStyles, centerStyles, rightStyles }
}