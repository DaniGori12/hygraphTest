import React from 'react'

export const metadata = {
  title: 'Categoria 4',
}

export default function page({params}:any) {
  return (
    <div className='mt-5'>Categoria 4 {params.slug}</div>
  )
}
