import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminJobsTable = () => {
  const navigate = useNavigate();
  
  // Select from the correct slice
  const { allAdminJobs, searchJobByText } = useSelector((store) => store.job);

  // Filter logic based on the job-specific search text
  const filteredJobs = allAdminJobs?.filter((job) => {
    if (!searchJobByText) return true;
    return (
      job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
      job?.company?.name?.toLowerCase().includes(searchJobByText.toLowerCase())
    );
  }) || [];

  return (
    <div className="rounded-xl border bg-white shadow-sm">
      <Table>
        <TableCaption className="py-4 text-gray-500">
          A list of your recent posted jobs
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredJobs.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-6">
                No jobs found
              </TableCell>
            </TableRow>
          ) : (
            filteredJobs.map((job) => (
              <TableRow key={job._id}>
                <TableCell>{job?.company?.name || "N/A"}</TableCell>
                <TableCell>{job?.title || "N/A"}</TableCell>
                <TableCell>{job?.createdAt?.split("T")[0] || "N/A"}</TableCell>
                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger asChild>
                      <MoreHorizontal className="h-5 w-5 cursor-pointer" />
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                      <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => navigate(`/admin/jobs/${job._id}`)}
                      >
                        <Edit2 size={16} />
                        <span>Edit</span>
                      </div>
                      
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsTable;