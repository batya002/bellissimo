import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/combos/${id}`);
        if (!response) {
          throw new Error("Упс! возникла ошибка при получении данных");
        }
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [id]);

  const handleAddToBasket = () => {
    const basket = JSON.parse(localStorage.getItem("basket")) || [];
    localStorage.setItem("basket", JSON.stringify([...basket, data]));
    alert("Товар добавлен в корзину!");
  };

  return (
    <React.Fragment>
      <section>
        <div className="container w-[1180px]">
          <div className="flex justify-between">
            <div>
              <img
                className="w-[678px] h-[454px]"
                src={data.img}
                alt={data.title}
              />
              <div className="p-[25px] w-[628px]">
                <h3 className="text-[27px] font-bold leading-[19px]">
                  {data.title}
                </h3>
                <p className="text-[15px] font-normal leading-[15px] text-aa mt-[15px]">
                  {data.text}
                </p>
              </div>
            </div>
            <div>
              <ul className="mb-[50px] flex flex-col gap-y-[5px]">
                {data.detail === undefined ? (
                  <p>wait</p>
                ) : (
                  data.detail.map((value, index) => {
                    const { name, option, quantity } = value;
                    return (
                      <li
                        key={index}
                        className="w-[417px] p-[15px] pl-5 shadow-md rounded-[15px] transition-all bg-white hover:scale-[1.03]"
                      >
                        <h3 className="font-normal text-[15px] leading-[17px] opacity-[0.7]">
                          {name}
                        </h3>
                        <p className="font-semibold text-lg leading-5 opacity-[0.94] text-black mt-[5px]">
                          {option} {quantity}
                        </p>
                      </li>
                    );
                  })
                )}
              </ul>
              <div className="flex w-[452px] justify-between items-center pt-5">
                <p className="text-xl font-normal leading-[23px]">К оплате</p>
                <ins className="font-bold leading-[19px] text-[22px] no-underline">
                  {data.price}
                </ins>
              </div>
              {!isLoggedIn ? (
                <button
                  disabled={!isLoggedIn}
                  className="my-5 mx-[25px] py-[15px] px-[25px] bg-qq w-[400px] text-white rounded-[60px] disabled:cursor-not-allowed"
                >
                  Добавить
                </button>
              ) : (
                <button
                  onClick={handleAddToBasket}
                  className="my-5 mx-[25px] py-[15px] px-[25px] bg-ba w-[400px] text-white rounded-[60px] cursor-pointer"
                >
                  Добавить
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
