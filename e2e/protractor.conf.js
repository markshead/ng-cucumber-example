// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
    allScriptsTimeout: 11000,
    specs: ['./src/**/*.feature'],
    capabilities: {
        browserName: 'chrome',
        //    'browserName': 'firefox'
    },
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: ['./src/steps/**/*.steps.ts'],
    },
    onPrepare() {
        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.e2e.json'),
        });
    },
    async onComplete() {
        try {
            console.log('Retrieving coverage...');
            const coverage = await browser.executeScript('return JSON.stringify(window.__coverage__);');
            if (coverage) {
                console.log(`Coverage retrieved (${coverage.length} bytes)`);
                const fs = require('fs');
                const path = require('path');
                fs.mkdirSync(path.join(__dirname, '..', '.nyc_output'));
                fs.writeFileSync(path.join(__dirname, '..', '.nyc_output', 'out.json'), coverage);
                const NYC = require('nyc');
                const nycInstance = new NYC({
                    cwd: path.join(__dirname, '..'),
                    reportDir: 'coverage-e2e',
                    reporter: ['lcov', 'json', 'text-summary'],
                });
                nycInstance.report();
                nycInstance.cleanup();
                console.log('Coverage saved successfully!');
            } else {
                console.log('No coverage data!');
            }
        } catch (error) {
            console.log('Error in onComplete:', error);
            process.exit(1);
        }
    },
};
