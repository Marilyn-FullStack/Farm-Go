import { useState, useEffect } from 'react';
import Produto from '../../../model/Produto';
import { listar } from '../../../service/Api';
import CardProdutos from '../cardp/CardP';

function ListarP() {
  const [produtos, setProdutos] = useState<Produto[]>([]);


  async function buscarProdutos() {
    await listar('/produtos', setProdutos, {});
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
            <CardProdutos key={produto.id} produto={produto} />
          ))
        )}
      </div>
    </div>
  );
}

export default ListarP;
