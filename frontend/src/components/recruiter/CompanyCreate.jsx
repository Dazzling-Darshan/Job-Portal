import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { COMPANY_API_ENDPOINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "@/redux/companySlice";

const CompanyCreate = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState();
const dispatch = useDispatch();

  const registerNewCompany =  async () => {
    try {
        const res = await axios.post(`${COMPANY_API_ENDPOINT}/register`,{companyName},{
         withCredentials: true   
        } )

        if(res?.data?.success){
            dispatch(setSingleCompany(res.data.company))
            toast.success(res.data.message);
            const companyId = res?.data?.company?._id;
            navigate(`/admin/companies/${companyId}`)
        }
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-2xl mx-auto my-12 bg-white border rounded-2xl shadow-sm p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Your Company Name
          </h1>

          <p className="mt-3 text-gray-600 leading-relaxed">
            What would you like to give your company name? You can change this
            later.
          </p>
        </div>

        <div className="space-y-2">
          <Label className="font-medium text-gray-700">
            Company Name
          </Label>

          <Input
            type="text"
            placeholder="JobHunt, Microsoft etc."
            className="h-11"
            onChange = {(e)=>setCompanyName(e.target.value)}
          />
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <Button
            variant="outline"
            onClick={() => navigate("/admin/companies")}
          >
            Cancel
          </Button>

          <Button className="bg-[#6A38C2] hover:bg-[#5b30a7]" 
                onClick={registerNewCompany}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCreate;