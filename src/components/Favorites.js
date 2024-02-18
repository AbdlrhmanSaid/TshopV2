import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { Image } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { deleteFromFav, clearFav } from "../rtk/slices/favSlice";
import { selectLanguage } from "../rtk/slices/deflanSlice";

export const Favorites = () => {
  const isEnglish = useSelector(selectLanguage);
  const fav = useSelector((state) => state.fav);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className=" p-5 favofrite"
        style={{ height: "100%", minHeight: "100vh" }}
      >
        {fav.length === 0 ? (
          <div className="" style={{ height: "100vh" }}>
            <h5 className="bg-secondary p-5 text-center text-white">
              {isEnglish
                ? "No favorites added yet"
                : "لم يتم إضافة أي عناصر للمفضلة بعد"}
            </h5>
          </div>
        ) : (
          <Row xs={1} md={1} lg={3}>
            {fav.map((product, index) => (
              <Col
                key={index}
                className=" col-color rounded mb-2 align-items-center"
              >
                <div className="line bg-white my-2 d-flex justify-content-between h-100 align-items-center shadow p-2 rounded">
                  <div className="box1 me-1">
                    <Image className="min-pic" src={product.image} />
                  </div>
                  <div className="box2 text-black">
                    <p className="m-0">{product.title}</p>
                    <p className="m-0">${product.price}</p>
                  </div>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(deleteFromFav(product))}
                  >
                    <FontAwesomeIcon icon={faX} />
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </>
  );
};

export default Favorites;
