
const { setDefaultTimeout, AfterAll } = require('cucumber');
const reporter = require('cucumber-html-reporter');

setDefaultTimeout(60000);


AfterAll(async () => {
    setTimeout(() => {
        reporter.generate({
            theme: 'bootstrap',
            jsonFile: 'report/cucumber_report.json',
            output: 'report/cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                'App Version': '0.3.2',
                'Test Environment': 'POC'
            },
            name: 'Tests de Comportamiento API & UI'
        });
    }, 0);
});
