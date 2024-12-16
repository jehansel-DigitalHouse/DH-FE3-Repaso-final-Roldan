import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./Styles/index.css";
import { BrowserRouter } from "react-router-dom";
import Context from "./Context/Context.jsx";

createRoot(document.getElementById("root")).render(
	// Intercambie el la posición padre-hijo de CONTEXT y BROWSER ROUTER
	// Y AL PARECER FUNCIONA IGUAL
	<BrowserRouter>
		<Context>
			{/* SE VA A UBICAR Context en main para contener toda la App */}
			<App />
		</Context>
	</BrowserRouter>
);