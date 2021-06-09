const { AwsCdkConstructLibrary } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'Jake-DeCrane',
  authorAddress: 'jdecrane@trek10.com',
  cdkVersion: '1.95.2',
  defaultReleaseBranch: 'main',
  name: 'jake-cdk-sample-lib',
  repositoryUrl: 'https://github.com/Jacob-DeCrane/jake-cdk-sample-lib.git',
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-apigatewayv2',
    '@aws-cdk/aws-apigatewayv2-integrations',
    '@aws-cdk/aws-lambda',
  ], /* Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed? */
  // cdkTestDependencies: undefined,    /* AWS CDK modules required for testing. */
  // deps: [],                          /* Runtime dependencies of this module. */
  // description: undefined,            /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                       /* Build dependencies for this module. */
  // packageName: undefined,            /* The "name" in package.json. */
  // projectType: ProjectType.UNKNOWN,  /* Which type of project this is (library/app). */
  // releaseWorkflow: undefined,        /* Define a GitHub workflow for releasing from "main" when new versions are bumped. */
});
project.synth();