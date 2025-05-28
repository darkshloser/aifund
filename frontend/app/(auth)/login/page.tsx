"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SiteHeader } from "@/components/site-header";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email === "test@test.com" && password === "123456!!") {
            localStorage.setItem("isLoggedIn", "true");
            router.push("/dashboard");
        } else {
            setError("Invalid credentials");
        }
    };

    return (
        <div className="d-flex flex-column min-vh-100 bg-dark">
            <SiteHeader />
            <main className="flex-grow-1 d-flex align-items-center justify-content-center main-content">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <div className="card card-dark">
                                <div className="card-header">
                                    <h5 className="card-title mb-0 text-white text-center">
                                        Login to AIfund
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <input
                                                type="email"
                                                className="form-control form-control-dark"
                                                placeholder="Email"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                type="password"
                                                className="form-control form-control-dark"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                                required
                                            />
                                        </div>
                                        {error && (
                                            <div className="alert alert-danger">
                                                {error}
                                            </div>
                                        )}
                                        <button
                                            type="submit"
                                            className="btn btn-custom-blue w-100"
                                        >
                                            Login
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
