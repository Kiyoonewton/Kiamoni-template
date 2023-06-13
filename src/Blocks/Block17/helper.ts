import { BlogItemProps } from "./types";

export const getBlogItems = (
  { blogs, selectedLayout, getBlogCard }: BlogItemProps): JSX.Element[] => {
  return blogs?.map((item, i) => {
    switch (selectedLayout) {
      case "layout-2":
      case "layout-3":
      case "layout-4":
        return getBlogCard(item, true, "horizontal", i);
      default:
        return getBlogCard(item, true, "vertical", i);
    }
  });
};

export const getBlogContent = (clientPost: { [key: string]: string }) => {
    let blogContent = { date: "", title: "", text: "", image: "" };

    const dateStr = clientPost.published_at;
    const date = new Date(dateStr);
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    blogContent.date = formattedDate;
    blogContent.title = clientPost.title;
    blogContent.text = clientPost.content;
    blogContent.image = clientPost.featured_image;
   return(blogContent);
  };