import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoad } from "../../../context/LodingAuth";
import style from './de.module.scss';

const InstructorDe = () => {
    const {setLoading} = useLoad()
    
    let { id } = useParams();
    let jao = useNavigate();

    const [data,setData] = React.useState({})
    // get Data function
    const getDataByID = async () => {
        setLoading(true)
        try {
          const redb = await axios(`/getinstructor/${id}`);
          if (redb.status === 200) {
            setData(redb.data)
            setLoading(false)
          } else {
            toast.error("some Thing wrong");
            setLoading(false)
            jao("/instructorlist");
          }
        } catch (error) {
          console.log(error);
          toast.error("some Thing wrong");
          setLoading(false)
          jao("/instructorlist");
        }
      };
      React.useEffect(()=>{
        
        getDataByID();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[id])
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.tRo}>
                <div className={style.imgCon}>
                    <img src={`/photoC/instructor/${data.Photo}`} alt="" />
                </div>
                <div className={style.text}>
                    <div className={style.card}>
                        <h1>{data.name}</h1>
                    </div>
                    <div className={style.card}>
                        <h2>{data.Specialty}</h2>
                    </div>
                    <div className={style.card}>
                        <h3>{data.Mobile}</h3>
                    </div>
                    <div className={style.card}>
                        <h3>{data.Email}</h3>
                    </div>
                </div>
            </div>
            <div className={style.sr}>
                    <div className={style.bRo}>
                        <div className={style.c}>
                            <span>Father Name:</span>{data.Father}
                        </div>
                        <div className={style.c}>
                            <span>Mother Name:</span>{data.Mother}
                        </div>
                        <div className={style.c}>
                            <span>Joining Date:</span>{data.Jdate}
                        </div>
                    </div>
                    <div className={style.bRo}>
                        <div className={style.c}>
                            <span>NID:</span>{data.NID}
                        </div>
                        <div className={style.c}>
                            <span>Salary:</span>{data.Salary}
                        </div>
                        <div className={style.c}>
                        
                        </div>
                    </div>
                    <div className={style.bRo}>
                        <div className={style.c}>
                            <span>Address:</span>{data.Address}
                        </div>
                    </div>
            </div>
            
        </div>
    </div>
  )
}

export default InstructorDe 