const { test, expect } = require('@playwright/test');

test('Flujo E2E: El estudiante puede iniciar sesión y ver el dashboard', async ({ page }) => {
  await page.goto('https://tu-app-en-vercel.vercel.app/login');
  await page.fill('input[name="email"]', 'estudiante@universidad.edu');
  await page.fill('input[name="password"]', 'secreto123');
  await page.click('button[type="submit"]');
  
  // Validar que se redirige al menú principal y aparece un gráfico
  await expect(page).toHaveURL(/.*dashboard/);
  await expect(page.locator('canvas')).toBeVisible(); // Chart.js canvas
});
