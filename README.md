dalFood 🍽️ | Cloud-Based Food Ordering Platform
Project Overview
I built dalFood, a cloud-native food ordering web application, designed to demonstrate the integration of AWS services with a scalable MERN-like architecture (React frontend + Express.js backend with AWS RDS database).
The platform allows users to browse menus, add items to their cart, place orders, and view order history — all deployed securely on AWS cloud infrastructure.

Features 🚀
User Authentication (Login/Signup)

Menu Browsing and Item Selection

Cart Management

Order Placement Workflow

Persistent Backend Server

Secure API Exposure

Structured Data Storage (RDS MySQL)

Static Asset Storage (Amazon S3)

Architecture Diagram 🛠️
(Architecture diagram drawn using diagrams.net or draw.io — please insert your diagram here!)

Key Components:

Frontend: React.js (can later be deployed on S3 or Amplify)

Backend: Node.js + Express.js hosted on Amazon EC2

Database: Amazon RDS (MySQL)

Storage: Amazon S3 (for images, menu PDFs)

API Management: Amazon API Gateway

Workflow Orchestration: AWS Step Functions

Infrastructure Management: VPC, Security Groups, IAM roles

AWS Services Used ☁️
Amazon EC2

Amazon RDS (MySQL)

Amazon S3

Amazon API Gateway

AWS Step Functions

Amazon CloudWatch

AWS IAM

Amazon VPC

Why These Choices? 🤔
Amazon EC2 over Lambda to maintain persistent server sessions.

Amazon RDS over DynamoDB due to the relational structure of user accounts, orders, and menu items.

Amazon API Gateway instead of direct EC2 access for enhanced throttling, security, and monitoring.

AWS Step Functions instead of custom orchestration for robust error handling and workflow retries.

Project Setup Instructions 🛠️
Backend Setup
Launch an EC2 instance.

SSH into the instance.

Install Node.js and npm.

Clone this repository.

Run npm install to install dependencies.

Set up environment variables (.env) for database credentials and configuration.

Start the server using npm start.

Database Setup
Create an Amazon RDS MySQL instance.

Configure inbound rules in RDS Security Groups to allow EC2 access.

Create necessary tables for Users, Menu Items, and Orders.

Frontend Setup
(Optional) Setup a simple React frontend or host static files using S3 bucket.

Connect frontend with backend REST APIs exposed via API Gateway.

Cost Analysis 💵
EC2 (t2.micro): Free Tier eligible (or minimal hourly charges)

RDS (db.t3.micro MySQL): Free Tier eligible within limits

S3 Storage (~100GB): ~$2.30/month

API Gateway and Step Functions: Pay-per-use based on invocations

Overall, the design ensures cloud cost efficiency by using lightweight services and free-tier where possible.

Security Measures 🔐
Data-in-transit protected with HTTPS.

EC2 instance inside a secured VPC with restricted inbound/outbound rules.

IAM roles to control access permissions.

RDS with limited public access and database authentication.

Future Improvements 🚀
Add payment gateway integration (e.g., Stripe)

Auto-scaling backend using AWS Elastic Load Balancer (ELB)

CI/CD pipeline using AWS CodePipeline

Frontend deployment using AWS Amplify

Multi-zone high-availability setup for production-grade resilience

Special Thanks 🎓
Special thanks to Dr. Gabriel Spadon for his incredible guidance, mentorship, and support throughout the project journey!
