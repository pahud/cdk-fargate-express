import { ExpressService } from '../lib/index';
import { App, Stack } from '@aws-cdk/core';
import '@aws-cdk/assert/jest';

test('create the HTTP API', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp, 'testing-stack');

  new ExpressService(stack, 'testing');

  expect(stack).toHaveResource('AWS::ECS::Service');
  expect(stack).toHaveResource('AWS::ElasticLoadBalancingV2::LoadBalancer', {
    Type: 'application',
  })
});



