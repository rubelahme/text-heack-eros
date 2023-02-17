import React from "react";
import "../HomeStyle/Verifycode.css";
import { useForm } from "react-hook-form";

const Verifycode = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <div className="Text_1">
      <div class="center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="m-1">
            <div className="rounded bg-white">
              <div>
                <h4 className="Verification pt-4 ps-3">
                  Device Verification 1/2
                </h4>
                <p className="provided ps-3 pe-5">
                  We have just sent a Verification Code to email address
                  provided{" "}
                  <span className="fw-bold">Rubelahme3303@gmail.com</span>
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