import { useEffect } from "react";
import { useState } from "react";

const useSortColumn = (data, columnObj) => {
  const [sortedData, setSortedData] = useState(data);
  const [columns, setColumns] = useState(columnObj);

  useEffect(() => {
    setSortedData(data);
  }, [data]);

  const handleSort = (arg) => {
    setColumns({ ...columns, [arg]: columns[arg] * -1 });
    setSortedData(
      sortedData
        ?.map((item) => item)
        .sort((a, b) => {
          if (!isNaN(Number(a[arg]))) {
            return columns[arg] * (a[arg] - b[arg]);
          } else {
            if (columns[arg] === 1) {
              return b[arg] > a[arg] ? 1 : b[arg] < a[arg] ? -1 : 0;
            } else {
              return a[arg] > b[arg] ? 1 : a[arg] < b[arg] ? -1 : 0;
            }
          }
        })
    );
  };

  return { handleSort, sortedData, columns };
};

export default useSortColumn;
