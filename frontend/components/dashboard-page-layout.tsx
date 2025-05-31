"use client";

import type React from "react";

import { useRouter } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";
import { useEffect } from "react";

export function DashboardPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();

    const handleNavigation = (path: string) => router.push(path);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        router.push("/login");
    };

    useEffect(() => {
        import("../lib/bootstrap-client"); // adjust path based on location
    }, []);

    return (
        <div className="min-vh-100 bg-custom-dark text-white">
            <header className="d-flex align-items-center justify-content-between border-bottom border-custom bg-custom-dark p-3 fixed-top">
                <div className="fs-2 fw-bold">AIfund</div>
                <div className="dropdown">
                    <button
                        className="btn btn-ghost d-flex align-items-center gap-2"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <img
                            src="/placeholder.svg"
                            alt="Avatar"
                            className="rounded-circle"
                            style={{ width: "32px", height: "32px" }}
                        />
                        <FiChevronDown size={16} />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                        <li>
                            <button
                                className="dropdown-item dropdown-item-dark"
                                onClick={() => handleNavigation("/dashboard")}
                            >
                                Dashboard
                            </button>
                        </li>
                        <li>
                            <button
                                className="dropdown-item dropdown-item-dark"
                                onClick={() =>
                                    handleNavigation("/dashboard/profile")
                                }
                            >
                                Profile
                            </button>
                        </li>
                        <li>
                            <button
                                className="dropdown-item dropdown-item-dark"
                                onClick={() =>
                                    handleNavigation("/dashboard/settings")
                                }
                            >
                                Settings
                            </button>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li>
                            <button
                                className="dropdown-item dropdown-item-dark"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </header>
            <main className="main-content">{children}</main>
        </div>
    );
}
