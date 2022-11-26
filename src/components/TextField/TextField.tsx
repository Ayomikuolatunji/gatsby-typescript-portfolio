import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { inputTypes } from "../../pages/create/create";

const useStyles = makeStyles((theme: Theme) => ({
  inputStyles: {
    marginBottom: theme.spacing(2 * 2),
  },
}));

interface propData {
  inputData: inputTypes;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function BasicTextFields({ inputData, handleChange }: propData) {
  const styles = useStyles();

  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        variant="outlined"
        placeholder="Enter note title"
        required
        fullWidth
        name="title"
        value={inputData.title}
        color="primary"
        onChange={handleChange}
        className={styles.inputStyles}
        sx={{ display: "block" }}
      />
      <TextField
        id="outlined-desc"
        variant="outlined"
        placeholder="Enter note description"
        required
        fullWidth
        multiline
        name="desc"
        value={inputData.desc}
        color="secondary"
        rows={4}
        onChange={handleChange}
        className={styles.inputStyles}
        sx={{ display: "block" }}
      />
    </Box>
  );
}
