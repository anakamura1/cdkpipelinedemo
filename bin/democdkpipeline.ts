#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { DemocdkpipelineStack } from '../lib/democdkpipeline-stack';

const app = new cdk.App();
new DemocdkpipelineStack(app, 'DemocdkpipelineStack', {
  env: { account: '189722964218', region: 'us-east-1' },
});
