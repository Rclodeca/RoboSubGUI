import React from 'react'; 

class Mode extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentMode: 'idle'
		}
	}

	changeMode(mode) {
		this.setState({ currentMode: mode});
	}

	render() {
		const { currentMode } = this.state;
		return (
			<div className='my-4'> 
				<button 
					type="button" 
					className="btn btn-secondary btn-block"
					onClick={() => this.changeMode("Autonomous")}
					>Start Autonomous
				</button>
				<button 
					type="button" 
					className="btn btn-secondary btn-block"
					onClick={() => this.changeMode("Debug")}
					>Start Debug
				</button>
				<button 
					type="button" 
					className="btn btn-danger btn-block"
					onClick={() => this.changeMode("Stopped")}
					>Stop
				</button>
				<div className="card my-2">
				    <div className="card-footer">
				      	<small className="text-muted">{`Status ${currentMode}`}</small>
				    </div>
				</div>
			</div>
		);
	}
}

export default Mode;