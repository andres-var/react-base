import ToastifComponent from "Components/ToastifyComponent/ToastifComponent";
import React            from "react";
import { Link }         from "react-router-dom";

const RegisterPage = ({
	delegations: {
		data,
		error,
		formik,
		loading,
	},
}) => {

	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<p>Registro</p>
				<div className="campo">
					<input name="email" type="text" onChange={formik.handleChange} value={formik.values.email} />
				</div>
				<div className="campo">
					<input name="password" type="text" onChange={formik.handleChange} value={formik.values.password} />
				</div>
				<div className="campo">
					<button type="submit">Enviar</button>
				</div>
				<Link to="/auth/login">Login</Link>
				<ToastifComponent />
			</form>
		</div>
	);
};

export default RegisterPage;
