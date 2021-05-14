import React from "react";
import Worldtotalconfirmedcases from "./charts/Worldtotalconfirmedcases";
import Worldtable from "./Worldtable";
import Worlddailyconfirmedcases from "./charts/Worlddailyconfirmedcases";
import Worldtotaldeathscases from "./charts/Worldtotaldeathscases";
import Worlddailydeathscases from "./charts/Worlddailydeathscases";
import Worldpredictedconfirmedcases from "./charts/Worldpredictedconfirmedcases";
import Worldpredicteddeathscases from "./charts/Worldpredicteddeathscases";
import "../../App.css";


const Worldhome = () => {
  return (
    <div className="container-xxl">
      {/* <div id="map-height" className="row mt-4 justify-content-evenly" >
        <div className="col-6 offset-md-3">
        <Worldmap/>
        </div>
      </div> */}
      <div className="row">
        <div className="col w-50">
          <Worldtable />
        </div>
        <div className="col worldgraph w-50">
          <div className="col pr-5">
            <Worldtotalconfirmedcases />
          </div>
          <div className="col pt-3 pr-5">
            <Worlddailyconfirmedcases/>
          </div>
          <div className="col pt-3 pr-5">
            <Worldtotaldeathscases/>
          </div>
          <div className="col pt-3 pr-5">
            <Worlddailydeathscases/>
          </div>
        </div>
      </div>
      <div className="row ml-3">
      <div className="col pt-3 pr-5">
        <Worldpredictedconfirmedcases/>
      </div>
      <div className="col pt-3 pr-5">
        <Worldpredicteddeathscases/>
      </div>
      </div>
    </div>
  );
};

export default Worldhome;
