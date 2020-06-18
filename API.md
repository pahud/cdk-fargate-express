# API Reference

**Classes**

Name|Description
----|-----------
[ExpressService](#cdk-fargate-express-expressservice)|*No description*


**Structs**

Name|Description
----|-----------
[ExpressServiceProps](#cdk-fargate-express-expressserviceprops)|*No description*



## class ExpressService 🔹 <a id="cdk-fargate-express-expressservice"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new ExpressService(scope: Construct, id: string, props?: ExpressServiceProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[ExpressServiceProps](#cdk-fargate-express-expressserviceprops)</code>)  *No description*
  * **expressAssets** (<code>string</code>)  local path to the docker assets directory. __*Default*__: ../express.d
  * **serviceOptions** (<code>[ApplicationLoadBalancedFargateServiceProps](#aws-cdk-aws-ecs-patterns-applicationloadbalancedfargateserviceprops)</code>)  options to customize the servide. __*Optional*__
  * **vpc** (<code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code>)  The VPC. __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**expressAssets**🔹 | <code>string</code> | <span></span>



## struct ExpressServiceProps 🔹 <a id="cdk-fargate-express-expressserviceprops"></a>






Name | Type | Description 
-----|------|-------------
**expressAssets**?🔹 | <code>string</code> | local path to the docker assets directory.<br/>__*Default*__: ../express.d
**serviceOptions**?🔹 | <code>[ApplicationLoadBalancedFargateServiceProps](#aws-cdk-aws-ecs-patterns-applicationloadbalancedfargateserviceprops)</code> | options to customize the servide.<br/>__*Optional*__
**vpc**?🔹 | <code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code> | The VPC.<br/>__*Optional*__



