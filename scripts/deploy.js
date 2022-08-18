import gh from 'gh-pages';

gh.publish(
	'build',
	{
		repo: 'https://github.com/mzztin/mzztin.github.io.git',
		branch: 'gh-pages'
	},
	(err) => {
		if (err) throw err;

		console.log('published website');
	}
);
