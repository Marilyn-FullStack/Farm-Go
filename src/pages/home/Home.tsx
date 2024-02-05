

function Home() {
    return (
        <>
            <div className="
                bg-purple-200  
                flex 
                justify-center">
                <div className='
                    container 
                    grid 
                    grid-cols-2 
                    text-indigo-600'>
                    <div className="
                        flex 
                        flex-col 
                        gap-4 
                        items-center 
                        justify-center 
                        py-4">
                        <h2 className='
                            text-5xl 
                            font-bold'>
                          Bem Vindo!
                        </h2>
                        <p className='text-xl'>Farm Go Cuidando da Sua Saude!</p>

                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://ik.imagekit.io/53urd0gwk/fm.png?updatedAt=1707168881323"
                            alt="Imagem com fundo back groud em degrade escala de cores quente até o tom frio com o desenho de um decalque branco com leve sombreamento"
                            className='rounded-lg w-2/2'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home