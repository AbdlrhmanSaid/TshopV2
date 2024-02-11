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
    <>
      {isLogin ? (
        <div className="container mt-4">
          <div className="card">
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
                  {userData.address.city},{userData.address.town},
                  {userData.address.details}
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
        </div>
      ) : (
        <div className="m-5">
          <Alert variant="danger" style={{ margin: "15% 0" }}>
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
      )}
    </>
  );
};

export default Profile;
