import React from 'react';
import style from './des.module.scss';
const Batchdetails = () => {
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.head}>
                <h1><span>#</span>Batch details</h1>
            </div>
            <div className={style.info}>
                <div className={style.name}>
                    <h1><span>Batch Name:</span> morning</h1>
                </div>
                <div className={style.time}>
                    <div className={style.h}>
                        <h1><span>@</span>Class Time</h1>
                    </div>
                    <div className={style.cardG}>
                        {/* card */}
                        <div className={style.card}>
                            <div className={style.day}>
                                Saturday
                            </div>
                            <div className={style.t}>
                                <span>#</span>02:30 PM
                            </div>
                        </div>
                        {/* card  */}
                        <div className={style.card}>
                            <div className={style.day}>
                                Sunday
                            </div>
                            <div className={style.t}>
                                <span>#</span>02:30 PM
                            </div>
                        </div>
                        {/* card  */}
                        <div className={style.card}>
                            <div className={style.day}>
                                Monday
                            </div>
                            <div className={style.t}>
                                <span>#</span>02:30 PM
                            </div>
                        </div>
                        {/* card  */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Batchdetails