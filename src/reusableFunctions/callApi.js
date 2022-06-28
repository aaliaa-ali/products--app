import { useQuery } from "react-query";
import axios from "axios";
function CallApi(queryKey, queryFnArguments, controlls) {
  const res = useQuery(queryKey, () => fetchApi(queryFnArguments), {
    refetchOnWindowFocus:false,
    refetchOnMount:false,
    ...controlls,

  });
  return res;
}
function fetchApi(controlls) {
  return axios.request({
    ...controlls,
  });
}
export default CallApi;
