import {Content} from '../components/content'
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { useEffect, useState } from 'react';
import { api } from '../services/axios';
import Card from '../components/card';

export function Home() {
  const [news, setNews] = useState()

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

      <div className='max-w-[1366px] p-4 w-full flex flex-col gap-4'>
        <div className='w-full rounded-md p-4 flex justify-end'>
          <button className='bg-green-500 font-bold text-white p-4 rounded-md hover:bg-green-600'
            onClick={() => window.location.href = '/news'}>
              + Nova notícia
          </button>
        </div>

        <Content>
          {news?.map((item) => <Card key={item?.id} props{...item}/>)}
        </Content>
      </div>

          
      <Footer/>
          
    </div>
  );
}
