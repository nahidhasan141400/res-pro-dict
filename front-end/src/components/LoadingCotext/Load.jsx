import React from 'react';
import Lottie from "react-lottie";
import style from './Load.module.scss';
import * as anim from "./loadAnim.json";

const Load = () => {
  return (
    <div className={style.main}>
        <div className={style.con}>
            <Lottie
                options={
                    {
                        loop: true,
                        animationData: anim,
                    }
                }

            />
        </div>
    </div>
  )
}

export default Load