import style from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export const ProductCard = () => {
  const {
    productCard,
    productImg,
    productDescription,
    buttonsContainer,
    buttonMinus,
    countLabel,
    buttonAdd,
  } = style;
  return (
    <div className={productCard}>
      <img className={productImg} src="./coffee-mug.png" alt="Coffee Mug" />
      {/* <img className={productImg} src={noImage} alt="Coffee Mug" /> */}
      <span className={productDescription}>Coffee mug</span>

      <div className={buttonsContainer}>
        <button className={buttonMinus}>-</button>
        <div className={countLabel}>0</div>
        <button className={buttonAdd}>+</button>
      </div>
    </div>
  );
};
