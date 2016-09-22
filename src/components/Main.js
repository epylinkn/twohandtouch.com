require('normalize.css');
require('styles/App.css');

import React from 'react';
import ContactRow from './ContactRow'

class AppComponent extends React.Component {
  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <ContactRow />
        </tbody>
      </table>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
