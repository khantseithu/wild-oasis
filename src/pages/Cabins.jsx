import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";
import { getCabins } from "../services/apiCabins";
import { useEffect, useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
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
        <p>Filter / Sort</p>
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
