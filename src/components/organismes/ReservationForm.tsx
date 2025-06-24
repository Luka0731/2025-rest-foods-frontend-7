import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  ReservationService,
  type Reservation,
} from "../../services/ReservationService";
import { validateOnlyText, validatePhoneNumber } from "../Validations";

interface ReservationFormProps {
  tableId: number;
  initialStartTime: string;
}

const ReservationForm: React.FC<ReservationFormProps> = ({
  tableId,
  initialStartTime,
}) => {
  const initialValues: Reservation = {
    guest_name: "",
    phone_number: "",
    end_time: "",
    people_count: "",
    id: 0,
    start_time: initialStartTime,
    table_id: tableId,
  };

  const createReservation = async (
    values: Partial<Reservation>
  ): Promise<void> => {
    await ReservationService.createReservation(
      values as Omit<Reservation, "id">
    );
    alert(
      `Reservation confirmed. Details will be sent to: ${values.phone_number}`
    );
  };

  return (
    <Formik initialValues={initialValues} onSubmit={createReservation}>
      <Form className="reservation-form">
        <div>
          <label htmlFor="guest_name"> Name</label>
          <Field name="guest_name" type="text" validate={validateOnlyText} />
          <ErrorMessage name="guest_name" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="phone_number">Phone Number</label>
          <Field
            name="phone_number"
            type="text"
            validate={validatePhoneNumber}
          />
          <ErrorMessage name="phone_number" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="start_time">Start Time</label>
          <label> {initialStartTime}</label>
          <ErrorMessage name="start_time" component="div" className="error" />
        </div>
        <label htmlFor="peopleCount">Number of People</label>
        <Field
          as="select"
          id="people_count"
          name="people_count"
          className="dropdown"
          required
        >
          <option value="">Select...</option>
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </Field>
        <ErrorMessage name="peopleCount" component="div" className="error" />
        <p className="info-note">
          A confirmation with your reservation details will be sent to the phone
          number provided.
        </p>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ReservationForm;
