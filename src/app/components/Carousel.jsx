import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "/src/app/styles/Catalog.module.scss";
import CarouselItem from "./CarouselItem";
import Image from "next/image";
import backArrow from "/public/img/FLECHA-back.png";
import nextArrow from "/public/img/FLECHA.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Image
      alt="flecha siguiente"
      src={nextArrow}
      className={className}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Image
      src={backArrow}
      alt="flecha atrás"
      className={className}
      onClick={onClick}
    />
  );
}

export default function Carousel({ data }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  console.log({
    carousel: data,
  });

  return (
    <div className="w-4/6 mx-auto py-5">
      <Slider {...settings} className="pb-10">
        {" "}
        {data.length > 1 &&
          data.map((item) => {
            return <CarouselItem key={item.id} data={item} />;
          })}
      </Slider>
    </div>
  );
}
