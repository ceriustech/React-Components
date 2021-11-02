import ReadMore from './ReadMore';
import { readMoreData } from '../data';
import '../styles/TextContainer.styles.scss';

const TextContainer = () => (
	<div className="text-container">
		<ReadMore data={readMoreData} />
	</div>
);

export default TextContainer;
