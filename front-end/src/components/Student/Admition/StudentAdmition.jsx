import React from "react";
import { FaUserAlt, FaUserPlus, FaUsers } from "react-icons/fa";
import style from "./admition.module.scss";

// input
import Inp from "./inp/Inp";
const StudentAdmition = () => {
  return (
    <div className={style.main}>
      <div className={style.con}>
        <div className={style.head}>
          <h1>
            <span>
              <FaUserPlus />
            </span>{" "}
            student Admition form
          </h1>
        </div>
        <div className={style.student}>
          <div className={style.hSt}>
            <h1>
              <span>
                <FaUserAlt />
              </span>{" "}
              Student Information
            </h1>
          </div>
          <div className={style.stinpg}>
            <div className={style.inpgt}>
              <div className={style.f}>
                <Inp name={"Student Name"} size="1" r={true} />
              </div>
              <div className={style.f}>
                <Inp name={"Phone"} size="1" r={true} />
                <Inp name={"Birth Date"} size="1" r={true} />
                <Inp name={"Profession"} size="1" r={false} />
              </div>
              <div className={style.f}>
                <Inp name={"Email"} size="2" r={true} />
                <Inp name={"Educational Qualification"} size="1" r={true} />
              </div>
            </div>
            <div className={style.imgInp}>
              <input type="file" accept="image/*" name="" id="" />
            </div>
          </div>
        </div>
        <div className={style.student}>
          <div className={style.hSt}>
            <h1>
              <span>
                <FaUsers />
              </span>{" "}
              Guardian Information
            </h1>
          </div>
          <div className={style.stinpg}>
            <div className={style.inpgt}>
              <div className={style.f}>
                <Inp name={"Student Name"} size="1" r={true} />
              </div>
              <div className={style.f}>
                <Inp name={"Phone"} size="1" r={true} />
                <Inp name={"Birth Date"} size="1" r={true} />
                <Inp name={"Profession"} size="1" r={false} />
              </div>
              <div className={style.f}>
                <Inp name={"Email"} size="2" r={true} />
                <Inp name={"Educational Qualification"} size="1" r={true} />
              </div>
            </div>
            <div className={style.imgInp}>
              <input type="file" accept="image/*" name="" id="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAdmition;
