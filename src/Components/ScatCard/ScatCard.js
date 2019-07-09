import React from 'react';

class ScatCard extends React.Component {
  render() {
    const { scat } = this.props;
    return (
  <div className="ScatCard">
    <div class="card">
    <div class="card-body">
    <h5 class="card-title">{scat.sampleNum}</h5>
    <p class="card-text">{scat.location}</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
    <h2>{scat.sampleNum}</h2>
  </div>

    );
  }
}

export default ScatCard;
