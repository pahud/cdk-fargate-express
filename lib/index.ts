
import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as ecs from '@aws-cdk/aws-ecs';
import * as ecsPatterns from '@aws-cdk/aws-ecs-patterns';

export interface ExpressServiceProps {
  /**
   * The VPC
   */
  readonly vpc?: ec2.IVpc;

  /**
   * options to customize the servide
   */
  readonly serviceOptions?: ecsPatterns.ApplicationLoadBalancedFargateServiceProps,
  /**
   * local path to the docker assets directory
   */
  readonly dockerAssets?: string;
}

export class ExpressService extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props: ExpressServiceProps = {}) {
    super(scope, id);
    
    new ecsPatterns.ApplicationLoadBalancedFargateService(this, 'Service', {
      vpc: props.vpc,
      taskImageOptions: {
        image: props.dockerAssets ?  ecs.ContainerImage.fromAsset(props.dockerAssets) 
          : ecs.ContainerImage.fromRegistry('amazon/amazon-ecs-sample'),
      },
    })
  }
}
