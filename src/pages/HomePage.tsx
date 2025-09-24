import { useEffect, useMemo } from "react";
import { useGetTripsQuery } from "../store/api/tripApi";
import { Table } from "antd";
import { columns } from "../common/tableColumns";
import dayjs from "dayjs";

const HomePage = () => {
  const { data: trips } = useGetTripsQuery();

  useEffect(() => {
    console.log("trips", trips);
  }, [trips]);

  const dataSource = useMemo(() => {
    return (
      trips?.result.orders?.map((trip) => ({
        key: trip.order_id,
        name: trip.passengers[0].name ?? "-",
        email: trip.passengers[0].email ?? "-",
        phone: trip.passengers[0].phone ?? "-",
        ...trip,
        date: trip.date ? dayjs(trip.date).format("DD.MM.YYYY HH:mm") : "-",
        date_departure: trip.date_departure
          ? dayjs(trip.date_departure).format("DD.MM.YYYY HH:mm")
          : "-",
        date_arrival: trip.date_arrival
          ? dayjs(trip.date_arrival).format("DD.MM.YYYY HH:mm")
          : "-",
        destination_address: trip.destination_address ?? "-",
      })) || []
    );
  }, [trips]);

  return (
    <>
      <Table
        bordered
        rowHoverable
        dataSource={dataSource}
        columns={columns}
        pagination={{
          pageSize: trips?.result.page_data.items_on_page,
          total: trips?.result.page_data.total_items,
          showSizeChanger: false,
        }}
        scroll={{ x: 1280 }}
      />
    </>
  );
};

export default HomePage;
