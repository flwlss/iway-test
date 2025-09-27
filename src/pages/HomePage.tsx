import { useState } from "react";
import InfoDrawer from "../components/InfoDrawer";
import type { Order } from "../types/trip";
import TripsTable from "../components/TripsTable";
import FiltersToolbar from "../components/FiltersToolbar";

export interface AppliedFilters {
  name: string;
  phone: string;
  status: number[] | null;
}

const HomePage = () => {
  const [appliedFilters, setAppliedFilters] = useState<AppliedFilters>({
    name: "",
    phone: "",
    status: null,
  });
  const [activeOrder, setActiveOrder] = useState<Order | null>(null);
  const isDrawerOpen = !!activeOrder;
  const handleCloseDrawer = () => setActiveOrder(null);
  const handleRowClick = (order: Order) => setActiveOrder(order);

  return (
    <>
      <InfoDrawer
        order={activeOrder}
        open={isDrawerOpen}
        onClose={handleCloseDrawer}
      />
      <FiltersToolbar onFiltersChange={setAppliedFilters} />
      <TripsTable appliedFilters={appliedFilters} onRowClick={handleRowClick} />
    </>
  );
};

export default HomePage;
