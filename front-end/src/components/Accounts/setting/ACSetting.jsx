import axios from "axios";
import React, { useEffect, useState } from 'react';
import { AiOutlineTransaction } from "react-icons/ai";
import { BiBookAdd, BiBookAlt } from "react-icons/bi";
import { toast } from "react-toastify";
import AddBook from "./addbook/Addbook";
import List from './bookList/List';
import style from "./setting.module.scss";
import VoiceList from "./voiclist/VoiceList";

const ACSetting = () => {
    // module state 
    const [AddbookMod,setAddbookMod] = useState(false);
    const [BoolList,setBookList] = useState([]);
    const [reload,setReload] = useState(0);
    const [acid,setAcid] = useState("")
    

    //load books list 
    useEffect(()=>{
            const getdata = async ()=>{
                try {
                    const resdb = await axios.get("/ACBookall");
                    // console.log("🚀 ~ file: ACSetting.jsx:22 ~ getdata ~ resdb", resdb.data)
                    setBookList(resdb.data)
                    setAcid(resdb.data[0]?resdb.data[0]._id:"");
                } catch (error) {
                    toast.error("book list data can't serve from db!")
                }
            }
            getdata()
    },[reload])

  return (
    <div className={style.main}>
        {AddbookMod?<AddBook set={setAddbookMod} setReload={setReload}/>:""}
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
                    <List data={BoolList} acid={acid} setAcid={setAcid}/>
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

        {/* <div className={style.top}>
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
        </div> */}
        {/* payment head end  */}
       </div>
    </div>
  )
}

export default ACSetting