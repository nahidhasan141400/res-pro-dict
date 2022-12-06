import React from 'react';
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { CgExtensionRemove } from "react-icons/cg";
import { GiSpeedometer } from "react-icons/gi";
import Inp from './inp/Inp';
import Opt from "./inp/Opt";
import style from "./quick.module.scss";

import useAllCourses from "../../../hooks/UseAllCourses";



const Quick = () => {
    const allCourses = useAllCourses();
    const [list,setlist] = React.useState([]);
    // const [name,setname] = React.useState([]);

    function del (){
        setlist((pre)=>{
            let tempA = [...pre]
            tempA.pop();
            return [...tempA]
        })
    }
  
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.head}>
                <h1><span><GiSpeedometer/></span> Quick Admission</h1>
            </div>
            <form action='/quickAdmi' method='post'>
                <div className={style.table}>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Course</th>
                            </tr>
                        </thead>
                        <tbody>
                        {/* <tr>
                            <th><Inp name={"name"}/></th>
                            <th><Inp name={"phone"}/></th>
                            <th><Opt data={allCourses} name={"cou"} /></th>
                        </tr> */}
                                {list}
                        </tbody>
                    </table>
                </div>
                <div className={style.action}>
                    <div className={style.inpg}>
                        <button type='button' onClick={()=>{ setlist((pre)=>{return [...pre,<tr>
                            <th><Inp name={"name"}/></th>
                            <th><Inp name={"phone"}/></th>
                            <th><Opt data={allCourses} name={"course"} /></th>
                        </tr>]})}}><span> <AiOutlineAppstoreAdd/> </span> Add New</button>
                        <button type='button' onClick={del}> <span><CgExtensionRemove/></span> Remove Last</button>
                    </div>
                    <div className={style.inpg}>
                        <button type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Quick