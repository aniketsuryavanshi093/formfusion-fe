"use client"
import React from 'react'
import { Button } from '@nextui-org/button';

type responseData = {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}

interface pageProps {
    response: responseData[],
    setUsername: (id: any) => void
}

const ButtonComp: React.FC<pageProps> = ({ response, setUsername }) => {
    return (
        <>
            <ul>
                {
                    response.map((item) => (
                        <div key={item.id} className='flex justify-between w-full'>
                            <li>{item.title}</li>
                            <button onClick={() => setUsername(item.userId)}>click</button>
                        </div>
                    ))
                }
            </ul>
        </>
        // <button >Click me</button>
    )
}

export default ButtonComp