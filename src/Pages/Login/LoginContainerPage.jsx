import React         from "react";
import { useFormik } from "formik";
import * as Yup      from "yup";
import { connect }   from "react-redux";

// our my components
import AuthService from "Store/Services/AuthServices";
import { bindAll } from "Helpers";
import LoginPage   from "./LoginPage";

const loginSchema = Yup.object().shape({
	email    : Yup.string().email("Invalid email").required("Required"),
	password : Yup.string().required(),
});

const LoginContainerPage = ({
	authService,
}) => {
	const formik = useFormik({
		initialValues : {
			password : "",
			email    : "",
		},
		validationSchema : loginSchema,
		onSubmit         : (values) => {
			authService.login(values);
		},
	});

	return (
		<LoginPage delegations={{
			formik,
		}}
		/>
	);
};

const mapDispatchToProps = bindAll({ AuthService });

export default connect(null, mapDispatchToProps)(LoginContainerPage);
