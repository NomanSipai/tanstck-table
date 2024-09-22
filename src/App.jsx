import { useMemo } from "react";
import mData from "./DATA.json";

import DemoTable from "./components/DemoTable";
function App() {
  const data = useMemo(() => mData, []);

  const columns = [
    {
      header: "Id",
      accessorKey: "id",
    },

    {
      header: "Name",
      accessorFn: (row) => ` ${row.first_name} ${row.last_name}`,
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Gender",
      accessorKey: "gender",
    },
  ];

  return (
    <>
      <DemoTable columns={columns} data={data} />
    </>
  );
}

export default App;
