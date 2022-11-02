import axios from 'axios';
import React from 'react';
import { IoMdAddCircle } from "react-icons/io";
import { toast } from "react-toastify";
import Load from "../../loading/Loading";
import style from './add.module.scss';
import Inp from './inp/Inp';

const AddUser = () => {
    // input data controler
    const [name,setname] = React.useState('');
    const [user,setuser] = React.useState('');
    const [phone,setphone] = React.useState('');
    const [email,setemail] = React.useState('');
    const [password,setpassword] = React.useState('');
    const [Cpassword,setCpassword] = React.useState('');
    //cahck btn
    const [chack,setChack] = React.useState(false);
    // load 
    const [load,setload] =  React.useState(false);

    // sent data to server
    const send = async ()=>{
        if(load){
            return
        }
        if(!name && !user && !phone && !email){
            toast.warn("please Fill The form")
            return setload(false)
        }
        setload(true)
        if(password !== Cpassword){
            toast.warning("Password not match!")
            return setload(false)
        }
        try {
            const formData = new FormData();
            formData.append("photo", photo);
            formData.append("name", name);
            formData.append("user", user);
            formData.append("phone", phone);
            formData.append("email", email);
            formData.append("password", password);

            let resdb = await axios.post("/addadminuser",formData);
            if(resdb.status === 200){
                console.log(resdb.data);
                toast("user added")
                return setload(false)            
            }else{
                toast.error("some thing is wrong!")
                return setload(false)
            }
        } catch (error) {
            console.log(error)
                toast.error("some thing is wrong!")
                return setload(false)
        }

        

    }


    // img controler 
    const [photo,setPhoto] = React.useState();
  const [photoUrl,setPhotoUrl] = React.useState();
  const ipref = React.useRef()
  const changeImg = (e)=>{
    setPhoto(e.target.files[0]);
    setPhotoUrl(URL.createObjectURL(e.target.files[0]))
  }
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.head}>
                <h1><span><IoMdAddCircle/></span>Add New User</h1>
            </div>
            <div className={style.fbody}>
                <div className={style.photo}>
                    <h1>Upload User Photo <span>(1*1, Max-Size:300kb)</span></h1>
                    <div className={style.picc}>
                        <img src={photoUrl} alt="" />
                        <input ref={ipref} type="file" accept="image/*"  onChange={(e)=>{changeImg(e)}} />
                        <button onClick={()=>{ ipref.current.click() }}>upload photo</button>
                    </div> 
                </div>
                <div className={style.row}>
                
                    <Inp name={"Name:"} r={true} size="1" v={name} change={(e)=>{setname(e.target.value)}} />
                    <Inp name={"Username:"} r={true} size="1" v={user} change={(e)=>{setuser(e.target.value)}}/>
                </div>
                <div className={style.row}>
                    <Inp name={"Phone:"} r={true} size="1" v={phone} change={(e)=>{setphone(e.target.value)}}/>
                    <Inp name={"Email:"} r={true} size="1" v={email} change={(e)=>{setemail(e.target.value)}}/>
                </div>
                <div className={style.row}>
                    <Inp name={"Password:"} r={true} size="1" type={chack?"text":'password'} v={password} change={(e)=>{setpassword(e.target.value)}} />
                    <Inp name={"Confirm Password:"} r={true} size="1" type={chack?"text":'password'} v={Cpassword} change={(e)=>{setCpassword(e.target.value)}} />
                </div>
                <div className={style.row}>
                   <div className={style.chs}>
                    <input checked={chack} onChange={(e)=>{setChack(e.target.checked)}} type="checkbox"/><span>Show Password</span>
                   </div>
                </div>
                <div className={style.row}>
                    <button onClick={send} >{load? <Load color={"#000000"} /> :"Add User"}</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddUser