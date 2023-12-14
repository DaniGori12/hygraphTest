import React from 'react'

export default function page({params}:any) {
  return (
    <div className='mt-5'>Categoria 1 {params.slug}</div>
  )
}
