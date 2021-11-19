import React     from "react";
import useStyles from "./styles";

const LoginPage = ({
	delegations: {
		formik,
	},
}) => {
	const clasess = useStyles();

	return (
		<div className={clasess.root}>
			<form onSubmit={formik.handleSubmit}>
				<div className="campo">
					<input name="email" type="text" onChange={formik.handleChange} value={formik.values.email} />
				</div>
				<div className="campo">
					<input name="password" type="text" onChange={formik.handleChange} value={formik.values.password} />
				</div>
				<div className="campo">
					<button type="submit">Enviar</button>
				</div>
			</form>
		</div>
	);
};

export default LoginPage;
