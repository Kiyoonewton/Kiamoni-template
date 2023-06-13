import { useCommentCardStyles } from "./style";
import clx from "classnames";
import { FC } from "react";
import { CommentCardProps } from "./type";

export const CommentCard: FC<CommentCardProps> = ({
  name,
  comment,
  double,
  center = true,
}) => {
  const classes = useCommentCardStyles();
  return (
    <div className={clx(classes.container, { double }, { center })}>
      <h4 className={classes.containerName}>{name}</h4>
      <p>{comment}</p>
    </div>
  );
};
