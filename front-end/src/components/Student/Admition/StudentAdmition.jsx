/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { FaCalendarCheck, FaMapMarkerAlt, FaRegListAlt, FaStamp, FaUserAlt, FaUserPlus, FaUsers } from "react-icons/fa";
import style from "./admition.module.scss";

// input
import Inp from "./inp/Inp";
import Opt from "./inp/Opt";

//hooks
import { toast } from "react-toastify";
import useAllBatch from "../../../hooks/UseAllBatch";
import useAllCourses from "../../../hooks/UseAllCourses";


const StudentAdmition = () => {
  //state start
  //courses
  const allCourses = useAllCourses();
  const [ChouseCourseID,setChouseCourseID] = React.useState();
  const [couseseINFO,setcouseseINFO] = React.useState();
   //get course by id 
   const getID =  ()=>{
    if(!ChouseCourseID){
      return setcouseseINFO("")
    }
    const courseFind = allCourses.find((v)=>{
    return (v._id === ChouseCourseID)
   });
   if(courseFind){
    setcouseseINFO(courseFind)
    setTotal(courseFind.Fee)
   }else{
    toast.warn("course are invalid")
    setTotal("")
    setcouseseINFO("")
    setChouseCourseID("")
   }
  }
  // batch  
  const allBatch = useAllBatch();
  const [ChouseBatchID,setChouseBatchID] = React.useState();
  const [BatchInfo,setBatchInfo] = React.useState({});
   //get batch by id 
   const getIDbatch =  ()=>{
    if(!ChouseBatchID){
      return setBatchInfo("")
    }
    const BatchFindOut = allBatch.find((v)=>{
    return (v._id === ChouseBatchID)
   });
   if(BatchFindOut){
    setBatchInfo(BatchFindOut)
   }else{
    toast.warn("Batch are invalid")
    setBatchInfo("")
    setChouseBatchID("")
   }
  }

  React.useEffect(()=>{
    getIDbatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[ChouseBatchID])
  // discount 
  const [discount,setDiscount] = React.useState();
  // total paid amount
  const [total,setTotal]= React.useState();
  // photo state
  const [photo,setPhoto] = React.useState();
  const [photoUrl,setPhotoUrl] = React.useState();
  const ipref = React.useRef()
  const changeImg = (e)=>{
    setPhoto(e.target.files[0]);
    setPhotoUrl(URL.createObjectURL(e.target.files[0]))
  }


  //state end
 


 // id change effect 
  React.useEffect(()=>{
    getID()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[ChouseCourseID]);

  ///change discount function
  const changeDis = (e)=>{
    setDiscount(e.target.value);
    setTotal(+(couseseINFO.Fee) - +(e.target.value))
  }
 
  return (
    <div className={style.main}>
      <div className={style.con}>
        <div className={style.head}>
          <h1>
            <span>
              <FaUserPlus />
            </span>{" "}
            student Admition form
          </h1>
        </div>
        <div className={style.student}>
          <div className={style.hSt}>
            <h1>
              <span>
                <FaUserAlt />
              </span>{" "}
              Student Information
            </h1>
          </div>
          <div className={style.stinpg}>
            <div className={style.inpgt}>
              <div className={style.f}>
                <Inp name={"Student Name"} size="1" r={true} />
              </div>
              <div className={style.f}>
                <Inp name={"Phone"} size="1" r={true} />
                <Inp name={"Birth Date"} size="1" r={true} />
                <Inp name={"Profession"} size="1" r={false} />
              </div>
              <div className={style.f}>
                <Inp name={"Email"} size="2" r={true} />
                <Inp name={"Educational Qualification"} size="1" r={true} />
              </div>
            </div>
            <div className={style.imgInp}>
              <img src={photoUrl} alt=". Student Photo" />
              <input ref={ipref} type="file" accept="image/*"  onChange={(e)=>{changeImg(e)}} />
              <button onClick={()=>{ ipref.current.click() }}>Upload photo</button>
            </div>
          </div>
        </div>
        <div className={style.student}>
          <div className={style.hSt}>
            <h1>
              <span>
                <FaUsers />
              </span>{" "}
              Guardian Information
            </h1>
          </div>
          <div className={style.stinpg}>
            <div className={style.inpgt}>
              <div className={style.f}>
                <Inp name={"Father Name"} size="1" r={true} />
                <Inp name={"Mother Name"} size="1" r={true} />
              </div>
              <div className={style.f}>
                <Inp name={"Guardian Phone"} size="1" r={true} />
              </div>
            </div>
          </div>
        </div>
        <div className={style.student}>
          <div className={style.hSt}>
            <h1>
              <span>
                <FaMapMarkerAlt />
              </span>{" "}
              Student Address
            </h1>
          </div>
          <div className={style.stinpg}>
            <div className={style.inpgt}>
              
              <div className={style.f}>
                <Inp name={"Address"} size="1" r={true} />
              </div>
            </div>
          </div>
        </div>
        {/* add course  */}
        <div className={style.student}>
          <div className={style.hSt}>
            <h1>
              <span>
                <FaRegListAlt />
              </span>{" "}
             Course
            </h1>
          </div>
          <div className={style.stinpg}>
            <div className={style.inpgt}>
              
              <div className={style.f}>
                <Opt set={setChouseCourseID} data={allCourses} name={"Courses"} size="1" r={true} />
              </div>
            </div>
          </div>
        </div>
        {/* add course  */}
        <div className={style.student}>
          <div className={style.hSt}>
            <h1>
              <span>
                <FaCalendarCheck />
              </span>{" "}
             Batch
            </h1>
          </div>
          <div className={style.stinpg}>
            <div className={style.inpgt}>
              
              <div className={style.f}>
                <Opt set={setChouseBatchID} data={allBatch} name={"Batch"} size="1" r={true} />
              </div>
            </div>
          </div>
        </div>
        {couseseINFO?(
            <div className={style.office}>
            <div className={style.hSt}>
                <h1>
                  <span>
                    <FaStamp />
                  </span>{" "}
                  Office information
                </h1>
              </div>
              <div className={style.stinpg}>
                <div className={style.inpgt}>
                  <div className={style.courseDes}>
                    <p><span>course name: </span>{couseseINFO.name}</p>
                    <p><span>course Fee: </span>{couseseINFO.Fee}</p>
                    <p><span>course duration: </span>{couseseINFO.duration}</p>
                  </div>
                  <div className={style.ser}>
                    <div className={style.h}>
                      <span>Required certificate:</span>
                    </div>
                    <div className={style.c}>
                      <input type="checkbox" />
                      <span>Dict</span>
                    </div>
                    <div className={style.c}>
                      <input type="checkbox" />
                      <span>BTEB</span>
                    </div>
                  </div>
                  <div className={style.f}>
                    
                    <Inp change={changeDis} v={discount}  name={"Discount"} size="1"  type="number" />
                    <Inp v={total} change={(e)=>{setTotal(e.target.value)}} name={"Totall Amount:"} size="1" type="number"  />
                    <Inp  name={"Amount Paid :"} size="1"  />
                  </div>
                  <div className={style.courseDes}>
                      <p><span>Totall DUE Amount: </span>1000</p>
                  </div>
                  <div className={style.f}>
                    <Inp type="Date"  name={"Next Payment Date"} size="1"  />
                    <Inp type="Number"  name={"Money Reception No;"} size="1"  />
                    
                    <div style={{flex:1}}></div>
                  </div>
                  
                </div>
              </div>
            </div>
        ):""}
        
      </div>
        <div className={style.gap}></div>
    </div>
    
  );
};

export default StudentAdmition;
