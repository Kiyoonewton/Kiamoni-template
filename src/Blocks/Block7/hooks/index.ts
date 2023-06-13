import { useSelector } from "react-redux";
import { GET_MENU } from "../graphql";
import { createApolloClient } from "../../../helper";
import { KiamoniState } from "../../../components";
export const useGetClientMenu = () => {
  const { gatewayUrl } = useSelector<KiamoniState, KiamoniState>(
    (store) => store
  );
  const client = createApolloClient(gatewayUrl ?? "");
  return async (uuid: string) => {
    try {
      const { data, errors } = await client.query({
        query: GET_MENU,
        variables: { uuid },
      });
      if (!data || errors) {
        return [];
      }
      const { name, activeMenuItems } = data.getMenu;
      return {
        menuItems: activeMenuItems,
        name: name,
      };
    }
    catch (error) {
      //TODO: log this sentry
      return [];
    }
  }
}