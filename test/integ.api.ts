import { ExpressService } from '../lib/index';
import { App, Stack, Construct } from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as path from 'path';

const mockApp = new App();

const env = {
  region: process.env.CDK_DEFAULT_REGION,
  account: process.env.CDK_DEFAULT_ACCOUNT,
};

const stack = new Stack(mockApp, 'testing-stack2', { env });

const vpc = getOrCreateVpc(stack)

new ExpressService(stack, 'testing', {
  vpc,
});


function getOrCreateVpc(scope: Construct): ec2.IVpc {
  // use an existing vpc or create a new one
  return scope.node.tryGetContext('use_default_vpc') === '1' ?
    ec2.Vpc.fromLookup(scope, 'Vpc', { isDefault: true }) :
    scope.node.tryGetContext('use_vpc_id') ?
      ec2.Vpc.fromLookup(scope, 'Vpc', { vpcId: scope.node.tryGetContext('use_vpc_id') }) :
      new ec2.Vpc(scope, 'Vpc', { maxAzs: 3, natGateways: 1 });
}





