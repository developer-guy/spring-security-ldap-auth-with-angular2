# Spring Security Ldap Authentication and Angular2 
## Ldap Nedir ? 
LDAP (Lightweight Directory Access Protocol - Hafifletilmiş Dizin Erişim Protokolü)

Dizin; elektronik ortamda belirli türden nesneleri içerisinde bulunduran ve bu nesneler arasında arama yapma imkanı veren yapıdır. Dizinlere örnek olarak; tutulan kişi listeleri, telefon rehberi, bir ağa dahil olan bilgisayarların listeleri ve bir şirkette çalışan personele dair tutulan kayıtlar verilebilir. Dizinlerin genel özellikleri incelendiğinde ise, yapısal depolama yaptıkları, bu depolamanın genellikle dağınık olduğu, içerdiği nesnelerin genellikle birbirlerinden bağımsız oldukları ve hiyerarşik bir düzende sıralandıkları görülecektir. 

Dizin standartları 1988 yılında ISO-ITU tarafından X.500 standardı ile belirlenmiştir. X.500 standardı dizinlerin kullanımı ve erişimi ile ilgili dört farklı protokolü içerisinde barındırmaktadır. Bunlar; DAP (Directory Access Protocol - Dizin Erişim Protokolü), DSP (Directory System Protocol - Dizin Sistemi Protokolü), DISP (Dİrectory Information Shadowing Protocol - Dizin Bilgileri Gölgeleme Protocolü) ve DOP (Directory Operational Bindings Management Protocol - Dizin İşlemsel Bağlantı Yönetim Protokolü) ‘dür.   

LDAP (Lightweight Directory Access Protocol – Hafifletilmiş Dizin Erişim Protokolü) ise Michigan Üniversitesi'nde geliştirilen, son kullanıcıların kullanımı açısından oldukça karmaşık bir yapıya sahip olan X.500 standardına uygun olarak oluşturulmuş dizinlere erişimde kullanılan DAP protokolünün hafifletilmiş biçimidir. LDAP in bir başka oluşturulma amacı ise ilk zamanlarda DAP protokolünün sadece OSI (Open System Interconnection) referans modelini kullanmasıdır. LDAP protokolü ise TCP/IP protokolünü kullandığından dizinlere Web üzerinden de erişim imkanı sunmaktadır. Bir diğer önemli LDAP protokolü özelliği ise açık bir protokol olmasıdır. Bu sayede protokolün bilgi modeli geliştirilebilmekte ve verileri tutan sunucu çeşidinden bağımsız olarak verilere erişim sağlanabilmektedir.

LDAP açık bir protokol olması nedeniyle, günümüzde farklı uygulamalarda sıklıkla kullanılmaktadır. Linux işletim sistemlerinde OpenLDAP programı aracılığıyla kullanılan LDAP protokolü; Windows işletim sistemlerinde ise orta ve büyük ölçekli işletmelerde yaygın kullanıma sahip olan Aktif Dizin (Active Directory) hizmeti olarak yer almaktadır. Active Directory, yaptığı birçok işlemde (yeni kullanıcı ve yeni grup tanımlama, hâlihazırdaki kullanıcı bilgilerine erişme ve bu bilgileri güncelleme, nesneler arasında esnek sorgulama yapılabilmesi gibi işlemler) arka planda LDAP protokolünü kullanmaktadır. Ayrıca, Active Directory sunucusuna bağlanarak ihtiyaç duyulan verilerin alınması ve bu verilen düzenlenebilmesi LDAP aracılığıyla sağlanmaktadır. 

LDAP veri yapıları incelendiğinde ise 3 temel özellik göze çarpmaktadır. Bunlardan birincisi LDAP verilerinin alt sınıflara ve hiyerarşik bir yapıya sahip olması, yani nesne tabanlı ve sıradüzensel bir yapıda olmasıdır. İkinci önemli özellik ise her nesnenin kendine özgü nitelik(attribute) ve değerlerden(value) meydana gelmiş olmasıdır. Bu nitelik ve değerler nesneyi dizinde bulunan diğer nesnelerden farklı kılmakta ve nesneyi tanımlamaktadır. Bu nedenle nesnelere ait nitelikler birden fazla değere sahip olabilmekte ve bu değerler metin ya da ikilik sistem verileri olabilmektedir. Üçüncü önemli özellik ise depolanan her nesneyi tanımlayan tek bir belirleyici ismin(distinguished name - DN) olmasıdır. 
LDAP verileri hiyerarşik düzeni, oluşturulan nesnelerin içerdikleri farklı nitelikler sayesinde sağlanmaktadır. Belirli niteliklere sahip nesnelerin hiyerarşik bir düzende bir araya gelerek oluşturdukları yapıya ağaç(tree) adı verilmektedir. Bir ağaçta bulunan yapraklar nasıl farklı dallar aracılığıyla gövdeye ve sonrasında köke bağlanıyorsa, LDAP nesneleri de kendi içlerinde birbirlerinden farklı olsalar da ortak noktaları sebebiyle aynı grup içerisinde yer alabilmektedirler. Bu ağaç yapısının en üst kısmında kök(Root) dizin yer almaktadır. Kök dizin, organizasyonun dahil olduğu temel dizindir. Dizin hizmeti veren bir sunucunun belirleyici ismi(distinguished name) ise etki alanı öğeleri(Domain Component - DC) tarafından belirlenmektedir. Etki alanı öğeleri bir anlamda ağaç yapısının ana kimlik bilgilerini oluşturmaktadır ve bu ağaç yapısı içerisinde bulunan tüm nesneler için ortaktır. Hiyerarşik yapıda etki alanı öğelerinden sonra gelen yapılar ise organizasyon üniteleridir (Organizational Unit - OU) . Organizasyon üniteleri oluşturulan nesnelerin daha kolay ve daha esnek yönetimi amaçlı oluşturulmuş yapılardır. Bu organizasyon üniteleri kendi içlerinde yine amaca yönelik olarak başka organizasyon üniteleri de bulundurabilmektedirler. Organizasyon üniteleri altına oluşturulan nesneler ise kendilerine özgü ortak adlarla (Common Name - CN) birbirlerinden ayrılmaktadırlar. Yine bu ortak adlarla birbirlerinden ayrılan nesneler kendi içlerinde farklı niteliklere sahip olabilmektedirler (soyadı, kullanıcı adı, telefon numarası, sicil numarası, IP Numarası… gibi). Aşağıdaki tabloda LDAP nesnelerine ait olan bazı nitelikler ve bu niteliklerin kodları görülmektedir.

LDAP Niteliği  	     Nitelik Kodu 	      Nitelik Açıklaması 	             Nitelik Örneği 
Organizasyon	        o	                  Organizasyon adı	                İstanbul Teknik Üniversitesi
Etki alanı ögesi	    dc	                 DNS ögesi	                       itu.edu.tr
Organizasyon ünitesi	ou	                 Organizasyon ünitesi adı	        İTÜ Fakülteleri    
Ortak ad	            cn	                 Oluşturulan girdinin ortak adı 	 Kullanıcı Adı
Soyad	               sn	                 Kullanıcı soyadı	                Kullanıcı Soyadı
Kullanıcı ID	        uid	                Sistem giriş kimlik adı 	        İTÜ Kullanıcı Adı
Aşağıdaki şekilde ise bir ağaç örneği görülmektedir.

![alt text](https://raw.githubusercontent.com/developer-guy/spring-security-ldap-auth-with-angular2/master/ldap_data_interchange_format.png)

LDIF (LDAP Data Interchange Format – LDAP Veri Değişim Biçimi) ise LDAP hizmeti veren sunuculara istemcilerin bağlanabilmesini ve nesnelere ait bilgileri görüntüleyebilmesini sağlayan veri değişim formatını tanımlamaktadır. Bir internet standardı olan LDIF ile dizinde tutulan nesneler üzerinde toplu olarak işlemler yapılabilmekte, bu nesnelere ait özellikler değiştirilebilmekte ve nesne özellikleri görüntülenebilmektedir.  Farklı programlama dilleri ile dizinlere erişim sağlanabilmektedir ancak bu programlama dillerinin hepsi temelde LDIF formatını kullanmaktadır



## Getting Started

If we need to explain the project , these project is based on Spring Security LDAP Authentication and the frontend-side Angular2.

Firstly,Spring provide us an embedded LDAP server then we use that for our authentication.So create login form using 
Angular2 to handle authentication by sending post request to /login endpoint which is provided by Spring Security.

See for the LDAP Server config : [LdapSecurityConfiguration.java](https://github.com/developer-guy/spring-security-ldap-auth-with-angular2/blob/master/backend/src/main/java/com/ldapauth/config/LdapSecurityConfiguration.java)

### Prerequisites

You should be sure npm installed on the system.

### Installing

Firstly you should run mvn clean install commond on frontend project because the backend project serves the frontend project by this way.

## Deployment

After everythings done you should open : http://localhost:8080 and the page is automatically redirect /login endpoint.

Login Credentials is providing by [test-server.ldif](https://github.com/developer-guy/spring-security-ldap-auth-with-angular2/blob/master/backend/src/main/resources/test-server.ldif)

You can login with : 
Username : ben
Password : benspassword

If you want to use other credentials you should make the password sha decoded.

Follow this link :: http://aspirine.org/htpasswd_en.html

For example you want to decode bob's password : 

Write the text 1. Users and passwords part inside this link : bob bobspassword -- {uid} {userPassword}
Then Click the Generate htpasswd content button and copy the {SHA}xxxxxxxxxxxx part and paste it to the test-server.ldif file's userPassword part.

uid: bob  <br/>
userPassword: {SHA}s6ShDHKfjIjUNfTaWwLopI2QG74=
 
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

* Inspiration <br/>
http://javausecase.com/2017/02/19/example-spring-boot-security-integrating-with-ldap-sha-password/ <br/>
https://memorynotfound.com/spring-security-spring-ldap-authentication-example/ <br/>
https://spring.io/guides/gs/authenticating-ldap/ <br/>
https://bidb.itu.edu.tr/seyirdefteri/blog/2013/09/06/ldap-(lightweight-directory-access-protocol---hafifletilmi%C5%9F-dizin-eri%C5%9Fim-protokol%C3%BC)

##  🐳 Dockerizing LDAP Server

This project also using an ldap server which is running on docker and entegrated with local machine.

I'am using an https://github.com/nickstenning/docker-slapd to create a LDAP Server on docker . 

Follow these instructions : 

First run a container with port forwarding . And you should be in the directory which is contain test-server.ldif file.
```sh
$  docker run -p 389:389 -v /tmp/ldap:/var/lib/ldap \
           -e LDAP_DOMAIN=springframework.org \
           -e LDAP_ORGANISATION="My Spring LDAP Corporation" \
           -e LDAP_ROOTPASS=s3cr3tpassw0rd \
           -d nickstenning/slapd
$ ldapadd -h localhost -p 389  -c -x -D cn=admin,dc=springframework,dc=org -W -f test-server.ldif
```
This command will ask you a password.Enter the password you given above.

   



 
