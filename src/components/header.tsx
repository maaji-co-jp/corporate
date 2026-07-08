import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Works", href: "#works" },
  { label: "Company", href: "#company" },
];

const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
        backdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid" : "1px solid transparent",
        borderColor: "divider",
        transition: "all .3s ease",
        color: scrolled ? "text.primary" : "#fff",
      }}
    >
      <Container>
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 76 } }}>
          <Box
            component="a"
            href="#top"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              lineHeight: 0,
              position: "relative",
            }}
            aria-label="Maaji ホーム"
          >
            {/* スクロール状態でロゴの色を切り替える（ヒーロー上は白、それ以外は通常色） */}
            <Box sx={{ opacity: scrolled ? 1 : 0, transition: "opacity .3s ease" }}>
              <StaticImage
                alt="maajiのロゴ"
                src="../images/logo.png"
                width={132}
                placeholder="none"
                loading="eager"
              />
            </Box>
            <Box
              aria-hidden
              sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                opacity: scrolled ? 0 : 1,
                transition: "opacity .3s ease",
              }}
            >
              <StaticImage
                alt=""
                src="../images/logo_white.png"
                width={132}
                placeholder="none"
                loading="eager"
              />
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Stack
            direction="row"
            spacing={3.5}
            alignItems="center"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {navItems.map((item) => (
              <Box
                key={item.href}
                component="a"
                href={item.href}
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  opacity: 0.85,
                  "&:hover": {
                    opacity: 1,
                    color: scrolled ? "primary.main" : "#fff",
                  },
                  transition: "color .2s, opacity .2s",
                }}
              >
                {item.label}
              </Box>
            ))}
            <Button
              href="#contact"
              variant="contained"
              sx={
                scrolled
                  ? undefined
                  : {
                      bgcolor: "#fff",
                      color: "primary.dark",
                      "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
                    }
              }
            >
              Contact
            </Button>
          </Stack>

          <IconButton
            aria-label="メニューを開く"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "inline-flex", md: "none" }, color: "inherit" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, pt: 1 }} role="presentation">
          <Box sx={{ display: "flex", justifyContent: "flex-end", px: 1 }}>
            <IconButton aria-label="メニューを閉じる" onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItemButton
                key={item.href}
                component="a"
                href={item.href}
                onClick={() => setOpen(false)}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontWeight: 600 }}
                />
              </ListItemButton>
            ))}
          </List>
          <Box sx={{ px: 2, pt: 1 }}>
            <Button
              href="#contact"
              onClick={() => setOpen(false)}
              variant="contained"
              color="primary"
              fullWidth
            >
              Contact
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
