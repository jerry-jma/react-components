// // TODO


// var Eggplant = () => (
//   <li>Eggplant</li>
// )

// var Tomato = () => (
//   <li>Tomato</li>
// // )
// var GroceryListItem = (props) => {

//   // This function will be called when the first `<li>` below is clicked on
//   // Notice that event handling functions receive an `event` object
//   // We want to define it where it has access to `props`

//   var onListItemClick = (event) => {
//     alert('I got clicked');
//   };

//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.list[0]}</li>
//       <li>{props.list[1]}</li>
//       <li>{props.list[2]}</li>
//     </ul>
//   );
// };
        // var GroceryList = (props) => {
        //   <ul>
        //     {props.items.map((item, i) =>
        //       <GroceryListItem key={i} item={item} />
        //     )}
        //   </ul>
        // }

        // class GroceryListItem extends React.Component {
        //   constructor(props) {
        //     super(props);

        //     this.state = {
        //       hover: false
        //     };
        //   }

        //   onListItemHover() {
        //     this.setState({
        //       hover: !this.state.hover
        //     });
        //   }

        //   render() {
        //     var style = {
        //       fontWeight: this.state.hover ? 'bold' : 'normal'
        //     };
        //     return (
        //       <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.item}</li>
        //     );
        //   }
        // }



        // ReactDOM.render(<GroceryList items={['Eggplant', 'Kale', 'Tomato']}/>, document.getElementById('app'));




var GroceryList = (props) => (
  <ul>
    {props.items.map((item) =>
      <GroceryListItem item={item}/>
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		hover: false
  	};
  }

  onListItemHover() {
  	this.setState({
  		hover: !this.state.hover
  	});
  }

  render() {
    var style = {
    	fontWeight: this.state.hover ? 'bold' : 'normal'
    };

  	return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.item}</li>
  	);
  }
}

ReactDOM.render(<GroceryList items={['cucumber', 'kale', 'ice cream']}/>, document.getElementById('app'));

