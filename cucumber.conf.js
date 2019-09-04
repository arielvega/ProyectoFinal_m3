
const { setDefaultTimeout, BeforeAll, AfterAll } = require('cucumber');
const reporter = require('cucumber-html-reporter');
//https://zaiste.net/nodejs-child-process-spawn-exec-fork-async-await/
const { spawn } = require('child_process')

setDefaultTimeout(60000);


BeforeAll(async () => {
    var childWS = spawn('npm run server:ws');
    process.stdin.pipe(childWS.stdin)

    for await (const data of childWS.stdout) {
        console.log(`stdout from the child: ${data}`);
    };
    var childWWW = spawn('npm run server:www');
});

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
    var StopWS = spawn('npm run server:ws-stop');
    var StopWWW = spawn('npm run server:www-stop');
});
