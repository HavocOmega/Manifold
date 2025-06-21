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
		}
	});
}

/* ----------------------------- Initialization ----------------------------- */
if (plugin) {
	Initialize()
		.andThen(() => {
			print("[Manifold] Plugin initialized successfully!");
		})
		.catch((error) => {
			print("[Manifold] Plugin initialization failed: " + error);
		});
}
