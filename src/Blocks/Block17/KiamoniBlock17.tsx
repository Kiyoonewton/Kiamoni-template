import { FC, useEffect, useState } from "react";
import { useGetClientPosts } from "./hooks";
import { CustomThemeProps, KiamoniPropType } from "../../../types";
import { BlockProvider, BlockProviderProps, BlogCard } from "../../components";
import { initialClientPost } from "./data";
import { getBlogContent } from "./helper";
import { useGetColor } from "../../hooks";
import { useKiamoniBlock17Styles } from "./styles";

export const KiamoniBlock17: FC<KiamoniPropType> = ({
  isSsr,
  content,
  configuration,
}) => {
  const mainConfig = useGetColor(configuration as CustomThemeProps, "main");
  const buttonConfig = useGetColor(configuration as CustomThemeProps, "button");
  const classes = useKiamoniBlock17Styles(mainConfig as CustomThemeProps);

  const [clientPosts, setClientPosts] = useState(initialClientPost);
  const [page, setPage] = useState(0);
  const getClientPosts = useGetClientPosts();

  //   const fetchBlog = async () => {
  //     const clientBlog = await getClientPosts(content?.blog_uuid, page + 1);
  //     setClientPosts(clientBlog as any);
  //   };

  //   useEffect(() => {
  //     if (isSsr || !content?.blog_uuid) return;
  //     fetchBlog();
  //   }, [content?.blog_uuid]);

  const DisplayBlogCard = () => {
    // return clientPosts?.map((clientPost, index: number) => (
    //   <div key={index}>
    return (
      <BlogCard
        type={"vertical"}
        arrow={false}
        blogContent={getBlogContent(clientPosts[0])}
      />
    );
    //   </div>
    // ));
  };

  return (
    <BlockProvider mainConfig={mainConfig} buttonConfig={buttonConfig}>
      <section className={classes?.root}>
        <div className={classes.container}>
            <h1>News and Blogs</h1>
                  {DisplayBlogCard()}
        </div>
      </section>
    </BlockProvider>
  );
};
