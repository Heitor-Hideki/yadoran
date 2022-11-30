import { Heading } from "../../src/components/Heading/Heading";
import { Text } from "../../src/components/Text/Text";
import { TextInput } from "../../src/components/TextInput/TextInput";
import { Envelope, Lock, User } from 'phosphor-react';
import { Logo } from "../../src/logo";
import { Button } from "../../src/components/Button/Button";
import { useEffect, useState } from "react";
import { useStore } from "stores/index";
import { useRouter } from "next/router";
import { observer } from 'mobx-react';

function SignUpPage () {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [warning, setWarning] = useState('')

  const {
    userStore: { createUser, signedUp },
    toastStore: { addToast, messages }
  } = useStore()

  const router = useRouter()

  const onSignupHandler = () => {
    try {
      console.log({username, email, password})
      createUser(username, email, password)
    } catch (error) {

    }
  }

  useEffect(() => {
    if (signedUp === true) {
      console.log('cadastrado')
    }
  }, [signedUp])

  useEffect(() => {
    if (password !== confirmPassword) {
      setWarning('As senhas precisam ser iguais!')
    }
  }, [confirmPassword])

  return (
    <div className='w-screen h-screen bg-slowpoke-beige-800 flex items-center justify-center text-slowpoke-black-900 flex-col'>
      <header className='flex flex-col items-center'>
        <Logo className=''/>
        <Heading size='lg' className='mt-8'>The Slowbros</Heading>
        <Text size='lg' className='text-slowpoke-gray-100 mt-[1px]'>Cadastro de usuário</Text>
      </header>

      <form className='flex flex-col items-stretch mt-8 w-full max-w-[400px] gap-6'>
        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Username</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <User />
            </TextInput.Icon>
            <TextInput.Input type='text' id='username' placeholder='Digite seu nome de usuário' value={username} onChange={(e) => setUsername(e.target.value)}/>
          </TextInput.Root>
        </label>

        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text className='font-semibold'>E-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type='email' id='email' placeholder='Digite seu e-mail' value={email} onChange={(e) => setEmail(e.target.value)}/>
          </TextInput.Root>
        </label>

        <label htmlFor='password' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type='password' id='password' placeholder='Digite sua senha' value={password} onChange={(e) => setPassword(e.target.value)}/>
          </TextInput.Root>
        </label>

        <label htmlFor='password' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Confirmar a senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type='password' id='password' placeholder='Confirme sua senha' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
          </TextInput.Root>
        </label>

        <Button type='button' className='mt-4' onClick={onSignupHandler}>
          <Text size='sm'>
            Cadastrar
          </Text>
        </Button>
      </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm'>
          <a href='' className='text-slowpoke-gray-100 underline hover:text-slowpoke-white-900'>Voltar ao login</a>
        </Text>
      </footer>
    </div>
  )
}

export default observer(SignUpPage)