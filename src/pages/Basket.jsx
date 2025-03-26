import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Basket() {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(storedBasket);
  }, []);

  const removeItem = (index) => {
    const updatedBasket = basket.filter((_, i) => i !== index);
    setBasket(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };

  const clearBasket = () => {
    setBasket([]);
    localStorage.removeItem("basket");
  };

  return (
    <section>
      <div className="container w-[1180px]">
        {basket.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-[900px] gap-y-10">
            <img src="/src/assets/images/icons/basket.svg" alt="basket" />
            <h3 className="font-bold text-[27px]">Ваша корзина пока пуста</h3>
            <Link to="/">
              <button className="bg-aa rounded-[60px] text-white font-bold text-[16px] py-[15px] px-[25px]">
                Посмотреть меню
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-7">
              <h3 className="font-bold text-[27px] mb-5">Корзина</h3>
              <button
                onClick={clearBasket}
                className="bg-red-600 text-white py-3 px-6 rounded mt-5"
              >
                Очистить корзину
              </button>
            </div>
            <ul className="flex items-center gap-5">
              {basket.map((item, index) => {
                const { img, title, text, price } = item;
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
                    <div className="flex gap-x-2 items-center absolute bottom-2 right-2">
                      <MdDelete
                        className="w-5 h-5 text-cc cursor-pointer"
                        onClick={() => removeItem(index)}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
