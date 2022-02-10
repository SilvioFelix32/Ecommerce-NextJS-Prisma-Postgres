import React, { useEffect, useState } from "react";
import { api } from "../../../services/api"
import Image from 'next/image';

import styles from './styles.module.scss'

export function CardProducts() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.get('/users')
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => alert("Usuários não encontrados"));
    }, []);

    return (
        <div className={styles.Content}>
            {users.length === 0 ? (
                <tr>
                    <td>Nenhum Produto encontrado!</td>
                </tr>
            ) : (
                users.map((user) => {
                    return (
                        <tr key={user.id}>
                            <td>
                                {user.email}
                            </td>
                            <td>
                                {user.password}
                            </td>
                            <td>
                                {user.role}
                            </td>
                        </tr>
                    );
                })
            )}
        </div>
    )
}