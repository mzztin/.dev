import gh from 'gh-pages';
import fs from 'fs';
import { join } from 'path';
import { promisify } from 'util';

const PATH = process.cwd();

import { writeFile } from "fs/promises";

(async () => {
	console.log('creating cname')
	await writeFile(join(PATH, "build", "CNAME"), "mzztin.dev", {
		encoding: "utf-8"
	});
	
	console.log('creating .nojekyll')
	await writeFile(join(PATH, "build", ".nojekyll"), "", {
		encoding: "utf-8"
	});
	
	console.log('trying to publish')
	await gh.publish(
		'build',
		{
			repo: 'https://github.com/mzztin/.dev.git',
			branch: 'pages',
			dotfiles: true
		},
		(err) => {
			if (err) throw err;
	
			console.log('published website');
		}
	);	
})();

