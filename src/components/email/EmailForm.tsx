'use client'
import { useActionState } from 'react'

import { Loader2 } from 'lucide-react'
import { DataState } from '@/lib/types/types'

import { sendEmail } from '@/lib/action/EmailAction'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

const initialState: DataState = {
  failMessage: '',
  successMessage: '',
  errors: {},
}

export default function EmailForm() {
  const [state, formAction, isPending] = useActionState(sendEmail, initialState)

  return (
    <form action={formAction} className='space-y-6'>
      {/* Name Field */}
      <>
        <label
          htmlFor='sender'
          className='text-gray-700 dark:text-gray-300 font-medium'
        >
          Name <span className='text-red-400 text-sm'>*</span>
        </label>
        <Input
          className='w-full bg-transparent border-2 border-red rounded-lg p-3  hover:border-darkCyan  h-14 transition '
          type='text'
          name='sender'
          id='sender'
          placeholder='Enter your name'
        />
        {state?.errors?.sender && (
          <p className='text-red text-sm mt-1'>{state.errors.sender}</p>
        )}
      </>
      {/* Email Field */}
      <>
        <label
          htmlFor='email'
          className='text-gray-700 dark:text-gray-300 font-medium'
        >
          Email <span className='text-red-400 text-sm'>*</span>
        </label>
        <Input
          className='w-full bg-transparent border-2 border-red rounded-lg p-3 hover:border-darkCyan  h-14 transition'
          type='email'
          name='email'
          id='email'
          placeholder='Enter your email'
        />
        {state?.errors?.email && (
          <p className='text-red text-sm mt-1'>{state.errors.email}</p>
        )}
      </>
      {/* Content Field */}
      <>
        <label
          htmlFor='content'
          className='text-gray-700 dark:text-gray-300 font-medium'
        >
          Message <span className='text-red-400 text-sm'>*</span>
        </label>
        <Textarea
          className='w-full bg-transparent border-2 border-red rounded-lg p-3 hover:border-darkCyan  transition h-32'
          name='content'
          id='content'
          placeholder='Enter your message'
        />
        {state?.errors?.content && (
          <p className='text-red text-sm mt-1'>{state.errors.content}</p>
        )}
      </>

      {state?.successMessage ? (
        <p className='text-green-500'>{state.successMessage}</p>
      ) : (
        <p className='text-red-500'>{state.failMessage}</p>
      )}

      {/* Submit Button */}
      <Button
        type='submit'
        disabled={isPending}
        className='px-10 py-6 bg-red font-semibold rounded-xl  mt-5 hover:bg-cyan hover:text-brown transition text-md duration-500 text-paper cursor-pointer'
      >
        {isPending ? (
          <>
            <span>Sending...</span>
            <Loader2 className='mr-1 size-4 animate-spin' />
          </>
        ) : (
          'SEND'
        )}
      </Button>
    </form>
  )
}
