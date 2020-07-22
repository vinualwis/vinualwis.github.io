export default {
	'env': {
		'browser': true,
		'es6': true
	},
	'extends': 'eslint:recommended',
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'object-curly-spacing': [
			'error', 
			'always'
		],
		'space-before-blocks': [
			'error', 
			'always'
		],
		'keyword-spacing': [
			'error', 
			{
				'after': true
			}
		],
		'no-mixed-spaces-and-tabs': 0
	}
};