import styled from "styled-components";
import "antd/dist/antd.css";
import { Carousel } from "antd";

const CarouselWrapper = styled.div`
  height: 50vh;
`;

const CarouselContent = () => (
  <CarouselWrapper>
    <Carousel autoplay>
      <img
        alt="pic"
        src="https://img.alicdn.com/imgextra/i2/O1CN01an9hw81Cluytif0cM_!!6000000000122-0-tps-2880-728.jpg"
        width="1920"
        data-spm-anchor-id="a1z3e1.11770841.0.i2.60137405V9dZUj"
      />
      <img
        alt="pic"
        src="https://img.alicdn.com/imgextra/i2/O1CN01an9hw81Cluytif0cM_!!6000000000122-0-tps-2880-728.jpg"
        width="1920"
        data-spm-anchor-id="a1z3e1.11770841.0.i2.60137405V9dZUj"
      />
      <img
        alt="pic"
        src="https://img.alicdn.com/imgextra/i2/O1CN01an9hw81Cluytif0cM_!!6000000000122-0-tps-2880-728.jpg"
        width="1920"
        data-spm-anchor-id="a1z3e1.11770841.0.i2.60137405V9dZUj"
      />
    </Carousel>
  </CarouselWrapper>
);
export { CarouselContent as Carousel };
