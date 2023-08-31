import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Orders.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import OrderDetails from "./OrderDetails/OrderDetails";
function Orders() {
  const [orders, setOrders] = useState([]);
  const [isDetailsClick, setIsDetailsClick] = useState(false);
  const [isDetailsId, setIsDetailsId] = useState(null);
  const handleDetailsClick = (id) => {
    setIsDetailsClick(true);
    setIsDetailsId(id);
  };
  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const res = await axios.get("http://localhost:8000/orders");
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllOrders();
  }, []);
  console.log(orders);
  const buttonClick = () => {
    setIsDetailsClick(false);
  };
  const returnOrders = () => {
    if (isDetailsClick) {
      return <OrderDetails id={isDetailsId} onClick={buttonClick} />;
    } else {
      return (
        <>
          <div className={styles.orders}>
            <div>
              <div className="container">
                <div className={styles.orders__title}>Orders</div>
                <div className={styles.orders__inner}>
                  <table>
                    <thead>
                      <tr>
                        <th className={styles.orders__titleRow}>Order Id</th>
                        <th className={styles.orders__titleRow}>User Name</th>
                        <th className={styles.orders__titleRow}>User Email</th>
                        <th className={styles.orders__titleRow}>User Phone</th>
                        <th className={styles.orders__titleRow}>User Adress</th>
                        <th className={styles.orders__titleRow}>Order Price</th>
                        <th className={styles.orders__titleRow}>
                          Order Discount
                        </th>
                        <th className={styles.orders__titleRow}>
                          Order Comment
                        </th>
                        <th className={styles.orders__titleRow}>
                          Order Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => (
                        <tr key={order.orderId}>
                          <td>{order.orderId}</td>
                          <td>{order.orderUserName}</td>
                          <td>{order.orderUserEmail}</td>
                          <td>{order.orderUserPhone}</td>
                          <td>{order.orderAdress}</td>
                          <td>$ {order.orderPrice}</td>
                          <td>$ {order.orderDiscount}</td>
                          <td>{order.orderComment}</td>
                          <td className={styles.orderDetails}>
                            <button
                              onClick={() => handleDetailsClick(order.orderId)}
                            >
                              Order details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };
  return (
    <>
      <Header />
      {returnOrders()}
      <Footer />
    </>
  );
}
export default Orders;
