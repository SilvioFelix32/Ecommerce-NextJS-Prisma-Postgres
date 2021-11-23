import { useRouter } from 'next/router';
import React from 'react';
import {
    BsHouse,
    BsFillPersonLinesFill,
    BsKey,
    BsPeople,
    BsReceipt,
    BsShop
} from 'react-icons/bs';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';

interface SideBarProps {
    isCollapsed: boolean
}

export function DashboardSideBar({ isCollapsed }: SideBarProps) {
    const router = useRouter()

    return (
        <ProSidebar
            collapsed={isCollapsed}
        >
            <Menu iconShape="square">
                <MenuItem icon={<BsHouse />}>
                    <a
                        href="/">
                        Inicio
                    </a>
                </MenuItem>
                <MenuItem icon={<BsFillPersonLinesFill />}>
                    <a
                        onClick={() => {
                            router.push('/dashboard')
                        }}>
                        Usuários
                    </a>
                </MenuItem>
                <MenuItem icon={<BsShop />}>
                    <a
                        onClick={() => {
                            router.push('/products')
                        }}>
                        Produtos
                    </a>
                </MenuItem>
                <MenuItem icon={<BsReceipt />}>
                    Faturamento
                </MenuItem>
                <MenuItem icon={<BsPeople />}>
                    Privacidade
                </MenuItem>
            </Menu>
        </ProSidebar>
    );
}