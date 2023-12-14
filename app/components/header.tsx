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
          <li className='hover:bg-gray-100' key={data.id}><Link href={`/categoria1/${data.slug}`}>{data.title}</Link></li>
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
              <li className='hover:bg-gray-100'><Link href="/categoria2/subcategoria1">Subcategoria 1</Link></li>
              <li className='hover:bg-gray-100'><Link href="/categoria2/subcategoria2">Subcategoria 2</Link></li>
              <li className='hover:bg-gray-100'><Link href="/categoria2/subcategoria3">Subcategoria 3</Link></li>
              <li className='hover:bg-gray-100'><Link href="/categoria2/subcategoria4">Subcategoria 4</Link></li>
              <li className='hover:bg-gray-100'><Link href="/categoria2/subcategoria5">Subcategoria 5</Link></li>


            </ul>
            </div>
    </li>
    <li className='group relative dropdown '>
    <div className='flex gap-1 cursor-pointer '>
            <a>Categoria 3</a>
           
            </div>
            <div className='group-hover:block dropdown-menu  absolute hidden'>
            <ul className='bg-white text-black w-max  rounded p-4'>
              <li className='hover:bg-gray-100'><Link href="/categoria3/subcategoria1">Subcategoria 1</Link></li>
              <li className='hover:bg-gray-100'><Link href="/categoria3/subcategoria2">Subcategoria 2</Link></li>
              <li className='hover:bg-gray-100'><Link href="/categoria3/subcategoria3">Subcategoria 3</Link></li>
              <li className='hover:bg-gray-100'><Link href="/categoria3/subcategoria4">Subcategoria 4</Link></li>
              <li className='hover:bg-gray-100'><Link href="/categoria3/subcategoria5">Subcategoria 5</Link></li>


            </ul>
            </div>
    </li>
    <li className='group relative dropdown '>
    <div className='flex gap-1 cursor-pointer '>
            <a>Categoria 4</a>
           
            </div>
            <div className='group-hover:block dropdown-menu  absolute hidden'>
            <ul className='bg-white text-black w-max  rounded p-4'>
              <li className='hover:bg-gray-100'><Link href="/categoria4/subcategoria1">Subcategoria 1</Link></li>
              <li className='hover:bg-gray-100'><Link href="/categoria4/subcategoria2">Subcategoria 2</Link></li>
              <li className='hover:bg-gray-100'><Link href="/categoria4/subcategoria3">Subcategoria 3</Link></li>
              <li className='hover:bg-gray-100'><Link href="/categoria4/subcategoria4">Subcategoria 4</Link></li>
              <li className='hover:bg-gray-100'><Link href="/categoria4/subcategoria5">Subcategoria 5</Link></li>


            </ul>
            </div>
    </li>
    <li className='group relative dropdown '>
    <div className='flex gap-1 cursor-pointer '>
            <a>Categoria 5</a>
           
            </div>
            <div className='group-hover:block dropdown-menu  absolute hidden'>
            <ul className='bg-white text-black w-max  rounded p-4'>
              <li className='hover:bg-gray-100'><Link href="/categoria5/subcategoria1">Subcategoria 1</Link></li>
              <li className='hover:bg-gray-100'><Link href="/categoria5/subcategoria2">Subcategoria 2</Link></li>
              <li className='hover:bg-gray-100'><Link href="/categoria5/subcategoria3">Subcategoria 3</Link></li>
              <li className='hover:bg-gray-100'><Link href="/categoria5/subcategoria4">Subcategoria 4</Link></li>
              <li className='hover:bg-gray-100'><Link href="/categoria5/subcategoria5">Subcategoria 5</Link></li>


            </ul>
            </div>
    </li>

      </ul>
    </nav>
    ))}
    </div>
  )
}
