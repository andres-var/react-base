const isProduction = process.env.NODE_ENV === "production";

const apiUrl = isProduction
	? process.env.REACT_APP_API
	: process.env.REACT_APP_API_LOCAL;

export default apiUrl;
