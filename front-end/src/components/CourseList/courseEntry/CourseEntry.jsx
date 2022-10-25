import axios from "axios";
import JoditEditor from "jodit-react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../loading/Loading";
import style from "./entry.module.scss";
const placeholder = "type here";



const CourseEntry = () => {
  let { id } = useParams();
  const nav = useNavigate()
  const [load,setLoad] = useState(false);
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
  // get data 
  const getInstroctor = async ()=>{
    try {
      let resdb = await axios('/getallinstructor');
      if(resdb.status === 200){
        setInst(resdb.data)
        setLoad(false)
      }
    } catch (error) {
      console.log(error)
      toast.error("some thing is wrong in server!")
      setLoad(false)
    }
  }
  // reset function
  const reset = ()=>{
    setname("");
        setduration("");
        setFee("");
        setInstructor("");
        setContent("")
  }

  // get data by id function
  const getdata = async ()=>{
    try {
      const resdb = await axios(`/getcoursebyid/${id}`);
      if(resdb.status === 200){
        setname(resdb.data.name);
        setduration(resdb.data.duration);
        setFee(resdb.data.Fee);
        setInstructor(resdb.data.Instructor?resdb.data.Instructor._id:"");
        setContent(resdb.data.Details) 
      }else{
        console.log(resdb);
        toast.error("some thing is wrong")
        setLoad(false)
      }
    } catch (error) {
      console.log(error);
        toast.error("some thing is wrong")
        setLoad(false)
    }
  }

  // update function start
  const Update = async ()=>{
    try {
      const res = await axios.post("/updatecourse",{id,data:{
        name,duration,Fee,Instructor,Details:content
      }})
      if(res.status === 200){
        setLoad(false)
        nav("/courselist");
        toast.success("data updated");
      }else{
        console.log(res);
        setLoad(false);
        toast.error("some thing is wrong!")
      }
    } catch (error) {
      console.log(error)
      toast.error("some thing is wrong")
      setLoad(false)
    }
  };
  // update function end
 
  useEffect(()=>{
    reset()
    getInstroctor()
    if(id){
         getdata();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])
  const saveData = async ()=>{
    if(load){
      return
    }
    setLoad(true)
    if(id){
      return Update();
    }
    const formData = new FormData();
    formData.append("ph", Photo);
    formData.append("name", name);
    formData.append("duration", duration);
    formData.append("Fee", Fee);
    formData.append("Instructor", Instructor);
    formData.append("Details", content);
    try {
      const respodb = await axios.post('/addcourse',formData)
      if(respodb.status === 200){
          toast.success("Courses added ")
          nav('/courselist')
          setLoad(false)
      }else{
          toast.error("some thing is wrong !");
          return setLoad(false)
      }

    } catch (error) {
      console.log(error);
      setLoad(false)
      toast.error("some thing is wrong !")
    }
  }


  return (
    <div className={style.main}>
      <div className={style.con}>
        <div className={style.head}>
          <h1><span>#</span>{id?"Update":"Entry"} Course</h1>
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
                {id?"":(
                    <div className={style.inpg}>
                    <span>Course Image: </span>
                    <input type="file" src="" alt="" onChange={(e)=>{setPhoto(e.target.files[0])}}/>
                  </div>
                )}
          

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
          <button onClick={saveData} >{load?<Loading color={"red"}/>:(id?"Update":"Add")+" Course"} </button>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default CourseEntry;
