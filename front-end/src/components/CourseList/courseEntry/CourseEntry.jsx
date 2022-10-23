import axios from "axios";
import JoditEditor from "jodit-react";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import style from "./entry.module.scss";
const placeholder = "type here";



const CourseEntry = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  // getallinstructor
  const [inst,setInst] = useState([])

  // data state manage mant
  // name,duration,Fee,Instructor,Details
  const [name,setname] = useState("");
  const [duration,setduration] = useState("");
  const [Fee,setFee] = useState("");
  const [Instructor,setInstructor] = useState("");
  const [Photo,setPhoto] = useState("");

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/,
    placeholder: placeholder || "Start typings...",
  };
  const getInstroctor = async ()=>{
    try {
      let resdb = await axios('/getallinstructor');
      if(resdb.status === 200){
        setInst(resdb.data)
      }
    } catch (error) {
      console.log(error)
      toast.error("some thing is wrong in server!")
    }
  }

  useEffect(()=>{
    getInstroctor()
  },[])


  return (
    <div className={style.main}>
      <div className={style.con}>
        <div className={style.head}>
          <h1><span>#</span>Entry Course</h1>
        </div>
        <div className={style.form}>

        
    {/* input row  */}
        <div className={style.inputR}>

          <div className={style.inpg}>
            <span>Course Name: </span>
            <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/>
          </div>

          <div className={style.inpg}>
            <span>Course Duration (month): </span>
            <input type="text" value={duration} onChange={(e)=>{setduration(e.target.value)}}/>
          </div>

          <div className={style.inpg}>
            <span>Course Fee: </span>
            <input type="text" value={Fee} onChange={(e)=>{setFee(e.target.value)}}/>
          </div>

        </div> 
    {/* input row  */}
        <div className={style.inputR}>

          <div className={style.inpg}>
            <span>Course Instractor: </span>
            <select value={Instructor} onChange={(e)=>{setInstructor(e.target.value)}}>
              <option value="">Choose Instractor</option>
              {inst.map((e,i)=>{

                return (<option value={e._id}>{e.name}</option>)
              })}
            </select>
          </div>

          <div className={style.inpg}>
            <span>Course Image: </span>
            <input type="file" src="" alt="" value={Photo} onChange={(e)=>{setPhoto(e.target.files[0])}}/>
          </div>

          <div className={style.inpg}>
           
          </div>

        </div>
        <div className={style.textEdit}>
          <div className={style.h}>
            <span>Add Details:</span>
          </div>
          <div className={style.mod}>

                <JoditEditor
                  ref={editor}
                  value={content}
                  config={config}
                  tabIndex={2} // tabIndex of textarea
                  onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                  onChange={(newContent) => {}}
                  />
              </div>
        </div>
        <div className={style.btnc}>
          <button> Add Course</button>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default CourseEntry;
