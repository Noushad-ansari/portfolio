import "./product.css";

const Product = ({ img, link, name }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="circleBox">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
         <b>{name}</b>
        <div className="cross">
          
        </div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        {/* <img src={img} alt="" className="p-img" /> */}
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;