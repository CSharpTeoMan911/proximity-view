import { useState, useEffect } from "react";
import { setAlertsPaneGeometry } from "../animations.js";
import { initUpdateReader } from "../functionality/Firebase.js";
import { Alert } from "../components/AlertComponent.jsx"

export function MainPanel({ children }) {
    const [alerts, setAlerts] = useState({})

    useEffect(() => {
        setAlertsPaneGeometry();
        initUpdateReader(setAlerts);
    });



    return (
        <div style={{ width: "100%", height: "100%", }}>
            {children}
            <div id="alerts-panel" style={{ backgroundColor: "rgba(0, 153, 255, 0.4)", width: "100%", overflow: "auto" }} className="scrollable-blue">
                {
                    alerts !== null && alerts !== undefined ? (
                        alerts.Alerts !== null && alerts.Alerts !== undefined ? (
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                {typeof (alerts.Alerts) === typeof ({}) ?
                                    Object.keys(alerts.Alerts).map((elem) => {
                                        return <Alert key={elem} path={`/Alerts/${elem}`} date={elem} alerts={alerts.Alerts[elem]} />;
                                    })
                                    : (
                                        <div></div>
                                    )}
                            </div>
                        ) : (
                            <div></div>
                        )
                    ) : (
                        <div></div>
                    )
                }
            </div>
        </div>
    );
}