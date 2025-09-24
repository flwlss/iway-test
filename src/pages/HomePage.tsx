import { useEffect } from "react";
import { useGetTripsQuery } from "../store/api/tripApi";

const HomePage = () => {
  const { data: trips } = useGetTripsQuery();

  useEffect(() => {
    console.log("trips", trips);
  }, [trips]);

  return <p>home</p>;
};

export default HomePage;
