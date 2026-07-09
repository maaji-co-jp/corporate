import * as React from "react";
import {
  Container,
  Box,
  Grid,
  Stack,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import Layout from "../components/layout";
import Hero from "../components/hero";

const scrollMargin = { scrollMarginTop: { xs: "72px", md: "88px" } };

type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

const SectionHeading = ({
  kicker,
  title,
  description,
  align = "center",
}: SectionHeadingProps) => (
  <Box
    sx={{
      textAlign: align,
      mx: align === "center" ? "auto" : 0,
      maxWidth: 680,
      mb: { xs: 5, md: 7 },
    }}
  >
    <Typography
      sx={{
        color: "primary.main",
        fontWeight: 700,
        letterSpacing: "0.16em",
        fontSize: "0.78rem",
        mb: 1.5,
      }}
    >
      {kicker}
    </Typography>
    <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "2.5rem" } }}>
      {title}
    </Typography>
    {description && (
      <Typography sx={{ mt: 2.5, color: "text.secondary" }}>
        {description}
      </Typography>
    )}
  </Box>
);

const services = [
  {
    icon: <CodeRoundedIcon fontSize="large" />,
    title: "Webサービスの受託開発",
    body: "Ruby on Rails / Laravel を用いた設計・実装。要件定義から運用改善まで一貫してお引き受けします。",
  },
  {
    icon: <GroupsRoundedIcon fontSize="large" />,
    title: "開発組織づくり",
    body: "タスク管理やスクラムの導入など、成果を出し続けられる開発チームの立ち上げと改善を支援します。",
  },
  {
    icon: <RocketLaunchRoundedIcon fontSize="large" />,
    title: "新規事業・開発支援",
    body: "既存プロジェクトの推進から新規事業の立ち上げまで、エンジニアリングの力で前に進めます。",
  },
  {
    icon: <HubRoundedIcon fontSize="large" />,
    title: "DX支援（デジタル変革）",
    body: "業務のデジタル化やシステム導入・内製化支援を通じて、事業の生産性と競争力を高めます。",
  },
  {
    icon: <SmartToyRoundedIcon fontSize="large" />,
    title: "AX支援（AI活用）",
    body: "生成AIをはじめとしたAIの業務適用やプロダクトへの組み込みで、新しい価値づくりを支援します。",
  },
  {
    icon: <CampaignRoundedIcon fontSize="large" />,
    title: "エンジニアリング × マーケティング",
    body: "SEO・広告運用・LPO を、計測基盤の構築やデータ連携・自動化とセットで実装。開発会社ならではの視点で、マーケとプロダクトを一体で伸ばします。",
  },
];

const approach = [
  {
    no: "01",
    title: "事業を理解する",
    body: "プロダクトの目的と事業のフェーズを捉え、本当に必要な打ち手を見極めてから手を動かします。",
  },
  {
    no: "02",
    title: "小さく作って検証する",
    body: "アイデアはまず小さく形にして、検証を回しながら確度を高めていきます。",
  },
  {
    no: "03",
    title: "スケールに耐える設計",
    body: "伸びても壊れない設計と組織づくりを重視します。急拡大するチームでも破綻しないように。",
  },
  {
    no: "04",
    title: "運用まで伴走する",
    body: "つくって終わりにせず、グロースと改善に長く伴走し、プロダクトの成長を支えます。",
  },
];

const works = [
  {
    label: "LegalTech",
    title: "電子契約サービス「NINJA SIGN（現 freeeサイン）」",
    body: "開発責任者として 0→1 を立ち上げ、事業売却（EXIT）まで牽引しました。",
  },
  {
    label: "EdTech",
    title: "オンライン学習「資格スクエア」",
    body: "学習プラットフォームの開発に従事し、サービスの成長を技術面から支えました。",
  },
  {
    label: "受託 / 組織開発",
    title: "受託開発・開発組織づくり",
    body: "Maaji として各種Webサービスの受託開発に加え、開発チームの立ち上げや組織づくりの支援を手がけています。",
  },
];

const company = [
  { key: "会社名", value: "株式会社Maaji" },
  { key: "代表", value: "横沢 大輔" },
  { key: "設立", value: "2021年4月27日" },
  {
    key: "事業内容",
    value: "Webサービスの受託開発 / 開発組織支援 / 新規事業開発",
  },
];

const IndexPage = () => {
  return (
    <Layout>
      <Hero />

      {/* Services */}
      <Box
        id="services"
        component="section"
        sx={{ ...scrollMargin, bgcolor: "#F5F8FC", py: { xs: 9, md: 14 } }}
      >
        <Container>
          <SectionHeading
            kicker="SERVICES"
            title="事業内容"
            description="Webに関わることは、開発から組織づくり、集客まで。プロダクトの成長に必要な領域をまとめてご相談いただけます。"
          />
          <Grid container spacing={3}>
            {services.map((s) => (
              <Grid item xs={12} sm={6} md={4} key={s.title}>
                <Box
                  sx={{
                    height: "100%",
                    p: { xs: 3, md: 3.5 },
                    borderRadius: 3,
                    bgcolor: "#fff",
                    border: "1px solid",
                    borderColor: "divider",
                    transition: "transform .25s ease, box-shadow .25s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 18px 40px -24px rgba(20,33,61,0.35)",
                    },
                  }}
                >
                  <Box sx={{ color: "primary.main", mb: 2 }}>{s.icon}</Box>
                  <Typography variant="h6" sx={{ mb: 1.2, fontSize: "1.1rem" }}>
                    {s.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {s.body}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Typography
            sx={{
              mt: 4,
              textAlign: "center",
              color: "text.secondary",
              fontSize: "0.95rem",
            }}
          >
            上記以外にも、Webに関わることはお気軽にご相談ください。
          </Typography>
        </Container>
      </Box>

      {/* Approach */}
      <Box
        id="approach"
        component="section"
        sx={{ ...scrollMargin, py: { xs: 9, md: 14 } }}
      >
        <Container>
          <SectionHeading
            kicker="APPROACH"
            title="Maajiの進め方"
            description="0→1からスケールまで、私たちが大切にしている4つのスタンスです。"
          />
          <Grid container spacing={{ xs: 3, md: 5 }}>
            {approach.map((a) => (
              <Grid item xs={12} sm={6} key={a.no}>
                <Stack direction="row" spacing={2.5}>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: "1.8rem", md: "2.2rem" },
                      color: "primary.light",
                      lineHeight: 1,
                    }}
                  >
                    {a.no}
                  </Typography>
                  <Box>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {a.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {a.body}
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Works & Message */}
      <Box
        id="works"
        component="section"
        sx={{ ...scrollMargin, bgcolor: "#F5F8FC", py: { xs: 9, md: 14 } }}
      >
        <Container>
          <SectionHeading
            kicker="WORKS"
            title="実績・経験"
            description="代表・横沢がこれまで手がけてきた、立ち上げからグロースまでの領域の一部です。"
          />
          <Grid container spacing={3}>
            {works.map((w) => (
              <Grid item xs={12} md={4} key={w.title}>
                <Box
                  sx={{
                    height: "100%",
                    p: { xs: 3, md: 4 },
                    borderRadius: 3,
                    bgcolor: "#fff",
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      display: "inline-block",
                      color: "primary.main",
                      bgcolor: "rgba(45,84,142,0.08)",
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 999,
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      mb: 2,
                    }}
                  >
                    {w.label}
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 1.2, fontSize: "1.08rem" }}>
                    {w.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {w.body}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* 代表メッセージ（最小限） */}
          <Box
            sx={{
              mt: { xs: 5, md: 7 },
              p: { xs: 3, md: 5 },
              borderRadius: 3,
              bgcolor: "#fff",
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "1.05rem", md: "1.2rem" }, lineHeight: 1.9 }}
            >
              「楽しくやるのが一番」。難しい課題ほど前向きに、良いプロダクトと良いチームを楽しみながらつくっていきます。
            </Typography>
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="baseline"
              sx={{ mt: 3 }}
            >
              <Typography sx={{ fontWeight: 700 }}>横沢 大輔</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                代表取締役
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Company */}
      <Box
        id="company"
        component="section"
        sx={{ ...scrollMargin, py: { xs: 9, md: 14 } }}
      >
        <Container maxWidth="md">
          <SectionHeading kicker="COMPANY" title="会社概要" />
          <Box sx={{ borderTop: "1px solid", borderColor: "divider" }}>
            {company.map((row) => (
              <Box key={row.key}>
                <Grid
                  container
                  sx={{ py: { xs: 2, md: 2.5 }, px: { xs: 0, md: 1 } }}
                >
                  <Grid item xs={12} sm={3}>
                    <Typography sx={{ fontWeight: 700 }}>{row.key}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <Typography sx={{ color: "text.secondary" }}>
                      {row.value}
                    </Typography>
                  </Grid>
                </Grid>
                <Divider />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Contact */}
      <Box
        id="contact"
        component="section"
        sx={{ ...scrollMargin, pb: { xs: 9, md: 14 } }}
      >
        <Container>
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: { xs: 4, md: 6 },
              px: { xs: 4, md: 10 },
              py: { xs: 7, md: 10 },
              textAlign: "center",
              color: "#fff",
              background:
                "linear-gradient(135deg, #1E3A63 0%, #2D548E 60%, #3E68A8 100%)",
            }}
          >
            <Typography
              variant="h2"
              sx={{ color: "#fff", fontSize: { xs: "1.8rem", md: "2.4rem" } }}
            >
              ご相談はお気軽に
            </Typography>
            <Typography
              sx={{
                mt: 2.5,
                mb: 4.5,
                color: "rgba(255,255,255,0.85)",
                maxWidth: 560,
                mx: "auto",
              }}
            >
              受託開発・開発組織づくり・新規事業のご相談まで。まずはお気軽にお問い合わせください。
            </Typography>
            <Button
              href="mailto:info@maaji.co.jp"
              size="large"
              startIcon={<MailOutlineRoundedIcon />}
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: "#fff",
                color: "primary.dark",
                "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
              }}
            >
              info@maaji.co.jp
            </Button>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default IndexPage;
