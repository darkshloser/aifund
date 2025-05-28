import { SiteHeader } from "@/components/site-header";
import { FiArrowRight, FiBarChart2, FiCpu, FiTrendingUp } from "react-icons/fi";
import Link from "next/link";

export default function Home() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <SiteHeader />
            <main className="flex-grow-1 main-content">
                <section
                    className="py-5"
                    style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
                >
                    <div className="container text-center">
                        <h1 className="display-1 fw-bold text-white mb-4">
                            AI-Powered Trading
                            <br />
                            Market Predictions
                        </h1>
                        <p
                            className="lead text-custom-muted mb-4"
                            style={{ maxWidth: "700px", margin: "0 auto" }}
                        >
                            Advanced algorithms predict market trends with
                            unprecedented accuracy. Get real-time insights for
                            smarter trading decisions.
                        </p>
                        <Link
                            href="/register"
                            className="btn btn-custom-blue btn-lg d-inline-flex align-items-center text-decoration-none"
                        >
                            Start Trading
                            <FiArrowRight className="ms-2" size={16} />
                        </Link>
                    </div>
                </section>

                <section className="py-5">
                    <div className="container">
                        <div className="row g-4 justify-content-center">
                            <div className="col-md-4">
                                <div className="card card-dark h-100">
                                    <div
                                        className="card-body d-flex flex-column justify-content-between"
                                        style={{ height: "180px" }}
                                    >
                                        <FiCpu
                                            className="text-primary mb-3"
                                            size={48}
                                        />
                                        <div>
                                            <h3 className="card-title text-white">
                                                AI Analysis
                                            </h3>
                                            <p className="card-text text-custom-muted">
                                                Advanced algorithms analyze
                                                market patterns
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-dark h-100">
                                    <div
                                        className="card-body d-flex flex-column justify-content-between"
                                        style={{ height: "180px" }}
                                    >
                                        <FiTrendingUp
                                            className="text-primary mb-3"
                                            size={48}
                                        />
                                        <div>
                                            <h3 className="card-title text-white">
                                                Market Predictions
                                            </h3>
                                            <p className="card-text text-custom-muted">
                                                Accurate forecasts for market
                                                movements
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-dark h-100">
                                    <div
                                        className="card-body d-flex flex-column justify-content-between"
                                        style={{ height: "180px" }}
                                    >
                                        <FiBarChart2
                                            className="text-primary mb-3"
                                            size={48}
                                        />
                                        <div>
                                            <h3 className="card-title text-white">
                                                Real-time Analytics
                                            </h3>
                                            <p className="card-text text-custom-muted">
                                                Live data and performance
                                                tracking
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-5 border-top border-custom bg-custom-dark">
                    <div className="container text-center">
                        <h2 className="display-4 fw-bold text-white mb-4">
                            Ready to start trading?
                        </h2>
                        <p className="lead text-custom-muted mb-4">
                            Join thousands of traders using AI-powered insights.
                        </p>
                        <Link
                            href="/register"
                            className="btn btn-custom-blue btn-lg text-decoration-none"
                        >
                            Get Started
                        </Link>
                    </div>
                </section>
            </main>

            <footer className="border-top border-custom bg-dark py-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <p className="text-custom-muted mb-0">
                                Built with AI technology. Contact us: +359 xxx
                                xxx xxx
                            </p>
                        </div>
                        <div className="col-md-4 text-end">
                            <a
                                href="mailto:contact@aifund.io"
                                className="text-custom-muted text-decoration-none"
                            >
                                contact@aifund.io
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
