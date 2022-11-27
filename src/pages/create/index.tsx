import { ResponsiveDrawer, BasicTextFields } from "@local/components";
import {
  Typography,
  Button,
  Container,
  CssBaseline,
  Theme,
  Box,
  FormControlLabel,
  Radio,
  Grid,
  Paper,
  Card,
  Avatar,
  IconButton,
  CardHeader,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

type viewport = "lg" | "md" | "sm";

interface types {
  viewport: viewport;
}

const useStyles = makeStyles((theme: Theme) => ({
  btn: {
    padding: theme.spacing(1),
    lineHeight:(note:any)=>{
      if(note.textSize ==="16px"){
        return note.textSize
      }
    },
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
}));

export interface inputTypes {
  title: string;
  desc: string;
  radioValue: string;
}

export default function Create({ viewport }: types) {
  const style = useStyles({textSize:"16px"});
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
        <Box sx={{ mt: 9 }}>
          <Grid container spacing={3}>
            {data?.map((item: { body: string; id: number; title: string }) => {
              return (
                <Grid item key={item.id} xs={12} sm={6} md={6} lg={3}>
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
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </ResponsiveDrawer>
  );
}
