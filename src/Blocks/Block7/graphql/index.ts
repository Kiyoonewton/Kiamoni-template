import { gql } from "@apollo/client";
export const GET_MENU = gql`
    query GqlGetMenu($uuid: ID) {
    getMenuItems(input: {menu_uuid:$uuid}) {
      data {
        uuid
        image_url
        name
        price
        menuCategory {
          uuid
        }
      }
    }
  }
`;