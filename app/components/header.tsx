"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getData } from '../service/fetchData'

export default function Header() {

const [slug, setSlug] = useState<any>([])

useEffect(() => {
 getSlug_()
  
}, [])

  const getSlug_ = async () => {
    const result: any = await getData()
    setSlug(result?.slugsWebs)
    console.log(result.slugsWebs)
  }

  return (
    <div className='py-5 w-screen flex flex-row justify-center bg-black text-white'>
      {slug?.map((data: any) => (
    <nav  key={data.id}>
      <ul className='flex space-x-4 ' >
    <li><Link href="/">Home</Link></li>
    <li className='group relative '>
    <div className='flex  cursor-pointer '>
            <p>Categoria 1</p>
            </div>
            <div className='group-hover:block  absolute hidden'>
            <ul className='bg-white text-black w-max  rounded p-4'>
        {data.slug.map((data: any)=> (
          <li className='hover:bg-gray-100' key={data.id}><Link href={`/categoria1/${data.slug}`}>{data.slugTitle}</Link></li>
        ))}
            </ul>
            </div>
    </li>
    <li className='group relative'>
    <div className='flex cursor-pointer '>
            <p>Categoria 2</p>
            </div>
            <div className='group-hover:block absolute hidden'>
            <ul className='bg-white text-black w-max  rounded p-4'>
        {data.slug2.map((data: any)=> (
          <li className='hover:bg-gray-100' key={data.id}><Link href={`/categoria2/${data.slug}`}>{data.slugTitle}</Link></li>
        ))}
            </ul>
            </div>
    </li>
    <li className='group relative'>
    <div className='flex cursor-pointer '>
            <p>Categoria 3</p>
            </div>
            <div className='group-hover:block absolute hidden'>
            <ul className='bg-white text-black w-max  rounded p-4'>
        {data.slug3.map((data: any)=> (
          <li className='hover:bg-gray-100' key={data.id}><Link href={`/categoria3/${data.slug}`}>{data.slugTitle}</Link></li>
        ))}
            </ul>
            </div>
    </li>
    <li className='group relative '>
    <div className='flex cursor-pointer '>
            <p>Categoria 4</p>
            </div>
            <div className='group-hover:block absolute hidden'>
            <ul className='bg-white text-black w-max  rounded p-4'>
        {data.slug4.map((data: any)=> (
          <li className='hover:bg-gray-100' key={data.id}><Link href={`/categoria4/${data.slug}`}>{data.slugTitle}</Link></li>
        ))}
            </ul>
            </div>
    </li>
    <li className='group relative '>
    <div className='flex cursor-pointer '>
            <p>Categoria 5</p>
            </div>
            <div className='group-hover:block absolute hidden'>
            <ul className='bg-white text-black w-max rounded p-4'>
        {data.slug5.map((data: any)=> (
          <li className='hover:bg-gray-100' key={data.id}><Link href={`/categoria5/${data.slug}`}>{data.slugTitle}</Link></li>
        ))}
            </ul>
            </div>
    </li>


      </ul>
    </nav>
    ))}
    </div>
  )
}
