# Group Project 202 Enigma

### Node-React App
* Frontend: React
* Backend: Node.js
* Database: Sql (rds)

We decided to use this tech-stack after careful consideration of the project requirements. React is a frontend library which is efficient and flexible. Considering the app of this size node was a better choice for fast and easy development and deployment. We decided to use SQL database.

## hosted on [Zipcar](http://zipcar-env.eba-ksiqic9p.us-east-2.elasticbeanstalk.com/) 

#### Running - the easiest way is to run would be to run the docker image we build, the link to the docker repo is provided below. Ubuntu command to run - sudo docker run -p 80:8080 -it image
[Docker Link](https://hub.docker.com/r/samkitsheth95/zipcardock)

#### link to [Scrum Reports](https://github.com/gopinathsjsu/sp20-cmpe-202-sec-03-team-project-enigma/wiki)
#### link to [Project Board](https://github.com/gopinathsjsu/sp20-cmpe-202-sec-03-team-project-enigma/projects)

## Deployment With Extra Credit

We Dockerizing our app for deployment. we utilized Elastic Beanstalk and deployed our docker to it. then we configured the AWS Auto Scaleing Group and added it to the Load Balancer. Config Image of the deployed app shown below:-
#### Deployment Image
![Deployment Image](https://github.com/gopinathsjsu/sp20-cmpe-202-sec-03-team-project-enigma/blob/master/Diagram/deployment_diagram.png)
#### Config
![AWS Config](https://github.com/gopinathsjsu/sp20-cmpe-202-sec-03-team-project-enigma/blob/master/Diagram/awsconfig.png)


**Frontend testing done with Enzyme, backend testing done with Mocha chai after the app was deployed we had run the jmeter testing**

## Wireframe for all pages(UI)
All wireframes are created in pencil.
#### Login
![Login](https://github.com/gopinathsjsu/sp20-cmpe-202-sec-03-team-project-enigma/blob/master/Diagram/login.png)
#### Register User
![Register](https://github.com/gopinathsjsu/sp20-cmpe-202-sec-03-team-project-enigma/blob/master/Diagram/register_page_user.png)
#### Register Admin
![Register](https://github.com/gopinathsjsu/sp20-cmpe-202-sec-03-team-project-enigma/blob/master/Diagram/register_page_admin.png)
#### Userhome
![Userhome](https://github.com/gopinathsjsu/sp20-cmpe-202-sec-03-team-project-enigma/blob/master/Diagram/user_home.png)
#### User Search Vehicles
![User Search](https://github.com/gopinathsjsu/sp20-cmpe-202-sec-03-team-project-enigma/blob/master/Diagram/user_search_vehicles.png)
#### User Booking
![User Booking](https://github.com/gopinathsjsu/sp20-cmpe-202-sec-03-team-project-enigma/blob/master/Diagram/user_see_booking.png)
#### User Profile
![User](https://github.com/gopinathsjsu/sp20-cmpe-202-sec-03-team-project-enigma/blob/master/Diagram/user_see_profile.png)
#### Admin Add Location
![Admin](https://github.com/gopinathsjsu/sp20-cmpe-202-sec-03-team-project-enigma/blob/master/Diagram/admin_add_location.png)
#### Admin Add Vehicletype
![Admin Vehicletype](https://github.com/gopinathsjsu/sp20-cmpe-202-sec-03-team-project-enigma/blob/master/Diagram/admin_add_vehicle_type.png)
#### Admin Add Vehicle
![Admin Vehicle](https://github.com/gopinathsjsu/sp20-cmpe-202-sec-03-team-project-enigma/blob/master/Diagram/admin_add_vehicle.png)
#### Admin Booking
![Admin Booking](https://github.com/gopinathsjsu/sp20-cmpe-202-sec-03-team-project-enigma/blob/master/Diagram/admin_see_booking.png)
#### Admin Members
![Admin Member](https://github.com/gopinathsjsu/sp20-cmpe-202-sec-03-team-project-enigma/blob/master/Diagram/admin_see_members.png)

### Burndown
[Burndown](https://docs.google.com/spreadsheets/d/1RBzwUDx9QG7Uy8ayiFBBuhWBaJCrK5dV5T9eN2ZEfp8/edit?usp=sharing
) 
![Burndown](https://github.com/gopinathsjsu/sp20-cmpe-202-sec-03-team-project-enigma/blob/master/Diagram/chart.png
)
