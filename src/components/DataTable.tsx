// import { Box, Table, Thead, Tbody, Tr, Th, Td, TableCaption, Button } from '@chakra-ui/react';
import {
  Box,
  Button,
  Tag,
  Select,
  FormControl,
  FormLabel,
  MenuItem,
  Input,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  TableCaption,
} from "@chakra-ui/table";
import { motion } from "framer-motion";

type DataTableProps = {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  caption?: string;
  sortable?: boolean;
  pagination?: boolean;
};

const DataTable = ({
  headers,
  rows,
  caption,
  sortable,
  pagination,
}: DataTableProps) => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [filteredRows, setFilteredRows] = useState(rows);

  const sortedRows = [...rows];
  if (sortable && sortColumn !== null) {
    sortedRows.sort((a, b) => {
      const columnIndex = headers.indexOf(sortColumn);
      const valueA = a[columnIndex];
      const valueB = b[columnIndex];

      // Custom sorting logic for the "Timestamp" column
      if (sortColumn === "Timestamp") {
        const hoursA =
          typeof valueA === "string" ? parseInt(valueA.split(" ")[0]) : 0;
        const hoursB =
          typeof valueB === "string" ? parseInt(valueB.split(" ")[0]) : 0;
        return sortDirection === "asc" ? hoursA - hoursB : hoursB - hoursA;
      }

      // Default string comparison for other columns
      if (typeof valueA === "string" && typeof valueB === "string") {
        return sortDirection === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }

      return 0;
    });
  }

  const handleSort = (column: string) => {
    if (sortable) {
      if (sortColumn === column) {
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
      } else {
        setSortColumn(column);
        setSortDirection("asc");
      }
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    const filteredData = rows.filter((row) =>
      row.some((cell) => (cell ?? "").toString().toLowerCase().includes(value))
    );
    setFilteredRows(filteredData);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedRows = pagination
    ? sortedRows.slice(startIndex, endIndex)
    : sortedRows;

  return (
    <Box overflowX="auto">
      <Box mb={4}>
        <Input placeholder="Search..." onChange={handleSearchChange} />
      </Box>
      <TableContainer>
        <Table variant="striped">
          {caption && <TableCaption>{caption}</TableCaption>}
          <Thead>
            <Tr>
              {headers.map((header) => (
                <Th
                  key={header}
                  onClick={() => handleSort(header)}
                  cursor={sortable ? "pointer" : "default"}
                  color={
                    sortable && sortColumn === header ? "blue.500" : undefined
                  }
                >
                  {header}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {paginatedRows.map((row, index) => {
              // Check if the row exists in filteredRows
              const rowIndexInFilteredRows = filteredRows.findIndex(
                (filteredRow) => filteredRow === row
              );

              // Render the row only if it exists in filteredRows
              if (rowIndexInFilteredRows !== -1) {
                return (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {row.map((cell, cellIndex) => {
                      if (headers[cellIndex] === "Status") {
                        let tagColor = "";
                        if (cell === "Waiting") {
                          tagColor = "yellow";
                        } else if (cell === "Failed") {
                          tagColor = "red";
                        } else if (cell === "Paid") {
                          tagColor = "green";
                        }

                        return (
                          <Td key={cellIndex}>
                            <Tag colorScheme={tagColor} size="sm">
                              {cell}
                            </Tag>
                          </Td>
                        );
                      } else if (headers[cellIndex] === "Select") {
                        return (
                          <Td key={cellIndex}>
                            <Button colorScheme="blue" size="sm">
                              {cell}
                            </Button>
                          </Td>
                        );
                      }
                      return <Td key={cellIndex}>{cell}</Td>;
                    })}
                  </motion.tr>
                );
              }

              // Return null if the row is not in filteredRows
              return null;
            })}
          </Tbody>
        </Table>
      </TableContainer>

      {pagination && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Button
            variant="outline"
            size="sm"
            onClick={handlePreviousPage}
            isDisabled={currentPage === 1}
            mr={2}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleNextPage}
            isDisabled={endIndex >= sortedRows.length}
          >
            Next
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default DataTable;
