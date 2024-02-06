import { User, ShoppingCart, MagnifyingGlass } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='
      w-full 
      bg-purple-200  
      text-red-500 
      font-bold
      flex 
      justify-center 
      py-4'>
      <div className="
        container 
        flex 
        justify-between 
        text-lg">
        <Link to='/home'>
          <img
            src="https://ik.imagekit.io/53urd0gwk/icon.png?updatedAt=1707169460172"
            alt="Logo"
            className='w-60'
          />
        </Link>

        <div className="flex-1 flex 
          justify-center 
          items-center 
          relative w-40
          text-red-500 ">
          <form>
            <input
              className="h-10 w-90
              rounded-lg px-6 py-6 
              focus:outline-none"
              type="search"
              placeholder="Encontre seu medicamento"
              id="busca"
              name="busca"
              required
            />
            <button
              type="submit"
              className="h-9 w-9 p-2.5 ms-2 
                 text-sm font-medium 
                 text-white 
                 bg-indigo-500 
                 hover:bg-indigo-900 
                 rounded-lg border 
                 border-indigo-700 
                 focus:ring-4 
                 focus:outline-none 
                 focus:ring-blue-300 
                 dark:bg-indigo-600 
                 dark:hover:bg-indigo-700 
                 dark:focus:ring-indigo-800">
              <MagnifyingGlass size={16} weight="bold" />
            </button>
          </form>
        </div>

        <div className='flex gap-4 py-4'>
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-red-500 p-2 focus:outline-none"
            >
              ☰
            </button>
          </div>
          <div className="hidden lg:flex gap-4">
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            <Link to='/cadcategoria' className='hover:underline'>Nova Categoria</Link>
            <User size={32} weight='bold' />
            <ShoppingCart size={32} weight='bold' />
          </div>
        </div>
      </div>

      {/* Menu de Hambúrguer */}
      {menuOpen && (
        <div className="lg:hidden absolute top-16 right-0 bg-white p-4 shadow-md rounded-lg">
          <div className="flex flex-col gap-2">
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            <Link to='/cadcategoria' className='hover:underline'>Nova Categoria</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
