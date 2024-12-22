import { DataGrid } from "@/components/data-grid";
import { DataCharts } from "@/components/data-charts";
import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <div className = "max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <Suspense fallback={<div>Loading...</div>}>
        <DataGrid />
        <DataCharts />
      </Suspense>
    </div>
  );
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