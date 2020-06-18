# cdk-fargate-express

Deploy your serverless Express app in AWS with AWS CDK

## Usage

On deployment, AWS CDK executs `docker build` with your Express code assets at `express.d`

For example:

```ts
import { ExpressService } from 'cdk-fargate-express';

new ExpressService(stack, 'testing', { vpc });
```

You may specify different folder by specifying `expressAssets` property:

```ts
new ExpressService(stack, 'testing', {
  vpc,
  expressAssets: path.join(__dirname, '../another_express.d'),
});
```

