import { CssBaseline, makeStyles } from '@material-ui/core';
import './App.css';
import Header from './components/Header';
import Sidemenu from "./components/SideMenu";

const useStyles=makeStyles({
  appMain:{
    paddingLeft:'320px',
    width:'100%'
  }
})

function App() {
  const classes=useStyles()
  return (
    <>
      <Sidemenu/>
      <div className={classes.appMain}>
        <Header/>
      </div>
      <CssBaseline/>
    </>
  );
}

export default App;
