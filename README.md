# Group Project 202 Enigma

### Node-React App
* Frontend: React
* Backend: Node.js
* Database: Sql (rds)

We decided to use this tech-stack after careful consideration of the project requirements. React is a frontend library which is efficient and flexible. Considering the app of this size node was a better choice for fast and easy development and deployment. We decided to use SQL database.

## hosted on [Zipcar](http://zipcar-env.eba-ksiqic9p.us-east-2.elasticbeanstalk.com/) 

## Running - the easiest way is to run would be to run the docker image we build, the link to the docker repo is provided below. Ubuntu command to run - sudo docker run -p 80:8080 -it image
[Docker Link](https://hub.docker.com/r/samkitsheth95/zipcardock)

## Deployment With Extra Credit

We Dockerizing our app for deployment. we utilized Elastic Beanstalk and deployed our docker to it. then we configured the AWS Auto Scaleing Group and added it to the Load Balancer. Config Image of the deployed app shown below:-
#### Deployment Image
![Deployment Image](https://github.com/gopinathsjsu/sp20-cmpe-202-sec-03-team-project-enigma/blob/master/Diagram/deployment_diagram.png)
#### Config
![AWS Config](https://github.com/gopinathsjsu/sp20-cmpe-202-sec-03-team-project-enigma/blob/master/Diagram/awsconfig.png)

## Wireframe for all pages(UI)

