import Head from 'next/head'
import { Heading } from '../src/components/Heading/Heading'
import { Text } from '../src/components/Text/Text'
import { TextInput } from '../src/components/TextInput/TextInput'
import { Logo } from '../src/logo'
import { Envelope, Lock } from 'phosphor-react';
import { Checkbox } from '../src/components/Checkbox/Checkbox'
import { Button } from '../src/components/Button/Button'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { useStore } from 'stores/index'
import { observer } from 'mobx-react';

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {
    userStore: { login, valid },
    toastStore: { addToast, messages }
  } = useStore()

  const router = useRouter()

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(email, password)
    login(email, password)
  }

  useEffect(() => {
    if (valid === true) {
      router.push(`/home`)
    }
  }, [valid])

  return (
    <div className='w-screen h-screen bg-slowpoke-beige-800 flex items-center justify-center text-slowpoke-black-900 flex-col'>
      <header className='flex flex-col items-center'>
        <Logo className=''/>
        <Heading size='lg' className='mt-8'>The Slowbros</Heading>
        <Text size='lg' className='text-slowpoke-gray-100 mt-[1px]'>Faça login para acessar a plataforma</Text>
      </header>

      <form className='flex flex-col items-stretch mt-8 w-full max-w-[400px] gap-6'>
        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text className='font-semibold'>E-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type='email' id='email' placeholder='Digite seu e-mail' value={email} onChange={(event) => setEmail(event.target.value)}/>
          </TextInput.Root>
        </label>

        <label htmlFor='password' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type='password' id='password' placeholder='Digite sua senha' value={password} onChange={(event) => setPassword(event.target.value)}/>
          </TextInput.Root>
        </label>

        <label htmlFor='rememberlogin' className='flex items-center gap-2'>
          <Checkbox id='rememberlogin'/>
          <Text size='sm'>Manter login</Text>
        </label>

        <Button type='button' className='mt-4' onClick={onSubmitHandler}>
          <Text size='sm'>
            Login
          </Text>
        </Button>
      </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm'>
          <a href={`/home`} onClick={() => router.push(`/home`)} className='text-slowpoke-gray-100 underline hover:text-slowpoke-white-900'>Esqueceu sua senha?</a>
        </Text>
        <Text asChild size='sm'>
          <a href={`/signup`} onClick={() => router.push(`/signup`)} className='text-slowpoke-gray-100 underline hover:text-slowpoke-white-900'>Cadastre-se</a>
        </Text>
      </footer>
    </div>
  )
}

export default observer(LoginPage)