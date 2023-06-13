import clx from "classnames";
import { DisplayLinkProps } from ".";

export const displayLink = ({ content, classes, path }: DisplayLinkProps) => {
  const activePath = (url: string) => {
    const regex = /\/([^/]+)$/;
    const match = path?.match(regex);
    if (match?.[1] === url || url.toLowerCase() === "home") {
      return true;
    }
  };
  return content?.links?.map(
    (link: { url: string; text: string }, linkIndex: number) =>
      link.text !== "Wishlist" && (
        <a key={linkIndex} href={link?.url}>
          <span
            className={clx(classes.links, { active: activePath(link?.text) })}
            onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
              e.stopPropagation();
            }}
          >
            {link?.text}
          </span>
        </a>
      )
  );
};
