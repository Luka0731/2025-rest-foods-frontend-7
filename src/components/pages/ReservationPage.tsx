import StartCard from "../organismes/StartCard";
import TableMap from "../organismes/TableCard";
import TopNav from "../organismes/TopNav";
import "../../styling/TableChoice.css";
const ReservationPage = () => {
  return (
    <>
      <TopNav />
      <StartCard
        src="https://media.admagazine.fr/photos/620bb95b9423b9bc26963a53/master/w_1600%2Cc_limit/Courtesy%2520Felicita.png"
        value="Reservations"
      />
      <TableMap />

    </>
  );
};

export default ReservationPage;
