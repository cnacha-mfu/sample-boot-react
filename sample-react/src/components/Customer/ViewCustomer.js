import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Customer.css";
const ViewCustomer = () => {
  const [customer, setCustomer] = useState([]);
  const { id } = useParams();
  const getCustomerApi = "http://localhost:8080/customers";

  useEffect(() => {
    getCustomer();
  }, []);

  const getCustomer = () => {
    axios
      .get(getCustomerApi.concat("/") + id)
      .then((item) => {
        setCustomer(item.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="customer mt-5">
      <table className="table table-bordered">
    <tbody>
      <tr>
        <td>Name</td>
        <td>{customer.name}</td>
      </tr>
      <tr>
        <td>Address</td>
        <td>{customer.address}</td>
      </tr>
      <tr>
        <td>Birthday</td>
        <td>{customer.birthday}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>{customer.email}</td>
      </tr>
      <tr>
        <td>Phone</td>
        <td>{customer.phone}</td>
      </tr>
    </tbody>
  </table>
    </div>
  );
};
export default ViewCustomer;
