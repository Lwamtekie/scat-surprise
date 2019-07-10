import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import scatShapes from '../../helpers/propz/scatShapes';

class ScatCard extends React.Component {
  static propTypes = {
    scat: scatShapes.scatCardShape,
    deleteScat: PropTypes.func.isRequired,
  }

 deleteMe = (e) => {
   e.preventDefault();
   const { deleteScat } = this.props;
   deleteScat(this.props.scat.id);
 }


 render() {
   const { scat } = this.props;
   const editLink = `/edit/${scat.id}`;
   const singleLink = `/scat/${scat.id}`;
   return (
  <div className="ScatCard">
    <div className="card">
    <div className="card-body">
<h5 className="card-title">{scat.sampleNum}</h5>
<Link className="btn btn-success" to={singleLink}>View</Link>
<p className="card-text">{scat.location}</p>
<Link className="btn btn-primary" to={editLink}>Edit</Link>
<button className="btn btn-danger" onClick={this.deleteMe}>Delete</button>
  </div>
</div>
    <h2>{scat.sampleNum}</h2>
  </div>

   );
 }
}

export default ScatCard;
