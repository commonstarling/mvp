class BeerEntry extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      expandedBeer: false,
    }
    this.toggleBeerEntry = this.toggleBeerEntry.bind(this);
  }
  toggleBeerEntry() {
    this.setState({ expandedBeer: !this.state.expandedBeer });
  }
  render() {
    var description = this.props.beer.breweries[0].description || 'See brewery website';
    var region = this.props.beer.breweries[0].locations[0].region || 'See brewery website';
    return (
            <div className={`beer-entry ${this.state.expandedBeer ? 'expanded-beer' : 'normal-beer'}`} onClick={this.toggleBeerEntry}>
              <h3>{this.props.beer.name}</h3>
              <p><strong>ABV</strong>: {this.props.beer.abv}%</p>
              <p><strong>Brewery</strong>: <a href={this.props.beer.breweries[0].website}>{this.props.beer.breweries[0].name}</a></p>
              <p><strong>Beer Region</strong>: {region}</p>
              <p><strong>Brewery Info</strong>: {description}</p>
            </div>
            );
  }
}

window.BeerEntry = BeerEntry;