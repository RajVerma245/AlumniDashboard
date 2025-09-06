import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Typography,
  Grid,
  Paper,
  IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const DonationForm = () => {
  const navigate = useNavigate();

  const [customAmount, setCustomAmount] = useState("");
  const [purpose, setPurpose] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const predefinedAmounts = [1000, 5000, 10000, 25000];
  const purposes = [
    "Student Scholarships",
    "Lab & Equipment Upgrade",
    "Research & Innovation Support",
    "Campus Development",
  ];

  const handlePredefinedClick = (amount) => {
    setCustomAmount(amount);
    setError("");
  };

  const handleAmountChange = (e) => {
    const val = e.target.value;
    if (val === "" || /^[0-9]+$/.test(val)) {
      setCustomAmount(val);
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customAmount || Number(customAmount) <= 0) {
      setError("Please enter a valid amount");
      return;
    }
    if (!purpose) {
      setError("Please select a purpose");
      return;
    }

    console.log({ customAmount: Number(customAmount), purpose, message });
    alert("Proceeding to payment...");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4, px: 2 }}>
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: 3,
          borderRadius: 3,
          bgcolor: "#fff",
          position: "relative",
        }}
      >
        {/* Cancel / Close */}
        <IconButton
          size="small"
          onClick={() => navigate("/alumni-donation")}
          sx={{ position: "absolute", top: 8, right: 8, color: "grey.700" }}
        >
          <CloseIcon />
        </IconButton>

        <Typography
          variant="h5"
          textAlign="center"
          // fontWeight="bold"
          color="primary"
          mb={3}
        >
          Make a Donation
        </Typography>

        {/* Amount Section */}
        <Typography variant="subtitle2" fontWeight={550} mb={1}>
          Custom Amount (INR) *
        </Typography>
        <Grid container spacing={1} mb={2}>
          {predefinedAmounts.map((amount) => (
            <Grid size={{xs:6}} key={amount}>
              <Button
                fullWidth
                variant={Number(customAmount) === amount ? "contained" : "outlined"}
                color={Number(customAmount) === amount ? "primary" : "inherit"}
                onClick={() => handlePredefinedClick(amount)}
                sx={{
                  textTransform: "none",
                  borderRadius: 2,
                  py: 1,
                  fontWeight: 550,
                  "&:hover": {
                    bgcolor:
                      Number(customAmount) === amount ? "primary.dark" : "grey.100",
                  },
                }}
              >
                ₹{amount.toLocaleString()}
              </Button>
            </Grid>
          ))}
        </Grid>

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter custom amount"
          type="number"
          value={customAmount}
          onChange={handleAmountChange}
          error={Boolean(error) && error.includes("amount")}
          helperText={error.includes("amount") ? error : ""}
          sx={{ mb: 3 }}
        />

        {/* Purpose */}
        <Typography variant="subtitle2" fontWeight={550} mb={1}>
          Purpose *
        </Typography>
        <TextField
          select
          fullWidth
          variant="outlined"
          value={purpose}
          onChange={(e) => {
            setPurpose(e.target.value);
            setError("");
          }}
          error={Boolean(error) && error.includes("purpose")}
          helperText={error.includes("purpose") ? error : ""}
          sx={{ mb: 3 }}
        >
          {purposes.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        {/* Message */}
        <Typography variant="subtitle2" fontWeight={550} mb={1}>
          Message (Optional)
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={3}
          placeholder="Add a message for us (optional)"
          variant="outlined"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ mb: 3 }}
        />

        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          sx={{
            bgcolor: "#f57c00",
            textTransform: "none",
            fontWeight: 550,
            py: 1.2,
            borderRadius: 2,
            "&:hover": { bgcolor: "#ef6c00" },
          }}
        >
          Proceed to Payment
        </Button>
      </Paper>
    </Box>
  );
};

export default DonationForm;
