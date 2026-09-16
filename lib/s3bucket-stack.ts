import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs';
import { aws_s3 as s3 } from 'aws-cdk-lib'

export class StorageBucketStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps){
        super(scope, id, props);
 
        const myS3bucket = new s3.Bucket(this, 'myBucket', {
            bucketName: 'practicebucket',
            versioned: true,
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            autoDeleteObjects: true,
        })
    }
}