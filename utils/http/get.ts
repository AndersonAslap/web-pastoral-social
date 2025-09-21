import useFetchInterceptor from "./fetch-interceptor";

const fetchInterceptor = useFetchInterceptor();

const get = async (url: string) => {
    return await fetchInterceptor(url, {
      method: 'GET',
      cache: 'no-cache'
    });
};

export default get;