import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";
import Filter from "../ui/Filter";

import { getCabins } from "../services/apiCabins";
import { useEffect, useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import AddCabin from "../features/cabins/AddCabin";

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getCabins().then((data) => console.log(data));
  }, []);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
        {/*
        <Button onClick={() => setShowForm(!showForm)}>Add cabin</Button>
        {showForm && <CreateCabinForm />}*/}
      </Row>
    </>
  );
}

export default Cabins;
