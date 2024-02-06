import { useEffect, useState } from "react";
import Categoria from "../../../model/Categoria";
import { listar } from "../../../service/Api";
import CardCategorias from "../card/Card";

function Lista() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    await listar('/categorias', setCategorias, {
    });
}
  useEffect(() => {
    buscarCategorias();
  }, []);

  return (
    <div className="bg-gray-200 flex justify-center">
      <div className="my-4 container flex flex-col">
        {categorias.length === 0 ? (
          <p className="text-center">Carregando...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <CardCategorias key={categoria.id} categoria={categoria} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Lista;

