import { useAtom } from "jotai"
import { sessionAtom } from "../storage/session.atom"
import { useEffect, useState } from "react"
import { api } from "../services/axios"
import { redirect } from "react-router-dom"
import { Header } from "../components/header"

export function Login(){
    const [sessionValue, setSessionValue] = useAtom(sessionAtom)
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [error, setError] = useState("")

    const handleSubmit = async() => {
        const login = {
            email: email,
            senha: senha
        }

        const data = await api.post('/users/login',login)
        .then((res) => {
            setSessionValue(res?.data)
            window.location.href = '/'
        })
        .catch((err) =>  setError(err?.status === 404? "Usuário inválido!" : "Senha inválida!"))

    }

    return(
        <div className="flex flex-col gap-4 items-center">
            <Header/>
            <div className="max-w-[1366px] flex flex-col items-center w-full gap-4">

                <input
                    className="border border-zinc-500 w-full p-4 rounded-md"
                    placeholder="Email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="border border-zinc-500 w-full p-4 rounded-md"
                    placeholder="Senha"
                    type="password"
                    onChange={(e) => setSenha(e.target.value)}
                />
                <button className="p-3 bg-green-500 text-white cursor-pointer rounded w-full" onClick={handleSubmit}>Log in</button>
                <p className="text-red-500">{error}</p>
            </div>
        </div>
    )
}