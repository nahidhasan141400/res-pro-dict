import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { BiCheckCircle, BiFilterAlt, BiKey } from "react-icons/bi";
import { BsFileEarmarkPdf, BsFillArrowLeftCircleFill } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";
import { RiFileExcel2Line } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoad } from "../../../../context/LodingAuth";
import style from "./book.module.scss";
import Table from "./table/Table";
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookid]);



  // update book status .......
  const update = useCallback(
    (st) => {
      const updaet = async(st)=>{
        try {
          const resdb = await axios.post("/accbookstatsuupdate",{status:st, _id: bookid});
          const data = await resdb.data;
          setBookdata(data)
          toast.info("status Change ")
        } catch (error) {
          console.log(error)
          toast.error("something is wrong!")
        }
      }
      updaet(st);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )
  


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
                <span>{bookData.balance} tk</span>
              </div>
            </div>
          </div>
        </div>
        {/* name and balanced  */}
        <div className={style.analysis}>
          {/* change stattus  start*/}
                <div  className={style.box}>
                    <div onClick={()=>{update(bookData.status?false:true)}} title={ bookData.status ? "Update to Deactive":"update to active"} className={`${style.status} ${bookData.status? style.ac : style.dc}`}>
                        <span>{ !bookData.status ? "Deactive":"active"}</span>
                        <span className={style.icon}>{bookData.status?<BiCheckCircle/>:<FiXCircle/>}</span>
                    </div>
                </div>
                {/* change status end */}
                {/* details data about the tarnsiction  */}
                <div style={{textAlign:"right"}} className={style.box}>
                    <div className={style.aa}>
                      <div>Total Income : 0000tk</div>
                      <div>Total Expenses : 0000tk</div>
                      <div>Total transiction : 0000tk</div>
                    </div>
                </div>
                {/* details data about the tarnsiction  */}
        </div>
        {/* name and abalanced end  */}
        {/* btn group for opration start */}
        <div className={style.btngrop}>
          <div className={style.btncon}>
            <div className={style.btnwr}>
              <button><span><BiKey/></span> user permision</button>
            </div>
            <div className={style.btnwr}>
              <button><span><RiFileExcel2Line/></span> Excel</button>
            </div>
            <div className={style.btnwr}>
              <button><span><BsFileEarmarkPdf/></span> PDF</button>
            </div>
            <div className={style.btnwr}>
              <button><span><BiFilterAlt/></span> Filter</button>
            </div>
          </div>
        </div>
        {/* btn group for opration start */}
        {/* table start  */}
          <div className={style.tableCon}>
              <Table/>
          </div>
        {/* table end  */}
      </div>
    </div>
  );
};

export default BookDes;
