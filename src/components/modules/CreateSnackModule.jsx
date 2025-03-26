import axios from "axios";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

export default function CreateSnackModule({ handleCloseModule }) {
  const [data, setData] = useState([]);
  const [img, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [text, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setIsFormValid(img.trim() && title.trim() && text.trim() && price.trim());
  }, [img, title, text, price]);

  const getData = async () => {
    try {
      let response = await axios.get("http://localhost:3000/snacks");

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
      let response = await axios.post("http://localhost:3000/snacks", {
        img,
        title,
        text,
        price,
      });

      if (!response) {
        throw new Error("Упс! возникла ошибка при отправке данных");
      }

      handleCloseModule();
      
      getData();
      console.log(1);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <div className="w-[450px] bg-white p-7 shadow-xl rounded-3xl flex flex-col items-center gap-y-5 relative">
        <p className="text-ba text-xl font-normal">Добавить новые закуски</p>
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
          className="outline-none border-ba border-2 rounded-lg p-2 text-uu"
          placeholder="Добавьте описание"
          value={text}
          onChange={(e) => setDescription(e.target.value)}
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

CreateSnackModule.propTypes = {
  handleCloseModule: PropTypes.func.isRequired,
};