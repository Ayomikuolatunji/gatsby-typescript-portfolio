import { ResponsiveDrawer, BasicTextFields } from "../../components";
import {
  Typography,
  Button,
  Container,
  CssBaseline,
  Theme,
  Box,
  FormControlLabel,
  Radio,
  Card,
  Avatar,
  IconButton,
  CardHeader,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Masonry from "@mui/lab/Masonry";

type viewport = "lg" | "md" | "sm";

interface types {
  viewport: viewport;
}

const useStyles = makeStyles((theme: Theme) => ({
  btn: {
    padding: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.status.check,
    },
    [theme.breakpoints.down("sm")]: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.status.danger,
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.appColor.light,
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: theme.appColor.success,
      color: theme.appColor.light,
    },
  },
  heading1: {
    fontSize: (note: { textSize: string }) => {
      if (note.textSize) {
        return note.textSize;
      }
    },
  },
}));

export interface inputTypes {
  title: string;
  desc: string;
  radioValue: string;
}

export default function Create({ viewport }: types) {
  const style = useStyles({ textSize: "100px" });
  const [data, setData] = useState([]);
  const [inputData, setInputData] = React.useState<inputTypes>({
    title: "",
    desc: "",
    radioValue: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.type === "radio")
      setInputData({ ...inputData, radioValue: e.currentTarget.value });
    else {
      const { name, value } = e.currentTarget;
      setInputData({ ...inputData, [name]: value });
    }
  };

  useEffect(() => {
    (async function () {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          setData(data?.slice(0, 30));
        });
    })();
  }, []);

  return (
    <ResponsiveDrawer>
      <CssBaseline />
      <Container fixed maxWidth={viewport}>
        <Typography
          variant="h6"
          component="h2"
          color="textSecondary"
          gutterBottom
        >
          Create a new note
        </Typography>
        <BasicTextFields
          inputData={inputData}
          handleChange={handleChange}
          renderRadioGroups={(data) => (
            <>
              <FormControlLabel
                control={<Radio />}
                label="money"
                value="money"
              />
              <FormControlLabel
                control={<Radio />}
                label="Todos"
                value="Todos"
              />
              <FormControlLabel
                control={<Radio />}
                label="Reminder"
                value="Reminder"
              />
              <FormControlLabel control={<Radio />} label="work" value="Work" />
            </>
          )}
        />
        <Button
          type="button"
          variant="contained"
          onClick={() => {
            console.log("You clicked me");
          }}
          className={style.btn}
        >
          Submit
        </Button>
        <Box sx={{ mt: 9, maxWidth: "100%" }}>
          <Masonry
            columns={{ xs: 1, sm: 2, md: 3 }}
            spacing={{ xs: 2, sm: 3, md: 4 }}
          >
            {data?.map((item: { body: string; id: number; title: string }) => {
              return (
                <Card>
                  <CardHeader
                    avatar={
                      <Avatar
                        sx={{ bgcolor: (theme) => theme.appColor.success }}
                        aria-label="recipe"
                      >
                        R
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <DeleteIcon />
                      </IconButton>
                    }
                    title={item.title}
                  />
                </Card>
              );
            })}
          </Masonry>
        </Box>
        <Typography className={style.heading1}>
          texting
        </Typography>
      </Container>
    </ResponsiveDrawer>
  );
}
