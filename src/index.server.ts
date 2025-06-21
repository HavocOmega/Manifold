import { MenuContainer } from "Components/MenuContainer";

/* ---------------------------------- Paths --------------------------------- */
const ToolsFolder: Folder = script.FindFirstChild("Tools") as Folder;

/* ------------------------------- References ------------------------------- */
const PluginToolbar = plugin.CreateToolbar("Manifold");

/* -------------------------------- Functions ------------------------------- */
function Initialize() {
	return new Promise<void>((resolve) => {
		const GlobalPluginAction = plugin.CreatePluginAction(
			"Manifold",
			"Open All Menus",
			"Open up all menus to scroll through",
		);

		const Categories = ToolsFolder.GetChildren();

		for (const Category of Categories) {
			const CategoryMenuAction = plugin.CreatePluginAction(
				"Manifold" + Category.Name,
				"Open " + Category.Name + " Menu",
				"Open the " + Category.Name,
			);

			for (const Tool of Category.GetChildren()) {
				if (Tool.IsA("ModuleScript")) {
				}
			}
		}

		resolve();
	});
}

/* ----------------------------- Initialization ----------------------------- */
if (plugin) {
	Initialize()
		.catch((Error: undefined) => {
			print("[Manifold] Error initializing plugin:", Error);
		})
		.andThen(() => {
			print("[Manifold] Plugin initialized successfully!");
		});
}
