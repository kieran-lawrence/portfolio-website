import { test, expect } from '@playwright/test';

test('intro component', async ({ page }) => {
	await page.goto('http://localhost:3000');
	const $introComponent = page.locator('#intro').first();
	await expect($introComponent).toHaveScreenshot();
});
test('resume component', async ({ page }) => {
	await page.goto('http://localhost:3000');
	const $resumeComponent = page.locator('#resume').first();
	await expect($resumeComponent).toHaveScreenshot();
});
