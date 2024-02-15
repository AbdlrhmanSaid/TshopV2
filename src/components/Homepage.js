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
  faPlus,
  faBars,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Container } from "react-bootstrap";

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

  const OffCanvasExample = ({ name, ...props }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button variant="primary" onClick={handleShow} className="side-btn">
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <Offcanvas
          show={show}
          onHide={handleClose}
          {...props}
          className="bg-dark"
        >
          <Offcanvas.Header closeButton className="hederMenu text-white">
            <Offcanvas.Title>
              <FontAwesomeIcon icon={faBars} className="mx-1" />
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form
              inline
              onSubmit={(e) => e.preventDefault()}
              className="m-2flex-nowrap"
            >
              <Row className="justify-content-center flex-nowrap">
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
            <div className="btns w-100 mb-3  p-2 d-flex flex-column">
              <div className="catig-btns text-center d-flex flex-column">
                <a
                  href="#categories"
                  className="text-white text-decoration-none"
                >
                  <Button
                    className={`m-2 d-flex justify-content-around align-items-center  w-100 ${
                      selectedCategory === null ? "active" : ""
                    }`}
                    onClick={() => setSelectedCategory(null)}
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <p className="m-0 w-50">All</p>
                  </Button>
                </a>
                {uniqueCategories.map((category, index) => (
                  <a
                    href="#categories"
                    className="text-white text-decoration-none"
                  >
                    <Button
                      key={index}
                      variant="primary"
                      className={`m-2 d-flex justify-content-around align-items-center w-100 ${
                        selectedCategory === category ? "active" : ""
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                      <p className="m-0 w-50">{category}</p>
                    </Button>
                  </a>
                ))}
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  };

  const Example = () => {
    return (
      <>
        {["end"].map((placement, idx) => (
          <OffCanvasExample key={idx} placement={placement} name={placement} />
        ))}
      </>
    );
  };

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

  return (
    <>
      <Container>
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
            <h2 className="m-2">
              {isEnglish ? " Best seller :" : " الاكثر مبيعا :"}
            </h2>
            <Row className="justify-content-center mt-3" style={{ flex: "1" }}>
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
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
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
            <div className="productsShow" id="categories">
              <h2 className="m-2">
                {isEnglish ? " Products categories :" : "  فئات المنتجات :"}
              </h2>
              <Row xs={1} md={2} lg={3} className="m-3">
                {filteredProducts.map((product) => (
                  <Col key={product.id} className="mb-3">
                    <div
                      className="box rounded border shadow w-100 h-100 overflow-hidden"
                      style={{ height: "400px" }}
                    >
                      <div className="half1 m-auto p-3 w-50 h-50 position-relative">
                        <Image
                          src={product.image}
                          className="w-100 h-100 prod-img "
                          rounded
                        />
                        <p className="categoryNameTitle position-absolute m-0 px-3 mt-1">
                          {product.category}
                        </p>
                        <div className="btnsAction d-flex gap-1 justify-content-end position-absolute">
                          {isLogin ? (
                            <>
                              <Button
                                variant="primary"
                                onClick={() => dispatch(addToCart(product))}
                                className="rounded-circle"
                              >
                                <FontAwesomeIcon icon={faPlus} />
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
                                <FontAwesomeIcon icon={faPlus} />
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
                            <Button
                              variant="success"
                              className="rounded-circle"
                            >
                              <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}
                              />
                            </Button>
                          </Link>
                        </div>
                      </div>
                      <div className="headerHalf2 d-flex align-items-center justify-content-between shadow  h-50 px-3">
                        <div className="info mt-4 p-2 ">
                          <p className="m-0">{product.title}</p>
                          <h3>{product.price} $</h3>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </>
        )}
        <Cart />
        <Example />
      </Container>
    </>
  );
};
