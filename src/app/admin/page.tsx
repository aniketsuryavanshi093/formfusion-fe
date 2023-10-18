import React from "react";
import Link from "next/link";
import ButtonComp from "@/Components/Button";

const AdminPage = () => {
  return (
    <div>
      <h1 className="mb-2">This is admin page</h1>
      <Link href="/">
        <ButtonComp text="Click here for Home" />
      </Link>
    </div>
  );
};

export default AdminPage;
