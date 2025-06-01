"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { DashboardPageLayout } from "@/components/dashboard/dashboard-page-layout";
import { DashboardContent } from "@/components/dashboard/dashboard-content";

export default function DashboardPage() {
    const router = useRouter();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (!isLoggedIn) {
            router.push("/login");
        }
    }, [router]);

    return (
        <DashboardPageLayout>
            <DashboardContent />
        </DashboardPageLayout>
    );
}
