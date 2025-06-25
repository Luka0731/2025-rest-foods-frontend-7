import StartCard from "../organismes/StartCard";
import TableChoice from "../organismes/Table";
import TableMap from "../organismes/TableCard";
import TopNav from "../organismes/TopNav";
import "../../styling/TableChoice.css";
import ReservationForm from "../organismes/ReservationForm";
const ReservationPage = () => {
  return (
    <>
      <TopNav />
      <StartCard
        src="https://media.admagazine.fr/photos/620bb95b9423b9bc26963a53/master/w_1600%2Cc_limit/Courtesy%2520Felicita.png"
        value="Reservations"
      />
      <TableMap />
      <TableChoice
        key={1}
        id={1}
        seats={2}
        isReserved={false}
        onClick={() => console.log("Click")}
      />
      <TableChoice
        key={1}
        id={1}
        seats={4}
        isReserved={false}
        onClick={() => console.log("Click")}
      />
      <TableChoice
        key={1}
        id={1}
        seats={6}
        isReserved={false}
        onClick={() => console.log("Click")}
      />
      <TableChoice
        key={1}
        id={1}
        seats={8}
        isReserved={false}
        onClick={() => console.log("Click")}
      />
      <ReservationForm
        tableId={1}
        initialStartTime={"12:00"}
        initialEndTime={"15:00"}
      ></ReservationForm>
    </>
  );
};

export default ReservationPage;
