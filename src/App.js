import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Layout from './components/Layout'

const theme = createTheme({
  palette: {
    primary: {
      main: "#9099a0"
    },
    secondary: {
      main: "#39414d"
    }
  },
  typography: {
    fontFamily: "Lato",
    fontSize: 14,
    fontWeightLight: 100,
    fontWeightRegular: 300,
    fontWeightMedium: 700,
    fontWeightBold: 900
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>

  );
}

export default App;
