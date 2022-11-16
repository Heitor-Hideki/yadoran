import { Button } from '@components/Button/Button';
import { Heading } from '@components/Heading/Heading';
import { Text } from '@components/Text/Text';
import { clsx } from 'clsx'
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import React, { ReactNode, useState } from 'react'

export interface PaginationProps {
    className?: string,
    page: number,
    totalPages: number,
    setPage: Function,
}


export function Pagination (props: PaginationProps){
    const onStartHandler = () => {
        props.setPage(0)
    }

    const onLClickHandler = () => {
        if (props.page > 0) {
            props.setPage((page) => page-1)
        } 
        if (props.page === 0) {
            props.setPage(props.totalPages - 1)
        }
    }

    const onRClickHandler = () => {
        if(props.page+1 !== props.totalPages) {
            props.setPage(props.page + 1)
          } else {
            props.setPage(0)
          }
    }

    const onEndHandler = () => {
        props.setPage(props.totalPages - 1)
    }

    return (
        <div className={clsx(
            'flex flex-row w-full justify-between',
            props.className
        )}
        >
            <div className='flex flex-row gap-0'>
                <Button onClick={onStartHandler} className='flex justify-center items-center w-[200px]'><ArrowLeft size={24} /><ArrowLeft size={24} /></Button>
                <Button onClick={onLClickHandler} className='flex justify-center items-center w-[200px]'><ArrowLeft size={24} /></Button>
            </div>
            <Heading size='sm'>Página {props.page + 1} de {props.totalPages}</Heading>
            <div className='flex flex-row gap-0'>
                <Button onClick={onRClickHandler} className='flex justify-center items-center w-[200px]'><ArrowRight size={24} /></Button>
                <Button onClick={onEndHandler} className='flex justify-center items-center w-[200px]'><ArrowRight size={24} /><ArrowRight size={24} /></Button>
            </div>
        </div>
    )
}
