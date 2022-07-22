import React from "react";
import Layout from "../components/Layout";
import RoleTemplate from "../components/RoleTemplate";

const operations = () => {
  return (
    <>
      <Layout title="Operations">
        <RoleTemplate teamName="Operations" />
      </Layout>
    </>
  );
};

export default operations;
