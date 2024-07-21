import './App.css';
import BasicTable from './components/Fragments/Table/Index';

function App() {
  
  function createData(
    no,
    namaIg,
    namaData,
    produsen,
    tanggal,
  ) {
    return { no, namaIg, namaData, produsen, tanggal};
  }

  const rows = [
    createData('1', 'NAMA_DATA_IG_1', 'Nama Data 1', 'Nama Produsen 1', '01 Januari 2024'),
    createData('2', 'NAMA_DATA_IG_2', 'Nama Data 2', 'Nama Produsen 2', '22 Februari 2024'),
    createData('3', 'NAMA_DATA_IG_3', 'Nama Data 3', 'Nama Produsen 3', '05 Maret 2024'),
    createData('4', 'NAMA_DATA_IG_4', 'Nama Data 4', 'Nama Produsen 4', '19 April 2024'),
    createData('5', 'NAMA_DATA_IG_5', 'Nama Data 5', 'Nama Produsen 5', '25 Mei 2024'),
  ];
  
  return (
    <>
    <div className='d-flex flex-column rounded shadow bg-white p-5'>
      <BasicTable rows={rows} align="center" colorTextHeader="primary">KETERSEDIAAN DATA</BasicTable>
    </div>
    </>
  )
}

export default App;
