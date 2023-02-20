import React from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdFirstPage, MdOutlineLastPage } from "react-icons/md";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable
} from "react-table";
import mocdata from "./MOCK_DATA.json";
import style from "./Style.module.scss";

// const Person = [
//   {
//     invoice: "1201",
//     ammount: "300",
//     categiry: "income",
//     Date: "22-02-2023",
//     admin: "Nahid",
//   },
//   {
//     invoice: "1001",
//     ammount: "300",
//     categiry: "income",
//     Date: "22-02-2023",
//     admin: "Nahid",
//   },
//   {
//     invoice: "1001",
//     ammount: "300",
//     categiry: "income",
//     Date: "22-02-2023",
//     admin: "sabbir",
//   },
//   {
//     invoice: "1001",
//     ammount: "300",
//     categiry: "income",
//     Date: "22-01-2023",
//     admin: "sabbir",
//   },
// ];

const Table = () => {
  const data = React.useMemo(() => mocdata, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id", // accessor is the "key" in the data
      },
      {
        Header: "Invoice",
        accessor: "invoice", // accessor is the "key" in the data
      },
      {
        Header: "Amount",
        accessor: "ammount",
        Cell:(prop)=>{
          return prop.row.original.id
        }
      },
      {
        Header: "Category",
        accessor: "categiry",
      },
      {
        Header: "Date",
        accessor: "Date",
      },
      {
        Header: "Admin",
        accessor: "admin",
      },
    ],
    []
  );

  const tableInstance = useTable(
    { columns, data, initialState: { pageIndex: 0 }, },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    page,
    nextPage,
    previousPage,
    canNextPage,
    pageOptions,
    canPreviousPage,
    setGlobalFilter,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const { globalFilter,pageIndex,pageSize } = state;
  return (
    <div className={style.con}>
      <div className={style.filter}>
        <span><AiOutlineFileSearch/></span>Search Anything :
        <input
          type="text"
          value={globalFilter || ""}
          onChange={(e) => {
            setGlobalFilter(e.target.value);
          }}
        />
      </div>
      <table {...getTableProps()}>
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      {/* Add a sort direction indicator */}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " 🔽"
                            : " 🔼"
                          : ""}
                      </span>
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            page.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()}>
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <div className={style.pagination}>
        <button className="nhBtn" disabled={!canPreviousPage} onClick={()=>gotoPage(0)}> <span><MdFirstPage/></span>first </button>
        <button className="nhBtn" disabled={!canPreviousPage} onClick={()=>previousPage()}><span><IoIosArrowBack/></span> prev</button>
        <span className={style.pageindex}>
          page : {pageIndex+1 } of {pageOptions.length }  <span> </span>
          <select value={pageSize} onChange={(e)=>{setPageSize(Number(e.target.value))}}>
            <option value="10">Show 10</option>
            <option value="20">Show 20</option>
            <option value="30">Show 30</option>
            <option value="40">Show 40</option>
            <option value="50">Show 50</option>
            <option value="60">Show 60</option>
            <option value="70">Show 70</option>
            <option value="80">Show 80</option>
            <option value="90">Show 90</option>
            <option value="100">Show 100</option>
            <option value="150">Show 150</option>
            <option value="200">Show 200</option>
          </select>
        </span>
        <button className="nhBtn" disabled={!canNextPage} onClick={()=>nextPage()} ><span><IoIosArrowForward/></span> next</button>
        <button className="nhBtn" disabled={!canNextPage} onClick={()=>gotoPage(pageCount - 1)} ><span><MdOutlineLastPage/></span> last</button>
      </div>
    </div>
  );
};

export default Table;
