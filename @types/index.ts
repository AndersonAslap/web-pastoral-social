export type Family = {
    id?: number | null;
    nomeRepresentante: string;
    idade: number | null;
    idComunidade: number | null;
    idDificuldade: number | null;
    cpfRg: string;
    telefone: string;
    endereco: string;
    qtdPessoasResidencia: number | null;
    qtdPessoasEmpregadas: number | null;
    criancasFrequentamEscola: boolean | null;
    membroComProblemaSaude: boolean | null;
    jaRecebeuAjuda: boolean | null;
    desejaParticiparCursos: boolean | null;
    observacao: string;
    outros: string;
};
