import { KiamoniState } from "../components";
import { useSelector } from "react-redux"
import { CustomThemeProps } from "../../types";

export const useGetColor = (configuration: CustomThemeProps, type: string) => {
  const { colors } = useSelector<KiamoniState, KiamoniState>((store) => store);

  const getGlobalColor = (color: string) => {
    if (!colors) return "#E44551";
    if (color.startsWith("#")) return color;
    const splitted = color.split(".");
    return colors[splitted[0]][splitted[1]];
  };
  const getMappedColor = (
    colors: Record<string, string>
  ): Record<string, string> => {
    const hexColors: Record<string, string> = {};
    for (const [key, value] of Object.entries(colors)) {
      hexColors[key] = getGlobalColor(value) as string;
    }
    return hexColors;
  };
  const styleConfig = {
    colors: getMappedColor(configuration?.colors?.[type]),
    fonts: configuration?.fonts,
  };
  return styleConfig;
}
