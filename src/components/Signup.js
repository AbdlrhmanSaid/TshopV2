import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMapMarkerAlt,
  faGlobe,
  faCity,
  faBirthdayCake,
  faPhone,
  faSave,
  faTimes,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { selectUserData, setUserData } from "../rtk/slices/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectLanguage } from "../rtk/slices/deflanSlice";

const Signup = () => {
  const isEnglish = useSelector(selectLanguage);
  const cityOptions = isEnglish
    ? {
        cairo: [
          "Nasr City",
          "Maadi",
          "Heliopolis",
          "Dokki",
          "Zamalek",
          "Mohandessin",
          "Giza",
          "Shubra",
          "October City",
        ],
        alexandria: [
          "Gleem",
          "Montaza",
          "Sidi Gaber",
          "Bolkly",
          "Miami",
          "San Stefano",
          "Kafr Abdo",
          "Al-Ibrahimiyya",
          "Al-Agamy",
          "Schutz",
        ],
      }
    : {
        cairo: [
          "مدينة نصر",
          "هيليوبلس",
          "الدقي",
          "الزمالك",
          "مهندسين",
          "جيزة",
          "شبرا",
          "6 اكتوبر",
        ],
        alexandria: [
          "جليم",
          "منتزه",
          "سيدي جابرi ",
          "بولكلي",
          "ميامي",
          "سان ستيفانو",
          "كفر عبده",
          "الابراهيميه ",
          "العجمي",
          "شدس",
        ],
      };

  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const [name, setName] = useState(userData.username);
  const [address, setAddress] = useState(
    `${userData.address.city},${userData.address.details}`
  );
  const [selectedCity, setSelectedCity] = useState(userData.address.city);
  const [selectedCityOptions, setSelectedCityOptions] = useState(
    cityOptions[userData.address.city] || []
  );
  const [selectedCityOption, setSelectedCityOption] = useState("");
  const [age, setAge] = useState(userData.age);
  const [phoneNumber, setPhoneNumber] = useState(userData.phone);
  const [email, setEmail] = useState(userData.email);

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setSelectedCityOptions(cityOptions[city] || []);
    setSelectedCityOption("");
  };

  const renderCityOptions = () => (
    <div className="form-group">
      <label htmlFor="cityOption">
        <FontAwesomeIcon icon={faCity} className="me-2" />
        {isEnglish ? "Select City Option" : "اختر المنطقة"}{" "}
      </label>
      <select
        className="form-control"
        id="cityOption"
        value={selectedCityOption}
        onChange={(e) => setSelectedCityOption(e.target.value)}
        required
      >
        <option value="">
          {isEnglish ? "Select City Option" : "اختر المنطقة"}
        </option>
        {selectedCityOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  const handleSave = () => {
    dispatch(
      setUserData({
        username: name,
        address: {
          city: selectedCity,
          twon: selectedCityOption,
          details: address.split(",")[1],
        },
        age: age,
        phone: phoneNumber,
        email: email,
      })
    );
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{isEnglish ? "Signup" : "التسجيل"}</h2>

          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">
              <FontAwesomeIcon icon={faUser} className="me-2" />
              {isEnglish ? "Name" : "الاسم"}
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* City */}
          <div className="form-group">
            <label htmlFor="city">
              <FontAwesomeIcon icon={faGlobe} className="me-2" />
              {isEnglish ? "City" : "المدينة"}
            </label>
            <select
              className="form-control"
              id="city"
              value={selectedCity}
              onChange={(e) => handleCityChange(e.target.value)}
            >
              <option value="">{isEnglish ? "City" : "اختر المدينة"}</option>
              <option value="cairo">{isEnglish ? "Cairo" : "القاهرة"}</option>
              <option value="alexandria">
                {isEnglish ? "Alexandria" : "الاسكندرية"}
              </option>
            </select>
          </div>

          {/* City Options */}
          {selectedCity && renderCityOptions()}

          {/* Address */}
          <div className="form-group">
            <label htmlFor="address">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
              {isEnglish ? "Address" : "العنوان"}
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={`${address}`}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          {/* Age */}
          <div className="form-group">
            <label htmlFor="age">
              <FontAwesomeIcon icon={faBirthdayCake} className="me-2" />
              {isEnglish ? "Age" : "العمر"}
            </label>
            <input
              type="Number"
              className="form-control"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label htmlFor="phoneNumber">
              <FontAwesomeIcon icon={faPhone} className="me-2" />
              {isEnglish ? "Phone Number" : "رقم الهاتف"}
            </label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              {isEnglish ? "Email" : "البريد الإلكتروني"}
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Link to={"/Profile"} className="linkbtn ">
            <Button className="btn btn-primary my-2 w-100" onClick={handleSave}>
              {isEnglish ? "Login" : "تسجيل الدخول"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
