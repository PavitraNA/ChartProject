import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import BarChart from "./BarChart";
import DonutChart from "./DonutChart";
import PieChart from "./PieChart";
import DateRangeExample from "./DateRangeExample";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};



export default function SimpleTabs() {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Page One" />
          <Tab label="Page Two" />
          <Tab label="Page Three" />
        </Tabs>
      </AppBar>
      <DateRangeExample />
      {value === 0 && <TabContainer><BarChart /></TabContainer>}
      {value === 1 && <TabContainer><DonutChart /></TabContainer>}
      {value === 2 && <TabContainer><PieChart /></TabContainer>}
    </div>
  );
}
