import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CompaniesTable = () => {
  const { companies, searchCompanyByText } = useSelector((store) => store.company);
  const [filterCompany, setFilterCompany] = useState(companies);

  useEffect(()=>{
    const filteredCompany = companies.length >= 0 && companies.filter((company) => {
        if(!searchCompanyByText) return true
        
        return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase())

    })

    setFilterCompany(filteredCompany);
  },[companies, searchCompanyByText])

  const navigate = useNavigate();

  return (
    <div className="rounded-xl border bg-white shadow-sm">
      <Table>
        <TableCaption className="py-4 text-gray-500">
          A list of your recent registered companies
        </TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold">Logo</TableHead>
            <TableHead className="font-semibold">Name</TableHead>
            <TableHead className="font-semibold">Date</TableHead>
            <TableHead className="text-right font-semibold">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {companies?.length <= 0 ? (
            <TableRow>
              <TableCell
                colSpan={4}
                className="text-center text-gray-500 py-6"
              >
                You haven't registered any company yet
              </TableCell>
            </TableRow>
          ) : (
            filterCompany?.map((company) => (
              <TableRow key={company._id}>
                <TableCell>
                  <Avatar className="h-11 w-11 border">
                    <AvatarImage
                      src={
                        company?.logo ||
                        "https://img.freepik.com/premium-psd/best-company-logo-transparent-background_1101614-58913.jpg"
                      }
                    />
                  </Avatar>
                </TableCell>

                <TableCell className="font-medium">
                  {company?.name}
                </TableCell>

                <TableCell className="text-gray-600">
                  {company?.createdAt?.split("T")[0]}
                </TableCell>

                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger asChild>
                      <MoreHorizontal className="h-5 w-5 cursor-pointer text-gray-600 hover:text-black" />
                    </PopoverTrigger>

                    <PopoverContent className="w-32">
                      <div className="flex items-center gap-2 cursor-pointer" onClick={()=> navigate(`/admin/companies/${company._id}`)}>
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

export default CompaniesTable;