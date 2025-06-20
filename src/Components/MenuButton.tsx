/* eslint-disable prettier/prettier */
/* --------------------------------- Imports -------------------------------- */
import React from "@rbxts/react";

/* -------------------------------- Interface ------------------------------- */
interface MenuButtonProps {
	Name: string;
	Icon: string;
	Order: number;
	OnClick: () => string | void;
}

/* --------------------------------- Export --------------------------------- */
export function MenuButton(Props: MenuButtonProps): React.Element {
	return (
		<frame
            Active={true}
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundColor3={Color3.fromRGB(40, 40, 40)}
			BackgroundTransparency={0.25}
			key={"MenuButton"}
			Position={UDim2.fromScale(0.5, 0.491047)}
			Size={UDim2.fromScale(0.1, 0.0440771)}
            Event = {{
                InputBegan: (_, InputObject: InputObject) => {
                    if (InputObject.UserInputType === Enum.UserInputType.MouseButton1) {
                        Props.OnClick();
                    }
                }
            }}
		>
			<uicorner key={"UICorner"} CornerRadius={new UDim(0.25, 0)} />

			<uipadding
				key={"UIPadding"}
				PaddingBottom={new UDim(0.145, 0)}
				PaddingLeft={new UDim(0.05, 0)}
				PaddingRight={new UDim(0.05, 0)}
				PaddingTop={new UDim(0.145, 0)}
			/>

			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				FontFace={
					new Font(
						"rbxasset://fonts/families/SourceSansPro.json",
						Enum.FontWeight.Bold,
						Enum.FontStyle.Normal,
					)
				}
				key={"ToolName"}
				Position={UDim2.fromScale(0.5, 0.5)}
				Size={UDim2.fromScale(0.65, 0.8)}
				Text={Props.Name}
				TextColor3={Color3.fromRGB(204, 204, 204)}
				TextScaled={true}
				TextXAlignment={Enum.TextXAlignment.Left}
			/>

			<imagelabel
				Active={true}
				AnchorPoint={new Vector2(0, 0.5)}
				BackgroundTransparency={1}
				Image={Props.Icon}
				key={"Icon"}
				Position={UDim2.fromScale(-1.43027e-7, 0.5)}
				Selectable={true}
				Size={UDim2.fromScale(0.150314, 1)}
			/>

			<textlabel
				AnchorPoint={new Vector2(1, 0.5)}
				BackgroundTransparency={1}
				FontFace={
					new Font(
						"rbxasset://fonts/families/SourceSansPro.json",
						Enum.FontWeight.Bold,
						Enum.FontStyle.Normal,
					)
				}
				key={"Order"}
				Position={UDim2.fromScale(1, 0.5)}
				RichText={true}
				Size={UDim2.fromScale(0.15, 0.8)}
				Text = {`<u>${Props.Order}</u>`}
				TextColor3={Color3.fromRGB(204, 204, 204)}
				TextScaled={true}
				TextXAlignment={Enum.TextXAlignment.Right}
			/>

			<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={5.26562} />
            
		</frame>
	);
}
