import React from 'react';
import style from "./ADD.module.scss";

const AddBookMod = () => {
  return (
    <div className={style.mod}>
        <div className={style.body}>
            <div className={style.con}>
                <div className={style.head}>
                    <h1><span>#</span> Add New Book</h1>
                </div>
                <div className={style.form}>
                    <div className={style.inpg}>
                        <label htmlFor="name">Book Name</label>
                        <input type="text" name="name" id="" placeholder='book name'/>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default AddBookMod