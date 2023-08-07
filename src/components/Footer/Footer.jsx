import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Footer() {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          bgcolor: "#000",
          color: "white",
          p: 3,
          bottom: 0,
          width: "100%",
        }}
      >
        <Box
          sx={{
            my: 3,
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(2px)",
              transition: "all 400ms",
            },
          }}
        >
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
          <YouTubeIcon />
          <LinkedInIcon />
        </Box>

        <Typography
          variant="h6"
          fontSize={"small"}
          sx={{
            "@media(max-width:600px)": {
              fontSize: "0.5rem",
            },
          }}
        >
          &copy;2020-2023 Burger House. All Rights Reserved.
          <br />
          Some information on this site may vary slightly by location and in
          stadium, event venues and international Burger House.
        </Typography>
      </Box>
    </>
  );
}
