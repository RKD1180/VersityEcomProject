import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./RatedPd.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

import { Col, Container, Row, Spinner } from "react-bootstrap";

import SliderProduct from "../SliderProduct/SliderProduct";

const RatedPd = () => {
  SwiperCore.use([Pagination, Navigation]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Container fluid>
      <h2 className="fw-bold mt-3 mb-3 text-center mb-5">Top Product</h2>
      <Row>
        {products.length === 0 ? (
          <>
            <Col className="d-flex justify-content-center">
              <Spinner animation="border" variant="warning" />
            </Col>
          </>
        ) : (
          <>
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              slidesPerGroup={3}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              className="mySwiper"
            >
              {products.map((product) => (
                <SwiperSlide>
                  <SliderProduct product={product}></SliderProduct>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </Row>
    </Container>
  );
};

export default RatedPd;
