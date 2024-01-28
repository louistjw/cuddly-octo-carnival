myData = [
[50.065703299999996,19.918958667058632, 'AGH University of Science and Technology'],
[52.2394966,21.015693129786936, 'Academy of Fine Arts in Warsaw'],
[30.020531,31.5014894, 'American University in Cairo - AUC'],
[33.4213174,-111.93315932269833, 'Arizona State University'],
[37.9425172,23.8706149, 'Athens Information Technology'],
[17.547185,78.572791, 'BITS Pilani'],
[6.88997525,3.7224790878605756, 'Babcock University'],
[25.2662887,82.9927969, 'Banaras Hindu University'],
[12.944172049999999,77.5091485894286, 'Bangalore University'],
[31.55043405,-97.1102905567766, 'Baylor University'],
[39.959732,116.35973697755406, 'Beijing Normal University (BNU)'],
[53.83806745,27.476155257195504, 'Belarusian State University'],
[44.81842,20.45757, 'Belgrade University'],
[42.5009819,-89.0157777411969, 'Beloit College'],
[35.95422,-90.45997, 'Beloit College'],
[31.2631254,34.802238544584185, 'Ben Gurion University of the Negev'],
[42.3504324,-71.10170122505716, 'Boston University'],
[35.30059,-120.66004, 'California Polytechnic State University - San Luis Obispo'],
[34.18191745,-117.32174391836504, 'California State University, San Bernardino'],
[51.5213399,-0.1748934415893599, 'City of Westminster College'],
[40.80775585,-73.96164946987652, 'Columbia University'],
[52.070415350000005,-0.6287932053178253, 'Cranfield University'],
[50.1029026,14.3946353, 'Czech Technical University in Prague'],
[37.31770065,-122.04455706238198, 'De Anza College'],
[48.434716800000004,35.03785522939141, 'Dnipro National University'],
[30.2851494,-97.73393515146053, 'University of Texas at Austin'],
[36.00015569999999,-78.94422972195878, 'Duke University'],
[45.732398,4.835571, '7th Arr.'],
[48.76418645,2.290431301339286, 'Écoquartier LaVallée (en travaux)'],
[36.10652745,-79.50282572055133, 'Elon University'],
[55.48841555,8.447026487581917, 'Erhvervsakademi Sydvest'],
[-2.147712,-79.9647289, 'ESCUELA SUPERIOR POLITECNICA DEL LITORAL'],
[51.24839645,6.770322755895527, 'Fachhochschule Düsseldorf'],
[47.72360745,13.086718915696402, 'Fachhochschule Salzburg'],
[45.2464728,19.851704147473647, 'Faculty of Technical Sciences'],
[40.75278,-73.42778, 'Farmingdale State University of New York'],
[26.119403650000002,-80.14169191096471, 'Florida Atlantic University'],
[43.2125814,-71.4947929, 'Franklin Pierce College'],
[26.153410700000002,91.6657647108439, 'Gauhati University'],
[38.83133325,-77.30798838879116, 'George Mason University'],
[38.897836749999996,-77.01292415460526, 'Georgetown University Law Center'],
[33.7535889,-84.38542086620515, 'Georgia State University'],
[50.87485475,4.70793104833482, 'Campus Groep T'],
[21.0055269,105.84359264177206, 'Hanoi University of Science and Technology'],
[31.77293975,35.197994954152726, 'Hebrew University - Givat Ram Campus'],
[17.445489,78.349956, 'Hebrew University - Givat Ram Campus'],
[26.5093058,80.24823225761622, 'IIT Kanpur'],
[45.4378506,12.3226823, 'Bar Iuav'],
[41.83616405,-87.62647227745128, 'Illinois Institute of Technology'],
[40.51799375,-89.00846070697986, 'Illinois State University'],
[21.16247715,81.65954632844696, 'Indian Institute of Technology, Bhilai'],
[-15.394991,28.332815, 'School of Mines'],
[39.1802358,-86.50935262731483, 'Indiana University Bloomington'],
[43.879019,-85.800783, 'Indiana University Bloomington'],
[14.7168914,-17.4556123, 'Institut Supérieur de Technologies'],
[18.4876505,-69.96210823269232, 'Instituto Tecnológico de Santo Domingo'],
[17.4454957,78.34854697544472, 'International Institute of Information Technology, Hyderabad'],
[35.95422,-90.45997, 'International Institute of Information Technology, Hyderabad'],
[22.5611537,88.4131019353334, 'Jadavpur University'],
[17.49306445,78.39140794729656, 'Jawaharlal Nehru Technological University, Hyderabad'],
[28.540166749999997,77.16456005394733, 'Jawaharlal Nehru University'],
[32.49339995,35.989854503370836, 'Jordan University of Science and Technology'],
[39.18825185,-96.58258555991623, 'K-State Student Union'],
[42.29075735,-85.59936465969835, 'Kalamazoo College'],
[54.898805249999995,23.912663150766285, 'Kaunas University of Technology'],
[54.898805249999995,23.912663150766285, 'Kaunas University of Technology'],
[55.79069515,49.12192908363142, 'Kazan Federal University'],
[41.144232450000004,-81.33983207322399, 'Kent State University'],
[13.6502685,100.4954045, 'King Mongkut’s University of Technology Thonburi Alumni Association Under Royal Patronage'],
[35.696914,-78.593871, 'King Mongkut’s University of Technology Thonburi Alumni Association Under Royal Patronage'],
[50.4492335,30.45774515127229, 'National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute”'],
[50.44892,30.45891, 'Kyiv Polytechnical Institute'],
[50.44209,30.50821, 'Taras Shevchenko National University of Kyiv'],
[46.4666416,-80.9738711, 'Laurentian University'],
[10.4730027,-66.8928687, 'Lisandro Alvarado'],
[18.0164751,-76.743473, 'University of Technology'],
[49.362304,23.320647, 'University of Technology'],
[42.7024238,-84.48032837503001, 'Michigan State University'],
[13.06686,80.28347, 'Madras University Library'],
[39.416095049999996,-81.4484225136152, 'Marietta College'],
[24.4348507,54.6167989, 'Masdar Institute'],
[44.8000034,20.4848369, 'Faculty of Mathematics'],
[39.875496749999996,32.78553505584672, 'Middle East Technical University'],
[37.952905900000005,-91.77385818768353, 'Missouri University of Science and Technology'],
[-37.910776350000006,145.13480648790716, 'Monash University, Clayton Campus'],
[-37.877574,145.045082, 'Monash University, Clayton Campus'],
[34.527022,-92.987376, 'Monash University, Clayton Campus'],
[44.45628,26.13643, 'Horia Hulubei National Institute of Physics and Nuclear Engineering'],
[55.60460415,38.10651526217077, 'Moscow Institute of Physics and Technology'],
[55.70229715,37.53179772747929, 'Moscow State University'],
[22.2501589,84.90668556980866, 'NIT Rourkela'],
[40.72914525,-73.99507565085935, 'New York University'],
[21.147717450000002,79.03924327117383, 'Rashtrasant Tukadoji Maharaj Nagpur University'],
[1.3484104000000001,103.68293320728537, 'Nanyang Technological University'],
[31.39571075,75.5357675438753, 'Dr. B. R. Ambedkar National Institute of Technology, Jalandhar'],
[25.01688615,121.53852099555085, 'National Taiwan University'],
[-12.02037945,-77.04816939032196, 'National University of Engineering'],
[41.774365450000005,-88.14274924248255, 'North Central College'],
[42.33907025,-71.08783833987422, 'Northeastern University'],
[42.0557157,-87.67529454739416, 'Northwestern University'],
[55.76592,37.68508, 'Bauman Moscow State Technical University'],
[36.8862699,-76.30972478839735, 'Old Dominion University'],
[42.25866695,-121.78539394635055, 'Oregon Institute of Technology'],
[32.6210159,51.3919877470881, 'Payame Noor University'],
[40.8025835,-77.85593833184565, 'Penn State University'],
[45.479028799999995,9.23221040387672, 'Politecnico di Milano, Sede Milano Leonardo'],
[44.43935655,26.05059608402258, 'Politehnica University of Bucharest'],
[14.869264,120.998953, 'Politehnica University of Bucharest'],
[12.02286805,79.85094146038637, 'Pondicherry University'],
[-33.44177485,-70.64032584797746, 'Pontificia Universidad Católica de Chile'],
[45.51181205,-122.68492999382892, 'Portland State University'],
[40.430028,-86.92642114650494, 'Purdue University'],
[12.92324505,77.50064830371187, 'R. V. College of Engineering'],
[41.08224455,-74.1738235180645, 'Ramapo College of New Jersey'],
[43.08248835,-77.67291102378641, 'Rochester Institute of Technology'],
[10.9628655,79.38530651300967, 'SASTRA University, SRC Campus'],
[59.9406782,30.296499938428813, 'St. Petersburg State University'],
[59.857196849999994,30.328205524473546, 'Saint Petersburg State University of Aerospace Instrumentation'],
[40.047389,-105.246478, 'Saint Petersburg State University of Aerospace Instrumentation'],
[37.7245167,-122.4800002445856, 'San Francisco State University'],
[37.33519025,-121.88122545292521, 'San José State University'],
[31.200891149999997,121.4283949471511, 'Shanghai Jiao Tong University (Xuhui Campus)'],
[35.7024933,51.35171721214843, 'Sharif University of Technology'],
[-16.5005874,-68.1336963, 'Simón Bolívar'],
[49.276709600000004,-122.91780296438841, 'Simon Fraser University'],
[54.7847984,32.04552525233717, 'Smolensk State University'],
[38.33982655,-122.6734191695437, 'Sonoma State University'],
[7.7921375,6.7319975, 'Federal University Lokoja'],
[46.773410999999996,23.5985997891404, 'Spiru Haret University'],
[37.431313849999995,-122.16936535498309, 'Stanford University'],
[-22.8164,-47.06879, 'State University of Campinas (UNICAMP)'],
[45.400544,-122.653682, 'State University of Campinas (UNICAMP)'],
[-33.931521950000004,18.867665592062465, 'Stellenbosch University'],
[42.05997765,-71.07932570575417, 'Stonehill College'],
[59.4393125,24.772347058941484, 'Tallinn University'],
[18.0164751,-76.743473, 'University of Technology'],
[61.449642049999994,23.858774618909564, 'Tampere University - Hervanta Campus'],
[30.800208750000003,30.992227584817762, 'Tanta University'],
[32.97973255,-97.3129042119206, 'Tarrant County College'],
[35.6870811,-108.1473593, 'Navajo Technical University'],
[32.774576,35.0236399, 'Technion'],
[32.1037064,34.8046101, 'Tel Aviv University'],
[42.605625,-77.1360837, 'The Pinnacle'],
[32.316307800000004,-95.25369943794593, 'The University of Texas at Tyler'],
[53.4672,-2.23412, 'The University of Manchester School of Computer Science'],
[-26.1888766,28.024791203071317, 'University of the Witwatersrand'],
[49.0909831,8.5505042, 'Transilvania'],
[42.40649125,-71.11800725402092, 'Tufts University'],
[37.875499649999995,-122.23906851395179, 'University of California, Berkeley'],
[-34.508711500000004,-58.68837906432547, 'Universidad de Buenos Aires'],
[43.080274450000005,-89.43095871991434, 'University of Wisconsin-Madison'],
[10.4901789,-66.89166332272254, 'Universidad Central de Venezuela'],
[40.4506776,-3.717818286212092, 'Facultad de Educación, Universidad Complutense de Madrid'],
[4.6259062,-74.06836595068694, 'Universidad cooperativa de Colombia'],
[19.32160295,-99.18493018260631, 'National Autonomous University of Mexico'],
[10.0003416,-84.10616817673456, 'Universidad Nacional'],
[4.63874255,-74.08523751358481, 'National University of Colombia'],
[-16.50065545,-68.13434982328437, 'Universidad Tecnológica Boliviana'],
[-34.508711500000004,-58.68837906432547, 'Universidad de Buenos Aires'],
[38.9790776,-1.8578475610320626, 'Universidad de Castilla-La Mancha'],
[1.49104975,-77.51927897323912, 'Cementerio municipal de Los Andes'],
[8.338148499999999,-62.670820613258186, 'Universidad de Oriente'],
[14.58348855,-90.55502036799915, 'Universidad de San Carlos de Guatemala'],
[41.6516894,-4.7209841, 'Universidad de Valladolid'],
[4.85475,-74.0326694, 'Universidad De La Sabana'],
[14.60515625,-90.48938299908781, 'Universidad del Valle de Guatemala'],
[-6.7505593,-35.64545021761968, 'Universidade Federal da Paraíba/CAVN'],
[-27.60341335,-48.5224424733554, 'Federal University of Santa Catarina'],
[-30.03331505,-51.21994396572513, 'UFRGS Campus Centro'],
[-22.8533498,-43.233170287422354, 'Universidade Federal do Rio de Janeiro'],
[38.69998655,-9.184641177083622, 'Palácio Burnay'],
[-23.565220099999998,-46.71258298223419, 'Universidade de São Paulo (Portaria 1)'],
[41.5573185,-8.3978382, 'Universidade do Minho'],
[-7.7659014,110.3784142, 'Universitas Gadjah Mada'],
[39.48088165,-0.34205024985363447, 'Campus de Vera de la Universitat Politècnica de València'],
[50.821212700000004,4.34955336942806, 'UCLouvain Bruxelles Saint-Gilles'],
[53.3068763,-6.224625093340977, 'University College Dublin (Belfield Campus)'],
[48.14907275,11.567444920339295, 'Technical University Munich'],
[41.07573825,-81.51145320375983, 'University of Akron'],
[53.52682,-113.5244937350756, 'University of Alberta'],
[52.36813335,4.889804155733945, 'University of Amsterdam'],
[36.09352375,-94.17708979491738, 'University of Arkansas'],
[37.97003795,23.76523669720041, 'National and Kapodistrian University of Athens - Campus'],
[44.7912511,20.4784348, 'Faculty of Security Studies, University of Belgrade'],
[52.4522956,-1.9312856726008194, 'The Teaching and Learning Building'],
[-37.3285798,-59.1385728, 'National University of Central Buenos Aires'],
[52.210945550000005,0.09200497637871279, 'University of Cambridge'],
[35.655730250000005,-97.47032859449375, 'University of Central Oklahoma'],
[41.79139685,-87.60084387193544, 'The University of Chicago'],
[39.1318613,-84.51576195582436, 'University of Cincinnati'],
[40.00442,-105.26706, 'University of Colorado at Boulder'],
[41.82175755,-72.24277535505323, 'University of Connecticut'],
[32.8487635,-96.92256763370509, 'University of Dallas'],
[47.5551371,21.6185884, 'University of Debrecen Learning Center'],
[39.6803338,-75.75307489920786, 'University of Delaware'],
[-34.962507,-71.216971, 'University of Delaware'],
[51.87703035,0.9500788585686786, 'University of Essex'],
[38.5683402,-7.9102649, 'University of Évora'],
[29.6328837,-82.34901302237435, 'University of Florida'],
[57.69854645,11.971242155543006, 'University of Gothenburg'],
[54.08943465,13.404874267720633, 'University of Greifswald'],
[53.5641091,9.994978875267606, 'Universität Hamburg'],
[21.3320662,-157.9218882, 'University of Hawaii'],
[60.175648300000006,24.953550020522073, 'University of Helsinki'],
[8.484273949999999,4.673080587006053, 'University of Ilorin'],
[9.6844884,80.02269268168564, 'University Of Jaffna'],
[38.953491799999995,-95.26308879955823, 'University of Kansas'],
[12.392813400000001,75.09294870492612, 'Central University Of Kerala'],
[51.527658200000005,-0.1035244775461434, 'City, University of London'],
[36.72312445,-4.449654826804728, 'University Regional Hospital of Málaga'],
[3.1257608,101.65553478301041, 'University of Malaya'],
[53.4657087,-2.232734319907597, 'University of Manchester'],
[42.2942142,-83.71003893509601, 'University of Michigan'],
[38.93641465,-92.32970301784542, 'University of Missouri'],
[6.79722735,79.90122421406977, 'University of Moratuwa'],
[19.07112,72.85629, 'University of Mumbai'],
[40.8229219,-96.70405844999999, 'University of Nebraska, Lincoln - Practice Field'],
[40.8305567,-96.6697373, 'University of Nebraska - Lincoln (East Campus)'],
[41.29091365,-72.96263883692575, 'University of New Haven'],
[-33.91759945,151.23126487290787, 'University of New South Wales'],
[41.704567749999995,-86.23822026017265, 'University of Notre Dame du Lac'],
[35.1959878,-97.44570827599858, 'University of Oklahoma'],
[45.42252705,-75.68339041611182, 'University of Ottawa'],
[51.75254605,-1.2143299631547007, 'Old Road Campus, University of Oxford'],
[45.41667,11.86667, 'University of Padua'],
[45.186926549999995,9.156876823159685, 'University of Pavia'],
[39.9493382,-75.1896439962691, 'University of Pennsylvania'],
[37.9417,23.653, 'University of Piraeus'],
[-25.6513746,28.17938670152091, 'University of Pretoria, Faculty of Veterinary Science, Onderstepoort'],
[40.96214545,-5.66905879509083, 'University of Salamanca International Courses'],
[-23.56096405,-46.72770807289966, 'University of São Paulo'],
[43.82157735,18.309199627076516, 'International University in Sarajevo'],
[34.0218833,-118.28586662125, 'University of Southern California'],
[-33.8842684,18.62729953211983, 'University of Stellenbosch Business School'],
[58.38088965,26.719647526956543, 'University of Tartu'],
[35.70458395,51.39476104247319, 'University of Tehran'],
[30.2851494,-97.73393515146053, 'University of Texas at Austin'],
[43.663461999999996,-79.39775966248058, 'University of Toronto'],
[48.53405945,9.071244429234808, 'Climate Garden of University Tuebingen'],
[52.2521155,6.8502519, 'University of Twente'],
[40.762813699999995,-111.83687191368261, 'University of Utah'],
[48.2131284,16.360685994114505, 'University of Vienna'],
[52.21195535,20.983172979882, 'University of Warsaw, Faculty of Physics'],
[47.655622750000006,-122.30272238357196, 'University of Washington'],
[47.75946,-122.19099, 'University of Washington - Bothell Campus'],
[43.4701994,-80.54524293779451, 'University of Waterloo'],
[30.5479646,-87.21620152987073, 'University of West Florida'],
[43.0464346,-89.4301097018523, 'University of Wisconsin Arboretum'],
[31.4932564,74.29502816771938, 'University of the Punjab'],
[-26.1888766,28.024791203071317, 'University of the Witwatersrand'],
[54.7219118,25.336616247800787, 'Vilnius Gediminas Technical University'],
[54.682847,25.28784063939981, 'Vilnius University'],
[37.546124649999996,-77.45406089907547, 'Virginia Commonwealth University'],
[37.22192675,-80.42728184013652, 'Virginia Polytechnic Institute and State University'],
[18.520174,73.837038, 'Virginia Polytechnic Institute and State University'],
[52.2216394,21.00737979000361, 'Warsaw University of Technology'],
[46.7337716,-117.14980348311619, 'Washington State University'],
[42.356315,-83.072078, 'Wayne State'],
[47.0844286,-118.9400452, 'Weber'],
[31.907849900000002,34.81334092444211, 'Weizmann Institute of Science'],
[32.7139413,-117.0372503, 'Western University'],
[39.1513078,-84.47083471474068, 'Xavier University'],
[30.588607449999998,31.48192973657335, 'Zagazig University'],
[33.6842062,73.0555742, 'Allama Iqbal Open University'],
[33.4213174,-111.93315932269833, 'Arizona State University'],
[35.627454,-99.385053, 'Arizona State University'],
[39.20883,-96.58845116318602, 'Kansas State University'],
[40.4506776,-3.717818286212092, 'Facultad de Educación, Universidad Complutense de Madrid'],
[38.2187045,21.747894895431557, 'University of Patras'],
[45.41667,11.86667, 'University of Padua']
];
