import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <section className="flex-center glassmorphism-auth h-screen w-full">
      <SignIn/>
    </section>
  )
}
