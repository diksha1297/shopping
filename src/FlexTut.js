import "./FlexTut.css";
const FlexTut = () => {
  return (
    <div className="flex-tut">
      <div className="flex-tut-left">
        <div className="box-red">
          <div className="box-red-inner">A</div>
        </div>
        <div className="box-blue">
          <div className="box-blue-inner">B</div>
        </div>
        <div className="box-green">
          <div className="box-green-inner">C</div>
        </div>
        <div className="box-yellow">D</div>
      </div>
      <div className="flex-tut-right">
        <div className="box-red">
          <div className="box-red-inner">A</div>
        </div>
        <div className="box-blue">
          <div className="box-blue-inner">B</div>
        </div>
        <div className="box-green">
          <div className="box-green-inner">C</div>
        </div>
        <div className="box-yellow">D</div>
      </div>
    </div>
  );
};
export default FlexTut;
