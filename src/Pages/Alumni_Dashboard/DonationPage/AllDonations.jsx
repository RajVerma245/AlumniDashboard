import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Typography,
  Stack,
  Divider,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  InputAdornment,
  Button,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import BusinessIcon from "@mui/icons-material/Business";
import WorkIcon from "@mui/icons-material/Work";
import { useNavigate } from "react-router-dom";

// ----- Dummy donor data -----
const donors = [
  {
    name: "Mr IronMan",
    year: "Class of 2022",
    company: "ConnectWise",
    role: "SDE",
    contribution: "₹1,50,000",
    desc: "Software Developer Engineer passionate about education and mentoring student.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Mr IronMan",
    year: "Class of 2022",
    company: "ConnectWise",
    role: "SDE",
    contribution: "₹1,50,000",
    desc: "Software Developer Engineer passionate about education and mentoring student.",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Mr IronMan",
    year: "Class of 2022",
    company: "ConnectWise",
    role: "SDE",
    contribution: "₹1,50,000",
    desc: "Software Developer Engineer passionate about education and mentoring student.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Mr IronMan",
    year: "Class of 2022",
    company: "ConnectWise",
    role: "SDE",
    contribution: "₹1,50,000",
    desc: "Software Developer Engineer passionate about education and mentoring student.",
    avatar: "https://i.pravatar.cc/150?img=6",
  },
  {
    name: "Mr IronMan",
    year: "Class of 2022",
    company: "ConnectWise",
    role: "SDE",
    contribution: "₹1,50,000",
    desc: "Software Developer Engineer passionate about education and mentoring student.",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
  {
    name: "Mr IronMan",
    year: "Class of 2022",
    company: "ConnectWise",
    role: "SDE",
    contribution: "₹1,50,000",
    desc: "Software Developer Engineer passionate about education and mentoring student.",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
];

const alumni = Array(10).fill({
  name: "Lorem",
  year: "Lorem",
  dept: "Lorem",
  purpose: "Scholarship",
  amount: "₹150000",
});

export default function AllDonations() {
  const navigate = useNavigate();

  return (
    <Box sx={{ px: 3, py: 4, maxWidth: 1000, mx: "auto" }}>
      {/* Nav chips */}
     <Stack direction="row" spacing={2} mb={2}>
        <Chip label="General"  onClick={() => navigate("/your-donations")} variant="outlined"/>
        <Chip
        label="Your Donations"
        onClick={() => navigate("/your-donations")}
        variant="outlined"
        />
        <Chip
        label="All Donations"     
        color="warning"   
        />
    </Stack>
      {/* -------- Top Donors -------- */}
       <Box mt={6}>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="primary"
            textAlign="center"
            mb={3}
          >
            Top Donors
          </Typography>

        <Grid container spacing={3} justifyContent={"center"}>
          {donors.map((donor, index) => (
            <Grid size={{xs:12,sm:6,md:4}} key={index}>
              <Card
                elevation={3}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  // maxWidth:{xs: 250, sm: 300, md: 360},
                  height: "100%",
                  "&:hover": { boxShadow: 6, transform: "translateY(-3px)" },
                  transition: "all 0.3s",
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar
                    src={donor.avatar}
                    alt={donor.name}
                    sx={{ bgcolor: "#1976d2", width: 56, height: 56 }}
                  />
                  <Box>
                    <Typography fontWeight="bold">{donor.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {donor.year}
                    </Typography>
                  </Box>
                </Stack>

                <CardContent sx={{ px: 0 }}>
                  <Typography
                    variant="h6"
                    mt={1}
                    color="success.main"
                    fontWeight="bold"
                  >
                    {donor.contribution}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1} mt={1}>
                    <BusinessIcon color="action" fontSize="small" />
                    <Typography variant="body2">{donor.company}</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <WorkIcon color="action" fontSize="small" />
                    <Typography variant="body2">{donor.role}</Typography>
                  </Stack>
                  <Divider sx={{ my: 1 }} />
                  <Typography variant="body2" color="text.secondary">
                    “{donor.desc}”
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* -------- Alumni Table -------- */}
      <Box mt={6}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
          textAlign="center"
          mb={3}
        >
          Our Proud Alumni Donors
        </Typography>

        {/* Search & Filter */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ xs: "stretch", sm: "center" }}
          overflowX="hidden"
          mb={2}
        >
          <TextField
            placeholder="Search by donor name"
            size="small"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ width: { xs: "100%", sm: 450 } }}
          />
          <Button
            startIcon={<FilterListIcon />}
            variant="outlined"
            sx={{ textTransform: "none" }}
          >
            Filter
          </Button>
        </Stack>

        {/* Table with horizontal scroll */}
        <TableContainer
          component={Paper}
          sx={{
            mb: 6,
            boxShadow: 3,
            borderRadius: 2,
            overflowX: "auto",         // key: allow side scroll
          }}
        >
          <Table sx={{ minWidth: 800, borderCollapse: "collapse" }}>
            <TableHead>
              <TableRow sx={{ bgcolor: "#00838f" }}>
                {["Name", "Year", "Department", "Purpose of Donation", "Amount Donated"].map(
                  (header, idx) => (
                    <TableCell
                      key={idx}
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        border: "1px solid #508989ff",
                        whiteSpace: "nowrap", // keep each column from wrapping
                      }}
                    >
                      {header}
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {alumni.map((row, idx) => (
                <TableRow key={idx} hover>
                  <TableCell sx={{ border: "1px solid #ccc" }}>{row.name}</TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>{row.year}</TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>{row.dept}</TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>{row.purpose}</TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>{row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

    </Box>
  );
}
