import React from 'react'


export const metadata = {
  title: `Categoria 1`,
}


export default function page({params}:any) {

  
  return (
    <div className='mt-5'>Categoria 1 {params.slug}</div>
  )
}
  