import {
	createMuiTheme,
	responsiveFontSizes,
} from "@material-ui/core/styles";
import { esES } from "@material-ui/core/locale";

// Create a theme instance.
const theme = createMuiTheme({
	palette : {
		primary : {
			main : "#7367F0",
		},
	},
	typography : {
		fontFamily : [
			"Poppins",
			"-apple-system",
			"Gotham",
			"BlinkMacSystemFont",
			"'Segoe UI'",
			"Roboto",
			"Oxygen",
			"Ubuntu",
			"Cantarell",
			"'Fira Sans'",
			"'Droid Sans'",
			"'Helvetica Neue'",
			"'Open Sans'",
		].join(","),
	},
}, esES);

export default responsiveFontSizes(theme);
