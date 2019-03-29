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
import TopNavbar from "./components/TopNavbar"
import "./App.css";
require("typeface-qiucksand");

Amplify.configure(awsmobie);

const theme = createMuiTheme({
    typography: { 
        useNextVariants: true,
        fontSize: 16,
        fontFamily: "'Quicksand', sans-serif;"
    },
    palette: {
        primary: {
            //main: "#6200EE"
            //main: '#9c27b0'
            main: '#3700b3'
        }
    }
});

class App extends React.Component {
    componentDidMount() {
        //  this.props.dispatch(thunkCurrentAuthenticatedUser());

    }
}//compomentDidMount( {
    // const { history } = this.props;
    // console.log('history', history );
    //}
})
render() {
    const childProps = {
        authState: this.props.authState
    }
} 
    return (
        <MultiThemeProvider theme={theme}>
        <CssBaseline>
            <TopNavbar />
            <Routes childProps={childProps} />
            <Footer />
            </CssBaseline>
            <MultiThemeProvider>
     >
    )

   handleLogout = () => {};
   }

   const mapStateToProps = state => ({
       authState: state.authState.authState

   });
   export default connect(mapStateToProps)(App);
   //export default withRouter(App)

)