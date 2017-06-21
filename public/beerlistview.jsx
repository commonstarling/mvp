class BeerListView extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
            <div className='beers-list'>
              <h4>Beer Suggestions</h4>
              {
                this.props.beers.map( (beer) => {
                return <BeerEntry beer={beer}/>;
                })
              }
            </div>
            );
  }
}

window.BeerListView = BeerListView;