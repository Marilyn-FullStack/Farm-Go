import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletar, listar } from "../../../service/Api";
import Categoria from "../../../model/Categoria";
import { ToastAlert } from "../../../utils/ToastAlert";


function Delet() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await listar(`/categorias/${id}`, setCategoria, {

      })
    } catch (error: any) {
      ToastAlert('Categoria não encontrada!', 'erro')

    }
  }


  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  async function deletarCategoria() {
    setIsLoading(true)

    try {
      await deletar(`/categorias/${id}`, {

      })

      ToastAlert('Categoria apagada com sucesso', 'sucesso')

    } catch (error) {
      ToastAlert('Erro ao apagar a categoria', 'erro')
    }

    setIsLoading(false)
    retornar()
  }

  function retornar() {
    navigate("/categorias")
  }
  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center py-4'>Deletar Categoria</h1>
      <p className='text-center font-semibold mb-4'>Apagar a categoria?</p>
      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-indigo-500  text-white font-bold text-2xl'>
          Categoria
        </header>
        <p className='p-8 text-3xl bg-white h-full'>{categoria.tipo}</p>
        <div className='flex'>
          <button
            className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
            onClick={retornar}
          >
            Não
          </button>
          <button
            className='w-full text-slate-100 bg-indigo-900  hover:bg-indigo-700
    flex items-center justify-center'
            onClick={deletarCategoria}
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
  );
}

export default Delet;
