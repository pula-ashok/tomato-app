import React, { useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./verify.css";
import { storeContext } from "../../context/storeContext";
import axios from "axios";
import { useEffect } from "react";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { url } = useContext(storeContext);
  const navigate = useNavigate();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const verifyPayment = async () => {
    const res = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });
    if (res.data.success) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    verifyPayment();
  }, []);
  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
