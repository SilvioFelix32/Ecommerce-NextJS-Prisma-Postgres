import React from 'react';
import { BsCartX, BsFillQuestionCircleFill, BsFillSignpost2Fill, BsGearFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { RiContactsLine } from 'react-icons/ri';
import { ImWhatsapp, ImPriceTag, ImFacebook, ImMail4 } from "react-icons/im";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter } from 'react-pro-sidebar';

import styles from "./styles.module.scss"
interface SideBarProps {
    isCollapsed: boolean
}


export default function SideBar({ isCollapsed }: SideBarProps) {
    return (
        <ProSidebar
            className={styles.proSide}
            collapsed={isCollapsed}
        >
            <Menu iconShape="square">
                <MenuItem icon={<BsCartX />}>
                    <a
                        href="/shopping-cart">
                        Carrinho de Compras
                    </a>
                </MenuItem>
                <MenuItem icon={<ImPriceTag />}>Oferta do dia</MenuItem>
                <MenuItem icon={<FaHeart />}>
                    <a
                        href="/wishlist">
                        Favoritos
                    </a>
                </MenuItem>
                <SubMenu title="Contate-nos" icon={<RiContactsLine />}>
                    <MenuItem icon={<ImWhatsapp />}>Whatsapp</MenuItem>
                    <MenuItem icon={<ImFacebook />}>Facebook</MenuItem>
                    <MenuItem icon={<ImMail4 />}>Email.com</MenuItem>
                </SubMenu>
                <MenuItem icon={<BsFillQuestionCircleFill />}>Opção</MenuItem>
                <MenuItem icon={<BsFillSignpost2Fill />}>Ajuda?</MenuItem>
                <MenuItem icon={<BsGearFill />}>
                    <a
                        href="/dashboard">
                        Administração
                    </a>
                </MenuItem>

                <SidebarFooter>
                    <MenuItem icon={<FiLogIn />}><a
                        href="/teste">
                        Entrar
                    </a></MenuItem>
                </SidebarFooter>
            </Menu>
        </ProSidebar>
    );
}
