import { useSelector } from "react-redux";
import { GET_MENU_CATEGORIES } from "../graphql";
import { createApolloClient } from "../../../helper";
import { KiamoniState } from "../../../components";
import { DataProps } from "../type";

export const useGetClientCategories = () => {
  const { gatewayUrl } = useSelector<KiamoniState, KiamoniState>(
    (store) => store
  );
  const client = createApolloClient(gatewayUrl ?? "");

  return async (uuid: string) => {
    try {
      const { data, errors } = await client.query({
        query: GET_MENU_CATEGORIES,
        variables: { uuid },
      });

      if (!data || errors) {
        return [];
      }

      const { activeMenuCategories, activeMenuItems, ...rest } = data?.getMenu as DataProps;
      return {
        ...rest,
        menuCategories: activeMenuCategories,
        menuItems: activeMenuItems,
      };
    }
    catch (error) {
      return [];
    }
  }
}