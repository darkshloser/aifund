import React, { useEffect, useRef, memo } from "react";

interface TradingViewWidgetProps {
    symbol: string;
}

function TradingViewWidget({ symbol }: TradingViewWidgetProps) {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (container.current) {
            container.current.innerHTML = "";
            const script = document.createElement("script");
            script.src =
                "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
        {
          "width": "100%",
          "height": "610",
          "symbol": "${symbol}",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "hide_top_toolbar": true,
          "hide_legend": true,
          "range": "YTD",
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
            container.current.appendChild(script);
        }
    }, [symbol]);

    return (
        <div className="tradingview-widget-container" ref={container}>
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright">
                <a
                    href="https://www.tradingview.com/"
                    rel="noopener nofollow"
                    target="_blank"
                >
                    <span className="blue-text">
                        Track all markets on TradingView
                    </span>
                </a>
            </div>
        </div>
    );
}

export default memo(TradingViewWidget);
