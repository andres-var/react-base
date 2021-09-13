module.exports = {
	extends : [
		"eslint:recommended",
		"plugin:react/recommended",
	],
	env : {
		browser : true,
		node    : true,
		es6     : true,
		jest    : true,
	},
	parserOptions : {
		ecmaVersion  : 9,
		ecmaFeatures : {
			jsx : true,
		},
		requireConfigFile : false,
	},
	plugins : [
		"react",
		"import",
		"react-hooks",
		"align-import",
	],
	parser : "babel-eslint",
	rules  : {
		indent : [
			"error",
			"tab",
			{
				SwitchCase   : 1,
				// Delete next line when problem is fixed
				ignoredNodes : ["TemplateLiteral"],
			},
		],
		"no-mixed-spaces-and-tabs" : [
			"error",
			"smart-tabs",
		],
		quotes : [
			"error",
			"double",
		],
		semi : [
			"error",
			"always",
		],
		"no-unused-vars" : [
			"error",
			{
				args : "none",
			},
		],
		"react/display-name" : "off",
		"react/prop-types"   : "off",
		"comma-dangle"       : [
			"error",
			{
				arrays    : "always-multiline",
				objects   : "always-multiline",
				imports   : "always-multiline",
				exports   : "always-multiline",
				functions : "ignore",
			},
		],
		"key-spacing" : [
			"error",
			{
				singleLine : {
					beforeColon : true,
					afterColon  : true,
				},
				multiLine : {
					align       : "colon",
					beforeColon : true,
					afterColon  : true,
				},
			},
		],
		"no-trailing-spaces" : "error",
		"eol-last"           : [
			"error",
			"always",
		],
		"arrow-parens"    : "off",
		"linebreak-style" : [
			"off",
			"windows",
		],
		"no-multi-spaces" : [
			"error",
			{
				exceptions : {
					"ImportDeclaration"  : true,
					"VariableDeclarator" : true,
				},
			},
		],
		"comma-spacing" : [
			"error",
			{
				before : false,
				after  : true,
			},
		],
		"no-var"                   : "error",
		"prefer-const"             : "error",
		"no-const-assign"          : "error",
		"prefer-template"          : "error",
		"react/react-in-jsx-scope" : "off",
		"import/extensions"        : [
			"error",
			{
				ts   : "never",
				tsx  : "never",
				jsx  : "always",
				js   : "never",
				png  : "always",
				jpg  : "always",
				svg  : "always",
				css  : "always",
				json : "always",
				scss : "always",
			},
		],
		"react/jsx-indent" : [
			1,
			"tab",
		],
		"react/jsx-indent-props" : [
			1,
			"tab",
		],
		"react/no-find-dom-node"      : "off",
		"react/no-unescaped-entities" : "off",
	},
	settings : {
		react : {
			version : "detect",
		},
	},
};
