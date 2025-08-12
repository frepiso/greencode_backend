#!/usr/bin/env node
import fs from 'fs';
import { glob } from 'glob';
import path from 'path';

const getLcovFiles = async (src: string): Promise<string[]> => {
	return glob(`${src}/**/lcov.info`);
};

(async () => {
	try {
		const files = await getLcovFiles('coverage');

		const mergedReport = files.reduce((mergedReport, currFile) => {
			return mergedReport + fs.readFileSync(currFile, 'utf-8');
		}, '');

		await fs.promises.writeFile(
			path.resolve(process.cwd(), 'coverage/lcov.info'),
			mergedReport,
			'utf-8',
		);

		console.log(`✅ The coverage file has been saved!`);
	} catch (err) {
		console.error(`❌ Error merging coverage files:`, err);
		process.exit(1);
	}
})();
