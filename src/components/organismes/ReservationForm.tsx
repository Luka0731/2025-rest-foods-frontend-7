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
  initialEndTime: string;
}

const ReservationForm: React.FC<ReservationFormProps> = ({
  tableId,
  initialStartTime,
  initialEndTime,
}) => {
  const initialValues = {
    guest_name: "",
    phone_number: "",
    end_time: initialEndTime,
    people_count: "",
    start_time: initialStartTime,
    table_id: tableId,
  };

  const createReservation = async (
    values: typeof initialValues
  ): Promise<void> => {
    const reservationData: Omit<Reservation, "id"> = {
      ...values,
      people_count: Number(values.people_count),
    };

    await ReservationService.createReservation(reservationData);
    alert(
      `Reservation confirmed. Details will be sent to: ${values.phone_number}`
    );
  };

  const validatePeopleCount = (value: string) => {
    return value ? undefined : "Please select number of people";
  };

  return (
    <Formik initialValues={initialValues} onSubmit={createReservation}>
      {({ isSubmitting }) => (
        <Form className="reservation-form">
          <div>
            <label htmlFor="guest_name">Name</label>
            <Field
              name="guest_name"
              id="guest_name"
              type="text"
              validate={validateOnlyText}
            />
            <ErrorMessage name="guest_name" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="phone_number">Phone Number</label>
            <Field
              name="phone_number"
              id="phone_number"
              type="text"
              validate={validatePhoneNumber}
            />
            <ErrorMessage
              name="phone_number"
              component="div"
              className="error"
            />
          </div>

          <div>
            <label htmlFor="people_count">Number of People</label>
            <Field
              as="select"
              id="people_count"
              name="people_count"
              className="dropdown"
              validate={validatePeopleCount}
              required
            >
              <option value="">Select...</option>
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="people_count"
              component="div"
              className="error"
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ReservationForm;
