import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEye, FaTimes } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import CreateModule from "../components/modules/CreateDessertModule";

export default function Desserts() {
  const [data, setData] = useState([]);
  const [isModuleOpen, setIsModuleOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModule = () => {
    setIsModuleOpen(true);
  };

  const handleCloseModule = () => {
    setIsModuleOpen(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let response = await axios.get("http://localhost:3000/desserts");
      if (!response || !response.data) {
        throw new Error("Упс! возникает ошибка при получении данных");
      }
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Вы уверены, что хотите удалить этот элемент?"
    );
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(`http://localhost:3000/desserts/${id}`);
      if (response.status === 200 || response.status === 204) {
        setData((prevData) => prevData.filter((item) => item.id !== id));
        alert("Элемент успешно удалён.");
      } else {
        alert("Не удалось удалить элемент. Попробуйте снова.");
      }
    } catch (err) {
      console.error("Ошибка при удалении элемента:", err);
      alert("Произошла ошибка при удалении. Проверьте соединение с сервером.");
    }
  };

  const handlerEdit = async () => {
    if (!selectedProduct) return;

    try {
      const response = await axios.put(
        `http://localhost:3000/desserts/${selectedProduct.id}`,
        {
          title: selectedProduct.title,
          img: selectedProduct.img,
          price: selectedProduct.price,
          text: selectedProduct.text,
        }
      );

      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) =>
            item.id === selectedProduct.id ? selectedProduct : item
          )
        );
        alert("Информация о продукте успешно обновлена.");
        handleCloseModal();
      } else {
        alert("Не удалось обновить информацию о продукте. Попробуйте снова.");
      }
    } catch (err) {
      console.log("Ошибка при обновлении данных:", err);
      alert(
        "Произошла ошибка при обновлении. Проверьте соединение с сервером."
      );
    }
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <React.Fragment>
      <section className="my-[80.7px]">
        <div className="container w-[1180px]">
          <h2 className="text-[48px] text-center font-normal mb-5">Досерты</h2>
          <ul className="flex flex-wrap justify-between gap-y-5">
            {data.map((value, index) => {
              const { id, img, title, text, price } = value;
              return (
                <li
                  key={index}
                  className="p-[15px] shadow-lg rounded-2xl bg-white w-[270px] hover:scale-[1.02] transition-transform relative"
                >
                  <img className="w-[240px] h-[160px]" src={img} alt={title} />
                  <h3 className="text-xl font-bold mb-[16px]">{title}</h3>
                  <p className="text-[13px] text-aa mb-3 leading-[16px] h-[48px] overflow-hidden">
                    {text}
                  </p>
                  <button className="font-bold text-[19px]">{price}</button>
                  <div className="flex gap-x-2 items-center absolute bottom-2 right-2">
                    <FaEye
                      className="w-5 h-5 text-ba cursor-pointer"
                      onClick={() => handleOpenModal(value)}
                    />
                    <MdDelete
                      className="w-5 h-5 text-cc cursor-pointer"
                      onClick={() => handleDelete(id)}
                    />
                  </div>
                </li>
              );
            })}
            <li
              className="p-[15px] shadow-lg rounded-2xl bg-white w-[270px] h-[322px] hover:scale-[1.02] transition-transform flex justify-center items-center flex-col gap-y-5 cursor-pointer"
              onClick={handleOpenModule}
            >
              <CiCirclePlus className="text-[100px] text-hh" />
              <p className="text-ba text-2xl">Создать десерт</p>
            </li>
            {isModuleOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <CreateModule handleCloseModule={handleCloseModule} />
              </div>
            )}
          </ul>
        </div>
      </section>

      {showModal && selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white p-6 rounded-lg w-[90%] max-w-[500px] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">
              Изменить информация о продукте
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Название</label>
                <input
                  type="text"
                  value={selectedProduct.title}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      title: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold">
                  Изображение
                </label>
                <input
                  type="text"
                  value={selectedProduct.img}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      img: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Цена</label>
                <input
                  type="text"
                  value={selectedProduct.price}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      price: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            </form>
            <button
              className="mt-4 w-full bg-ba text-white py-2 rounded-lg"
              onClick={handlerEdit}
            >
              Потвердить
            </button>
            <FaTimes
              className="absolute top-3 right-3"
              onClick={handleCloseModal}
            />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
