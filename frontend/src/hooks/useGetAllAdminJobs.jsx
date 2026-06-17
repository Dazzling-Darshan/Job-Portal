import { setAllAdminJobs } from '@/redux/jobSlice';
import { JOB_API_ENDPOINT } from '@/utils/constant';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
 
const useGetAllAdminJobs = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(store => store.auth);

    useEffect(() => {
        const fetchAllAdminJobs = async () => {
            try {
                console.log("useGetAllAdminJobs: Fetching admin jobs for user:", user);
                // withCredentials is required to send the auth cookie to the server
                const res = await axios.get(`${JOB_API_ENDPOINT}/get/adminjobs`, { 
                    withCredentials: true 
                });
                console.log("useGetAllAdminJobs: API response:", res.data);
                
                if (res.data.success) {
                    dispatch(setAllAdminJobs(res.data.jobs));
                }
            } catch (error) {
                console.error("Error fetching admin jobs:", error);
            }
        };
        fetchAllAdminJobs();
    }, [dispatch, user]);
}

export default useGetAllAdminJobs;