import React from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable
} from "react-table";
import mocdata from "./MOCK_DATA.json";
import style from "./Style.module.scss";

const Person = [
  {
    invoice: "1201",
    ammount: "300",
    categiry: "income",
    Date: "22-02-2023",
    admin: "Nahid",
  },
  {
    invoice: "1001",
    ammount: "300",
    categiry: "income",
    Date: "22-02-2023",
    admin: "Nahid",
  },
  {
    invoice: "1001",
    ammount: "300",
    categiry: "income",
    Date: "22-02-2023",
    admin: "sabbir",
  },
  {
    invoice: "1001",
    ammount: "300",
    categiry: "income",
    Date: "22-01-2023",
    admin: "sabbir",
  },
];

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
        Header: "ammount",
        accessor: "ammount",
      },
      {
        Header: "categiry",
        accessor: "categiry",
      },
      {
        Header: "Date",
        accessor: "Date",
      },
      {
        Header: "admin",
        accessor: "admin",
      },
    ],
    []
  );

  const tableInstance = useTable(
    { columns, data },
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
    pageCount
  } = tableInstance;

  const { globalFilter,pageIndex } = state;
  return (
    <div className={style.con}>
      <div className={style.filter}>
        search anything...
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
        <button className="nhBtn" disabled={!canPreviousPage} onClick={()=>gotoPage(0)}>frist</button>
        <button className="nhBtn" disabled={!canPreviousPage} onClick={()=>previousPage()}>prev</button>
        <span>
          page : {pageIndex+1 } of {pageOptions.length }
        </span>
        <button className="nhBtn" disabled={!canNextPage} onClick={()=>nextPage()} >next</button>
        <button className="nhBtn" disabled={!canNextPage} onClick={()=>gotoPage(pageCount - 1)} >last</button>
      </div>
    </div>
  );
};

export default Table;
