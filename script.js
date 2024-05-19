const phylums = [
  "Paramecium (Pantoffeltierchen)",
  "Suctoria (Sauginfusorien)",
  "Trypanosoma brucei",
  "Euglena (Augentierchen)",
  "Euglenozoa",
  "Radiolaria",
  "Foraminifera",
  "Cryptosporidium",
  "Plasmodium",
  "“Ciliata“ (Wimpertierchen)",
  "“Flagellata“ (= Mastigophora) (Geißeltierchen)",
  "“Rhizopoda“ (Wurzelfüßer)",
  "“Sporozoa“ (Apicomplexa) (Sporentierchen)",
  "Rot-, Braun-, Kieselalgen, Landpflanzen",
  "Diatomeen (Kieselalgen)",
  "Schleimpilze (Myxomyceta)",
  "Entamoeba hystolytica; Thecamöben; Pelomyxa; Amoeba proteus; Dictyostelium",
  "Calcarea (Kalkschwämme)",
  "Demospongiae (Hornkieselschwämme)",
  "Cellularia",
  "Hexactinellida (Glasschwämme)",
  "Hydrolina",
  "Trachylina",
  "Cubozoa  (Würfelquallen)",
  "Scyphozoa (Scheibenquallen)",
  "Staurozoa",
  "Hydrozoa",
  "Acraspeda",
  "Anthozoa (Korallen-/Blumentiere)",
  "Medusozoa",
  "Ctenophora  (Rippenquallen)",
  "Cnidaria (Nesseltiere)",
  "Acoela",
  "Nemertodematida",
  "Acoelomorpha",
  "Xenotubellaria",
  "Ctenostomata",
  "Cheilostomata",
  "Phylacotolaemata",
  "Gymnolaemata",
  "Stenolaemata",
  "Articulata",
  "Inarticulata",
  "Bryozoa (Moostierchen)",
  "Brachiopoda  (Armfüßer)",
  "Phoronida (Hufeisenwürmer)",
  "Monogena",
  "Digena",
  "Cestoda ",
  '"Trematoda"',
  "Neodermata",
  "Macrostomida",
  "Polycladida",
  "Catenulida",
  "Rhabditophora",
  "Rotifera (Rädertiere)",
  "Seisonida",
  "Acanthocephala (Kratzer)",
  "Micrognathozoa",
  "Gnathostomulida (Kiefermäulchen)",
  "Syndermata",
  "Heteronemertini",
  "Paleonemertini",
  "Hoplonemertini",
  "Bdellonemertini",
  "Anopla",
  "Enopla",
  "Solenogastres (Furchenfüßer)",
  "Caudofoveata (Schildfüßler)",
  "Polyplacophora  (Käferschnecken)",
  "Aplacophora",
  "Fliegende Kalamare",
  "Riesenkalamar",
  "Tetrabranchiata (Nautiloidea/Perlenbootartig)",
  "Dibranchiata (Zehnarmige Tintenfische)",
  "Coloidea (Tintenfische)",
  "Tryblidia ",
  "Cephalopoda (Kopffüßer)",
  "Bivalvia (Muscheln)",
  "Scaphopoda (Kahnfüßer)",
  "Gastropoda (Schnecken)",
  "Aculifera (Stachelweichtiere)",
  "Conchifera (Schalenträger)",
  "Oiligochaeta (Wenigborster)",
  "Hirudinea (Egel)",
  "Echiruida (Igelwürmer)",
  "Pogonophora (Bartwürmer)",
  "Clitellata (Gürtelwürmer)",
  '"Polychaeten" (Vielborster)',
  "Myzostomida",
  "Sipunculida (Spritzwürmer)",
  "Errantia ",
  "Sedentaria",
  "Plathelminthes (Plattwürmer)",
  "Gnathifera",
  "Nemertini  (Schnurwürmer)",
  "Mollusca (Weichtiere)",
  "Annelida (Ringelwürmer)",
  "Lophophorata (Tentakelträger)",
  "Spiralia",
  "Priapulida (Priapswürmer)",
  "Loricifera (Korsetttierchen)",
  "Kinorhychna (Hakenrüssler)",
  "Nematoda (Rundwürmer)",
  "Nematomorpha (Saitenwürmer)",
  "Scalidophora",
  "Onychophora (Stummelträger)",
  "Tardigrada (Bärtierchen)",
  "Scutigeromopha (Spinnenläufer)",
  "Symphyla (Zwergfüßer)",
  "Pauropoda (Wenigfüßer)",
  "Diplopoda (Doppelfüßer)",
  "Chilopoda (Hundertfüßer)",
  "Progoneata (Tausendfüßer)",
  "Ostracoda",
  "Pentastomida",
  "Branchiura",
  "Cephalocarida",
  "Remipedia",
  "Xenocarida",
  "Cirripedia",
  "Rhizocephala",
  "Facetoteca",
  "Peracarida",
  "Mysidacea",
  "Amphipoda",
  "Isopoda",
  "Anostraca",
  "Notostraca",
  "Conchostraca",
  "Cladostraca",
  "Thecostraca",
  "Stomatopoda (Heuschreckenkrebse)",
  "Branchiopoda (Kiemenfüßer)",
  "Malacostraca (höhere Krebse)",
  "Leptostraca",
  "Copepoda (Ruderfußkrebse)",
  "Decapoda",
  "Miracrustacea",
  "Vericrustacea",
  "Oligostraca",
  "Altocrustacea",
  "Ephemeroptera (Eintagsfliegen)",
  "Odonata (Libellen)",
  "Nematocera (Mücken)",
  "Brachycera (Fliegen)",
  "Hymenoptera (Hautflügler)",
  "Lepidoptera (Schmetterlinge, Falter)",
  "Coleoptera (Käfer)",
  "Siphonaptera (Flöhe)",
  "Diptera (Zweiflügler)",
  "Paraneoptera",
  "Holometabola",
  "Isoptera (Termiten)",
  "Saltatoria (Springschnecken)",
  "Eumetabola",
  "Paurometabola",
  "Plecoptera (Steinfliegen)",
  "Palaeoptera (Altflügler)",
  "Neoptera  (Neuflügler)",
  "Zygentoma (Fischchen)",
  "Pterygota (Fluginsekten)",
  "Archaeognatha (Felsenspringer)",
  "Dicondylia",
  "Protura (Beintastler)",
  "Collembola (Springschwänze)",
  "Diplura  (Doppelschwänze)",
  "Ellipura",
  "Ectognatha (Freikiefler)",
  "Enthognatha (Sackkiefer)",
  "Crustacea (Krebstiere )",
  "Hexapoda (Insekten)",
  "Myriapoda",
  "Tetracronata/Pancrustacea",
  "Uropygi (Geißelskorpione)",
  "Amblypygi",
  "Araneae (Webspinnen)",
  "Palpigradi",
  "Pseudoscorpiones",
  "Solifugae",
  "Opiliones (Weberknechte)",
  "Acari (Milben)",
  "Megoperculata",
  "Apulmonata",
  "Scorpiones ",
  "Lipoctena",
  "Xiphosura (Pfeilschwanzkrebse)",
  "Arachnida",
  "Pantopoda/Pycnogonida (Asselspinnen)",
  "Euchelicerata  (echte Spinnentiere)",
  "Trilobita (Dreilapper)",
  "Mandibulata",
  "Chelicerata (Spinnentiere)",
  '"Protarthropoda"',
  "Euarthropoda (echte Gliederfüßer)",
  "Cycloneuralia",
  "Arthropoda (Gliederfüßer)",
  "Chaetognatha (Pfeilwürmer, Borstekiefer)",
  "Lophotrochozoa",
  "Ecdysozoa (Häutungstiere )",
  "Crinoidea (Seelilien, Haarsterne)",
  "Ophiuroidea (Schlangensterne)",
  "Asteroidea (Seesterne)",
  "Echinoidea (Seeigel)",
  "Holothuroidea (Seegurken)",
  "Pterobranchia (Flügelkiemer)",
  "Enteropneusta (Eichelwürmer)",
  "Echinodermata (Stachelhäuter)",
  "Hemichordata (Kiemenlochtiere )",
  "Ascidiacea",
  "Appendicularia (Larvacea)",
  "Thaliacea",
  "Neoselachii",
  "Holocephali",
  "Cladistia",
  "Chondrostei",
  "Ginglymodi",
  "Halecomorphi",
  "Teleostei (Knochenfische)",
  "Testudines (Chelionia, Schildkröten)",
  "Lepidosauria (Schuppenechsen)",
  "Archosauria",
  "Sphenodontida",
  "Squamata",
  "Crocodylia",
  "Aves (Vögel)",
  "Marsupialia (Beuteltiere)",
  "Placentalia (Plazentatiere)",
  "Monotremata (Kloakentiere)",
  "Theria (lebendgebärende Säugetiere)",
  "Sauropsida",
  "Synapsida/Mammalia",
  "Lissamphibia (rezente Amphibien/Lurche)",
  "Amniota (Nabeltiere)",
  "Dipnoi (Lungenfische)",
  "Actinistia (Quastenflosser)",
  "Tetrapoda (Landwirbeltiere)",
  "Actinopterygii (Strahlenflosser)",
  "Sarcopterygii (Fleischflosser)",
  "Chondrichtyes (Knorpelfische)",
  "Osteognathostomata",
  "Petromyzontida",
  "Gnathostomata (Kiefermünder)",
  "Myxini /Myxinoida (Schleimaale, Inger)",
  "Petromyzontiformes (Neunaugen)",
  "Vertebrata",
  "“Agnatha“ (Kieferlose)",
  "Acrania ",
  "Cephalochordata (Schädellose)",
  "Urchordata/Tunicata  (Manteltiere)",
  "Vertebrata/Craniota (Wirbel-/Schädeltiere)",
  "Ambulacraria",
  "Chordata (Chordatiere)",
  "Protostomia (Urmünder)",
  "Deuterostomia (Neumünder)",
  "Xenacoelomorpha (wurmartige Tiere)",
  "Nephrozoa/Eubilateria",
  "Placozoa (Plattentiere)",
  "Diploplastica",
  "Bilateria/Tripoblastica",
  "Porifera (Schwämme)",
  "Eumetazoa  (Epitheliozoa)",
  "Choanoflagellata  (Kragengeißeltierchen)",
  "Metazoa (vielzellige Tiere)",
  "Fungi (Pilze)",
  "Holozoa (Gesamttiere)",
  "Amobeozoa (Wechseltierchen)",
  "Ophistokonta",
  "Bikonta",
  "Unikonta",
];

function getRandomPhylum(phylums) {
  const index = Math.floor(Math.random() * phylums.length);
  return phylums[index];
}

console.log(getRandomPhylum(phylums));
const body = document.querySelector("#as");
let answer = `${getRandomPhylum(phylums)}`;
body.textContent = answer;
