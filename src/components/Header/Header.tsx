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
            <div className={'flex flex-row w-screen h-[10%] fixed top-0 left-0 bg-slowpoke-pink-900 justify-between items-center px-6 py-[22px]'} >
                {
                    !active ?
                    <div className='flex flex-row gap-4 items-center'>
                        <List size={'32px'} onClick={onClickHandler} className='cursor-pointer'/> <Logo className='w-8 h-8' /> <Heading size='sm'>The Slowbros</Heading>
                    </div>
                    :
                    <div className='flex flex-row gap-4 items-center'>
                        <X size={'32px'} onClick={onClickHandler} className='cursor-pointer'/> <Logo className='w-8 h-8' /> <Heading size='sm'>The Slowbros</Heading>
                    </div>
                }
                <div className='flex flex-row items-center'>
                    <UserCircle size={'32px'}/> <Heading size='sm'>User.name</Heading>
                </div>
            </div>
    )
}
