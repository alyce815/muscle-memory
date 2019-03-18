import React from "react";
import Amplify from "aws-amplify";
import { MuiThemeProvider, createNuiTheme } from "@meterial-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { connect } from "react-redux";
// import { withRouter } from 'react-router-dom';
import Routes from "./Routes";
import awsmobile from "./aws-exports";
// imports { thunkCurrentAuthenticatedUser } from "./thunks/auth";
import Footer from "./components/Footer";