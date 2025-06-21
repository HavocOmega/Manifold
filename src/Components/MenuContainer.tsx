/* --------------------------------- Imports -------------------------------- */
import React from "@rbxts/react";

/* --------------------------------- Exports -------------------------------- */
export function MenuContainer(): React.Element {
	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			key={"MenuContainer"}
			Position={UDim2.fromScale(0.5, 0.5)}
			Size={UDim2.fromScale(1, 1)}
		>
			<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={2.6252} />
		</frame>
	);
}
