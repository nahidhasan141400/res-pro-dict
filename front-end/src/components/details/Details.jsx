import React from 'react';
import { BiCommentDots } from "react-icons/bi";
import { BsBuilding } from "react-icons/bs";
import { FaRegComment, FaRegListAlt } from "react-icons/fa";
import { FiPhoneCall, FiUser } from "react-icons/fi";
import { ImBullhorn } from "react-icons/im";
import { useParams } from "react-router-dom";
import style from "./det.module.scss";

const Details = () => {
    let {id} = useParams();
    console.log(id)
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.head}>
                <h1><span>#</span>details</h1>
            </div>
            <div className={style.info}>
                <div className={style.infoi}>
                    <span className={style.ico}><FiUser/> name: </span><span>nahid hasan</span>
                </div>
                <div className={style.infoi}>
                    <span className={style.ico}><FiPhoneCall/> mobile: </span><span>01741013363</span>
                </div>
                <div className={style.infoi}>
                    <span className={style.ico}><BsBuilding/> company: </span><span>NH softower</span>
                </div>
            </div>
            <div className={style.comment}>
                <div className={style.comentitem}>
                    <div className={style.h}>
                        <span><ImBullhorn/> HTK</span>
                    </div>
                    <div className={style.t}>
                        <p>social media</p>
                    </div>
                </div>
                <div className={style.comentitem}>
                    <div className={style.h}>
                        <span><FaRegComment/> desition</span>                       
                    </div>
                    <div className={style.t}>
                        <p>পরে জানবেন </p>
                    </div>
                </div>
                <div className={style.comentitem}>
                    <div className={style.h}>
                        <span><BiCommentDots/> councilor comment</span>
                       
                    </div>
                    <div className={style.t}>
                        <p>social media</p>
                    </div>
                </div>
            </div>
            <div className={style.course}>
                <div className={style.h}>
                    <span><FaRegListAlt/> course</span>
                </div>
                <div className={style.cl}>
                    <span>webdevelopment</span>
                    <span>webdevelopment</span>
                    <span>webdevelopment</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details