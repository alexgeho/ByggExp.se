import React from "react";
import "./Admin.css";
import AdminHeader from "../../Components/Admin/AdminHeader/AdminHeader";
import AdminTabs from "../../Components/Admin/AdminTabs/AdminTabs";

const Admin = () => {
  return (
    <div>
      <AdminHeader />
      <AdminTabs />
    </div>
  );
};

export default Admin;
