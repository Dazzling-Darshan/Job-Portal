import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchJobByText } from "@/redux/jobSlice";
import AdminJobsTable from "./AdminJobsTable";
import useGetAllAdminJobs from "@/hooks/useGetAllAdminJobs";

const AdminJobs = () => {
  useGetAllAdminJobs();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input]);
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <Input
            className="max-w-sm bg-white"
            placeholder="Filter by Job name, Role"
            onChange={(e) => setInput(e.target.value)}
          />

          <Button
            className="bg-[#6A38C2] hover:bg-[#5b30a7]"
            onClick={() => navigate("/admin/jobs/create")}
          >
           New Jobs
          </Button>
        </div>
        <AdminJobsTable/>
      </div>
    </div>
  );
};

export default AdminJobs;
