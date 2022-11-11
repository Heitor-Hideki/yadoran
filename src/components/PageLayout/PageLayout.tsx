import { Header } from '@components/Header/Header';
import { Navbar } from '@components/Navbar/Navbar';
import React, { ReactNode, useState } from 'react'

export interface PageLayoutProps {
    children: ReactNode;
}


export function PageLayout (props: PageLayoutProps){
    const [active, setActive] = useState(false) 
    const onClickHandler = () => {
        setActive(false)
    }

    return (
        <div className=
        'flex h-screen w-screen bg-slowpoke-beige-800'
        >
            <Header active={active} setActive={setActive} />
            <Navbar active={active} />
            <div className='w-screen mt-[5%]' onClick={onClickHandler}>
                {props.children}
            </div>
        </div>
    )
}
