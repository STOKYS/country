const socket = io();

let value = 0;

const quickinfo = [
  {
    title: "Germanic Tribes",
    year: "750BC - 768 AD",
    text: "<p>Germania (/dʒɜːrˈmeɪniə/ jur-MAY-nee-ə, Latin: [ɡɛrˈmaːnia]), also called Magna Germania (English: Great Germania), Germania Libera (English: Free Germania) or Germanic Barbaricum to distinguish it from the Roman provinces of the same name, was a large historical region in north-central Europe during the Roman era, which was associated by Roman authors with the Germanic peoples. The region stretched roughly from the Middle and Lower Rhine in the west to the Vistula in the east. It also extended as far south as the Upper and Middle Danube and Pannonia, and to the known parts of Scandinavia in the north. Archaeologically, these peoples correspond roughly to the Roman Iron Age of those regions. While apparently dominated by Germanic peoples, Magna Germania was inhabited by non-Germanic peoples as well, including Celts and Early Slavs and their precursors.</p><p>The Latin name Germania means \"land of the Germani\", but the etymology of the name Germani itself is uncertain. During the Gallic Wars of the 1st century BC, the Roman general Julius Caesar encountered peoples originating from beyond the Rhine. He referred to these people as Germani and their lands beyond the Rhine as Germania. In subsequent years, the Roman emperor Augustus sought to expand across the Rhine towards the Elbe, but these efforts were hampered by the victory of Arminius at the Battle of the Teutoburg Forest in 9 AD. The prosperous provinces of Germania Superior and Germania Inferior, sometimes collectively referred to as Roman Germania, were subsequently established in northeast Roman Gaul, while territories beyond the Rhine remained independent of Roman control.</p><p>From the 3rd century AD, Germanic peoples moving out of Magna Germania began encroaching upon and occupying parts of Roman Germania. This contributed to the fall of the Western Roman Empire in the 5th century AD, after which territories of Roman Germania were captured and settled by migrating Germanic peoples. Large parts of Germania subsequently became part of the Frankish Empire and the later Kingdom of Germany. The name of Germany in English and many other languages is derived from the name Germania.</p>"
  },
  {
    title: "Francia",
    year: "768 - 843",
    text: "<p>Francia, also called the Kingdom of the Franks (Latin: Regnum Francorum), Frankland, or Frankish\n                        Empire, was the largest post-Roman barbarian kingdom in Western Europe. It was ruled by the\n                        Franks during Late Antiquity and the Early Middle Ages. After the Treaty of Verdun in 843, West\n                        Francia became the predecessor of France, and East Francia became that of Germany. Francia was\n                        among the last surviving Germanic kingdoms from the Migration Period era before its partition in\n                        843.</p><p>The core Frankish territories inside the former Western Roman Empire were close to the Rhine and\n                        Maas rivers in the north. After a period where small kingdoms inter-acted with the remaining\n                        Gallo-Roman institutions to their south, a single kingdom uniting them was founded by Clovis I\n                        who was crowned King of the Franks in 496. His dynasty, the Merovingian dynasty, was eventually\n                        replaced by the Carolingian dynasty. Under the nearly continuous campaigns of Pepin of Herstal,\n                        Charles Martel, Pepin the Short, Charlemagne, and Louis the Pious—father, son, grandson,\n                        great-grandson and great-great-grandson—the greatest expansion of the Frankish empire was\n                        secured by the early 9th century, by this point dubbed as the Carolingian Empire.</p><p>During the Merovingian and Carolingian dynasties the Frankish realm was one large kingdom polity\n                        subdivided into several smaller kingdoms, often effectively independent. The geography and\n                        number of subkingdoms varied over time, but a basic split between eastern and western domains\n                        persisted. The eastern kingdom was initially called Austrasia, centred on the Rhine and Meuse,\n                        and expanding eastwards into central Europe. It evolved into a German kingdom, the Holy Roman\n                        Empire. The western kingdom Neustria was founded in Northern Roman Gaul, and as the original\n                        kingdom of the Merovingians it came over time to be referred to as Francia, now France, although\n                        in other contexts western Europe generally could still be described as \"Frankish\". In Germany\n                        there are prominent other places named after the Franks such as the region of Franconia, the\n                        city of Frankfurt, and Frankenstein Castle.</p>"
  },
  {
    title: "Kingdom of Germany",
    year: "843 - 962",
    text: '<p>The terms Kingdom of Germany or German Kingdom (Latin: regnum Teutonicorum \"Kingdom of the Germans\", regnum Teutonicum \"German Kingdom\", regnum Alamanie) denote the mostly Germanic-speaking Eastern Frankish kingdom, which was formed by the Treaty of Verdun in 843, especially after the kingship passed from Frankish kings to the Saxon Ottonian dynasty in 919. The king was elected, initially by the rulers of the stem duchies, who generally chose one of their own. After 962, when Otto I was crowned emperor, East Francia formed the bulk of the Holy Roman Empire, which also included the Kingdom of Italy and, after 1032, the Kingdom of Burgundy.</p><p>Like medieval England and medieval France, medieval Germany consolidated from a conglomerate of smaller tribes, nations or polities by the High Middle Ages. The term rex teutonicorum (\"king of the Germans\") first came into use in Italy around the year 1000. It was popularized by the chancery of Pope Gregory VII during the Investiture Controversy (late 11th century), perhaps as a polemical tool against Emperor Henry IV. In the twelfth century, in order to stress the imperial and transnational character of their office, the emperors began to employ the title rex Romanorum (king of the Romans) on their election.</p><p>The Archbishop of Mainz was ex officio arch-chancellor of Germany, as his colleagues the Archbishop of Cologne and Archbishop of Trier were, respectively, arch-chancellors of Italy and Burgundy. These titles continued in use until the end of the empire, but only the German chancery actually existed.</p><p>Distinct titulature for Germany, Italy and Burgundy, which traditionally had their own courts, laws, and chanceries, gradually dropped from use as the King/Emperor\'s influence outside of Germany waned and the German kingdom came to be identified with the Holy Roman Empire.</p><p>Reigns were either dated from the day a ruler was elected king (Philip of Swabia, Rudolf of Habsburg) or crowned king (Otto IV, Henry VII, Louis IV, Charles IV). The election day became the starting date permanently with Sigismund. Throughout the Middle Ages, the King of Germany was known as \"King of the Romans\" from his election as king until the Pope crowned him Emperor in Rome.</p>'
  },
  {
    title: "Holy Roman Empire",
    year: "962 - 1806",
    text: "<p>The Holy Roman Empire, historiographically denoted as the Holy Roman Empire of the German Nation,\n                        (Latin: Sacrum Imperium Romanum; German: Heiliges Römisches Reich Deutscher Nation) was a\n                        multi-ethnic complex of territories in Western and Central Europe that developed during the\n                        Early Middle Ages and continued until its dissolution in 1806 during the Napoleonic Wars.[7] The\n                        largest territory of the empire after 962 was the Kingdom of Germany, though it also included\n                        the neighbouring Kingdom of Bohemia and Kingdom of Italy, plus numerous other territories, and\n                        soon after the Kingdom of Burgundy was added. However, while by the end of the 15th century the\n                        Empire was still in theory composed of three major blocks – Italy, Germany, and Burgundy – in\n                        practice only the Kingdom of Germany remained, with the Burgundian territories lost to France\n                        and the Italian territories, ignored in the Imperial Reform, although formally part of the\n                        Empire, splintered into numerous de facto independent territorial entities.</p><p>The external borders of the Empire did not change noticeably from the Peace of Westphalia – which\n                        acknowledged the exclusion of Switzerland and the Northern Netherlands, and the French\n                        protectorate over Alsace – to the dissolution of the Empire. By then, it largely contained only\n                        German-speaking territories, plus the Kingdom of Bohemia, the southern Netherlands and lands of\n                        Carniola. At the conclusion of the Napoleonic Wars in 1815, most of the Holy Roman Empire was\n                        included in the German Confederation.</p><p>On 25 December 800, Pope Leo III crowned the Frankish king Charlemagne as Emperor, reviving the\n                        title in Western Europe, more than three centuries after the fall of the earlier ancient Western\n                        Roman Empire in 476. In theory and diplomacy, the Emperors were considered primus inter pares,\n                        regarded as first among equals among other Roman Catholic monarchs across Europe.[12] The title\n                        continued in the Carolingian family until 888 and from 896 to 899, after which it was contested\n                        by the rulers of Italy in a series of civil wars until the death of the last Italian claimant,\n                        Berengar I, in 924. The title was revived again in 962 when Otto I, King of Germany, was crowned\n                        emperor, fashioning himself as the successor of Charlemagne[13] and beginning a continuous\n                        existence of the empire for over eight centuries.[14][15][16] Some historians refer to the\n                        coronation of Charlemagne as the origin of the empire,[17][18] while others prefer the\n                        coronation of Otto I as its beginning.[19][20] Scholars generally concur, however, in relating\n                        an evolution of the institutions and principles constituting the empire, describing a gradual\n                        assumption of the imperial title and role.</p><p>The exact term \"Holy Roman Empire\" was not used until the 13th century, before which the empire\n                        was referred to variously as universum regnum (\"the whole kingdom\", as opposed to the regional\n                        kingdoms), imperium christianum (\"Christian empire\"), or Romanum imperium (\"Roman empire\"),[21]\n                        but the Emperor's legitimacy always rested on the concept of translatio imperii,[d] that he held\n                        supreme power inherited from the ancient emperors of Rome.[9] The dynastic office of Holy Roman\n                        Emperor was traditionally elective through the mostly German prince-electors, the\n                        highest-ranking noblemen of the empire; they would elect one of their peers as \"King of the\n                        Romans\" to be crowned emperor by the Pope, although the tradition of papal coronations was\n                        discontinued in the 16th century.</p><p>The empire never achieved the extent of political unification as was formed to the west in the\n                        relatively centralised Kingdom of France, evolving instead into a decentralised, limited\n                        elective monarchy composed of hundreds of sub-units: kingdoms, principalities, duchies,\n                        counties, prince-bishoprics, Free Imperial Cities, and other domains.[10][22] The power of the\n                        emperor was limited, and while the various princes, lords, bishops, and cities of the empire\n                        were vassals who owed the emperor their allegiance, they also possessed an extent of privileges\n                        that gave them de facto independence within their territories. Emperor Francis II dissolved the\n                        empire on 6 August 1806 following the creation of the Confederation of the Rhine by Emperor\n                        Napoleon I the month before.</p>"
  },
  {
    title: "Kingdom of Prussia",
    year: "1701 - 1815",
    text: "<p>The Kingdom of Prussia (German: Königreich Preußen) was a German kingdom that constituted the\n                        state of Prussia between 1701 and 1918.[3] It was the driving force behind the unification of\n                        Germany in 1871 and was the leading state of the German Empire until its dissolution in 1918.[3]\n                        Although it took its name from the region called Prussia, it was based in the Margraviate of\n                        Brandenburg. Its capital was Berlin.</p><p>The kings of Prussia were from the House of Hohenzollern. Brandenburg-Prussia, predecessor of the\n                        kingdom, became a military power under Frederick William, Elector of Brandenburg, known as \"The\n                        Great Elector\".[5][6][7][8] As a kingdom, Prussia continued its rise to power, especially during\n                        the reign of Frederick II, more commonly known as Frederick the Great, who was the third son of\n                        Frederick William I.[9] Frederick the Great was instrumental in starting the Seven Years' War\n                        (1756-63), holding his own against Austria, Russia, France and Sweden and establishing Prussia's\n                        role in the German states, as well as establishing the country as a European great power.[10]\n                        After the might of Prussia was revealed it was considered as a major power among the German\n                        states. Throughout the next hundred years Prussia went on to win many battles, and many\n                        wars.[11] Because of its power, Prussia continuously tried to unify all the German states\n                        (excluding the German cantons in Switzerland) under its rule, and whether Austria would be\n                        included in such a unified German domain was an ongoing question.</p><p>After the Napoleonic Wars led to the creation of the German Confederation, the issue of unifying\n                        the German states caused a number of revolutions throughout the German states, with all states\n                        wanting to have their own constitution.[3] Attempts to create a federation remained unsuccessful\n                        and the German Confederation collapsed in 1866 when war ensued between its two most powerful\n                        member states, Prussia and Austria. The North German Confederation, which lasted from 1867 to\n                        1871, created a closer union between the Prussian-aligned states while Austria and most of\n                        Southern Germany remained independent.[3] The North German Confederation was seen as more of an\n                        alliance of military strength in the aftermath of the Austro-Prussian War but many of its laws\n                        were later used in the German Empire. The German Empire lasted from 1871 to 1918 with the\n                        successful unification of all the German states aside from Austria under Prussian hegemony;[3]\n                        this was due to the defeat of Napoleon III in the Franco-Prussian War of 1870–71. The war united\n                        all the German states against a common enemy, and with the victory came an overwhelming wave of\n                        nationalism which changed the opinions of some of those who had been against unification. In\n                        1871, Germany unified into a single country, minus Austria and Switzerland, with Prussia the\n                        dominant power.</p><p>Prussia is considered the legal predecessor of the unified German Reich (1871–1945) and as such a\n                        direct ancestor of today's Federal Republic of Germany.[3] The formal abolition of Prussia,\n                        carried out on 25 February 1947 by the fiat of the Allied Control Council, referred to an\n                        alleged tradition of the kingdom as a bearer of militarism and reaction, and made way for the\n                        current setup of the German states. However, the Free State of Prussia (Freistaat Preußen),\n                        which followed the abolition of the Kingdom of Prussia in the aftermath of World War I, was a\n                        major democratic force in Weimar Germany until the nationalist coup of 1932 known as the\n                        Preußenschlag.[citation needed] The Kingdom left a significant cultural legacy, today notably\n                        promoted by the Prussian Cultural Heritage Foundation (Stiftung Preußischer Kulturbesitz (SPK)),\n                        which has become one of the largest cultural organisations in the world.</p>"
  },
  {
    title: "German Confederation",
    year: "1815 - 1866",
    text: "<p>The German Confederation (German: Deutscher Bund) was an association of 39 predominantly\n                        German-speaking sovereign states in Central Europe,[1] created by the Congress of Vienna in 1815\n                        as a replacement of the former Holy Roman Empire, which had been dissolved in 1806.</p><p>The Confederation was weakened by rivalry between the Kingdom of Prussia and the Austrian Empire\n                        and the inability of its multiple members to compromise. The German revolutions of 1848–49,\n                        motivated by liberal, democratic, socialist and nationalist sentiments, attempted to transform\n                        the Confederation into a unified German federal state with a liberal constitution (usually\n                        called the Frankfurt Constitution in English). The ruling body of the Confederation, the\n                        Confederate Diet, was dissolved on 12 July 1848, but was re-established in 1850 after the\n                        revolution was crushed by Austria, Prussia and other states.</p><p>The Confederation was finally dissolved after the victory of the Kingdom of Prussia in the Seven\n                        Weeks' War over the Austrian Empire in 1866. The dispute over which had the inherent right to\n                        rule German lands ended in favour of Prussia, leading to the creation of the North German\n                        Confederation under Prussian leadership in 1867, to which the eastern portions of the Kingdom of\n                        Prussia were added. A number of South German states remained independent until they joined the\n                        North German Confederation, which was renamed and proclaimed as the \"German Empire\" in 1871, as\n                        the unified Germany (aside from Austria) with the Prussian king as emperor (Kaiser) after the\n                        victory over French Emperor Napoleon III in the Franco-Prussian War of 1870.</p><p>Most historians have judged the Confederation to have been weak and ineffective, as well as an\n                        obstacle to the creation of a German nation-state.[4] This weakness was part of its design, as\n                        the European Great Powers, including Prussia and especially Austria, did not want it to become a\n                        nation-state. However, the Confederation was not a 'loose' tie between the German states, as it\n                        was impossible to leave the Confederation, and as Confederation law stood above the law of the\n                        aligned states. The constitutional weakness of the Confederation lay in the principle of\n                        unanimity in the Diet and the limits of the Confederation's scope: it was essentially a military\n                        alliance to defend Germany against external attacks and internal riots. Ironically, the war of\n                        1866 proved its ineffectiveness, as it was unable to combine the federal troops in order to\n                        fight the Prussian secession.</p>"
  },
  {
    title: "North German Confederation",
    year: "1866 - 1871",
    text: "<p>The North German Confederation (German: Norddeutscher Bund)[1] was the German federal state which existed from July 1867 to December 1870. The Confederation came into existence after the Austro-Prussian War of 1866 over the lordship of two small danish duchies (Schleswig-Holstein) claimed by Prussia in 1866. Although de jure a confederacy of equal states, the Confederation was de facto controlled and led by the largest and most powerful member, Prussia, which exercised its influence to bring about the formation of the German Empire. Some historians also use the name for the alliance of 22 German states formed on 18 August 1866 (Augustbündnis).</p><p>The growing power of Prussia was worrying other great powers, especially France, French Emperor Napoleon III and his regime, the Second French Empire. In 1868, Spain overthrew queen Isabella II, and a German prince was a candidate for her throne. France, not wanting to be encircled by a German-Spanish alliance, declared war on the Confederation. In 1870–1871, the south German states of Baden, Hesse-Darmstadt, Württemberg and Bavaria joined the country. On 1 January 1871, the country adopted a new constitution, which was written under the title of a new \"German Confederation\" but already gave it the name \"German Empire\" in the preamble and article 11.</p><p>The constitution established a constitutional monarchy with the Prussian king as the bearer of the Bundespräsidium, or head of state. Laws could only be enabled with the consent of the Reichstag (a parliament based on universal male suffrage) and the Federal Council (a representation of the states). During the four years of the Confederation, a conservative-liberal cooperation undertook important steps to unify (Northern) Germany with regard to law and infrastructure. The political system (and the political parties) remained essentially the same in the years after 1870.</p><p>The Confederation had nearly 30 million inhabitants, of whom eighty percent lived in Prussia.</p>"
  },
  {
    title: "German Empire",
    year: "1871 - 1918",
    text: "<p>The German Empire or the Imperial State of Germany,[a][7][8][9][10] also referred to as Imperial Germany, the Second Reich,[11] the Kaiserreich, as well as simply Germany,[12] was the period of the German Reich[13] from the unification of Germany in 1871 until the November Revolution in 1918, when the German Reich changed its form of government from a monarchy to a republic.</p><p>It was founded on 18 January 1871 when the south German states, except for Austria, joined the North German Confederation and the new constitution came into force, changing the name of the federal state to the German Empire and introducing the title of German Emperor for Wilhelm I, King of Prussia from the House of Hohenzollern.[16] Berlin remained its capital, and Bismarck, Minister-President of Prussia, became Chancellor, the head of government. As these events occurred, the Prussian-led North German Confederation and its southern German allies were still engaged in the Franco-Prussian War.</p><p>The German Empire consisted of 26 states, most of them ruled by royal families. They included four kingdoms, six grand duchies, five duchies (six before 1876), seven principalities, three free Hanseatic cities, and one imperial territory. Although Prussia was one of four kingdoms in the realm, it contained about two-thirds of Germany's population and territory. Prussian dominance had also been constitutionally established, as the King of Prussia was also the German Emperor.</p><p>After 1850, the states of Germany had rapidly become industrialized, with particular strengths in coal, iron (and later steel), chemicals, and railways. In 1871, Germany had a population of 41 million people; by 1913, this had increased to 68 million. A heavily rural collection of states in 1815, the now united Germany became predominantly urban.[17] During its 47 years of existence, the German Empire was an industrial, technological, and scientific giant, gaining more Nobel Prizes in science than any other country.[18] Between 1901 and 1918, the Germans won four Nobel Prizes in Medicine, six Prizes in Physics, seven Prizes in Chemistry, and three Prizes in Literature. By 1913, Germany was the largest economy in Continental Europe, surpassing the United Kingdom (excluding its Empire and Dominions), as well as the third-largest in the world, only behind the United States and the British Empire,[19] which were also its main economic rivals.</p><p>From 1871 to 1890, Otto von Bismarck's tenure as the first and to this day longest-serving Chancellor was marked by relative liberalism, but it became more conservative afterward. Broad reforms and the Kulturkampf marked his period in the office. Late in Bismarck's chancellorship and in spite of his earlier personal opposition, Germany became involved in colonialism. Claiming much of the leftover territory that was yet unclaimed in the Scramble for Africa, it managed to build the third-largest colonial empire at the time, after the British and the French ones.[20] As a colonial state, it sometimes clashed with the interests of other European powers, especially the British Empire. During its colonial expansion, the German Empire committed the Herero and Namaqua genocide.</p><p>Germany became a great power, boasting a rapidly developing rail network, the world's strongest army,[22] and a fast-growing industrial base.[23] Starting very small in 1871, in a decade, the navy became second only to Britain's Royal Navy. After the removal of Otto von Bismarck by Wilhelm II in 1890, the empire embarked on Weltpolitik – a bellicose new course that ultimately contributed to the outbreak of World War I. In addition, Bismarck's successors were incapable of maintaining their predecessor's complex, shifting, and overlapping alliances which had kept Germany from being diplomatically isolated. This period was marked by various factors influencing the Emperor's decisions, which were often perceived as contradictory or unpredictable by the public. In 1879, the German Empire consolidated the Dual Alliance with Austria-Hungary, followed by the Triple Alliance with Italy in 1882. It also retained strong diplomatic ties to the Ottoman Empire. When the great crisis of 1914 arrived, Italy left the alliance and the Ottoman Empire formally allied with Germany.</p><p>In the First World War, German plans to capture Paris quickly in the autumn of 1914 failed. The war on the Western Front became a stalemate. The Allied naval blockade caused severe shortages of food. However, Imperial Germany had success on the Eastern Front; it occupied a large amount of territory to its east following the Treaty of Brest-Litovsk. The German declaration of unrestricted submarine warfare in early 1917 contributed to bringing the United States into the war.</p><p>The high command under Paul von Hindenburg and Erich Ludendorff increasingly controlled the country, but in October 1918, after the failed Spring Offensive, the German armies were in retreat, allies Austria-Hungary and the Ottoman Empire had collapsed, and Bulgaria had surrendered. The empire collapsed in the November 1918 Revolution with the abdications of its monarchs. This left a post-war federal republic and a devastated and unsatisfied populace, faced with post-war reparation costs of nearly 270 billion dollars,[24] all of which is considered a leading factor in the rise of Adolf Hitler and Nazism.</p>"
  },
  {
    title: "Weimar Republic",
    year: "1918 - 1933",
    text: "<p>The Weimar Republic (German: Weimarer Republik [ˈvaɪmaʁɐ ʁepuˈbliːk] (About this soundlisten))\n                        was the German state from 1918 to 1933, as it existed as a federal constitutional republic. The\n                        state was officially the German Reich (Deutsches Reich), and was also referred to as the German\n                        Republic (Deutsche Republik). The term \"Weimar Republic\" refers to the city of Weimar, where the\n                        republic\'s constituent assembly first took place. In English the country was usually simply\n                        called \"Germany\"; the term \"Weimar Republic\" did not become common in English until the 1930s.\n                    </p><p>After four years of hostilities in World War I from 1914 to 1918 with heavy losses, Germany was\n                        exhausted and sued for peace under desperate circumstances. Awareness of imminent defeat sparked\n                        revolution, the abdication of Kaiser Wilhelm II, German surrender, and proclamation of the\n                        Weimar republic on 9 November 1918.</p><p>From 1918 to 1923, the Weimar Republic faced numerous problems, including hyperinflation,\n                        political extremism (with contending paramilitaries) as well as contentious relationships with\n                        the victors of the First World War. From 1924 to 1929, the Republic enjoyed relative stability\n                        and prosperity. Those years are sometimes called the Golden Twenties. The world-wide economic\n                        crisis beginning in October 1929 hit Germany particularly hard. High unemployment led to the\n                        collapse of the coalition government and from March 1930 various chancellors ruled through\n                        emergency powers granted by the President. This period ended with Adolf Hitler's appointment as\n                        chancellor on 30 January 1933.</p><p>Resentment in Germany towards the Treaty of Versailles was strong, especially on the political\n                        right where there was great anger towards those who had signed and submitted to the treaty. The\n                        Weimar Republic fulfilled most of the requirements of the Treaty of Versailles, although it\n                        never completely met its disarmament requirements and eventually paid only a small portion of\n                        the war reparations (by twice restructuring its debt through the Dawes Plan and the Young Plan).\n                    </p><p>Under the Locarno Treaties, signed in 1925, Germany moved toward normalising relations with its\n                        neighbors. Germany recognised the western borders that had been established through the\n                        Versailles Treaty, but its eastern borders remained subject to possible revisions. In 1926,\n                        Germany joined the League of Nations.</p><p>From 1930 onwards, President Paul von Hindenburg used emergency powers to back Chancellors\n                        Heinrich Brüning, Franz von Papen and General Kurt von Schleicher. The Great Depression,\n                        exacerbated by Brüning's policy of deflation, led to a surge in unemployment.[8] On 30 January\n                        1933, Hindenburg appointed Hitler as Chancellor at the head of a coalition government. Hitler's\n                        Nazi Party held two out of ten cabinet seats. Von Papen as Vice Chancellor was intended to be\n                        the \"éminence grise\" who would keep Hitler under control, using his close personal connection to\n                        Hindenburg. These intentions badly underestimated Hitler's political abilities.</p><p>By the end of March, the Reichstag Fire Decree and the Enabling Act of 1933 had used the\n                        perceived state of emergency to grant Hitler as Chancellor broad power to act outside\n                        parliamentary control, which he used to thwart constitutional governance and civil liberties.\n                        Hitler's seizure of power (Machtergreifung) thus ended the republic. Democracy collapsed, and\n                        the creation of a single-party state began the dictatorship of the Nazi era.</p>"
  },
  {
    title: "Nazi Germany",
    year: "1933 - 1945",
    text: "<p>Nazi Germany,[f] officially known as the German Reich[g] until 1943 and Greater German Reich[h] from 1943 to 1945, was the German state between 1933 and 1945, when Adolf Hitler and the Nazi Party controlled the country which they transformed into a dictatorship. Under Hitler's rule, Germany quickly became a totalitarian state where nearly all aspects of life were controlled by the government. The Third Reich,[i] meaning \"Third Realm\" or \"Third Empire\", alluded to the Nazis' conceit that Nazi Germany was the successor to the earlier Holy Roman Empire (800–1806) and German Empire (1871–1918). The Third Reich, which Hitler and the Nazis referred to as the Thousand Year Reich,[4][j] ended in May 1945 after just 12 years, when the Allies defeated Germany, ending World War II in Europe.</p><p>On 30 January 1933, Hitler was appointed Chancellor of Germany, the head of government, by the President of the Weimar Republic, Paul von Hindenburg, the head of State. The Nazi Party then began to eliminate all political opposition and consolidate its power. Hindenburg died on 2 August 1934 and Hitler became dictator of Germany by merging the offices and powers of the Chancellery and Presidency. A national referendum held 19 August 1934 confirmed Hitler as sole Führer (Leader) of Germany. All power was centralised in Hitler's person and his word became the highest law. The government was not a coordinated, co-operating body, but a collection of factions struggling for power and Hitler's favour. In the midst of the Great Depression, the Nazis restored economic stability and ended mass unemployment using heavy military spending and a mixed economy. Using deficit spending, the regime undertook a massive secret rearmament program and the construction of extensive public works projects, including the construction of Autobahnen (motorways). The return to economic stability boosted the regime's popularity.</p><p>Racism, Nazi eugenics, and especially antisemitism, were central ideological features of the regime. The Germanic peoples were considered by the Nazis to be the master race, the purest branch of the Aryan race. Discrimination and the persecution of Jews and Romani people began in earnest after the seizure of power. The first concentration camps were established in March 1933. Jews and others deemed undesirable were imprisoned, and liberals, socialists, and communists were killed, imprisoned, or exiled. Christian churches and citizens that opposed Hitler's rule were oppressed and many leaders imprisoned. Education focused on racial biology, population policy, and fitness for military service. Career and educational opportunities for women were curtailed. Recreation and tourism were organised via the Strength Through Joy program, and the 1936 Summer Olympics showcased Germany on the international stage. Propaganda Minister Joseph Goebbels made effective use of film, mass rallies, and Hitler's hypnotic oratory to influence public opinion. The government controlled artistic expression, promoting specific art forms and banning or discouraging others.</p><p>From the latter half of the 1930s, Nazi Germany made increasingly aggressive territorial demands, threatening war if these were not met. The Saarland voted by plebiscite to rejoin Germany in 1935, and in 1936 Hitler sent troops into the Rhineland, which had been de-militarized after World War I. Germany seized Austria in the Anschluss of 1938, and demanded and received the Sudetenland region of Czechoslovakia in that same year. In March 1939, the Slovak state was proclaimed and became a client state of Germany, and the German Protectorate of Bohemia and Moravia was established on the remainder of the occupied Czech Lands. Shortly after, Germany pressured Lithuania into ceding the Memel Territory. Germany signed a non-aggression pact with the Soviet Union and invaded Poland on 1 September 1939, launching World War II in Europe. By early 1941, Germany and their European allies in the Axis powers controlled much of Europe. Reichskommissariats took control of conquered areas and a German administration was established in the remainder of Poland. Germany exploited the raw materials and labour of both its occupied territories and its allies.</p><p>Genocide and mass murder became hallmarks of the regime. Starting in 1939, hundreds of thousands of German citizens with mental or physical disabilities were murdered in hospitals and asylums. Einsatzgruppen paramilitary death squads accompanied the German armed forces inside the occupied territories and conducted the mass killings of millions of Jews and other Holocaust victims. After 1941, millions of others were imprisoned, worked to death, or murdered in Nazi concentration camps and extermination camps. This genocide is known as the Holocaust.</p><p>While the German invasion of the Soviet Union in 1941 was initially successful, the Soviet resurgence and entry of the United States into the war meant that the Wehrmacht (German armed forces) lost the initiative on the Eastern Front in 1943 and by late 1944 had been pushed back to the pre-1939 border. Large-scale aerial bombing of Germany escalated in 1944 and the Axis powers were driven back in Eastern and Southern Europe. After the Allied invasion of France, Germany was conquered by the Soviet Union from the east and the other Allies from the west, and capitulated in May 1945. Hitler's refusal to admit defeat led to massive destruction of German infrastructure and additional war-related deaths in the closing months of the war. The victorious Allies initiated a policy of denazification and put many of the surviving Nazi leadership on trial for war crimes at the Nuremberg trials.</p>"
  },
  {
    title: "Allied-occupied Germany",
    year: "1945 - 1949",
    text: '<p>Allied-occupied Germany (German: Deutschland in der Besatzungszeit, literally \"Germany in the occupation period\") was the administration of Germany (German: Deutsches Reich) upon defeat of Nazi Germany in World War II, when the victorious Allies asserted joint authority and sovereignty over Germany as a whole, defined as all territories of the former German Reich west of the Oder–Neisse line, having declared the destruction of Nazi Germany at the death of Adolf Hitler (the 1945 Berlin Declaration). The four powers divided \"Germany as a whole\" into four occupation zones for administrative purposes under the three Western Allies (the United States, the United Kingdom, France) and the Soviet Union, respectively. This division was ratified at the August 1945 Potsdam Conference.[citation needed] The four zones were agreed by the United States, United Kingdom and Soviet Union at the February 1945 Yalta Conference, setting aside an earlier division into three zones (excluding France) proposed by the September 1944 London Protocol.</p><p>Deviating from the occupation zones planned according to the London Protocol in 1944, at Potsdam, the United States, United Kingdom and the Soviet Union approved the detachment from Germany of the territories east of the Oder–Neisse line, with the exact line of the boundary to be determined in a final German peace treaty. This treaty was expected to confirm the shifting westward of Poland\'s borders, as the United Kingdom and United States committed themselves to support the permanent incorporation of eastern Germany into Poland and the Soviet Union. From March 1945 to July 1945, these former eastern territories of Germany had been administered under Soviet military occupation authorities, but following the Potsdam Conference they were handed over to Soviet and Polish civilian administrations and ceased to constitute part of Allied-occupied Germany.</p><p>In the closing weeks of fighting in Europe, United States forces had pushed beyond the agreed boundaries for the future zones of occupation, in some places by as much as 320 km (200 miles). The so-called line of contact between Soviet and U.S. forces at the end of hostilities, mostly lying eastward of the July 1945-established inner German border, was temporary. After two months in which they had held areas that had been assigned to the Soviet zone, U.S. forces withdrew in the first days of July 1945.[2] Some have concluded that this was a crucial move that persuaded the Soviet Union to allow American, British and French forces into their designated sectors in Berlin, which occurred at roughly the same time, although the need for intelligence gathering (Operation Paperclip) may also have been a factor.</p>'
  },
  {
    title: "West/East Germany",
    year: "1949 - 1990",
    text: "<p>After the defeat of Germany in World War II on 8 May 1945, the country was soon divided between the two global blocs in the East and West with the two very opposite ideologies (liberialism vs communism), one period known as the Division of Germany (1945-1990). Germany was stripped of its war gains. Germany was annexed some territories in East to Poland and the Soviet Union, and a territory in West (Saarland) to France until 1957. At the end of the war, there were some eight million foreign displaced persons in Germany;[1] mainly forced laborers and prisoners; including around 400,000 from the concentration camp system,[2] survivors from a much larger number who had died from starvation, harsh conditions, murder, or being worked to death. Over 10 million German-speaking refugees arrived in Germany from other countries in Central and Eastern Europe.[1] Some 9 million Germans were POWs,[3] many of whom were kept as forced laborers for several years to provide restitution to the countries Germany had devastated in the war, and some industrial equipment was removed as reparations.</p><p>The Cold War (1947-1991) divided Germany into the United States-led Western Allies in West and the Soviet Union in East, these two regions could not be reunited until 1990. Germans did not have a central leadership until 1949 when the two countries emerged:</p><p>After experiencing its Wirtschaftswunder or \"economic miracle\" in 1955, West Germany became the most prosperous economy in Europe[citation needed]. Under Chancellor Konrad Adenauer, West Germany built strong relationships with France, the United Kingdom, the United States, and Israel.[5] West Germany also joined the North Atlantic Treaty Organization (NATO) and the European Economic Community (later to become the European Union). East Germany stagnated as its economy was largely organized to meet the needs of the Soviet Union; the secret police (Stasi) tightly controlled daily life, and the Berlin Wall (1961) ended the steady flow of refugees to the West. The country was peacefully reunited on 3 October 1990 and Germany also has become a great power again in the world since that, following the decline and fall of the Socialist Unity Party of Germany (SED) as the ruling party of East Germany and the fall of communist East Germany (the GDR).</p>"
  },
  {
    title: "Germany",
    year: `1990 - 2021`,
    text: "<p>Germany (German: Deutschland, German pronunciation: [ˈdɔʏtʃlant]), officially the Federal Republic of Germany,[e] is a country in Central Europe. It is the second-most populous country in Europe after Russia, and the most populous member state of the European Union. Germany is situated between the Baltic and North seas to the north, and the Alps to the south; covering an area of 357,022 square kilometres (137,847 sq mi), with a population of over 83 million within its 16 constituent states. It borders Denmark to the north, Poland and the Czech Republic to the east, Austria and Switzerland to the south, and France, Luxembourg, Belgium, and the Netherlands to the west. The nation's capital and largest city is Berlin, and its financial centre is Frankfurt; the largest urban area is the Ruhr.</p><p>Various Germanic tribes have inhabited the northern parts of modern Germany since classical antiquity. A region named Germania was documented before AD 100. In the 10th century, German territories formed a central part of the Holy Roman Empire. During the 16th century, northern German regions became the centre of the Protestant Reformation. Following the Napoleonic Wars and the dissolution of the Holy Roman Empire in 1806, the German Confederation was formed in 1815. In 1871, Germany became a nation-state when most of the German states unified into the Prussian-dominated German Empire. After World War I and the German Revolution of 1918–1919, the Empire was replaced by the semi-presidential Weimar Republic. The Nazi seizure of power in 1933 led to the establishment of a dictatorship, World War II, and the Holocaust. After the end of World War II in Europe and a period of Allied occupation, Germany was divided into the Federal Republic of Germany, generally known as West Germany, and the German Democratic Republic, East Germany. The Federal Republic of Germany was a founding member of the European Economic Community and the European Union, while the German Democratic Republic was a communist Eastern Bloc state and member of the Warsaw Pact. After the fall of communism, German reunification saw the former East German states join the Federal Republic of Germany on 3 October 1990—becoming a federal parliamentary republic led by a chancellor.</p><p>Germany is a great power with a strong economy; it has the largest economy in Europe, the world's fourth-largest economy by nominal GDP, and the fifth-largest by PPP. As a global leader in several industrial, scientific and technological sectors, it is both the world's third-largest exporter and importer of goods. As a developed country, which ranks very high on the Human Development Index, it offers social security and a universal health care system, environmental protections, and a tuition-free university education. Germany is a member of the United Nations, NATO, the G7, the G20, and the OECD. It has the fourth-greatest number of UNESCO World Heritage Sites.</p>"
  },
];

if (navigator.platform != "Linux armv8l" && navigator.platform != "iPhone"){
    $("#intro_video").attr("src", "https://www.youtube.com/embed/SuXsVEjYKI4?autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&controls=0&disablekb=1&mute=1&playlist=SuXsVEjYKI4")
}

$("#intro_video").attr({"height":`${window.innerHeight}`, "width":`${window.innerWidth}`})

$("#history_timeline_slider_slider").on("input", function () {
  $("#history_quick_box_info").fadeOut(200);
  value = this.value;
  window.setTimeout(function () {
    $("#history_quick_box_info_title").text(quickinfo[value].title);
    $("#history_quick_box_info_year").text(quickinfo[value].year);
    $("#history_quick_box_info_text").html(quickinfo[value].text);
    $("#history_quick_box_info").fadeIn(200);
  }, 200);
});

$("#mapBtn").click(function(){
    window.open(`${window.location.href}geo.html`)
})

$("body>section:not(:first-child)").hide();

$("#intro_box_button").click(function () {
  $(this).parent().parent().hide(300);
  $("body>section:not(:first-child)").fadeIn(1000);
  $("#main").hide();
});

$("#history_quick_box_info_button").click(function () {
  $("body>section:not(:last-child)").hide(300);
  $("#main").show();
  $("body").css({ height: "100%", width: "100%" });
  if (data[value]) {
    recievedData = data[value];
    loadData();
  } else {
    socket.emit("document", { index: value, type: true });
  }
});

$("#goBack").click(function () {
  $("body>section:not(:first-child)").show();
  $("#main").hide(300);
  $("body").css({ height: "100vh", width: "100vw" });
});

let data = [];

function loadData() {
  $("main").html(
    `<div id="main_content"><h1 id="data_title"></h1><h2 id="data_year"></h2><hr></div><div id="main_info"></div>`
  );

  data[value] = recievedData;
  console.log(data[value]);
  $("#data_title").html(data[value].content[0]);
  $("#data_year").html(data[value].content[1]);
  if (data[value].info != null){
    $("#main_info").html(data[value].info);
  } else {
      $("#main_info").remove()
      $("#main_content").css({"margin-left":"17.5%"})
  }
  for (let i = 0; i < data[value].sections_main.length; i++) {
    $(
      `<section id=sec0${i}>${data[value].sections_main[i]}</section>`
    ).appendTo("#main_content");
    $(`#sec0${i}`).children(":not(:first)").hide(0);
    $(`#sec0${i}>h3`).css({ "border-bottom": "0" });
    $(`#sec0${i}`).css("min-height", "0");
  }
  if (Array.isArray(data[value].sections_opt)){
    $(`${data[value].sections_opt[0]}`).appendTo("#sec00");
  } else{
    $(`${data[value].sections_opt}`).appendTo("#sec00");
  }

  reconfigure();
}

function reconfigure() {
  $("#main_info").hover(
    function () {
      if (window.innerWidth > 1080) {
        $(this).css({
          width: "25%",
          height: "max-content",
          "overflow-y": "scroll",
        });
        $("body").css({ "overflow-y": "hidden" });
      }
    },
    function () {
      if (window.innerWidth > 1080) {
        $(this).css({
          width: "20%",
          height: "calc(100vh - 70px)",
          "overflow-y": "hidden",
        });
        $("body").css({ overflow: "auto" });
      }
    }
  );

  $("#main_content>section>h3").click(function () {
    if (
      $(this).siblings().first().css("display") == "none" ||
      !$(this).siblings("p").length
    ) {
      if (!$(this).siblings("p").length) {
        if ($(this).siblings("div").length) {
          socket.emit("document", {
            index: value,
            type: false,
            idone: $(this).parent().attr("id").slice(-1),
            idtwo: 0,
          });
        } else {
          socket.emit("document", {
            index: value,
            type: false,
            idone: $(this).parent().attr("id").slice(-1),
          });
        }
      }
      let bro = $(this);
      window.setTimeout(function () {
        bro.parent().css({
          "min-height":
            bro.outerHeight() + bro.siblings("div").first().outerHeight() + 20,
        });
      }, 500);
      bro.siblings().show(200);
      $(this).css({ "border-bottom": "1px solid" });
    } else {
      $(this).siblings().hide(500);
      $(this).css({ "border-bottom": "0" });
      $(this).parent().css({ "min-height": 0 });
    }
  });

  $(window).resize(function () {
    $("main").css({ height: `${$("#main_content").outerHeight()}` });
  });
  
  $(".selection_menu>button").click(function () {
    $(this).prop("disabled", true);
    let i = $(this).parent().parent().attr("id").slice(-1);
    let j = $(this).attr("id").slice(-1) - 1;
    $(this).siblings().prop("disabled", false);
    $(this).parent().siblings(":not(h3)").remove();
    if (Array.isArray(data[value].sections_opt[i])) {
      if (data[value].sections_opt[i][j]) {
        $(
          `${data[value].sections_opt[i][$(this).attr("id").slice(-1) - 1]}`
        ).appendTo(`#sec0${i}`);
      } else {
        socket.emit("document", {
          index: value,
          type: false,
          idone: i,
          idtwo: j,
        });
      }
    } else {
      socket.emit("document", {
        index: value,
        type: false,
        idone: i,
        idtwo: j,
      });
    }
  });

  if (window.innerWidth <= 1080) {
    $("#main_info").hide(0);
    $("#main_info").css({ height: "max-content", "overflow-y": "scroll" });
  }

  document.addEventListener("touchstart", handleTouchStart, false);
  document.addEventListener("touchmove", handleTouchMove, false);

  var xDown = null;
  var yDown = null;

  function getTouches(evt) {
    return evt.touches || evt.originalEvent.touches;
  }

  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0 && window.innerWidth <= 1080) {
        $("#main_info").show(0);
        $("#main_content").hide(0);
      } else if (xDiff < 0 && window.innerWidth <= 1080) {
        $("#main_info").hide(0);
        $("#main_content").show(0);
      }
    }
    xDown = null;
    yDown = null;
  }
}

function loadAddData(idone, idtwo) {
  let bck = "";
  if (idtwo == "heh") {
    if (!Array.isArray(data[value].sections_opt)) {
      bck = data[value].sections_opt;
      data[value].sections_opt = [];
      data[value].sections_opt.push(bck);
    }
    data[value].sections_opt[idone] = recievedData;
    $(`${recievedData}`).appendTo(`#sec0${idone}`);
  } else {
    if (!Array.isArray(data[value].sections_opt)) {
      bck = data[value].sections_opt;
      data[value].sections_opt = [];
      data[value].sections_opt.push(bck);
      data[value].sections_opt[idone] = recievedData;
    } else {
      if (!Array.isArray(data[value].sections_opt[idone])) {
        bck = data[value].sections_opt[idone];
        data[value].sections_opt[idone] = [];
        data[value].sections_opt[idone].push(bck);
      }
      data[value].sections_opt[idone][idtwo] = recievedData;
    }
    //$(`#sec0{idone}`).children(":not(div):not(h3)").remove()
    $(`${recievedData}`).appendTo(`#sec0${idone}`);
  }
}

/*
function getingsomedat() {
  let sections = $("#main_content>section").length;
  let sections_m = [];
  let sections_o = [];
  for (let i = 0; i < sections; i++) {
    if ($("#main_content>section").eq(i).children("h3").length) {
      sections_m[i] = `<h3>${$("#main_content>section")
        .eq(i)
        .children("h3")
        .html()}</h3>`;
      if ($("#main_content>section").eq(i).children("div").length) {
        sections_m[i] += `<div class="selection_menu">${$(
          "#main_content>section"
        )
          .eq(i)
          .children("div")
          .html()}</div>`;
      }
    } else {
      sections_m[i] = "";
    }
  }
  for (let i = 0; i < sections; i++) {
    if ($("#main_content>section").eq(i).children("div").length) {
      sections_o[i] = "";
      let bro = [];
      $("#main_content>section")
        .eq(i)
        .children("div:not(:first)")
        .each(function () {
          bro.push($(this).html());
        });
      sections_o[i] = bro;
    } else {
      for (
        let j = 0;
        j <
        $("#main_content>section").eq(i).children("p", "ul", "ol", "h5", "h4")
          .length;
        j++
      ) {
        sections_o[i] = "";
        $("#main_content>section")
          .eq(i)
          .children("p", "ul", "ol", "h5", "h4")
          .each(function () {
            sections_o[i] += $(this)[0].outerHTML;
          });
      }
    }
  }
  let objecti = {
    content: [$("#data_title").html(), $("#data_year").html()],
    info: $("#main_info").html(),
    sections_main: sections_m,
    sections_opt: sections_o,
  };

  let res = JSON.stringify(objecti);
}
*/
