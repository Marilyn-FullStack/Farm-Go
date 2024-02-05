import { GithubLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-purple-200 text-indigo-600">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>Farm Go Generation | Copyright: {data}</p>
                    <p className='text-lg'>Contato Dev</p>
                    <div className='flex gap-3'>
                    <a href='https://www.linkedin.com/in/mlls/' target="_blank">
                                <LinkedinLogo size={48} weight='bold' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 />
                            </a>
                            <a href='https://github.com/Marilyn-FullStack' target="_blank">
                                <GithubLogo size={48} weight='bold' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 />
                            </a>
                            <a href='https://wa.me/message/M26HMQRIVWBBP1' target="_blank">
                                <WhatsappLogo size={48} weight='bold' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 />
                            </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer