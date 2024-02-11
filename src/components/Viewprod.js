import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const Viewprod = () => {
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
          <Card style={{ width: "18rem" }} className="m-auto mt-3 w-100">
            <Card.Img
              variant="top"
              className="w-25 m-auto mt-3"
              src={product.image}
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>
                <h2>{product.price}$</h2>
              </Card.Text>
              <Link to={"/"} className="m-auto">
                <Button variant="primary">Back</Button>
              </Link>
            </Card.Body>
          </Card>
        )
      )}
    </>
  );
};

export default Viewprod;
