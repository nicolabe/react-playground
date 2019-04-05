import React, { Component, Fragment } from 'react';
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { Overlay } from './components/Overlay'
import { MainContent } from './components/MainContent'
import { ThemeProvider } from "styled-components"

const theme = {
  primary: "mediumseagreen"
};

class App extends Component {
  state = {
    sidebarOpen: false
  };

  toggleSidebar = () => this.setState({ sidebarOpen: !this.state.sidebarOpen });

  clickOverlay = () => this.setState({ sidebarOpen: false });

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <Navbar toggleSidebar={this.toggleSidebar} />
          <Sidebar isOpen={this.state.sidebarOpen} />
          <Overlay onClick={this.clickOverlay} isOpen={this.state.sidebarOpen} />
          <MainContent />
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
