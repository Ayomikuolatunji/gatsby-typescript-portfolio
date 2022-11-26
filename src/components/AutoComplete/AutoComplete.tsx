import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface item {
  title: string;
  year: number;
}



interface Grouped {
  top100Films: Array<item>;
  width: string;
}

export default function Grouped({ top100Films, width }: Grouped) {
  const options = top100Films.map((option: item) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      id="grouped-demo"
      options={options.sort(
        (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
      )}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField {...params} label="With categories" />
      )}
      sx={{ width: width }}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
