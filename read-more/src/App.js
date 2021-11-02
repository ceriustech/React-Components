import ReadMore from './components/ReadMore';
import { readMoreData } from './data';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<ReadMore data={readMoreData} />
		</div>
	);
};

export default App;
