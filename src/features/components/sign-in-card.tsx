import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@radix-ui/react-separator'
import React from 'react'

const SignInCard = () => {
  return (
    <Card className='w-full h-full p-10'>
      <CardHeader className='px-0 pt-0'>

        <CardTitle>
        Login to Continue
        </CardTitle>
      <CardDescription >
        Use your email or another service to continue 
      </CardDescription>
        </CardHeader>


      <CardContent className='space-y-5 px-0 pb-0'>
        <form className='space-y-3'>

          <Input
          disabled={false}
          value=""
          onChange={()=>{}}
          placeholder='Email'
          type='email'
          required
          />

          <Input
          disabled={false}
          value=""
          onChange={()=>{}}
          placeholder='Password'
          type='password'
          required
          />

          <Button type='submit' className='w-full ' size='lg' disabled={false}>
            Login
          </Button>
          </form>
          <Separator/>
          <div className='flex flex-col gap-3'>
            <Button 
            disabled={false}
            onClick={()=>{}}
            variant='outline'
            size='lg'
            className='w-full relative  '
            >
              <FcGoogle className=' size-5 absolute left-2 '/>
              Continue with google
            </Button>

            <Button 
            disabled={false}
            onClick={()=>{}}
            variant='outline'
            size='lg'
            className='w-full relative  '
            >
              <FaGithub className=' size-5 absolute left-2 '/>
              Continue with github
            </Button>

          </div>
          <p className=' text-muted-foreground'>
            Don't have an account? <span className='text-purple-500 hover:underline cursor-pointer'>Sign-Up</span>
          </p>
      </CardContent>

    </Card>
  )
}

export default SignInCard