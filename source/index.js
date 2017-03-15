import remark from 'remark';
import html from 'remark-html';

export default () => {
	return async file => {
		const source = file.buffer.toString('utf-8');
		const result = await translate(source);
		file.buffer = new Buffer(result, 'utf-8');
		return file;
	};
};

function translate(source) {
	return new Promise((resolve, reject) => {
		remark()
			.use(html)
			.process(source, (err, file) => {
				if (err) {
					return reject(err);
				}
				resolve(String(file));
			});
	});
}
