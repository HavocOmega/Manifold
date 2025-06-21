/* --------------------------------- Imports -------------------------------- */
import React from "@rbxts/react";
import { MenuButton } from "./MenuButton";

/* -------------------------------- Interface ------------------------------- */
interface MenuProps {
	Tools: {
		Name: string;
		Description: string;
		Icon: string;
		Predicate: (Context: Instance) => boolean;
		Execute: (Context: Instance) => void;
	}[];
}

/* --------------------------------- Exports -------------------------------- */
export function MenuContainer(Props: MenuProps): React.Element {
	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			key={"MenuContainer"}
			Position={UDim2.fromScale(0.5, 0.5)}
			Size={UDim2.fromScale(1, 1)}
		>
			<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={2.6252} />

			{Props.Tools.map((Tool, Index) => (
				<MenuButton
					Name={Tool.Name}
					Icon={Tool.Icon}
					Order={Index}
					OnClick={() => {
						const Context = game.GetService("Selection").Get()[0];
						if (Tool.Predicate(Context)) {
							Tool.Execute(Context);
						} else {
							warn(`Tool ${Tool.Name} cannot be executed in the current context.`);
						}
					}}
				/>
			))}
		</frame>
	);
}
