import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { selectLanguage } from "../rtk/slices/deflanSlice";
import { useSelector } from "react-redux";
import Signup from "./Signup";
export const Login = () => {
  const isEnglish = useSelector(selectLanguage);

  return (
    <>
      <Signup />
    </>
  );
};
