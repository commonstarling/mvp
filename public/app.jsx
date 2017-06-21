var testData = {abv: 4.5, name: 'Moonlight White Wheat', breweries: [{name: 'Sycamore Brewing', website: 'http://sycamorebrew.com/ageverification?url=http://sycamorebrew.com/about-1/'}], style:{name: 'Lager'}};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'all',
                  beers: [testData]
                  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('The type of beer you want to see is: ' + this.state.value);
    console.log('here is the event ', event);
    $.get(`/${this.state.value}`, (data) => {
      this.setState({beers: data});
      console.log('props ===== ', this.state.beers);
     });
  }

  render() {
    return (
      <section>
        <div className='divider' id='search'>
          <form onSubmit={this.handleSubmit}>
            <label>
              Pick the type of beer you'd like to drink:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="all">All</option>
                <option value="AmericanIPAs">American-Style IPAs</option>
                <option value="cider">Ciders</option>
                <option value="Dortmunder">Dortmunders</option>
                <option value="ScotchAle">Scotch Ales</option>
                <option value="BelgianFrench">Belgian/French Ales</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div id='list-view'><BeerListView beers={this.state.beers}/></div>
      </section>
    );
  }
}

window.App = App;