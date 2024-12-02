import { useAtom, useAtomValue } from "jotai";
import { sessionAtom } from "../storage/session.atom";

export function Header() {
    const session = useAtomValue(sessionAtom)
    const [sessionValue, setSessionValue] = useAtom(sessionAtom)

    return (
      <div className="bg-white h-20 border-b-2 border-solid w-full flex items-cente justify-center">
        <div className="max-w-[1024px] flex items-center justify-between w-full">
            <h1 className="text-red-700 text-3xl font-bold justify-start cursor-pointer" onClick={() => window.location.href = '/'}>NewTecs</h1>

            <div className="text-red-700">
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
       
       
      </div>
    );
  }