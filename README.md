# cdk-fargate-express

Deploy your serverless Express app in AWS with AWS CDK

## Usage

```ts
import { ExpressService } from 'cdk-fargate-express';

new ExpressService(stack, 'testing', {
  vpc,
  // define your local express assets directory containing the Dockerfile
  dockerAssets: path.join(__dirname, '../express.d'),
});

```
