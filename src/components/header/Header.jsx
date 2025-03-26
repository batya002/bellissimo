import React, { useState, useEffect } from "react";
import logo from "../../assets/images/icons/bellisimo_dark.webp";
import ru from "../../assets/images/icons/russian.svg";
import halal from "../../assets/images/icons/halal.webp";
import { IoLocationSharp } from "react-icons/io5";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false); 
    navigate("/");
  };

  return (
    <React.Fragment>
      <header>
        <div className="container w-[1180px]">
          <div className="flex justify-between items-center py-[15px]">
            <Link to="/">
              <img src={logo} alt="logo" width="180" height="47" />
            </Link>
            <div className="flex items-center gap-x-5">
              <div className="flex items-center gap-x-3">
                <IoLocationSharp className="w-[24px] h-[24px] bg-ff text-ab rounded" />
                <div>
                  <span className="text-[13px] font-normal leading-normal text-gg">
                    Город:
                  </span>
                  <p
                    onClick={toggleModal}
                    className="font-extrabold text-ba text-[18px] leading-normal cursor-pointer"
                  >
                    Ташкент
                  </p>
                  {isModalOpen && (
                    <div className="modal show">
                      <div className="modal-content relative">
                        <span className="close absolute top-0 right-3" onClick={toggleModal}>
                          &times;
                        </span>
                        <div className="box">
                          {[
                            "Самарканд",
                            "Андижан",
                            "Коканд",
                            "Фергана",
                            "Чирчик",
                            "Наманган",
                            "Бухара",
                            "Алмалык",
                            "Нурафшон",
                            "Ангрен",
                            "Янгиюль",
                          ].map((city) => (
                            <p key={city} className="enkor" href="#">
                              {city}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <a
                  className="py-1 px-[10px] bg-ff text-ab flex items-center justify-center rounded w-[83px] h-12 gap-x-2"
                  href="tel:1174"
                >
                  <i className="fa-solid fa-phone-volume"></i> 1174
                </a>
                <div className="flex flex-col">
                  <p className="text-gg text-[13px] font-normal leading-normal">
                    Единый
                  </p>
                  <p className="text-gg text-[13px] font-normal leading-normal">
                    контактный центр
                  </p>
                </div>
              </div>
              <div className="flex items-center py-[13px] px-[15px] bg-ff w-[200px] gap-x-3 rounded">
                <p className="text-hh font-bold text-[18px] leading-normal">
                  24/7
                </p>
                <span className="text-gg font-normal text-[10px] leading-normal">
                  Бесплатная доставка теперь доступна 24/7
                </span>
              </div>
            </div>
            <div className="flex items-center gap-x-5">
              <div className="flex items-center gap-x-[7px]">
                <img src={ru} alt="flag" width="25" height="25" />
                <select>
                  <option className="text-lg" value="ру">
                    Ру
                  </option>
                  <option className="text-lg" value="uz">
                    Uz
                  </option>
                </select>
              </div>
              <div>
                <Link to="/halal">
                  <img src={halal} alt="Halal" width="60" height="60" />
                </Link>
              </div>
              {isLoggedIn ? (
                <button
                  className="bg-red-500 py-[11px] px-6 rounded-[30px] font-semibold text-[16px] leading-normal text-white"
                  onClick={handleLogout}
                >
                  Выйти
                </button>
              ) : (
                <Link
                  className="bg-ba py-[11px] px-6 rounded-[30px] font-semibold text-[16px] leading-normal text-white"
                  to="/login"
                >
                  Войти
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
