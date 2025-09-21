// app/api/auth/route.ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import jwt from 'jsonwebtoken';

export const authHandler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                // Faz a requisição para sua API externa de autenticação
                const res = await fetch('https://api.exemplo.com/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: credentials?.username,
                        password: credentials?.password,
                    }),
                });

                const user = await res.json();

                // Se a autenticação for bem-sucedida, o backend retorna um token JWT
                if (res.ok && user?.token) {
                    return {
                        id: user.id,
                        email: user.email,
                        token: user.token, // Armazena o token retornado pelo backend
                    };
                } else {
                    return null; // Se a autenticação falhar
                }
            },
        }),
    ],
    session: {
        strategy: 'jwt', // Usar JWT para persistir a sessão
    },
    callbacks: {
        async jwt({ token, user }) {
            // Se o usuário foi autenticado, armazena o token JWT na sessão
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.token = user.token; // Armazena o token JWT
            }
            return token;
        },
        async session({ session, token }) {
            // Passa o token JWT para a sessão
            session.id = token.id;
            session.email = token.email;
            session.token = token.token; // Armazena o token JWT na sessão
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET, // Segredo para criptografar a sessão
});

export { authHandler as GET, authHandler as POST };
