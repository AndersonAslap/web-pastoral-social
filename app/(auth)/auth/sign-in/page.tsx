'use client';

import React, { useState, useEffect } from 'react';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Função para atualizar o fundo com um gradiente neutro
    const setBackgroundGradient = () => {
        const width = window.innerWidth;
        if (width >= 1024) {
            return 'linear-gradient(to right, #D3D3D3, #B0BEC5)'; // Gradiente para desktop (cinza claro e azul suave)
        } else if (width >= 768) {
            return 'linear-gradient(to right, #F5F5F5, #B0BEC5)'; // Gradiente para tablet (bege claro e azul suave)
        } else {
            return 'linear-gradient(to right, #F0F0F0, #CFD8DC)'; // Gradiente para mobile (bege claro e cinza claro)
        }
    };

    const [bgGradient, setBgGradient] = useState(setBackgroundGradient);

    // Hook para atualizar o fundo ao redimensionar a tela
    useEffect(() => {
        const handleResize = () => {
            setBgGradient(setBackgroundGradient());
        };

        // Adiciona o evento de resize
        window.addEventListener('resize', handleResize);

        // Remove o evento de resize quando o componente for desmontado
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Lógica de autenticação aqui
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <div
            className="relative flex justify-center items-center min-h-screen"
            style={{
                background: bgGradient, // Usando gradiente dinâmico
                transition: 'background 0.5s ease', // Suaviza a transição do gradiente
            }}
        >
            <div className="w-full max-w-sm p-8 bg-white bg-opacity-80 rounded-lg shadow-xl z-10">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Usuário</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex justify-between items-center mb-6">
                        <button
                            type="submit"
                            className="w-full py-3 text-white bg-gray-600 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            Entrar
                        </button>
                    </div>

                    <div className="text-center">
                        <p className="text-sm text-gray-600">Torne-se um doador</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
