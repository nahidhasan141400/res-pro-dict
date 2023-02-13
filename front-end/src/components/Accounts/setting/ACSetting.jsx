import React, { useState } from 'react';
import { AiOutlineTransaction } from "react-icons/ai";
import { BiBookAdd, BiBookAlt } from "react-icons/bi";
import AddBook from "./addbook/Addbook";
import List from './bookList/List';
import style from "./setting.module.scss";
import VoiceList from './voiclist/VoiceList';

const ACSetting = () => {
    // module state 
    const [AddbookMod,setAddbookMod] = useState(false);
    

  return (
    <div className={style.main}>
        {AddbookMod?<AddBook set={setAddbookMod}/>:""}
       <div className={style.con}>
        <div className={style.top}>
            <div className={style.left}>
                <div className={style.bookHead}>
                    <div className={style.cardwitnlogo}>
                        <span><BiBookAlt/></span>
                        <p>Account books</p>
                    </div>
                    <div onClick={()=>setAddbookMod(true)} className={style.cardwitnlogo}>
                        <span><BiBookAdd/></span>
                        <p>Add New books</p>
                    </div>
                </div>
                <div className={style.listBook}>
                    <List/>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.voiceHead}>
                    <span><AiOutlineTransaction/></span>Recent Transaction
                </div>
                <div className={style.li}>
                        <VoiceList/>
                </div>
            </div>
        </div>


{/* gap  */}
<div className={style.gap}></div>
        {/* payment head  */}

        <div className={style.top}>
            <div className={style.left}>
                <div className={style.bookHead}>
                    <div className={style.cardwitnlogo}>
                        <span><BiBookAlt/></span>
                        <p>Account books</p>
                    </div>
                    <div className={style.cardwitnlogo}>
                        <span><BiBookAdd/></span>
                        <p>Add New books</p>
                    </div>
                </div>
                <div className={style.listBook}>
                    <List/>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.voiceHead}>
                    <span><AiOutlineTransaction/></span>Recent Transaction
                </div>
                <div className={style.li}>
                        <VoiceList/>
                </div>
            </div>
        </div>
        {/* payment head end  */}
       </div>
    </div>
  )
}

export default ACSetting