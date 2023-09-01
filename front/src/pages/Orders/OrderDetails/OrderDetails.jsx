import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./OrderDetails.module.scss";
import Button from "../../../components/Button/Button";
function OrderDetails({ id, onClick }) {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const fetchAllDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/order?id=${id}`);
        setDetails(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllDetails();
  }, [id]);
  console.log(details);
  return (
    <>
      <div className={styles.details}>
        <div>
          <div className="container">
            <div className={styles.details__title}>Orders</div>
            <div className={styles.details__inner}>
              <div className={styles.table__wrapper}>
                <table>
                  <thead>
                    <tr>
                      <th className={styles.details__titleRow}>Order Id</th>
                      <th className={styles.details__titleRow}>Product Id</th>
                      <th className={styles.details__titleRow}>Product Name</th>
                      <th className={styles.details__titleRow}>
                        Product Quantity
                      </th>
                      <th className={styles.details__titleRow}>
                        Product Price
                      </th>
                      <th className={styles.details__titleRow}>
                        Product Discount Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {details.map((detail) => (
                      <tr key={detail.orderDetailsId}>
                        <td>{detail.orderId}</td>
                        <td>{detail.productId}</td>
                        <td>{detail.productName}</td>
                        <td>{detail.productQuantity}</td>
                        <td>$ {detail.productPrice}</td>
                        <td>$ {detail.productPriceNew}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Button
                text="To orders"
                onClick={onClick}
                className={styles.toOrderBtn}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default OrderDetails;
