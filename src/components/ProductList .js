import React from "react";
import { useSelector } from "react-redux";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { addToCart } from "../rtk/slices/cartSlice";
import { useDispatch } from "react-redux";
import {
  faArrowUpRightFromSquare,
  faHeart,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import notFoundImg from "../imgs/notFound.png";

const ProductList = ({
  filteredProducts,
  isLogin,
  notLogin,
  addedToFev,
  isEnglish,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="productsShow overdflow-hidden" id="categories">
        {filteredProducts.length === 0 ? (
          <div className="notFound text-center bg-light rounded w-100 text-center mb-5 p-3">
            <h2 className="w-100">
              {isEnglish ? "Not found" : "لم يتم العثور"}
            </h2>
            <img src={notFoundImg} className="w-50" />
          </div>
        ) : (
          <>
            <h2
              className="m-2 bg-dark text-white p-2 rounded"
              style={{ width: "fit-content" }}
            >
              {isEnglish ? " Products categories " : "  فئات المنتجات "}
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
                          <Button variant="success" className="rounded-circle">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <div className="headerHalf2 py-3 d-flex align-items-center justify-content-between shadow  h-50 px-3">
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
  );
};

export default ProductList;
