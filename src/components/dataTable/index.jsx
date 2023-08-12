import PropTypes from "prop-types";
import MUIDataTable from "mui-datatables";

// mui data table common component
function DataTables(props) {
  // prop data
  const {
    serverSide,
    title,
    data,
    columns,
    serverSideUrl,
    apiUrl,
    rowsPerPage,
    onRowClick,
    customToolbar,
    count,
  } = props;

  // options for non server side data managment
  const options = {
    filter: true,
    print: false,
    download: false,
    search: true,
    rowsPerPage: [rowsPerPage],
    rowsPerPageOptions: [],
    responsive: "standard",
    selectableRows: false,
    viewColumns: true,
    customToolbar,
    onRowClick,
  };

  // options for non server side data managment
  const serverSideOption = {
    filter: true,
    print: false,
    download: false,
    search: true,
    rowsPerPage: [rowsPerPage],
    rowsPerPageOptions: [],
    responsive: "standard",
    selectableRows: false,
    viewColumns: true,
    customToolbar,
    onRowClick,
    serverSide: true,
    count: count,
    onTableChange: (action, tableState) => {
      let customUrl = apiUrl;
      if (action === "changePage") {
        const page = tableState.page + 1;
        customUrl += `&page=${page}`;
      }
      if (action === "search") {
        const searchText = tableState.searchText ? tableState.searchText : "";
        if (tableState.searchText) {
          customUrl += `&search=${searchText}`;
        }
      }

      if (tableState.sortOrder.name) {
        customUrl += tableState.sortOrder.direction === 'asc' ? `&ordering=${tableState.sortOrder.name}` : `&ordering=-${tableState.sortOrder.name}`;
      }

      if (action === "search" || action === "changePage" || action === "sort") {
        serverSideUrl(customUrl);
      }
    },
  };

  // return component
  return (
    <MUIDataTable
      title={title}
      data={data}
      columns={columns}
      options={serverSide ? serverSideOption : options}
    />
  );
}
export default DataTables;
DataTables.propTypes = PropTypes.any;
