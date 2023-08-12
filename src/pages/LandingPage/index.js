import TableComponent from "../../components/dataTable";
import { getDataList } from "../../store/thunk/dataThunk";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useEffect } from "react";

// column list which will include in the table
const columns = [
  {
    name: "id",
    label: "id",
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: "title",
    label: "title",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "company",
    label: "company",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "description",
    label: "description",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "job_id",
    label: "job_id",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "location",
    label: "location",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "job_link",
    label: "job_link",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "source",
    label: "source",
    options: {
      filter: false,
      sort: true,
    },
  }

];

// export landing page component
export default function LandingPage() {
  const dispatch = useAppDispatch();

  const { data } = useAppSelector((state) => state.dataReducer);

  // get data when table is loading
  useEffect(() => {
    dispatch(getDataList());
  }, []);

  // return table component
  return (
    <TableComponent
      serverSide={true}
      title=""
      data={data?.results || []}
      columns={columns}
      serverSideUrl={(newApiUrl) => {
        dispatch(getDataList({ url: newApiUrl }));
      }}
      apiUrl={process.env.REACT_APP_API_URL + "jobs/list-jobs/?"}
      rowsPerPage={[10]}
      count={data?.count || 0}
    />
  );
}
