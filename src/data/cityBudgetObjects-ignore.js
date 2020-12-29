const cityBudgetObjectsIgnore = [
  {
    Cs: 'Alameda, CA',
    Population: '75,126',
    Fy: '2021',
    Gf: '$225,500,000',
    Pb: '$31,570,000',
    Pbc: '$420',
  },
  {
    Cs: 'Alhambra, CA',
    Population: '84,649',
    Fy: '2021',
    Gf: '$149,846,632',
    Pb: '$29,863,317',
    Pbc: '$353',
  },
  {
    Cs: 'Anaheim, CA',
    Population: '350,365',
    Fy: '2021',
    Gf: '$427,947,397',
    Pb: '$127,398,832',
    Pbc: '$364',
  },
  {
    Cs: 'Antioch, CA',
    Population: '113,901',
    Fy: '2021',
    Gf: '$160,164,099',
    Pb: '$47,337,250',
    Pbc: '$416',
  },
  {
    Cs: 'Apple Valley, CA',
    Population: '73,508',
    Fy: '2021',
    Gf: '$102,800,897',
    Pb: '$16,311,988',
    Pbc: '$222',
  },
  {
    Cs: 'Atlanta, GA',
    Population: '506,811',
    Fy: '2021',
    Gf: '$673,400,000',
    Pb: '$248,500,000',
    Pbc: '$490',
  },
  {
    Cs: 'Auburn, CA',
    Population: '14,195',
    Fy: '2020',
    Gf: '$12,378,627',
    Pb: '$4,277,354',
    Pbc: '$301',
  },
  {
    Cs: 'Austin, TX',
    Population: '978,908',
    Fy: '2020',
    Gf: '$1,088,000,000',
    Pb: '$434,475,745',
    Pbc: '$444',
  },
  {
    Cs: 'Bakersfield, CA',
    Population: '384,145',
    Fy: '2021',
    Gf: '$628,000,000',
    Pb: '$121,570,000',
    Pbc: '$316',
  },
  {
    Cs: 'Baldwin Park, CA',
    Population: '75,390',
    Fy: '',
    Gf: '$28,601,305',
    Pb: '$18,876,861',
    Pbc: '$250',
  },
  {
    Cs: 'Baltimore, MD',
    Population: '593,490',
    Fy: '2021',
    Gf: '$1,930,000,000',
    Pb: '$536,000,000',
    Pbc: '$903',
  },
  {
    Cs: 'Bellevue, WA',
    Population: '147,599',
    Fy: '2020',
    Gf: '$268,000,000',
    Pb: '$43,000,000',
    Pbc: '$291',
  },
  {
    Cs: 'Berkeley, CA',
    Population: '121,643',
    Fy: '2021',
    Gf: '$447,737,674',
    Pb: '$77,223,242',
    Pbc: '$635',
  },
  {
    Cs: 'Boston, MA',
    Population: '692,600',
    Fy: '2021',
    Gf: '$3,650,000,000',
    Pb: '$414,000,000',
    Pbc: '$598',
  },
  {
    Cs: 'Boulder, CO',
    Population: '107,353',
    Fy: '2020',
    Gf: '$132,257,455',
    Pb: '$31,741,789',
    Pbc: '$296',
  },
  {
    Cs: 'Buena Park, CA',
    Population: '82,421',
    Fy: '2020',
    Gf: '$78,950,710',
    Pb: '$28,706,710',
    Pbc: '$348',
  },
  {
    Cs: 'Burbank, CA',
    Population: '103,695',
    Fy: '2020',
    Gf: '$197,525,256',
    Pb: '$61,125,859',
    Pbc: '$589',
  },
  {
    Cs: 'Camarillo, CA',
    Population: '69,888',
    Fy: '2020',
    Gf: '$37,520,768',
    Pb: '$18,096,760',
    Pbc: '$259',
  },
  {
    Cs: 'Cambridge, MA',
    Population: '118,977',
    Fy: '2020',
    Gf: '$665,550,940',
    Pb: '$63,384,730',
    Pbc: '$533',
  },
  {
    Cs: 'Carlsbad, CA',
    Population: '115,382',
    Fy: '2020',
    Gf: '$167,100,000',
    Pb: '$42,000,000',
    Pbc: '$364',
  },
  {
    Cs: 'Carson, CA',
    Population: '91,714',
    Fy: '',
    Gf: '$89,259,259',
    Pb: '$24,100,000',
    Pbc: '$263',
  },
  {
    Cs: 'Charlotte, NC',
    Population: '885,708',
    Fy: '2021',
    Gf: '$2,550,000,000',
    Pb: '$254,000,000',
    Pbc: '$287',
  },
  {
    Cs: 'Chicago, IL',
    Population: '2,693,976',
    Fy: '2021',
    Gf: '$11,650,000,000',
    Pb: '$1,680,000,000',
    Pbc: '$624',
  },
  {
    Cs: 'Chico, CA',
    Population: '97,962',
    Fy: '2020',
    Gf: '$56,925,113',
    Pb: '$26,060,106',
    Pbc: '$266',
  },
  {
    Cs: 'Chino Hills, CA',
    Population: '91,583',
    Fy: '2021',
    Gf: '$100,442,044',
    Pb: '$43,578,529',
    Pbc: '$476',
  },
  {
    Cs: 'Chino, CA',
    Population: '86,777',
    Fy: '2021',
    Gf: '$44,242,867',
    Pb: '$15,788,700',
    Pbc: '$182',
  },
  {
    Cs: 'Chula Vista, CA',
    Population: '274,492',
    Fy: '2021',
    Gf: '$206,700,000',
    Pb: '$95,082,000',
    Pbc: '$346',
  },
  {
    Cs: 'Citrus Heights, CA',
    Population: '88,890',
    Fy: '2020',
    Gf: '$39,600,000',
    Pb: '$22,503,906',
    Pbc: '$253',
  },
  {
    Cs: 'Cleveland, OH',
    Population: '381,009',
    Fy: '2020',
    Gf: '$670,650,748',
    Pb: '$217,908,375',
    Pbc: '$572',
  },
  {
    Cs: 'Clovis, CA',
    Population: '118,014',
    Fy: '2020',
    Gf: '$76,800,000',
    Pb: '$39,000,000',
    Pbc: '$330',
  },
  {
    Cs: 'Columbia, MO',
    Population: '123,195',
    Fy: '2020',
    Gf: '$90,418,132',
    Pb: '$26,229,694',
    Pbc: '$213',
  },
  {
    Cs: 'Columbus, OH',
    Population: '898,553',
    Fy: '2020',
    Gf: '$969,500,000',
    Pb: '$359,000,000',
    Pbc: '$400',
  },
  {
    Cs: 'Compton, CA',
    Population: '96,455',
    Fy: '',
    Gf: '$69,438,061',
    Pb: '$22,914,560',
    Pbc: '$238',
  },
  {
    Cs: 'Concord, CA',
    Population: '129,295',
    Fy: '2021',
    Gf: '$16,020,933',
    Pb: '$8,446,606',
    Pbc: '$65',
  },
  {
    Cs: 'Corona, CA',
    Population: '168,819',
    Fy: '2020',
    Gf: '$144,420,000',
    Pb: '$47,460,000',
    Pbc: '$281',
  },
  {
    Cs: 'Costa Mesa, CA',
    Population: '113,003',
    Fy: '2020',
    Gf: '$157,330,000',
    Pb: '$46,220,000',
    Pbc: '$409',
  },
  {
    Cs: 'Cupertino, CA',
    Population: '59,276',
    Fy: '2020',
    Gf: '$80,104,468',
    Pb: '$14,792,330',
    Pbc: '$250',
  },
  {
    Cs: 'Dallas, TX',
    Population: '1,343,573',
    Fy: '2019',
    Gf: '$3,600,000,000',
    Pb: '$509,000,000',
    Pbc: '$379',
  },
  {
    Cs: 'Daly City, CA',
    Population: '106,280',
    Fy: '2020',
    Gf: '$85,785,000',
    Pb: '$34,785,000',
    Pbc: '$327',
  },
  {
    Cs: 'Davis, CA',
    Population: '69,413',
    Fy: '2020',
    Gf: '$68,479,998',
    Pb: '$19,945,541',
    Pbc: '$287',
  },
  {
    Cs: 'Denver, CO',
    Population: '727,211',
    Fy: '2020',
    Gf: '$1,490,000,000',
    Pb: '$588,000,000',
    Pbc: '$809',
  },
  {
    Cs: 'Detroit, MI',
    Population: '670,031',
    Fy: '2021',
    Gf: '$1,100,000,000',
    Pb: '$330,000,000',
    Pbc: '$493',
  },
  {
    Cs: 'Downey, CA',
    Population: '111,772',
    Fy: '',
    Gf: '$91,147,530',
    Pb: '$36,459,012',
    Pbc: '$326',
  },
  {
    Cs: 'Dublin, CA',
    Population: '64,826',
    Fy: '2020',
    Gf: '$78,930,783',
    Pb: '$19,078,235',
    Pbc: '$294',
  },
  {
    Cs: 'El Cajon, CA',
    Population: '102,708',
    Fy: '2020',
    Gf: '$78,097,274',
    Pb: '$37,301,719',
    Pbc: '$363',
  },
  {
    Cs: 'El Monte, CA',
    Population: '113,475',
    Fy: '',
    Gf: '$76,310,439',
    Pb: '$27,471,758',
    Pbc: '$242',
  },
  {
    Cs: 'Elk Grove, CA',
    Population: '174,775',
    Fy: '2021',
    Gf: '$74,700,000',
    Pb: '$50,049,000',
    Pbc: '$286',
  },
  {
    Cs: 'Escondido, CA',
    Population: '151,625',
    Fy: '2021',
    Gf: '$107,596,800',
    Pb: '$45,633,100',
    Pbc: '$301',
  },
  {
    Cs: 'Fairfield, CA',
    Population: '117,133',
    Fy: '2020',
    Gf: '$103,235,966',
    Pb: '$44,929,507',
    Pbc: '$384',
  },
  {
    Cs: 'Folsom, CA',
    Population: '81,328',
    Fy: '2019',
    Gf: '$89,377,187',
    Pb: '$22,975,106',
    Pbc: '$282',
  },
  {
    Cs: 'Fontana, CA',
    Population: '214,547',
    Fy: '2020',
    Gf: '$101,977,600',
    Pb: '$60,900,000',
    Pbc: '$284',
  },
  {
    Cs: 'Fremont, CA',
    Population: '241,100',
    Fy: '2021',
    Gf: '$213,400,000',
    Pb: '$102,432,000',
    Pbc: '$425',
  },
  {
    Cs: 'Fresno, CA',
    Population: '530,093',
    Fy: '2021',
    Gf: '$346,000,000',
    Pb: '$201,000,000',
    Pbc: '$379',
  },
  {
    Cs: 'Fullerton, CA',
    Population: '139,640',
    Fy: '2021',
    Gf: '$106,087,083',
    Pb: '$49,860,929',
    Pbc: '$357',
  },
  {
    Cs: 'Garden Grove, CA',
    Population: '172,646',
    Fy: '2021',
    Gf: '$132,373,300',
    Pb: '$67,738,400',
    Pbc: '$392',
  },
  {
    Cs: 'Glendale, CA',
    Population: '201,603',
    Fy: '2020',
    Gf: '$243,000,000',
    Pb: '$97,253,000',
    Pbc: '$482',
  },
  {
    Cs: 'Grand Rapids, MI',
    Population: '200,217',
    Fy: '2021',
    Gf: '$146,078,000',
    Pb: '$56,962,000',
    Pbc: '$285',
  },
  {
    Cs: 'Hawthorne, CA',
    Population: '84,293',
    Fy: '',
    Gf: '$81,570,532',
    Pb: '$38,338,150',
    Pbc: '$455',
  },
  {
    Cs: 'Hayward, CA',
    Population: '159,620',
    Fy: '2020',
    Gf: '$172,103,000',
    Pb: '$78,725,000',
    Pbc: '$493',
  },
  {
    Cs: 'Hemet, CA',
    Population: '85,334',
    Fy: '2019',
    Gf: '$48,074,260',
    Pb: '$17,774,605',
    Pbc: '$208',
  },
  {
    Cs: 'Hesperia, CA',
    Population: '95,750',
    Fy: '2020',
    Gf: '$32,158,337',
    Pb: '$17,086,541',
    Pbc: '$178',
  },
  {
    Cs: 'Houston, TX',
    Population: '2,320,268',
    Fy: '2020',
    Gf: '$5,100,000,000',
    Pb: '$934,000,000',
    Pbc: '$403',
  },
  {
    Cs: 'Huntington Beach, CA',
    Population: '200,641',
    Fy: '2021',
    Gf: '$217,000,000',
    Pb: '$81,186,000',
    Pbc: '$405',
  },
  {
    Cs: 'Indianapolis, IN',
    Population: '876,384',
    Fy: '2020',
    Gf: '$1,200,000,000',
    Pb: '$254,000,000',
    Pbc: '$290',
  },
  {
    Cs: 'Indio, CA',
    Population: '91,765',
    Fy: '2019',
    Gf: '$88,175,683',
    Pb: '$28,819,402',
    Pbc: '$314',
  },
  {
    Cs: 'Inglewood, CA',
    Population: '109,673',
    Fy: '',
    Gf: '$250,980,417',
    Pb: '$72,784,321',
    Pbc: '$664',
  },
  {
    Cs: 'Irvine, CA',
    Population: '287,401',
    Fy: '2021',
    Gf: '$214,000,000',
    Pb: '$91,400,000',
    Pbc: '$318',
  },
  {
    Cs: 'Jurupa Valley, CA',
    Population: '109,527',
    Fy: '2019',
    Gf: '36,882,559',
    Pb: '$18,840,511',
    Pbc: '$172',
  },
  {
    Cs: 'Lake Forest, CA',
    Population: '85,531',
    Fy: '2020',
    Gf: '$49,643,700',
    Pb: '$19,233,200',
    Pbc: '$225',
  },
  {
    Cs: 'Lakewood, CA',
    Population: '80,048',
    Fy: '',
    Gf: '$74,066,294',
    Pb: '$13,331,933',
    Pbc: '$167',
  },
  {
    Cs: 'Lancaster, CA',
    Population: '160,316',
    Fy: '2021',
    Gf: '$74,778,881',
    Pb: '$31,474,754',
    Pbc: '$196',
  },
  {
    Cs: 'Larkspur, CA',
    Population: '12,254',
    Fy: '2018',
    Gf: '$17,459,517',
    Pb: '$3,914,650',
    Pbc: '$319',
  },
  {
    Cs: 'Lincoln, NH',
    Population: '293,905',
    Fy: '2021',
    Gf: '$176,517,000',
    Pb: '$43,247,000',
    Pbc: '$147',
  },
  {
    Cs: 'Livermore, CA',
    Population: '90,189',
    Fy: '2019',
    Gf: '$292,813,352',
    Pb: '$39,235,218',
    Pbc: '$435',
  },
  {
    Cs: 'Long Beach, CA',
    Population: '462,628',
    Fy: '2020',
    Gf: '$556,000,000',
    Pb: '$243,800,000',
    Pbc: '$527',
  },
  {
    Cs: 'Los Altos, CA',
    Population: '30,089',
    Fy: '2021',
    Gf: '$43,868,305',
    Pb: '$12,985,378',
    Pbc: '$432',
  },
  {
    Cs: 'Los Angeles, CA',
    Population: '3,979,576',
    Fy: '2021',
    Gf: '$6,610,000,000',
    Pb: '$1,700,000,000',
    Pbc: '$427',
  },
  {
    Cs: 'Louisville, KY',
    Population: '617,638',
    Fy: '2021',
    Gf: '$610,000,000',
    Pb: '$179,000,000',
    Pbc: '$290',
  },
  {
    Cs: 'Lynwood, CA',
    Population: '69,772',
    Fy: '',
    Gf: '$97,670,433',
    Pb: '$11,720,452',
    Pbc: '$168',
  },
  {
    Cs: 'Manchester, NH',
    Population: '112,525',
    Fy: '2021',
    Gf: '$159,778,366',
    Pb: '$27,376,629',
    Pbc: '$243',
  },
  {
    Cs: 'Manteca, CA',
    Population: '83,028',
    Fy: '2018',
    Gf: '$38,699,536',
    Pb: '$15,589,299',
    Pbc: '$188',
  },
  {
    Cs: 'Memphis, TN',
    Population: '651,073',
    Fy: '2021',
    Gf: '$630,000,000',
    Pb: '$282,000,000',
    Pbc: '$433',
  },
  {
    Cs: 'Menifee, CA',
    Population: '94,756',
    Fy: '2020',
    Gf: '$62,575,959',
    Pb: '$11,369,583',
    Pbc: '$120',
  },
  {
    Cs: 'Merced, CA',
    Population: '277,680',
    Fy: '2020',
    Gf: '$41,943,276',
    Pb: '$20,325,379',
    Pbc: '$73',
  },
  {
    Cs: 'Miami, FL',
    Population: '467,963',
    Fy: '2021',
    Gf: '$807,000,000',
    Pb: '$276,796,000',
    Pbc: '$591',
  },
  {
    Cs: 'Milpitas, CA',
    Population: '84,196',
    Fy: '2021',
    Gf: '$116,717,882',
    Pb: '$38,356,020',
    Pbc: '$456',
  },
  {
    Cs: 'Milwaukee, WI',
    Population: '590,157',
    Fy: '2020',
    Gf: '$655,066,079',
    Pb: '$297,400,000',
    Pbc: '$504',
  },
  {
    Cs: 'Mission Viejo, CA',
    Population: '94,381',
    Fy: '2021',
    Gf: '$61,362,808',
    Pb: '$20,780,678',
    Pbc: '$220',
  },
  {
    Cs: 'Modesto, CA',
    Population: '215,030',
    Fy: '2021',
    Gf: '$138,239,044',
    Pb: '$71,690,000',
    Pbc: '$333',
  },
  {
    Cs: 'Moreno Valley, CA',
    Population: '213,055',
    Fy: '2021',
    Gf: '$116,773,613',
    Pb: '$46,500,000',
    Pbc: '$218',
  },
  {
    Cs: 'Mountain View, CA',
    Population: '82,739',
    Fy: '2020',
    Gf: '$137,700,000',
    Pb: '$42,600,000',
    Pbc: '$515',
  },
  {
    Cs: 'Murrieta, CA',
    Population: '116,223',
    Fy: '2019',
    Gf: '$44,480,045',
    Pb: '$16,362,649',
    Pbc: '$141',
  },
  {
    Cs: 'Napa, CA',
    Population: '78,130',
    Fy: '2021',
    Gf: '$90,625,200',
    Pb: '$30,104,900',
    Pbc: '$385',
  },
  {
    Cs: 'Nashua, NH',
    Population: '89,355',
    Fy: '2019',
    Gf: '$262,763,651',
    Pb: '$30,426,909',
    Pbc: '$341',
  },
  {
    Cs: 'Nashville, TN',
    Population: '670,820',
    Fy: '2021',
    Gf: '$914,000,000',
    Pb: '$290,000,000',
    Pbc: '$432',
  },
  {
    Cs: 'New York, NY',
    Population: '8,336,817',
    Fy: '2021',
    Gf: '$89,300,000,000',
    Pb: '$5,596,752,000',
    Pbc: '$671',
  },
  {
    Cs: 'Newark, NJ',
    Population: '282,011',
    Fy: '2020',
    Gf: '$702,000,000',
    Pb: '$228,000,000',
    Pbc: '$808',
  },
  {
    Cs: 'Newport Beach, CA',
    Population: '84,534',
    Fy: '2021',
    Gf: '$219,859,038',
    Pb: '$67,202,345',
    Pbc: '$795',
  },
  {
    Cs: 'Norwalk, CA',
    Population: '105,549',
    Fy: '',
    Gf: '$54,487,324',
    Pb: '$18,525,690',
    Pbc: '$176',
  },
  {
    Cs: 'Oakland, CA',
    Population: '429,082',
    Fy: '2021',
    Gf: '$684,546,119',
    Pb: '$301,809,000',
    Pbc: '$703',
  },
  {
    Cs: 'Oceanside, CA',
    Population: '175,742',
    Fy: '2020',
    Gf: '$172,860,000',
    Pb: '$61,820,000',
    Pbc: '$352',
  },
  {
    Cs: 'Oklahoma City, OK',
    Population: '655,057',
    Fy: '2021',
    Gf: '$456,000,000',
    Pb: '$226,000,000',
    Pbc: '$345',
  },
  {
    Cs: 'Omaha, NE',
    Population: '478,192',
    Fy: '2020',
    Gf: '$420,000,000',
    Pb: '$159,000,000',
    Pbc: '$333',
  },
  {
    Cs: 'Ontario, CA',
    Population: '181,107',
    Fy: '2020',
    Gf: '$237,237,994',
    Pb: '$94,546,750',
    Pbc: '$522',
  },
  {
    Cs: 'Orange, CA',
    Population: '139,484',
    Fy: '2020',
    Gf: '$116,130,315',
    Pb: '$49,487,891',
    Pbc: '$355',
  },
  {
    Cs: 'Orlando, FL',
    Population: '287,442',
    Fy: '2020',
    Gf: '$517,000,000',
    Pb: '$163,000,000',
    Pbc: '$567',
  },
  {
    Cs: 'Oxnard, CA',
    Population: '208,881',
    Fy: '2021',
    Gf: '$140,819,698',
    Pb: '$62,841,663',
    Pbc: '$301',
  },
  {
    Cs: 'Palmdale, CA',
    Population: '152,750',
    Fy: '',
    Gf: '$83,817,000',
    Pb: '$31,012,290',
    Pbc: '$203',
  },
  {
    Cs: 'Pasadena, CA',
    Population: '137,122',
    Fy: '',
    Gf: '$269,293,548',
    Pb: '$83,481,000',
    Pbc: '$609',
  },
  {
    Cs: 'Perris, CA',
    Population: '79,291',
    Fy: '2020',
    Gf: '$49,197,059',
    Pb: '$19,718,647',
    Pbc: '$249',
  },
  {
    Cs: 'Philadelphia, PA',
    Population: '1,584,064',
    Fy: '2020',
    Gf: '$5,030,000,000',
    Pb: '$726,000,000',
    Pbc: '$458',
  },
  {
    Cs: 'Phoenix, AZ',
    Population: '1,680,992',
    Fy: '2021',
    Gf: '$1,438,000,000',
    Pb: '$721,000,000',
    Pbc: '$429',
  },
  {
    Cs: 'Pittsburgh, PA',
    Population: '300,286',
    Fy: '2020',
    Gf: '$608,000,000',
    Pb: '$114,000,000',
    Pbc: '$380',
  },
  {
    Cs: 'Placentia, CA',
    Population: '51,233',
    Fy: '2020',
    Gf: '$38,263,900',
    Pb: '$13,290,900',
    Pbc: '$259',
  },
  {
    Cs: 'Pleasanton, CA',
    Population: '81,777',
    Fy: '2018',
    Gf: '$172,438,566',
    Pb: '$27,912,954',
    Pbc: '$341',
  },
  {
    Cs: 'Pomona, CA',
    Population: '149,058',
    Fy: '',
    Gf: '$117,810,508',
    Pb: '$62,439,569',
    Pbc: '$419',
  },
  {
    Cs: 'Porterville, CA',
    Population: '59,599',
    Fy: '2018',
    Gf: '$25,857,092',
    Pb: '$9,837,429',
    Pbc: '$165',
  },
  {
    Cs: 'Portland, OR',
    Population: '654,741',
    Fy: '2021',
    Gf: '$719,400,000',
    Pb: '$235,243,000',
    Pbc: '$359',
  },
  {
    Cs: 'Raleigh, NC',
    Population: '474,069',
    Fy: '2021',
    Gf: '$507,400,000',
    Pb: '$111,000,000',
    Pbc: '$234',
  },
  {
    Cs: 'Rancho Cordova, CA',
    Population: '75,087',
    Fy: '2018',
    Gf: '$52,417,943',
    Pb: '$19,170,607',
    Pbc: '$255',
  },
  {
    Cs: 'Rancho Cucamonga, CA',
    Population: '177,603',
    Fy: '2020',
    Gf: '$88,290,270',
    Pb: '$42,327,060',
    Pbc: '$238',
  },
  {
    Cs: 'Redding, CA',
    Population: '92,590',
    Fy: '2021',
    Gf: '$83,147,490',
    Pb: '$31,648,140',
    Pbc: '$342',
  },
  {
    Cs: 'Redlands, CA',
    Population: '71,513',
    Fy: '2019',
    Gf: '$69,689,499',
    Pb: '$28,340,014',
    Pbc: '$396',
  },
  {
    Cs: 'Redondo Beach, CA',
    Population: '66,748',
    Fy: '',
    Gf: '$170,450,214',
    Pb: '$47,726,060',
    Pbc: '$715',
  },
  {
    Cs: 'Redwood City, CA',
    Population: '85,925',
    Fy: '2020',
    Gf: '$136,885,776',
    Pb: '$46,466,760',
    Pbc: '$541',
  },
  {
    Cs: 'Reno, NV',
    Population: '255,601',
    Fy: '2020',
    Gf: '$209,000,000',
    Pb: '$75,240,000',
    Pbc: '$294',
  },
  {
    Cs: 'Rialto, CA',
    Population: '103,526',
    Fy: '2019',
    Gf: '$91,124,521',
    Pb: '$33,004,705',
    Pbc: '$319',
  },
  {
    Cs: 'Richmond, CA',
    Population: '110,567',
    Fy: '2020',
    Gf: '$176,208,965',
    Pb: '$71,811,039',
    Pbc: '$649',
  },
  {
    Cs: 'Riverside, CA',
    Population: '331,360',
    Fy: '2021',
    Gf: '$278,400,000',
    Pb: '$124,000,000',
    Pbc: '$374',
  },
  {
    Cs: 'Roseville, CA',
    Population: '141,500',
    Fy: '2020',
    Gf: '$157,855,620',
    Pb: '$44,518,481',
    Pbc: '$315',
  },
  {
    Cs: 'Sacramento, CA',
    Population: '513,624',
    Fy: '2021',
    Gf: '$625,000,000',
    Pb: '$157,000,000',
    Pbc: '$306',
  },
  {
    Cs: 'Salinas, CA',
    Population: '155,465',
    Fy: '2020',
    Gf: '$117,972,113',
    Pb: '$52,247,657',
    Pbc: '$336',
  },
  {
    Cs: 'Salt Lake City, UT',
    Population: '200,591',
    Fy: '2021',
    Gf: '$326,000,000',
    Pb: '$84,000,000',
    Pbc: '$419',
  },
  {
    Cs: 'San Antonio, TX',
    Population: '1,547,253',
    Fy: '2020',
    Gf: '$2,900,000,000',
    Pb: '$474,500,000',
    Pbc: '$307',
  },
  {
    Cs: 'San Bernardino, CA',
    Population: '215,784',
    Fy: '2020',
    Gf: '$126,827,000',
    Pb: '$80,164,900',
    Pbc: '$372',
  },
  {
    Cs: 'San Diego, CA',
    Population: '1,423,851',
    Fy: '2021',
    Gf: '$4,344,000,000',
    Pb: '$566,000,000',
    Pbc: '$398',
  },
  {
    Cs: 'San Dimas, CA',
    Population: '33,371',
    Fy: '',
    Gf: '$23,341,194',
    Pb: '$7,235,770',
    Pbc: '$217',
  },
  {
    Cs: 'San Francisco, CA',
    Population: '881,549',
    Fy: '2021',
    Gf: '$5,083,000,000',
    Pb: '$612,000,000',
    Pbc: '$694',
  },
  {
    Cs: 'San Jose, CA',
    Population: '1,021,795',
    Fy: '2021',
    Gf: '$4,130,000,000',
    Pb: '$440,500,000',
    Pbc: '$431',
  },
  {
    Cs: 'San Leandro, CA',
    Population: '88,815',
    Fy: '2021',
    Gf: '$120,349,415',
    Pb: '$42,000,485',
    Pbc: '$473',
  },
  {
    Cs: 'San Marcos, CA',
    Population: '96,664',
    Fy: '2018',
    Gf: '$73,193,099',
    Pb: '$18,348,633',
    Pbc: '$190',
  },
  {
    Cs: 'San Mateo, CA',
    Population: '104,430',
    Fy: '2018',
    Gf: '$118,093,598',
    Pb: '$39,315,602',
    Pbc: '$376',
  },
  {
    Cs: 'San Ramon, CA',
    Population: '75,995',
    Fy: '2020',
    Gf: '$48,144,368',
    Pb: '$14,812,737',
    Pbc: '$195',
  },
  {
    Cs: 'Santa Ana, CA',
    Population: '332,318',
    Fy: '2021',
    Gf: '$325,000,000',
    Pb: '$140,800,000',
    Pbc: '$424',
  },
  {
    Cs: 'Santa Barbara, CA',
    Population: '91,364',
    Fy: '2020',
    Gf: '$141,719,541',
    Pb: '$45,555,190',
    Pbc: '$499',
  },
  {
    Cs: 'Santa Clara, CA',
    Population: '130,365',
    Fy: '2021',
    Gf: '$269,399,009',
    Pb: '$77,061,165',
    Pbc: '$591',
  },
  {
    Cs: 'Santa Clarita, CA',
    Population: '212,979',
    Fy: '',
    Gf: '$115,613,942',
    Pb: '$27,747,346',
    Pbc: '$130',
  },
  {
    Cs: 'Santa Cruz, CA',
    Population: '64,608',
    Fy: '2020',
    Gf: '$107,000,000',
    Pb: '$30,145,349',
    Pbc: '$467',
  },
  {
    Cs: 'Santa Maria, CA',
    Population: '107,263',
    Fy: '2018',
    Gf: '$73,736,784',
    Pb: '$31,468,959',
    Pbc: '$293',
  },
  {
    Cs: 'Santa Monica, CA',
    Population: '89,736',
    Fy: '',
    Gf: '$412,884,660',
    Pb: '$103,221,165',
    Pbc: '$1,150',
  },
  {
    Cs: 'Santa Rosa, CA',
    Population: '176,753',
    Fy: '2021',
    Gf: '$177,300,000',
    Pb: '$62,200,000',
    Pbc: '$352',
  },
  {
    Cs: 'Seattle, WA',
    Population: '753,675',
    Fy: '2020',
    Gf: '$1,500,000,000',
    Pb: '$409,000,000',
    Pbc: '$543',
  },
  {
    Cs: 'Simi Valley, CA',
    Population: '125,613',
    Fy: '2020',
    Gf: '$74,595,013',
    Pb: '$36,131,593',
    Pbc: '$288',
  },
  {
    Cs: 'South Gate, CA',
    Population: '94,396',
    Fy: '',
    Gf: '$53,966,525',
    Pb: '$30,221,254',
    Pbc: '$320',
  },
  {
    Cs: 'Springfield, MA',
    Population: '153,606',
    Fy: '2019',
    Gf: '$656,191,374',
    Pb: '$45,395,084',
    Pbc: '$296',
  },
  {
    Cs: 'St. Paul, MN',
    Population: '308,096',
    Fy: '2020',
    Gf: '$320,000,000',
    Pb: '$105,500,000',
    Pbc: '$342',
  },
  {
    Cs: 'Stockton, CA',
    Population: '311,178',
    Fy: '2021',
    Gf: '$242,001,593',
    Pb: '$139,000,624',
    Pbc: '$447',
  },
  {
    Cs: 'Sunnyvale, CA',
    Population: '152,703',
    Fy: '2020',
    Gf: '$214,200,000',
    Pb: '$34,062,765',
    Pbc: '$223',
  },
  {
    Cs: 'Temecula, CA',
    Population: '114,761',
    Fy: '2020',
    Gf: '$78,311,792',
    Pb: '$34,860,436',
    Pbc: '$304',
  },
  {
    Cs: 'Thousand Oaks, CA',
    Population: '126,813',
    Fy: '2021',
    Gf: '$82,104,661',
    Pb: '$33,691,800',
    Pbc: '$266',
  },
  {
    Cs: 'Torrance, CA',
    Population: '145,438',
    Fy: '',
    Gf: '$213,585,913',
    Pb: '$85,434,365',
    Pbc: '$587',
  },
  {
    Cs: 'Tracy, CA',
    Population: '94,740',
    Fy: '2021',
    Gf: '$65,112,193',
    Pb: '$25,869,000',
    Pbc: '$273',
  },
  {
    Cs: 'Tucson, AZ',
    Population: '548,073',
    Fy: '2021',
    Gf: '$514,000,000',
    Pb: '$165,000,000',
    Pbc: '$301',
  },
  {
    Cs: 'Tulsa, OK',
    Population: '401,190',
    Fy: '2021',
    Gf: '$256,000,000',
    Pb: '$122,558,000',
    Pbc: '$305',
  },
  {
    Cs: 'Turlock, CA',
    Population: '73,631',
    Fy: '2021',
    Gf: '$41,805,860',
    Pb: '$21,099,634',
    Pbc: '$287',
  },
  {
    Cs: 'Tustin, CA',
    Population: '79,348',
    Fy: '2021',
    Gf: '$70,080,368',
    Pb: '$29,704,543',
    Pbc: '$374',
  },
  {
    Cs: 'Union City, CA',
    Population: '74,107',
    Fy: '2021',
    Gf: '$63,012,558',
    Pb: '$26,015,635',
    Pbc: '$351',
  },
  {
    Cs: 'Upland, CA',
    Population: '77,140',
    Fy: '2020',
    Gf: '$41,931,700',
    Pb: '$24,449,330',
    Pbc: '$317',
  },
  {
    Cs: 'Vacaville, CA',
    Population: '100,670',
    Fy: '2021',
    Gf: '$106,793,955',
    Pb: '$42,366,797',
    Pbc: '$421',
  },
  {
    Cs: 'Vallejo, CA',
    Population: '121,692',
    Fy: '2020',
    Gf: '$110,865,319',
    Pb: '$46,323,975',
    Pbc: '$381',
  },
  {
    Cs: 'Ventura, CA',
    Population: '109,106',
    Fy: '2020',
    Gf: '$119,357,227',
    Pb: '$41,083,707',
    Pbc: '$377',
  },
  {
    Cs: 'Victorville, CA',
    Population: '122,385',
    Fy: '2021',
    Gf: '$67,520,317',
    Pb: '$29,489,462',
    Pbc: '$241',
  },
  {
    Cs: 'Visalia, CA',
    Population: '134,605',
    Fy: '2019',
    Gf: '$89,582,316',
    Pb: '$39,996,621',
    Pbc: '$297',
  },
  {
    Cs: 'Vista, CA',
    Population: '101,638',
    Fy: '2021',
    Gf: '$77,267,270',
    Pb: '$23,767,048',
    Pbc: '$234',
  },
  {
    Cs: 'Washington, DC',
    Population: '705,749',
    Fy: '2021',
    Gf: '$9,824,000,000',
    Pb: '$522,000,000',
    Pbc: '$740',
  },
  {
    Cs: 'West Covina, CA',
    Population: '106,098',
    Fy: '',
    Gf: '$71,676,657',
    Pb: '$33,688,029',
    Pbc: '$318',
  },
  {
    Cs: 'Westminster, CA',
    Population: '90,643',
    Fy: '2021',
    Gf: '$65,039,665',
    Pb: '$34,123,441',
    Pbc: '$376',
  },
  {
    Cs: 'Whittier, CA',
    Population: '85,098',
    Fy: '2020',
    Gf: '$67,319,745',
    Pb: '$35,621,255',
    Pbc: '$419',
  },
  {
    Cs: 'Yuba City, CA',
    Population: '67,010',
    Fy: '2020',
    Gf: '$44,615,500',
    Pb: '$15,600,717',
    Pbc: '$233',
  },
]

export default cityBudgetObjectsIgnore
