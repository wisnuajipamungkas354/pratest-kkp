import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from 'react-bootstrap/Button';
import { BsSearch } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
import { useState } from 'react';
import HeaderTable from './HeaderTable';
import ModalUlasan from '../Modal/Index';

const TableContent = (props) => {

    const { colorTextHeader = "dark", children, rows, align = "left" } = props;

    // EventHandler
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className='container'>
    <HeaderTable color={colorTextHeader}>{children}</HeaderTable>
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='text-primary fw-bold fs-6 border-primary border-bottom'>No</TableCell>
            <TableCell className='text-primary fw-bold fs-6 border-primary border-bottom' align={align}>Nama IG</TableCell>
            <TableCell className='text-primary fw-bold fs-6 border-primary border-bottom' align={align}>Nama Data</TableCell>
            <TableCell className='text-primary fw-bold fs-6 border-primary border-bottom' align={align}>Produsen Data</TableCell>
            <TableCell className='text-primary fw-bold fs-6 border-primary border-bottom' align={align}>Tanggal Data</TableCell>
            <TableCell className='text-primary fw-bold fs-6 border-primary border-bottom' align={align}>Aksi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.namaIg}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.no}
              </TableCell>
              <TableCell align={align}>{row.namaIg}</TableCell>
              <TableCell align={align}>{row.namaData}</TableCell>
              <TableCell align={align}>{row.produsen}</TableCell>
              <TableCell align={align}>{row.tanggal}</TableCell>
              <TableCell align={align}>
                <Button type="search" variant="success" size="sm" className='m-1'>
                <BsSearch />
                </Button>
                <Button type="button" variant="primary" size="sm" onClick={handleShow}>
                <BsDownload />
                </Button>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <ModalUlasan show={show} handleClose={handleClose}></ModalUlasan>
    </div>
  );
}

export default TableContent;
