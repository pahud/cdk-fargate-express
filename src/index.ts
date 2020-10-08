
import * as ec2 from '@aws-cdk/aws-ec2';
import * as ecs from '@aws-cdk/aws-ecs';
import * as ecsPatterns from '@aws-cdk/aws-ecs-patterns';
import * as cdk from '@aws-cdk/core';

export interface ExpressServiceProps {
  /**
   * The VPC
   */
  readonly vpc?: ec2.IVpc;

  /**
   * options to customize the servide
   *
   * @defult - None
   */
  readonly serviceOptions?: ecsPatterns.ApplicationLoadBalancedFargateServiceProps;
  /**
   * local path to the docker assets directory
   */
  readonly expressAssets: string;
}

export class ExpressService extends cdk.Construct {
  readonly expressAssets: string;

  constructor(scope: cdk.Construct, id: string, props: ExpressServiceProps) {
    super(scope, id);

    this.expressAssets = props.expressAssets;

    new ecsPatterns.ApplicationLoadBalancedFargateService(this, 'Service', {
      vpc: props.vpc,
      taskImageOptions: {
        image: ecs.ContainerImage.fromAsset(this.expressAssets),
      },
    });
  }
}
