import React from "react";
import useDocumentTitle from "../../../functions/custom-hooks/useDocumentTitle";
import Layout from "../Layout";
import Header from "../../../partials/Header";

const Students = () => {
  useDocumentTitle("Students | School Management System");

  return (
    <>
      <Layout menu="students">
        {({ onToggle }) => (
          <>
            <Header
              title="Students Management"
              description="Manage all student records"
              onToggle={onToggle}   
            />
          </>
        )}
      </Layout>
    </>
  );
};

export default Students;
