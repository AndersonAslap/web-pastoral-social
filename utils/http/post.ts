import useFetchInterceptor from "./fetch-interceptor";

const fetchInterceptor = useFetchInterceptor();

const post = async (url: string, data: any) => {
  return await fetchInterceptor(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export default post 