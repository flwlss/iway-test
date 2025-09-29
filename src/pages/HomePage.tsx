import { useCallback, useEffect, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const isDrawerOpen = !!activeOrder;
  const handleCloseDrawer = useCallback(() => setActiveOrder(null), []);
  const handleRowClick = useCallback(
    (order: Order) => setActiveOrder(order),
    []
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <InfoDrawer
        order={activeOrder}
        open={isDrawerOpen}
        onClose={handleCloseDrawer}
        isMobile={isMobile}
      />
      <FiltersToolbar onFiltersChange={setAppliedFilters} isMobile={isMobile} />
      <TripsTable
        appliedFilters={appliedFilters}
        onRowClick={handleRowClick}
        isMobile={isMobile}
      />
    </>
  );
};

export default HomePage;
