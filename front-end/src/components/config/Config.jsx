import React from 'react';
import { CgPassword } from "react-icons/cg";
import style from './config.module.scss';

const Config = () => {
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
                            <input type="password" name="old" id="old" placeholder='enter current password' />
                            <input type="password" name="new" id="old" placeholder='enter new password' />
                            <input type="text" name="cnew" id="old" placeholder='conferm current password' />
                        </div>
                        <div className={style.button}>
                            <button type="submit">change</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Config