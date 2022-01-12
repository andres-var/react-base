import React         from "react";
import { useFormik } from "formik";
import * as Yup      from "yup";
import { connect }   from "react-redux";

// our my components
import AuthService    from "Store/Services/AuthServices";
import { bindAll }    from "Helpers";
import LoginPage      from "./LoginPage";
import GenericService from "Store/Services/GenericServices";


const loginSchema = Yup.object().shape({
	email    : Yup.string().email("Invalid email").required("Required"),
	password : Yup.string().required(),
});

const LoginPageContainer = ({
	authService,
	genericService,
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

	const { data, loading, error } = genericService.getAll("users", { delay : 3});

	return (
		<LoginPage delegations={{
			data,
			error,
			formik,
			loading,
		}}
		/>
	);
};

const mapDispatchToProps = bindAll({ AuthService, GenericService });

export default connect(null, mapDispatchToProps)(LoginPageContainer);
