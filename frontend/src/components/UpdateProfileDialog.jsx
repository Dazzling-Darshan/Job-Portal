import React, { useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { USER_API_ENDPOINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import axios from 'axios'
import { toast } from 'sonner'

const UpdateProfileDialog = ({ open, setOpen }) => {

    const [loading, setLoading] = useState(false)
    const { user } = useSelector(store => store.auth)

    const [input, setInput] = useState({
        fullName: user?.fullName || "",
        email: user?.email || "",
        phoneNumber: user?.phoneNumber || "",
        bio: user?.profile?.bio || "",
        skills: user?.profile?.skills?.join(', ') || "",
        file: null
    })

    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }

    const fileChangeHandler = (e) => {
        const file = e.target.files?.[0];
        setInput({ ...input, file })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append("fullName", input.fullName);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("bio", input.bio);
        formData.append("skills", input.skills);

        if (input.file) {
            formData.append("file", input.file);
        }

        try {

            setLoading(true);
            const res = await axios.post(
                `${USER_API_ENDPOINT}/profile/update`,
                formData,
                { withCredentials: true }
            )

            if (res.data.success) {
                dispatch(setUser(res.data.user));
                toast.success(res.data.message);
            }

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
            setOpen(false);
        }
    }

    return (
        <div>
            <Dialog open={open}>
                <DialogContent
                    className="sm:max-w-125 rounded-2xl p-6 shadow-2xl border border-gray-200"
                    onInteractOutside={() => setOpen(false)}
                >

                    <DialogHeader>
                        <DialogTitle className="text-xl font-semibold text-gray-800">
                            Update Profile
                        </DialogTitle>
                    </DialogHeader>

                    <form onSubmit={submitHandler}>
                        <div className='grid gap-5 py-4'>

                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="name" className="text-right text-gray-600">Name</Label>
                                <Input
                                    id="name"
                                    name="fullName"
                                    value={input.fullName}
                                    onChange={changeEventHandler}
                                    className="col-span-3 rounded-lg focus:ring-2 focus:ring-purple-500"
                                />
                            </div>

                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="email" className="text-right text-gray-600">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    value={input.email}
                                    onChange={changeEventHandler}
                                    className="col-span-3 rounded-lg focus:ring-2 focus:ring-purple-500"
                                />
                            </div>

                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="number" className="text-right text-gray-600">Number</Label>
                                <Input
                                    id="number"
                                    name="phoneNumber"
                                    value={input.phoneNumber}
                                    onChange={changeEventHandler}
                                    className="col-span-3 rounded-lg focus:ring-2 focus:ring-purple-500"
                                />
                            </div>

                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="bio" className="text-right text-gray-600">Bio</Label>
                                <Input
                                    id="bio"
                                    name="bio"
                                    value={input.bio}
                                    onChange={changeEventHandler}
                                    className="col-span-3 rounded-lg focus:ring-2 focus:ring-purple-500"
                                />
                            </div>

                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="skills" className="text-right text-gray-600">Skills</Label>
                                <Input
                                    id="skills"
                                    name="skills"
                                    value={input.skills}
                                    onChange={changeEventHandler}
                                    className="col-span-3 rounded-lg focus:ring-2 focus:ring-purple-500"
                                />
                            </div>

                            {/* File Input (fixed UI) */}
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="file" className="text-right text-gray-600">Resume</Label>

                                <input
                                    id="file"
                                    name="file"
                                    type="file"
                                    accept="application/pdf"
                                    onChange={fileChangeHandler}
                                    className="col-span-3 text-sm cursor-pointer"
                                />
                            </div>

                        </div>

                        <DialogFooter>
                            {
                                loading ? (
                                    <Button className="w-full my-2 bg-purple-600 text-white">
                                        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                        Please wait
                                    </Button>
                                ) : (
                                    <Button className="w-full my-2 bg-linear-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-medium rounded-xl transition-all duration-300 shadow-md hover:shadow-lg">
                                        Update
                                    </Button>
                                )
                            }
                        </DialogFooter>

                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default UpdateProfileDialog