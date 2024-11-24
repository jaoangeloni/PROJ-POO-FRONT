import { useAtom, useAtomValue } from "jotai";
import { sessionAtom } from "../storage/session.atom";

export function Header() {
    const session = useAtomValue(sessionAtom)
    console.log(session)
    const [sessionValue, setSessionValue] = useAtom(sessionAtom)

    return (
      <div className="bg-red-700 h-20 flex items-center pr-20 pl-20 justify-between border-b-2 border-solid w-full">
        <h1 className="text-slate-50 text-3xl font-bold justify-start">NewTecs</h1>

        {/* <div className=" justify-between hidden md:flex pr-10 pl-10">
            <ul className="flex">
                <li className="flex pr-5 pl-5 text-xl text-slate-200">Home</li>
                <li className="flex pr-5 pl-5 text-xl text-slate-200">Log-in</li>
            </ul>
        </div> */}

        <div className="text-white">
            {session?
                <div className="flex gap-10">
                    <p>Olá, {session?.name}</p> 
                    <button onClick={() => {
                        setSessionValue(null) 
                    }}>Sair</button>
                </div>
            :
                <button onClick={() => window.location.href = '/login'}>
                    Entrar
                </button>
            }            
        </div>
       
       
      </div>
    );
  }