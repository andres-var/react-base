import React         from "react";
import { useFormik } from "formik";
import * as Yup      from "yup";
import { connect }   from "react-redux";

// our my components
import AuthService  from "Store/Services/AuthServices";
import { bindAll }  from "Helpers";
import RegisterPage from "./RegisterPage";


const registerSchema = Yup.object().shape({
	email    : Yup.string().email("Invalid email").required("Required"),
	password : Yup.string().required(),
});

const RegisterPageContainer = ({
	authService,
}) => {
	const formik = useFormik({
		initialValues : {
			password : "",
			email    : "",
		},
		validationSchema : registerSchema,
		onSubmit         : (values) => {
			authService.login(values);
		},
	});

	return (
		<RegisterPage
			delegations={{
				formik,
			}}
		/>
	);
};

const mapDispatchToProps = bindAll({ AuthService });

export default connect(null, mapDispatchToProps)(RegisterPageContainer);
