import * as React from "react";
import {Button,Box} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import styles from "../styles/Home.module.css";
import Link from "next/link";


import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack } from "@mui/material";
import backgroundImage from "../public/images/maincard.png";
import Image from "next/image";
import OtpInput from "react-otp-input";

const theme = createTheme();

export default function Dummy() {
  const [otp, setOtp] = React.useState("");

  const handleChange = (otp) => setOtp(otp);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box className={styles.container}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            borderRadius: "25px",
            p: 2,
            backgroundColor: "#FFFFFF",
            display: "flex",
          }}
        >
          <CssBaseline />

          <Box sx={{ maxWidth: "300px" }}>
            <Box
              sx={{
                mt: 10,
                mx: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
              }}
            >
              <Typography
                component="h1"
                variant="h5"
                sx={{ fontWeight: "bold", maxWidth: "400px" }}
              >
                Enter The Verification Code to continue
              </Typography>
              <Typography
                component="subtitle1"
                variant="parapgraph"
                sx={{ fontWeight: "bold", mt: 2, color: "gray" }}
              >
                We sent to{" "}
                <span style={{ color: "blue" }}>hellouser@heads.design.</span>
                if you don't see it, check your spam
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <Box sx={{ mt: 2 }}>
                  <OtpInput
                    inputStyle={{
                      width: "80%",
                      height: "42px",
                      border: "1px solid #0858F7",
                      color: "blue",
                      borderRadius: "10px",
                      boxShadow: "none", // remove box shadow from input style
                    }}
                    focusStyle={{
                      border: "2px solid #0858F7",
                      boxShadow: "0px 0px 3px #0858F7", // add box shadow to focus style
                    }}
                    value={otp}
                    onChange={handleChange}
                    numInputs={6}
                  />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Link href="/" style={{ textDecoration: "none" }}>
                    <Button
                      type=""
                      fullWidth
                      variant="text"
                      sx={{
                        p: 1.5,
                        mt: 2,
                        color: "#0858F7",
                        borderRadius: "12px",
                        fontWeight: "bold",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      back
                    </Button>
                  </Link>
                  <Button
                      type="submit"
                      fullWidth
                      variant="text"
                      sx={{
                        p: 1.5,
                        mt: 2,
                        color: "gray",
                        borderRadius: "12px",
                        fontWeight: "bold",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                     Resend 00.10
                    </Button>
                </Box>
              </Box>
            </Box>
            <Box sx={{ position: "absolute", bottom: 40 }}>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "left",
                  m: 2,
                }}
              >
                <Stack direction="row">
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Not member?
                  </Typography>
                  <a
                    href="#"
                    variant="body2"
                    style={{ textDecoration: "none", marginLeft: "5px" }}
                  >
                    <Typography variant="body2">Create Account</Typography>
                  </a>
                </Stack>
              </Box>

              <Box
                sx={{
                  position: "fixed",
                  top: 60,
                  right: -1,
                  display: { xs: "flex", md: "none" },
                  justifyContent: "right",
                  m: 4,
                }}
              >
                <Stack direction="row" sx={{ mt: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Not member?
                  </Typography>
                  <a
                    href="#"
                    variant="body2"
                    style={{ textDecoration: "none", marginLeft: "5px" }}
                  >
                    <Typography variant="body2">Create Account</Typography>
                  </a>
                </Stack>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block", md: "block" } }}>
            <Image src={backgroundImage} maxWidth={200} height={500} alt="" />
          </Box>
        </Box>
      </ThemeProvider>
    </Box>
  );
}
