import { gql } from "@apollo/client";
export const GET_POST = gql`
  query GqlGetPost($uuid: ID, $page:Int! ) {
    postsByBlogUuid(
      input: { blog_uuid: $uuid, page:$page }
    ) {
      data {
        uuid
        title
        content
        featured_image
        published_at
      }
    }
  }
`;
