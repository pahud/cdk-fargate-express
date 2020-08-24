const {
  JsiiProject,
  Semver
} = require('projen');

const AWS_CDK_LATEST_RELEASE = '1.60.0';
const CONSTRUCTS_VERSION = '3.0.4';
const PROJECT_NAME = 'cdk-fargate-express';
const PROJECT_DESCRIPTION = 'A sample JSII construct lib for Express Apps in AWS Fargate';

const project = new JsiiProject({
  name: PROJECT_NAME,
  jsiiVersion: Semver.caret('1.5.0'),
  description: PROJECT_DESCRIPTION,
  repository: 'https://github.com/pahud/cdk-fargate-express.git',
  authorName: 'Pahud Hsieh',
  authorEmail: 'pahudnet@gmail.com',
  stability: 'experimental',
  devDependencies: {
    constructs: Semver.pinned(CONSTRUCTS_VERSION),
    '@aws-cdk/assert': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@types/jest': Semver.caret('25.2.3'),
    '@types/node': Semver.caret('14.0.11'),
    'ts-jest': Semver.caret('25.3.1'),
    'jest': Semver.caret('25.5.0'),
    'dot-prop': Semver.caret('5.1.1'),
  },
  dependencies: {
    constructs: Semver.pinned(CONSTRUCTS_VERSION),
    '@aws-cdk/core': Semver.pinned(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-ec2': Semver.pinned(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-ecs': Semver.pinned(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-ecs-patterns': Semver.pinned(AWS_CDK_LATEST_RELEASE),
  },
  peerDependencies: {
    constructs: Semver.pinned(CONSTRUCTS_VERSION),
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

project.addFields({
  'awscdkio': {
    'twitter': '@pahudnet',
    'announce': false,
  }
});

const common_exclude = [
  'cdk.out',
  'cdk.context.json',
  'docker-compose.yml',
  'images',
  'yarn-error.log'
]
project.npmignore.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);

project.synth();
