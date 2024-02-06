import { useEffect, useState } from 'react';
import Produto from '../../../model/Produto';
import { listar } from '../../../service/Api';
import CardP from '../cardp/CardP';

function ListaHome() {

  const [produtos, setProdutos] = useState<Produto[]>([]);

  const token = '';

  async function buscarProdutos() {
    await listar('/produtos', setProdutos, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);
  return (
    <div className="bg-gray-200 flex justify-center">
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {produtos.length === 0 ? (
          <p className="text-center">Carregando...</p>
        ) : (
          produtos.map((produto) => (
            <CardP key={produto.id} produto={produto} />
          ))
        )}
      </div>
    </div>
  );
}

export default ListaHome;


