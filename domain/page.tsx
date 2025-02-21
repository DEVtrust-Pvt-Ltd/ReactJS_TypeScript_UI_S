import CustomDropDown from "@/_component/common/Dashboard/CustomDropDown";
import AdminTable from "@/_component/tables/AdminTable";
import React, { Suspense } from "react";

const Page = () => {

  return (
    <Suspense >
      <CustomDropDown />
      <AdminTable />
    </Suspense>
  );
};

export default Page;
