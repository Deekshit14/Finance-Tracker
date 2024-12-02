import { DataGrid } from "@/components/data-grid";
import { DataCharts } from "@/components/data-charts";

export default function DashboardPage() {
  return (
    <div className = "max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <DataGrid />
      <DataCharts />
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