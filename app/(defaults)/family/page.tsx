'use client';
import Loading from "@/components/layouts/loading";
import { Fragment, Suspense } from "react";
import Link from "next/link";
import { usePagination } from "@/hooks/usePagination";
import { Family } from "@/@types";
import { DataTable } from 'mantine-datatable';

const data: any[] = [
    { id: '1', name: 'Família Silva' },
    { id: '2', name: 'Família Souza' },
    { id: '3', name: 'Família Oliveira' },
    { id: '4', name: 'Família Santos' },
    { id: '5', name: 'Família Costa' },
    { id: '6', name: 'Família Pereira' },
    { id: '7', name: 'Família Almeida' },
    { id: '8', name: 'Família Rocha' },
    { id: '9', name: 'Família Lima' },
    { id: '10', name: 'Família Martins' },
]

const FamilyPage: React.FC = () => {

    //const { data, page, setPage, loading } = usePagination<Family>("/api/products");

    return (
        <Fragment>
            <div className='max-w-[10px]'>
                <Link href="/family/add">
                    <button className="btn btn-primary mt-3">
                        Cadastrar
                    </button>
                </Link>
            </div>

            <div className="panel mt-6">
                <h5 className="mb-5 text-lg font-semibold dark:text-white-light">Famílias</h5>
                <div className="datatables">
                    <DataTable
                        withBorder={false}
                        noRecordsText="No results match your search query"
                        highlightOnHover
                        className="table-hover whitespace-nowrap"
                        records={data}
                        columns={[
                            {
                                accessor: 'name',
                                title: 'Nome'
                            }
                        ]}
                        totalRecords={10}
                        recordsPerPage={10}
                        page={1}
                        onPageChange={() => { }}
                        minHeight={200}
                        paginationText={({ from, to, totalRecords }: { from: number, to: number, totalRecords: number }) => `Exibindo  ${from} 
                        à ${to} de ${totalRecords} registros`}
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default FamilyPage;