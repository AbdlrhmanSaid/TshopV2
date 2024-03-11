import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { selectLanguage } from "../rtk/slices/deflanSlice";
import { useSelector } from "react-redux";
import Signup from "./Signup";
import { Helmet } from "react-helmet";

export const Login = () => {
  const isEnglish = useSelector(selectLanguage);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ShopEmpire | {isEnglish ? "Signup" : "سجل الدخول"}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Signup />
    </>
  );
};
