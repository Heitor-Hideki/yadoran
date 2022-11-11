import { DeviceMobile, House, Newspaper, UsersThree } from 'phosphor-react';
import { Text } from '../Text/Text';

export interface NavbarProps {
    active: boolean;
}

export function Navbar ({ active }: NavbarProps){
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