import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Routes from './components/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
  uri: "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="container">
      <nav className="navbar navbar-dark bg-primary" style={{color: "white"}}>
        <h4>Timetable Application</h4>
      </nav>
      <div>
        <Routes />
      </div>
    </div>
  </ApolloProvider>
  );
}

export default App;
