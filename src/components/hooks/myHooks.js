import { useQuery } from "react-query";
import { FetchMydata } from "../api/myFetch";
export const useCryptoQuery = (ct ) =>{
     return useQuery([`coins_${ct}`], FetchMydata(ct));
}
