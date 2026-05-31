'use client'

import React, { useEffect, useState } from 'react'

const ClientPage = () => {  // you can not use the async-await here as you know now this is a clinet component 
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('https://api.freeapi.app/api/v1/public/randomusers/user/random')
            const data = await res.json();
            console.log(data);
            setData(data);
        }
        fetchData();
    }, []);

    console.log(window) //here you can console  window but on  server component you cant because on the nodejs runtime environment there is no such thing window "no Browser -> no window "

    return (
        <div>
            ClientPage
            <button onClick={() => {
                alert("This is a alert form client!")
            }}>Clik me</button>
        </div>
    )
}

export default ClientPage