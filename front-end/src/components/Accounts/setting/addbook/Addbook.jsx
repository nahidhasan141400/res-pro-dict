import axios from "axios";
import React, { useState } from "react";
import { FaPowerOff } from "react-icons/fa";
import { toast } from "react-toastify";
import style from "./add.module.scss";
const AddBook = ({ set }) => {
  const [name, setName] = useState();
  const [des, setDes] = useState();
  const [IntB, setIntB] = useState(0);

  // handler function for the form

  const formSubmit = async (e) => {
    e.preventDefault();
    if (!name || !des) {
      return toast.error("please write something about the book");
    }
    try {
      const res = await axios.post("/addbooksfroac", {
        name,
        des,
        IntB,
      });

      // eslint-disable-next-line eqeqeq
      if (res.status == 200) {
        set(false);
        toast.success("Book add successfully");
      } else {
        toast.error("somethings is wrong !");
        console.log("error ", res.data.err.msg);
      }
    } catch (error) {
      let err = await error.response.data.dublicate;

      if (err) {
        toast.error(Object.keys(err)[0] + " already exist");
        setName("")
      } else {
        toast.error("somethings is wrong !");
        console.log("error ", error);
      }
    }
  };

  return (
    <div className={style.main}>
      <div className={style.border}>
        <div className={style.con}>
          <div className={style.head}>
            <h1>Add New Book</h1>
          </div>
          <div className={style.form}>
            <form
              onSubmit={(e) => {
                formSubmit(e);
              }}
              method="post"
            >
              <div className={style.inputs}>
                <span>
                  <h4>Book Name</h4>
                </span>
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  required
                  placeholder="Book Name"
                />
              </div>
              <div className={style.inputs}>
                <span>
                  <h4>Book Description</h4>
                </span>
                <input
                  value={des}
                  onChange={(e) => {
                    setDes(e.target.value);
                  }}
                  type="text"
                  placeholder="About the book.."
                />
              </div>
              <div className={style.inputs}>
                <span>
                  <h4>Initial Balance</h4>
                </span>
                <input
                  value={IntB}
                  onChange={(e) => {
                    setIntB(e.target.value);
                  }}
                  type="number"
                  placeholder="000"
                />
              </div>

              <div className={style.btn}>
                <button type="submit">Add Book</button>
              </div>
            </form>
          </div>
          <div className={style.cls}>
            <button
              onClick={() => {
                set(false);
              }}
            >
              <FaPowerOff />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
