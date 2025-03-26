import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <React.Fragment>
      <table className="w-full border-collapse mt-5 text-left text-sm font-sans">
        <thead className="bg-gray-200">
          <tr className="bg-gray-200">
            <th className="px-4 py-3 border border-gray-300">№</th>
            <th className="px-4 py-3 border border-gray-300">Товары</th>
            <th className="px-4 py-3 border border-gray-300">Просмотор</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="px-4 py-3 border border-gray-300">1</td>
            <td className="px-4 py-3 border border-gray-300">Combo</td>
            <td className="px-4 py-3 border border-gray-300">
              <Link to="/admin/combo">todo</Link>
            </td>
          </tr>
          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="px-4 py-3 border border-gray-300">2</td>
            <td className="px-4 py-3 border border-gray-300">Pizza</td>
            <td className="px-4 py-3 border border-gray-300">
              <Link to="/admin/pizza">todo</Link>
            </td>
          </tr>
          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="px-4 py-3 border border-gray-300">3</td>
            <td className="px-4 py-3 border border-gray-300">Snacks</td>
            <td className="px-4 py-3 border border-gray-300">
              <Link to="/admin/snack">todo</Link>
            </td>
          </tr>
          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="px-4 py-3 border border-gray-300">4</td>
            <td className="px-4 py-3 border border-gray-300">Drinks</td>
            <td className="px-4 py-3 border border-gray-300">
              <Link to="/admin/drink">todo</Link>
            </td>
          </tr>
          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="px-4 py-3 border border-gray-300">5</td>
            <td className="px-4 py-3 border border-gray-300">Salats</td>
            <td className="px-4 py-3 border border-gray-300">
              <Link to="/admin/salat">todo</Link>
            </td>
          </tr>
          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="px-4 py-3 border border-gray-300">6</td>
            <td className="px-4 py-3 border border-gray-300">Deserts</td>
            <td className="px-4 py-3 border border-gray-300">
              <Link to="/admin/dessert">todo</Link>
            </td>
          </tr>
          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="px-4 py-3 border border-gray-300">7</td>
            <td className="px-4 py-3 border border-gray-300">Souces</td>
            <td className="px-4 py-3 border border-gray-300">
              <Link to="/admin/souce">todo</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}
