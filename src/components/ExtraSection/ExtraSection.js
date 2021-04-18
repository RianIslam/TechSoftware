import React from "react";
import './ExtraSection.css'
const ExtraSection = () => {
  return (
    <div className="container-fluid text-white">
      <div className="backgroundImg">
        <h2 className="display-4 text-center py-5">
          To order a repair you <br/> need to do the following steps
        </h2>
        <div className="row py-5">
          <div className="col-md-4 p-4">
            <h3 className="text-center">Step 1 - dial our phone</h3>
            <p className="text-center">
              
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur adipisci quia dolo velit
            </p>
          </div>
          <div className="col-md-4 p-4">
            <h3 className="text-center">Step 2 - select a specialist</h3>
            <p className="text-center">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur adipisci quia dolo velit
            </p>
          </div>
          <div className="col-md-4 p-4">
            <h3 className="text-center">Step 3 - choose the right time</h3>
            <p className="text-center">
              
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur adipisci quia dolo velit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
