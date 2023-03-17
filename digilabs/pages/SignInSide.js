import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import backgroundImage from "../public/images/maincard.png";
import Image from "next/image";

const theme = createTheme();

export default function SignInSide() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
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

        <Box
          sx={{
            maxWidth: "300px",
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
            sx={{ fontWeight: "bold", maxWidth: "150px" }}
          >
            Welcome to Systempackage
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              sx={{ backgroundColor: "#F2F2F3", borderRadius: "8px" }}
              fullWidth
              size="small"
              variant="standard"
              id="name"
              //   label="Email Address"
              name="name"
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <FormControl sx={{ m: 1, minWidth: 150 }}>
                    <Select
                      size="small"
                      value={age}
                      disableUnderline
                      variant="standard"
                      onChange={handleChange}
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "8px ",
                        p: 1,
                      }}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>@heads.design</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                ),
              }}
              autoComplete="email"
              autoFocus
            />
            <TextField
              sx={{ backgroundColor: "#F2F2F3", borderRadius: "8px", p: 1 }}
              margin="normal"
              required
              size="small"
              fullWidth
              name="password"
              //   label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              variant="standard"
              InputProps={{
                endAdornment: (
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
                disableUnderline: true,
              }}
              autoComplete="current-password"
            />

            <Link href="/sign-v2" style={{ textDecoration: "none" }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  p: 1.5,
                  mt: 2,
                  backgroundColor: "#0858F7",
                  borderRadius: "12px",
                }}
              >
                Next
              </Button>
            </Link>
            <Grid container justifyContent="center" mt={2}>
              <Grid item>
                <a
                  href="#"
                  variant="body2"
                  style={{ fontWeight: "bold", textDecoration: "none" }}
                >
                  Forgot your password?
                </a>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ position: 'absolute', bottom: 40 }}>
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
                top: 15,
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
  );
}
