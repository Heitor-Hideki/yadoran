import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'
import { DeviceMobile, House, List, Newspaper, UserCircle, UsersThree, X } from 'phosphor-react';
import React, { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode, useState } from 'react'
import { Logo } from '../../logo';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';

export interface PageLayoutRootProps {
    children: ReactNode;
}

export interface PageLayoutHeaderProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    // setActive: Function;
    // active: boolean;
}

export interface PageLayoutNavbarProps {
    // active: boolean;
}

const [active, setActive] = useState(false)

function PageLayoutRoot (props: PageLayoutRootProps){
    return (
        <div className=
        'flex h-screen w-screen bg-slowpoke-beige-800'
        >
            {props.children}
        </div>
    )
}

const PageLayoutHeader = (props: PageLayoutHeaderProps) => {
    return (
            <div className={'flex flex-row w-screen h-[10%] fixed top-0 left-0 bg-slowpoke-pink-900 justify-between items-center px-6 py-[22px]'} >
                {
                    active ?
                    <div className='flex flex-row gap-4 items-center'>
                        <List size={'32px'} onClick={setActive}/> <Logo className='w-8 h-8' /> <Heading size='sm'>The Slowbros</Heading>
                    </div>
                    :
                    <div className='flex flex-row gap-4 items-center'>
                        <X size={'32px'} onClick={setActive}/> <Logo className='w-8 h-8' /> <Heading size='sm'>The Slowbros</Heading>
                    </div>
                }
                <div className='flex flex-row items-center'>
                    <UserCircle size={'32px'}/> <Heading size='sm'>User.name</Heading>
                </div>
            </div>
    )
}

function PageLayoutNavbar (props: PageLayoutNavbarProps){
    return (
        <>
            {
                active ? 
                <div className='flex flex-col w-[400px] h-[90%] fixed left-0 top-[10%] bg-slowpoke-pink-800 items-center'>
                    <nav>
                    <ul className='flex flex-col mt-8 gap-8 items-center'>
                            <li className='flex flex-row gap-8 items-center'>
                                <House size={'24px'}/>
                                <Text size='lg'>Home</Text>
                            </li>
                            <li className='flex flex-row gap-8 items-center'>
                                <UsersThree size={'24px'}/>
                                <Text size='lg'>Forum</Text>
                            </li>
                            <li className='flex flex-row gap-8 items-center'>
                                <DeviceMobile size={'24px'}/>
                                <Text size='lg'>Pokedex</Text>
                            </li>
                            <li className='flex flex-row gap-8 items-center'>
                                <Newspaper size={'24px'}/>
                                <Text size='lg'>News</Text>
                            </li>
                        </ul>
                    </nav>
                </div> 
                :
                ''
            }
        </>
    )
}

export const PageLayout = {
    Root: PageLayoutRoot,
    Header: PageLayoutHeader,
    Navbar: PageLayoutNavbar,
}