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
    alert('The type of beer you want to see is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick the type of beer you'd like to drink:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="all">All</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

window.BeerForm = BeerForm;