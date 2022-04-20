/* eslint-disable no-process-env */
/* eslint-disable no-console */
/* eslint-disable no-process-exit */

const { createHarness, createJSONReporter } = require('zora');
const path = require('path');
const src = require('../src');
const composeOrig = require('../compose');

const setup = () => {

    const compose = (args = {}) => {
        const config = {};
        return composeOrig({ config });
    };

    return { src, compose };
};

const args = setup();

const files = process.argv.slice(2);
const indent = process.env.INDENT === 'true';
const runOnly = process.env.RUN_ONLY === 'true';
const testHarness = createHarness({ indent, runOnly });
const test = testHarness[runOnly ? 'only' : 'test'];

const runTests = filePath => {
    test(filePath, ({ only, skip, ...t }) => {
        const test = (...args) => t.test(...args);
        Object.assign(test, { only, skip });
        require(path.resolve(filePath))({ test, setup, ...args });
    });
};

const start = async () => {
    let uncaughtError = null;

    try {
        files.forEach(runTests);
        await testHarness.report({ reporter: createJSONReporter() });
    } catch (e) {
        console.error(e);
        uncaughtError = e;
    } finally {
        process.exitCode = !testHarness.pass || uncaughtError ? 1 : 0;
    }
};

start();
