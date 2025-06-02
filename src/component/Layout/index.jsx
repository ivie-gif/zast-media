import { Box } from "@mui/material";

export default function CenteredPageLayout({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        px: 2, // padding to avoid touching screen edges
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px", // optional limit
          width: "100%", // full width on smaller screens
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
