import React, { useEffect, useState } from "react";
import data from "../data/main.json";
import { Link } from "react-router-dom";
import Slider from "../util/Slider";
import { BsFillBasket3Fill } from "react-icons/bs";

export default function Home() {
  const [isFixed, setIsFixed] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [basketCount, setBasketCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const menuItems = [
    { id: "comboo", label: "Комбо", start: 410, end: 1780 },
    { id: "pizzaa", label: "Пицца", start: 1780, end: 3870 },
    { id: "snackss", label: "Закуски", start: 3870, end: 5290 },
    { id: "drinkss", label: "Напитки", start: 5290, end: 7390 },
    { id: "salatss", label: "Салаты", start: 7390, end: 7713 },
    { id: "dessertss", label: "Десерты", start: 7713, end: 8490 },
    { id: "souscess", label: "Соусы", start: 8490, end: Infinity },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsFixed(scrollPosition > 410);
      setShowImage(scrollPosition > 410);

      const active = menuItems.find(
        (section) =>
          scrollPosition >= section.start && scrollPosition < section.end
      );
      setActiveSection(active ? active.id : "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];
    setBasketCount(storedBasket.length);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];
      setBasketCount(storedBasket.length);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  }, []);

  const addToBasket = (item) => {
    if (!isLoggedIn) {
      alert("Для добавления в корзину необходимо войти в систему!");
      return;
    }

    const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];
    storedBasket.push(item);
    localStorage.setItem("basket", JSON.stringify(storedBasket));
    setBasketCount(storedBasket.length);
  };

  return (
    <React.Fragment>
      <section className="overflow-hidden">
        <Slider />
      </section>
      <div
        className={`w-full left-0 mt-0 ${
          isFixed ? "fixed top-0 bg-white z-10" : ""
        }`}
        style={{ boxShadow: isFixed ? "-5px 0 15px #00000033" : "none" }}
      >
        <div className="container w-[1180px] flex justify-between items-center py-[5px]">
          <ul className="flex gap-x-[10px] items-center">
            <li>
              {showImage && (
                <img
                  src="/src/assets/images/icons/icon.webp"
                  alt="icon"
                  className="img-blok"
                  width="35"
                  height="35"
                />
              )}
            </li>
            {menuItems.map((section) => (
              <li
                key={section.id}
                style={{
                  backgroundColor:
                    activeSection === section.id ? "#006f4c" : "#F4F4F4",
                  color: activeSection === section.id ? "#fff" : "#000",
                  padding: "5px 15px",
                  borderRadius: "100px",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                {section.label}
              </li>
            ))}
          </ul>
          <Link to="/bascet">
            <button className="bg-cc text-white py-2 px-3 rounded-[100px] hover:px-[18px] transition-all">
              Корзинка &vert; {basketCount}
            </button>
          </Link>
        </div>
      </div>
      <section className="pb-[50px]">
        <div className="container w-[1180px]">
          <h2 id="comboo" className="text-[19px] font-bold">
            Комбо
          </h2>
          <ul className="flex flex-wrap justify-between gap-y-5 my-[10px]">
            {data.combos.map((value, index) => {
              const { id, img, title, text, price } = value;
              return (
                <li
                  key={index}
                  className="p-[15px] shadow-lg rounded-2xl bg-white w-[270px] hover:scale-[1.02] transition-transform relative"
                >
                  <Link to={`/detail/${id}`}>
                    <img src={img} alt={title} />
                    <h3 className="text-xl font-bold mb-[16px]">{title}</h3>
                    <p className="text-[13px] text-aa mb-3 leading-[16px] h-[48px] overflow-hidden">
                      {text}
                    </p>
                    <button className="font-bold text-[19px]">{price}</button>
                  </Link>
                </li>
              );
            })}
          </ul>
          _<h2 className="text-[19px] font-bold mb-[15px] mt-5">Пицца</h2>
          <ul className="flex flex-wrap gap-5 my-[10px]">
            {data.pizzas.map((value, index) => {
              const { img, title, text, price } = value;
              return (
                <li
                  key={index}
                  className="p-[15px] shadow-lg rounded-2xl bg-white w-[270px] hover:scale-[1.02] transition-transform relative"
                >
                  <img src={img} alt={title} />
                  <h3 className="text-xl font-bold mb-[16px]">{title}</h3>
                  <p className="text-[13px] text-aa mb-3 leading-[16px] h-[48px] overflow-hidden">
                    {text}
                  </p>
                  <button className="font-bold text-[19px]">{price}</button>
                  {isLoggedIn && (
                    <div className="flex gap-x-2 items-center absolute bottom-2 right-2">
                      <BsFillBasket3Fill
                        className="text-cc cursor-pointer"
                        onClick={() => addToBasket(value)}
                      />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          <h2 className="text-[19px] font-bold mb-[15px] mt-5">Закуски</h2>
          <ul className="flex flex-wrap gap-5 my-[10px]">
            {data.snacks.map((value, index) => {
              const { img, title, text, price } = value;
              return (
                <li
                  key={index}
                  className="p-[15px] shadow-lg rounded-2xl bg-white w-[270px] hover:scale-[1.02] transition-transform relative"
                >
                  <img src={img} alt={title} />
                  <h3 className="text-xl font-bold mb-[16px] truncate">
                    {title}
                  </h3>
                  <p className="text-[13px] text-aa mb-3 leading-[16px] h-[48px] overflow-hidden">
                    {text}
                  </p>
                  <button className="font-bold text-[19px]">{price}</button>
                  {isLoggedIn && (
                    <div className="flex gap-x-2 items-center absolute bottom-2 right-2">
                      <BsFillBasket3Fill
                        className="text-cc cursor-pointer"
                        onClick={() => addToBasket(value)}
                      />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          <h2 className="text-[19px] font-bold mb-[15px] mt-5">Напитки</h2>
          <ul className="flex flex-wrap gap-5 my-[10px]">
            {data.drinks.map((value, index) => {
              const { img, title, text, price } = value;
              return (
                <li
                  key={index}
                  className="p-[15px] shadow-lg rounded-2xl bg-white w-[270px] hover:scale-[1.02] transition-transform relative"
                >
                  <img className="w-[240px] h-[160px]" src={img} alt={title} />
                  <h3 className="text-xl font-bold mb-[16px] truncate">
                    {title}
                  </h3>
                  <p className="text-[13px] text-aa mb-3 leading-[16px] h-[48px] overflow-hidden">
                    {text}
                  </p>
                  <button className="font-bold text-[19px]">{price}</button>
                  {isLoggedIn && (
                    <div className="flex gap-x-2 items-center absolute bottom-2 right-2">
                      <BsFillBasket3Fill
                        className="text-cc cursor-pointer"
                        onClick={() => addToBasket(value)}
                      />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          <h2 className="text-[19px] font-bold mb-[15px] mt-5">Салаты</h2>
          <ul className="flex flex-wrap gap-5 my-[10px]">
            {data.salats.map((value, index) => {
              const { img, title, text, price } = value;
              return (
                <li
                  key={index}
                  className="p-[15px] shadow-lg rounded-2xl bg-white w-[270px] hover:scale-[1.02] transition-transform relative"
                >
                  <img className="w-[240px] h-[160px]" src={img} alt={title} />
                  <h3 className="text-xl font-bold mb-[16px] truncate">
                    {title}
                  </h3>
                  <p className="text-[13px] text-aa mb-3 leading-[16px] h-[48px] overflow-hidden">
                    {text}
                  </p>
                  <button className="font-bold text-[19px]">{price}</button>
                  {isLoggedIn && (
                    <div className="flex gap-x-2 items-center absolute bottom-2 right-2">
                      <BsFillBasket3Fill
                        className="text-cc cursor-pointer"
                        onClick={() => addToBasket(value)}
                      />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          <h2 className="text-[19px] font-bold mb-[15px] mt-5">Десерты</h2>
          <ul className="flex flex-wrap gap-5 my-[10px]">
            {data.desserts.map((value, index) => {
              const { img, title, text, price } = value;
              return (
                <li
                  key={index}
                  className="p-[15px] shadow-lg rounded-2xl bg-white w-[270px] hover:scale-[1.02] transition-transform relative"
                >
                  <img className="w-[240px] h-[160px]" src={img} alt={title} />
                  <h3 className="text-xl font-bold mb-[16px] truncate">
                    {title}
                  </h3>
                  <p className="text-[13px] text-aa mb-3 leading-[16px] h-[48px] overflow-hidden">
                    {text}
                  </p>
                  <button className="font-bold text-[19px]">{price}</button>
                  {isLoggedIn && (
                    <div className="flex gap-x-2 items-center absolute bottom-2 right-2">
                      <BsFillBasket3Fill
                        className="text-cc cursor-pointer"
                        onClick={() => addToBasket(value)}
                      />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          <h2 id="souscess" className="text-[19px] font-bold mb-[15px] mt-5">
            Соусы
          </h2>
          <ul className="flex flex-wrap gap-5 my-[10px]">
            {data.souces.map((value, index) => {
              const { img, title, text, price } = value;
              return (
                <li
                  key={index}
                  className="p-[15px] shadow-lg rounded-2xl bg-white w-[270px] hover:scale-[1.02] transition-transform relative"
                >
                  <img className="w-[240px] h-[160px]" src={img} alt={title} />
                  <h3 className="text-xl font-bold mb-[16px] truncate">
                    {title}
                  </h3>
                  <p className="text-[13px] text-aa mb-3 leading-[16px] h-[48px] overflow-hidden">
                    {text}
                  </p>
                  <button className="font-bold text-[19px]">{price}</button>
                  {isLoggedIn && (
                    <div className="flex gap-x-2 items-center absolute bottom-2 right-2">
                      <BsFillBasket3Fill
                        className="text-cc cursor-pointer"
                        onClick={() => addToBasket(value)}
                      />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
}
