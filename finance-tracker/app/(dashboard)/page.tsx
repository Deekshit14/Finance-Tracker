import { UserButton, useClerk } from "@clerk/nextjs";


export default function Home() {
  return (
    <UserButton afterSignOutUrl = "/"/>
  )
}
