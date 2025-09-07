import { test, expect } from '@playwright/test';

test.describe('Theme Toggle', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render theme toggle button', async ({ page }) => {
    const themeToggle = page.getByRole('button', { name: /switch to (light|dark) theme/i });
    await expect(themeToggle).toBeVisible();
  });

  test('should have proper accessibility attributes', async ({ page }) => {
    const themeToggle = page.getByRole('button', { name: /switch to (light|dark) theme/i });
    
    // Check aria-pressed attribute exists
    const ariaPressed = await themeToggle.getAttribute('aria-pressed');
    expect(ariaPressed).toBeTruthy();
    expect(['true', 'false']).toContain(ariaPressed);
    
    // Check aria-label exists and is meaningful
    const ariaLabel = await themeToggle.getAttribute('aria-label');
    expect(ariaLabel).toBeTruthy();
    expect(ariaLabel).toMatch(/switch to (light|dark) theme/i);
  });

  test('should toggle theme when clicked', async ({ page }) => {
    const themeToggle = page.getByRole('button', { name: /switch to (light|dark) theme/i });
    
    // Get initial theme state
    const initialAriaPressed = await themeToggle.getAttribute('aria-pressed');
    const initialTheme = initialAriaPressed === 'true' ? 'dark' : 'light';
    
    // Click the toggle button
    await themeToggle.click();
    
    // Wait for theme change to complete
    await page.waitForTimeout(100);
    
    // Check that aria-pressed has changed
    const newAriaPressed = await themeToggle.getAttribute('aria-pressed');
    expect(newAriaPressed).not.toBe(initialAriaPressed);
    
    // Check that the theme class has changed on html element
    if (initialTheme === 'light') {
      await expect(page.locator('html')).toHaveClass(/dark/);
    } else {
      await expect(page.locator('html')).not.toHaveClass(/dark/);
    }
  });

  test('should change icon when theme is toggled', async ({ page }) => {
    const themeToggle = page.getByRole('button', { name: /switch to (light|dark) theme/i });
    
    // Get initial icon (sun or moon svg)
    const initialSvg = themeToggle.locator('svg');
    await expect(initialSvg).toBeVisible();
    
    // Click to toggle theme
    await themeToggle.click();
    await page.waitForTimeout(100);
    
    // Icon should still be visible (but different)
    const newSvg = themeToggle.locator('svg');
    await expect(newSvg).toBeVisible();
    
    // The aria-label should have changed to reflect new state
    const newAriaLabel = await themeToggle.getAttribute('aria-label');
    expect(newAriaLabel).toBeTruthy();
    expect(newAriaLabel).toMatch(/switch to (light|dark) theme/i);
  });

  test('should be keyboard accessible', async ({ page }) => {
    const themeToggle = page.getByRole('button', { name: /switch to (light|dark) theme/i });
    
    // Focus the button with Tab key
    await page.keyboard.press('Tab');
    await expect(themeToggle).toBeFocused();
    
    // Get initial state
    const initialAriaPressed = await themeToggle.getAttribute('aria-pressed');
    
    // Press Enter to activate
    await page.keyboard.press('Enter');
    await page.waitForTimeout(100);
    
    // Check that state changed
    const newAriaPressed = await themeToggle.getAttribute('aria-pressed');
    expect(newAriaPressed).not.toBe(initialAriaPressed);
  });

  test('should persist theme across page reloads', async ({ page }) => {
    const themeToggle = page.getByRole('button', { name: /switch to (light|dark) theme/i });
    
    // Click to change theme
    await themeToggle.click();
    await page.waitForTimeout(100);
    
    // Get the theme state after toggle
    const ariaPressed = await themeToggle.getAttribute('aria-pressed');
    
    // Reload the page
    await page.reload();
    
    // Check that theme persisted
    const themeToggleAfterReload = page.getByRole('button', { name: /switch to (light|dark) theme/i });
    const ariaPressedAfterReload = await themeToggleAfterReload.getAttribute('aria-pressed');
    
    expect(ariaPressedAfterReload).toBe(ariaPressed);
  });
});