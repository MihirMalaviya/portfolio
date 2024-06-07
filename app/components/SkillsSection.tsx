import React from "react";

interface TableProps {
  data: [string, string[]][];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const renderHeader = () => {
    return (
      <div className="flex">
        {data.map((column, index) => (
          <div
            key={index}
            className="flex-1 pr-10 py-2 text-left text-primary-300 text-lg font-bold mb-5 "
          >
            {column[0]}
          </div>
        ))}
      </div>
    );
  };

  const renderRows = () => {
    const maxRows = Math.max(...data.map((column) => column[1].length));
    return Array.from({ length: maxRows }, (_, rowIndex) => (
      <div key={rowIndex} className="flex">
        {data.map((column, colIndex) => (
          <div key={colIndex} className="flex-1 pr-10 py-2">
            {column[1][rowIndex] || ""}
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="flex flex-col">
      {renderHeader()}
      {renderRows()}
    </div>
  );
};

export default Table;
