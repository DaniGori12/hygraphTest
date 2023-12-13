/* eslint-disable @next/next/no-img-element */
"use client"
import { getData } from './service/fetchData'
import { useEffect, useState } from 'react'
import { RichText } from '@graphcms/rich-text-react-renderer'
import Image from 'next/image'

export default function Home() {

  const [data, setData] = useState<any>([])
  const [aside, setAside] = useState<any>([])


  useEffect(() => {
    getAside_()
    getData_()
  }, [])

  const getData_ = async () => {
    const result: any = await getData()
    setData(result?.mains)
    console.log(result.mains)

  }
  const getAside_ = async () => {
    const result: any = await getData()
    setAside(result?.asides)
    console.log(result.asides)

  }



  return (
    <main >
<div className='bg-green-200 py-4 flex flex-col text-center'>
  <h1 className='font-bold flex justify-center'>Mapeo primer Content Model</h1>
      {data?.map((data: any) => (

        <div key={data.id} >
          <h1>
            {data.title}

          </h1>
          <p>
            {data.description}
          </p>
          <div className='bg-blue-200 p-4 items-center flex flex-col gap-2 mt-4'>
          <RichText content={data.body.raw} />
          </div>
<p className='font-bold flex justify-center mt-4'>Mapeo diferentes fotos</p>
          <div className='grid grid-cols-3 gap-5 p-4'>
            {data.images.map((data: any) => (
              <div key={data.id} >
                
                <Image src={data?.url} height={200} width={200} alt="es el alt de los múltiples assets de personas" />
              </div>
            ))}
          </div>

<p className='font-bold flex justify-center mt-4'>Mapeo diferentes fotos como componente</p>
          <div className='flex flex-row justify-center gap-5 my-4 '>
            {data.compMap.map((data: any) => (
              <div key={data.id} className='items-center flex flex-col bg-red-300' >
                <h2>{data.title}</h2>
                <Image src={data?.fotoCom.url} height={200} width={200} alt="es el alt del componente" />
              </div>
            ))}
          </div>
<div className='flex flex-col items-center'>
   <p className='font-bold'>Esta es una foto a secas</p>
          <Image src={data?.foto?.url} height={200} width={200} alt="asdf" />
</div>

        </div>
      ))
      }
      </div>
      <div className='flex flex-col gap-4 my-8 py-4 bg-yellow-200 text-center '>
<h2 className='font-bold'>Esto es otro content</h2>
      {aside?.map((data: any) => (
        <div key={data.id}>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <RichText content={data.body.raw} />
<p>{ data.booleanAside}</p>
        </div>
      ))
    }
    
    </div>
    </main>
  )
}
