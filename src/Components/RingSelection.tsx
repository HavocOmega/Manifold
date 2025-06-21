/* --------------------------------- Imports -------------------------------- */
import React from "@rbxts/react";

/* --------------------------------- Export --------------------------------- */
export function RingSelection(): React.Element {
	return (
		<imagelabel
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			Image={"http://www.roblox.com/asset/?id=429500449"}
			ImageColor3={Color3.fromRGB(49, 49, 49)}
			ImageTransparency={0.25}
			key={"RingSelection"}
			Position={UDim2.fromScale(0.5, 0.5)}
			Size={UDim2.fromScale(0.0298329, 0.0797448)}
		>
			<imagelabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Image={"http://www.roblox.com/asset/?id=429500449"}
				key={"WhiteRing"}
				Position={UDim2.fromScale(0.5, 0.5)}
				Size={UDim2.fromScale(1, 1)}
			>
				<uigradient
					key={"UIGradient"}
					Transparency={
						new NumberSequence([
							new NumberSequenceKeypoint(0, 0),
							new NumberSequenceKeypoint(0.195178, 0),
							new NumberSequenceKeypoint(0.229621, 1),
							new NumberSequenceKeypoint(1, 1),
						])
					}
				/>
			</imagelabel>

			<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={1.00477} />
		</imagelabel>
	);
}
