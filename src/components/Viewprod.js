import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { selectLanguage } from "../rtk/slices/deflanSlice";
import { useSelector } from "react-redux";

export const Viewprod = () => {
  const isEnglish = useSelector(selectLanguage);

  let { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        if (!response.ok) {
          throw new Error("فشل في جلب تفاصيل المنتج");
        }
        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  return (
    <>
      {loading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        product && (
          <div className="box-view d-flex m-3">
            <div className="half1 d-flex align-items-center">
              <div className="image overflow-hidden m-3 text-center">
                <img
                  src={product.image}
                  style={{ height: "70%", width: "100%" }}
                />
              </div>
            </div>
            <div className="half2 p-3  d-flex align-items-center">
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>
                  <h2>{product.price}$</h2>
                </Card.Text>
                <Link to={"/"} className="m-auto">
                  <Button variant="primary">
                    {isEnglish ? "Back" : "رجوع"}
                  </Button>
                </Link>
              </Card.Body>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Viewprod;
