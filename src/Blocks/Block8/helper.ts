import { BlogItemProps } from "./types";

export const getBlogItems = (
  { blogs, selectedLayout, getBlogCard }: BlogItemProps): JSX.Element[] => {
  blogs =
    selectedLayout === "layout-2"
      ? blogs?.slice(0, 3)
      : selectedLayout === "layout-3"
        ? blogs.slice(0, 4)
        : blogs.slice(0, 8);
  return blogs?.map((item, i) => {
    switch (selectedLayout) {
      case "layout-2":
        return getBlogCard(
          item,
          i === 0 ? false : true,
          i === 0 ? "horizontal" : "vertical",
          i
        );
      case "layout-3":
      case "layout-4":
      case "layout-5":
        return getBlogCard(item, false, "horizontal", i);
      default:
        return getBlogCard(item, true, "vertical", i);
    }
  });
};