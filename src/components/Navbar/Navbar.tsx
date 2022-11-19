import { DeviceMobile, House, Newspaper, UsersThree } from 'phosphor-react';
import { Text } from '../Text/Text';
import Link from 'next/link'
import { useRouter } from 'next/router';

export interface NavbarProps {
    active: boolean;
}

export function Navbar ({ active }: NavbarProps){
    const router = useRouter()

    return (
        <>
            {
                active ? 
                <div className='flex flex-col w-[400px] h-[90%] absolute left-[-400px] top-[10%] bg-slowpoke-pink-800 items-center duration-300 ease-out transition-all translate-x-full'>
                    <nav>
                    <ul className='flex flex-col mt-8 gap-8 items-center'>
                            <li className={router.route.includes("home") ? '' : ''}>
                                <Link href={`/home`} onClick={() => router.push(`/home`)} className='flex flex-row gap-8 items-center hover:text-slowpoke-white-900'>
                                    <House size={'24px'}/>
                                    <Text size='lg'>Home</Text>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/forum`} onClick={() => router.push(`/forum`)} className='flex flex-row gap-8 items-center hover:text-slowpoke-white-900'>
                                    <UsersThree size={'24px'}/>
                                    <Text size='lg'>Forum</Text>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/pokedex`} onClick={() => router.push(`/pokedex`)} className='flex flex-row gap-8 items-center hover:text-slowpoke-white-900'>
                                    <DeviceMobile size={'24px'}/>
                                    <Text size='lg'>Pokedex</Text>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/news`} onClick={() => router.push(`/news`)} className='flex flex-row gap-8 items-center hover:text-slowpoke-white-900'>
                                    <Newspaper size={'24px'}/>
                                    <Text size='lg'>News</Text>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div> 
                :
                <div className='flex flex-col w-[400px] h-[90%] absolute left-[-400px] top-[10%] bg-slowpoke-pink-800 items-center duration-300 ease-out transition-all invisible'>
                </div> 
            }
        </>
    )
}