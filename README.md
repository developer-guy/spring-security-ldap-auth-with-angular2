# Spring Security Ldap Authentication and Angular2 


## Getting Started

If we need to explain the project , these project is based on Spring Security LDAP Authentication and the frontend-side Angular2.

Firstly,Spring provide us an embedded LDAP server then we use that for our authentication.So create login form using 
Angular2 to handle authentication by sending post request to /login endpoint which is provided by Spring Security.

See for the LDAP Server config : [LdapSecurityConfiguration.java](https://github.com/developer-guy/spring-security-ldap-auth-with-angular2/blob/master/backend/src/main/java/com/ldapauth/config/LdapSecurityConfiguration.java)

### Prerequisites

You should be sure npm installed on the system.

### Installing

Firstly you should run mvn clean install commond on frontend project because the backend project serves the frontend project by this way.

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests


### And coding style tests


## Deployment

After everythings done you should open : http://localhost:8080 and the page is redirect /login endpoint.

## Built With

* [Angular2](https://angular.io/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [Spring Boot](https://projects.spring.io/spring-boot/) - Spring Boot used
* [Spring Security](https://projects.spring.io/spring-security/) - Used to handle LdapAuthentication

## Contributing


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Batuhan Apaydın** - *Initial work* - [SAHABT](http://www.sahabt.com/)

See also the list of [contributors](https://github.com/developer-guy/spring-security-ldap-auth-with-angular2/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
