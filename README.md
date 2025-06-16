# @radiantbeing/eslint-config

JSLint 철학에 기반한 ESLint 규칙 세트

## 개요

[Douglas Crockford](https://en.wikipedia.org/wiki/Douglas_Crockford)는 언어의 좋은 부분만을 사용할 것을 강조합니다. 이는 그의 저서 [How JavaScript Works](https://www.amazon.com/How-JavaScript-Works-Douglas-Crockford/dp/1949815005)에서 수차례 언급됩니다. [JSLint](https://github.com/jslint-org/jslint)는 Douglas Crockford가 개발한 정적 분석 도구로, JavaScript의 좋은 부분만을 사용하도록 강제하여 높은 품질의 코드 작성을 돕습니다. JSLint는 엄격한 규칙으로 코드 품질을 보장하지만, 최신 JavaScript 문법 및 TypeScript 개발 환경에서는 사용이 제한됩니다.

[ESLint](https://eslint.org/)는 널리 사용되는 현대적인 정적 분석 도구입니다. 확장 가능한 구조 덕분에 다양한 규칙을 커스터마이징하기 쉽고 TypeScript를 포함한 현대 개발 환경을 잘 지원합니다. `@radiantbeing/eslint-config`는 JSLint의 엄격한 코딩 철학을 현대 JavaScript/TypeScript 개발 환경에서 활용할 수 있도록 설계된 ESLint 규칙 세트입니다. JSLint에서 `export default` 대상을 동결(`Object.freeze`)할 것을 강제하는 것과 같이, 기존 ESLint 규칙으로는 구현할 수 없는 JSLint의 규칙을 커스텀 규칙으로 포함하고 있습니다.

## 설치

`npm`을 사용하여 패키지를 설치합니다:

```bash
npm install --save-dev @radiantbeing/eslint-config
```

## 사용법

`eslint.config.js` 파일에서 구성을 불러와 사용합니다:

```js
import {defineConfig} from "eslint/config";
import radiant from "@radiantbeing/eslint-config";

export default Object.freeze(defineConfig({
    extends: [radiant.configs.recommended],
    files: ["**/*.{js,mjs,cjs}"]
}));
```

## 라이선스

MIT License
