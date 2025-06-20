/* --------------------------------- Imports -------------------------------- */
import React, { StrictMode } from "@rbxts/react";

/* -------------------------------- Interface ------------------------------- */
interface MenuButtonProps {
	Name: string;
	Icon: string;
	Order: number;
	OnClick: () => string | void;
}

/* --------------------------------- Export --------------------------------- */
