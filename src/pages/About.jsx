import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import AboutImage from "../images/about_img.jpg";
const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 10,
          textAlign: "center",
          p: 3,
          "& h4": { fontWeight: "700", my: 2, fontSize: "1.3rem" },
          "& p": {
            textAlign: "justify",
            fontSize: "1rem",
          },
          "@media (max-width:600px)": { mt: 0, "& h4": { fontSize: "1.5rem" } },
        }}
      >
        <Typography variant="h4"> Welcome to Burger</Typography>
        <p>
          We're your go-to destination for mouthwatering, handcrafted burgers.
          Our journey began with a passion for creating the perfect burger, and
          that passion still drives us today. At Burger House, quality is
          paramount. We source the freshest ingredients, from locally-raised
          beef to artisanal buns. Our menu showcases a variety of burger
          options, each a masterpiece of flavor and creativity. But we're more
          than just burgers. Our hand-cut fries, made-to-order shakes, and
          delightful sides complete your meal. Vegetarian? No problem – we have
          options that cater to all tastes. Step into our cozy, modern space,
          where every visit is a celebration. Our friendly staff ensures your
          dining experience is top-notch, whether you're here for a quick bite
          or a leisurely meal. Burger House isn't just a restaurant; it's a
          destination for burger lovers. We're proud to share our passion and
          flavors with you, one delicious bite at a time.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
