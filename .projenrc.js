const {
  ConstructLibraryAws,
} = require('projen');

const AWS_CDK_LATEST_RELEASE = '1.61.1';
const PROJEN_PINNED_VERSION = '0.3.47';
const PROJECT_NAME = 'cdk-fargate-express';
const PROJECT_DESCRIPTION = 'A sample JSII construct lib for Express Apps in AWS Fargate';

const project = new ConstructLibraryAws({
  name: PROJECT_NAME,
  description: PROJECT_DESCRIPTION,
  repository: 'https://github.com/pahud/cdk-fargate-express.git',
  authorName: 'Pahud Hsieh',
  authorEmail: 'pahudnet@gmail.com',
  stability: 'experimental',

  keywords: [
    'aws',
    'cdk',
    'fargate',
    'express'
  ],

  catalog: {
    twitter: 'pahudnet',
    announce: false,
  },

  // creates PRs for projen upgrades
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',

  cdkVersion: AWS_CDK_LATEST_RELEASE,
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-ec2',
    '@aws-cdk/aws-ecs',
    '@aws-cdk/aws-ecs-patterns',
  ],

  python: {
    distName: 'cdk-fargate-express',
    module: 'cd_fargate_express'
  }
});

if (PROJEN_PINNED_VERSION) {
  project.devDependencies.projen = PROJEN_PINNED_VERSION;
}

const common_exclude = ['cdk.out', 'cdk.context.json', 'images', 'yarn-error.log'];
project.npmignore.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);

project.synth();
