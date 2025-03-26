import React from 'react'
import { Link } from 'react-router-dom';
import logo from "@images/icons/bellisimo_white.svg";
import payme from "@images/icons/payme.svg";
import uzcard from "@images/icons/uzcard.svg";
import click from "@images/icons/click.svg";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="bg-aa">
        <div className="container w-[1180px]">
          <div className="py-[52px] flex justify-between">
            <div>
              <Link to="/">
                <img
                  className="mb-5"
                  src={logo}
                  alt="logo"
                  width="220"
                  height="52"
                />
              </Link>
              <p className="font-normal text-[12px] text-white leading-normal">
                ЗВОНИТЕ ПО НОМЕРУ - <a href="tel:1174">1174</a>
              </p>
            </div>
            <ul>
              <li>
                <a
                  className="text-uu hover:text-white hover:underline"
                  href="#"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  className="text-uu hover:text-white hover:underline"
                  href="#"
                >
                  Публичная оферта
                </a>
              </li>
              <li>
                <a
                  className="text-uu hover:text-white hover:underline"
                  href="#"
                >
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a
                  className="text-uu hover:text-white hover:underline"
                  href="#"
                >
                  Сертификат Халяль
                </a>
              </li>
              <li>
                <a
                  className="text-uu hover:text-white hover:underline"
                  href="#"
                >
                  Рестораны
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  className="text-uu hover:text-white hover:underline"
                  href="#"
                >
                  Наши вакансии
                </a>
              </li>
            </ul>
            <ul className="flex gap-x-[30px] gap-y-[18px] flex-wrap justify-center items-center w-[220px]">
              <li>
                <a href="#">
                  <img src={payme} alt="payme" width="90" height="26" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={uzcard} alt="uzcard" width="44" height="50" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={click} alt="click" width="92" height="35" />
                </a>
              </li>
            </ul>
            <div>
              <h3 className="font-normal text-[16px] leading-normal text-white mb-5">
                Следите за нами
              </h3>
              <div className="flex gap-x-5 items-center">
                <FaFacebook className="text-2xl text-gg hover:text-white" />
                <FaInstagram className="text-[28px] text-gg hover:text-white" />
                <FaTelegram className="text-[28px] text-gg hover:text-white" />
              </div>
            </div>
          </div>
          <p className="text-center text-white py-[30px] text-[16px] leading-5">
            &copy; 2016-2024 Bellissimo Pizza.
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
}
