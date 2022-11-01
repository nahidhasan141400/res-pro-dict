import React from 'react';
import { IoMdAddCircle } from "react-icons/io";
import style from './add.module.scss';
import Inp from './inp/Inp';

const AddUser = () => {
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.head}>
                <h1><span><IoMdAddCircle/></span>Add New User</h1>
            </div>
            <div className={style.fbodyt}>
                <div className={style.row}>
                    <Inp name={"Name:"} r={true} size="1" />
                    <Inp name={"Username:"} r={true} size="1"/>
                </div>
                <div className={style.row}>
                    <Inp name={"Phone:"} r={true} size="1" />
                    <Inp name={"Email:"} r={true} size="1"/>
                </div>
                <div className={style.row}>
                    <Inp name={"Password:"} r={true} size="1" type='password'/>
                    <Inp name={"Confirm Password:"} r={true} size="1" type='password'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddUser