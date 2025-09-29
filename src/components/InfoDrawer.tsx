import { Descriptions, Drawer } from "antd";
import type { Order } from "../types/trip";
import { drawerInfoConfig } from "../common/constants";

interface IInfoDrawer {
  order: Order | null;
  open: boolean;
  onClose: () => void;
  isMobile: boolean;
}

const InfoDrawer = ({ order, open, onClose, isMobile }: IInfoDrawer) => {
  return (
    <Drawer
      width={isMobile ? "100%" : 600}
      placement={isMobile ? "bottom" : "right"}
      height={isMobile ? "85%" : "100%"}
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
