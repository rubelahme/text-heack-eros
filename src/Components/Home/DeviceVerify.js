import React from "react";

const DeviceVerify = () => {
  return (
    <div className="Text_1">
      <div className="center">
        <div className="m-1">
          <div className="rounded bg-white">
            <div>
              <h4 className="Verification pt-4 ps-3">
                Device Verification 1/2
              </h4>
              <p className="provided ps-3  pb-5 pe-5">
                Do you wish to associate this device to your account
                permanently?
              </p>
            </div>
          </div>
          <div className="text-end">
            <span>
              <button className="CenCle">
                <a
                  className=" GoogleWait1"
                  href="https://eros-review.netlify.app/"
                  rel="noopener noreferrer"
                >
                  <span className="pb-0">YES SURE</span>
                </a>
              </button>
            </span>
            <span>
              <button className="verify_1">
                <a
                  className="text-warning GoogleWait"
                  href="https://eros-review.netlify.app/"
                  rel="noopener noreferrer"
                >
                  <span className="pb-0">YES SURE</span>
                </a>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceVerify;
