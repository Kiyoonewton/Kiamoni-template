import { gql } from "@apollo/client";
import { CORE_MENU_FIELDS } from "../../../models";

export const GET_MENU_CATEGORIES = gql`
     ${CORE_MENU_FIELDS}
    query GqlGetMenu($uuid: ID) {
        getMenu(uuid: $uuid) {
            ...CoreMenuFields
        }
    }
`;