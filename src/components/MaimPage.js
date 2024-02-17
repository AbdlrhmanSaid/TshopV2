import React from "react";
import { Container } from "react-bootstrap";
import { selectLanguage } from "../rtk/slices/deflanSlice";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faE, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import shopImg from "../imgs/shop1.png";
import clothes from "../imgs/clothes.png";
import electronics from "../imgs/electronics.png";
import jewelry from "../imgs/jewelry.png";
import sale from "../imgs/sale.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const MaimPage = () => {
  const isEnglish = useSelector(selectLanguage);

  return (
    <>
      <div className="intro">
        <h2 className="logoName text-center  bg-dark text-white  p-2">
          Shop
          <span className="bg-white text-black px-1">
            <FontAwesomeIcon icon={faE} />
          </span>
          mpire
        </h2>
      </div>
      <Container className="my-4">
        <div className="content">
          <div className="box1 boxContent my-3 d-flex justify-content-center align-items-center">
            <img src={shopImg} />
            <div className="text h5">
              {isEnglish
                ? "Welcome to our online store, where we offer a unique and convenient shopping experience for all our customers. In the era of technology and digital advancement, we strive to meet your needs and aspirations by providing a diverse range of high-quality products at competitive prices. Our store features a wide variety of products, ranging from clothing and accessories to electronics and household items, making us the perfect destination for all your online shopping needs. We are committed to providing exceptional customer service, along with a safe and reliable shopping experience. Explore the world of online shopping with ease and comfort, and enjoy shopping with just one click of a button."
                : "مرحبًا بكم في متجرنا الإلكتروني، حيث نقدم تجربة تسوق مميزة ومريحة لكل عملائنا. في عصر التكنولوجيا والتطور الرقمي، نسعى جاهدين لتلبية احتياجاتكم وتطلعاتكم من خلال مجموعة متنوعة من المنتجات عالية الجودة وبأسعار تنافسية. يتميز متجرنا بتوفير مجموعة واسعة من المنتجات، بدءًا من الملابس والإكسسوارات إلى الأجهزة الإلكترونية والمنتجات المنزلية، مما يجعلنا الوجهة المثالية لجميع احتياجاتكم التسويقية عبر الإنترنت. نحن نلتزم بتقديم خدمة عملاء استثنائية، بالإضافة إلى تجربة تسوق آمنة وموثوقة. اكتشفوا معنا عالم التسوق الإلكتروني بكل سهولة وراحة، واستمتعوا بالتسوق بنقرة زر واحدة."}
            </div>
          </div>
          <hr />
          <div className="box2 boxContent my-3 d-flex justify-content-center align-items-center">
            <img src={clothes} />
            <div className="text h5">
              {isEnglish
                ? "We offer a wide range of trendy and high-quality clothing that suits all tastes and occasions. Whether you're looking for casual wear for everyday or charming dresses for special occasions, we provide you with everything you need for a distinctive and appealing look."
                : "نقدم تشكيلة واسعة من الملابس العصرية وذات الجودة العالية التي تناسب جميع الأذواق والمناسبات. سواء كنت تبحث عن ملابس كاجوال لليوميات أو فساتين ساحرة للمناسبات الخاصة، فإننا نوفر لك كل ما تحتاجه لإطلالة مميزة ومثيرة"}
            </div>
          </div>
          <hr />
          <div className="box3 boxContent my-3  text-center">
            <img src={electronics} />
            <div className="text h5">
              {isEnglish
                ? "Discover our comprehensive range of modern and innovative electronics that meet all your technological needs. From smartphones to tablets and personal computers, we provide you with the latest technologies at competitive prices and high quality."
                : "اكتشف مجموعتنا الشاملة من الإلكترونيات الحديثة والمبتكرة التي تلبي جميع احتياجاتك التقنية. من الهواتف الذكية إلى الأجهزة اللوحية والكمبيوترات الشخصية، نوفر لك أحدث التقنيات بأسعار منافسة وجودة عالية."}
            </div>
          </div>
          <hr />
          <div className="box4 boxContent my-3 d-flex justify-content-center align-items-center">
            <img src={jewelry} />
            <div className="text h5">
              {isEnglish
                ? "Complete your look with our wonderful collection of elegant and distinctive jewelry. Whether you're looking for luxurious pieces to highlight your elegance at special occasions or everyday pieces to complement your daily look, we offer you a variety that suits all tastes and needs."
                : "استكمل إطلالتك بمجموعتنا الرائعة من المجوهرات الأنيقة والمميزة. سواء كنت تبحث عن قطع فاخرة لتبرز أناقتك في المناسبات الخاصة أو قطع يومية لتكمل إطلالتك اليومية، فإننا نقدم لك مجموعة متنوعة تناسب جميع الأذواق والاحتياجات."}
            </div>
          </div>
          <hr />
          <div className="box5 boxContent my-3 d-flex justify-content-center align-items-center">
            <div className="text h5">
              {isEnglish
                ? "Complete your look with our wonderful collection of elegant and distinctive jewelry. Whether you're looking for luxurious pieces to highlight your elegance at special occasions or everyday pieces to complement your daily look, we offer you a variety that suits all tastes and needs."
                : "استكمل إطلالتك بمجموعتنا الرائعة من المجوهرات الأنيقة والمميزة. سواء كنت تبحث عن قطع فاخرة لتبرز أناقتك في المناسبات الخاصة أو قطع يومية لتكمل إطلالتك اليومية، فإننا نقدم لك مجموعة متنوعة تناسب جميع الأذواق والاحتياجات."}
            </div>
            <img src={sale} />
          </div>
        </div>
        <div className="endcontent text-center">
          <Link to={"/shop"}>
            <Button variant="primary">
              {isEnglish ? "Shop Now" : "تسوق الان"}
              <FontAwesomeIcon icon={faAngleRight} className="mx-1" />
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};
