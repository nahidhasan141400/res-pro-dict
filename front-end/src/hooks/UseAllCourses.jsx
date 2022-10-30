import axios from "axios";
import React from 'react';
import { toast } from "react-toastify";

const useAllCourses = () => {
   const [data,setdata] = React.useState([]);


//    get course /
    const get = async ()=>{
        try {
            const res = await axios("/getActiveCourse");
            if(res.status === 200){
                setdata(res.data);
            }else{
                console.log(res)
                toast.error("some thing wrong in sever 😥");
            }
          } catch (error) {
            console.log(error);
            toast.error("some thing wrong in sever 😥");
          }
    }

   React.useEffect(()=>{get()},[])
  
    return data;
}

export default useAllCourses