import { SignUp } from '@clerk/nextjs'
import React from 'react'

export default function Page() {
  return (
    <section className="flex-center glassmorphism-auth h-screen w-full">
      <SignUp/>
    </section>
  )
}
