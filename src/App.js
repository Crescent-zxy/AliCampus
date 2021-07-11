import "./styles.css";
import { Topbar } from "./components/Topbar";
import { Header } from "./components/Header";
import { Carousel } from "./components/CarouselContent";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";
import { Helper } from "./components/Helper";
import { useState } from "react";

let position;
let dragging = false;

export default function App() {
  const [location, setLocation] = useState([40, 110]);

  const onMouseDown = (e) => {
    dragging = true;
    position = [e.clientX, e.clientY];
  };

  const onMouseMove = (e) => {
    if (!dragging) {
      return;
    }
    const x = e.clientX;
    const y = e.clientY;
    const deltaX = position[0] - x;
    const deltaY = position[1] - y;
    const right = location[0] || 0;
    const bottom = location[1] || 0;
    const locationX =
      right + deltaX > window.innerWidth - 120
        ? window.innerWidth - 120
        : right + deltaX < 0
        ? 0
        : right + deltaX;
    const locationY =
      bottom + deltaY > window.innerHeight - 379
        ? window.innerHeight - 379
        : bottom + deltaY < 0
        ? 0
        : bottom + deltaY;
    setLocation([locationX, locationY]);
    position = [x, y];
  };

  const onMouseUp = (e) => {
    dragging = false;
  };

  return (
    <div className="App" onMouseMove={onMouseMove} onMouseUp={onMouseUp}>
      <Topbar />
      <Header />
      <Carousel />
      <MainContent />
      <Footer />
      <Helper
        onMouseDown={onMouseDown}
        style={{ right: `${location[0]}px`, bottom: `${location[1]}px` }}
      />
    </div>
  );
}
