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

      const item = data?.getMenuItem;
      return {
        menuItem: item
      };
    }
    catch (error) {
      //TODO: log this sentry
      console.log(error);
      return [];
    }
  }
}