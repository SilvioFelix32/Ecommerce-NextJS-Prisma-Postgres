import React from 'react';
import { BsCartX } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { FiHelpCircle, FiLogIn } from 'react-icons/fi';
import { RiContactsLine } from 'react-icons/ri';
import { ImWhatsapp, ImPriceTag, ImFacebook, ImMail4 } from "react-icons/im";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter } from 'react-pro-sidebar';
interface SideBarProps {
    isCollapsed: boolean
}


export default function SideBar({ isCollapsed }: SideBarProps) {
    return (
        <ProSidebar
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
                <MenuItem icon={<FiHelpCircle />}>Ajuda?</MenuItem>

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
