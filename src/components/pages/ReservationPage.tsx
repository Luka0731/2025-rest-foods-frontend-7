import { useState, useEffect } from "react";
import StartCard from "../organismes/StartCard";
import {
  ReservationService,
  type Reservation,
} from "../../services/ReservationService";
import { TableService, type Table } from "../../services/TableService";
import Title from "../atoms/Title";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import ErrorMessage from "../atoms/ErrorMessage";
import {
  Container,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

const ReservationPage = () => {
  const [tables, setTables] = useState<Table[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    guest_name: "",
    phone_number: "",
    start_time: "",
    end_time: "",
    table_id: 0,
    people_count: 1,
  });

  useEffect(() => {
    loadTables();
  }, []);

  const loadTables = async () => {
    try {
      const data = await TableService.getTables();
      setTables(data.filter((table) => table.available));
    } catch (err) {
      setError("Fehler beim Laden der Tische");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "people_count" ? parseInt(value) || 1 : value,
    }));
  };

  const handleSelectChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      table_id: e.target.value,
    }));
  };

  const calculateEndTime = (startTime: string): string => {
    if (!startTime) return "";
    const start = new Date(startTime);
    start.setHours(start.getHours() + 2);
    return start.toISOString().slice(0, 16);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    try {
      const reservationData = {
        ...formData,
        end_time: calculateEndTime(formData.start_time),
      };

      await ReservationService.createReservation(reservationData);
      setSuccess(true);
      setFormData({
        guest_name: "",
        phone_number: "",
        start_time: "",
        end_time: "",
        table_id: 0,
        people_count: 1,
      });

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (err: any) {
      setError(err.response?.data?.message || "Fehler bei der Reservierung");
    } finally {
      setLoading(false);
    }
  };

  const selectedTable = tables.find((t) => t.id === formData.table_id);
  const maxPeople = selectedTable ? selectedTable.seats : 1;

  return (
    <>
      <StartCard
        src="https://media.admagazine.fr/photos/620bb95b9423b9bc26963a53/master/w_1600%2Cc_limit/Courtesy%2520Felicita.png"
        value="Reservierungen"
      />

      <Container maxWidth="md" sx={{ py: 4 }}>
        <Title>Tisch reservieren</Title>

        {error && <ErrorMessage message={error} />}
        {success && (
          <div
            style={{
              padding: "1rem",
              backgroundColor: "#4caf50",
              color: "white",
              borderRadius: "4px",
              marginBottom: "1rem",
            }}
          >
            Reservierung erfolgreich erstellt!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            Name:
            <Grid item xs={12} md={6}>
              <Input
                label="Name"
                name="guest_name"
                value={formData.guest_name}
                onChange={handleInputChange}
                required
                fullWidth
              />
            </Grid>
            Telefonnummer:
            <Grid item xs={12} md={6}>
              <Input
                label="Telefonnummer"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleInputChange}
                required
                fullWidth
              />
            </Grid>
            Datum:
            <Grid item xs={12} md={6}>
              <Input
                label="Datum und Uhrzeit"
                name="start_time"
                type="datetime-local"
                value={formData.start_time}
                onChange={handleInputChange}
                required
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            Anzahl Gäste:
            <Grid item xs={12} md={6}>
              <Input
                label="Anzahl Personen"
                name="people_count"
                type="number"
                value={formData.people_count}
                onChange={handleInputChange}
                required
                fullWidth
                inputProps={{
                  min: 1,
                  max: maxPeople,
                }}
                helperText={
                  selectedTable
                    ? `Max. ${maxPeople} Personen`
                    : "Bitte erst Tisch wählen"
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                disabled={loading || !formData.table_id}
                fullWidth
              >
                {loading ? "Wird reserviert..." : "Jetzt reservieren"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default ReservationPage;
