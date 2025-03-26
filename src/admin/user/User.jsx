import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoEyeSharp } from "react-icons/io5";

export default function User() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let response = await axios.get(
        "https://67791102482f42b62e905407.mockapi.io/phones"
      );

      if (!response) {
        throw new Error("Упс! возника ошибка при плучении данных");
      }

      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <table className="w-full border-collapse mt-5 text-left text-sm font-sans">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-3 border border-gray-300">№</th>
            <th className="px-4 py-3 border border-gray-300">User phone</th>
            <th className="px-4 py-3 border border-gray-300">todo</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
            const { phone, id } = value;
            return (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className="px-4 py-3 border border-gray-300">{id}</td>
                <td className="px-4 py-3 border border-gray-300">{phone}</td>
                <td className="px-4 py-3 border border-gray-300">
                  <IoEyeSharp className="w-[28px] h-[28px] m-auto text-ba" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
}
