import { useAtom } from "jotai";
import { api } from "../services/axios";
import { sessionAtom } from "../storage/session.atom";

export default function Card(props) {
    const [sessionValues, setSessionValues] = useAtom(sessionAtom)

    return(        
        <div className="bg-zinc-100 w-full flex flex-col items-start rounded-lg border">
            <div className='p-4 gap-4 flex justify-between items-start w-full'>
                <div>
                    <p className="font-bold text-lg">{props?.author?.name}</p>
                    <p className='text-red-700 font-bold text-lg' >{props?.title}</p>
                    <p >{props?.body}</p>
                </div>
                {
                    props?.author?.id === sessionValues?.id && (
                        <div className="flex gap-4">
                            <p className=" text-red-500 cursor-pointer" onClick={async() => 
                                await api.delete(`/news/${props?.id}`).then(res => window.location.reload())
                            }>Deletar</p>
                        </div>
                    )
                }
            </div> 
            {props?.image && (<div className="bg-black w-full flex items-center justify-center h-[500px] rounded-b-lg" >
                <img src={`https://res.cloudinary.com/dneit0fsb/image/upload/${props.image}`} className="h-full" />
            </div>)}
            
        </div>
    )
};
  
