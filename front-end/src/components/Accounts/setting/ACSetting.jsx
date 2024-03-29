import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineTransaction } from "react-icons/ai";
import { BiAddToQueue, BiBookAdd, BiBookAlt, BiLineChart, BiLineChartDown } from "react-icons/bi";
import { toast } from "react-toastify";
import AddBook from "./addbook/Addbook";
import AddHead from "./addhead/AddHead";
import List from "./bookList/List";
import HeadDes from "./HeadDes/HeadDes";
import HeadList from "./headlist/List";
import style from "./setting.module.scss";
import VoiceList from "./voiclist/VoiceList";

const ACSetting = () => {
  // module state
  const [AddbookMod, setAddbookMod] = useState(false);
  const [AddHeadstate, setHeadstatus] = useState(false)
  const [BoolList, setBookList] = useState([]);
  const [HeadlList, setheadList] = useState([]);
  const [reload, setReload] = useState(0);
  const [acid, setAcid] = useState("");
  const [HeadDetailse, setHeadDetailse] = useState();

  //load books list
  useEffect(() => {
    const getdata = async () => {
      try {
        const resdb = await axios.get("/ACBookall");
        setBookList(resdb.data);
        setAcid(resdb.data[0] ? resdb.data[0]._id : "");
      } catch (error) {
        toast.error("book list data can't serve from db!");
      }
    };
    getdata();
  }, [reload]);
    //load head list
    useEffect(() => {
      const getdata = async () => {
        try {
          const resdb = await axios.get("/ACHeadAll");
          setheadList(resdb.data);
        } catch (error) {
          toast.error("Head list data can't serve from db!");
        }
      };
      getdata();
    }, [reload]);

  return (
    <div className={style.main}>
      {AddbookMod ? <AddBook set={setAddbookMod} setReload={setReload} /> : ""}
      {AddHeadstate ? <AddHead set={setHeadstatus} setReload={setReload} head={AddHeadstate} /> : ""}
      {HeadDetailse ? <HeadDes headdata={HeadDetailse} setReload={setReload} sethead={setHeadDetailse}/> : ""}
      <div className={style.con}>
        <div className={style.top}>
          <div className={style.left}>
            <div className={style.bookHead}>
              <div className={style.cardwitnlogo}>
                <span>
                  <BiBookAlt />
                </span>
                <p>Account books </p>
              </div>
              <div
                onClick={() => setAddbookMod(true)}
                className={style.cardwitnlogo}
              >
                <span>
                  <BiBookAdd />
                </span>
                <p>Add New books</p>
              </div>
            </div>
            <div className={style.listBook}>
              <List data={BoolList} acid={acid} setAcid={setAcid} />
            </div>
          </div>
          <div className={style.right}>
            <div className={style.voiceHead}>
              <span>
                <AiOutlineTransaction />
              </span>
              Recent Transaction
            </div>
            <div className={style.li}>
              <VoiceList />
            </div>
          </div>
        </div>

        {/* gap  */}
        <div className={style.gap}></div>
        {/* payment head  */}

        <div className={style.top}>
          <div className={style.left}>
            <div className={style.head2}>
              <div className={style.b}>
                <div className={style.te}>
                    <span><BiLineChart/></span>income head
                </div>
              </div>
              <div className={style.b}>
                <button onClick={()=>{setHeadstatus("income")}} className="nhBtn"><span><BiAddToQueue/></span> Add income head</button>
              </div>
            </div>
            <div className={style.listofacchead}>
                    <HeadList sethead={setHeadDetailse} data={HeadlList.filter((e)=> e.IOS)}/>
                </div>
          </div>
          <div className={style.left +" "+ style.toppadding}>
          <div className={style.head2}>
              <div className={style.b}>
                <div className={style.te}>
                    <span><BiLineChartDown/></span>Expense Head
                </div>
                
              </div>
              <div className={style.b}>
                <button onClick={()=>{setHeadstatus("expense")}} className="nhBtn"><span><BiAddToQueue/></span> Add Expense Head</button>
              </div>
            </div>
            <div className={style.listofacchead}>
                    <HeadList sethead={setHeadDetailse} data={HeadlList.filter((e)=> !e.IOS)}/>
                </div>
          </div>
        </div>
        {/* payment head end  */}
      </div>
    </div>
  );
};

export default ACSetting;
