import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { LambdaStack } from './lambda-stack';
import { StorageBucketStack } from './s3bucket-stack'


export class PipelineAppStage extends cdk.Stage {
    constructor(scope: Construct, id: string, props?: cdk.StageProps) {
        super(scope, id, props);

        const demolamdastack = new LambdaStack(this, 'lambdaStack')

        const s3bucketstack = new StorageBucketStack(this, 's3bucketstack')
    }
}