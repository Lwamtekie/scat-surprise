import React from 'react';
import './EditScat.scss';

class EditScat extends React.Component {
  render() {
    const editedId = this.props.match.params.id;
    return (
     <div className="Home">
       <h1>Edit Scat</h1>
       <h2>The editedId is {editedId}</h2>
     </div>
    );
  }
}
export default EditScat;
