import React from "react";
import { useRoutes } from "react-router";
import FormMiddleware from "./formMiddleware";
import LogInPage from "./loginPage";

function AppNavigation() {
	let element = useRoutes([
		{ path: "/", element: <FormMiddleware /> },
		{ path: "/loginpage", element: <LogInPage /> },
	]);

	return element;
}

export default AppNavigation;
