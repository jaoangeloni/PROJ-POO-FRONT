import { useAtom } from "jotai"
import { sessionAtom } from "../storage/session.atom"
import { useState } from "react"
import { api } from "../services/axios"
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
        <div className="flex flex-col h-screen gap-4 items-center">
            <Header/>

            <div className="flex just justify-center items-center w-full h-[80%]">

                <div className="flex w-[1024px] h-[80%]">

                    <div className="flex flex-col items-center w-[50%] gap-4 justify-center shadow-md shadow-slate-400 p-4 ">
                        <div className="w-28 h-28">
                            <img src="https://cdn-icons-png.flaticon.com/512/3364/3364044.png" alt="" />
                        </div>
                        
                        <h1 className="text-3xl font-bold">Entrar</h1>

                        <div>
                            <h3 className="flex justify-start">Email</h3>
                            <input
                                className="border border-slate-300 w-52 h-1 p-4 rounded-md"
                                placeholder="email@example.com"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        
                    <div>
                        <h3 className="flex justify-start">Password</h3>
                        <input
                            className="border border-slate-300 w-52 h-1 p-4 rounded-md"
                            placeholder="password"
                            type="password"
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        <button className="bg-gradient-to-r from-red-700 to-red-800 text-white flex w-52 h-8 mt-4 justify-center text-lg rounded-md hover:bg-slate-300 shadow-md transition ease-out delay-150 hover:scale-105 duration-300" onClick={handleSubmit}>Log in</button>
                        <p className="text-red-700">{error}</p>
                    </div>

                    </div>

                    <div className="w-full flex flex-col items-center  bg-gradient-to-r from-red-700 to-red-800 justify-center text-2xl shadow-md shadow-slate-400 p-4 "></div>
                    

                </div>

            </div>

            
        </div>
    )
}