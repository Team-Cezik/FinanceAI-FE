import axios from "axios";
import { useAtom } from "jotai";
import { loadingAtom } from "../store/global-atoms";
import { AuthApi } from "../api/services/auth-api";
import { TargetApi } from "../api/services/target-api";
import { ExpenseApi } from "../api/services/expense-api";
import { AICommentsApi } from "../api/services/ai-comments-api";
import { AIAdvicesApi } from "../api/services/ai-advices-api";

export const useAxiosServiceClient = () => {
  const [, setLoading] = useAtom(loadingAtom);

  const axiosClient = axios.create({
    withCredentials:true
  })

  axiosClient.interceptors.request.use((config) => {
    setLoading(true);
    console.log("req: ", config);
    return config;
  });

  axiosClient.interceptors.response.use(
    (response) => {
      if (!response.data.success) {
        setLoading(false);
        return Promise.reject(response);
      }
      setLoading(false);
      console.log("response: ", response);
      return response;
    },
    (error) => {
      console.log("error on response: ", error);
      setLoading(false);
      return Promise.reject(error);
    }
  );

  const services = {
    AuthApi: new AuthApi(axiosClient),
    TargetApi: new TargetApi(axiosClient),
    ExpenseApi: new ExpenseApi(axiosClient),
    AICommentsApi: new AICommentsApi(axiosClient),
    AIAdvicesApi: new AIAdvicesApi(axiosClient)
  }

  return {
    ...services
  }
};
