import axios from "axios";
import FileDownload from "js-file-download";
import React, { useEffect, useState } from "react";
import { CgPassword } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Load from "../loading/Loading";
import Coarse from "./coarse/Coarse.jsx";
import AddCor from "./coarse/form/AddCor.jsx";
import style from "./config.module.scss";
import AddHtk from "./wtk/form/AddHtk.jsx";
import Wtk from "./wtk/wtk.jsx";

const Config = () => {
  const Navigate = useNavigate();
  const [form, setForm] = useState(false);
  const [form2, setForm2] = useState(false);
  const [allCourse, setAllCourse] = useState([]);
  const [allHtk, setAllHtk] = useState([]);
  const [oldPass, setOldPass] = useState("");
  const [Pass, setPass] = useState("");
  const [cPass, setcPass] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/getallcourse");
        const allcoursedata = await res.json();
        return setAllCourse(allcoursedata);
      } catch (error) {
        console.log(error);
        return toast.error("some thing wrong in sever 😥");
      }
    };
    const getData2 = async () => {
      try {
        const res = await fetch("/getallhtk");
        const allhtkdata = await res.json();
        return setAllHtk(allhtkdata);
      } catch (error) {
        console.log(error);
        return toast.error("some thing wrong in sever 😥");
      }
    };
    getData();
    getData2();
  }, []);

  const changePass = async () => {
    if (Pass !== cPass) {
      setOldPass("");
      return toast.error("enter password properly");
    }
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Pass: Pass, oldPass: oldPass }),
    };
    try {
      const res = await fetch("/changepassword", settings);
      const status = res.status;
      if (status === 200) {
        toast.success("password changed plz login again 😀");
        document.cookie = 'me=""';
        document.cookie = 'go=""';
        return Navigate("/login");
      } else {
        return toast.error("some thing is wrong 😠");
      }
    } catch (error) {}
  };
  const getcsv = async () => {
    setloadem(true)
    try {
      axios({
        url: "/getcsv",
        method: "GET",
        responseType: "blob", // Important
      }).then((response) => {
        FileDownload(response.data, "entry.xlsx");
        setloadem(false)
      });
    } catch (error) {
      console.log(error);
      toast.error("some thing is wrong!");
      setloadem(false)
    }
  };

  const [loadem,setloadem] = React.useState(false);
  let input = React.useRef();

  async function uploadPhoto() {
    setloadem(true)
    let files = input.current.files;
    const formData = new FormData();
    formData.append("file", files[0]);
    try {
      const resdb = await axios.post("/importxlsx", formData);
      if (resdb.status === 200) {
        toast.success("data imported");
        setloadem(false)
      } else {
        toast.error("something is wrong");
        setloadem(false)
      }
    } catch (error) {
      console.log(error);
      toast.error("something is wrong!!");
      setloadem(false)
    }
  }

  return (
    <div className={style.main}>
      <div className={style.con}>
        <div className={style.export}>
          <div className={style.h}>
            <div className={style.btns}></div>
          </div>
        </div>
        <div
          style={{ paddingBottom: "10px", marginBottom: "20px" }}
          className={style.cpsection}
        >
          <div className={style.cpcom}>
            <div className={style.head}>
              <h1>
                <span>
                  <CgPassword />
                </span>{" "}
                Backup data
              </h1>
            </div>

            <div className={style.inputs}>
              <input ref={input} type="file" name="file" accept=".xlsx" />

                {loadem? <Load color={"#ff0000"}/>:
              (<>
              <button
                style={{ background: "rgb(255, 54, 54)", cursor: "pointer" }}
                onClick={uploadPhoto}
              >
                import data
              </button>
              <button
                style={{ background: "rgb(90, 255, 101)", cursor: "pointer" }}
                onClick={getcsv}
              >
                export data
              </button></>)}
            </div>
          </div>
        </div>
        <div className={style.cpsection}>
          <div className={style.cpcom}>
            <div className={style.head}>
              <h1>
                <span>
                  <CgPassword />
                </span>{" "}
                change admin password
              </h1>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                changePass();
              }}
              method="post"
            >
              <div className={style.inputs}>
                <input
                  value={oldPass}
                  onChange={(e) => {
                    setOldPass(e.target.value);
                  }}
                  type="password"
                  name="old"
                  placeholder="enter current password"
                  required
                />
                <input
                  value={Pass}
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                  type="password"
                  name="new"
                  placeholder="enter new password"
                  required
                />
                <input
                  value={cPass}
                  onChange={(e) => {
                    setcPass(e.target.value);
                  }}
                  type="text"
                  name="cnew"
                  placeholder="conferm current password"
                  required
                />
              </div>
              <div className={style.button}>
                <button type="submit">change</button>
              </div>
            </form>
          </div>
        </div>

        {/* change password section end  */}
        <div className={style.coarseSection}>
          <Coarse setForm={setForm} data={allCourse} setData={setAllCourse} />
        </div>
        <div className={style.coarseSection}>
          <Wtk setForm={setForm2} data={allHtk} setData={setAllHtk} />
        </div>
      </div>
      <div className={style.over}>
        {form ? (
          <AddCor data={allCourse} setData={setAllCourse} setForm={setForm} />
        ) : (
          <></>
        )}
      </div>
      <div className={style.over}>
        {form2 ? (
          <AddHtk data={allHtk} setData={setAllHtk} setForm={setForm2} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Config;
