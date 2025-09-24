export type Trip = {
  error: null;
  result: {
    orders: Order[];
    page_data: {
      page: number;
      items_on_page: number;
      total_items: number;
      page_count: number;
    };
  };

  uuid: string;
};

export interface Order {
  date_change: string;
  date: string;
  date_arrival: string;
  date_departure: string;
  order_id: number;
  user_id: number;
  order_type: number;
  transaction: number;
  payable_status: number;
  ex_order_status: number;
  status: number;
  service_id: number;
  duration: number;
  doer_city_id: number;
  allowable_time: number;
  cancellation_time: number;
  reward: number;
  booker_number: string;
  arrival_number: string;
  departure_number: string;
  table: string;
  notes: string;
  location_address: string;
  destination_address: string;
  lang: string;
  allowable_subaddress: number;
  coef_subaddress: number;
  subaddress: any[];
  send_params: SendParams;
  passengers: Passenger[];
  passengers_number: number;
  additional_address: boolean;
  cancellation_time_without_penalty: string;
  destination_address_object: AddressObject;
  location_address_object: AddressObject;
  car_data: CarData;
  currency: string;
  price: Price;
  additional_change_itinerary: number;
  additional_wait: number;
  fare_on_toll_road: number;
  additional_payment_info: any;
  meeting_point: any;
  internal_number: string;
  viewers: any[];
  coordinator: Coordinator;
  additional_services: any[];
  flexible_tariff: boolean;
  uuid: string;
  is_blocked_update: boolean;
  driver_data: DriverData;
  is_fast_booking: boolean;
  pos: any;
  platform: number;
  ffp_number: any;
  flexible_tariff_agreement: boolean;
  children_amount: number;
  adults_amount: number;
  service_provider: ServiceProvider;
  doer: any;
  cost_center: any;
  number: number;
  is_fast_ride: boolean;
  start_place: Place;
  finish_place: Place;
  customer: Customer;
  start_place_id: string;
  finish_place_id: string;
}

export interface SendParams {
  send_client_voucher: boolean;
  send_admin_voucher: boolean;
  send_client_doc: boolean;
  send_admin_doc: boolean;
}

export interface Passenger {
  name: string;
  email: string;
  phone: string;
  company: any;
  client_id: number;
  company_id: any;
}

export interface AddressObject {
  address: string;
  geo_check: boolean;
  geo_data: GeoData;
}

export interface GeoData {
  name: string;
  types: any[];
  geometry: Geometry;
  place_id: string;
  formatted_address: string;
  address_components: any[];
}

export interface Geometry {
  location: Location;
  viewport: Viewport;
}

export interface Location {
  lat: number;
  lng: number;
}

export interface Viewport {
  northeast: Location;
  southwest: Location;
}

export interface CarData {
  car_class_id: number;
  car_class: string;
  models: string;
  capacity: number;
  photo: string;
  deleted: boolean;
  description: any;
}

export interface Price {
  price_id: number;
  price: number;
  price_subaddress: any;
}

export interface Coordinator {
  name: string;
  phone: string;
}

export interface DriverData {
  driver_name: any;
  driver_phone: string;
  driver_car: any;
  driver_rating: any;
  car_color: any;
  car_brand: any;
  car_model: any;
  car_number: any;
}

export interface ServiceProvider {
  id: number;
  title: string;
  deleted: boolean;
  rating: number;
  logo: string;
}

export interface Place {
  place_id: number;
  title: string;
  type: number;
  type_title: string;
  city_id: number;
  city: string;
  terminal_number: string;
  train_carriage_number: any;
  timezone: string;
}

export interface Customer {
  name: string;
  email: string;
  phone: string;
}
