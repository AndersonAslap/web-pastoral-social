// app/home/page.tsx
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Home',
};

// Dados de exemplo para as ações futuras e passadas
const upcomingActions = [
    {
        id: 1,
        title: 'Reunião de planejamento',
        date: '2025-09-18',
        description: 'Reunião para definir as metas do próximo trimestre.',
    },
    {
        id: 2,
        title: 'Treinamento de equipe',
        date: '2025-09-20',
        description: 'Treinamento sobre novos processos e ferramentas.',
    },
    {
        id: 3,
        title: 'Reunião com cliente',
        date: '2025-09-22',
        description: 'Alinhamento sobre o status do projeto e próximos passos.',
    },
];

const pastActions = [
    {
        id: 1,
        title: 'Entrega do relatório',
        date: '2025-09-10',
        description: 'Relatório entregue para o cliente conforme o prazo.',
    },
    {
        id: 2,
        title: 'Revisão de contrato',
        date: '2025-09-12',
        description: 'Revisão final do contrato com cliente antes de assinatura.',
    },
    {
        id: 3,
        title: 'Avaliação de desempenho',
        date: '2025-09-15',
        description: 'Reunião de avaliação de desempenho da equipe.',
    },
];

// Função para determinar o card mais próximo
const getUpcomingCardWithGreenBorder = () => {
    const now = new Date();
    const upcomingSorted = [...upcomingActions].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    return upcomingSorted[0];
};

const ActionCard = ({
    title,
    date,
    description,
    isUpcoming = false,
    isPast = false,
}: {
    title: string;
    date: string;
    description: string;
    isUpcoming?: boolean;
    isPast?: boolean;
}) => {
    return (
        <div
            className={`${isUpcoming ? 'border-4 border-green-500' : ''
                } ${isPast ? 'bg-gray-300 bg-opacity-80' : ''} bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl hover:cursor-pointer duration-300 mb-6`}
        >
            <h3 className="font-semibold text-xl mb-2">{title}</h3>
            <p className="text-sm text-gray-200 mb-4">{date}</p>
            <p className="text-base">{description}</p>

            {isUpcoming && (
                <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
                    Doações Recebidas
                </button>
            )}
        </div>
    );
};

const Home = () => {
    const upcomingWithGreenBorder = getUpcomingCardWithGreenBorder();

    return (
        <div className="container mx-auto px-6 py-10">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
                Ações e Atividades
            </h1>

            <div className="space-y-10">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                        Ações que ocorrerão
                    </h2>
                    {upcomingActions.map((action) => (
                        <ActionCard
                            key={action.id}
                            {...action}
                            isUpcoming={action.id === upcomingWithGreenBorder.id}
                        />
                    ))}
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                        Ações que já ocorreram
                    </h2>
                    {pastActions.map((action) => (
                        <ActionCard key={action.id} {...action} isPast={true} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
