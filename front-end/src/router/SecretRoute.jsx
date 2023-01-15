import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const User = createContext() 

const useUser = ()=>{
  return useContext(User);
}


const SecretRoute = ({Element,Ch}) => {
     const [load, setload] = useState(true);
     const [user,setUser] = useState({});
    let navigate = useNavigate();
    useEffect(() => {
      const getauth = async()=>{
        try {
            const res = await fetch("/chackAuth");
            // let data = await res.json();
            let status = await res.status;
            let data = await res.json();
            if(status !== 200){
                toast.error("Login frist to acsses")
                return navigate("/login");
            }else{
                setUser(data)
                return setload(false)
            }
        } catch (error) {
          console.log(error)
            toast.error("wrong 2")
            return navigate("/login");
            
        }
        
      }
      getauth()
      
    }, [navigate])
  return (
    <>
    <User.Provider value={user}>

        {load? <h1> </h1> :(<Element El={Ch} />)}
    </User.Provider>
    </>
  )
}

export default SecretRoute;
export { useUser };

