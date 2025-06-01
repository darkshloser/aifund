"use client";

import { useState } from "react";
import { MainChart } from "./main-chart";
import { StockSidebar } from "./stock-sidebar";
import type { Asset } from "@/types/assets";
// import { StockInfo } from "./stock-info";
// import { MonitoredAssets } from "./monitored-assets";
// import { AssetDetails } from "./asset-details";

export function DashboardContent() {
    const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
    const [monitoredAssets, setMonitoredAssets] = useState<Asset[]>([]);
    const [selectedMonitoredAsset, setSelectedMonitoredAsset] =
        useState<Asset | null>(null);

    const handleMonitorAsset = (asset: Asset) => {
        setMonitoredAssets((prev) => {
            const isAlreadyMonitored = prev.some(
                (a) => a.symbol === asset.symbol
            );
            if (isAlreadyMonitored) {
                return prev.filter((a) => a.symbol !== asset.symbol);
            } else {
                return [...prev, asset];
            }
        });
    };

    const handleRemoveMonitoredAsset = (symbol: string) => {
        setMonitoredAssets((prev) => prev.filter((a) => a.symbol !== symbol));
        if (selectedMonitoredAsset?.symbol === symbol) {
            setSelectedMonitoredAsset(null);
        }
    };

    const handleSelectMonitoredAsset = (asset: Asset) => {
        setSelectedMonitoredAsset(asset);
        setSelectedAsset(asset);
    };

    return (
        <div className="d-flex min-vh-100 bg-custom-dark text-white">
            <div
                style={{ width: "320px", background: "blue" }}
                className="d-flex flex-column"
            >
                <StockSidebar
                    onAssetSelect={setSelectedAsset}
                    selectedAsset={selectedAsset}
                    monitoredAssets={monitoredAssets}
                    onMonitorAsset={handleMonitorAsset}
                />
                {/* <StockInfo selectedAsset={selectedAsset} /> */}
            </div>
            <div
                className="flex-grow-1"
                style={{ overflowY: "auto", background: "yellow" }}
            >
                <main className="p-4">
                    <div className="mb-4">
                        <div className="card card-dark">
                            <MainChart selectedAsset={selectedAsset} />
                        </div>
                    </div>
                    <div className="mb-4">
                        {/* <MonitoredAssets
                            assets={monitoredAssets}
                            onRemoveAsset={handleRemoveMonitoredAsset}
                            onSelectAsset={handleSelectMonitoredAsset}
                            selectedAsset={selectedMonitoredAsset}
                        /> */}
                    </div>
                </main>
            </div>
        </div>
    );
}
