export interface Ride {
  ride_id: string;
  user_email: string;
  origin_address: string;
  destination_address: string;
  origin_latitude: string | number;
  origin_longitude: string | number;
  destination_latitude: string | number;
  destination_longitude: string | number;
  ride_time: number;
  fare_price: number;
  payment_status: string;
  driver_id: number;
  created_at: string;
  driver: {
    first_name: string;
    last_name: string;
    car_seats: number;
  };
}
