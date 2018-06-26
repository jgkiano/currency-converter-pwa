import React, { Component } from 'react';
import { Layout, AppBar, Footer, ContentContainer } from './components';

class App extends Component {
    render() {
        return (
            <Layout>
                <AppBar />
                    <ContentContainer />
                <Footer />
            </Layout>
        );
    }
}

export default App;