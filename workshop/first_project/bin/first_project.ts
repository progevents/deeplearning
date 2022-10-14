#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { FirstProjectStack } from '../lib/first_project-stack';

const app = new cdk.App();
new FirstProjectStack(app, 'FirstProjectStack');
