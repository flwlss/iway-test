import { Card, Descriptions, Pagination, Spin, Typography } from "antd";
import type { Order, PageData } from "../types/trip";

interface IMobileTrips {
  dataSource: Order[];
  pagination?: PageData;
  onCardClick: (trip: Order) => void;
  onPageChange: (page: number) => void;
  isFetching: boolean;
}

const MobileTrips = ({
  dataSource,
  pagination,
  onCardClick,
  onPageChange,
  isFetching,
}: IMobileTrips) => {
  return (
    <div>
      <Spin spinning={isFetching} fullscreen />
      {dataSource.length ? (
        dataSource.map((trip) => (
          <Card
            key={trip.order_id}
            onClick={() => {
              onCardClick(trip);
            }}
          >
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Имя">
                {trip.passengers[0].name}
              </Descriptions.Item>
              <Descriptions.Item label="Телефон">
                {trip.passengers[0].phone}
              </Descriptions.Item>
              <Descriptions.Item label="Дата">{trip.date}</Descriptions.Item>
              <Descriptions.Item label="Статус">
                <span>{trip.status}</span>
              </Descriptions.Item>
            </Descriptions>
          </Card>
        ))
      ) : (
        <Typography>Нет данных</Typography>
      )}
      {!!dataSource.length && (
        <Pagination
          current={pagination?.page}
          pageSize={pagination?.items_on_page}
          total={pagination?.total_items}
          showSizeChanger={false}
          onChange={onPageChange}
        />
      )}
    </div>
  );
};

export default MobileTrips;
