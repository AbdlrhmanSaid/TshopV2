import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import { fetchProducts } from "../rtk/slices/productSlice";
import { addToFav } from "../rtk/slices/favSlice";
import { Cart } from "./Cart";
import { selectLanguage } from "../rtk/slices/deflanSlice";
import Swal from "sweetalert2";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Placeholder from "react-bootstrap/Placeholder";
import ProductList from "./ProductList ";
import { Helmet } from "react-helmet";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
          <Helmet>
            <meta charSet="utf-8" />
            <title>ShopEmpire | {isEnglish ? "Shop" : "تسوق"}</title>
            <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
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
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                className="my-3  rounded shadow overflow-hidden"
              >
                {currentImages.map((image, index) => (
                  <SwiperSlide>
                    {" "}
                    <div className="carousel-Slider  text-center" key={index}>
                      <img src={image} className="imgSLider " />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
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
              <ProductList
                isEnglish={isEnglish}
                filteredProducts={filteredProducts}
                isLogin={isLogin}
                notLogin={notLogin}
                addedToFev={addedToFev}
              />
            </>
          )}
          <Cart />
        </Container>
      </div>
    </>
  );
};
export default Homepage;
