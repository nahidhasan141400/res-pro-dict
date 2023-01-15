import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import React from 'react';
import style from './list.module.scss';
import Table from "./table/Table";


const top100Films = [
    'nahid',
    "sagar",
    "hasan"
   
  ];

const List = () => {
    const [value , setValue ] = React.useState('')
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.head}>
                <h1><span>#</span> student list </h1>
            </div>
            <div className={style.query}>
            <Autocomplete
                    disablePortal
                    onChange={(e)=>{setValue(e.target,value)}}
                    value={value}
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ width: 200 }}
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                />
            </div>
            <div className={style.table}>
            <Table/>
            </div>
        </div>
    </div>
  )
}

export default List