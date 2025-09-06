// src/pages/YourDonations.jsx
import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Stack,
  Chip,
  useTheme
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EventIcon from "@mui/icons-material/Event";
import { useNavigate } from "react-router-dom";

const donations = [
  { id: 1, date: "01/07/2025", title: "Scholarship fund", amount: "₹ 20,000" },
  { id: 2, date: "01/07/2025", title: "Scholarship fund", amount: "₹ 20,000" },
  { id: 3, date: "01/07/2025", title: "Scholarship fund", amount: "₹ 20,000" },
  { id: 4, date: "01/07/2025", title: "Scholarship fund", amount: "₹ 20,000" },
  { id: 5, date: "01/07/2025", title: "Scholarship fund", amount: "₹ 20,000" }
];

export default function YourDonations() {
  const navigate = useNavigate();
  const theme = useTheme();
  const primary = "#1976d2";
  const accent = "#f57c00";

  return (
     <Box sx={{ px: 3, py: 4, maxWidth: 1000, mx: "auto" }}>

        <Stack direction="row" spacing={2} mb={2}>
            <Chip label="General"  onClick={() => navigate("/alumni-donation")} variant="outlined"/>
            <Chip label="Your Donations" color="warning" />
            <Chip label="All Donations" onClick={() => navigate("/all-donations")} variant="outlined"/>
        </Stack>
      

      {/* Profile Section */}
      <Paper
        elevation={3}
        sx={{
          p: 3,
          mt:6,
          display: "flex",
          justifyContent: "space-between",
          borderRadius: 3,
          background: "linear-gradient(135deg, #e3f2fd, #ffffff)"
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <AccountCircleIcon sx={{ fontSize: 48, color: primary }} />
          <Box>
            <Typography fontWeight={700} fontSize={18}>
              Ajay Sharma
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Class of 2022
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Computer Science
            </Typography>
          </Box>
        </Stack>
        <Box textAlign="right">
          <Typography fontWeight={700} fontSize={18}>
            ₹ 10,00,000
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Total Contribution
          </Typography>
        </Box>
      </Paper>

      {/* Donate Button */}
      <Box textAlign="center" sx={{ my: 4 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: accent,
            fontSize: 16,
            borderRadius: 3,
            px: 5,
            py: 1.2,
            textTransform: "none",
            fontWeight: 600,
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            ":hover": { backgroundColor: "#ef6c00", boxShadow: "0px 6px 14px rgba(0,0,0,0.3)" }
          }}
        >
          Donate Now
        </Button>
      </Box>

      {/* History Section */}
      <Stack direction="row" alignItems="center" spacing={1} mb={3}>
        <EventIcon sx={{ color: primary }} />
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ color: primary, letterSpacing: 0.3 }}
        >
          Your Donation History
        </Typography>
      </Stack>

      {/* Donation Cards */}
      <Grid container direction="column" spacing={2}>
        {donations.map((d) => (
          <Grid item key={d.id}>
            <Paper
              elevation={2}
              sx={{
                p: 2.5,
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                borderRadius: 2,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.15)"
                }
              }}
            >
              <Box>
                <Typography fontSize={13} color="text.secondary">
                  {d.date}
                </Typography>
                <Typography fontWeight={600} fontSize={15}>
                  {d.title}
                </Typography>
                <Chip
                  label="Successful"
                  size="small"
                  sx={{
                    backgroundColor: primary,
                    color: "#fff",
                    fontSize: 12,
                    mt: 1,
                    fontWeight: 500
                  }}
                />
              </Box>
              <Stack alignItems="flex-end" justifyContent="space-between" spacing={1}>
                <Typography fontWeight={700} fontSize={15}>
                  {d.amount}
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: "#0097a7",
                    textTransform: "none",
                    fontSize: 13,
                    borderRadius: 2,
                    fontWeight: 500,
                    ":hover": { backgroundColor: "#00838f" }
                  }}
                >
                  Details
                </Button>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
