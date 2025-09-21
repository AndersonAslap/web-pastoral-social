import useFetchInterceptor from "./fetch-interceptor";

const fetchInterceptor = useFetchInterceptor();

const patch = async (url: string, data: any) => {
    return await fetchInterceptor(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
};

export default patch;