import dayjs from "dayjs";
import type { Order } from "../types/trip";

export const transformTripData = (trip: Order) => ({
  key: trip.order_id,
  name: trip.passengers[0]?.name ?? "-",
  email: trip.passengers[0]?.email ?? "-",
  phone: trip.passengers[0]?.phone ?? "-",
  ...trip,
  date: trip.date ? dayjs(trip.date).format("DD.MM.YYYY HH:mm") : "-",
  date_departure: trip.date_departure
    ? dayjs(trip.date_departure).format("DD.MM.YYYY HH:mm")
    : "-",
  date_arrival: trip.date_arrival
    ? dayjs(trip.date_arrival).format("DD.MM.YYYY HH:mm")
    : "-",
  destination_address: trip.destination_address ?? "-",
});
