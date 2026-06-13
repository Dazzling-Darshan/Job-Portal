import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'
import { useSelector } from 'react-redux'

const isResume = true;

const Profile = () => {
    const { user } = useSelector(store => store.auth);

    const [open, setOpen] = useState(false);

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />

            <div className="max-w-5xl mx-auto px-4 py-8">

                {/* Profile Card */}
                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6">

                    {/* Top Section */}
                    <div className="flex justify-between items-start flex-wrap gap-4">
                        <div className="flex items-center gap-5">
                            <Avatar className="h-24 w-24 border shadow-sm">
                                <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600w-2174926871.jpg" />
                            </Avatar>

                            <div>
                                <h1 className="text-xl font-semibold text-gray-800">
                                    {user?.fullName}
                                </h1>

                                {/* ✅ FIXED BIO */}
                                <p className="text-sm text-gray-500 mt-1 leading-relaxed max-w-md">
                                    {user?.profile?.bio}
                                </p>
                            </div>
                        </div>

                        <Button
                            variant="outline"
                            className="flex items-center gap-2 hover:bg-gray-100 transition"
                            onClick={() => setOpen(true)}
                        >
                            <Pen className="w-4 h-4" />
                            Edit
                        </Button>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-6 space-y-3">
                        <div className="flex items-center gap-3 text-gray-600">
                            <Mail className="w-4 h-4 text-gray-500" />
                            <span className="text-sm">{user?.email}</span>
                        </div>

                        <div className="flex items-center gap-3 text-gray-600">
                            <Contact className="w-4 h-4 text-gray-500" />
                            <span className="text-sm">{user?.phoneNumber}</span>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="mt-6">
                        {/* ✅ FIXED TITLE */}
                        <h1 className="text-base font-semibold text-gray-800 mb-2">
                            Skills
                        </h1>

                        <div className="flex flex-wrap gap-2">
                            {
                                user?.profile?.skills?.length > 0
                                    ? user?.profile?.skills.map((item, index) => (
                                        <Badge
                                            key={index}
                                            className="bg-purple-50 text-purple-700 hover:bg-purple-100 transition px-3 py-1 rounded-full"
                                        >
                                            {item}
                                        </Badge>
                                    ))
                                    : <span className="text-sm text-gray-500">No skills added</span>
                            }
                        </div>
                    </div>

                    {/* Resume (UNCHANGED AS YOU ASKED) */}
                    <div className="mt-6">
                        <Label className="text-sm font-semibold text-gray-800">
                            Resume
                        </Label>

                        <div className="mt-2">
                            {
                                isResume
                                    ? (
                                        <a
                                            target="_blank"
                                            href={user?.profile?.resume}
                                            className="text-sm text-blue-600 hover:underline"
                                        >
                                           {user?.profile?.resumeOriginalName}
                                        </a>
                                    )
                                    : (
                                        <span className="text-sm text-gray-500">
                                            No resume uploaded
                                        </span>
                                    )
                            }
                        </div>
                    </div>

                </div>

                {/* Applied Jobs */}
                <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
                    <h1 className="text-lg font-semibold text-gray-800 mb-4">
                        Applied Jobs
                    </h1>

                    <AppliedJobTable />
                </div>

                <UpdateProfileDialog open={open} setOpen={setOpen} />
            </div>
        </div>
    )
}

export default Profile