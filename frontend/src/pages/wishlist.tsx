import React, { useContext, useState } from "react";

import { Header } from "../components/Header";
import { TopNav } from "../components/TopNav/";
import { Footer } from "../components/Footer";

import BottomFooter from "../components/BottomFooter";
import Link from "next/link";
import WishlistContext from "../../context/wishlist/WishlistContext";
import CartContext from "../../context/cart/CartContext";

import styles from "../styles/WishList.module.scss"
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
    <div>
      <TopNav />
      <Header />
      <div className={styles.wishlistHead}>
        <h1>
          Lista de Desejos
        </h1>
        <div>
          <Link href="/">
            <button>
              <AiOutlineArrowLeft /> Continuar Comprando
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.wishlistContext}>
        <table>
          <thead>
            <tr>
              <th>
                Imagem do Produto
              </th>
              <th>
                Preço do Produto
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
            </tr>
          </thead>
          <tbody>
            {wishlist.length === 0 ? (
              <tr>
                <td>Lista de Desejos Vazia!</td>
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
                      R$ {item.price}
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
      </div>
      <div className={styles.clearList}>
        <button
          onClick={clearWishlist}
        >Limpar Lista de Desejos</button>
      </div>
      <Footer />
      <BottomFooter />
    </div>
  );
};

export default Wishlist;
