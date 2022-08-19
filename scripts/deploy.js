import gh from 'gh-pages';
import fs from 'fs';
import { join } from 'path';

const PATH = process.cwd();

fs.writeFileSync(join(PATH, "build", "CNAME"), "mzztin.dev", {
    encoding: "utf-8"
});

fs.writeFileSync(join(PATH, "build", ".nojekyll"), "", {
    encoding: "utf-8"
});

gh.publish(
	'build',
	{
		repo: 'https://github.com/mzztin/.dev.git',
		branch: 'pages'
	},
	(err) => {
		if (err) throw err;

		console.log('published website');
	}
);	