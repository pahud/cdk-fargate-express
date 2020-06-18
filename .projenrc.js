const {
  JsiiProject,
  Semver
} = require('projen');

const AWS_CDK_LATEST_RELEASE = '1.45.0';
const PROJECT_NAME = 'cdk-fargate-express';
const PROJECT_DESCRIPTION = 'A sample JSII construct lib for Express Apps in AWS Fargate';

const project = new JsiiProject({
  name: PROJECT_NAME,
  jsiiVersion: Semver.caret('1.5.0'),
  description: PROJECT_DESCRIPTION,
  repository: 'https://github.com/pahud/cdk-fargate-express.git',
  authorName: 'Pahud Hsieh',
  authorEmail: 'hunhsieh@amazon.com',
  stability: 'experimental',
  devDependencies: {
    '@aws-cdk/assert': Semver.pinned(AWS_CDK_LATEST_RELEASE),
    '@types/jest': Semver.caret('25.2.3'),
    '@types/node': Semver.caret('14.0.11'),
  },
  dependencies: {
    constructs: Semver.pinned('3.0.3'),
    '@aws-cdk/core': Semver.pinned(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-ec2': Semver.pinned(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-ecs': Semver.pinned(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-ecs-patterns': Semver.pinned(AWS_CDK_LATEST_RELEASE),
  },
  python: {
    distName: 'cdk-fargate-express',
    module: 'cd_fargate_express'
  }
});

project.addFields({
  'keywords': [
    'aws',
    'express',
    'fargate'
  ]
});

project.gitignore.exclude(
  'cdk.context.json'
);


project.npmignore.exclude(
  'express.d',
  'cdk.out',
  'cdk.context.json',
  'coverage',
  'doc'
);

project.synth();
