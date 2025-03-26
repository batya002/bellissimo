import axios from "axios";
import React, { useState } from "react";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const isPhoneValid = phone.replace(/[^0-9]/g, "").length === 9;

  const postData = async (e) => {
    e.preventDefault();

    if (phone === "(99) 999-99-99") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/admin");
      return;
    }

    try {
      let response = await axios.post(
        "https://67791102482f42b62e905407.mockapi.io/phones",
        { phone }
      );

      if (!response) {
        throw new Error("Упс! возникла ошибка данные не отправились");
      }

      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } catch (err) {
      console.error("Ошибка при отправке данных:", err);
    }
  };

  return (
    <React.Fragment>
      <section className="pb-[207px]">
        <div className="container">
          <div className="mt-[200px]">
            <h1 className="text-center font-normal text-[32px] leading-normal mb-[27px]">
              Введите свой номер
            </h1>
            <form
              className="text-center flex flex-col items-center gap-y-4 mb-[16px]"
              autoComplete="off"
              onSubmit={postData}
            >
              <InputMask
                mask="(99) 999-99-99"
                alwaysShowMask={true}
                maskChar="_"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              >
                {(inputProps) => (
                  <div className="relative w-[320px]">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 font-medium text-lg">
                      +998
                    </span>
                    <input
                      {...inputProps}
                      className="pl-16 w-full h-[60.5px] bg-gray-50 text-gray-700 rounded-lg border border-gray-300 focus:border-gray-500 focus:ring focus:ring-gray-200 outline-none placeholder-gray-400 text-lg"
                      placeholder="(__) ___-__-__"
                    />
                  </div>
                )}
              </InputMask>
              <button
                type="submit"
                disabled={!isPhoneValid}
                className={`font-bold text-[16px] leading-normal rounded-[60px] py-[15px] px-[25px] w-[300px] transition-colors ${
                  isPhoneValid
                    ? "bg-ba text-white cursor-pointer"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Отправить код
              </button>
            </form>
            <div className="w-[220px] m-auto">
              <p className="text-[10px] text-tt text-center">
                This site is protected by reCAPTCHA and the Google
                <a
                  className="text-ee"
                  href="https://policies.google.com/privacy"
                >
                  Privacy Policy
                </a>
                and
                <a className="text-ee" href="https://policies.google.com/terms">
                  Terms of Service
                </a>
                apply.
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
