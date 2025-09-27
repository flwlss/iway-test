import { Descriptions, Drawer } from "antd";
import type { Order } from "../types/trip";
import { drawerInfoConfig } from "../common/constants";

interface IInfoDrawer {
  order: Order | null;
  open: boolean;
  onClose: () => void;
}

const InfoDrawer = ({ order, open, onClose }: IInfoDrawer) => {
  return (
    <Drawer
      width={600}
      placement="right"
      open={open}
      onClose={onClose}
      title={order?.passengers[0].name}
    >
      <Descriptions column={1} bordered={false}>
        {drawerInfoConfig.map(({ key, label }) => (
          <Descriptions.Item key={key} label={label}>
            {order ? (order as any)[key] || "-" : "-"}
          </Descriptions.Item>
        ))}
      </Descriptions>
    </Drawer>
  );
};

export default InfoDrawer;
