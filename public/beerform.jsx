class BeerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'all'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('The type of beer you want to see is: ' + this.state.value);
    event.preventDefault();
    $.get(`/${this.state.value}`, function(data) {
      console.log(data);
       data.forEach(function(beer) {
        var info = {
          name: beer.name,
          abv: beer.abv,
          brewery: beer.breweries[0].name,
          website: beer.breweries[0].website,
          style: beer.style.name
        }
        console.log(info);
       });
     });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick the type of beer you'd like to drink:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="/all">All</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

window.BeerForm = BeerForm;