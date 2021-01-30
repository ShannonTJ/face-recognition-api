import React from "react";
import { useSelector } from "react-redux";

export default function OrderHistoryScreen(props) {
  const orderMineList = useSelector((state) => state.orderMineList);
  const { loading, error, orders } = orderMineList;

  return (
    <div>
      <h1>Order History</h1>
    </div>
  );
}
