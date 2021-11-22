import React, { useEffect, useState } from "react"
import { TopNav } from "../components/TopNav"
import { Header } from "../components/Header"
import { DashboardSideBar } from "../components/DashboardSideBar"
import { Footer } from "../components/Footer"
import BottomFooter from "../components/BottomFooter"
import { MdDeleteOutline, MdOutlineModeEditOutline, } from "react-icons/md";

import styles from "../styles/Products.module.scss"

export default function Dashboard() {
    const [isCollapsed, setIsCollapsed] = useState(true)

    return (
        <div>
            <TopNav />
            <Header />
            <div className={styles.content}>
                <DashboardSideBar isCollapsed={isCollapsed} />
                <div className={styles.dashboard}>
                    <h1 className={styles.head}>Produtos Cadastrados</h1>
                    <button
                        type="submit"
                        className={styles.registerProduct}>
                        Cadastrar Novo Produto
                    </button>

                    <table
                        className={styles.fetch}>
                        <thead className={styles.theads}>
                            <tr>
                                <th>
                                    Nome
                                </th>
                                <th>
                                    Valor
                                </th>
                                <th>
                                    Descrição
                                </th>
                                <th>
                                    Deletar
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>COMPUTADOR</td>
                                <td>R$10,00</td>
                                <td>Tela, Memória, Gabinete</td>
                                <td>
                                    <div className={styles.options}>
                                        <button
                                            type="submit" ><MdOutlineModeEditOutline />
                                        </button>
                                        <button
                                            type="submit"
                                            value="Deletar Produto"
                                        ><MdDeleteOutline /></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
            <BottomFooter />
        </div >
    )
}