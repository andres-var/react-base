import ToastifComponent from "Components/ToastifyComponent/ToastifComponent";
import React            from "react";

const LoginPage = ({
	delegations: {
		formik,
	},
}) => {

	return (
		<div>
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
				<ToastifComponent />
			</form>
		</div>
	);
};

export default LoginPage;
