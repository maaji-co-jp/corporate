import { test, expect } from "@playwright/test";

test.describe("トップページ（モバイル）", () => {
  test("ハンバーガーメニューからナビゲーションを開ける", async ({ page }) => {
    await page.goto("/");

    // モバイルでは横並びナビは隠れ、ハンバーガーが表示される
    await page.getByRole("button", { name: "メニューを開く" }).click();

    const drawer = page.getByRole("presentation");
    for (const label of ["Services", "Approach", "Works", "Company"]) {
      await expect(drawer.getByRole("link", { name: label })).toBeVisible();
    }
    await expect(drawer.getByRole("link", { name: "Contact" })).toBeVisible();
  });

  test("メニューのリンクで該当セクションへ遷移する", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "メニューを開く" }).click();

    await page
      .getByRole("presentation")
      .getByRole("link", { name: "Works" })
      .click();

    await expect(page).toHaveURL(/#works$/);
    await expect(page.locator("#works")).toBeInViewport();
  });
});
