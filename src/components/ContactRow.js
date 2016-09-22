require('normalize.css');
require('styles/App.css');

import React from 'react';

class ContactRow extends React.Component {
  render() {
    return (
      <tr>
        <td>1,001</td>
        <td>ContactRow</td>
        <td>ipsum</td>
        <td>dolor</td>
        <td>sit</td>
      </tr>
    );
  }
}

ContactRow.defaultProps = {
};

export default ContactRow;
