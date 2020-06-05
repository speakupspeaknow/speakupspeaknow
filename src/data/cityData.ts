export enum AvailableCity {
  Anaheim = 'Anaheim',
}

const phatEmailString = `
Anaheim\thsidhu@anaheim.net,dbarnes@anaheim.net,jbrandman@anaheim.net,jmoreno@anaheim.net,lkring@anaheim.net,sfaessel@anaheim.net,toneil@anaheim.net,cityattorneysoffice@anaheim.net,CityManager@anaheim.net,cityclerk@anaheim.net,FinanceAdministration@anaheim.net
Antioch\tswright@ci.antioch.ca.us,jmotts@ci.antioch.ca.us,mwilson@ci.antioch.ca.us,lthorpe@ci.antioch.ca.us,logorchock@ci.antioch.ca.us,tlsmith@ci.antioch.ca.us,rbernal@ci.antioch.ca.us,asimonsen@ci.antioch.ca.us,jdavis@ci.antioch.ca.us
Burbank\tSSpringer@burbankca.gov,BFrutos@burbankca.gov,EGabel-Luddy@burbankca.gov,TMMurphy@burbankca.gov,JTalamantes@burbankca.gov,AAlbano@burbankca.gov,jhess@burbankca.gov,zmullins@burbankca.gov,KPalmer@burbankca.gov,SLaChasse@burbankca.gov
Bakersfield\tMayor@bakersfieldcity.us,City_Council@bakersfieldcity.us,City_Council@bakersfieldcity.us,City_Council@bakersfieldcity.us,City_Council@bakersfieldcity.us,City_Council@bakersfieldcity.us,City_Council@bakersfieldcity.us,City_Council@bakersfieldcity.us,AdmAtt@Bakersfieldcity.us,AdmMgr@bakersfieldcity.us,cityclerk@bakersfieldcity.us,webmaster@bakersfieldcity.us,bpdcommunity@bakersfieldpd.us
Berkeley\tJArreguin@cityofberkeley.info, mayor@cityofberkeley.info,rkesarwani@cityofberkeley.info,cdavila@cityofberkeley.info,bbartlett@cityofberkeley.info,kharrison@cityofberkeley.info,shahn@cityofberkeley.info,SWengraf@cityofberkeley.info,RRobinson@cityofberkeley.info,LDroste@cityofberkeley.info,attorney@cityofberkeley.info,auditor@cityofberkeley.info,manager@cityofberkeley.info,clerk@CityofBerkeley.info,finance@cityofberkeley.info,police@CityofBerkeley.info
Carlsbad\tmatt.hall@carlsbadca.gov,keith.blackburn@carlsbadca.gov,cori.schumacher@carlsbadca.gov,priya.bhat-patel@carlsbadca.gov,council@carlsbadca.gov,attorney@carlsbadca.gov,manager@carlsbadca.gov,clerk@carlsbadca.gov,treasurer@carlsbadca.gov,neil.gallucci@carlsbadca.gov
Chula Vista\tmsalas@chulavistaca.gov,jmccann@chulavistaca.gov,jmgalvez@chulavistaca.gov,spadilla@chulavistaca.gov,mdiaz@chulavistaca.gov,ggoogins@chulavistaca.gov,cityclerk@chulavistaca.gov
Clovis\tdrewb@cityofclovis.com,josef@cityofclovis.com,lynnea@cityofclovis.com,bobw@cityofclovis.com,vongm@ci.clovis.ca.us,davidw@cityofclovis.com,lukes@cityofclovis.com,johnh@cityofclovis.com,jays@cityofclovis.com,curtf@cityofclovis.com
Costa Mesa\tkatrina.foley@costamesaca.gov,john.stephens@costamesaca.gov,allan.mansoor@costamesaca.gov,Andrea.Marr@costamesaca.gov,sandra.genis@costamesaca.gov,Manuel.Chavez@costamesaca.gov,Arlis.Reynolds@costamesaca.gov,kimberly.barlow@costamesaca.gov,cityclerk@costamesaca.gov,brenda.green@costamesaca.gov,jennifer.king@costamesaca.gov
Concord\ttim.mcgallian@cityofconcord.org,laura.hoffmeister@cityofconcord.org,carlyn.obringer@cityofconcord.org,dominic.aliano@cityofconcord.org,edi.birsan@cityofconcord.org,susanne.brown@cityofconcord.org,Valerie.Barone@cityofconcord.org,CityClerk@cityofconcord.org,contactcpd@cityofconcord.org
Compton\tajabrown@comptoncity.org, contactmayor@comptoncity.org,mchambers@comptoncity.org,igalvan@comptoncity.org,tmccoy@comptoncity.org,esharif@comptoncity.org,dbrown@comptoncity.org,ccornwell@comptoncity.org,agodwin@comptoncity.org, contactcityclerk@comptoncity.org,rking@comptoncity.org,dsanders@comptoncity.org,contact.lapdonline@gmail.com
Corona\tJim.Steiner@CoronaCA.gov,Jacque.Casillas@CoronaCA.gov,Wes.Speake@CoronaCA.gov,Jason.Scott@CoronaCA.gov,Dean.Derleth@coronaca.gov,CityClerk@coronaca.gov,Chad.Willardson@CoronaCA.gov,George.Johnstone@coronaca.gov
Davis\tblee@cityofdavis.org,gpartida@cityofdavis.org,warnold@cityofdavis.org,dcarson@cityofdavis.org,lucasf@cityofdavis.org,HARRIET.STEINER@BBKLAW.COM,cmoweb@cityofdavis.org,clerkweb@cityofdavis.org,financeweb@cityofdavis.org,policeweb@cityofdavis.org
Daly City\tcitycouncil@dalycity.org ,citycouncil@dalycity.org ,citycouncil@dalycity.org ,citycouncil@dalycity.org ,citycouncil@dalycity.org ,cityclerk@dalycity.org 
Downey\tbpacheco@downeyca.org,sashton@downeyca.org,rrodriguez@downeyca.org,cfrometa@downeyca.org,asaab@downeyca.org,dmilligan@downeyca.org
Escondido\tpmcnamara@escondido.org ,cmartinez@escondido.org
Elk Grove\tstevely@elkgrovecity.org,phume@elkgrovecity.org,dsuen@elkgrovecity.org,sdetrick@elkgrovecity.org,snguyen@elkgrovecity.org,cityclerk@elkgrovecity.org,snarayan@elkgrovecity.org
El Cajon\tcitymanager@cityofelcajon.us,acortez@cityofelcajon.us,cschoen@cityofelcajon.us
El Monte\taquintero@elmonteca.gov,mmorales@elmonteca.gov,jancona@elmonteca.gov,vmartinezmuela@ci.el-monte.ca.us,jvelasco@elmonteca.gov,amartinez@elmonteca.gov,cityclerk@ci.el-monte.ca.us,finance@elmonteca.gov
Fairfield\thprice@fairfield.ca.gov,pbertani@fairfield.ca.gov,cct707@aol.com,cmoy@fairfield.ca.gov,rvaccaro@fairfield.ca.gov,cmo@fairfield.ca.gov,klrees@fairfield.ca.gov,bchua@fairfield.ca.gov
Fontana\tawarren@fontana.org,jarmendarez@fontana.org,jroberts@fontana.org,jsandoval@fontana.org,pwcothran@fontana.org,mdenny@fontana.org,tlewis@fontana.org,jkoehlerbrooks@fontana.org
Fremont\tlmei@fremont.gov,rsalwan@fremont.gov,tkeng@fremont.gov,jkassan@fremont.gov,yshao@fremont.gov,vbacon@fremont.gov,cof@fremont.gov,cclerk@fremont.gov,finance@fremont.gov
Fullerton\tjenniferf@cityoffullerton.com ,JFlory@cityoffullerton.com ,jesuss@cityoffullerton.com ,bwwhitaker@live.com ,AhmadZ@cityoffullerton.com,KDomer@cityoffullerton.com, citymanager@cityoffullerton.com,CityClerksOffice@cityoffullerton.com
Garden Grove\tstevej@ggcity.org,joneill@ggcity.org,georgeb@ggcity.org,thuhan@ggcity.org,phatb@ggcity.org,stephaniek@ggcity.org,kimn@ggcity.org,cityclerk@ggcity.org,citymanager@ggcity.org,finance@ggcity.org
Glendale\tVAgajanian@glendaleca.gov,anajarian@glendaleca.gov,pdevine@glendaleca.gov,akassakhian@glendaleca.gov,dbrotman@glendaleca.gov,ybeers@glendaleca.gov,aadjemian@glendaleca.gov,RManoukian@glendaleca.gov
Hayward\tBarbara.Halliday@hayward-ca.gov,Francisco.Zermeno@hayward-ca.gov,Al.Mendall@hayward-ca.gov,Sara.Lamnin@hayward-ca.gov,Elisa.Marquez@hayward-ca.gov,Mark.Salinas@hayward-ca.gov,aisha.wahab@hayward-ca.gov,city.manager@hayward-ca.gov,Miriam.Lens@hayward-ca.gov,Dustin.Claussen@hayward-ca.gov
Huntington Beach\tLyn.Semeta@surfcity-hb.org,jill.hardy@surfcity-hb.org,Patrick.Brenden@surfcity-hb.org,Kim.Carr@surfcity-hb.org,barbara.delgleize@surfcity-hb.org,erik.peterson@surfcity-hb.org,mike.posey@surfcity-hb.org,Robin.Estanislau@surfcity-hb.org,Paulina.Flores@surfcity-hb.org
Irvine\tchristinashea@cityofirvine.org; christina@christinashea.com,michaelcarroll@cityofirvine.org,melissafox@cityofirvine.org; info@votemelissafox.com,farrahkhan@cityofirvine.org,anthonykuo@cityofirvine.org;  Anthony@anthonykuo.org
Inglewood\tMayor@cityofinglewood.org,GDotson@cityofinglewood.org,APadilla@cityofinglewood.org,EMorales@cityofinglewood.org,RFranklin@cityofinglewood.org,yhorton@cityofinglewood.org,DLEsparza@cityofinglewood.org
Jurupa Valley\takelly@jurupavalley.org,lbarajas@jurupavalley.org,cbarajas@jurupavalley.org,mgoodland@jurupavalley.org,bberkson@jurupavalley.org,rbutler@jurupavalley.org,vwasko@jurupavalley.org,ccardenas@jurupavalley.org
Lancaster\trrparris@cityoflancasterca.org,mcrist@cityoflancasterca.org,rmalhi@cityoflancasterca.org,kmann@cityoflancasterca.org,ddorris@cityoflancasterca.org,pstatsmann@cityoflancasterca.org
Los Angeles\tcouncilmember.cedillo@lacity.org,councilmember.Krekorian@lacity.org,councilmember.blumenfield@lacity.org,david.ryu@lacity.org,paul.koretz@lacity.org,councilmember.martinez@lacity.org,councilmember.rodriguez@lacity.org,councilmember.harris-dawson@lacity.org,councilmember.price@lacity.org,councilmember.wesson@lacity.org,councilmember.bonin@lacity.org,councilmember.Lee@lacity.org,councilmember.ofarrell@lacity.org,councilmember.huizar@lacity.org, cd15@lacity.org/ councilmember.buscaino@lacity.org
Long Beach\tMayor@longbeach.gov,district1@longbeach.gov,district2@longbeach.gov,district3@longbeach.gov,district4@longbeach.gov,district5@longbeach.gov,district6@longbeach.gov,district7@longbeach.gov,district8@longbeach.gov,district9@longbeach.gov,citymanager@longbeach.gov,cityclerk@longbeach.gov,john.gross@lobgbeach.gov
Modesto\tmayor@modestogov.com,mgrewal@modestogov.com,tmadrigal@modestogov.com,kahyou@modestogov.com,bzoslocki@modestogov.com,jkenoyer@modestogov.com,dridenour@modestogov.com,joelopez@modestogov.com,slopez@modestogov.com,dachristensen@modestogov.com
Moreno Valley\tyxstiang@moval.org,victoriab@moval.org,carlat@moval.org,davidma@moval.org,ulisesc@moval.org,cmoffice@moval.org,cityclerk@moval.org,marshalle@moval.org
Murrieta\tgwunderlich@murrietaca.gov,svinton@murrietaca.gov,jingram@MurrietaCA.gov ,kseyarto@MurrietaCA.gov ,cwhite@MurrietaCA.gov,ssmith@murrietaca.gov,KSummers@murrietaca.gov,jcarcamo@murrietaca.gov
Norwalk\tjperez@norwalkca.gov,tayala@norwalkca.gov,rramirez@norwalkca.gov,mlrios@norwalkca.gov,avalencia@norwalkca.gov,administration@norwalkca.gov ,clerk@norwalkca.gov,Finance@norwalkca.gov
Oakland\tofficeofthemayor@oaklandnet.com,atlarge@oaklandca.gov,dkalb@oaklandca.gov,nfbas@oaklandca.gov,LMcElhaney@oaklandca.gov,district4@oaklandca.gov,Ngallo@oaklandca.gov,District6@oaklandca.gov,lreid@oaklandnet.com,cityadministratorsoffice@oaklandca.gov,cityclerk@oaklandnet.com,jmsegura@oaklandca.gov
Oceanside\tpweiss@oceansideca.org,jfeller@oceansideca.org,esanchez@oceansideca.org,crodriguez@oceansideca.org,rkeim@oceansideca.org,CityManager@OceansideCa.org,cityclerk@oceansideca.org,treasurer@oceansideca.org
Ontario\tpleon@ontarioca.gov.,ddorstporada@ci.ontario.ca.us,awapner@ontarioca.gov,jbowman@ontarioca.gov,sochoa@ontarioca.gov,RecordsManagement@ontario.ca.gov
Orange\tmayor@markamurphy.com,councilinfo@cityoforange.org,councilinfo@cityoforange.org,councilinfo@cityoforange.org,councilinfo@cityoforange.org,cminfo@cityoforange.org,pcoleman@cityoforange.org,rmoya@cityoforange.org
Oxnard\ttim.flynn@oxnard.org,carmen.ramirez@oxnard.org,perellobert@gmail.com,oscar.madrigal@oxnard.org,bryan.macdonald@oxnard.org,gabriela.basua@oxnard.org,vianeyforoxnard@gmail.com,alexander.nguyen@oxnard.org,cityclerk@oxnard.org,kevin.riper@oxnard.org
Pasadena\tttornek@cityofpasadena.net,thampton@cityofpasadena.net,district1@cityofpasadena.net,mmcaustin@cityofpasadena.net,JohnJKennedy@cityofpasadena.net,gmasuda@cityofpasadena.net,vgordo@cityofpasadena.net,smadison@cityofpasadena.net,awilson@cityofpasadena.net,smermell@cityofpasadena.net,mjomsky@cityofpasadena.net,mhawkesworth@cityofpasadena.net
Palmdale\tshofbauer@cityofpalmdale.org,rloa@cityofpalmdale.org,abishop@cityofpalmdale.org,jcarrillo@cityofpalmdale.org,lbettencourt@cityofpalmdale.org,jjmurphy@cityofpalmdale.org,cityclerk@cityofpalmdale.org
Pomona\tTim_Sandoval@ci.pomona.ca.us,Rubio_Gonzalez@ci.pomona.ca.us,Victor_Preciado@ci.pomona.ca.us,Nora_Garcia@ci.pomona.ca.us,Elizabeth_Ontiveros-Cole@ci.pomona.ca.us,Steve_Lustro@ci.pomona.ca.us,Robert_Torres@ci.pomona.ca.us,james_makshanoff@ci.pomona.ca.us,Rosalia_Butler@ci.pomona.ca.us
Rancho Cucamonga\tCouncil@CityofRC.us,Council@CityofRC.us,Council@CityofRC.us,Council@CityofRC.us,Council@CityofRC.us,john.gillison@cityofrc.us,City.Clerk@CityofRC.us,Tamara.Layne@cityofrc.us
Rialto\tdrobertson@rialtoca.gov,edscott@rialtoca.gov,jbaca@rialtoca.gov,rtrujillo@rialtoca.gov,acarrizales@rialtoca.gov,CityClerk@rialtoca.gov,bmcgee@rialtoca.gov
Richmond\ttom.butt@intres.com,ben_choi@ci.richmond.ca.us,natbates@comcast.net,eduardo_martinez@ci.richmond.ca.us,demnlus_johnson@ci.richmond.ca.us,jael_myrick@ci.richmond.ca.us,melvin_willis@ci.richmond.ca.us,laura_snideman@ci.richmond.ca.us,cityclerkdept@ci.richmond.ca.us,Belinda_Brown@ci.richmond.ca.us
Riverside\t2mayor@riversideca.gov,asmelendrez@riversideca.gov ,AZelinka@riversideca.gov,city_clerk@riversideca.gov,ggeuss@riversideca.gov ,KMartinez@riversideca.gov,agpressoffice@doj.ca.gov, cconder@riversideca.gov,ppitchford@riversideca.gov,EEdwards@riversideca.gov,asmelendrez@riversideca.gov ,RFierro@riversideca.gov,cconder@riversideca.gov ,GPlascencia@riversideca.gov,jperry@riversideca.gov ,SHemenway@riversideca.gov 
Roseville\tjallard@roseville.ca.us,kbernasconi@roseville.ca.us,salvord@roseville.ca.us,bhoudesheldt@roseville.ca.us,proccucci@roseville.ca.us,CityManager@roseville.ca.us,CityClerk@roseville.ca.us,finance@roseville.ca.us,jmaccoun@roseville.ca.us
Sacramento\tjsharris@cityofsacramento.org,aashby@cityofsacramento.org,awarren@cityofsacramento.org,Shansen@cityofsacramento.org,jschenirer@cityofsacramento.org,rjennings@cityofsacramento.org,lcarr@cityofsacramento.org,hchan@cityofsacramento.org,clerk@cityofsacramento.org,fin@cityofsacramento.org
Salinas\tsalinasmayor@ci.salinas.ca.us,district1@ci.salinas.ca.us,district2@ci.salinas.ca.us,district3@ci.salinas.ca.us,district4@ci.salinas.ca.us,district5@ci.salinas.ca.us,district6@ci.salinas.ca.us,cmwebmail@ci.salinas.ca.us,cityclerkwebmail@ci.salinas.ca.us,finwebmail@ci.salinas.ca.us
San Bernardino\tMayor@SBCity.org,TheodorePSanchez@gmail.com,Council@SBCity.org,Council@SBCity.org,Council@SBCity.org,Council@SBCity.org,Bessine@BessineRichard.com,mullvihill@csusb.edu,Ledoux_Te@sbcity.org,Espinoza_Pa@SBCity.org
San Diego\tkevinfaulconer@sandiego.gov,cityattorney@sandiego.gov,barbarabry@sandiego.gov,jennifercampbell@sandiego.gov,christopherward@sandiego.gov,monicamontgomery@sandiego.gov,markkersey@sandiego.gov,ChrisCate@sandiego.gov,scottsherman@sandiego.gov,vivianmoreno@sandiego.gov,georgettegomez@sandiego.gov
San Jose\tmayoremail@sanjoseca.gov,district1@sanjoseca.gov,district2@sanjoseca.gov,district3@sanjoseca.gov,district4@sanjoseca.gov,district5@sanjoseca.gov,district6@sanjoseca.gov,district7@sanjoseca.gov,district8@sanjoseca.gov,district9@sanjoseca.gov,district10@sanjoseca.gov,webmaster.manager@sanjoseca.gov,city.clerk@sanjoseca.gov,Finance@sanjoseca.gov
San Francisco\tMayorLondonBreed@sfgov.org,Jose.Cisneros@sfgov.org,Sandra.Fewer@sfgov.org,Catherine.Stefani@sfgov.org,Aaron.Peskin@sfgov.org,Gordon.Mar@sfgov.org,Dean.Preston@sfgov.org,Matt.Haney@sfgov.org,Norman.Yee@sfgov.org,MandelmanStaff@sfgov.org,Hillary.Ronen@sfgov.org,Shamann.Walton@sfgov.org,Ahsha.Safai@sfgov.org
San Marcos\trjones@san-marcos.net,sjenkins@san-marcos.net ,mnunez@san-marcos.net,jpetrek@san-marcos.net ,rwalton@san-marcos.net,jgriffin@san-marcos.net,pscollick@san-marcos.net,lfowler@san-marcos.net
San Mateo\tjgoethals@cityofsanmateo.org,erodriguez@cityofsanmateo.org,rbonilla@cityofsanmateo.org,alee@cityofsanmateo.org,dpapan@cityofsanmateo.org,citymanager@cityofsanmateo.org,clerk@cityofsanmateo.org,rlee@cityofsanmateo.org
Santa Ana\tmpulido@santa-ana.org,vsarmiento@santa-ana.org,dpenaloza@santa-ana.org,JSolorio@santa-ana.org,pbacerra@santa-ana.org,jvillegas@santa-ana.org,nmendoza@santa-ana.org,kridge@santa-ana.org,cityclerks@santa-ana.org,budgetoffice@santa-ana.org,kdowns@santa-ana.org
Santa Barbara\tCMurillo@SantaBarbaraCA.gov,algutierrez@santabarbaraca.gov,mjordan@santabarbaraca.gov,ogutierrez@santabarbaraca.gov,KSneddon@SantaBarbaraCA.gov,EFriedman@SantaBarbaraCA.gov,mharmon@santabarbaraca.gov,pcasey@santabarbaraca.gov,gpeirce@SantaBarbaraCA.gov,jtomaszewski@santabarbaraca.gov
Santa Clara\tlgillmor@ggarealestate.com,kwatanabe@santaclaraca.gov,rchahal@santaclaraca.gov,khardy@santaclaraca.gov,toneill@santaclaraca.gov,ddavis@santaclaraca.gov,manager@santaclaraca.gov,Clerk@santaclaraca.gov,Finance@santaclaraca.gov
Santa Clarita\tcsmyth@santa-clarita.com,bmiranda@santa-clarita.com,bkellar@santa-clarita.com,lweste@santa-clarita.com,mmclean@santa-clarita.com,kstriplin@santa-clarita.com,mcusick@santa-clarita.com,cmagana@santa-clarita.com
Santa Maria\tapatino@ci.santa-maria.ca.us,gsoto@cityofsantamaria.org,ewaterfield@cityofsantamaria.org,mmoats@cityofsantamaria.org,mcordero@cityofsantamaria.org,jstilwell@cityofsantamaria.org,prodriguez@ci.santa-maria.ca.us,mharvey@cityofsantamaria.org
Santa Rosa\ttschwedhelm@srcity.org,vfleming@srcity.org,rdowd@srcity.org,eolivares@srcity.org,crogers@srcity.org,jsawyer@srcity.org,hjtibbetts@srcity.org,cmoffice@srcity.org,cityclerk@srcity.org,cmcbride@srcity.org
Simi Valley\tkmashburn@simivalley.org,mjudge@simivalley.org,dcavanaugh@simivalley.org,rluevanos@simivalley.org,elitster@simivalley.org,bgabler@simivalley.org,CityClerk@simivalley.org,jtoney@simivalley.org
Stockton\tmayor@stocktonca.gov,dist1@stocktonca.gov,dist2@stocktonca.gov,dist3@stocktonca.gov,dist4@stocktonca.gov,dist5@stocktonca.gov,dist6@stocktonca.gov,Karen.Costa@stocktonca.gov,city.clerk@stocktonca.gov,matt.paulin2@stocktonca.gov
Sunnyvale\tkleincouncil@sunnyvale.ca.gov,smithcouncil@sunnyvale.ca.gov,larssoncouncil@sunnyvale.ca.gov,hendrickscouncil@sunnyvale.ca.gov ,MeltonCouncil@sunnyvale.ca.gov ,goldmancouncil@sunnyvale.ca.gov,fongcouncil@sunnyvale.ca.gov,citymgr@sunnyvale.ca.gov, council@ci.sunnyvale.ca.us,cityclerk@sunnyvale.ca.gov,finance@sunnyvale.ca.gov
Temecula\tjames.stewart@citycouncil.org,maryann.edwards@citycouncil.org,mnaggar@citycouncil.org,matt.rahn@citycouncil.org,zak.schwank@temeculaca.gov,aaron.adams@temeculaca.gov,Randi.Johl@temeculaca.gov,jennifer.hennessy@temeculaca.gov
Thousand Oaks\taadam@toaks.org,claudia4slowgrowth@roadrunner.com,bengler@toaks.org,ejones@toaks.org,citymanager@toaks.org, apowers@toaks.org,crodriguez@toaks.org, cityclerk@toaks.org,finance@toaks.org
Torrance\tPFurey@TorranceCA.Gov, TGoodrich@TorranceCA.Gov,HAshcraft@TorranceCA.Gov,GChen@TorranceCA.Gov,AMattucci@TorranceCA.Gov,SKalani@TorranceCA.Gov, MGriffiths@TorranceCA.Gov,citymanager@torrnet.com,rpoirier@torranceca.gov,Finance@TorranceCA.Gov
Tustin\tcpuckett@tustinca.org,abernstein@tustinca.org,lclark@tustinca.org,alumbard@tustinca.org,bcooper@tustinca.org,Citymanager@tustinca.org,eyasuda@tustinca.org, cityclerk@tustinca.org,JLeisz@tustinca.org
West Covina\ttony.wu@westcovina.org,LLopez-Viado@westcovina.org,Jshewmaker@westcovina.org,DCastellanos@westcovina.org,Lloyd.Johnson@westcovina.org, carmanydavid@gmail.com,lsherrick@westcovina.org,RBird@westcovina.org
Vacaville\tRon.Rowlett@cityofvacaville.com,raymond.beaty@cityofvacaville.com,dilenna.harris@cityofvacaville.com,mitch.mashburn@cityofvacaville.com,nolan.sullivan@cityofvacaville.com,aaron.busch@cityofvacaville.com,mthornbrugh@ci.vacaville.ca.us,Dawn.Leonardini@cityofvacaville.com
Vallejo\tBob.Sampayan@cityofvallejo.net,Hermie.Sunga@cityofvallejo.net,hakeem.brown@cityofvallejo.net,Pippin.Dew@cityofvallejo.net,Rozzana.Verder-Aliga@cityofvallejo.net, Katy.Miessner@cityofvallejo.net,Robert.McConnell@cityofvallejo.net,michelle.straub@cityofvallejo.net,dawn.abrahamson@cityofvallejo.net,Rekha.Nayar@cityofvallejo.net
Victorville\tggarcia@victorvilleca.gov,rramerizdean@victorvilleca.gov,jcox@victorvilleca.gov,bagomez@victorvilleca.gov,dsjones@victorvilleca.gov,kmetzler@victorvilleca.gov, cityclerk@victorvilleca.gov,MAMunoz@victorvilleca.gov
Visalia\tbob.link@visalia.city,steve.nelsen@visalia.city,greg.collins@visalia.city,phil.cox@visalia.city,brian.poochigian@visalia.city,randy.groom@visalia.city,fin.online@visalia.city
Ventura\tmlavere@cityofventura.ca.gov,srubalcava@cityofventura.ca.gov,cheitmann@cityofventura.ca.gov,enasarenko@cityofventura.ca.gov,lbrown@cityofventura.ca.gov,jfriedman@cityofventura.ca.gov,citymanager@cityofventura.ca.gov,cityclerk@cityofventura.ca.gov,mcoon@cityofventura.ca.gov
`

const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

export const cityToEmails: Record<string, Array<string>> = phatEmailString
  .trim()
  .split('\n')
  .map((line) => line.split('\t'))
  .reduce((acc, [cityName, emailsCSV]) => {
    if (emailsCSV == null) {
      console.warn(`emailCSV missing for ${cityName}`)
      return acc
    }
    // @ts-ignore
    acc[cityName] = emailsCSV
      .split(',')
      .map((email) => email.trim())
      .filter((email) => EMAIL_REGEX.test(email))
    return acc
  }, {})
