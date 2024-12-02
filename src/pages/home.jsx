import {Content} from '../components/content'
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { useEffect, useState } from 'react';
import { api } from '../services/axios';
import Card from '../components/card';
import { useAtom, useAtomValue } from 'jotai';
import { sessionAtom } from '../storage/session.atom';

export function Home() {
  const [news, setNews] = useState()
  const sessionValue = useAtomValue(sessionAtom)
  const [titulo, setTitulo] = useState()
  const [conteudo, setConteudo] = useState()
  const [image, setImage] = useState()

  const handleSubmit = async() => {
      const file = image?.target?.files[0] ?? null;

      const formData = new FormData();

      formData.append('news', JSON.stringify({
          title: titulo,
          body: conteudo,
          author: {
              id: sessionValue?.id,
              name: sessionValue?.name
          }
      }));
      
      formData.append('file', file);

      await api.post('/news', formData).then((res) => window.location.href = '/') 
  }

  useEffect(() => {
    const fetchNews = async() => {
      const data = await api.get('/news').then(res => res.data);
      setNews(data)
    }
    fetchNews()
  },[])

  return (
    <div className='w-full min-h-screen overflow-x-hidden flex items-center gap-4 justify-start flex-col'>
      
      <Header/>
      {sessionValue !== null && (
      <div className="max-w-[1024px] pb-12 flex flex-col items-center w-full gap-4">
        <input
            className="border border-zinc-500 w-full p-2 rounded-md"
            placeholder="Título"
            type="email"
            onChange={(e) => setTitulo(e.target.value)}
        />

        <textarea
            className="border border-zinc-500 w-full p-2 rounded-md"
            placeholder="Conteúdo"
            onChange={(e) => setConteudo(e.target.value)}
        />
        <div className='w-full flex items-center justify-between'>
        <input type="file" onChange={setImage} />
        <button className="p-3 bg-green-500 text-white cursor-pointer rounded w-24 font-bold" onClick={handleSubmit}>Publicar</button>
        </div>
      </div>)}

      <div className='max-w-[1024px] w-full flex flex-col gap-4'>
        <Content>
          {news?.map((item) => <Card key={item?.id} props{...item}/>)}
        </Content>
      </div>
      <Footer/>
          
    </div>
  );
}
