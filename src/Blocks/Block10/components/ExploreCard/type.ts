export type ExploreCardProps = {
  type?: "image" | "dark" | "none" | "mixed";
  button?: boolean;
  animate?: boolean;
  layoutClass: string;
  cardItem: { title: string; description?: string; image: string, uuid: string };
};