import { destroyCookie, parseCookies } from "nookies";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const useFetchInterceptor = () => {
    const interceptFetch = async (url: string, options?: RequestInit) => {

        const { 'nextauth.admin.user': userAuth } = parseCookies();
        const user_auth = userAuth ? JSON.parse(userAuth) : null;
        
        if (user_auth && user_auth?.user?.token && options) {
            options.headers = {
                ...options.headers,
                Authorization: `Bearer ${user_auth.user.token}`,
            };
        }

        const response = await fetch(`${BASE_URL}${url}`, options);

        if (response.status === 401) {
            destroyCookie(null, 'nextauth.admin.user', { path: '/' }); 
            window.location.href = '/';
        }

        return response;
    };

    return interceptFetch;
};

export default useFetchInterceptor;