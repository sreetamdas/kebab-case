import kebabCase from "../src";

describe("get-kebab-case", () => {
	test("kebab-case", () => {
		const kebab = kebabCase("My Name is Sreetam");

		expect(kebab).toMatch("mateers-si-enam-ym");
	});
});
