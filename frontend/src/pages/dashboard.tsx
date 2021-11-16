import React, { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { TopNav } from "../components/TopNav"
import { Header } from "../components/Header"
import { DashboardSideBar } from "../components/DashboardSideBar"
import { Footer } from "../components/Footer"
import BottomFooter from "../components/BottomFooter"

import styles from "../styles/Dashboard.module.scss"

export default function Dashboard() {
    const { user } = useContext(AuthContext)
    const [isCollapsed, setIsCollapsed] = useState(true)

    return (
        <div>
            <TopNav />
            <Header />
            <div className={styles.content}>
                <DashboardSideBar isCollapsed={isCollapsed} />
                <div className={styles.dashboard}>
                    <h1>Dashboard: {user?.email}</h1>
                </div>
            </div>
            <Footer />
            <BottomFooter />
        </div>
    )
}