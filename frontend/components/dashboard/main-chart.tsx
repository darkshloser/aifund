import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TradingViewWidget from "./TradingViewWidget";
import type { Asset } from "@/types/assets";

export function MainChart({ selectedAsset }: { selectedAsset: Asset | null }) {
    return (
        <Card className="border-0">
            <CardHeader>
                <CardTitle className="text-white">
                    {selectedAsset
                        ? `${selectedAsset.name} (${selectedAsset.symbol})`
                        : "Trading Chart"}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <TradingViewWidget
                    symbol={
                        selectedAsset ? selectedAsset.symbol : "NASDAQ:AAPL"
                    }
                />
            </CardContent>
        </Card>
    );
}
