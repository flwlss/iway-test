import { useGetTripsQuery } from "../store/api/tripApi";
import { useCallback, useMemo, useState } from "react";
import dayjs from "dayjs";
import { Table, type TablePaginationConfig } from "antd";
import type { AppliedFilters } from "../pages/HomePage";
import { columns } from "../common/constants";
import type { Order } from "../types/trip";

interface ITripsTable {
  appliedFilters: AppliedFilters;
  onRowClick: (order: Order) => void;
}

const TripsTable = ({ appliedFilters, onRowClick }: ITripsTable) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: trips, isFetching } = useGetTripsQuery({
    page: currentPage,
    name: appliedFilters.name,
    phone: appliedFilters.phone,
    order_status: appliedFilters.status,
  });

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
  }, [trips?.result.orders]);

  const handlePageChange = useCallback((pagination: TablePaginationConfig) => {
    setCurrentPage(pagination.current || 1);
  }, []);

  return (
    <Table
      bordered
      rowHoverable
      dataSource={dataSource}
      columns={columns}
      loading={isFetching}
      onRow={(record) => {
        return {
          onClick: () => onRowClick(record),
          className: "tableRow",
        };
      }}
      locale={{ emptyText: "Нет данных" }}
      onChange={handlePageChange}
      pagination={{
        current: currentPage,
        pageSize: trips?.result.page_data.items_on_page,
        total: trips?.result.page_data.total_items,
        showSizeChanger: false,
      }}
      tableLayout="fixed"
      scroll={{ x: 1280 }}
    />
  );
};

export default TripsTable;
