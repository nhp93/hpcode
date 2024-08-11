import Banner from "@/components/Banner/Banner";
import ListStore from "@/components/Store/ListStore";
import React from "react";

const Stores = () => {
  return (
    <div className="bg-secondary-200 w-full">
      <Banner name="Cửa Hàng" imgUrl="/images/Store/depluondaychu.jpg" />
      <ListStore />
    </div>
  );
};

export default Stores;
