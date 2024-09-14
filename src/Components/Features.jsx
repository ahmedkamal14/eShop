const Features = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center text-center my-10 py-10">
      <div className="flex flex-col justify-center items-center gap-2 mb-5">
        <img src="./sevices/ser1.png" alt="Shiping" className="" />
        <h2 className="font-bold uppercase mt-3">FREE AND FAST DELIVERY</h2>
        <p>Free delivery for all orders over $140</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 mb-5">
        <img src="./ser2.png" alt="Support" />
        <h2 className="font-bold uppercase mt-3">24/7 CUSTOMER SERVICE</h2>
        <p>Friendly 24/7 customer support</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <img src="./ser3.png" alt="verify" />
        <h2 className="font-bold uppercase mt-3">MONEY BACK GUARANTEE</h2>
        <p>We reurn money within 30 days</p>
      </div>
    </div>
  );
};

export default Features;
Features;
