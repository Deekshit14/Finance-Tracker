import Image from 'next/image'
import { Loader2 } from 'lucide-react'
import { SignUp, ClerkLoaded, ClerkLoading } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className = "min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className='h-full lg:flex flex-col items-center justify-center px-4'>
        <div className = "text-center space-y-4 pt-16">
          <h1 className = "font-bold text-3xl text-[#2E2A47]">
            Welcome!
          </h1>
          <p className="text-base text-[#7E8CA0]">
            Create an account to access Wallet Wiz !!!
          </p>
        </div>
        <div className = "flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignUp path = "/sign-up"/>
          </ClerkLoaded>
          <ClerkLoading>  { /* Animation of loading */ }
            <Loader2 className='animated-spin text-muted-foreground' />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full bg-[#2a3447] hidden lg:flex items-center justify-center">
        <div className = "flex flex-col justify-center items-center mx-7">
          <div className = "flex mb-2 gap-x-3">
            <Image src = "/logo.svg" height = {100} width = {100} alt = "Logo"/>
            <h1 className = "mt-1 font-bold text-3xl text-[rgb(216,247,255)]">Wallet Wiz</h1>
          </div>
          <p className="text-sm text-[rgb(180,211,255)]">Effortlessly track your expenses, manage budgets, and gain insights into your financial health with our Finance Tracker website</p>
        </div>
      </div>
    </div>
  )
}