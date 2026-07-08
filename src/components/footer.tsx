import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Container, Grid, Stack, Divider, Typography } from "@mui/material";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Works", href: "#works" },
  { label: "Company", href: "#company" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ bgcolor: "#14213D", color: "#fff" }}>
      <Container sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Box sx={{ lineHeight: 0, mb: 2 }}>
              <StaticImage
                alt="maajiのロゴ"
                src="../images/logo_white.png"
                width={150}
                placeholder="none"
              />
            </Box>
            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 360 }}
            >
              テクノロジーで世界を自由に。Webサービスの受託開発から開発組織づくりまで。
            </Typography>
          </Grid>

          <Grid item xs={6} md={4}>
            <Typography
              sx={{
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.5)",
                mb: 2,
              }}
            >
              MENU
            </Typography>
            <Stack spacing={1.2}>
              {navItems.map((item) => (
                <Box
                  key={item.href}
                  component="a"
                  href={item.href}
                  sx={{
                    color: "rgba(255,255,255,0.85)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    width: "fit-content",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  {item.label}
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography
              sx={{
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.5)",
                mb: 2,
              }}
            >
              CONTACT
            </Typography>
            <Box
              component="a"
              href="mailto:info@maaji.co.jp"
              sx={{
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                fontSize: "0.9rem",
                "&:hover": { color: "#fff" },
              }}
            >
              info@maaji.co.jp
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.12)" }} />

        <Typography
          variant="body2"
          sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem" }}
        >
          © {year} Maaji, Inc.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
