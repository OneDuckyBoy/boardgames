const { test, expect } = require('@playwright/test');

test('Check boardgames page', async ({ page }) => {
    await page.goto('https://stilianmatev-exam-prep-for-devops-course.onrender.com/boardgames');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  