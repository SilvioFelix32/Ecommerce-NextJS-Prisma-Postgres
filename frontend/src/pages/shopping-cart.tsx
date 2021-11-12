import React, { useContext, useState } from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { TopNav } from "../components/TopNav/TopNav";
import CartContext from "../../context/cart/CartContext";
import BottomFooter from "../components/BottomFooter";
import Link from "next/link";

import styles from "./ShoppingCart..module.scss"

// let w = window.innerWidth;

const ShoppingCart = () => {
  const [deli, setDeli] = useState("Piúma");
  const { cart, addOne, removeItem, deleteItem, clearCart } =
    useContext(CartContext);

  let subtotal = 0;

  return (
    <div>
      <TopNav />
      <Header />
      <div>
        <h1>
          Carrinho de Compras
        </h1>
        <div >
          <Link href="/">
            <a>
              Continuar Comprando
            </a>
          </Link>
        </div>
      </div>
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th>
                  Detalhes do Produto
                </th>
                <th
                  className={`font-normal py-2 hidden sm:block ${cart.length === 0 ? "text-center" : "text-right"
                    }`}
                >
                  Preço por Unidade
                </th>
                <th>Quantidade</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {cart.length === 0 ? (
                <tr>
                  <td colSpan={5}>Carrinho vazio!</td>
                </tr>
              ) : (
                cart.map((item) => {
                  subtotal += item.price * item.qty;
                  return (
                    <tr key={item.id}>
                      <td>
                        <Link href={`/products/${encodeURIComponent(item.id)}`}>
                          <img
                            src={item.img1}
                            alt=""
                            className="h-32 xl:mr-4"
                          />
                        </Link>
                        <span>{item.name}</span>
                      </td>
                      <td>
                        R$ {item.price}
                      </td>
                      <td>
                        <div>
                          <div
                            onClick={() => removeItem(item)}>
                            -
                          </div>
                          <div>
                            {item.qty}
                          </div>
                          <div
                            onClick={() => addOne(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td>
                        R$ {item.price * item.qty}
                        <br />
                        <span>(R$ {item.price})</span>
                      </td>
                      <td>
                        <button
                          onClick={() => deleteItem(item)}
                        >
                          &#10005;
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
          <div>
            <button
              onClick={clearCart}
              value="Limpar Carrinho" />
          </div>
        </div>
        <div className="cartTotals">
          <div>
            <h2>Valor Total</h2>
            <div>
              <span>SUBTOTAL</span>
              <span>R$ {subtotal}</span>
            </div>
            <div>
              <span>Entrega</span>
              <div>
                <div>
                  <div>
                    <input
                      type="radio"
                      name="deli"
                      value="Piúma"
                      id="ygn"
                      checked={deli === "Piúma"}
                      onChange={() => setDeli("Piúma")}
                    // defaultChecked
                    />{" "}
                    <label htmlFor="ygn" className="cursor-pointer">
                      Retirar na loja
                    </label>
                  </div>
                  <span>R$ 0,00</span>
                </div>
                <div>
                  <div>
                    <input
                      type="radio"
                      name="deli"
                      value="Others"
                      id="others"
                      checked={deli === "Others"}
                      onChange={() => setDeli("Others")}
                    />{" "}
                    <label htmlFor="others" className="cursor-pointer">
                      Outras Cidades
                    </label>
                  </div>
                  <span>R$ 7,00</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between py-3">
              <span>TOTAL</span>
              <span>R$ {subtotal + (deli === "Piúma" ? 0.0 : 7.0)}</span>
            </div>
            <button value="Finalizar Compra" />
          </div>
        </div>
      </div>
      <Footer />
      <BottomFooter />
    </div>
  );
};

export default ShoppingCart;
