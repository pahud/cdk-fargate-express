import * as path from 'path';
import { App, Stack } from '@aws-cdk/core';
import { ExpressService } from '../src/index';
import '@aws-cdk/assert/jest';

test('create the HTTP API', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp, 'testing-stack');

  new ExpressService(stack, 'testing', {
    expressAssets: path.join(__dirname, '../express.d'),
  });

  expect(stack).toHaveResource('AWS::ECS::Service');
  expect(stack).toHaveResource('AWS::ElasticLoadBalancingV2::LoadBalancer', {
    Type: 'application',
  });
});


