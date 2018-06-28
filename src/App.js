import React, { Component } from 'react';
import { Layout, AppBar, Footer } from './components';
import { ContentContainer } from './containers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

//> 960 is desktop
class CurrencyConverter extends Component {
    render() {
        return (
            <Provider store={store}>
            <Layout>
                <AppBar />
                    <ContentContainer { ...this.props } />
                <Footer />
            </Layout>
            </Provider>
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