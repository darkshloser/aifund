"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function SiteHeader() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
        router.push("/");
    };

    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-custom fixed-top">
            <div className="container">
                <Link href="/" className="navbar-brand fw-bold fs-3 text-white">
                    AIfund
                </Link>
                <nav className="navbar-nav ms-auto d-flex flex-row gap-3">
                    {isLoggedIn ? (
                        <>
                            <Link
                                href="/dashboard"
                                className="btn btn-ghost text-white text-decoration-none"
                            >
                                Dashboard
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="btn btn-ghost text-white"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="btn btn-ghost text-white text-decoration-none"
                            >
                                Login
                            </Link>
                            <Link
                                href="/register"
                                className="btn btn-custom-blue text-white text-decoration-none"
                            >
                                Get Started
                            </Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}
