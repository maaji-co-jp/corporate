import * as React from "react";
import { Box, Container, Button, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import heroImage from "../images/hero.jpg";

// ロゴの菱形モチーフを背景の装飾として散らす（低彩度・低不透明度で控えめに）
const Diamond = ({ size, sx }: { size: number; sx?: object }) => (
  <Box
    aria-hidden
    sx={{
      position: "absolute",
      width: size,
      height: size,
      border: "1.5px solid rgba(255,255,255,0.6)",
      transform: "rotate(45deg)",
      borderRadius: "18%",
      opacity: 0.25,
      ...sx,
    }}
  />
);

const Hero = () => {
  return (
    <Box
      id="top"
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: { xs: "88vh", md: "100vh" },
        display: "flex",
        alignItems: "center",
        color: "#fff",
        // 水中写真の上にネイビーのグラデーションを重ねて文字の可読性とブランド感を担保する
        backgroundImage: `linear-gradient(90deg, rgba(15,26,46,0.86) 0%, rgba(20,33,61,0.62) 45%, rgba(30,58,99,0.42) 100%), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Diamond size={320} sx={{ top: "12%", right: "-70px" }} />
      <Diamond size={160} sx={{ bottom: "16%", right: "16%", opacity: 0.18 }} />
      <Diamond size={90} sx={{ top: "24%", left: "8%", opacity: 0.16 }} />

      <Container sx={{ position: "relative", zIndex: 1, py: { xs: 12, md: 8 } }}>
        <Box sx={{ maxWidth: 840 }}>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.85)",
              fontWeight: 700,
              letterSpacing: "0.18em",
              fontSize: { xs: "0.75rem", md: "0.82rem" },
              mb: 3,
            }}
          >
            WEB DEVELOPMENT STUDIO
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.6rem", sm: "3.6rem", md: "4.8rem" },
              color: "#fff",
              textShadow: "0 2px 24px rgba(10,18,33,0.35)",
            }}
          >
            テクノロジーで
            <br />
            世界を
            <Box component="span" sx={{ color: "#9DC1EE" }}>
              自由に
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 4,
              maxWidth: 620,
              fontSize: { xs: "1rem", md: "1.12rem" },
              color: "rgba(255,255,255,0.88)",
            }}
          >
            株式会社Maajiは、Webサービスの受託開発から開発組織づくり、新規事業の立ち上げまで。
            0→1の立ち上げと事業のスケールを経験したエンジニアが、プロダクトの成長に伴走します。
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 5 }}>
            <Button
              href="#contact"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: "#fff",
                color: "primary.dark",
                "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
              }}
            >
              お問い合わせ
            </Button>
            <Button
              href="#services"
              variant="outlined"
              size="large"
              sx={{
                color: "#fff",
                borderColor: "rgba(255,255,255,0.7)",
                "&:hover": {
                  borderColor: "#fff",
                  bgcolor: "rgba(255,255,255,0.08)",
                },
              }}
            >
              サービスを見る
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
