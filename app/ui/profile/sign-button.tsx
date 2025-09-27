import Link from 'next/link'
import React from 'react'

export default function SignInButton() {
  return (
  <span className='bg-red-primary rounded-sm p-2 m-px '>
     <Link href="/login">SignIn</Link>
  </span>
  )
}
