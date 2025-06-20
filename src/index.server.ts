/* --------------------------------- Imports -------------------------------- */

/* ------------------------------- References ------------------------------- */
const PluginToolbar = plugin.CreateToolbar("Manifold");

/* -------------------------------- Functions ------------------------------- */
function Initialize() {
	const OpenAllMenus = plugin.CreatePluginAction("Manifold", "Open All Menus", "Open up all menus to scroll through");
}

/* ----------------------------- Initialization ----------------------------- */
if (plugin) {
	Initialize();
}
