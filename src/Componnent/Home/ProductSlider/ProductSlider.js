import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Style.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

import { Button, Card, Container, Row } from "react-bootstrap";
import pd1 from "../../../img/1.jpg";
import pd2 from "../../../img/4.png";

const ProductSlider = () => {
  SwiperCore.use([Pagination, Navigation]);

  return (
    <Container fluid>
      <h2 className="fw-bold mt-3 mb-3 text-center">Latest Product</h2>
      <Row>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide width={250}>
            <Card style={{ width: "18rem", height: "29rem" }}>
              <Card.Img variant="top" height={250} src={pd1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide width={250}>
            <Card style={{ width: "18rem", height: "29rem" }}>
              <Card.Img variant="top" height={250} src={pd2} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide width={250}>
            <Card style={{ width: "18rem", height: "29rem" }}>
              <Card.Img variant="top" height={250} src={pd1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide width={250}>
            <Card style={{ width: "18rem", height: "29rem" }}>
              <Card.Img variant="top" height={250} src={pd2} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide width={250}>
            <Card style={{ width: "18rem", height: "29rem" }}>
              <Card.Img variant="top" height={250} src={pd1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide width={250}>
            <Card style={{ width: "18rem", height: "29rem" }}>
              <Card.Img variant="top" height={250} src={pd2} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide width={250}>
            <Card style={{ width: "18rem", height: "29rem" }}>
              <Card.Img variant="top" height={250} src={pd1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide width={250}>
            <Card style={{ width: "18rem", height: "29rem" }}>
              <Card.Img variant="top" height={250} src={pd2} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
        </Swiper>
      </Row>
    </Container>
  );
};

export default ProductSlider;
