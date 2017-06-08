# Summer of Tech Notes - Cloud 101
Cloud 101 - 6/06/2017
Richard Busby, Principal Solutions Architect
AWS

These are Kevin Cartwright's Notes
My Code:
-916698532c31fa05

## Setting up remote connection
https://support.microsoft.com/en-us/instantanswers/ff521c86-2803-4bc0-a5da-7df445788eb9/how-to-use-remote-desktop
System Settings > System > About > System Info >
'Advanced system settings'
Remote Tab... Allow remote connections.
On your local Windows 10 PC: In the search box on the taskbar, type Remote Desktop Connection, and then select Remote Desktop Connection. In Remote Desktop Connection, type the full name of the remote PC, and select Connect.﻿

## Solutions Architecture
Helps customers use the platform

## Cloud terminology, terms. Basic concepts
Cheaper, faster, better. (Platform as a service)
Auckland company Smallworlds. Gaming company, use AWS. Move platform to South America easily.
AWS Global infrastructure. Sydney (3 availability zones, aka datacenters).
Asynchronous duplication (mirrored datacenters) creates transactional delays, issues. Duplication of data.
AWS Availability Zones do very fast replication (synchronous real-time), for more robust storage.

## Foundational Services
Compute, Network (cloud networking), Storage, Security & Identity, Databases..

EC2 - Elastic Compute Cloud.
- Virtual machine on demand.
- Resizeable compute capacity
- Reduced time to boot.
- Scale capacity on demand.
- Pay for what you use.

AMI - Amazon Machine Image
- OS
- Launch permissions
- Storage
Autoscaling
- Predefined scaling, for variable usage applications

Elastic Beanstalk
- Provides a preconfigured environment with the components needed to run your code.
- AWS handles deployment.

Amazon Virtual Private Cloud
- Isolated virtual network on the AWS cloud.

S3 (Simple Storage Service)
- Object-based Storage
- Store and retrieve data in whole
- Flexible scalable, etc.
- Stored in at least 6 places.
- Up to 5 TB.
- One client uploads a Petabyte a day...
- Bucket based.

AWS IAM (Identity and Access Management)
- Groups of people with different access permissions.
- Autotrail info available
- Can go wrong, if you publicize access keys

Relational Database Service (RDS)
- Easily create relational Databases
- AWS manages database administration tasks
- Access to full capabilities of MySQL, Oracle, PostgreSQL, etc..

DynamoDB
- Limitless data Storage
- Fully managed, NoSQL database service.
- Good for large amount of semi-structured data.

Security
- AWS Shared Responsibility Model
- Amazon responsible for security OF the cloud.
- Customer responsible for security IN the cloud.
- AMZ has no access to your services, you hold the credentials.
- Customer responsible for patching, and securing VMs.
- AMZ holds many certifications and accreditations, HIPAA, NIST, Govt standards, etc.

## Platform services
Analytics, Management Tools (Hadoop), Developer Tools, Mobile and IoT.
Lambda. (Run code on demand, only charged for every 100ms code runs).

## Hands on Lab.
Qwiklabs.
Creating Amazon EC2 Instances with Microsoft Windows.
https://run.qwiklab.com/focuses/2549

Learn how to:
- Create a new EC2 Instance
- Create a security group to restrict access to server's resources
- Launch the instance.
- Associate an Elastic IP address with your EC2 instance.


## Next Steps
Setup an AWS account
Use an AWS free tier instance.
Contact Ruth about free AWS courses!
Solutions architecture intern roles.
