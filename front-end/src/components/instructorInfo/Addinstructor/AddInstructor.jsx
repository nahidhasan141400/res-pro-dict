import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import style from "./instructor.module.scss";

import { useParams } from "react-router-dom";
const AddInstructor = () => {
  let { id } = useParams();
  let jao = useNavigate();
  const [name, SetName] = useState("");
  const [Speciality, SetSpeciality] = useState("");
  const [NID, SetNID] = useState("");
  const [Father, SetFather] = useState("");
  const [Mother, SetMother] = useState("");
  const [Mobile, SetMobile] = useState("");
  const [Email, SetEmail] = useState("");
  const [Jdate, SetJdate] = useState("");
  const [Address, SetAddress] = useState("");
  const [Salary, SetSalary] = useState("");
  const Photo = useRef();

  const reset = ()=>{
    SetName("");
        SetSpeciality("");
        SetNID("");
        SetFather("");
        SetMother("");
        SetMobile("");
        SetEmail("");
        SetJdate("");
        SetAddress("");
        SetSalary("");
  }

  const update = async ()=>{
    try {
         let res = await axios.post("/updateinstructor",{id,data:{
         name,NID,Specialty:Speciality,Father,Mother,Mobile,Email,Jdate,Address,Salary
            }})

        if (res.status === 200){
            jao("/instructorlist")
            toast.success("data Updated")
        }else{
            toast.error("some thing is wrong !!")
        }
    } catch (error) {
        console.log(error);
        toast.error("some thing is wrong !")
    }
  }

  const sendDate = async () => {

    if(id){
        return update();
    }

    let files = Photo.current.files;
    const formData = new FormData();
    formData.append("photo", files[0]);
    formData.append("name", name);
    formData.append("NID", NID);
    formData.append("Specialty", Speciality);
    formData.append("Father", Father);
    formData.append("Mother", Mother);
    formData.append("Mobile", Mobile);
    formData.append("Email", Email);
    formData.append("Jdate", Jdate);
    formData.append("Address", Address);
    formData.append("Salary", Salary);
    try {
      const respodb = await axios.post("/addinstructoraccount", formData);
      if (respodb.status === 200) {
        return jao("/instructorlist");
      } else {
        return toast.error("some thing is wrong !");
      }
    } catch (error) {
      console.log(error);
      toast.error("something is wrong !");
    }
  };
 

  const getDataByID = async () => {
    try {
      const redb = await axios(`/getinstructor/${id}`);
      if (redb.status === 200) {
        SetName(redb.data.name);
        SetSpeciality(redb.data.Specialty);
        SetNID(redb.data.NID);
        SetFather(redb.data.Father);
        SetMother(redb.data.Mother);
        SetMobile(redb.data.Mobile);
        SetEmail(redb.data.Email);
        SetJdate(redb.data.Jdate);
        SetAddress(redb.data.Address);
        SetSalary(redb.data.Salary);
      } else {
        toast.error("some Thing wrong");
        jao("/instructorlist");
      }
    } catch (error) {
      console.log(error);
      toast.error("some Thing wrong");
      jao("/instructorlist");
    }
  };

  React.useEffect(() => {
    reset()
    if (id) {
      getDataByID();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <div className={style.main}>
      <div className={style.con}>
        <div className={style.head}>
          <h1>
            <span>#</span>
            {id ? "Update" : "Create"} Instructor Account
          </h1>
        </div>
        <div className={style.form}>
          <div className={style.inpR}>
            <div className={style.inpG}>
              <span>Name: </span>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  SetName(e.target.value);
                }}
              />
            </div>
            <div className={style.inpG}>
              <span>Specialty : </span>
              <input
                type="text"
                value={Speciality}
                onChange={(e) => {
                  SetSpeciality(e.target.value);
                }}
              />
            </div>
            <div className={style.inpG}>
              <span>NID: </span>
              <input
                type="text"
                value={NID}
                onChange={(e) => {
                  SetNID(e.target.value);
                }}
              />
            </div>
          </div>
          <div className={style.inpR}>
            <div className={style.inpG}>
              <span>Father's Name: </span>
              <input
                type="text"
                value={Father}
                onChange={(e) => {
                  SetFather(e.target.value);
                }}
              />
            </div>
            <div className={style.inpG}>
              <span>Mother's Name : </span>
              <input
                type="text"
                value={Mother}
                onChange={(e) => {
                  SetMother(e.target.value);
                }}
              />
            </div>
            <div className={style.inpG}>
              <span>Mobile : </span>
              <input
                type="text"
                value={Mobile}
                onChange={(e) => {
                  SetMobile(e.target.value);
                }}
              />
            </div>
          </div>
          <div className={style.inpR}>
            <div className={style.inpG}>
              <span>Email: </span>
              <input
                type="text"
                value={Email}
                onChange={(e) => {
                  SetEmail(e.target.value);
                }}
              />
            </div>

            <div className={style.inpG}>
              <span>Joining Date : </span>
              <input
                type="date"
                value={Jdate}
                onChange={(e) => {
                  SetJdate(e.target.value);
                }}
              />
            </div>

            <div className={style.inpG}>
              <span>monthly Salary: </span>
              <input
                type="text"
                value={Salary}
                onChange={(e) => {
                  SetSalary(e.target.value);
                }}
              />
            </div>
          </div>
          <div className={style.inpR}>
            <div
              style={{
                flex: "2",
              }}
              className={style.inpG}
            >
              <span>Address: </span>
              <input
                type="text"
                value={Address}
                onChange={(e) => {
                  SetAddress(e.target.value);
                }}
              />
            </div>
            {id ? (
              ""
            ) : (
              <div className={style.inpG}>
                <span>Photo: (300kb)</span>
                <input
                  type="file"
                  ref={Photo}
                  name="photo"
                  accept=".png,.jpg,.jpge"
                />
              </div>
            )}
          </div>
        </div>
        <div className={style.btn}>
          <button onClick={sendDate}>{id?"Update":"Save"} Instructor</button>
        </div>
      </div>
    </div>
  );
};

export default AddInstructor;
