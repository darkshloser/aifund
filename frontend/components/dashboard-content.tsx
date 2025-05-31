"use client";

import { useState } from "react";
// import { MainChart } from "./main-chart";
// import { StockSidebar, type Asset } from "./stock-sidebar";
// import { StockInfo } from "./stock-info";
// import { MonitoredAssets } from "./monitored-assets";
// import { AssetDetails } from "./asset-details";

export function DashboardContent() {
    return (
        <div className="d-flex min-vh-100 bg-custom-dark text-white">
            <div
                style={{ width: "320px", background: "blue" }}
                className="d-flex flex-column"
            >
                {/* <StockSidebar
                    onAssetSelect={setSelectedAsset}
                    selectedAsset={selectedAsset}
                    monitoredAssets={monitoredAssets}
                    onMonitorAsset={handleMonitorAsset}
                /> */}
                {/* <StockInfo selectedAsset={selectedAsset} /> */}
            </div>
            <div
                className="flex-grow-1"
                style={{ overflowY: "auto", background: "yellow" }}
            >
                <main className="p-4">
                    <div className="mb-4">
                        <div className="card card-dark">
                            {/* <MainChart selectedAsset={selectedAsset} /> */}
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
