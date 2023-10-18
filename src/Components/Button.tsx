"use client"
import React from 'react'
import { Button } from '@nextui-org/button';

interface PageProps {
    text: string
}

const ButtonComp: React.FC<PageProps> = ({text}) => {
    return (
        <>
            <div>
                <Button>{text}</Button>
            </div> 
        </>
    )
}

export default ButtonComp