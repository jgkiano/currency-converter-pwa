import React, { Component } from 'react';
import { Layout, AppBar, Footer } from './components';
import { ContentContainer } from './containers';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class CurrencyConverter extends Component {
    render() {
        return (
            <Layout>
                <AppBar />
                    <ContentContainer { ...this.props } />
                <Footer />
            </Layout>
        );
    }
}

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="*" component={CurrencyConverter}/>
            </Router>
        );
    }
}


export default App;