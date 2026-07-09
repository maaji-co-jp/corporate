import { test, expect } from "@playwright/test";

test.describe("トップページ（デスクトップ）", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("タイトルとヒーローのタグラインが表示される", async ({ page }) => {
    await expect(page).toHaveTitle(/株式会社Maaji/);
    const hero = page.getByRole("heading", { level: 1 });
    await expect(hero).toContainText("テクノロジーで");
    await expect(hero).toContainText("世界を");
    await expect(hero).toContainText("自由に");
  });

  test("ヒーローのCTAが表示される", async ({ page }) => {
    await expect(
      page.getByRole("link", { name: "お問い合わせ" })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "サービスを見る" })
    ).toBeVisible();
  });

  test("ヘッダーのアンカーナビで各セクションへ遷移する", async ({ page }) => {
    const header = page.locator("header");
    for (const [label, hash] of [
      ["Services", "#services"],
      ["Approach", "#approach"],
      ["Works", "#works"],
      ["Company", "#company"],
    ] as const) {
      await header.getByRole("link", { name: label }).click();
      await expect(page).toHaveURL(new RegExp(`${hash}$`));
      await expect(page.locator(hash)).toBeInViewport();
    }
  });

  test("事業内容にDX支援・AX支援を含む6つのサービスが表示される", async ({
    page,
  }) => {
    const services = page.locator("#services");
    for (const title of [
      "Webサービスの受託開発",
      "開発組織づくり",
      "新規事業・開発支援",
      "DX支援（デジタル変革）",
      "AX支援（AI活用）",
      "Webマーケティング",
    ]) {
      await expect(services.getByText(title, { exact: true })).toBeVisible();
    }
  });

  test("Approach / Works / 会社概要の内容が表示される", async ({ page }) => {
    await expect(
      page.locator("#approach").getByText("Maajiの進め方")
    ).toBeVisible();

    const works = page.locator("#works");
    await expect(
      works.getByText("電子契約サービス「NINJA SIGN（現 freeeサイン）」")
    ).toBeVisible();
    await expect(works.getByText("横沢 大輔")).toBeVisible();

    const company = page.locator("#company");
    await expect(company.getByText("株式会社Maaji")).toBeVisible();
    await expect(company.getByText("2021年4月27日")).toBeVisible();
  });

  test("お問い合わせのメールリンクがある", async ({ page }) => {
    await expect(
      page.locator('a[href="mailto:info@maaji.co.jp"]').first()
    ).toBeVisible();
  });

  test("スクロールでヘッダーの背景が透明から白に切り替わる", async ({
    page,
  }) => {
    const header = page.locator("header");
    // 最上部（ヒーロー上）では背景は透明
    await expect(header).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");

    await page.evaluate(() => window.scrollTo(0, 600));
    await expect(header).toHaveCSS("background-color", "rgba(255, 255, 255, 0.85)");
  });
});
