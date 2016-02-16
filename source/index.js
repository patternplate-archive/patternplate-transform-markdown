import markedNodeback from 'marked';
import denodeify from 'denodeify';

const marked = denodeify(markedNodeback);

export default () => {
	return async file => {
		const source = file.buffer.toString('utf-8');
		file.buffer = new Buffer(await marked(source), 'utf-8');
		return file;
	};
};
