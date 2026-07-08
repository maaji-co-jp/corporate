import { createTheme } from "@mui/material/styles";

// ブランドカラーはロゴ (src/images/logo.png) から抽出した藍色 #2D548E を基調にする
const brand = {
  main: "#2D548E",
  dark: "#1E3A63",
  light: "#5B82BC",
  ink: "#14213D", // 見出し・本文用の濃紺インク
  muted: "#5A6478",
  tint: "#F5F8FC", // セクション背景に使う極薄ブルーグレー
  line: "#E3E9F2",
};

const fontFamily = [
  "Inter",
  '"Noto Sans JP"',
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
].join(",");

const theme = createTheme({
  palette: {
    primary: {
      main: brand.main,
      dark: brand.dark,
      light: brand.light,
      contrastText: "#FFFFFF",
    },
    text: {
      primary: brand.ink,
      secondary: brand.muted,
    },
    background: {
      default: "#FFFFFF",
    },
    divider: brand.line,
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily,
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 800,
      letterSpacing: "-0.01em",
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: 0,
    },
    body1: {
      lineHeight: 1.9,
    },
    body2: {
      lineHeight: 1.85,
    },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 26,
          paddingBlock: 11,
        },
        sizeLarge: {
          paddingInline: 34,
          paddingBlock: 15,
          fontSize: "1rem",
        },
      },
    },
    MuiContainer: {
      defaultProps: { maxWidth: "lg" },
    },
  },
});

// テーマ確定後の値を使いたい箇所（幾何モチーフ等）のために生の値も公開する
export const palette = brand;

export default theme;
