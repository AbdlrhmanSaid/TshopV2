import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Image from "react-bootstrap/Image";
import { fetchProducts } from "../rtk/slices/productSlice";
import { addToCart } from "../rtk/slices/cartSlice";
import { addToFav } from "../rtk/slices/favSlice";
import { Cart } from "./Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { selectLanguage } from "../rtk/slices/deflanSlice";
import Swal from "sweetalert2";
import { Form } from "react-bootstrap";
import {
  faMagnifyingGlass,
  faHeart,
  faArrowUpRightFromSquare,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";

export const Homepage = () => {
  const dispatch = useDispatch();
  const isEnglish = useSelector(selectLanguage);
  const isLogin = useSelector((state) => state.user.isLogin);

  const products = useSelector((state) => state.products);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentImages, setCurrentImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await dispatch(fetchProducts());
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    setCurrentImages(products.map((product) => product.image));
  }, [products]);

  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const handleNext = () => {
    setCurrentImages((prevImages) => [...prevImages.slice(1), prevImages[0]]);
  };

  const handlePrev = () => {
    setCurrentImages((prevImages) => [
      prevImages[prevImages.length - 1],
      ...prevImages.slice(0, prevImages.length - 1),
    ]);
  };

  return (
    <>
      {loading ? (
        <div
          className="spinners d-flex justify-content-center "
          style={{ margin: "130px auto 100px auto" }}
        >
          <Spinner animation="border m-3" variant="primary" />
          <Spinner animation="border m-3" variant="primary" />
          <Spinner animation="border m-3" variant="primary" />
        </div>
      ) : (
        <>
          <div className="btns bg-dark  w-100 mb-3  p-2 d-flex shadow align-items-center overflow-hidden flex-wrap shadow justify-content-center">
            <div className="catig-btns text-center" style={{ flex: "1" }}>
              <Button
                variant="primary"
                className={`m-2  ${selectedCategory === null ? "active" : ""}`}
                onClick={() => setSelectedCategory(null)}
              >
                All
              </Button>
              {uniqueCategories.map((category, index) => (
                <Button
                  key={index}
                  variant="primary"
                  className={`m-2 ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            <Form inline onSubmit={(e) => e.preventDefault()} className="m-2">
              <Row className="justify-content-center">
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder={isEnglish ? "Search" : "بحث"}
                    className="mr-sm-2"
                  />
                </Col>
                <Col xs="auto">
                  {isLogin ? (
                    <Button type="submit">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Button>
                  ) : (
                    <Button type="submit" onClick={() => notLogin()}>
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Button>
                  )}
                </Col>
              </Row>
            </Form>
          </div>
          <Row className="justify-content-center" style={{ flex: "1" }}>
            <Col xs={12} md={8} className="parent-slide">
              <div
                id="carouselExampleIndicators child-slide"
                className="carousel slide"
              >
                <div className="carousel-indicators">
                  {currentImages.map((image, index) => (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to={index}
                      className={index === 0 ? "active" : ""}
                      aria-current={index === 0 ? "true" : ""}
                      aria-label={`Slide ${index + 1}`}
                    ></button>
                  ))}
                </div>
                <div className="carousel-inner">
                  {currentImages.map((image, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <Card className="text-center">
                        <Card.Img
                          variant="top"
                          src={image}
                          alt={`Slide ${index + 1}`}
                        />
                      </Card>
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                  onClick={handlePrev}
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                  onClick={handleNext}
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={3} className="m-3">
            {filteredProducts.map((product) => (
              <Col key={product.id} className="mb-3">
                <div className="box  shadow rounded w-100 h-100 border overflow-hidden ">
                  <div className="half2 d-flex justify-content-evenly flex-column rounded-end bg-dark p-3 ">
                    <div className="headerHalf2 d-flex align-items-center justify-content-between ">
                      <div className="info text-light">
                        <p>{product.title}</p>
                      </div>
                      <div className="btnsAction d-flex gap-1 justify-content-end">
                        {isLogin ? (
                          <>
                            <Button
                              variant="primary"
                              onClick={() => dispatch(addToCart(product))}
                              className="rounded-circle"
                            >
                              <FontAwesomeIcon icon={faCartPlus} />
                            </Button>
                            <Button
                              variant="danger"
                              onClick={() => addedToFev(product)}
                              className="rounded-circle"
                            >
                              <FontAwesomeIcon icon={faHeart} />
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button
                              variant="primary"
                              onClick={() => notLogin()}
                              className="rounded-circle"
                            >
                              <FontAwesomeIcon icon={faCartPlus} />
                            </Button>
                            <Button
                              variant="danger"
                              onClick={() => notLogin()}
                              className="rounded-circle"
                            >
                              <FontAwesomeIcon icon={faHeart} />
                            </Button>
                          </>
                        )}
                        <Link to={`/Product/${product.id}`}>
                          <Button variant="success" className="rounded-circle">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <p className="text-white">${product.price}</p>
                  </div>
                  <div className="half1 m-auto p-3 w-50">
                    <Image
                      src={product.image}
                      className="w-100 h-100  "
                      rounded
                    />
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </>
      )}
      <Cart />
    </>
  );
  function notLogin() {
    if (isEnglish) {
      Swal.fire({
        title: "<strong>Please Login First</strong>",
        icon: "error",
        html: `
      <a href="/Login">
      <button type="button" class="btn btn-primary">Log In</button>
      </a>
    `,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        title: "<strong>من فضلك سجل اولا</strong>",
        icon: "error",
        html: `
      <a href="/Login">
      <button type="button" class="btn btn-primary">تسجيل الدخول</button>
      </a>
    `,
        showConfirmButton: false,
      });
    }
  }
  function addedToFev(product) {
    dispatch(addToFav(product));
    {
      isEnglish ? (
        <>
          {Swal.fire({
            title: "Added to favorites.",
            icon: "success",
          })}
        </>
      ) : (
        <>
          {Swal.fire({
            title: "تم الاضافة الي المفضلة",
            icon: "success",
          })}
        </>
      );
    }
  }
};
