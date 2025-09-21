import useFetchInterceptor from "./fetch-interceptor";

const fetchInterceptor = useFetchInterceptor();

const put = async (url: string, data: any) => {
    return await fetchInterceptor(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
};

export default put;