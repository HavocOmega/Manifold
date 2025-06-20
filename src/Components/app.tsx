/* --------------------------------- Imports -------------------------------- */
import React, { StrictMode } from "@rbxts/react";
import { createPortal, createRoot } from "@rbxts/react-roblox";
import { CoreGui } from "@rbxts/services";

/* ------------------------------- References ------------------------------- */
const Root = createRoot(new Instance("ScreenGui"));

/* ----------------------------- Initialization ----------------------------- */
export function render(children: React.ReactNode) {
	Root.render(<StrictMode>{createPortal(children, CoreGui)}</StrictMode>);
}
