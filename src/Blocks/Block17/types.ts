export type BlogItemProps = {
    blogs: { [key: string]: string }[],
    selectedLayout: string,
    getBlogCard: {
      (
        blogContent: { [key: string]: any },
        button: boolean,
        cardType: string,
        i: number
      ): JSX.Element;
    }
  }