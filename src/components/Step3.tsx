import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export default function Step3() {
  return (
    <div className="h-48">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Assigned To
          </InputLabel>
          <NativeSelect
            defaultValue={20}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
          >
            <option value={10}>Enock James</option>
            <option value={20}>Collins Ngetich</option>
            <option value={30}>Brian Ndegwa</option>
            <option value={40}>Abraham Wafula</option>
          </NativeSelect>
        </FormControl>
      </Box>
    </div>
  );
}
