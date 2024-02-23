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
  faHeart,
  faArrowUpRightFromSquare,
  faPlus,
  faBars,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Container } from "react-bootstrap";
import Placeholder from "react-bootstrap/Placeholder";
import notFoundImg from "../imgs/notFound.png";

const Homepage = () => {
  const dispatch = useDispatch();
  const isEnglish = useSelector(selectLanguage);
  const isLogin = useSelector((state) => state.user.isLogin);

  const products = useSelector((state) => state.products);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentImages, setCurrentImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
    ? products.filter(
        (product) =>
          product.category === selectedCategory &&
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

  const handleNext = () => {
    setCurrentImages((prevImages) => [...prevImages.slice(1), prevImages[0]]);
  };

  const handlePrev = () => {
    setCurrentImages((prevImages) => [
      prevImages[prevImages.length - 1],
      ...prevImages.slice(0, prevImages.length - 1),
    ]);
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
      <div className="prodsMain">
        <Container>
          {loading ? (
            <>
              <div className="loadDiv h-50 my-4">
                <Row
                  xs={1}
                  md={2}
                  lg={3}
                  className="m-auto gap-4 justify-content-center "
                >
                  <Card
                    style={{ width: "18rem" }}
                    className="overflow-hidden p-3 text-center"
                  >
                    <div
                      className="spinners d-flex justify-content-center "
                      style={{ height: "50vh" }}
                    >
                      <Spinner animation="border m-3" variant="primary" />
                    </div>
                    <Card.Body>
                      <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                      </Placeholder>
                      <Placeholder
                        as={Card.Text}
                        animation="glow"
                        className="text-center"
                      >
                        <Placeholder xs={4} />
                        <br /> <Placeholder xs={4} />
                        <br /> <Placeholder xs={4} />
                      </Placeholder>
                      <Placeholder.Button variant="primary" xs={6} />
                    </Card.Body>
                  </Card>
                  <Card
                    style={{ width: "18rem" }}
                    className="overflow-hidden p-3 text-center"
                  >
                    <div
                      className="spinners d-flex justify-content-center "
                      style={{ height: "50vh" }}
                    >
                      <Spinner animation="border m-3" variant="primary" />
                    </div>
                    <Card.Body>
                      <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                      </Placeholder>
                      <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={3} /> <Placeholder xs={4} />{" "}
                        <Placeholder xs={2} /> <Placeholder xs={6} />{" "}
                        <Placeholder xs={4} />
                      </Placeholder>
                      <Placeholder.Button variant="primary" xs={6} />
                    </Card.Body>
                  </Card>
                  <Card
                    style={{ width: "18rem" }}
                    className="overflow-hidden p-3 text-center"
                  >
                    <div
                      className="spinners d-flex justify-content-center "
                      style={{ height: "50vh" }}
                    >
                      <Spinner animation="border m-3" variant="primary" />
                    </div>
                    <Card.Body>
                      <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                      </Placeholder>
                      <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={3} /> <Placeholder xs={4} />{" "}
                        <Placeholder xs={2} /> <Placeholder xs={6} />{" "}
                        <Placeholder xs={4} />
                      </Placeholder>
                      <Placeholder.Button variant="primary" xs={6} />
                    </Card.Body>
                  </Card>
                </Row>
              </div>
            </>
          ) : (
            <>
              <h2
                className="m-2 bg-dark text-white p-2 rounded"
                style={{ width: "fit-content" }}
              >
                {isEnglish ? " Best seller " : " الاكثر مبيعا "}
              </h2>
              <Row
                className="justify-content-center my-3 rounded"
                style={{ flex: "1", background: "#eee" }}
              >
                <Col xs={12} md={8} className="parent-slide">
                  <div
                    id="carouselExampleIndicators child-slide"
                    className="carousel slide"
                  >
                    <div className="carousel-inner p-1 position-relative">
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
                      style={{ left: "-20%" }}
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
                      style={{ right: "-20%" }}
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
              <Form
                inline
                onSubmit={(e) => e.preventDefault()}
                className="my-4 flex-nowrap bg-dark p-1 rounded w-50 m-auto"
              >
                <Row className="justify-content-center flex-nowrap  ">
                  <Col xs="auto" className="w-100">
                    <Form.Control
                      type="text"
                      placeholder={
                        isEnglish ? "Search by Name" : " بحث بواسطة الاسم"
                      }
                      className="mr-sm-2"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </Col>
                </Row>
              </Form>
              <div className="catig-btns">
                <div class="links overflow-auto ">
                  <ul class="d-flex align-items-center">
                    <a
                      href="#categories"
                      className="text-white text-decoration-none mx-1"
                    >
                      <Button
                        className={` d-flex justify-content-around align-items-center  w-100 ${
                          selectedCategory === null ? "active" : ""
                        }`}
                        onClick={() => setSelectedCategory(null)}
                      >
                        <p className="m-0">All</p>
                      </Button>
                    </a>

                    {uniqueCategories.map((category, index) => (
                      <a
                        href="#categories"
                        className="text-white text-decoration-none text-center mx-1"
                      >
                        <Button
                          key={index}
                          variant="primary"
                          className={`m-2 d-flex justify-content-around align-items-center w-100 text-center ${
                            selectedCategory === category ? "active" : ""
                          }`}
                          onClick={() => setSelectedCategory(category)}
                        >
                          <span className="m-0 text-center d-flex flex-none">
                            {category}
                          </span>
                        </Button>
                      </a>
                    ))}
                  </ul>
                </div>
                <div className="text-center d-flex overflow-auto justify-content-center align-items-center"></div>
              </div>
              <>
                <div className="productsShow overdflow-hidden" id="categories">
                  {filteredProducts.length === 0 ? (
                    <div className="notFound text-center bg-light rounded mb-5 p-3">
                      {isEnglish ? <h2>Not found</h2> : <h2>لم يتم العثور</h2>}
                      <img src={notFoundImg} style={{ width: "90%" }} />
                    </div>
                  ) : (
                    <>
                      <h2
                        className="m-2 bg-dark text-white p-2 rounded"
                        style={{ width: "fit-content" }}
                      >
                        {isEnglish
                          ? " Products categories "
                          : "  فئات المنتجات "}
                      </h2>
                      <Row xs={1} md={2} lg={3} className="m-3">
                        {filteredProducts.map((product) => (
                          <Col
                            key={product.id}
                            className="mb-3 bg-white"
                            style={{ transition: "0.5s" }}
                          >
                            <div className="boxMain rounded shadow w-100 h-100 overflow-hidden">
                              <div
                                className="half1 m-auto p-3 w-50 position-relative"
                                style={{ height: "167px" }}
                              >
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
                                        onClick={() =>
                                          dispatch(addToCart(product))
                                        }
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
                    </>
                  )}
                </div>
              </>
            </>
          )}
          <Cart />
        </Container>
      </div>
    </>
  );
};
export default Homepage;
