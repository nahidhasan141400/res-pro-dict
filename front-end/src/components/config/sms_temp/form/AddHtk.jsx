import axios from 'axios';
import React, { useState } from 'react';
import { FaPowerOff, FaSms } from "react-icons/fa";
import { VscWholeWord } from "react-icons/vsc";
import { toast } from "react-toastify";
import style from './add.module.scss';

const AddHtk = ({setForm,data,setData,id,ei}) => {
    const [value,setValue] = useState('');
    const [text,setText] = useState('');

    React.useEffect(()=>{
        if(ei){
            setValue(id.name);
            setText(id.text)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ei])
    const update = async ()=>{
        try {
            const resdb = await axios.post('/updatesmstemp',{
                _id:id.id,
               name:value,
                text
            });
            if(resdb.status === 200){
                toast.success("sms update successfully 👌")
                
                setData(resdb.data)
                return setForm(false)
            }else{
                toast.error("something is wrong 😥")
            }

        } catch (error) {
            toast.error("something is wrong 😥")
                console.log(error);
        }
    }

    const submit = (e)=>{
        e.preventDefault()

        if(value === "" || text === ""){
            return toast.warn("fill the form !")
        }
        console.log(e)
        if(ei){
            return update();
        }

        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },body:JSON.stringify({sms:value,text})
        };
        let send = async ()=>{ 
            try {
                let res = await fetch(`/addsmstemp`, settings);
                let resData = await res.json();
                let status = await res.status;
                if(status === 200){
                    toast.success("sms add successfully. 👌")
                    let nd = [...data];
                    nd.push(resData)
                    setData(nd)
                    return setForm(false)
                }
            } catch (error) {
                toast.error("something is wrong 😥")
                console.log(error);
            }
        }
        send()
    }
  return (
    
    <div className={style.main}>
        <div className={style.border}>
        <div className={style.con}>
            <div className={style.head}>
                <h1>{ei? "Update":"Add a"} sms temp</h1>
            </div>
            <div className={style.form}>
                <form onSubmit={submit}  method="post">
                    <div className={style.inputs}>
                        <span>SMS Temp Name</span>
                        <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} required/>
                        <span>Text</span>
                        <textarea value={text} onChange={(e)=>{setText(e.target.value)}} cols="30" rows="10">
                        </textarea>
                        <div className={style.ifo}>
                            <span><VscWholeWord/>{text.length}</span>
                            <span><FaSms/>{parseInt((text.length / 70)+1)}</span>
                        </div>
                        <div className={style.note}>
                            <span>note:</span>(70 character = 1 sms). Only use Bangla for text. Maximum 600 character
                        </div>
                    </div>
                    <div className={style.btn}>
                        <button type='submit'>{ei?"update":"add SMS"}  </button>
                    </div>
                </form>
            </div>
            <div className={style.cls}>
                <button onClick={()=>{setForm(false)}}><FaPowerOff/></button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AddHtk