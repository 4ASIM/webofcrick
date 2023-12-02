import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(trackingId,name,  date, status,detail) {
  return { trackingId,name,  date, status,detail};
}

const rows = [
  createData( 18908424,"Muhammad Asim", "2 March 2022", "3.5", "5"),
  createData( 18908424, "Uzair Ahmed ","2 March 2022", "5", "1"),
  createData( 18908424,"Ayesha Asif", "2 March 2022", "4", "3"),
  createData(18908421, "Fahad", "2 March 2022", "6", "3"),
  createData( 18908421,"Shahab Ali", "2 March 2022", "1.5", "3"),
  createData( 18908421, "Ali Hashir","2 March 2022", "2", "3"),
  createData( 18908421, "shahid","2 March 2022", "2.7", "3"),
  createData( 18908421, "Waqas","2 March 2022", "1.5", "3"),
  createData( 18908421, "Waqar","2 March 2022", "1", "3"),
  createData( 18908421, "Zohaib","2 March 2022", "5", "3"),
  createData( 18908421, "zargam","2 March 2022", "3", "3"),
];



export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Captain Details</h3>
      <TableContainer
        component={Paper}
        style={{
          boxShadow: "0px 13px 20px 0px #80808029",
          maxHeight: "400px", 
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Organizer ID</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Date Registered</TableCell>
              <TableCell align="left">Rating</TableCell>
              <TableCell align="left">Tourm organized</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.trackingId}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left"> {row.status}</TableCell>
                <TableCell align="left" >{row.detail}
                 
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
