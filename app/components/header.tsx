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
    <div>
      {slug?.map((data: any) => (
    <nav  key={data.id}>
      <ul className='flex space-x-4 ' >
    <li><Link href="/">Home</Link></li>
    <li className='group relative dropdown '>
    <div className='flex gap-1 cursor-pointer '>
            <a>Categoria 1</a>
            </div>
            <div className='group-hover:block dropdown-menu  absolute hidden'>
            <ul className='bg-white text-black w-max  rounded p-4'>
        {data.slug.map((data: any)=> (
          <li className='hover:bg-gray-100' key={data.id}><Link href={`/categoria1/${data.slug}`}>{data.slugTitle}</Link></li>
        ))}
            </ul>
            </div>
    </li>
    <li className='group relative dropdown '>
    <div className='flex gap-1 cursor-pointer '>
            <a>Categoria 2</a>
            </div>
            <div className='group-hover:block dropdown-menu  absolute hidden'>
            <ul className='bg-white text-black w-max  rounded p-4'>
        {data.slug2.map((data: any)=> (
          <li className='hover:bg-gray-100' key={data.id}><Link href={`/categoria2/${data.slug}`}>{data.slugTitle}</Link></li>
        ))}
            </ul>
            </div>
    </li>
    <li className='group relative dropdown '>
    <div className='flex gap-1 cursor-pointer '>
            <a>Categoria 3</a>
            </div>
            <div className='group-hover:block dropdown-menu  absolute hidden'>
            <ul className='bg-white text-black w-max  rounded p-4'>
        {data.slug3.map((data: any)=> (
          <li className='hover:bg-gray-100' key={data.id}><Link href={`/categoria3/${data.slug}`}>{data.slugTitle}</Link></li>
        ))}
            </ul>
            </div>
    </li>
    <li className='group relative dropdown '>
    <div className='flex gap-1 cursor-pointer '>
            <a>Categoria 4</a>
            </div>
            <div className='group-hover:block dropdown-menu  absolute hidden'>
            <ul className='bg-white text-black w-max  rounded p-4'>
        {data.slug4.map((data: any)=> (
          <li className='hover:bg-gray-100' key={data.id}><Link href={`/categoria4/${data.slug}`}>{data.slugTitle}</Link></li>
        ))}
            </ul>
            </div>
    </li>
    <li className='group relative dropdown '>
    <div className='flex gap-1 cursor-pointer '>
            <a>Categoria 5</a>
            </div>
            <div className='group-hover:block dropdown-menu  absolute hidden'>
            <ul className='bg-white text-black w-max  rounded p-4'>
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
