class App extends React.Component {
  render() {
    return ( <section>
              <div className="beers-list">
                <h1>Beer List</h1>
              </div>
              <div className="saved-beers">
                <h1>Saved Beers</h1>
              </div>
            </section>
            );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));