import React from "react";

class TrafficLight extends React.PureComponent {
	constructor() {
		super();
		this.state = {
			pos: 0,
		};
	}
	changeLight = () => {
		if (this.state.pos !== 2) {
			this.setState({ pos: this.state.pos + 1 });
		} else {
			this.setState({ pos: 0 });
		}
	};
	render() {
		return (
			<div className="light">
				<div
					className={`light__color light__color_red ${
						this.state.pos === 0 ? "active" : null
					}`}
				></div>
				<div
					className={`light__color light__color_yellow ${
						this.state.pos === 1 ? "active" : null
					}`}
				></div>
				<div
					className={`light__color light__color_green ${
						this.state.pos === 2 ? "active" : null
					}`}
				></div>
				<button onClick={this.changeLight}>Change</button>
			</div>
		);
	}
}
export default TrafficLight;

// import React from "react";

// class DataDispClass extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//       count: 0,
//     };
//   }

//   async componentDidMount() {
//     const response = await fetch(
//       `https://swapi.dev/api/people/${this.props.id}/`
//     );
//     const newData = await response.json();
//     this.setState({ data: newData });
//   }

//   render() {
//     const { data } = this.state;
//     if (data) {
//       return (
//         <>
//           <div>{data.name}</div>
//           <p>{this.props.text}</p>
//           <button
//             onClick={() => {
//               this.setState({ ...this.state, count: this.state.count + 1 });
//             }}
//           >
//             {this.state.count}
//           </button>
//         </>
//       );
//     } else {
//       return "No data";
//     }
//   }
// }

// export default DataDispClass;
