import React from "react";
import { randomNumber, dateEven } from "./utils";

export default function FuncComponent() {
    return (
        <div>
            <p>{dateEven() && "Datum je Paran"}</p>
            <p>Datum nije paran! {!dateEven() && (1, 100)}</p>
        </div>
    );
}
