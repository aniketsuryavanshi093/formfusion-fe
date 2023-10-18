import React from "react";
import Link from 'next/link';
import ButtonComp from "@/Components/Button";

const SurveyPage = () => {
  return (
    <div>
      <h1 className="mb-2">This is survey page</h1>
      <Link href="/">
        <ButtonComp text="Click here for Home" />
      </Link>
    </div>
  );
};

export default SurveyPage;
