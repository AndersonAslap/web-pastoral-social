import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
    interface User {
        id: string;
        username: string;
        token: string; // O token JWT retornado pelo backend
    }

    interface Session extends DefaultSession {
        user: User;
        token: string; // Adicionando o token à sessão
    }

    interface JWT {
        id: string;
        email: string;
        token: string; // O token JWT
    }
}
