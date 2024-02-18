import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMapMarkerAlt,
  faBirthdayCake,
  faEdit,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { selectUserData } from "../rtk/slices/userSlice";
import { selectLanguage } from "../rtk/slices/deflanSlice";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import img1 from "../imgs/loginPhoto.png";
import img2 from "../imgs/user.png";

const Profile = () => {
  const userData = useSelector(selectUserData);
  const isEnglish = useSelector(selectLanguage);
  const isLogin = useSelector((state) => state.user.isLogin);

  if (!userData) {
    return (
      <div className="mt-3">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <Container
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <>
        {isLogin ? (
          <div className="container mt-4 d-flex justify-content-between align-items-center my-3">
            <div className="card w-100">
              <div className="card-body">
                <h5 className="card-title">
                  {isEnglish ? "Profile Information" : "معلوماتك الشخصية"}
                </h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <FontAwesomeIcon icon={faUser} className="me-2" />
                    <strong>{isEnglish ? "Username:" : "الأسم :"}</strong>{" "}
                    {userData.username}
                  </li>
                  <li className="list-group-item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                    <strong>{isEnglish ? "Address:" : "العنوان :"}</strong>
                    {`${userData.address.city},${userData.address.twon},${userData.address.details}`}
                  </li>
                  <li className="list-group-item">
                    <FontAwesomeIcon icon={faBirthdayCake} className="me-2" />
                    <strong>{isEnglish ? "Age:" : "السن :"}</strong>
                    {userData.age}
                  </li>
                  <li className="list-group-item">
                    <FontAwesomeIcon icon={faPhone} className="me-2" />
                    <strong>{isEnglish ? "Phone:" : "الهاتف :"}</strong>
                    {userData.phone}
                  </li>
                  <li className="list-group-item">
                    <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                    <strong>{isEnglish ? "email:" : "البريد :"}</strong>{" "}
                    {userData.email}
                  </li>
                </ul>
                <Link
                  to={"/Settings"}
                  className="btn btn-primary mt-3"
                  onClick={() => console.log("Edit button clicked")}
                >
                  <FontAwesomeIcon icon={faEdit} className="me-2" />
                  <strong>{isEnglish ? "Edit:" : "تعديل :"}</strong>
                </Link>
              </div>
            </div>
            <div className="image text-center sm-hide">
              <img src={img2} className="w-50" />
            </div>
          </div>
        ) : (
          <div className="m-5">
            <div className="boxAlert d-flex justify-content-between">
              <div className="half1">
                <img src={img1} className="h-75" />
              </div>
              <div className="half2 w-100">
                <Alert variant="secondary" style={{ margin: "15% 0" }}>
                  <Alert.Heading>
                    {isEnglish ? " Please Login First" : "سجل الدخول اولا"}
                  </Alert.Heading>
                  <hr />
                  <Link to={"/Login"} className="text-center w-100">
                    <Button variant="primary" className="m-auto">
                      {isEnglish ? " Login" : " سجل الدخول"}
                    </Button>{" "}
                  </Link>
                </Alert>
              </div>
            </div>
          </div>
        )}
      </>
    </Container>
  );
};

export default Profile;
