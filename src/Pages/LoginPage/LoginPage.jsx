import ToastifComponent from "Components/ToastifyComponent/ToastifComponent";
import React            from "react";
import { Link }         from "react-router-dom";

const LoginPage = ({
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
				<div className="campo">
					<input name="email" type="text" onChange={formik.handleChange} value={formik.values.email} />
				</div>
				<div className="campo">
					<input name="password" type="text" onChange={formik.handleChange} value={formik.values.password} />
				</div>
				<div className="campo">
					<button type="submit">Enviar</button>
				</div>
				<Link to="/auth/register">Registrar</Link>
				<ToastifComponent />
			</form>

			<div>
				{loading && <div>Loading...</div>}
				{error && <div>Error: { JSON.stringify(error) }</div>}
				{data && <div>Data: {JSON.stringify(data)}</div>}
			</div>
		</div>
	);
};

export default LoginPage;
