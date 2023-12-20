import React from 'react'

export const metadata = {
  title: 'Categoria 5',
}

export default function page({params}:any) {
  return (
    <div className='mt-5'>Categoria 5 {params.slug}</div>
  )
}
