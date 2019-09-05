
const { setDefaultTimeout, BeforeAll, AfterAll } = require('cucumber');
const reporter = require('cucumber-html-reporter');
const { spawn } = require('child_process')

setDefaultTimeout(60000);

BeforeAll( async () => {
    var childWS = spawn('npm', ['run-script','server:ws']);
    var childWWW = spawn('npm', ['run','server:www']);
    await new Promise(done => setTimeout(done, 2000));
});

AfterAll(() => {
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
    }, 2000);
    var StopWS = spawn('npm',['run','server:ws-stop']);
    var StopWWW = spawn('npm',['run','server:www-stop']);
});
