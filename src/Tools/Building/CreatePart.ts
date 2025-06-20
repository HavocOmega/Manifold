/* --------------------------------- Imports -------------------------------- */
import { UserInputService, Workspace } from "@rbxts/services";

/* -------------------------------- Constants ------------------------------- */
const ScreenRayParameters = new RaycastParams();
ScreenRayParameters.FilterDescendantsInstances = Workspace.CurrentCamera ? [Workspace.CurrentCamera] : [];
ScreenRayParameters.FilterType = Enum.RaycastFilterType.Exclude;
ScreenRayParameters.IgnoreWater = true;

/* --------------------------------- Export --------------------------------- */
export = {
    Name: "Create Part",
    Description: "Creates a new part",
    
    Predicate: (Context: Instance) => Context.IsA("Model"),
    Action: (Context: Model | undefined) => {
        let Camera = Workspace.CurrentCamera;
        let MouseScreenPosition: Vector2 = UserInputService.GetMouseLocation();

        if (!Camera) {
            warn("No camera found in the workspace.");
            return;
        }
        
        let ScreenRay = Camera.ScreenPointToRay(MouseScreenPosition.X, MouseScreenPosition.Y, 1);
        let MouseRay = Workspace.Raycast(ScreenRay.Origin, ScreenRay.Direction.mul(1000), ScreenRayParameters);

        let Part = new Instance("Part");
        Part.Size = new Vector3(4, 1, 4);
        Part.Position = MouseRay ? MouseRay.Position : ScreenRay.Origin.add(ScreenRay.Direction.mul(10));
        Part.Anchored = true;
        Part.CanCollide = true;
        Part.Parent = Context || Workspace;
    }
}