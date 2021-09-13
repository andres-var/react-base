import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root : {
		height         : "100vh",
		width          : "100%",
		display        : "flex",
		justifyContent : "center",
		alignContent   : "center",

		"& .authLayout" : {
			display        : "flex",
			justifyContent : "center",
			alignContent   : "center",
		},
	},
});

export default useStyles;
