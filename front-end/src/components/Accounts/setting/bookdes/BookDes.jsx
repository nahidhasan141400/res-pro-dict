import axios from "axios";
import React, { useEffect } from "react";
import { BiCheckCircle } from "react-icons/bi";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoad } from "../../../../context/LodingAuth";
import style from "./book.module.scss";
const BookDes = () => {
  const { setLoading } = useLoad();
  const navigate = useNavigate();

  const { bookid } = useParams("");
  const [bookData, setBookdata] = React.useState({});
  useEffect(() => {
    setLoading(true);
    const get = async () => {
      try {
        const resdb = await axios.post("/getbookbyid", { _id: bookid });
        setBookdata(resdb.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        toast.error("some thing is wrong");
        setLoading(false);
      }
    };
    get();
  }, []);

  return (
    <div className={style.main}>
      <div className={style.con}>
        <div onClick={() => navigate(-1)} title="back to setting" className={style.nav}>
          <span>
            <BsFillArrowLeftCircleFill />
          </span>
        </div>
        <div className={style.head}>
          <h1>
            <span>
              <FaBookOpen />
            </span>
            {bookData.name} books details
          </h1>
        </div>
        <div className={style.des}>
          <div className={style.box}>
            <div className={style.name}>
              <div>
                <span>Book Name</span>: {bookData.name}
              </div>
              <div>
                <span>Description</span>: {bookData.des}
              </div>
            </div>
          </div>
          <div className={style.box}>
            <div className={style.balence}>
              <span className={style.ico}></span>
              <div className={style.text}>
                <span className={style.ti}>total balance</span>
                <span>20000202 $</span>
              </div>
            </div>
          </div>
        </div>
        {/* name and balanced  */}
        <div className={style.analysis}>
                <div className={style.box}>
                    <div title={ bookData.status ? "Update to Deactive":"update to active"} className={`${style.status} ${bookData.status? style.ac : style.dc}`}>
                        <span>{ !bookData.status ? "Deactive":"active"}</span>
                        <span className={style.icon}>{bookData.status?<BiCheckCircle/>:<FiXCircle/>}</span>
                    </div>
                </div>
                <div className={style.box}>
                    <div className={style.aa}></div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default BookDes;
