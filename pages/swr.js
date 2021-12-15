import React from "react";
import useSWR from "swr";



const bookingsEndpoint = "https://api.gaylordjulien.dev/bookings";

const getData = async () => {
  const response = await fetch(bookingsEndpoint);
  return await response.json();
};

export default function Swr() {
  const { data: bookings } = useSWR(bookingsEndpoint, getData);
  
return (
    <div>
      {bookings.map(booking => (
        <div key={booking.id}>{booking.firstName}</div>
      ))}
      </div>
  );
};
