"use client"

import { Loader2, Plus } from "lucide-react";

import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { useBulkDeleteAccounts } from "@/features/accounts/api/use-bulk-delete-accounts";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table";
import { Skeleton } from "@/components/ui/skeleton";

import { 
     Card,
     CardContent,
     CardHeader,
     CardTitle,
} from "@/components/ui/card";

import { columns } from "./columns";
import { useEffect } from "react";


const AccountsPage = () => {

     useEffect(() => {
          // Fetch accounts data or perform necessary state updates here
          fetchAccounts();
     }, []); // Empty dependency array ensures this runs only once when the component mounts
  
      const fetchAccounts = async () => {
          // Fetch accounts data and update state
     };

     const newAccount = useNewAccount();
     const deleteAccounts = useBulkDeleteAccounts();
     const accountsQuery = useGetAccounts();
     const accounts = accountsQuery.data || [];

     const isDisabled = accountsQuery.isLoading || deleteAccounts.isLoading;

     if (accountsQuery.isLoading) {
          return (
               <div className = "max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
                    <Card className="border-none drop-shadow-sm">
                    <CardHeader>
                         <Skeleton className="h-8 w-48" />
                    </CardHeader>
                    <CardContent>
                         <div className="h-[500px] w-full flex justify-center">
                              <Loader2 className="size-10 text-slate-500 animate-spin" />
                         </div>
                    </CardContent>
                    </Card>
               </div>
          );
     }


     return (
          <div className = "max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
               <Card className="border-none drop-shadow-sm">
                    <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
                         <CardTitle className="text-xl line-clamp-1">
                              Account Page
                         </CardTitle>
                         <Button onClick = { newAccount.onOpen } size = "sm">
                              <Plus className = "size-4 mr-2" />
                              Add new
                         </Button>
                    </CardHeader>
                    <CardContent>
                         <DataTable 
                              filterKey="name"
                              columns={columns} 
                              data={ accounts } 
                              onDelete = { (row) => {
                                   const ids = row.map( (r) => r.original.id);
                                   deleteAccounts.mutate( { ids } );
                              } }
                              disabled = { isDisabled }
                         />
                    </CardContent>
               </Card>
          </div>
     );
};

export default AccountsPage;