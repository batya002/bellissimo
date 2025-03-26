import React, { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import User from "./user/User";
import Products from "./product/Products";

export default function Admin() {
  const [selectedService, setSelectedService] = useState("users");

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <React.Fragment>
      <div className="container w-[1180px] flex justify-between">
        <div className="relative">
          <aside className="w-[270px] bg-ba p-5 rounded-xl shadow-2xl fixed">
            <div className="flex items-center gap-x-5 mb-10 text-white">
              <FaCircleUser className="w-[48px] h-[48px]" />
              <p className="text-2xl font-normal">Admin</p>
            </div>
            <ul className="flex flex-col gap-y-5 text-white">
              <li
                className="text-[18px] font-normal hover:text-dc hover:text-[20px]"
                onClick={() => handleServiceClick("users")}
              >
                Пользователи
              </li>
              <li
                className="text-[18px] font-normal hover:text-dc hover:text-[20px]"
                onClick={() => handleServiceClick("products")}
              >
                Товары
              </li>
              <li
                className="text-[18px] font-normal hover:text-dc hover:text-[20px]"
                onClick={() => handleServiceClick("statistics")}
              >
                Статистика
              </li>
            </ul>
          </aside>
        </div>
        <section className="w-[700px] ml-10">
          {selectedService === "users" && <User />}
          {selectedService === "products" && <Products />}
        </section>
      </div>
    </React.Fragment>
  );
}
