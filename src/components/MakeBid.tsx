// Import necessary libraries
import React, { useState, useEffect } from "react";
import { Autocomplete, TextField, Button, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import axios from "axios";
import Typography from "@mui/material/Typography";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
interface MyData {
  _id: string;
  tenderNo: string;
  tenderDescription: string;
  client: string;
  siteVisitDate: Date;
  timeExtension: number;
  bidSecurity: number;
  bidSourceInsurance: string;
  closingDateTime: Date;
  location: string;
  tenderValueDollars: number;
  tenderValueKsh: number;
  dollarRate: number;
  company: string;
  tenderStatus: string;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#800000",
    },
    secondary: {
      main: "#510000",
    },
  },
});

const tomorrow = dayjs().subtract(-1, "day");

const MakeBid: React.FC = () => {
  const [data, setData] = useState<MyData[]>([]);
  const [selectedData, setSelectedData] = useState<MyData | null>(null);

  useEffect(() => {
    // Fetch your data from the Express API and set it to the state
    const fetchData = async () => {
      try {
        const response = await axios.get<MyData[]>(
          "https://tenderpoa.onrender.com/api/tenders"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching tender:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async (value: string) => {
    // Implement your search logic here
    const searchResults = data.filter((item) =>
      item.tenderNo.toUpperCase().includes(value.toUpperCase())
    );

    // Set the search results to the Autocomplete component
    setData(searchResults);
  };

  const handleUpdate = async () => {
    if (!selectedData) {
      console.error("No tender selected");
      return;
    }

    try {
      // Implement your API update logic here
      await axios.put(
        `https://tenderpoa.onrender.com/api/tenders/${selectedData._id}`,
        {
          tenderNo: selectedData.tenderNo,
          tenderDescription: selectedData.tenderDescription,
          client: selectedData.client,
          siteVisitDate: selectedData.siteVisitDate,
          timeExtension: selectedData.timeExtension,
          bidSecurity: selectedData.bidSecurity,
          bidSourceInsurance: selectedData.bidSourceInsurance,
          closingDateTime: selectedData.closingDateTime,
          location: selectedData.location,
          tenderValueDollars: selectedData.tenderValueDollars,
          dollarRate: selectedData.dollarRate,
          tenderValueKsh: selectedData.tenderValueKsh,
          company: selectedData.company,
          tenderStatus: selectedData.tenderStatus,
        }
      );

      // Optional: Fetch updated data from the API and update the local state
      const response = await axios.get<MyData[]>(
        "https://tenderpoa.onrender.com/api/tenders"
      );
      setData(response.data);

      // Reset the selected data
      setSelectedData(null);

      console.log("Tender updated successfully");
    } catch (error) {
      console.error("Error updating tender:", error);
    }
  };

  return (
    <div className="flex justify-center bg-[#eeeeee] h-auto">
      <div className="flex h-auto lg:w-2/3 w-screen sm:w-1/2 py-6 mt-6 mb-6">
        <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
          <ThemeProvider theme={theme}>
            <Paper
              variant="outlined"
              sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
            >
              <Typography
                component="h1"
                variant="h4"
                align="center"
                color="primary"
              >
                Make a Bid
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Autocomplete
                      options={data}
                      getOptionLabel={(option) => option.tenderNo}
                      onChange={(_, value) => setSelectedData(value)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Search"
                          variant="outlined"
                          onChange={(e) => handleSearch(e.target.value)}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} columnSpacing={3}>
                    {/* Display selected data fields for updating */}
                    {selectedData && (
                      <>
                        <TextField
                          label="tenderNo"
                          variant="outlined"
                          value={selectedData.tenderNo}
                          onChange={(e) =>
                            setSelectedData((prev) => ({
                              ...prev!,
                              tenderNo: e.target.value,
                            }))
                          }
                        />

                        <TextField
                          label="tenderDescription"
                          variant="outlined"
                          value={selectedData.tenderDescription}
                          onChange={(e) =>
                            setSelectedData((prev) => ({
                              ...prev!,
                              tenderDescription: e.target.value,
                            }))
                          }
                        />

                        {/* Add more fields as needed */}
                        <TextField
                          label="client"
                          variant="outlined"
                          value={selectedData.client}
                          onChange={(e) =>
                            setSelectedData((prev) => ({
                              ...prev!,
                              client: e.target.value,
                            }))
                          }
                        />
                        <DatePicker
                          format="DD/MM/YYYY"
                          label="site visit date"
                          defaultValue={tomorrow}
                          disablePast
                          views={["year", "month", "day"]}
                        />

                        <TextField
                          label="timeExtension"
                          variant="outlined"
                          value={selectedData.timeExtension}
                          onChange={(e) =>
                            setSelectedData((prev) => ({
                              ...prev!,
                              timeExtension: Number(e.target.value),
                            }))
                          }
                        />
                        <TextField
                          label="bidSecurity"
                          variant="outlined"
                          value={selectedData.bidSecurity}
                          onChange={(e) =>
                            setSelectedData((prev) => ({
                              ...prev!,
                              field2: e.target.value,
                            }))
                          }
                        />
                        <TextField
                          label="bidSourceInsurance"
                          variant="outlined"
                          value={selectedData.bidSourceInsurance}
                          onChange={(e) =>
                            setSelectedData((prev) => ({
                              ...prev!,
                              bidSourceInsurance: e.target.value,
                            }))
                          }
                        />
                        <DateTimePicker
                          label="closing date & time"
                          format="DD/MM/YYYY hh:mm A"
                          defaultValue={tomorrow}
                          disablePast
                          views={["year", "month", "day", "hours", "minutes"]}
                        />
                        <TextField
                          label="location"
                          variant="outlined"
                          value={selectedData.location}
                          onChange={(e) =>
                            setSelectedData((prev) => ({
                              ...prev!,
                              location: e.target.value,
                            }))
                          }
                        />
                        <TextField
                          type="number"
                          label="tenderValueDollars"
                          variant="outlined"
                          value={selectedData.tenderValueDollars}
                          onChange={(e) =>
                            setSelectedData((prev) => ({
                              ...prev!,
                              tenderValueDollars: Number(e.target.value),
                            }))
                          }
                        />
                        <TextField
                          label="dollarRate"
                          type="number"
                          variant="outlined"
                          value={selectedData.dollarRate}
                          onChange={(e) =>
                            setSelectedData((prev) => ({
                              ...prev!,
                              dollarRate: Number(e.target.value),
                            }))
                          }
                        />
                        <TextField
                          label="tenderValueKsh"
                          type="number"
                          variant="outlined"
                          value={selectedData.tenderValueKsh}
                          onChange={(e) =>
                            setSelectedData((prev) => ({
                              ...prev!,
                              tenderValueKsh: Number(e.target.value),
                            }))
                          }
                        />
                        <TextField
                          label="company"
                          variant="outlined"
                          value={selectedData.company}
                          onChange={(e) =>
                            setSelectedData((prev) => ({
                              ...prev!,
                              company: e.target.value,
                            }))
                          }
                        />
                        <TextField
                          label="tenderStatus"
                          variant="outlined"
                          value={selectedData.tenderStatus}
                          onChange={(e) =>
                            setSelectedData((prev) => ({
                              ...prev!,
                              tenderStatus: e.target.value,
                            }))
                          }
                        />
                      </>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleUpdate}
                    >
                      Update
                    </Button>
                  </Grid>
                </Grid>
              </LocalizationProvider>
            </Paper>
          </ThemeProvider>
        </Container>
      </div>
    </div>
  );
};

export default MakeBid;
