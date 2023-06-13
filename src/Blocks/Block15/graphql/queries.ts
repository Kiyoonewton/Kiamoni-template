import { gql } from "@apollo/client";

export const GET_MENU = gql`
    query GqlGetMenu($uuid: ID) {
    getMenuItem(uuid:$uuid) {
      image_url
      price
      name
      uuid
    }
  }
`;

