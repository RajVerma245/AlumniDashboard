// DonationPage.jsx
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  LinearProgress,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  IconButton,
  styled,
  Container,
  CircularProgress
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ComputerIcon from "@mui/icons-material/Computer";
import { blue } from "@mui/material/colors";

// Theme Colors
const primaryColor = "#179BA0";
const secondaryColor = "#014DA1";

// Styled Cells / Rows
const StyledTableCell = styled(TableCell)(({ bg }) => ({
  backgroundColor: bg,
  color: bg === primaryColor || bg === secondaryColor ? "#fff" : "#000",
  fontWeight: "bold"
}));

const StyledTableRow = styled(TableRow)({
  "&:hover": { backgroundColor: "#e0f7fa" }
});

const DonationPageForUnauth = () => {
  // ---------- STATE ----------
  const [donors, setDonors] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // ---------- EFFECT: simulate API ----------
  useEffect(() => {
    // Here you'd normally do fetch("/api/donors")…
    setTimeout(() => {
      setDonors([
        { id: 1, name: "Raj", year: "2021", department: "CSE", purpose: "Scholarship", amount: 150000 },
        { id: 2, name: "Alice", year: "2020", department: "IT", purpose: "Scholarship", amount: 120000 },
        { id: 3, name: "Bob", year: "2019", department: "ECE", purpose: "Scholarship", amount: 100000 },
        { id: 4, name: "Raj", year: "2021", department: "CSE", purpose: "Scholarship", amount: 150000 },
        { id: 5, name: "Alice", year: "2020", department: "IT", purpose: "Scholarship", amount: 120000 },
        { id: 6, name: "Bob", year: "2019", department: "ECE", purpose: "Scholarship", amount: 100000 },
        { id: 7, name: "Raj", year: "2021", department: "CSE", purpose: "Scholarship", amount: 150000 },
        { id: 8, name: "Alice", year: "2020", department: "IT", purpose: "Scholarship", amount: 120000 },
        { id: 9, name: "Bob", year: "2019", department: "ECE", purpose: "Scholarship", amount: 100000 },
      ]);
      setCampaigns([
        { id: 1, title: "Emergency Student Fund", category: "Urgent", raised: 4500000, goal: 5000000, duration: "7 days left" },
        { id: 2, title: "Innovation Lab Upgrade", category: "Technology", raised: 1500000, goal: 5000000, duration: "16 days left" },
        { id: 3, title: "Scholarship Program", category: "Ongoing", raised: 1270000, goal: 2500000, duration: "15 days left" }
      ]);
      setLoading(false);
    }, 800); // simulate 0.8s latency
  }, []);

  // ---------- FILTER ----------
  const filteredDonors = donors.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <Box height="50vh" display="flex" alignItems="center" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  // ---------- RENDER ----------
  return (
    <Container maxWidth="lg" sx={{ my: 5 }}>
      {/* Header */}
      <Typography variant="h3" mb={0.5} align="center" color={secondaryColor} fontWeight="bold">
        Donation Page
      </Typography>
      <Typography variant="h6" mb={4} align="center" color={secondaryColor}>
        Make a difference in a student’s life today
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={2} mb={6}>
        {[
          { icon: <AttachMoneyIcon fontSize="large" sx={{ color: primaryColor }} />, title: "₹1,50,000", subtitle: "Fund raised" },
          { icon: <PeopleIcon fontSize="large" sx={{ color: primaryColor }} />, title: "25", subtitle: "Alumni Donors" },
          { icon: <AttachMoneyIcon fontSize="large" sx={{ color: primaryColor }} />, title: "₹2,20,000", subtitle: "This Year" },
          { icon: <SchoolIcon fontSize="large" sx={{ color: primaryColor }} />, title: "89", subtitle: "Scholarships" }
        ].map((item, idx) => (
          <Grid size={{xs:6,sm:6,md:3}} key={idx}>
            <Card sx={{ borderRadius: 2, boxShadow: 3, p: 1 }}>
              <CardContent sx={{ textAlign: "center" }}>
                {item.icon}
                <Typography variant="h6" mt={1}>
                  {item.title}
                </Typography>
                <Typography color="text.secondary">{item.subtitle}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Alumni Donors Table */}
      <Typography variant="h5" mb={2} color={secondaryColor} fontWeight="bold">
        Our Proud Alumni Donors
      </Typography>

      {/* Search */}
      <Box display="flex" mb={2} gap={2}>
        <TextField
          label="Search by donor name"
          variant="outlined"
          size="small"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton
          sx={{
            bgcolor: secondaryColor,
            color: "#fff",
            "&:hover": { bgcolor: blue[800] }
          }}
        >
          <FilterListIcon />
        </IconButton>
      </Box>

      <TableContainer component={Paper} sx={{ mb: 6, boxShadow: 3, borderRadius: 2 }}>
        <Table sx={{ borderCollapse: "collapse" }}>
          <TableHead>
            <TableRow>
              {["Name", "Year", "Department", "Purpose of Donation", "Amount Donated"].map(
                (h) => (
                  <StyledTableCell key={h} bg={primaryColor} sx={{ border: "1px solid #508989ff" }}>
                    {h}
                  </StyledTableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredDonors.map((d) => (
              <StyledTableRow key={d.id}>
                <TableCell sx={{ border: "1px solid #ccc" }}>{d.name}</TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>{d.year}</TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>{d.department}</TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>{d.purpose}</TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>₹{d.amount.toLocaleString()}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Why Your Donation Matters */}
      <Typography variant="h5" color={secondaryColor} mb={3} fontWeight="bold">
        Why Your Donation Matters
      </Typography>
      <Grid container spacing={3} mb={6}>
        {[
          { icon: <AttachMoneyIcon fontSize="large" sx={{ color: primaryColor }} />, title: "Fund Scholarships", desc: "Provide scholarships to deserving students." },
          { icon: <SchoolIcon fontSize="large" sx={{ color: primaryColor }} />, title: "Support Education", desc: "Help create accessible education for all." },
          { icon: <PeopleIcon fontSize="large" sx={{ color: primaryColor }} />, title: "Support Innovation", desc: "Enable students to explore research & innovation." },
          { icon: <ComputerIcon fontSize="large" sx={{ color: primaryColor }} />, title: "Enhance Learning", desc: "Provide modern tech resources to students." }
        ].map((item, idx) => (
          <Grid size={{xs:12,sm:6,md:3}}key={idx}>
            <Card sx={{ borderRadius: 2, boxShadow: 3, p: 2, height: "100%" }}>
              <CardContent sx={{ textAlign: "center" }}>
                {item.icon}
                <Typography variant="h6" mt={1}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Active Campaigns */}
      <Typography variant="h5" mb={3} color={secondaryColor} fontWeight="bold">
        Active Campaigns
      </Typography>
      <Grid container spacing={3}>
        {campaigns.map((c) => {
          const progress = Math.min((c.raised / c.goal) * 100, 100);
          return (
            <Grid size={{xs:12,sm:6,md:4}} key={c.id}>
              <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
                <CardContent>
                  <Typography color={secondaryColor} variant="subtitle2">
                    {c.category}
                  </Typography>
                  <Typography variant="h6" mt={0.5} mb={1}>
                    {c.title}
                  </Typography>

                  <Box mb={1}>
                    <LinearProgress
                      variant="determinate"
                      value={progress}
                      sx={{
                        height: 10,
                        borderRadius: 5,
                        "& .MuiLinearProgress-bar": { bgcolor: secondaryColor }
                      }}
                    />
                    <Typography variant="body2" mt={0.5}>
                      Raised: ₹{c.raised.toLocaleString()} / Goal: ₹{c.goal.toLocaleString()}
                    </Typography>
                  </Box>

                  <Typography variant="body2">{c.duration}</Typography>
                  <Button
                    variant="contained"
                    sx={{ mt: 2, bgcolor: secondaryColor, "&:hover": { bgcolor: blue[800] } }}
                  >
                    Donate Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default DonationPageForUnauth;


// useEffect(() => {
//   fetch("/api/donors")
//     .then(res => res.json())
//     .then(data => setDonors(data))
//     .catch(console.error)
//     .finally(() => setLoading(false));
// }, []);
