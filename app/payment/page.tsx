import { Suspense } from "react";
import { Payment, columns } from "./components/columns";
import { DataTable } from "./data-table";
import getData from "@/lib/mock-data";

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24">
      {/* Suspense works if we fetch data inside DataTable */}
      {/* <Suspense fallback={<div>Loading table...</div>}>  */}
      <DataTable columns={columns} data={data} />
      {/* </Suspense> */}
    </div>
  );
}
