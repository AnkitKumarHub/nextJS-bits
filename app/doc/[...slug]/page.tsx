//This is catch all Routes when you dont know how deeply nested route is 
//there is one drawback here you can not access the '/doc' page without creating page.tsx -> comes OptionalCatchAllRoute
import React from 'react'

//@ts-ignore
const CatchAllRoute = async({params}) => {
    const {slug} = await params;
    // console.log(slug)            //[ 'getting-started', 'meProfile' ]
  return (
    <div> CatchAllRoute...{slug.join('/')}</div>
  )
}

export default CatchAllRoute
