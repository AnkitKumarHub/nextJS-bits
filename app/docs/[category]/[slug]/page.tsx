import React from 'react'

const DynapmicSlugPage = async({params}: {params: Promise<{category:string, slug:string}>}) => {
    const {category, slug} = await params;
  return (
    <div>DynapmicSlugPage Category:{category}, Slug:{slug}</div>
  )
}

export default DynapmicSlugPage