'use client';

import { Family } from "@/@types";
import { Form, Formik, Field, ErrorMessage } from 'formik';
import MaskedInput from 'react-text-mask';
import * as Yup from 'yup';

// Valores iniciais
const INIT_STATE: Family = {
    nomeRepresentante: "",
    idade: null,
    idComunidade: null,
    idDificuldade: null,
    cpfRg: "",
    telefone: "",
    endereco: "",
    qtdPessoasResidencia: null,
    qtdPessoasEmpregadas: null,
    criancasFrequentamEscola: false,
    membroComProblemaSaude: false,
    jaRecebeuAjuda: false,
    desejaParticiparCursos: false,
    observacao: "",
    outros: ""
};

// Schema Yup
const FamilySchema = Yup.object().shape({
    nomeRepresentante: Yup.string().required("Informe o nome do representante"),
    idade: Yup.number()
        .nullable()
        .typeError("Idade deve ser numérica")
        .min(0, "Idade inválida")
        .required("Informe a idade"),
    cpfRg: Yup.string().required("Informe o CPF/RG"),
    telefone: Yup.string()
        .required("Informe o telefone")
        .matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, "Telefone inválido"),
    endereco: Yup.string().required("Informe o endereço"),
    qtdPessoasResidencia: Yup.number()
        .nullable()
        .typeError("Número inválido")
        .required("Informe a quantidade de pessoas na residência"),
});

const FamilyAddForm: React.FC = () => {
    const handleSubmit = async (values: Family) => {
        console.log("Form enviado:", values);
        // aqui entra sua lógica de envio (API, etc)
    };

    return (
        <Formik
            initialValues={INIT_STATE}
            onSubmit={handleSubmit}
            validationSchema={FamilySchema}
        >
            {({ errors, touched, isSubmitting }) => (
                <Form className="grid grid-cols-12 gap-6 panel">
                    {/* ================= Dados do Representante ================= */}
                    <div className="col-span-12">
                        <h2 className="text-lg font-semibold mb-2">Dados do Representante</h2>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12 md:col-span-8">
                                <label>Nome do Representante</label>
                                <Field name="nomeRepresentante" type="text" className="form-input" />
                                <ErrorMessage name="nomeRepresentante" component="div" className="text-danger text-sm mt-1" />
                            </div>

                            <div className="col-span-12 md:col-span-4">
                                <label>Idade</label>
                                <Field name="idade" type="number" className="form-input" />
                                <ErrorMessage name="idade" component="div" className="text-danger text-sm mt-1" />
                            </div>

                            <div className="col-span-12 md:col-span-6">
                                <label>CPF/RG</label>
                                <Field name="cpfRg" type="text" className="form-input" />
                                <ErrorMessage name="cpfRg" component="div" className="text-danger text-sm mt-1" />
                            </div>

                            <div className="col-span-12 md:col-span-6">
                                <label>Telefone</label>
                                <Field name="telefone">
                                    {({ field }: any) => (
                                        <MaskedInput
                                            {...field}
                                            mask={[
                                                "(", /[0-9]/, /[0-9]/, ")",
                                                " ", /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/,
                                                "-", /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/
                                            ]}
                                            className="form-input"
                                            placeholder="(__) _____-____"
                                        />
                                    )}
                                </Field>
                                <ErrorMessage name="telefone" component="div" className="text-danger text-sm mt-1" />
                            </div>
                        </div>
                    </div>

                    {/* ================= Dados da Residência ================= */}
                    <div className="col-span-12">
                        <h2 className="text-lg font-semibold mb-2">Dados da Residência</h2>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12 md:col-span-8">
                                <label>Endereço</label>
                                <Field name="endereco" type="text" className="form-input" />
                                <ErrorMessage name="endereco" component="div" className="text-danger text-sm mt-1" />
                            </div>

                            <div className="col-span-12 md:col-span-4">
                                <label>Comunidade</label>
                                <Field as="select" name="idComunidade" className="form-select">
                                    <option value="">Selecione</option>
                                    <option value="1">Comunidade 1</option>
                                    <option value="2">Comunidade 2</option>
                                </Field>
                            </div>

                            <div className="col-span-12 md:col-span-6">
                                <label>Qtd. Pessoas na Residência</label>
                                <Field name="qtdPessoasResidencia" type="number" className="form-input" />
                                <ErrorMessage name="qtdPessoasResidencia" component="div" className="text-danger text-sm mt-1" />
                            </div>

                            <div className="col-span-12 md:col-span-6">
                                <label>Qtd. Pessoas Empregadas</label>
                                <Field name="qtdPessoasEmpregadas" type="number" className="form-input" />
                            </div>
                        </div>
                    </div>

                    {/* ================= Outras Informações ================= */}
                    <div className="col-span-12">
                        <h2 className="text-lg font-semibold mb-2">Outras Informações</h2>
                        <div className="grid grid-cols-12 gap-4">
                            <label className="col-span-12 md:col-span-6 flex gap-2 items-center">
                                <Field type="checkbox" name="criancasFrequentamEscola" />
                                Crianças frequentam a escola?
                            </label>

                            <label className="col-span-12 md:col-span-6 flex gap-2 items-center">
                                <Field type="checkbox" name="membroComProblemaSaude" />
                                Membro com problema de saúde?
                            </label>

                            <label className="col-span-12 md:col-span-6 flex gap-2 items-center">
                                <Field type="checkbox" name="jaRecebeuAjuda" />
                                Já recebeu ajuda?
                            </label>

                            <label className="col-span-12 md:col-span-6 flex gap-2 items-center">
                                <Field type="checkbox" name="desejaParticiparCursos" />
                                Deseja participar de cursos?
                            </label>
                        </div>
                    </div>

                    {/* ================= Observações e Outros ================= */}
                    <div className="col-span-12">
                        <h2 className="text-lg font-semibold mb-2">Observações e Outros</h2>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12">
                                <label>Observações</label>
                                <Field as="textarea" name="observacao" rows={3} className="form-textarea" />
                            </div>

                            <div className="col-span-12">
                                <label>Outros</label>
                                <Field as="textarea" name="outros" rows={3} className="form-textarea" />
                            </div>
                        </div>
                    </div>

                    {/* ================= Botões ================= */}
                    <div className="col-span-12 flex justify-end gap-2 mt-4">
                        <button type="reset" className="btn btn-danger">
                            Cancelar
                        </button>
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            {isSubmitting
                                ? <span className="animate-spin border-2 border-white border-l-transparent rounded-full w-5 h-5 inline-block align-middle"></span>
                                : <span>Salvar</span>
                            }
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default FamilyAddForm;
