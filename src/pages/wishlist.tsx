import React, { useContext, useState } from "react";

import { Header } from "../components/Header";
import { TopNav } from "../components/TopNav/TopNav";
import { Footer } from "../components/Footer";

import BottomFooter from "../components/BottomFooter";
import Link from "next/link";
import WishlistContext from "../../context/wishlist/WishlistContext";
import CartContext from "../../context/cart/CartContext";

import styles from "./styles/WishList.module.scss"
import { AiOutlineArrowLeft } from "react-icons/ai";

// let w = window.innerWidth;

export function Wishlist() {
  const [deli, setDeli] = useState("Piúma");
  const { cart, addOne, removeItem, deleteItem, clearCart } =
    useContext(CartContext);
  const { wishlist, addToWishlist, deleteWishlistItem, clearWishlist } =
    useContext(WishlistContext);

  let subtotal = 0;

  return (
    <div className={styles.wishlistContent}>
      <TopNav />
      <Header />
      <div>
        <h1>
          Lista de Desejos
        </h1>
        <div>
          <Link href="/">
            <a>
              <AiOutlineArrowLeft /> Continuar Comprando
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
                  Imagem do Produto
                </th>
                <th>
                  Preço do Produto
                </th>
                <th>
                  Detalhes do Produto
                </th>
                <th
                  className={`font-normal py-2 ${wishlist.length === 0 ? "text-center" : "text-right"
                    }`}
                >
                  Valor por Unidade
                </th>
                <th>
                  Adicionar
                </th>
                <th>
                  Remover
                </th>
                <th>
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              {wishlist.length === 0 ? (
                <tr>
                  <td colSpan={5}>Lista de Desejos Vazia!</td>
                </tr>
              ) : (
                wishlist.map((item) => {
                  subtotal += item.price * item.qty;
                  return (
                    <tr key={item.id}>
                      <td>
                        <img src={item.img1} />
                        <span>{item.name}</span>
                      </td>
                      <td>
                        {item.name}
                      </td>
                      <td>
                        $ {item.price}
                      </td>
                      <td>
                        <button
                          value="Adicionar ao Carrinho"
                          onClick={() => addOne(item)}
                        />
                      </td>
                      <td>
                        <button
                          value="Add"
                          onClick={() => addOne(item)}
                        />
                        <button
                          onClick={() => deleteWishlistItem(item)}
                          type="button"
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
              onClick={clearWishlist}
              value="Limpar Lista de Desejos"
            />
          </div>
        </div>
      </div>
      <Footer />
      <BottomFooter />
    </div>
  );
};

export default Wishlist;
