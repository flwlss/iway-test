export const columns = [
  {
    title: "Имя пассажира",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Емайл пассажира",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Телефон пассажира",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Тип заказа",
    dataIndex: "order_type",
    key: "order_type",
  },
  {
    title: "Дата бронирования",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Дата отъезда",
    dataIndex: "date_departure",
    key: "date_departure",
  },
  {
    title: "Дата прибытия",
    dataIndex: "date_arrival",
    key: "date_arrival",
  },
  {
    title: "Статус оплаты",
    dataIndex: "payable_status",
    key: "payable_status",
  },
  {
    title: "Статус заказа",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Целевой адрес",
    dataIndex: "destination_address",
    key: "destination_address",
  },
];

export const statusOptions = [
  {
    value: 0,
    label: 0,
  },
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  },
  {
    value: 4,
    label: 4,
  },
];

export const drawerInfoConfig = [
  { key: "doer_city_id", label: "ID города-исполнителя" },
  { key: "transaction", label: "Транзакция" },
  { key: "cancellation_time", label: "Время бесплатной отмены" },
  { key: "booker_number", label: "Номер брони" },
  { key: "arrival_number", label: "Номер рейса прилета или поезда прибытия" },
  {
    key: "departure_number",
    label: "Номер рейса вылета или поезда отправления",
  },
  { key: "table", label: "Надпись на табличке" },
  { key: "notes", label: "Примечание для водителя" },
  { key: "location_address", label: "Адрес местоположения" },
  { key: "lang", label: "Язык" },
  { key: "passengers_number", label: "Количество пассажиров" },
];
