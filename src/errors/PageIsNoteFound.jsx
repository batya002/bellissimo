import React from "react";
import pizza404 from "../assets/images/error/pizza404.webp";
import { Link } from "react-router-dom";

export default function PageIsNoteFound() {
  return (
    <React.Fragment>
      <section className="h-screen flex items-center justify-center">
        <div className="container w-[1180px]">
          <div className="flex items-center gap-x-3 justify-center mb-8">
            <p className="text-[80px] font-black">4</p>
            <img
              className="w-[100px] h-[100px]"
              src={pizza404}
              alt="image's page is note found"
            />
            <p className="text-[80px] font-black">4</p>
          </div>
          <p className="text-center text-[15px] mb-[12px]">
            Ой! Похоже, вы зашли на не существующую страницу :)
          </p>
          <p className="text-center text-[15px] mb-[12px]">
            Давайте мы поможем вам выбраться отсюда.
          </p>
          <div className="mt-8">
            <Link className="flex justify-center" to="/">
              <button className="bg-aa rounded-[60px] text-center text-white font-bold text-[16px] py-[15px] px-[25px] max-w-[400px] my-4 mx-[25px]">
                Вернуться на главную страницу
              </button>
            </Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
