export default function Card(props) {
    return(        
        <div className="bg-zinc-100 w-full flex flex-col items-start rounded-lg">
            <img 
                src='https://coreui.io/react/docs/static/react-83088efde08a5dedde9f67a954cb4b5b.jpg' 
                alt='Card Image' 
                className='w-auto object-cover rounded-lg rounded-b-none'
            />   
            <div className='p-4 flex flex-col gap-4 items-start'>
                <p className='text-red-700  w-auto font-bold text-lg' >{props?.title}</p>
                <p className='text-black w-auto text-start text-sm' >{props?.body}</p>
            </div> 
            <p>Autor: {props?.author?.name}</p>
        </div>
    )
};
  
