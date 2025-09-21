import { parseCookies } from "nookies";

export const requestOptions = (method: string, input?: any) => {
    let token = '';

    const { 'nextauth.admin.user': userAuth } = parseCookies();
    const user_auth = userAuth ? JSON.parse(userAuth) : null;
    
    if (user_auth && user_auth?.user?.token) {
      token = user_auth.user.token;
    }
  
    return {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(input),
    };
  };
  