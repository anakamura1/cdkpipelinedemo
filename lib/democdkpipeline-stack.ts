import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import * as pipelines from 'aws-cdk-lib/pipelines';

export class DemocdkpipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    // AWS CDK PIPELINE
    const democdkpipeline = new pipelines.CodePipeline(this, 'demopipeline', {
pipelineName: 'CDKPipeline',

      // 3. Define the Build Step (Source + Synth)
      synth: new pipelines.ShellStep('Synth', {
        // Pull code from GitHub whenever main branch updates
        input: pipelines.CodePipelineSource.gitHub('anakamura1/cdkpipelinedemo', 'main'),
        // Execute these build commands in a temporary AWS container
        commands: [
          'npm ci',        // Install dependencies exactly as locked in package-lock.json
          'npm run build', // Compile TypeScript files to JavaScript
          'npx cdk synth'  // Convert TypeScript into raw CloudFormation JSON
        ],
      }),
    });



    }
    // example resource
    // const queue = new sqs.Queue(this, 'DemocdkpipelineQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
