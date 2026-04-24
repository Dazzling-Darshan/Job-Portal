import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_ENDPOINT } from "@/utils/constant";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Signup = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });
  const loading = useSelector(store => store.auth.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      dispatch(setLoading(true));
      formData.append("fullName", input.fullName);
      formData.append("email", input.email);
      formData.append("phoneNumber", input.phoneNumber);
      formData.append("password", input.password);
      formData.append("role", input.role);

      if (input.file) {
        formData.append("file", input.file);
      }

      const res = await axios.post(
        `${USER_API_ENDPOINT}/register`,
        formData,
        { withCredentials: true }
      );

      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error.response?.data || error.message);
    }finally{
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex items-center justify-center px-4">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8 my-10"
        >
          <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Create Account
          </h1>

          <div className="space-y-4">
            <div>
              <Label>Full Name</Label>
              <Input
                type="text"
                name="fullName"
                value={input.fullName}
                onChange={changeEventHandler}
              />
            </div>

            <div>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={input.email}
                onChange={changeEventHandler}
              />
            </div>

            <div>
              <Label>Phone Number</Label>
              <Input
                type="text"
                name="phoneNumber"
                value={input.phoneNumber}
                onChange={changeEventHandler}
              />
            </div>

            <div>
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                value={input.password}
                onChange={changeEventHandler}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between mt-6 gap-4">
            <RadioGroup className="flex gap-6">
              <div className="flex items-center gap-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                />
                <Label>Student</Label>
              </div>

              <div className="flex items-center gap-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                />
                <Label>Recruiter</Label>
              </div>
            </RadioGroup>

            {/* File Upload */}
            <div className="flex items-center gap-3 w-full">
              <Label>Profile</Label>

              <label className="flex-1 cursor-pointer">
                <div className="flex items-center justify-between border rounded-md px-3 py-2 bg-white">
                  <span className="text-sm text-gray-500 truncate">
                    {input.file ? input.file.name : "Choose file"}
                  </span>
                  <span className="text-blue-600 text-sm">Browse</span>
                </div>

                <input
                  type="file"
                  accept="image/*"
                  onChange={changeFileHandler}
                  className="hidden"
                />
              </label>
            </div>
          </div>

           {
            loading? <Button className={'w-full my-4'}> <Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please wait</Button>:
            <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 transition-all shadow-md">
            Sign Up
          </Button>
          }

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;