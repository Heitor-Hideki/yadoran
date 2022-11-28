import { List, UserCircle, X } from 'phosphor-react';
import React from 'react'
import { Logo } from '../../logo';
import { Heading } from '../Heading/Heading';

export interface HeaderProps{
    setActive: Function;
    active: boolean;
}

export const Header = ({ setActive, active }: HeaderProps) => {
    const onClickHandler = () => {
        setActive((value: boolean) => !value)
    }

    return (
            <div className={'flex flex-row w-screen h-[100px] fixed top-0 left-0 bg-slowpoke-pink-900 justify-between items-center px-6 py-[22px]'} >
                {
                    !active ?
                    <div className='flex flex-row gap-4 items-center justify-start'>
                        <List size={'32px'} onClick={onClickHandler} className='cursor-pointer hover:text-slowpoke-white-900'/> <Logo className='w-12 h-12' /> <Heading size='md'>The Slowbros</Heading>
                    </div>
                    :
                    <div className='flex flex-row gap-4 items-center'>
                        <X size={'32px'} onClick={onClickHandler} className='cursor-pointer hover:text-slowpoke-white-900'/> <Logo className='w-12 h-12' /> <Heading size='md'>The Slowbros</Heading>
                    </div>
                }
                <div className='flex flex-row items-center'>
                    <UserCircle size={'32px'}/> <Heading size='sm'>User.name</Heading>
                </div>
            </div>
    )
}
