import React, { useEffect, useState } from "react"
import { TopNav } from "../components/TopNav"
import { Header } from "../components/Header"
import { DashboardSideBar } from "../components/DashboardSideBar"
import { Footer } from "../components/Footer"
import BottomFooter from "../components/BottomFooter"
import { NewUserFom } from "../components/NewUserFom"
import { EditUserFom } from "../components/EditUserForm"
import { api } from "../../services/api"
import { MdDeleteOutline, MdOutlineModeEditOutline, } from "react-icons/md";

import styles from "../styles/Dashboard.module.scss"

export default function Dashboard() {
    const [isCollapsed, setIsCollapsed] = useState(true)
    const [isOpenEditModal, setIsOpenEditModal] = useState(false);
    const [isOpenNewUserModal, setIsOpenNewUserModal] = useState(false);
    const [users, setUsers] = useState([]);
    const [reloadData, setReloadData] = useState(0);

    useEffect(() => {
        api.get('/users')
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => alert("Usuários não encontrados"));
    }, [reloadData]);

    const handleDeleteUser = async (userId: number) => {
        await api.delete(`/users/${userId}`)
    }

    return (
        <div>
            <TopNav />
            <Header />
            <div className={styles.content}>
                <DashboardSideBar isCollapsed={isCollapsed} />
                <div className={styles.dashboard}>
                    <h1 className={styles.head}>Usuários Cadastrados</h1>
                    <button
                        className={styles.registerUser}
                        onClick={() => setIsOpenNewUserModal(true)} >
                        Cadastrar Usuário
                    </button>
                    <NewUserFom isOpen={isOpenNewUserModal} setIsOpen={setIsOpenNewUserModal} handleReloadData={setReloadData} />
                    <table
                        className={styles.fetch}>
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
                                            <td>
                                                <div className={styles.options}>
                                                    <button
                                                        onClick={() => setIsOpenEditModal(true)}
                                                    ><MdOutlineModeEditOutline />
                                                    </button>
                                                    <EditUserFom
                                                        isOpen={isOpenEditModal}
                                                        setIsOpen={setIsOpenEditModal}
                                                        setReloadData={setReloadData} 
                                                        selectedUser={user} />
                                                    <button
                                                        value="Deletar Usuário"
                                                        onClick={() => {
                                                            handleDeleteUser(user.id)
                                                            setReloadData(Math.random())
                                                        }}
                                                    ><MdDeleteOutline /></button>
                                                </div>
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
        </div >
    )
}