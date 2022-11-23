import { clsx } from 'clsx'
import { Text } from '@components/Text/Text';

export interface TypeBoxProps {
    className?: string;
    type: string
}

export function TypeBox({ className, ...props }: TypeBoxProps) {
    return (
        <div className={clsx('w-20 h-8 bg-slowpoke-pink-900 flex justify-center items-center rounded', className)}>
            <Text size='sm'>{props.type}</Text>
        </div>
    )
}