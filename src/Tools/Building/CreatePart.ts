/* eslint-disable roblox-ts/lua-truthiness */
/* --------------------------------- Imports -------------------------------- */
import { UserInputService, Workspace } from "@rbxts/services";

/* ------------------------------- References ------------------------------- */
const RayParams = new RaycastParams();
RayParams.IgnoreWater = false;
RayParams.FilterType = Enum.RaycastFilterType.Exclude;

/* --------------------------------- Export --------------------------------- */
export = {
	Name: "CreatePart",
	Description: "Creates a new part in the current building.",
	Icon: "rbxassetid://1557174355",
	Predicate: (context: Instance) => context.IsA("Model") || context.IsA("Folder"),
	Execute: (context: Instance) => {
		const Camera = Workspace.CurrentCamera;
		const MouseLocation: Vector2 = UserInputService.GetMouseLocation();
		const ScreenRay = Camera?.ScreenPointToRay(MouseLocation.X, MouseLocation.Y, 1);

		if (ScreenRay === undefined) {
			return "Error: Could not get screen ray.";
		}

		const MouseRay = Workspace.Raycast(ScreenRay.Origin, ScreenRay.Direction.mul(1000), RayParams);

		const Part = new Instance("Part");
		Part.Name = "Part";
		Part.Size = new Vector3(4, 1, 4);
		Part.Position = MouseRay ? MouseRay.Position : ScreenRay.Origin.add(ScreenRay.Direction.mul(10));
		Part.Parent = context;
	},
};
