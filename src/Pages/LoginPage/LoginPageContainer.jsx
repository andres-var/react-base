import React         from "react";
import { useFormik } from "formik";
import * as Yup      from "yup";
import { connect }   from "react-redux";

// our my components
import AuthService from "Store/Services/AuthServices";
import { bindAll } from "Helpers";
import LoginPage   from "./LoginPage";
import FetchHook   from "Store/Services/GenericServices";


const loginSchema = Yup.object().shape({
	email    : Yup.string().email("Invalid email").required("Required"),
	password : Yup.string().required(),
});

const LoginPageContainer = ({
	fetchHook,
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

	const { data, loading, error } = fetchHook({
		module     : "users",
		method     : "GET",
		query      : { delay : 3 },
		dataToSend : {
			"name" : "morpheus",
			"job"  : "leader",
		},
	});
	// genericService.getAll("users", { delay : 3});

	console.log(loading);

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

const mapDispatchToProps = bindAll({ AuthService, FetchHook });

export default connect(null, mapDispatchToProps)(LoginPageContainer);
