import React from "react";
import { Container } from "react-bootstrap";
import { selectLanguage } from "../rtk/slices/deflanSlice";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faE,
  faAngleRight,
  faAnglesDown,
  faStar,
  faCheck,
  faInfinity,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import shopImg from "../imgs/shop1.png";
import clothes from "../imgs/clothes.png";
import electronics from "../imgs/electronics.png";
import jewelry from "../imgs/jewelry.png";
import sale from "../imgs/sale.png";
import king from "../imgs/king.png";
import imgUser from "../imgs/userFace.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";

export const MaimPage = () => {
  const isEnglish = useSelector(selectLanguage);

  return (
    <>
      <div className="headerIntro text-center position-relative">
        <div className="intro">
          {isEnglish ? (
            <h2 className="logoName text-center  text-white  p-2">
              Welcome To Shop
              <span className=" Elogo  px-1">
                <FontAwesomeIcon icon={faE} />
              </span>
              mpire
            </h2>
          ) : (
            <h2 className="logoName text-center  text-white  p-2">
              Shop
              <span className=" Elogo  px-1">
                <FontAwesomeIcon icon={faE} />
              </span>
              mpire مرحبا بك في
            </h2>
          )}
          <img src={king} />
        </div>
        <a href="#info" className="text-dark">
          <FontAwesomeIcon icon={faAnglesDown} className="h2 btm-btn" />
        </a>
      </div>
      <Container className="my-4" id="info">
        <div className="content">
          <div className="info">
            <div className="headContent">
              <h1 className="text-center">{isEnglish ? "About US" : "عنا"}</h1>
              <h4 className="text-center">{isEnglish ? "About US" : "عنا"}</h4>
            </div>
            <div className="infoContent">
              <Row
                xs={1}
                xm={2}
                xl={3}
                className="text-center mt-3 gap-2 justify-content-center"
              >
                <Col>
                  {" "}
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title>
                        {isEnglish ? "About Us" : "من نحن"}
                      </Card.Title>
                      <Card.Text>
                        {isEnglish
                          ? "Welcome to our website! We are a leading Egyptian e-commerce platform, dedicated to providing an excellent shopping experience for our customers. We take pride in offering a wide range of high-quality products at competitive prices."
                          : "مرحبًا بك في موقعنا!نحن موقع e-commerce مصري رائد في مجال التجارة الإلكترونية، حيث نسعى جاهدين لتوفير تجربة تسوق ممتازة لعملائنا. نحن فخورون بأن نقدم مجموعة واسعة من المنتجات عالية الجودة بأسعار تنافسية."}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title>
                        {isEnglish
                          ? "Our Vision and Mission"
                          : " رؤيتنا ومهمتنا "}
                      </Card.Title>
                      <Card.Text>
                        {isEnglish
                          ? "Our vision is to become the primary destination for online shopping in Egypt, providing an innovative and convenient shopping experience for every customer who trusts us. Our mission is to provide a secure and reliable platform that combines quality, diversity, and value for our customers."
                          : "تتمثل رؤيتنا في أن نكون الوجهة الرئيسية للتسوق عبر الإنترنت في مصر، وتوفير تجربة تسوق مبتكرة ومريحة لكل عميل يثق فينا. بينما تقوم مهمتنا بتوفير منصة آمنة وموثوقة تجمع بين الجودة والتنوع والقيمة لعملائنا"}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title>
                        {isEnglish
                          ? "Quality is Our Principle "
                          : " الجودة هي مبدأنا"}
                      </Card.Title>
                      <Card.Text>
                        {isEnglish
                          ? "At our website, we consider quality to be non-negotiable. We are committed to delivering high-quality products according to the highest standards, ensuring customer satisfaction and trust."
                          : "في موقعنا، نعتبر الجودة أمرًا لا تجاوزه الحرفية. نحن نتعهد بتقديم منتجات عالية الجودة وفقًا لأعلى المعايير، مما يضمن رضا العملاء وثقتهم فينا."}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title>
                        {isEnglish ? "Our Team " : "فريقنا"}
                      </Card.Title>
                      <Card.Text>
                        {isEnglish
                          ? "Our team consists of a group of professionals specializing in various fields such as marketing, information technology, and customer service. We are dedicated to achieving our goals with team spirit and continuous collaboration to ensure the highest levels of quality and customer satisfaction"
                          : "يتكون فريقنا من مجموعة من المحترفين المتخصصين في مجالات متعددة مثل التسويق، وتكنولوجيا المعلومات، وخدمة العملاء. نحن ملتزمون بتحقيق أهدافنا بروح الفريق والتعاون المستمر لضمان تحقيق أعلى مستويات الجودة والرضا لعملائنا."}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
          <div className="speedInfo mt-5">
            <div className="headContent my-5">
              <h1 className="text-center">
                {isEnglish ? "Our Products" : "منتاجتنا"}
              </h1>
              <h4 className="text-center">
                {isEnglish ? "Our Products" : "منتاجتنا"}
              </h4>
            </div>
            <div className="box1 boxContent darkInfo p-3 rounded my-3 d-flex justify-content-center align-items-center">
              <img src={shopImg} />
              <div className="text h5">
                {isEnglish
                  ? "Welcome to our online store, where we offer a unique and convenient shopping experience for all our customers. In the era of technology and digital advancement, we strive to meet your needs and aspirations by providing a diverse range of high-quality products at competitive prices. Our store features a wide variety of products, ranging from clothing and accessories to electronics and household items, making us the perfect destination for all your online shopping needs. We are committed to providing exceptional customer service, along with a safe and reliable shopping experience. Explore the world of online shopping with ease and comfort, and enjoy shopping with just one click of a button."
                  : "مرحبًا بكم في متجرنا الإلكتروني، حيث نقدم تجربة تسوق مميزة ومريحة لكل عملائنا. في عصر التكنولوجيا والتطور الرقمي، نسعى جاهدين لتلبية احتياجاتكم وتطلعاتكم من خلال مجموعة متنوعة من المنتجات عالية الجودة وبأسعار تنافسية. يتميز متجرنا بتوفير مجموعة واسعة من المنتجات، بدءًا من الملابس والإكسسوارات إلى الأجهزة الإلكترونية والمنتجات المنزلية، مما يجعلنا الوجهة المثالية لجميع احتياجاتكم التسويقية عبر الإنترنت. نحن نلتزم بتقديم خدمة عملاء استثنائية، بالإضافة إلى تجربة تسوق آمنة وموثوقة. اكتشفوا معنا عالم التسوق الإلكتروني بكل سهولة وراحة، واستمتعوا بالتسوق بنقرة زر واحدة."}
              </div>
            </div>
            <div className="box2 boxContent my-3 d-flex justify-content-center align-items-center">
              <img src={clothes} />
              <div className="text h5">
                {isEnglish
                  ? "We offer a wide range of trendy and high-quality clothing that suits all tastes and occasions. Whether you're looking for casual wear for everyday or charming dresses for special occasions, we provide you with everything you need for a distinctive and appealing look."
                  : "نقدم تشكيلة واسعة من الملابس العصرية وذات الجودة العالية التي تناسب جميع الأذواق والمناسبات. سواء كنت تبحث عن ملابس كاجوال لليوميات أو فساتين ساحرة للمناسبات الخاصة، فإننا نوفر لك كل ما تحتاجه لإطلالة مميزة ومثيرة"}
              </div>
            </div>
            <div className="box3 boxContent my-3 darkInfo p-3 rounded text-center">
              <img src={electronics} />
              <div className="text h5">
                {isEnglish
                  ? "Discover our comprehensive range of modern and innovative electronics that meet all your technological needs. From smartphones to tablets and personal computers, we provide you with the latest technologies at competitive prices and high quality."
                  : "اكتشف مجموعتنا الشاملة من الإلكترونيات الحديثة والمبتكرة التي تلبي جميع احتياجاتك التقنية. من الهواتف الذكية إلى الأجهزة اللوحية والكمبيوترات الشخصية، نوفر لك أحدث التقنيات بأسعار منافسة وجودة عالية."}
              </div>
            </div>
            <div className="box4 boxContent my-3 d-flex justify-content-center align-items-center">
              <img src={jewelry} />
              <div className="text h5">
                {isEnglish
                  ? "Complete your look with our wonderful collection of elegant and distinctive jewelry. Whether you're looking for luxurious pieces to highlight your elegance at special occasions or everyday pieces to complement your daily look, we offer you a variety that suits all tastes and needs."
                  : "استكمل إطلالتك بمجموعتنا الرائعة من المجوهرات الأنيقة والمميزة. سواء كنت تبحث عن قطع فاخرة لتبرز أناقتك في المناسبات الخاصة أو قطع يومية لتكمل إطلالتك اليومية، فإننا نقدم لك مجموعة متنوعة تناسب جميع الأذواق والاحتياجات."}
              </div>
            </div>
            <div className="box5 boxContent my-3 darkInfo p-3 rounded d-flex justify-content-center align-items-center">
              <div className="text h5">
                {isEnglish
                  ? "Complete your look with our wonderful collection of elegant and distinctive jewelry. Whether you're looking for luxurious pieces to highlight your elegance at special occasions or everyday pieces to complement your daily look, we offer you a variety that suits all tastes and needs."
                  : "استكمل إطلالتك بمجموعتنا الرائعة من المجوهرات الأنيقة والمميزة. سواء كنت تبحث عن قطع فاخرة لتبرز أناقتك في المناسبات الخاصة أو قطع يومية لتكمل إطلالتك اليومية، فإننا نقدم لك مجموعة متنوعة تناسب جميع الأذواق والاحتياجات."}
              </div>
              <img src={sale} />
            </div>
            <div className="endcontent text-center">
              <Link to={"/shop"}>
                <Button variant="primary">
                  {isEnglish ? "Shop Now" : "تسوق الان"}
                  <FontAwesomeIcon icon={faAngleRight} className="mx-1" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="testimonials my-5">
            <div className="headContent my-5 ">
              <h1 className="text-center">
                {isEnglish ? "TESTIMONIALS" : "التوصيات"}
              </h1>
              <h4 className="text-center">
                {isEnglish ? "TESTIMONIALS" : "التوصيات"}
              </h4>
            </div>
            <div className="testimonialsInfo">
              <Row
                xs={1}
                xm={2}
                xl={3}
                className="text-center mt-3 gap-2 justify-content-center"
              >
                <Col className="my-3">
                  {" "}
                  <Card className="h-100 cardTset my-3">
                    <Image
                      src={imgUser}
                      roundedCircle
                      className=" bg-secondary"
                    />
                    <Card.Body>
                      <Card.Title>Ahemd</Card.Title>
                      <Card.Text>
                        I absolutely love shopping on this website! The variety
                        of products is amazing, and the checkout process is so
                        smooth and easy
                      </Card.Text>
                    </Card.Body>
                    <div className="stars mb-3">
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                    </div>
                  </Card>
                </Col>
                <Col className="my-3">
                  {" "}
                  <Card className="h-100 cardTset my-3">
                    <Image
                      src={imgUser}
                      roundedCircle
                      className=" bg-secondary my-3"
                    />
                    <Card.Body>
                      <Card.Title>Yasser</Card.Title>
                      <Card.Text>
                        Highly recommended! I've been a loyal customer for years
                        now, and I've never been disappointed. The quality of
                        the products and the customer service are top-notch
                      </Card.Text>
                    </Card.Body>
                    <div className="stars mb-3">
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </Card>
                </Col>
                <Col className="my-3">
                  {" "}
                  <Card className="h-100 cardTset my-3">
                    <Image
                      src={imgUser}
                      roundedCircle
                      className=" bg-secondary my-3"
                    />
                    <Card.Body>
                      <Card.Title>Abdelrhman</Card.Title>
                      <Card.Text>
                        This site has become my go-to for all my shopping needs.
                        The prices are competitive, and I always find exactly
                        what I'm looking for. Plus, the fast shipping is a huge
                        bonus
                      </Card.Text>
                    </Card.Body>
                    <div className="stars mb-3">
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </Card>
                </Col>
                <Col className="my-3">
                  {" "}
                  <Card className="h-100 cardTset my-3">
                    <Image
                      src={imgUser}
                      roundedCircle
                      className=" bg-secondary"
                    />
                    <Card.Body>
                      <Card.Title>Mohamed</Card.Title>
                      <Card.Text>
                        Five stars all around! The user interface is intuitive,
                        the product descriptions are detailed, and the overall
                        shopping experience is delightful. I'll definitely be
                        coming back for more
                      </Card.Text>
                    </Card.Body>
                    <div className="stars mb-3">
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
          <div className="plansMain">
            <div className="headContent my-5 ">
              <h1 className="text-center">
                {isEnglish ? "PRICING PLANS" : "خطط الاسعار"}
              </h1>
              <h4 className="text-center">
                {isEnglish ? "PRICING PLANS" : "خطط الاسعار"}
              </h4>
            </div>
            <div className="plans position-relative">
              <Row xs={1} xm={1} xl={3}>
                <Col>
                  <div className="box1">
                    <Card>
                      <Card.Body>
                        <Card.Title className="text-center">
                          <h2>{isEnglish ? "Basic" : "أساسي"}</h2>
                          <div class="price my-3 h1">
                            <span class="amount">
                              {isEnglish ? "Free" : "مجاني"}
                            </span>
                            <span class="time text-secondary h5">
                              <FontAwesomeIcon icon={faInfinity} />
                            </span>
                          </div>
                        </Card.Title>
                        <ListGroup className="list-group-flush">
                          <ListGroup.Item>
                            <FontAwesomeIcon icon={faCheck} className="me-3 " />
                            {isEnglish
                              ? "Free shipping anywhere."
                              : "شحن مجاني الي اي مكان"}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <FontAwesomeIcon icon={faCheck} className="me-3" />
                            {isEnglish
                              ? "Priority booking for you."
                              : "اولوية الحجز لك "}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <FontAwesomeIcon icon={faCheck} className="me-3 " />
                            {isEnglish
                              ? "Exclusive offers just for you."
                              : "عروض خاصه لك فقط"}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="me-3 text-success"
                            />
                            {isEnglish
                              ? "Continuous order tracking."
                              : " المتابعة الدائمة للطلبات"}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="me-3 text-success"
                            />
                            {isEnglish
                              ? "Premium products for you."
                              : " منتجات مميزه لك "}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="me-3 text-success"
                            />
                            {isEnglish
                              ? "Support available 24/7."
                              : "الدعم متاح دائما "}
                          </ListGroup.Item>
                        </ListGroup>
                        <Link className="text-center" to={"/Login"}>
                          <Button className="my-3">
                            {isEnglish ? "Join Now" : "انضم الان"}
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
                <Col>
                  <div className="box2 Hot">
                    <Card>
                      <Card.Body>
                        <Card.Title className="text-center">
                          <h2>{isEnglish ? "Advanced" : "متقدم"}</h2>
                          <div class="price my-3 h1">
                            <span class="amount">$30</span>
                            <span class="time text-secondary h5">
                              {isEnglish ? (
                                <>
                                  {isEnglish ? "Per Month" : "للشهر"}
                                  <span className="bg-danger text-light p-1 rounded mx-2">
                                    {isEnglish ? "Hot" : "الاكثر طلب"}
                                    <FontAwesomeIcon
                                      icon={faFire}
                                      className="mx-1"
                                    />
                                  </span>
                                </>
                              ) : (
                                <>
                                  <span className="bg-danger text-light p-1 rounded mx-2">
                                    {isEnglish ? "Hot" : "الاكثر طلب"}
                                    <FontAwesomeIcon
                                      icon={faFire}
                                      className="mx-1"
                                    />
                                  </span>
                                  {isEnglish ? "Per Month" : "للشهر"}
                                </>
                              )}
                            </span>
                          </div>
                        </Card.Title>
                        <ListGroup className="list-group-flush">
                          <ListGroup.Item>
                            <FontAwesomeIcon icon={faCheck} className="me-3 " />
                            {isEnglish
                              ? "Free shipping anywhere."
                              : "شحن مجاني الي اي مكان"}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <FontAwesomeIcon icon={faCheck} className="me-3" />
                            {isEnglish
                              ? "Priority booking for you."
                              : "اولوية الحجز لك "}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="me-3 text-success"
                            />
                            {isEnglish
                              ? "Exclusive offers just for you."
                              : "عروض خاصه لك فقط"}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="me-3 text-success"
                            />
                            {isEnglish
                              ? "Continuous order tracking."
                              : " المتابعة الدائمة للطلبات"}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="me-3 text-success"
                            />
                            {isEnglish
                              ? "Premium products for you."
                              : " منتجات مميزه لك "}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="me-3 text-success"
                            />
                            {isEnglish
                              ? "Support available 24/7."
                              : "الدعم متاح دائما "}
                          </ListGroup.Item>
                        </ListGroup>
                        <Link className="text-center" to={"/Login"}>
                          <Button className="my-3">
                            {isEnglish ? "Join Now" : "انضم الان"}
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
                <Col>
                  <div className="box3">
                    <Card>
                      <Card.Body>
                        <Card.Title className="text-center">
                          <h2>{isEnglish ? "Professional" : "احترافي"}</h2>
                          <div class="price my-3 h1">
                            <span class="amount">$45</span>
                            <span class="time text-secondary h5">
                              {isEnglish ? "Per Month" : "للشهر"}
                            </span>
                          </div>
                        </Card.Title>
                        <ListGroup className="list-group-flush">
                          <ListGroup.Item>
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="me-3 text-success"
                            />
                            {isEnglish
                              ? "Free shipping anywhere."
                              : "شحن مجاني الي اي مكان"}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="me-3 text-success"
                            />
                            {isEnglish
                              ? "Priority booking for you."
                              : "اولوية الحجز لك "}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="me-3 text-success"
                            />
                            {isEnglish
                              ? "Exclusive offers just for you."
                              : "عروض خاصه لك فقط"}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="me-3 text-success"
                            />
                            {isEnglish
                              ? "Continuous order tracking."
                              : " المتابعة الدائمة للطلبات"}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="me-3 text-success"
                            />
                            {isEnglish
                              ? "Premium products for you."
                              : " منتجات مميزه لك "}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="me-3 text-success"
                            />
                            {isEnglish
                              ? "Support available 24/7."
                              : "الدعم متاح دائما "}
                          </ListGroup.Item>
                        </ListGroup>
                        <Link className="text-center" to={"/Login"}>
                          <Button className="my-3">
                            {isEnglish ? "Join Now" : "انضم الان"}
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
