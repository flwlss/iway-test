import { useGetTripsQuery } from "../store/api/tripApi";
import { useCallback, useMemo, useState } from "react";
import { Table, type TablePaginationConfig } from "antd";
import type { AppliedFilters } from "../pages/HomePage";
import { columns } from "../common/constants";
import type { Order } from "../types/trip";
import MobileTrips from "./MobileTrips";
import { transformTripData } from "../common/utils";

interface ITripsTable {
  appliedFilters: AppliedFilters;
  onRowClick: (order: Order) => void;
  isMobile: boolean;
}

const TripsTable = ({ appliedFilters, onRowClick, isMobile }: ITripsTable) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: trips, isFetching } = useGetTripsQuery({
    page: currentPage,
    name: appliedFilters.name,
    phone: appliedFilters.phone,
    order_status: appliedFilters.status,
  });

  const dataSource = useMemo(() => {
    return trips?.result.orders?.map(transformTripData) || [];
  }, [trips?.result.orders]);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const handleTableChange = useCallback((pagination: TablePaginationConfig) => {
    handlePageChange(pagination.current || 1);
  }, []);

  if (isMobile) {
    return (
      <MobileTrips
        dataSource={dataSource}
        pagination={trips?.result.page_data}
        onCardClick={onRowClick}
        onPageChange={handlePageChange}
        isFetching={isFetching}
      />
    );
  }

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
      onChange={handleTableChange}
      pagination={{
        current: trips?.result.page_data.page,
        pageSize: trips?.result.page_data.items_on_page,
        total: trips?.result.page_data.total_items,
        showSizeChanger: false,
      }}
      tableLayout="fixed"
      scroll={{ x: 1600 }}
    />
  );
};

export default TripsTable;
