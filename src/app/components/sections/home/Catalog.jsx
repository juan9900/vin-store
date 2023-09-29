"use client";
import mockData from "@/app/mockData/mockData";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import Carousel from "../../Carousel";
import styles from "/src/app/styles/Catalog.module.scss";

const handleDragStart = (e) => e.preventDefault();
export default function Catalog() {
  console.log(mockData);
  return (
    <div className="mt-10 ">
      <div className="container mx-auto  relative ">
        <div className={styles["divider-row"]}></div>
        <div className={styles["divider-row"]}></div>
        <h2 className="w-fit text-darkText mx-auto font-walkwayBlack text-4xl">
          Nuestras colecciones
        </h2>
      </div>
      <Carousel data={mockData} />
    </div>
  );
}
