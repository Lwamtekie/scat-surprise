import React from 'react';
import ScatData from '../../helpers/Data/scats';
import './SingleScat.scss';


class SingleScat extends React.Component {
  state = {
    scat: {},
  }

  componentDidMount() {
    const scatId = this.props.match.params.id;
    ScatData.getSingleScat(scatId)
      .then(scatPromise => this.setState({ scat: scatPromise.data }))
      .catch(err => console.error('unable to get single scat', err));
  }

  deleteScat = () => {
    const scatId = this.props.match.params.id;
    ScatData.deleteScat(scatId)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('unable to delete', err));
  }


  render() {
    const { scat } = this.state;
    return (
     <div className="SingleScat">
       <h1>{scat.sampleNum}</h1>
       <h1>{scat.location}</h1>
       <h1>{scat.color}</h1>
       <h1>{scat.weight}</h1>
       <h1>{scat.Animal}</h1>
       <button className="btn btn-danger" onClick={this.deleteScat}>Delete</button>
     </div>
    );
  }
}
export default SingleScat;
