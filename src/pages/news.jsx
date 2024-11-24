import { useAtomValue } from "jotai"
import { sessionAtom } from "../storage/session.atom"
import { api } from "../services/axios"
import { Header } from "../components/header"
import { useState } from "react"

export function News(){
    const session = useAtomValue(sessionAtom)
    const [titulo, setTitulo] = useState()
    const [conteudo, setConteudo] = useState()

    const handleSubmit = async() => {
        const noticia = {
            title: titulo,
            body: conteudo,
            author: {
                id: session?.id,
                name: session?.name
            }
        }
        await api.post('/news', noticia).then((res) => window.location.href = '/') 
    }

    return(
        <div className="flex flex-col gap-4 items-center">
            <Header/>
            <div className="max-w-[1366px] flex flex-col items-center w-full gap-4">

                <input
                    className="border border-zinc-500 w-full p-4 rounded-md"
                    placeholder="Título"
                    type="email"
                    onChange={(e) => setTitulo(e.target.value)}
                />

                <textarea
                    className="border border-zinc-500 w-full p-4 rounded-md"
                    placeholder="Conteúdo"
                    onChange={(e) => setConteudo(e.target.value)}
                />
                <button className="p-3 bg-green-500 text-white cursor-pointer rounded w-full" onClick={handleSubmit}>Log in</button>
            </div>
        </div>
    )
}