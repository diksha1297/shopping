import "./Card.css";

const Card = (props) => {
  const onClickAge = () => {
    props.onClickAge(1);
  };
  const onClickLastName = () => {
    props.onClickLastName("Tiwari");
  };
  const onClickNP = () => {
    props.onClickNP("Bengaluru");
  };
  const onClickCP = () => {
    props.onClickCP("Buxar");
  };
  const onClickProfileItem = (index) => {
    props.onClickProfileItem(index);
  };

  return (
    <div className="card">
      <div className="image-container">
        <img src="https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/22120556/2023/2/25/986d6f97-fe9b-487a-9c64-f577e0a32c491677314970316KhushalKwomenEmbroideryKurtaandpalazzowithdupattaset7.jpg" />
      </div>
      <div className="Product-Name">Libas</div>
      <div className="Product-details">Women bandhani suit set</div>
      <div className="Price">
        Rs.1000 <span className="Line"> Rs.2000</span> <span> 50% off</span>
      </div>
      <div>{props.children}</div>
      <div onClick={onClickLastName}>{props.lastName}</div>
      <div onClick={onClickAge}>{props.age}</div>
      <div onClick={onClickNP}>
        {props.nativePlace}
        <span onClick={onClickCP}>{props.currentPlace}</span>
      </div>
      {props.profileList.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              onClickProfileItem(index);
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Card;
