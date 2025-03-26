import axios from "axios";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

export default function CreateDessertModule({ handleCloseModule }) {
  const [data, setData] = useState([]);
  const [img, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setIsFormValid(img.trim() && title.trim() && price.trim());
  }, [img, title, price]);

  const getData = async () => {
    try {
      let response = await axios.get("http://localhost:3000/desserts");

      if (!response) {
        throw new Error("Упс! возникает ошибка при получении данных");
      }

      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const postProduct = async () => {
    try {
      let response = await axios.post("http://localhost:3000/desserts", {
        img,
        title,
        price,
      });

      if (!response) {
        throw new Error("Упс! возникла ошибка при отправке данных");
      }

      getData();

      handleCloseModule();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <div className="w-[450px] bg-white p-7 shadow-xl rounded-3xl flex flex-col items-center gap-y-5 relative">
        <p className="text-ba text-xl font-normal">Добавить новый десерт</p>
        <input
          type="text"
          className="outline-none border-ba border-2 rounded-lg p-2 text-uu"
          placeholder="Добавьте картину"
          value={img}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          className="outline-none border-ba border-2 rounded-lg p-2 text-uu"
          placeholder="Добавьте заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="outline-none border-ba border-2 rounded-lg p-2 text-uu mb-12"
          placeholder="Добавьте цену"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button
          className={`bg-ba w-[300px] text-center py-3 text-white text-xl font-normal rounded-3xl ${
            isFormValid ? "" : "opacity-50 cursor-not-allowed"
          }`}
          onClick={isFormValid ? postProduct : null}
          disabled={!isFormValid}
        >
          Потвердить
        </button>
        <FaTimes
          className="absolute top-3 right-3"
          onClick={handleCloseModule}
        />
      </div>
    </React.Fragment>
  );
}

CreateDessertModule.propTypes = {
  handleCloseModule: PropTypes.func.isRequired,
};
