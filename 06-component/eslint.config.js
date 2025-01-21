import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import prettier from 'eslint-plugin-prettier';

export default [
	{
		name: 'app/files-to-lint',
		files: ['**/*.{js,mjs,jsx,vue}'],
	},

	{
		name: 'app/files-to-ignore',
		ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
	},

	js.configs.recommended,
	...pluginVue.configs['flat/essential'],
	skipFormatting,

	{
		plugins: {
			prettier,
		},
		// prettier-ignore
		// : prettier 비활성화
		rules: {
			'prettier/prettier': [
				'error',
				{
					printWidth: 80, // 줄 바꿈 할 줄의 길이
					tabWidth: 2, 		// 들여쓰기 공백 수
					useTabs: true, 	// 공백 대신 탭으로 들여쓰기
					semi: true, 		// 문장의 끝에 ; 추가
					singleQuote: true, 		// ""대신 '' 사용
					trailingComma: 'all', // 객체, 배열 등 마지막 요소 뒤에 , 추가
					bracketSpacing: true, // {}에 공백을 추가
					arrowParens: 'avoid', // 화살표 함수에서 매개변수가 하나일 때 () 생략
				},
			],
			'no-unused-vars': 'off', 						// 사용되지 않는 변수 등록
			'vue/no-unused-components': 'off',	// 사용하지 않는 컴포넌트 등록 허용.
			'no-undef': 'off',									// 정의되지 않은 변수 사용중 에러해제
		},
	},
];
