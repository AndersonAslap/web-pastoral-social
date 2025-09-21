import useFetchInterceptor from "./fetch-interceptor";

const fetchInterceptor = useFetchInterceptor();

const deleteRequest = async (url: string) => {
    return await fetchInterceptor(url, {
      method: 'DELETE',
    });
};
  
export default deleteRequest;
