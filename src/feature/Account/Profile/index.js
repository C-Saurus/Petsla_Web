import React, { useEffect } from "react";
import {
  getAddOrder,
  getOrder,
  getUsers,
} from "../../../service/apiRequest";
import { useDispatch } from "react-redux";
import { successToast, warnToast } from "../../../utils/toastify";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      warnToast("Bạn cần đăng nhập trước!");
      navigate("/login", {replace: true});
    }
  }, [token, navigate]);

  const dispatch = useDispatch();
  const handleOrder = () => {
    getOrder(localStorage.getItem("token"), dispatch).then((res) => {
      successToast("Đã cập nhật thành công");
      console.log(res)
    })
  };
  const handleUser = () => {
    getUsers(localStorage.getItem("token"), dispatch).then(() => {
      successToast("Đã cập nhật thành công");
    });
  };
  return (
    <div className="container">
      <button onClick={handleOrder}>Click here to get Order</button>
      <button onClick={handleUser}>Click here to get User</button>
    </div>
  );
};
export default Profile;
