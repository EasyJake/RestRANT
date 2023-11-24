const React = require('react');
const DefaultLayout = require('../default');

class Edit extends React.Component {
  render() {
    const { place } = this.props;
    return (
      <DefaultLayout>
        <h1>Edit {place.name}</h1>
        <form action={`/places/${place._id}?_method=PUT`} method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input className="form-control" id="name" name="name" type="text" defaultValue={place.name} required />
          </div>
          <div className="form-group">
            <label htmlFor="pic">Picture URL</label>
            <input className="form-control" id="pic" name="pic" type="text" defaultValue={place.pic || '/images/default.jpg'} />
          </div>
          <div className="form-group">
            <label htmlFor="cuisines">Cuisines</label>
            <input className="form-control" id="cuisines" name="cuisines" type="text" defaultValue={place.cuisines} required />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input className="form-control" id="city" name="city" type="text" defaultValue={place.city} />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input className="form-control" id="state" name="state" type="text" defaultValue={place.state} />
          </div>
          <div className="form-group">
            <label htmlFor="founded">Founded Year</label>
            <input className="form-control" id="founded" name="founded" type="number" defaultValue={place.founded} min="1673" max={new Date().getFullYear()} />
          </div>
          <button type="submit" className="btn btn-primary">Update Place</button>
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = Edit;
