import React, { useState } from 'react';
import style from './instructor.module.scss';

const AddInstructor = () => {
    const [name,SetName] = useState('')
    const [Speciality,SetSpeciality] = useState('')
    const [NID,SetNID] = useState('')
    const [Father,SetFather] = useState('')
    const [Mother,SetMother] = useState('')
    const [Mobile,SetMobile] = useState('')
    const [Email,SetEmail] = useState('')
    const [linkedin,Setlinkedin] = useState('')
    const [Jdate,SetJdate] = useState('')
    const [Address,SetAddress] = useState('')
    const [Salary,SetSalary] = useState('')
    const [Photo,SetPhoto] = useState('')

  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.head}>
                <h1><span>#</span>Create Instructor Account</h1>
            </div>
            <div className={style.form}>
                <div className={style.inpR}>
                    <div className={style.inpG}>
                        <span>Name: </span>
                        <input type="text" value={name} onChange={(e)=>{SetName(e.target.value)}}/>
                    </div>
                    <div className={style.inpG}>
                        <span>Specialty : </span>
                        <input type="text" value={Speciality} onChange={(e)=>{SetSpeciality(e.target.value)}}/>
                    </div>
                    <div className={style.inpG}>
                        <span>NID: </span>
                        <input type="text" value={NID} onChange={(e)=>{SetNID(e.target.value)}} />
                    </div>
                </div>
                <div className={style.inpR}>
                    <div className={style.inpG}>
                        <span>Father's Name: </span>
                        <input type="text" value={Father} onChange={(e)=>{SetFather(e.target.value)}}/>
                    </div>
                    <div className={style.inpG}>
                        <span>Mother's Name : </span>
                        <input type="text" value={Mother} onChange={(e)=>{SetMother(e.target.value)}}/>
                    </div>
                    <div className={style.inpG}>
                        <span>Mobile : </span>
                        <input type="text" value={Mobile} onChange={(e)=>{SetMobile(e.target.value)}}/>
                    </div>
                </div>
                <div className={style.inpR}>
                    <div className={style.inpG}>
                        <span>Email: </span>
                        <input type="text" value={Email} onChange={(e)=>{SetEmail(e.target.value)}}/>
                    </div>
                    <div className={style.inpG}>
                        <span>Linkedin (url): </span>
                        <input type="text" value={linkedin} onChange={(e)=>{Setlinkedin(e.target.value)}}/>
                    </div>
                    <div className={style.inpG}>
                        <span>Joining Date : </span>
                        <input type="text" value={Jdate} onChange={(e)=>{SetJdate(e.target.value)}}/>
                    </div>
                </div>
                <div className={style.inpR}>
                    <div className={style.inpG}>
                        <span>Address: </span>
                        <input type="text" value={Address} onChange={(e)=>{SetAddress(e.target.value)}}/>
                    </div>
                    <div className={style.inpG}>
                        <span>monthly Salary: </span>
                        <input type="text" value={Salary} onChange={(e)=>{SetSalary(e.target.value)}}/>
                    </div>
                    <div className={style.inpG}>
                        <span>Photo: </span>
                        <input type="file" value={Photo} onChange={(e)=>{SetPhoto(e.target.value)}} />
                    </div>
                    
                </div>
            </div>
            <div className={style.btn}>
                <button>Save Instructor</button>
            </div>
        </div>
    </div>
  )
}

export default AddInstructor