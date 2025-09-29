import { Button, Input, Select } from "antd";
import { useCallback, useState } from "react";
import { statusOptions } from "../common/constants";
import type { AppliedFilters } from "../pages/HomePage";

interface IFiltersToolbar {
  onFiltersChange: (value: AppliedFilters) => void;
  isMobile: boolean;
}

const FiltersToolbar = ({ onFiltersChange, isMobile }: IFiltersToolbar) => {
  const [searchName, setSearchName] = useState<string>("");
  const [searchPhone, setSearchPhone] = useState<string>("");
  const [searchStatus, setSearchStatus] = useState<number[] | null>(null);

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
    };

  const handleStatusChange = useCallback((value: number[]) => {
    setSearchStatus(value.length > 0 ? value : null);
  }, []);

  const handleSearch = useCallback(() => {
    onFiltersChange({
      name: searchName.trim(),
      phone: searchPhone.trim(),
      status: searchStatus,
    });
  }, [searchName, searchPhone, searchStatus]);

  return (
    <div className={isMobile ? "mobileFiltersWrapper" : "filtersWrapper"}>
      <Input
        value={searchName}
        onChange={handleInputChange(setSearchName)}
        placeholder="Введите имя"
      />
      <Input
        value={searchPhone}
        onChange={handleInputChange(setSearchPhone)}
        placeholder="Введите телефон"
      />
      <Select
        mode="multiple"
        options={statusOptions}
        className={isMobile ? "" : "filtersWrapper__select"}
        onChange={handleStatusChange}
        placeholder="Статус"
      />
      <Button type="primary" onClick={handleSearch}>
        Поиск
      </Button>
    </div>
  );
};

export default FiltersToolbar;
