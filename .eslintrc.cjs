const extendsConfig = [
	"plugin:diff/ci",
	"eslint:recommended",
	// FIXME: This is causing an errors, might need to add the path aliases for eslint
	//"plugin:import/errors",
	"plugin:react/recommended",
	"plugin:@typescript-eslint/recommended",
	"plugin:react-hooks/recommended",
	"plugin:react/jsx-runtime",
];

if (process.env.CI) extendsConfig.push("plugin:prettier/recommended");

const warn = process.env.CI ? "warn" : "error"; //attempt to scare people into fixing their warnings

module.exports = {
	root: true,
	env: { browser: true, es2020: true, node: true },
	extends: extendsConfig,
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react", "import", "react-refresh", "etc"],
	rules: {
		"react/prop-types": 0,
		"@typescript-eslint/no-this-alias": "off",
		"no-async-promise-executor": "off",
		"no-empty": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"no-mixed-spaces-and-tabs": "off", //prettier is known to mix them
		"no-inner-declarations": "off",

		"react-refresh/only-export-components": [warn, { allowConstantExport: true }],
		"etc/no-commented-out-code": warn,

		"no-console": process.env.LINTCONF_NODE
			? "off"
			: [
					"error",
					{
						allow: ["error"],
					},
				],
		eqeqeq: "error",
		"no-var": "error",
		"no-mixed-operators": [
			"error",
			{
				groups: [
					["&", "|", "^", "~", "<<", ">>", ">>>"],
					["==", "!=", "===", "!==", ">", ">=", "<", "<="],
					["&&", "||"],
					["in", "instanceof"],
				],
				allowSamePrecedence: true,
			},
		],
		"prefer-const": [
			"error",
			{
				destructuring: "all",
			},
		],
		"require-await": "error",
		"no-nested-ternary": "error",
		"@typescript-eslint/consistent-type-imports": "error",

		/**
		 * allow unused variables starting with _
		 */
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				argsIgnorePattern: "^_",
				varsIgnorePattern: "^_",
			},
		],
	},
	globals: {
		globalThis: true,
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
