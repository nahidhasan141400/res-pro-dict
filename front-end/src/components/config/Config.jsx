import React, { useState } from 'react';
import { CgPassword } from "react-icons/cg";
import Coarse from "./coarse/Coarse.jsx";
import AddCor from './coarse/form/AddCor.jsx';
import style from './config.module.scss';

const Config = () => {
    const [form,setForm] = useState(false);
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.cpsection}>
                <div className={style.cpcom}>
                    <div className={style.head}>
                        <h1><span><CgPassword/></span> change admin password</h1>
                    </div>
                    <form  method="post">
                        <div className={style.inputs}>
                            <input type="password" name="old"  placeholder='enter current password' />
                            <input type="password" name="new" placeholder='enter new password' />
                            <input type="text" name="cnew"  placeholder='conferm current password' />
                        </div>
                        <div className={style.button}>
                            <button type="submit">change</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* change password section end  */}
            <div className={style.coarseSection}>
                <Coarse setForm={setForm}/>
            </div>
        </div>
        <div className={style.over}>
            {form?<AddCor setForm={setForm}/>:<></>}
            
        </div>
    </div>
  )
}

export default Config