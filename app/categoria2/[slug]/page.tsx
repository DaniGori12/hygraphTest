import React from 'react'

export const metadata = {
  title: 'Categoria 2',
}

export default function page({params}:any) {
  return (
    <div className='mt-5'>Categoria 2 {params.slug}</div>
  )
}
