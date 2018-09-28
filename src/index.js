import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import HeaderBar from "./appbar/headerBar";
import InputWrapper from "./commons/inputWrapper";
import CRUDItem from "./item/crudItem";
import {
  Toolbar,
  Typography,
  Grid,
  withStyles,
  Button,
  Paper,
  Container,
  Divider
} from "@material-ui/core";

const title = { float: "left", paddingTop: 5 };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.baseStorage = [];
    this.AddItem = this.AddItem.bind(this);
    this.DeleteItem = this.DeleteItem.bind(this);
  }

  SetItem(index, item) {
    let arr = this.state.baseStorage.slice();
    arr[index] = item;
    this.setState({
      baseStorage: arr
    });
  }
  AddItem() {
    let arr = this.state.baseStorage.slice();
    arr.push({
      id: arr.length,
      field: "..."
    });

    this.setState({
      baseStorage: arr
    });
  }

  DeleteItem(item) {
    console.log(`delete called on Id No. ${item.id}`);
    let arr = this.state.baseStorage.slice();
    arr.splice(item.id, 1);
    this.setState({
      baseStorage : arr
    });
  }

  render() {
    const ViewModel = this.state.baseStorage.map(item => {
      return <CRUDItem pick={item} delete={this.DeleteItem} />;
    });

    return (
      <React.Fragment>
        <HeaderBar />
        <div className="App">
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <Typography variant="title" style={title}>
                [Sample]
              </Typography>
              <Button
                onClick={this.AddItem}
                variant="outlined"
                style={{ float: "right" }}
              >
                Add
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            {ViewModel}
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
var AppWrapper = App;
ReactDOM.render(<AppWrapper />, rootElement);
