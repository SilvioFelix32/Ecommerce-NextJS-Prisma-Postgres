import Header from "../components/Header/";
import Footer from "../components/Footer/";
import { useCallback, useContext, useEffect, useState } from "react";
import Link from "next/link";
import Button from "../components/Buttons/Button";
import GhostButton from "../components/Buttons/GhostButton";
import TextButton from "../components/Buttons/TextButton";

// let w = window.innerWidth;

const ShoppingCart = () => {
  const [deli, setDeli] = useState("Yangon");
  const { cart, addOne, removeItem, deleteItem, clearCart } =
    useContext(CartContext);

  let subtotal = 0;

  return (
    <div>
      <Header />
      <div className="px-6 md:px-20 w-full border-t-2 border-gray100">
        <h1 className="text-2xl sm:text-4xl text-center sm:text-left mt-6 mb-2 animatee__animated animate__bounce">
          Carrinho de Compras
        </h1>
        <div className="mt-6 mb-3">
          <Link href="/">
            <a className="inline-block">
              <LeftArrow size="sm" extraClass="inline-block" /> Continuar Comprando
            </a>
          </Link>
        </div>
      </div>
      <div className="px-6 md:px-20 mb-14 flex flex-col lg:flex-row">
        <div className="h-full w-full lg:w-4/6 mr-4">
          <table className="w-full mb-6">
            <thead>
              <tr className="border-t-2 border-b-2 border-gray200">
                <th className="font-normal text-left sm:text-center py-2 xl:w-72">
                  Detalhes do Produto
                </th>
                <th
                  className={`font-normal py-2 hidden sm:block ${
                    cart.length === 0 ? "text-center" : "text-right"
                  }`}
                >
                  Preço por Unidade
                </th>
                <th className="font-normal py-2">Quantidade</th>
                <th className="font-normal py-2 text-right">Valor</th>
                <th
                  className="font-normal py-2 text-right"
                  style={{ minWidth: "3rem" }}
                ></th>
              </tr>
            </thead>
            <tbody>
              {cart.length === 0 ? (
                <tr className="w-full text-center h-60 border-b-2 border-gray200">
                  <td colSpan={5}>Carrinho vazio!</td>
                </tr>
              ) : (
                cart.map((item) => {
                  subtotal += item.price * item.qty;
                  return (
                    <tr className="border-b-2 border-gray200" key={item.id}>
                      <td className="my-3 flex flex-col xl:flex-row items-start sm:items-center xl:space-x-2 text-center xl:text-left">
                        <Link href={`/products/${encodeURIComponent(item.id)}`}>
                          <img
                            src={item.img1}
                            alt=""
                            className="h-32 xl:mr-4"
                          />
                        </Link>
                        <span>{item.name}</span>
                      </td>
                      <td className="text-right text-gray400 hidden sm:table-cell">
                        $ {item.price}
                      </td>
                      <td>
                        <div className="w-12 h-32 sm:h-auto sm:w-3/4 md:w-2/6 mx-auto flex flex-col-reverse sm:flex-row border border-gray300 sm:divide-x-2 divide-gray300">
                          <div
                            onClick={() => removeItem(item)}
                            className="h-full w-12 flex justify-center items-center cursor-pointer hover:bg-gray500 hover:text-gray100"
                          >
                            -
                          </div>
                          <div className="h-full w-12 flex justify-center items-center pointer-events-none">
                            {item.qty}
                          </div>
                          <div
                            onClick={() => addOne(item)}
                            className="h-full w-12 flex justify-center items-center cursor-pointer hover:bg-gray500 hover:text-gray100"
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="text-right text-gray400">
                        $ {item.price * item.qty}
                        <br />
                        <span className="text-xs">($ {item.price})</span>
                      </td>
                      <td className="text-right" style={{ minWidth: "3rem" }}>
                        <button
                          onClick={() => deleteItem(item)}
                          type="button"
                          className="outline-none text-gray300 hover:text-gray500 focus:outline-none text-4xl sm:text-2xl"
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
            <GhostButton
              onClick={clearCart}
              extraClass="hidden sm:inline-block"
              value="Limpar Carrinho"
              size="lg"
            />
            {/* <TextButton value="Clear Cart" /> */}
          </div>
        </div>
        <div className="h-full w-full lg:w-4/12 mt-10 lg:mt-0">
          {/* Cart Totals */}
          <div className="border border-gray500 divide-y-2 divide-gray200 p-6">
            <h2 className="text-xl mb-3">Valor Total</h2>
            <div className="flex justify-between py-2">
              <span>SUBTOTAL</span>
              <span>R$ {subtotal}</span>
            </div>
            <div className="py-3">
              <span>Entrega</span>
              <div className="mt-3 space-y-2">
                <div className="flex justify-between">
                  <div>
                    <input
                      type="radio"
                      name="deli"
                      value="Yangon"
                      id="ygn"
                      checked={deli === "Yangon"}
                      onChange={() => setDeli("Yangon")}
                      // defaultChecked
                    />{" "}
                    <label htmlFor="ygn" className="cursor-pointer">
                      Retirar na loja
                    </label>
                  </div>
                  <span>R$ 0,00</span>
                </div>
                <div className="flex justify-between">
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
              <span>R$ {subtotal + (deli === "Yangon" ? 2.0 : 7.0)}</span>
            </div>
            <Button value="Finalizar Compra" size="xl" extraClass="w-full" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
