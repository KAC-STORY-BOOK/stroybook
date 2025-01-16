import React, { useState } from "react";
import "./Table.css";

export interface Column<T> {
  header: string;
  accessor: keyof T;
  // 필요에 따라 커스텀 렌더러 추가 가능
  render?: (item: T[keyof T], row: T) => React.ReactNode;
}

export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  striped?: boolean; // 줄무늬 여부
  bordered?: boolean; // 테두리 여부
  hoverable?: boolean; // 호버 시 효과
}

export const Table = <T extends object>({
  data,
  columns,
  striped = false,
  bordered = false,
  hoverable = false,
}: TableProps<T>) => {
  const tableClass = [
    "custom-table",
    striped ? "striped" : "",
    bordered ? "bordered" : "",
    hoverable ? "hoverable" : "",
  ].join(" ");

  return (
    <table className={tableClass}>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td key={colIndex}>
                {col.render
                  ? col.render(row[col.accessor], row)
                  : (row[col.accessor] as React.ReactNode)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.displayName = "Table";

export default Table;
