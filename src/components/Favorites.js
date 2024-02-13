import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCheck,
  faTimes,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { Image } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { deleteFromFav, clearFav } from "../rtk/slices/favSlice";
import { selectLanguage } from "../rtk/slices/deflanSlice";

export const Favorites = () => {
  const isEnglish = useSelector(selectLanguage);
  const fav = useSelector((state) => state.fav);
  const dispatch = useDispatch();

  return (
    <>
      <div className="favs m-auto p-5 mt-4">
        <h2>{isEnglish ? "Favorites" : " المفضلة"}</h2>
        <div className="products h-50 px-3">
          <div className="catch">
            <Table striped bordered hover>
              <tbody>
                {fav.map((product, index) => (
                  <tr key={index} className="my-1">
                    <td>
                      <Image
                        className="min-pic"
                        src={product.image}
                        roundedCircle
                      />
                    </td>
                    <td>
                      <p>{product.price} $</p>
                    </td>
                    <td>
                      <p>{product.title}</p>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => dispatch(deleteFromFav(product))}
                      >
                        {isEnglish ? "Delete" : "مسح "}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorites;
