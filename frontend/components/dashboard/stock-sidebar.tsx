"use client";

import { useState, useEffect } from "react";
import { useAssetCategories } from "@/hooks/useAssetCategories";
import { FiSearch, FiPlus, FiCheck } from "react-icons/fi";

import type { Asset } from "@/types/assets";

function AssetItem({
    asset,
    onSelect,
    isSelected,
    onMonitor,
    isMonitored,
}: {
    asset: Asset;
    onSelect: (asset: Asset) => void;
    isSelected: boolean;
    onMonitor: (asset: Asset) => void;
    isMonitored: boolean;
}) {
    const isPositive = asset.change >= 0;

    return (
        <div
            className={`d-flex align-items-center justify-content-between p-3 rounded asset-row ${
                isSelected ? "selected" : ""
            }`}
            onClick={() => onSelect(asset)}
            style={{ cursor: "pointer" }}
        >
            <div className="d-flex align-items-center">
                <img
                    src={asset.logo || "/placeholder.svg"}
                    alt={asset.name}
                    className="rounded-circle me-3"
                    style={{ width: "32px", height: "32px" }}
                />
                <div>
                    <div className="fw-medium text-white">{asset.name}</div>
                    <div className="small text-custom-muted">
                        {asset.symbol}
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center">
                <div className="text-end me-2">
                    <div className="fw-medium text-white">
                        $
                        {asset.price.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })}
                    </div>
                    <div
                        className={`small ${
                            isPositive ? "text-success" : "text-danger"
                        }`}
                    >
                        {isPositive ? "+" : ""}
                        {asset.change.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })}{" "}
                        ({isPositive ? "+" : ""}
                        {asset.changePercent.toFixed(2)}%)
                    </div>
                </div>
                <button
                    className="btn btn-sm btn-ghost"
                    onClick={(e) => {
                        e.stopPropagation();
                        onMonitor(asset);
                    }}
                >
                    {isMonitored ? <FiCheck size={16} /> : <FiPlus size={16} />}
                </button>
            </div>
        </div>
    );
}

export function StockSidebar({
    onAssetSelect,
    selectedAsset,
    monitoredAssets,
    onMonitorAsset,
}: {
    onAssetSelect: (asset: Asset) => void;
    selectedAsset: Asset | null;
    monitoredAssets: Asset[];
    onMonitorAsset: (asset: Asset) => void;
}) {
    const categories = useAssetCategories();
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("Stocks");

    useEffect(() => {
        if (!selectedAsset) {
            const defaultAsset = categories.Stocks.find(
                (asset) => asset.symbol === "NASDAQ:AAPL"
            );
            if (defaultAsset) {
                onAssetSelect(defaultAsset);
            }
        }
    }, [selectedAsset, onAssetSelect]);

    const filterAssets = (assets: Asset[]) => {
        return assets.filter(
            (asset) =>
                asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                asset.symbol.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    return (
        <div className="bg-custom-sidebar border-end border-custom d-flex flex-column h-100">
            <div className="p-3">
                <div className="position-relative">
                    <FiSearch
                        className="position-absolute top-50 start-0 translate-middle-y ms-3 text-custom-muted"
                        size={16}
                    />
                    <input
                        type="search"
                        placeholder="Search..."
                        className="form-control form-control-dark ps-5"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex-grow-1">
                <ul className="nav nav-pills nav-fill mx-3 mb-3">
                    {Object.keys(categories).map((category) => (
                        <li key={category} className="nav-item">
                            <button
                                className={`nav-link ${
                                    activeTab === category ? "active" : ""
                                }`}
                                onClick={() => setActiveTab(category)}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>

                <div
                    className="px-3"
                    style={{ height: "calc(100vh - 200px)", overflowY: "auto" }}
                >
                    {Object.entries(categories).map(
                        ([category, assets]) =>
                            activeTab === category && (
                                <div key={category}>
                                    {filterAssets(assets).map((asset) => (
                                        <AssetItem
                                            key={asset.symbol}
                                            asset={asset}
                                            onSelect={onAssetSelect}
                                            isSelected={
                                                selectedAsset?.symbol ===
                                                asset.symbol
                                            }
                                            onMonitor={onMonitorAsset}
                                            isMonitored={monitoredAssets.some(
                                                (a) => a.symbol === asset.symbol
                                            )}
                                        />
                                    ))}
                                </div>
                            )
                    )}
                </div>
            </div>
        </div>
    );
}
