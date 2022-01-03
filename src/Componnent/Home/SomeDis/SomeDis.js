import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import pd from "../../../img/oneplus.jpg";

const SomeDis = () => {
  return (
    <Container>
      <h3 className="text-center mt-4">RAISE YOUR EXPECTATIONS</h3>
      <h6 className="text-center mt-4 mb-5">REFINED VIEWING EXPERIENCE</h6>
      <Row>
        <Col md={6} xs={12} className="p-4">
          <h2>OnePlus 9RT Summary</h2>
          <p>
            OnePlus 9RT mobile was launched on 13th October 2021. The phone
            comes with a 6.62-inch touchscreen display with a resolution of
            1080x2400 pixels at a pixel density of 397 pixels per inch (ppi) and
            an aspect ratio of 20:9. OnePlus 9RT is powered by an octa-core
            Qualcomm Snapdragon 888 processor. It comes with 8GB of RAM. The
            OnePlus 9RT runs Android 11 and is powered by a 4500mAh battery. The
            OnePlus 9RT supports proprietary fast charging.
          </p>
          <p>
            As far as the cameras are concerned, the OnePlus 9RT on the rear
            packs a triple camera setup featuring a 50-megapixel primary camera
            with an f/1.8 aperture; a 16-megapixel camera with an f/2.2
            aperture, and a 2-megapixel camera. The rear camera setup has
            autofocus. It has a single front camera setup for selfies, featuring
            a 16-megapixel sensor with an f/2.4 aperture.
          </p>
        </Col>
        <Col md={5} xs={12}>
          <img src={pd} className="rounded " height={500} width={500} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default SomeDis;
