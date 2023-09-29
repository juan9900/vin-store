import styles from "/src/app/styles/Navbar.module.scss";

export default function Hero() {
  return (
    <div className="flex flex-row justify-between container px-[8rem] mx-auto">
      <div className="flex flex-col justify-center relative">
        <div className={styles["star-container"]}>
          <img draggable={false} src="/img/stars.png" alt="stars" />
        </div>
        <h1 className="text-7xl font-bold text-blueHeader font-boilingBlack mb-5">
          Siempre a la <br /> moda contigo
        </h1>

        <button className="bg-secondary hover:bg-secondary-dark text-white text-3xl tracking-wider mt-5 py-2 px-4 rounded-full w-fit font-walkwayBlack">
          ¡Comprar aquí!
        </button>
      </div>
      <div className="flex flex-col justify-center">
        <img src="/img/bolso1.png" />
      </div>
    </div>
  );
}
