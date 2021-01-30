import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser } from "../actions/userActions";

export default function ProfileScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatchEvent(detailsUser(userInfo._id));
  }, [dispatch, userInfo._id]);
  return <div></div>;
}
