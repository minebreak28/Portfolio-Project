# Adam's Portfolio Website

This is the code repository for my personal portfolio website. This website attempts to put my information, skills, and projects into one place, while showcasing my technical skills in JavaScript, HTML, and CSS, as well as various AWS cloud services.

## How to install/run the website
Simply visit this URL: [Website Link](https://portfolio.adamwu.dev/).

## High-level Architecture
![portfolio_highlevel_design](https://github.com/minebreak28/Portfolio-Website/assets/78050276/6e528210-f339-4690-8ecd-a74adb5221a0)

## Technologies and Services Used

### Languages

**HTML**: used for basic web structure.

**CSS**: used to apply aesthetics to the user interface.

**JavaScript**: used in combination with CSS to add styling, as well as to facilitate various user interactions.

**Python**: used to write a Lambda function to update site visitor count.

### Services

**AWS S3**: provides scalable object storage in the cloud.

**AWS CloudFront**: delivers content to users with low latency and provides a secure HTTPS connection

**AWS Route 53**: manages my custom domain name, and directs users to the CloudFront distribution to access website.

**AWS DynamoDB**: stores and manages the visitor count data for the website.

**AWS Lambda**: runs a function that increments the visitor count whenever the API endpoint is fetched from the frontend.

**Github Actions**: provides CI/CD workflows.

## Credits

Ideas for the AWS services used for this website's deployment are sourced from the [Cloud Resume Challenge](https://cloudresumechallenge.dev/docs/the-challenge/aws/), a public project that helps cloud enthusiasts gain practical experience in cloud computing.

Major CSS and HTML components were sampled from [HTML5 UP](https://html5up.net/stellar), a website that offers free website templates built with HTML5, CSS3, and JavaScript.

The front-end-cicd.yml file, used to sync my directory with the S3 bucket through Github Actions, was sampled [here](https://github.com/jakejarvis/s3-sync-action)
