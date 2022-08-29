// /** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// module.exports = {
//   preset: "ts-jest",
//   testEnvironment: "jsdom",
//   globals: {
//     "ts-jest": {
//       tsconfig: "./tsconfig.jest.json",
//     },
//   },
//   setupFilesAfterEnv: ["./jest.setup.ts"],
// };

// ? Config using swc
import nextJest from "next/jest";

const createJestConfig = nextJest({ dir: "./" });

export default createJestConfig({
	//  Make absolute imports compatible with jest
	// moduleNameMapper: {
	// 	"@/components/(.*)": "<rootDir>/components/$1",
	// 	"@/utils/(.*)": "<rootDir>/utils/$1",
	// 	"@/store/(.*)": "<rootDir>/store/$1",
	// },

	// Testing library
	setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
	
	// Better logs if test case(s) fail
	verbose: true,
});
