import { Header } from '@components/Header/Header';
import { Navbar } from '@components/Navbar/Navbar';
import { PageHeading } from '@components/PageHeading';
import { House } from 'phosphor-react';
import React, { ReactNode, useState } from 'react'

export interface PageLayoutProps {
    children: ReactNode;
    PageIcon: ReactNode;
    PageName: string;
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
            <div className='w-screen mt-[5%] pt-8 pl-8 pr-8' onClick={onClickHandler}>
                <div className='flex flex-row items-center justify-start gap-3'>
                    <PageHeading.Icon>
                        {props.PageIcon}
                    </PageHeading.Icon>
                    <PageHeading.Root>
                        {props.PageName}
                    </PageHeading.Root>
                </div>
                {props.children}
            </div>
        </div>
    )
}
