import { useLocation } from "react-router-dom";
export const useAnimationParameter = (
  animations: { name: string; isSelected: boolean }[] | undefined
) => {
  const location = useLocation();
  const queryString = location.search;
  const params = new URLSearchParams(queryString);
  const animationQueryParam = params.get("animation");
  const selectedAnimation = !animationQueryParam
    ? animations?.find((index) => index.isSelected)?.name
    : animations?.find((index) => index.name === animationQueryParam)?.name;
  const animationClass = selectedAnimation?.replace(/-/g, "_");
  return { animationClass };
};
