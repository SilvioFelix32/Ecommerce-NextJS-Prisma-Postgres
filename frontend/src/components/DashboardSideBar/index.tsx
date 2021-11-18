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
                    Usuários
                </MenuItem>
                <MenuItem icon={<BsKey />}>
                    Produtos
                </MenuItem>
                <MenuItem icon={<BsPeople />}>
                    Privacidade
                </MenuItem>
                <MenuItem icon={<BsShop />}>
                    Vendas
                </MenuItem>
                <MenuItem icon={<BsReceipt />}>
                    Faturamento
                </MenuItem>
            </Menu>
        </ProSidebar>
    );
}