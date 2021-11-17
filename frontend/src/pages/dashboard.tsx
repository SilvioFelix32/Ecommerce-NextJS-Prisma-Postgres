import React, { useEffect, useState } from "react"
import { TopNav } from "../components/TopNav"
import { Header } from "../components/Header"
import { DashboardSideBar } from "../components/DashboardSideBar"
import { Footer } from "../components/Footer"
import BottomFooter from "../components/BottomFooter"
import { api } from "../../services/api"
import { MdDeleteOutline, MdOutlineModeEditOutline, } from "react-icons/md";

import styles from "../styles/Dashboard.module.scss"

export default function Dashboard() {
    const [isCollapsed, setIsCollapsed] = useState(true)
    const [users, setUsers] = useState([]);
    const [deleteUser, setDeleteUser] = useState([]);

    useEffect(() => {
        api.get('/users')
            .then((res) => {
                setUsers(res.data);
                console.log(res.data);
            })
            .catch((err) => alert("Usuários não encontrados"));
    }, []);

    useEffect(() => {
        api.delete('/deleteUser/:id')
            .then((res) => {
                setDeleteUser(res.data);
                console.log(res.data);
            })
            .catch((err) => alert("Usuários apagado"));
    }, []);

    return (
        <div>
            <TopNav />
            <Header />
            <div className={styles.content}>
                <DashboardSideBar isCollapsed={isCollapsed} />
                <div className={styles.dashboard}>
                    <table
                        className={styles.fetch}>
                        <h1>Usuários Cadastrados</h1>
                        <thead className={styles.theads}>
                            <tr>
                                <th>
                                    Email
                                </th>
                                <th>
                                    Senha
                                </th>
                                <th>
                                    Regra
                                </th>
                                <th>
                                    Deletar
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.length === 0 ? (
                                <tr>
                                    <td>Nenhum Usuário encontrado!</td>
                                </tr>
                            ) : (
                                users.map((user) => {
                                    return (
                                        <tr key={user.id}>
                                            <td className={styles.uemail}>
                                                {user.email}
                                            </td>
                                            <td>
                                                {user.password}
                                            </td>
                                            <td>
                                                {user.role}
                                            </td>
                                            {/*     <td>
                                                <button
                                                    value="Editar Usuário"
                                                ><MdOutlineModeEditOutline /></button>
                                            </td>  */}
                                            <td >
                                                <button
                                                    key={user.id}
                                                    value="Deletar Usuário"
                                                ><MdDeleteOutline />{user.email}</button>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
            <BottomFooter />
        </div>
    )
}