"use client";

import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import { Button } from "@/components/ui/button";



export default function Home() {
  const { onOpen } = useNewAccount();

  return (
    <div>
      <Button onClick = {onOpen}>
        Add an account
      </Button>
    </div>
  )
};








/*
const { data: accounts, isLoading} = useGetAccounts();

  if (isLoading) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <div>
      { accounts?.map((account) => (
        <div key = {account.id}>
          { account.name }
        </div>
        ))
      }
    </div>
  );
*/