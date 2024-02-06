import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Produto from "../../../model/Produto"
import { deletar, listar } from "../../../service/Api"
import { ToastAlert } from "../../../utils/ToastAlert"

function DeletP() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [produto, setProduto] = useState<Produto>({} as Produto)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await listar(`/produtos/${id}`, setProduto, {
            })
        } catch (error: any) {
            ToastAlert('Produto não encontrado!', 'erro')

        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarProduto() {
        setIsLoading(true)

        try {
            await deletar(`/produtos/${id}`, {
            })

            ToastAlert('Produto apagado!', 'sucesso')

        } catch (error) {
            ToastAlert('Erro ao apagar o produto', 'erro')
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/produtos")
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center py-4'>Deletar Produto</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o produto a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header
                    className='py-2 px-6 bg-indigo-500  text-white font-bold text-2xl'>
                    Produto
                </header>
                <p className='p-8 text-3xl bg-white h-full'>{produto.nome}</p>
                <div className="flex">
                    <button
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button
                        className='w-full text-slate-100 bg-indigo-900  hover:bg-indigo-700
                         flex items-center justify-center'
                        onClick={deletarProduto}
                    >
                        {isLoading ? (
                            <span>Carregando...</span>
                        ) : (
                            <span>Sim</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletP