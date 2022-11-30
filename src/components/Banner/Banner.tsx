import clsx from 'clsx';
import React, { ReactNode } from 'react'
import { Heading } from '../Heading/Heading';

interface BannerRootProps{
    children: ReactNode,
    className?: string
}

interface BannerHeaderProps{
    title: string,
    className?: string
}

interface BannerFrameProps{
    url: string,
    className?: string
}


const BannerRoot = (props: BannerRootProps) => {
    return (
            <div className={clsx('bg-transparent flex flex-col justify-center items-center', props.className)}>
                {props.children}
            </div>
    )
}

const BannerHeader = (props: BannerHeaderProps) => {
    return (
            <div className={clsx('w-full h-[10%] bg-slowpoke-pink-900 rounded-t flex justify-center items-center', props.className)}>
                <Heading size='sm'>{props.title}</Heading>
            </div>
    )
}

const BannerFrame = (props: BannerFrameProps) => {
    return (
            <iframe className={clsx('w-full h-[90%] rounded-t flex justify-center items-center', props.className)} src={props.url}>
            </iframe>
    )
}

export const Banner = {
    Root: BannerRoot,
    Header: BannerHeader,
    Frame: BannerFrame,
}