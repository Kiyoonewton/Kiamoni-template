import { useSelector } from "react-redux";
import { GET_POST } from "../graphql";
import { createApolloClient } from "../../../helper";
import { KiamoniState } from "../../../components";
export const useGetClientPosts = () => {
  const { gatewayUrl } = useSelector<KiamoniState, KiamoniState>(
    (store) => store
  );
  const client = createApolloClient(gatewayUrl ?? "");
  return async (uuid: string, page:number) => {
    try {
      const { data, errors } = await client.query({
        query: GET_POST,
        variables: { uuid, page },
      });
      if (!data || errors) {
        return [];
      }

      console.log(data);
      
      // const { name, activeMenuItems } = data.getMenu;
      // return {
      //   menuItems: activeMenuItems,
      //   name: name,
      // };
    }
    catch (error) {
      //TODO: log this sentry
      return [];
    }
  }
}