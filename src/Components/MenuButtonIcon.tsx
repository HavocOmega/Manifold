/* --------------------------------- Imports -------------------------------- */
import React from "@rbxts/react";

/* -------------------------------- Interface ------------------------------- */
interface ComponentProps {
	Container: Frame | ImageLabel | TextLabel;
	Icon: string;
}

/* -------------------------------- Component ------------------------------- */
function getYSize(Container: Frame | ImageLabel | TextLabel): number {
	const hasPadding = Container.FindFirstChildOfClass("UIPadding") !== undefined;
	const ySize = Container.AbsoluteSize.Y;

	if (hasPadding) {
		const padding = Container.FindFirstChildOfClass("UIPadding") as UIPadding;
		const offsetPadding = padding.PaddingTop.Offset + padding.PaddingBottom.Offset;
		const scalePadding = padding.PaddingTop.Scale + padding.PaddingBottom.Scale * ySize;

		return ySize - offsetPadding - scalePadding;
	}

	return ySize;
}

export function MenuButtonIcon(Props: ComponentProps): React.Element {
	const ySize = getYSize(Props.Container); // TODO: Write a better way to calculate X size based on container padding and size for both X and Y

	return (
		<imagelabel
			AnchorPoint={new Vector2(0, 0.5)}
			BackgroundTransparency={1}
			Image={Props.Icon}
			key={"MenuButtonIcon"}
			Position={UDim2.fromScale(0, 0.5)}
			Size={new UDim2(0, ySize, 1, 0)} // TODO: Calulate size in scale of container than offest with UIPadding considerations
		/>
	);
}
