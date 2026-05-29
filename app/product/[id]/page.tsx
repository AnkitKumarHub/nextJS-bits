import React from 'react'

const ProductPageId = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params        // params -> is promise so you have to await for this promise to resolve 
  return (
    <div>ProductPageId {id}</div>
  )
}

export default ProductPageId 