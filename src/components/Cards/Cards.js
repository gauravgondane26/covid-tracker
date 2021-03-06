import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import moment from "moment";
import cx from "classnames";
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" gutterBottom>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={1.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {moment(lastUpdate).format("ddd, MMM Do YYYY")}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Number of active cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" gutterBottom>
              <CountUp
                start={0}
                end={recovered.value}
                duration={1.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {moment(lastUpdate).format("ddd, MMM Do YYYY")}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Number of recoveries from Covid-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" gutterBottom>
              <CountUp
                start={0}
                end={deaths.value}
                duration={1.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {moment(lastUpdate).format("ddd, MMM Do YYYY")}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Number of deaths caused by Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
