import { useCallback, useEffect, useMemo, useState } from "react";
import { useGetTripsQuery } from "../store/api/tripApi";
import { Button, Select, Table, type TablePaginationConfig } from "antd";
import { columns, statusOptions } from "../common/constants";
import dayjs from "dayjs";
import Input from "antd/es/input/Input";

interface AppliedFilters {
  name: string;
  phone: string;
  status: number[] | null;
}

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchName, setSearchName] = useState<string>("");
  const [searchPhone, setSearchPhone] = useState<string>("");
  const [searchStatus, setSearchStatus] = useState<number[] | null>(null);
  const [appliedFilters, setAppliedFilters] = useState<AppliedFilters>({
    name: "",
    phone: "",
    status: null,
  });

  const { data: trips, isFetching } = useGetTripsQuery({
    page: currentPage,
    name: appliedFilters.name,
    phone: appliedFilters.phone,
    order_status: appliedFilters.status,
  });

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

  const handlePageChange = useCallback((pagination: TablePaginationConfig) => {
    if (pagination.current) {
      setCurrentPage(pagination.current);
    }
  }, []);

  const handleInputChange = useCallback(
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setter(e.target.value);
      },
    []
  );

  const handleStatusChange = useCallback((value: number[]) => {
    setSearchStatus(value.length > 0 ? value : null);
  }, []);

  const handleSearch = useCallback(() => {
    setCurrentPage(1);
    setAppliedFilters({
      name: searchName.trim(),
      phone: searchPhone.trim(),
      status: searchStatus,
    });
  }, [searchName, searchPhone, searchStatus]);

  return (
    <>
      <div className="filtersWrapper">
        <Input
          value={searchName}
          onChange={handleInputChange(setSearchName)}
          className="inputWidth"
          placeholder="Введите имя"
        />
        <Input
          value={searchPhone}
          onChange={handleInputChange(setSearchPhone)}
          className="inputWidth"
          placeholder="Введите телефон"
        />
        <Select
          mode="multiple"
          options={statusOptions}
          className="inputWidth"
          onChange={handleStatusChange}
          placeholder="Статус"
        />
        <Button type="primary" onClick={handleSearch}>
          Поиск
        </Button>
      </div>
      <Table
        bordered
        rowHoverable
        dataSource={dataSource}
        columns={columns}
        loading={isFetching}
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
    </>
  );
};

export default HomePage;
