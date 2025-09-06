// AlumniDonationPage.jsx
import { useNavigate } from "react-router-dom";
import React from "react";
import {
  Box,
  Button,
  Divider,
  Typography,
  Paper,
  Stack,
  Chip,
  Grid,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";

const orange = "#f57c00";
const blue = "#014DA1"; // match screenshot

const donationYearData = [
  { year: "2021", amount: 30000 },
  { year: "2022", amount: 50000 },
  { year: "2023", amount: 40000 },
  { year: "2024", amount: 60000 },
];

const departmentData = [
  { name: "CSE", value: 33, color: "#1565c0" },
  { name: "CE", value: 28, color: orange },
  { name: "IT", value: 15, color: "#42a5f5" },
  { name: "AIDS", value: 12, color: "#2e7d32" },
  { name: "AIML", value: 12, color: "#64b5f6" },
];

export default function AlumniDonationPage() {
  const navigate = useNavigate();

  return (
     <Box sx={{ px: 3, py: 4, maxWidth: 1000, mx: "auto" }}>
      {/* Nav Tabs */}
      <Stack direction="row" spacing={2} mb={2}>
        <Chip label="General" color="warning" />
        <Chip
          label="Your Donations"
          onClick={() => navigate("/your-donations")}
          variant="outlined"
        />
        <Chip
          label="All Donations"
          onClick={() => navigate("/all-donations")}
          variant="outlined"
        />
      </Stack>

      {/* ===== TOP HEADER (MATCH SCREENSHOT) ===== */}
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight="bold"
        color={blue}
        mb={0.5}
      >
        Donation Page
      </Typography>
      <Typography textAlign="center" variant="body1" color="text.secondary" mb={3}>
        Make a difference in a student's life today
      </Typography>

      {/* Four Stat Cards */}
      <Grid container spacing={2} justifyContent="center" mb={5}>
        {[
          { icon: <AttachMoneyIcon sx={{ color: "#179BA0", fontSize: 28 }} />, value: "₹1,50,000", label: "Fund raised" },
          { icon: <PeopleIcon sx={{ color: "#179BA0", fontSize: 28 }} />, value: "25", label: "Alumni Donors" },
          { icon: <AttachMoneyIcon sx={{ color: "#179BA0", fontSize: 28 }} />, value: "₹2,20,000", label: "This Year" },
          { icon: <SchoolIcon sx={{ color: "#179BA0", fontSize: 28 }} />, value: "89", label: "Scholarships" },
        ].map((item, idx) => (
          <Grid size={{xs:12,sm:6,md:3}} key={idx}>
            <Paper
              elevation={3}
              sx={{
                textAlign: "center",
                py: 2.5,
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {item.icon}
              <Typography variant="h6" fontWeight="600" mt={1}>
                {item.value}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      {/* ===== END HEADER ===== */}

      {/* Donate Button */}
      <Box textAlign="center" mb={4}>
        <Button
          variant="contained"
          onClick={() => navigate("/donationform")}
          sx={{
            background: orange,
            textTransform: "none",
            fontWeight: 600,
            px: 4,
            py: 1.2,
            "&:hover": { background: "#ef6c00" },
          }}
        >
          Donate Now
        </Button>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Bar Chart */}
      <Typography variant="h5" fontWeight="bold" color={blue} mb={2}>
        Donation by Year
      </Typography>
      <Paper elevation={2} sx={{ p: 2, mb: 5 }}>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={donationYearData}>
            <XAxis dataKey="year" />
            <YAxis tickFormatter={(val) => `₹${val / 1000}k`} />
            <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, "Amount"]} />
            <Bar dataKey="amount" fill={orange} radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Paper>

      {/* Pie Chart */}
      <Typography variant="h5" fontWeight="bold" color={blue} mb={2}>
        Donation by Department
      </Typography>
      <Paper elevation={2} sx={{ p: 2 }}>
        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie
              data={departmentData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              label
            >
              {departmentData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
}
