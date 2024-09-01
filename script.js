// Function to switch between pages
function showPage(pageId) {
  const pages = document.querySelectorAll('.container');
  pages.forEach(page => {
      page.style.display = 'none';
  });
  document.getElementById(pageId).style.display = 'block';
}

 // Add event listener for popstate event
 window.addEventListener('popstate', function(event) {
  if (event.state && event.state.pageId) {
      showPage(event.state.pageId);
  }
});


document.addEventListener('DOMContentLoaded', function() {
  // Hide articles and syllabus content pages on load
  document.getElementById('articles-page').style.display = 'none';
  document.getElementById('syllabus-content-page').style.display = 'none';

  // Add event listener to the Show Articles button
  document.querySelector('#topic-by-topic-page .bts').addEventListener('click', showArticles);
  document.querySelector('#syllabus-page .btn:nth-child(3)').addEventListener('click', showSyllabus);
});


const topics = {
  bio102: [
      { value: 'nomenclature', text: 'Bionomial Nomenclature'}, 
      { value: 'intro', text: 'Review of Plant Kingdom I'},
      { value: 'fungi', text: 'Review of Plant Kigdom II - Fungi' },
      { value: 'note', text: 'Fundamental Principles of Classification Kingdom Plantae (CLASS NOTE)'},
      { value: 'plantae', text: 'Review of Plant Kigdom III - Bryophyta & Pteridophyta'},
      { value: 'plantee', text: 'Review of Plant Kigdom IV - Spermatophyta'},
      { value: 'notee', text: 'Fundamental Principles of Classification Kingdom Animialia (CLASS NOTE)'},
      { value: 'animal', text: 'Review of Animal Kingdom I- Sarcomastigophora - Pliatyhelminthes'},
      { value: 'annelids', text: 'Review of Animal Kingdom II- Nematoda - Mollusca'},
      { value: 'arthopods', text: 'Review of Animal Kingdom III- Arthropoda & Echninodermata '},
      { value: 'chordata', text: 'Review of Animal Kingdom IV- Chordata, Hemichordata - Pieces'},
      { value: 'amps', text: 'Review of Animal Kingdom V- Amphibians - Aves'},
      { value: 'mammals', text: 'Review of Animal Kingdom VI- Mammals'},
      { value: 'ecology', text: 'Ecology'},
  ],
  chm102: [
      { value: 'periodic', text: 'Periodic table properties' },
      { value: 'fourthg', text: 'Group IV-V' },
      { value: 'six', text: 'Group VI-VIII' },
      { value: 'org', text: 'Introduction To Organic Chemistry (CLASS NOTE)' },
      { value: 'orgii', text: 'Isolation, Precipitation, and Identification of Organic Compounds (CLASS NOTE)' },
      { value: 'analysis', text: 'General Scheme of Analysis' },
      { value: 'hybe', text: 'Hybridization of Carbon,Factors influncing Reaction' },
      { value: 'aliphatic', text: 'Hydrocarbon I- Alkane' },
      { value: 'alliphatic', text: 'Hydrocarbon II- Alkene & Alkynes' },
      { value: 'alkanol', text: 'Alkanols and Phenols' },
      { value: 'carbonyl', text: 'Carbonly Compounds' },
      { value: 'acid', text: 'Carboxylic Acid & Alkanoate' },
  ],
  phy102: [
      { value: 'formula', text: 'Formulas You Need' },
      { value: 'electricity', text: 'Current Electricity' },
      { value: 'field', text: 'Magnetic & Electric field' },
      { value: 'ei', text: 'Electromagnetic Induction ( CLASS NOTE)' },
      { value: 'ac', text: 'A.C Circuit' },
      { value: 'quanta', text: 'Energy Quantazation' },
  ],
  mth102: [
      { value: 'calculus', text: 'Calculus' },
      { value: 'geometry', text: 'Co-ordinate Geometry' },
      { value: 'conic', text: 'Conic Section' },
      { value: 'trig', text: 'Trigonometry' },
  ],
  gst112: [
      { value: 'culture', text: 'Concept Classification of Culture' },
      { value: 'trad', text: 'Traditional economy of pre-colonial Nigerian people' },
      { value: 'nation', text: 'Nation-State' },
      { value: 'environ', text: 'Nigeria Environmental, Moral, and Value Problems' },
      { value: 'judge', text: 'The Role of the Judiciary in Upholding Peoples Fundamental Rights' },
      { value: 'norm', text: 'Acceptable Norms and Values of the Major Ethnic Groups in Nigeria' },
      { value: 'ethnic', text: 'Multi-Ethnic and Multilingual Nature of Nigeria' },
  ]
};

function showTopics(subjectCode) {
  showPage('topic-by-topic-page');
  const subjectSelect = document.getElementById('subject');
  subjectSelect.value = subjectCode;
  updateTopics();
}

function updateTopics() {
  const subjectSelect = document.getElementById('subject');
  const topicSelect = document.getElementById('topic');
  const selectedSubject = subjectSelect.value;

  topicSelect.innerHTML = ''; // Clear previous options

  if (selectedSubject && topics[selectedSubject]) {
      topics[selectedSubject].forEach(topic => {
          const option = document.createElement('option');
          option.value = topic.value;
          option.textContent = topic.text;
          topicSelect.appendChild(option);
      });
  } else {
      const placeholderOption = document.createElement('option');
      placeholderOption.value = '';
      placeholderOption.textContent = 'Select a Topic';
      topicSelect.appendChild(placeholderOption);
  }
}

function showArticles() {
  const topicSelect = document.getElementById('topic');
  const selectedTopic = topicSelect.value;

  if (selectedTopic) {
      window.location.href = `articles.html?topic=${selectedTopic}`;
  } else {
      alert('Please select a topic to view the article.');
  }
}

function showSyllabus() {
  const subjectSelect = document.getElementById('syllabus-subject');
  const selectedSubject = subjectSelect.value;

  if (selectedSubject) {
      window.location.href = `syllabus.html?subject=${selectedSubject}`;
  } else {
      alert('Please select a subject to view the syllabus.');
  }
}

function showPage(pageId) {
  const pages = document.querySelectorAll('.container');
  pages.forEach(page => {
      page.style.display = 'none';
  });
  document.getElementById(pageId).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  const subjectSelect = document.getElementById('subject');
  subjectSelect.addEventListener('change', updateTopics);
});

// Function to go back to the previous page
function goBack() {
  window.history.back();
}

// Function to go back to the opening page
function goHome() {
  showPage('opening-page');
}

const quizData = {
    biology: [
        { question: "Which organelle is known as the 'brain' of the cell?", answers: [{ text: "Nucleus", correct: true }, { text: "Mitochondria", correct: false }, { text: "Ribosome", correct: false }, { text: "Endoplasmic Reticulum", correct: false }], explanation: "The nucleus controls cell activities and contains genetic material." },
        { question: "What process do plants use to make their food?", answers: [{ text: "Photosynthesis", correct: true }, { text: "Respiration", correct: false }, { text: "Transpiration", correct: false }, { text: "Glycolysis", correct: false }],  explanation: "Photosynthesis is the process by which plants make food using sunlight." },
        {
            question: "The unit of Virus is",
            answers: [
                { text: "Viroin", correct: false },
                { text: "Viral", correct: false },
                { text: "Viroid", correct: false },
                { text: "Virion", correct: true }
            ],
            explanation: "The correct term is Virion, which is the complete virus particle."
        },
        // Add other questions here
        {
            question: "Metamerism occurs in which of the following phylum",
            answers: [
                { text: "Annelids", correct: true },
                { text: "Platyhelminthes", correct: false },
                { text: "Nematoda", correct: false },
                { text: "Anthropoda", correct: false }
            ],
            explanation: "Metamerism is a characteristic of Annelids, where the body is divided into segments."
        },
        {
            question: "Epiphytes growing on the branches of trees provide an example of the relationship known as?",
            answers: [
                { text: "Parasitism", correct: false },
                { text: "Commensalism", correct: true },
                { text: "Saprophytism", correct: false },
                { text: "Holophytism", correct: false }
            ],
            explanation: "Commensalism is a relationship between two organisms where one benefits and the other is not significantly harmed or helped."
        },
        {
            question: "Floating microscopic heterotrophs are mostly grouped as",
            answers: [
                { text: "Phytoplankton", correct: false },
                { text: "Zooplankton", correct: true },
                { text: "Microbes", correct: false },
                { text: "Nekton", correct: false }
            ],
            explanation: "Zooplankton are small and often microscopic organisms that drift in the water and are a type of heterotroph."
        },
        
            {
                question: "The unit of Virus is",
                answers: [
                    { text: "Viroin", correct: false },
                    { text: "Viral", correct: false },
                    { text: "Viroid", correct: false },
                    { text: "Virion", correct: true }
                ],
                explanation: "A virion is the complete, infectious form of a virus outside a host cell, with a core of RNA or DNA and a protein coat.."
            },
            {
                question: "The smallest unit of classification is",
                answers: [
                    { text: "Order", correct: false },
                    { text: "Species", correct: true },
                    { text: "Class", correct: false },
                    { text: "Genus", correct: false }
                ],
                explanation: "In biological classification, species is the most specific level, referring to a group of organisms capable of interbreeding and producing fertile offspring."
            },
            {
                question: "Slender bodies elongated in an oral aboral axis are characteristics of class ________",
                answers: [
                    { text: "Echninoidea", correct: false },
                    { text: "Ophiuroidea", correct: false },
                    { text: "Crinoidea", correct: false },
                    { text: "Holothuriodea", correct: true }
                ],
                explanation: "Class Holothuroidea includes sea cucumbers, which have elongated, soft bodies along their oral-aboral axis."
            },
            {
                question: "In annelida formation of larva is usually absent, when present larva is called",
                answers: [
                    { text: "Planula", correct: false },
                    { text: "Tadpole", correct: false },
                    { text: "Trochophore", correct: true },
                    { text: "Ephyra", correct: false }
                ],
                explanation: "The trochophore is a type of free-swimming planktonic marine larva with several bands of cilia."
            },
            {
                question: "Flatworms posses true body layers hence they are referred to as Triploblastic",
                answers: [
                    { text: "True", correct: true },
                    { text: "False", correct: false }
                ],
                explanation: "Triploblastic organisms, like flatworms, have three primary germ layers: ectoderm, mesoderm, and endoderm."
            },
            {
                question: "Organism of the same species cannot mate to produce viable and fertile offsprings",
                answers: [
                    { text: "True", correct: false },
                    { text: "False", correct: true }
                ],
                explanation: "Organisms of the same species can mate to produce viable and fertile offspring."
            },
            {
                question: "Flagella can serve as locomotive organelle in the matured member of sarcodinal",
                answers: [
                    { text: "True", correct: false },
                    { text: "False", correct: true }
                ],
                explanation: "Members of the Sarcodina (Amoebozoa) generally move using pseudopodia, not flagella."
            },
            {
                question: "Rhodophyceae is a characteristic that can be recognized by ________ colour",
                answers: [
                    { text: "Red", correct: true },
                    { text: "Blue", correct: false },
                    { text: "White", correct: false },
                    { text: "Green", correct: false }
                ],
                explanation: "Rhodophyceae is a characteristic that can be recognized by RED colour."
            },
            {
                question: "Dioscorea alata also known as _________ yam",
                answers: [
                    { text: "Water", correct: true },
                    { text: "Chinese", correct: false },
                    { text: "White", correct: false },
                    { text: "Yellow", correct: false }
                ],
                explanation: "Dioscorea alata is commonly known as water yam"
            },
            {
                question: "Organism in class Scyphozoa are popularly known as _________________",
                answers: [
                    { text: "Bony fishes", correct: false },
                    { text: "None of the above", correct: false },
                    { text: "Jelly fishes", correct: true },
                    { text: "Scally fishes", correct: false }
                ],
                explanation: "Class Scyphozoa includes the true jellyfishes."
            },
            {
                question: "Body cavity of earthworm is",
                answers: [
                    { text: "Pseudocoelom", correct: false },
                    { text: "Haemocoel", correct: true },
                    { text: "Acoelom", correct: false },
                    { text: "True coelom", correct: false }
                ],
                explanation: "While annelids have a true coelom, earthworms specifically have a haemocoel for their circulatory system."
            },
            {
                question: "In earthworm the clitteliar region helps in the process of",
                answers: [
                    { text: "Locomotion", correct: false },
                    { text: "Digestion", correct: false },
                    { text: "Cocoon formation", correct: true },
                    { text: "Copulation", correct: false }
                ],
                explanation: "The clitellum is involved in cocoon formation during reproduction."
            },
            {
                question: "Tube feet of Echinoderma are used for the following except",
                answers: [
                    { text: "Capturing prey", correct: false },
                    { text: "Locomotion", correct: false },
                    { text: "Respiration", correct: false },
                    { text: "Sunning", correct: true }
                ],
                explanation: "Tube feet are not used for sunning."
            },
            {
                question: "The type of pseudopodia found in amoeba is",
                answers: [
                    { text: "Axopodia", correct: false },
                    { text: "Lobopodia", correct: true },
                    { text: "Reticulopodia", correct: false },
                    { text: "Filopodia", correct: false }
                ],
                explanation: "Amoeba use lobopodia, which are blunt, lobed pseudopodia."
            },
            {
                question: "Radial symmetry is usually found in _________",
                answers: [
                    { text: "Starfish", correct: true },
                    { text: "Ascaris", correct: false },
                    { text: "Mollusca", correct: false },
                    { text: "Sponges", correct: false }
                ],
                explanation: "Starfish exhibit radial symmetry.."
            },
            {
                question: "Asterials belongs to _______",
                answers: [
                    { text: "Asteridea", correct: true },
                    { text: "Echinoidea", correct: false },
                    { text: "Holothuroidea", correct: false },
                    { text: "Opthiurodea", correct: false }
                ],
                explanation: "Asterias is a genus of starfish, belonging to the class Asteroidea."
            },
            {
                question: "In earthworm the function of spermathecae is",
                answers: [
                    { text: "Storage of sperms of another worm", correct: true },
                    { text: "Storage of sperm", correct: false },
                    { text: "Maturation of sperm", correct: false },
                    { text: "Fertilization", correct: false }
                ],
                explanation: "Spermathecae are used to store sperm received from another worm during copulation."
            },
            {
                question: "The S. Kingdom of Whittaker and Whittaker classification includes",
                answers: [
                    { text: "Protista", correct: true },
                    { text: "Authotrophs", correct: false },
                    { text: "Monera", correct: true },
                    { text: "Leno", correct: false }
                ],
                explanation: "Whittaker's five kingdoms include Protista and Monera. Also Virus, Plantae, Animalia"
            },
            {
                question: "The locomotory organelles in Apalinate are",
                answers: [
                    { text: "Pseudopolia", correct: false },
                    { text: "Cilia", correct: false },
                    { text: "Flagella", correct: true },
                    { text: "All options are correct", correct: false }
                ],
                explanation: "Apalinate organisms typically use flagella for movement."
            },
            {
                question: "The existence of organism in different forms is called",
                answers: [
                    { text: "Recreation", correct: false },
                    { text: "Reproduction", correct: false },
                    { text: "Polymorphism", correct: true },
                    { text: "Regeneration", correct: false }
                ],
                explanation: "Polymorphism refers to the occurrence of different forms or morphs among the members of a population. Some ants, lizards and tapeworm exhibits polymorphism."
            },
            {
                question: "Spirogyra posses chlorophyl and feed homosporously",
                answers: [
                    { text: "True", correct: true },
                    { text: "False", correct: false }
                ],
                explanation: "Spirogyra, a type of green algae, has chlorophyll and reproduces homosporously."
            },
            {
                question: "Whittaker and Whittaker classification can be regarded as a modern one",
                answers: [
                    { text: "True", correct: true },
                    { text: "False", correct: false }
                ],
                explanation: "The Whittaker classification system is considered modern as it introduced a five-kingdom structure."
            },
           
        
        {
            question: "Which process is responsible for converting glucose to pyruvate?",
            answers: [
                { text: "Glycolysis", correct: true },
                { text: "Krebs Cycle", correct: false },
                { text: "Electron Transport Chain", correct: false },
                { text: "Fermentation", correct: false }
            ],
            explanation: "Glycolysis is the metabolic pathway that converts glucose into pyruvate."
        },
        {
            question: "Metamerism occurs in which of the following phylum",
            answers: [
                { text: "Annelids", correct: true },
                { text: "Platyhelminthes", correct: false },
                { text: "Nematoda", correct: false },
                { text: "Anthropoda", correct: false }
            ],
            explanation: "Metamerism, the segmentation of the body into repeated segments, occurs in the phylum Annelids."
        },
        {
            question: "Earthworm is a hermaphrodite but self fertilization does not take place because",
            answers: [
                { text: "Maturation of testis takes place earlier", correct: false },
                { text: "Position of reproductive organs", correct: false },
                { text: "All of the above", correct: true },
                { text: "Maturation of ovaries takes place later", correct: false }
            ],
            explanation: "Self fertilization in earthworms is prevented due to the timing of maturation of reproductive organs and their physical positioning."
        },
        {
            question: "Scientists make use of different criteria for classification",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Scientists use a variety of criteria, such as physical characteristics, genetic information, and evolutionary history, for classifying organisms."
        },
        {
            question: "Echinoderms are mainly found in _______ habitat",
            answers: [
                { text: "Marine", correct: true },
                { text: "Terrestrial", correct: false },
                { text: "Freshwater", correct: false },
                { text: "All of the above", correct: false }
            ],
            explanation: "Echinoderms are primarily marine organisms, meaning they live in the ocean."
        },
        {
            question: "Echinoderms are exclusively in ________ habitat",
            answers: [
                { text: "Terrestrial", correct: false },
                { text: "Marine", correct: true },
                { text: "Fresh water", correct: false },
                { text: "None of the above", correct: false }
            ],
            explanation: "Echinoderms are exclusively marine organisms, meaning they inhabit ocean environments."
        },
        {
            question: "The following are major classes of phylum Coelenterata except",
            answers: [
                { text: "Scyphozoa", correct: false },
                { text: "Anthozoa", correct: false },
                { text: "Metrozoa", correct: true },
                { text: "Hydrozoa", correct: false }
            ],
            explanation: "Metrozoa is not a class within the phylum Coelenterata. The major classes include Scyphozoa, Anthozoa, and Hydrozoa."
        },
        {
            question: "A very common member of the class Turbellaria is the planaria",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Planaria are a well-known example of the class Turbellaria, which consists of mostly free-living flatworms."
        },
        {
            question: "In the class Hydrozoa, the enteron is __________ and lacks nematocysts",
            answers: [
                { text: "Undivided", correct: true },
                { text: "Divided", correct: false },
                { text: "Separate", correct: false },
                { text: "Branched", correct: false }
            ],
            explanation: "In Hydrozoa, the enteron (digestive cavity) is undivided and lacks nematocysts, which are specialized cells found in other cnidarians."
        },
        {
            question: "A collection of related orders forms a class",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "In biological classification, a class is a group that is made up of related orders."
        },
        {
            question: "Lobopodia are characterized by their",
            answers: [
                { text: "Slimness and rigidity", correct: false },
                { text: "Broadness and slimness", correct: false },
                { text: "Rigidity and bluntness", correct: false },
                { text: "Broadness and bluntness", correct: true }
            ],
            explanation: "Lobopodia are a type of pseudopodia characterized by their broad and blunt appearance."
        },
        {
            question: "Flame cells are used in Platyhelminthes for ___________",
            answers: [
                { text: "Osmoregulation and excretion", correct: true },
                { text: "Respiration and excretion", correct: false },
                { text: "Nutrient absorption", correct: false },
                { text: "Reproduction", correct: false }
            ],
            explanation: "Flame cells in Platyhelminthes are specialized cells that function in osmoregulation and excretion, helping to remove waste products and regulate water balance."
        },
        {
            question: "To be radially symmetrical simply means",
            answers: [
                { text: "Possessing a true cell", correct: false },
                { text: "Possessing an antennae", correct: false },
                { text: "Possessing a central axis", correct: true },
                { text: "Possessing a false nucleus", correct: false }
            ],
            explanation: "Radial symmetry means that the body parts are arranged around a central axis, allowing for symmetrical halves if cut through the center."
        },
        {
            question: "An earthworm can live only in moist soil because",
            answers: [
                { text: "Exchange of gases take place through moist skin", correct: true },
                { text: "Respiratory system is absent in earthworm", correct: true },
                { text: "All of the above", correct: true },
                { text: "Blood vascular system is closed type", correct: false }
            ],
            explanation: "Earthworms require a moist environment for gas exchange through their skin and lack a traditional respiratory system, necessitating moist soil for survival."
        },
        {
            question: "Organisms in the class Monogenea are specialized parasites living on their host throughout their lifetime.",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Monogenea are a class of parasitic flatworms that remain attached to their host for their entire lives, often on the skin or gills of fish."
        },
        {
            question: "Phylum Cnidaria is equally known as",
            answers: [
                { text: "Coelenterata", correct: true },
                { text: "Apicomplexa", correct: false },
                { text: "Porifera", correct: false },
                { text: "None of the above", correct: false }
            ],
            explanation: "Phylum Cnidaria, which includes jellyfish, corals, and sea anemones, is also known as Coelenterata."
        },
        {
            question: "Spermatophytes consist of only two classes",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Spermatophytes, or seed plants, are divided into two main classes: angiosperms (flowering plants) and gymnosperms (non-flowering seed plants)."
        },
        {
            question: "_________ botanist that emerged in the 20th century",
            answers: [
                { text: "HUTCHINSON", correct: true }
            ],
            explanation: "Hutchinson is a notable botanist from the 20th century known for his contributions to plant classification."
        },
        {
            question: "A collection of family gives",
            answers: [
                { text: "Genus", correct: false },
                { text: "Kingdom", correct: false },
                { text: "Class", correct: false },
                { text: "Order", correct: true }
            ],
            explanation: "In biological classification, an order is a rank that is composed of related families."
        },
        {
            question: "Endoskeleton in sponge is made of Calcareous or _________",
            answers: [
                { text: "Bone", correct: false },
                { text: "Iron", correct: false },
                { text: "Horny spicules", correct: true },
                { text: "None of the above", correct: false }
            ],
            explanation: "Sponges have an endoskeleton made of calcareous or horny spicules, which provide structural support."
        },
        {
            question: "The following are classes of Platyhelminthes except",
            answers: [
                { text: "Cestoda", correct: false },
                { text: "Monogenea", correct: false },
                { text: "Trematoda", correct: false },
                { text: "Sarcodina", correct: true }
            ],
            explanation: "Sarcodina is not a class of Platyhelminthes. The classes of Platyhelminthes include Cestoda, Monogenea, and Trematoda."
        },
        {
            question: "Generally, Platyhelminthes possess no anus",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Platyhelminthes, or flatworms, typically have a digestive system with a single opening that serves as both mouth and anus."
        },
        {
            question: "The structure that separates the outer epidermis and inner gastrodermis in Cnidaria is said to be",
            answers: [
                { text: "Mesoderm", correct: false },
                { text: "Enteron", correct: false },
                { text: "Gastroderm", correct: false },
                { text: "Mesoglea", correct: true }
            ],
            explanation: "The mesoglea is a gelatinous layer that separates the outer epidermis and inner gastrodermis in cnidarians."
        },
        {
            question: "Axopodia are _____________",
            answers: [
                { text: "Long, thin with canal support", correct: true },
                { text: "Blunt and canal support", correct: false },
                { text: "Thin and broad without canal support", correct: false }
            ],
            explanation: "Axopodia are long and thin pseudopodia supported by a central canal, typically found in certain protozoans."
        },
        {
            question: "The characteristics of Axopodia are ______________",
            answers: [
                { text: "Circular, long with canal support", correct: false },
                { text: "Long, thin with canal support", correct: true },
                { text: "Long, thick with canal support", correct: false },
                { text: "Long, curved with canal support", correct: false }
            ],
            explanation: "Axopodia are characterized by their long, thin structure with a supporting central canal."
        },
        {
            question: "The digested food molecule must undergo ______________________ before they can be absorbed by the living cells in order to release energy",
            answers: [
                { text: "Oxidation", correct: false },
                { text: "Digestion", correct: false },
                { text: "Metabolic process", correct: true },
                { text: "Biochemical reactions", correct: false }
            ],
            explanation: "After digestion, food molecules undergo metabolic processes to be absorbed by cells and provide energy."
        },
        {
            question: "Oxidation is ______________",
            answers: [
                { text: "The loss of electrons from a molecule", correct: true },
                { text: "The loss of protons from a molecule", correct: false },
                { text: "The oxidation of electrons from a molecule", correct: false },
                { text: "The addition of protons to a molecule", correct: false }
            ],
            explanation: "Oxidation involves the loss of electrons from a molecule, which is a key process in cellular respiration."
        },
        {
            question: "The excretory unit of the mammalian kidney is ___________",
            answers: [
                { text: "Nephron", correct: true },
                { text: "Cell", correct: false },
                { text: "Alveoli", correct: false },
                { text: "Medulla", correct: false }
            ],
            explanation: "The nephron is the functional unit of the mammalian kidney, responsible for filtering blood and forming urine."
        },
        {
            question: "Water and carbon dioxide are expelled out of the body through",
            answers: [
              { text: "Trachea", correct: false },
              { text: "Heart", correct: false },
              { text: "Lungs", correct: true },
              { text: "Nose", correct: false }
          ],
            explanation: "The lungs expel water vapor and carbon dioxide as waste products of respiration."
        },
        {
            question: "The two areas of investigation that are most often considered in natural classification are",
            answers: [
                { text: "Ecology and stereology", correct: false },
                { text: "Cytology and embryology", correct: false },
                { text: "Morphology and anatomy", correct: true }
            ],
            explanation: "Morphology (the study of form and structure) and anatomy (the study of internal structure) are key areas in the natural classification of organisms."
        },
        {
            question: "Metamerism occurs in which of the following phylum?",
            answers: [
                { text: "Annelids", correct: true },
                { text: "Platyhelminthes", correct: false },
                { text: "Nematoda", correct: false },
                { text: "Arthropoda", correct: false }
            ],
            explanation: "Metamerism, or segmentation, is a characteristic feature of the phylum Annelida."
        },
        {
            question: "Earthworm is a hermaphrodite but self-fertilization does not take place because:",
            answers: [
                { text: "Maturation of testis takes place earlier", correct: false },
                { text: "Position of reproductive organs", correct: false },
                { text: "All of the above", correct: true },
                { text: "Maturation of ovaries takes place later", correct: false }
            ],
            explanation: "Earthworms have both male and female reproductive organs, but their anatomical arrangement and the timing of gamete maturation prevent self-fertilization."
        },
        {
            question: "Scientists use different criteria for classification:",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Scientists use various criteria like morphology, genetics, and ecology to classify organisms."
        },
        {
            question: "Echinoderms are mainly found in _______ habitat.",
            answers: [
                { text: "Marine", correct: true },
                { text: "Terrestrial", correct: false },
                { text: "Freshwater", correct: false },
                { text: "All of the above", correct: false }
            ],
            explanation: "Echinoderms are exclusively marine organisms, found in oceans around the world."
        },
        {
            question: "Lobopodia are characterized by their:",
            answers: [
                { text: "Slimness and rigidity", correct: false },
                { text: "Broadness and slimness", correct: false },
                { text: "Rigidity and bluntness", correct: false },
                { text: "Broadness and bluntness", correct: true }
            ],
            explanation: "Lobopodia are broad and blunt pseudopodia found in certain protozoans."
        },
        {
            question: "Flame cells are used in Platyhelminthes for:",
            answers: [
                { text: "Osmoregulation and excretion", correct: true },
                { text: "Respiration and excretion", correct: false },
                { text: "", correct: false },
                { text: "", correct: false }
            ],
            explanation: "Flame cells are specialized excretory cells that function in osmoregulation and waste removal in Platyhelminthes."
        },
        {
            question: "To be radially symmetrical means:",
            answers: [
                { text: "Possessing a true cell", correct: false },
                { text: "Possessing an antennae", correct: false },
                { text: "Possessing a central axis", correct: true },
                { text: "Possessing a false nucleus", correct: false }
            ],
            explanation: "Radial symmetry means the organism's body parts are arranged around a central axis."
        },
        {
            question: "An earthworm can live only in moist soil because:",
            answers: [
                { text: "Exchange of gases takes place through moist skin", correct: false },
                { text: "Respiratory system is absent in earthworm", correct: false },
                { text: "All of the above", correct: true },
                { text: "Blood vascular system is closed type", correct: false }
            ],
            explanation: "Earthworms require moist soil for gas exchange through their skin, which is their primary respiratory surface."
        },
        {
            question: "Organisms in the class Monogenea are specialized parasites living on their host throughout their life time. TRUE OR FALSE?",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Monogenea are ectoparasites that typically infest the skin or gills of fish."
        },
        {
            question: "Phylum Cnidaria is equally known as:",
            answers: [
                { text: "Coelenterata", correct: true },
                { text: "Apicomplexa", correct: false },
                { text: "Porifera", correct: false },
                { text: "None of the above", correct: false }
            ],
            explanation: "Cnidaria, also known as Coelenterata, is a phylum containing aquatic organisms such as jellyfish and corals."
        },
        {
            question: "Spermatophytes consist of only two classes:",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Spermatophytes, or seed plants, include two main classes: Gymnosperms and Angiosperms."
        },
        {
            question: "Hutchinson is a botanist that emerged in the 20th century.",
            answers: [
                { text: "Hutchinson", correct: true }
            ],
            explanation: "Hutchinson made significant contributions to the field of botany, particularly in plant classification."
        },
        {
            question: "A collection of families gives:",
            answers: [
                { text: "Genus", correct: false },
                { text: "Kingdom", correct: false },
                { text: "Class", correct: false },
                { text: "Order", correct: true }
            ],
            explanation: "In biological classification, an order is a rank that is higher than family and lower than class."
        },
        {
            question: "Endoskeleton in sponges is made of calcareous or _________.",
            answers: [
                { text: "Bone", correct: false },
                { text: "Iron", correct: false },
                { text: "Horny spicules", correct: true },
                { text: "None of the above", correct: false }
            ],
            explanation: "Sponges have an endoskeleton made of calcareous or siliceous spicules or spongin fibers."
        },
        {
            question: "The following are classes of Platyhelminthes except:",
            answers: [
                { text: "Cestoda", correct: false },
                { text: "Monogenea", correct: false },
                { text: "Trematoda", correct: false },
                { text: "Sarcodina", correct: true }
            ],
            explanation: "Sarcodina is not a class of Platyhelminthes; it is a class of protozoans."
        },
        {
            question: "Generally, Platyhelminthes possess no anus:",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Platyhelminthes, or flatworms, typically have an incomplete digestive system with only one opening."
        },
        {
            question: "The structure that separates the outer epidermis and inner gastrodermis in Cnidaria is said to be:",
            answers: [
                { text: "Mesoderm", correct: false },
                { text: "Enteron", correct: false },
                { text: "Gastroderm", correct: false },
                { text: "Mesoglea", correct: true }
            ],
            explanation: "The mesoglea is the gelatinous layer between the epidermis and gastrodermis in cnidarians."
        },
        {
            question: "Axopodia are characterized by:",
            answers: [
                { text: "Long, thin with canal support", correct: true },
                { text: "Blunt and canal support", correct: false },
                { text: "Thin and broad without canal support", correct: false }
            ],
            explanation: "Axopodia are long, thin pseudopodia supported by a central axis of microtubules."
        },
        {
            question: "The characteristics of axopodia are:",
            answers: [
                { text: "Circular, long with canal support", correct: false },
                { text: "Long, thin with canal support", correct: true },
                { text: "Long, thick with canal support", correct: false },
                { text: "Long, curved with canal support", correct: false }
            ],
            explanation: "Axopodia are characterized by their long, thin structure supported by microtubules."
        },
        {
            question: "The digested food molecule must undergo _________ before they can be absorbed by the living cells in order to generate energy.",
            answers: [
                { text: "Oxidation", correct: false },
                { text: "Digestion", correct: false },
                { text: "Metabolic process", correct: true },
                { text: "Biochemical reactions", correct: false }
            ],
            explanation: "After digestion, food molecules must undergo metabolic processes to be absorbed and used for energy."
        },
        {
            question: "Locomotion in mastigophoran are _________",
            answers: [
                { text: "Pseudopodia and cilia", correct: false },
                { text: "Pseudopodia and flagellate", correct: false },
                { text: "Flagelletes and cilia", correct: true }
            ],
            explanation: "Mastigophorans move using flagella and sometimes cilia."
        },
        {
            question: "Which of the following possess extremely long slender arms?",
            answers: [
                { text: "Asteroidea", correct: false },
                { text: "Ophiuroidea", correct: true },
                { text: "Echhinoidea", correct: false },
                { text: "Holothuroidea", correct: false }
            ],
            explanation: "Ophiuroidea, or brittle stars, are known for their long, slender arms."
        },
        {
            question: "Echinoderms are exclusive in ____________ habitat.",
            answers: [
                { text: "Marine", correct: true },
                { text: "Fresh water", correct: false },
                { text: "None of the above", correct: false },
                { text: "Terrestrial", correct: false }
            ],
            explanation: "Echinoderms are exclusively found in marine environments."
        },
        {
            question: "In earthworm, Nephridia are found in:",
            answers: [
                { text: "Clitellar region", correct: false },
                { text: "Oesophageal region", correct: true },
                { text: "Pretyphlosolar region", correct: false },
                { text: "Intestinal region", correct: false }
            ],
            explanation: "Nephridia, the excretory organs in earthworms, are found in the oesophageal region."
        },
        {
            question: "Grouping of organisms is necessary because:",
            answers: [
                { text: "They have to be grouped", correct: false },
                { text: "There are so many of them", correct: true },
                { text: "None is correct", correct: false },
                { text: "They have to be investigated", correct: false }
            ],
            explanation: "Grouping organisms is essential due to the vast number of species, which helps in organizing and studying them effectively."
        },
        {
            question: "Protista are eukaryotic ______ organisms.",
            answers: [
                { text: "Multicellular", correct: false },
                { text: "Unicellular", correct: true }
            ],
            explanation: "Protista are primarily unicellular eukaryotic organisms."
        },
        {
            question: "Locomotory organelles are characterized by:",
            answers: [
                { text: "Thin with branched network", correct: true },
                { text: "Bluntness and sharpness", correct: false },
                { text: "Longness with canal support", correct: false }
            ],
            explanation: "Locomotory organelles, like cilia and flagella, are thin and can form a branched network."
        },
        {
            question: "Spermatophytes consist of two classes:",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Spermatophytes, or seed plants, include two main classes: Gymnosperms and Angiosperms."
        },
        {
            question: "Amoeba uses what to move?",
            answers: [
                { text: "Lobopodia", correct: true },
                { text: "Filopodia", correct: false },
                { text: "Cilia", correct: false },
                { text: "Pseudopodia", correct: true }
            ],
            explanation: "Amoeba moves using pseudopodia, which are temporary projections of the cell."
        },
        {
            question: "Male bryophyte is called _________.",
            answers: [
                { text: "Gametophyte", correct: false },
                { text: "Antheridium", correct: true }
            ],
            explanation: "In bryophytes, the male gametophyte is called the antheridium."
        },
        {
            question: "Thallophytes are not vascularized:",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Thallophytes, such as algae, lack vascular tissues for the transport of water and nutrients."
        },
        {
            question: "One of the following has chromatophores:",
            answers: [
                { text: "Phytoflagellates", correct: false },
                { text: "Zooflagellates", correct: true },
                { text: "Platyhelminthes", correct: false }
            ],
            explanation: "Zooflagellates possess chromatophores, which are pigment-containing and light-reflecting cells."
        },
        {
            question: "Taxonomy can also be referred to as _________.",
            answers: [
                { text: "System", correct: false },
                { text: "Systematic", correct: false },
                { text: "Systematics", correct: true }
            ],
            explanation: "Taxonomy, the science of classification, is also known as systematics."
        },
        {
            question: "Is it impossible for a phylum to have subdivisions?",
            answers: [
                { text: "True", correct: false },
                { text: "False", correct: true }
            ],
            explanation: "A phylum can have subdivisions such as classes, orders, families, genera, and species."
        },
        {
            question: "Turbellarians are mostly free-living and are predominantly:",
            answers: [
                { text: "All of the above", correct: false },
                { text: "Arboreal", correct: false },
                { text: "Marine", correct: true },
                { text: "Terrestrial", correct: false }
            ],
            explanation: "Turbellarians are mostly free-living and are predominantly found in marine environments."
        },
        {
            question: "Volvox is an example of:",
            answers: [
                { text: "Plant-like flagellates", correct: true },
                { text: "Animal-like mastigophora", correct: false },
                { text: "Zooflagellate", correct: false },
                { text: "Phycomastigophora", correct: false }
            ],
            explanation: "Volvox is a genus of plant-like flagellates known for forming spherical colonies."
        },
        {
            question: "Do mature Sarcodina use pseudopodia?",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Mature Sarcodina, like amoebas, use pseudopodia for movement and feeding."
        },
        {
            question: "The existence of an organism in different forms is called __________.",
            answers: [
                { text: "Reproduction", correct: false },
                { text: "Regeneration", correct: false },
                { text: "Recreation", correct: false },
                { text: "Polymorphism", correct: true }
            ],
            explanation: "Polymorphism refers to the occurrence of different forms or morphs within a species."
        },
        {
            question: "Which of the following is a true jellyfish?",
            answers: [
                { text: "Coral", correct: false },
                { text: "Aurelia", correct: true },
                { text: "Hydra", correct: false },
                { text: "Obelia", correct: false }
            ],
            explanation: "Aurelia, also known as the moon jelly, is a true jellyfish."
        },
        {
            question: "Excretion and osmoregulation in the phylum Platyhelminthes are done and achieved by the usage of flame cell.",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Flame cells are specialized cells used by platyhelminths for excretion and osmoregulation."
        },
        {
            question: "A very common example of class Turbellaria is planaria.",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Planaria are a well-known example of the class Turbellaria, free-living flatworms."
        },
        {
            question: "Presence of coelom and metamerism are the most important characteristics in:",
            answers: [
                { text: "Helminthes", correct: false },
                { text: "Coelenterates", correct: false },
                { text: "Annelids", correct: true },
                { text: "Arthropods", correct: false }
            ],
            explanation: "Annelids are characterized by having a coelom and metamerism (segmentation)."
        },
        {
            question: "Living representatives of the pelmatozoa are found in class __________",
            answers: [
                { text: "Asteridea", correct: false },
                { text: "Crinoidea", correct: true },
                { text: "Echinoidea", correct: false },
                { text: "Holothuroidea", correct: false }
            ],
            explanation: "Living representatives of the pelmatozoa are found in the class Crinoidea."
        },
        {
            question: "The nuclei in the members of Opalinata are dissimilar.",
            answers: [
                { text: "True", correct: false },
                { text: "False", correct: true }
            ],
            explanation: "The nuclei in members of Opalinata are similar, not dissimilar."
        },
        {
            question: "The class Lycopodinae of the division Pteridophytes are vascular plants that grow in water.",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Lycopodinae are vascular plants that grow in water."
        },
        {
            question: "The use of multi-criteria is allowed in classification of organisms.",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "The use of multi-criteria is allowed and often necessary in the classification of organisms."
        },
        {
            question: "The division Thallophytes includes all the following except:",
            answers: [
                { text: "Aquatic features", correct: false },
                { text: "Schizophyte", correct: false },
                { text: "Oogonium", correct: false },
                { text: "Embryonic", correct: true }
            ],
            explanation: "Thallophytes do not have embryonic features."
        },
        {
            question: "Platyhelminths are known as Cnidarians.",
            answers: [
                { text: "True", correct: false },
                { text: "False", correct: true }
            ],
            explanation: "Platyhelminths are not Cnidarians; they are flatworms."
        },
        {
            question: "Which of the following is not a criterion for classifying protozoas?",
            answers: [
                { text: "Life cycle and mode of reproduction", correct: false },
                { text: "Differences in locomotory organelles", correct: false },
                { text: "Tentacles", correct: true },
                { text: "Number of organelles", correct: false }
            ],
            explanation: "Tentacles are not a criterion for classifying protozoas."
        },
        {
            question: "The best three units of plant classification include the following:",
            answers: [
                { text: "Genus", correct: true },
                { text: "Species", correct: true },
                { text: "Order", correct: false },
                { text: "Family", correct: true }
            ],
            explanation: "Genus, species, and family are essential units in plant classification."
        },
        {
            question: "Which of the following is not a true advancement of the phylum Platyhelminthes over sponges and coelenterates?",
            answers: [
                { text: "Lack of dorsal ventral surfaces", correct: true },
                { text: "Presence of true nervous system consisting of enlarged anterior ganglia and nerve cords extending along the body", correct: false },
                { text: "Possession of gonads with definite ducts and copulatory organs", correct: false },
                { text: "Possession of mesoderm as a third body layer in coelenterata instead of mesoglea", correct: false }
            ],
            explanation: "Platyhelminthes do not lack dorsal and ventral surfaces."
        },
        {
            question: "The Platyhelminthes show some degree of advancement over sponges and coelenterates by virtue of the following characteristics except:",
            answers: [
                { text: "Absence of mesoderm as the third layer", correct: true },
                { text: "Possession of dorsal and ventral surfaces", correct: false },
                { text: "Possession of a well-developed nervous coordinating system extending along their entire body", correct: false },
                { text: "Possession of internal gonads with definite ducts and copulatory organs", correct: false }
            ],
            explanation: "Platyhelminthes do have mesoderm as a third layer, unlike sponges and coelenterates."
        },
        {
            question: "Echinoderms possess the following except:",
            answers: [
                { text: "Nephridia and specialized excretory organs", correct: true },
                { text: "Poorly developed sensory organs", correct: false },
                { text: "Skin containing calcareous ossicles and spines", correct: false },
                { text: "Water vascular system", correct: false }
            ],
            explanation: "Echinoderms lack nephridia and specialized excretory organs."
        },
        {
            question: "The structure that separates the outer epidermis and inner gastrodermis in Cnidaria is ______",
            answers: [
                { text: "Mesoderm", correct: false },
                { text: "Gastroderm", correct: false },
                { text: "Enteron", correct: false },
                { text: "Mesoglea", correct: true }
            ],
            explanation: "Mesoglea is the structure that separates the outer epidermis and inner gastrodermis in Cnidaria."
        },
        {
            question: "Polystoma attaches to their host's body by an elaborate adhesive organ called _________",
            answers: [
                { text: "Radula", correct: false },
                { text: "Teeth", correct: false },
                { text: "Haptor", correct: true },
                { text: "None", correct: false }
            ],
            explanation: "Polystoma uses an adhesive organ called a haptor to attach to their host's body."
        },
        {
            question: "Which of these is not a criterion for classifying protozoa?",
            answers: [
                { text: "Difference in locomotory organ", correct: false },
                { text: "Tentacles", correct: true },
                { text: "Life cycle and mode of reproduction", correct: false },
                { text: "Number of organelles", correct: false }
            ],
            explanation: "Tentacles are not a criterion for classifying protozoa."
        },
        {
            question: "Triploblastic, bilateral, elongated, and vermiform body are characteristic of:",
            answers: [
                { text: "Coelenterata", correct: false },
                { text: "Porifera", correct: false },
                { text: "Platyhelminthes", correct: true }
            ],
            explanation: "Platyhelminthes exhibit these characteristics."
        },
        {
            question: "Cnidaria is known as:",
            answers: [
                { text: "Coelenterata", correct: true },
                { text: "None of the above", correct: false },
                { text: "Arthropoda", correct: false },
                { text: "Annelida", correct: false }
            ],
            explanation: "Cnidaria is also known as Coelenterata."
        },
        {
            question: "Echinoderm is found in:",
            answers: [
                { text: "Fresh water", correct: false },
                { text: "Estuarine", correct: false },
                { text: "Salt water", correct: true }
            ],
            explanation: "Echinoderms are found in salt water or marine environments."
        },
        {
            question: "Platyhelminthes is also known as Cnidaria.",
            answers: [
                { text: "True", correct: false },
                { text: "False", correct: true }
            ],
            explanation: "Platyhelminthes are not Cnidaria; they are flatworms."
        },
        {
            question: "Earthworms have coelom and are metamerically segmented.",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Earthworms indeed have a coelom and exhibit metamerism, with repeated body segments."
        },
        {
            question: "Opalinate have more than one nucleus.",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Opalinata are characterized by having multiple nuclei within their cells."
        },
        {
            question: "Larvae of Echinoderms exhibit _______ symmetry.",
            answers: [
                { text: "Radial", correct: true },
                { text: "Longitudinal", correct: false },
                { text: "Bilateral", correct: false },
                { text: "None of the above", correct: false }
            ],
            explanation: "Echinoderm larvae typically exhibit radial symmetry."
        },
        {
            question: "Echinoderms possess which distinct feature that differentiates them from other invertebrates?",
            answers: [
                { text: "None of the above", correct: false },
                { text: "Ectodermal skeleton", correct: false },
                { text: "Bones", correct: false },
                { text: "Mesodermal skeleton", correct: true }
            ],
            explanation: "Echinoderms have a unique mesodermal skeleton, unlike other invertebrates."
        },
        {
            question: "Platyhelminthes are also known as ________.",
            answers: [
                { text: "Flatworm", correct: true },
                { text: "Earthworm", correct: false },
                { text: "Roundworm", correct: false },
                { text: "Sponges", correct: false }
            ],
            explanation: "Platyhelminthes are commonly referred to as flatworms."
        },
        {
            question: "Hemichordates are false chordates.",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Hemichordates, such as acorn worms, are not true chordates."
        },
        {
            question: "Volvox is ________.",
            answers: [
                { text: "Multicellular", correct: true },
                { text: "Simple unicellular", correct: false }
            ],
            explanation: "Volvox is a genus of green algae that forms spherical colonies, making it multicellular."
        },
        {
            question: "Which of the following is not involved in systematic?",
            answers: [
                { text: "Assessment of classification of data", correct: false },
                { text: "Identification", correct: false },
                { text: "Nomenclature", correct: false },
                { text: "All options are correct", correct: true }
            ],
            explanation: "All the options listed are involved in systematic biology."
        },
        {
            question: "Clitellum secretes ________.",
            answers: [
                { text: "Egg", correct: false },
                { text: "Maggot", correct: false },
                { text: "Cocoon", correct: true },
                { text: "Albumen", correct: false }
            ],
            explanation: "The clitellum of earthworms secretes a cocoon for holding eggs during reproduction."
        },
        {
            question: "Phycology is the study of:",
            answers: [
                { text: "Algae", correct: true },
                { text: "Fungi", correct: false },
                { text: "Virus", correct: false }
            ],
            explanation: "Phycology is the branch of biology concerned with the study of algae."
        },
        {
            question: "Which one of the following is metamerically segmented?",
            answers: [
                { text: "Annelid", correct: true },
                { text: "Arthropoda", correct: false },
                { text: "Coelenterata", correct: false },
                { text: "Mollusca", correct: false }
            ],
            explanation: "Annelids, such as earthworms, exhibit metamerically segmented bodies."
        },
        {
            question: "The class Temnocephalida of the phylum Platyhelminthes are characterized by the possession of tentacles in the form of a sac-like gut.",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Temnocephalida are known for having tentacles resembling a sac-like gut."
        },
        {
            question: "Opalinates move with the aid of ________.",
            answers: [
                { text: "Cilia", correct: false },
                { text: "Pseudopodia", correct: false },
                { text: "Flagella", correct: true }
            ],
            explanation: "Opalinates move using flagella, which are whip-like appendages."
        },
        {
            question: "End products of fermentation in yeast are ________.",
            answers: [
                { text: "Carbon dioxide and oxygen", correct: false },
                { text: "Ethanol and carbon dioxide", correct: true },
                { text: "Carbon dioxide and citric acid", correct: false },
                { text: "Carbon dioxide and acetaldehyde", correct: false }
            ],
            explanation: "Yeast fermentation produces ethanol and carbon dioxide as end products."
        },
        {
            question: "The three-leaved yam is also called dumetorum.",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Dumetorum is another name for the three-leaved yam."
        },
        {
            question: "The division products of budding are unequal.",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "In budding, the division products are indeed unequal."
        },
        {
            question: "Which of the following fungi is imperfect?",
            answers: [
                { text: "Basidiomycetes", correct: false },
                { text: "Deuteromycetes", correct: true },
                { text: "Ascomycetes", correct: false },
                { text: "Phycomycetes", correct: false }
            ],
            explanation: "Deuteromycetes are fungi that are known as imperfect fungi."
        },
        {
            question: "Another name for red algae is ________.",
            answers: [
                { text: "Chromophyta", correct: false },
                { text: "Chlorophyta", correct: false },
                { text: "Rhodophyta", correct: true },
                { text: "Bromophyta", correct: false }
            ],
            explanation: "Red algae are scientifically known as Rhodophyta."
        },
        {
            question: "Natural classification is based on the following except ________.",
            answers: [
                { text: "Cytology and genetics", correct: false },
                { text: "Histology", correct: true },
                { text: "Comparative anatomy", correct: false },
                { text: "Comparative morphology", correct: false }
            ],
            explanation: "Histology (the study of tissues) is not a basis for natural classification."
        },
        {
            question: "Most hydroids possess a small medusa which has a velum but lack ________.",
            answers: [
                { text: "Gymnodium", correct: false },
                { text: "Stomodium", correct: true },
                { text: "Spermadium", correct: false },
                { text: "Stobodium", correct: false }
            ],
            explanation: "Hydroids typically lack a stomodium in their small medusa stage."
        },
        {
            question: "Hydra is a sexual and asexual organism.",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Hydra exhibits both sexual and asexual reproduction."
        },
        {
            question: "An amoebocyte that has pigment is called ________.",
            answers: [
                { text: "Archaeocyte", correct: false },
                { text: "Cyanocyte", correct: false },
                { text: "Chromocyte", correct: true },
                { text: "Scirocyte", correct: false }
            ],
            explanation: "A pigment-containing amoebocyte is known as a chromocyte."
        },
        {
            question: "The calyx and corolla are collectively called ________.",
            answers: [
                { text: "Perianth", correct: true }
            ],
            explanation: "The perianth collectively refers to the calyx and corolla of a flower."
        },
        {
            question: "All these are considered during classification of organisms except ________.",
            answers: [
                { text: "Social status", correct: true },
                { text: "Natural criteria", correct: false },
                { text: "Artificial criteria", correct: false },
                { text: "Phylogenetic relationships", correct: false }
            ],
            explanation: "Social status is not a consideration in the classification of organisms."
        },
        {
            question: "Planaria is a terrestrial animal.",
            answers: [
                { text: "True", correct: false },
                { text: "False", correct: true }
            ],
            explanation: "Planaria are predominantly aquatic and not terrestrial animals."
        },
        {
            question: "Rhodophyta are easily identified by ________.",
            answers: [
                { text: "Red pigment", correct: true }
            ],
            explanation: "Rhodophyta (red algae) are characterized by their red pigmentation."
        },
        {
            question: "Which of these is incorrect about thallophytes?",
            answers: [
                { text: "No vascular plants", correct: false },
                { text: "Oogonium is present", correct: false },
                { text: "No embryotic stage", correct: false },
                { text: "Antheridium is male gametangia", correct: false }
            ],
            explanation: "All the options listed are correct statements about thallophytes."
        },
        {
            question: "Phylum Echinodermata larval stage is ________.",
            answers: [
                { text: "Bilaterally", correct: true },
                { text: "Radially", correct: false },
                { text: "Symmetrical", correct: false },
                { text: "Asymmetrical", correct: false }
            ],
            explanation: "The larval stage of echinoderms exhibits bilateral symmetry."
        },
        {
            question: "Filopodia are found in ________.",
            answers: [
                { text: "Areolla or Actinomorph", correct: false },
                { text: "Euglena", correct: false },
                { text: "Polystomella", correct: true },
                { text: "Allongonia", correct: false }
            ],
            explanation: "Filopodia are present in Polystomella."
        },
        {
            question: "The five kingdom classification is based on ________.",
            answers: [
                { text: "Protista", correct: true },
                { text: "Monera", correct: true },
                { text: "Cenozea", correct: false },
                { text: "Autotroph", correct: false }
            ],
            explanation: "The five kingdom classification includes Protista and Monera."
        },
        {
            question: "The smallest microbe is ________.",
            answers: [
                { text: "Algae", correct: false },
                { text: "Virus", correct: true },
                { text: "Bacteria", correct: false },
                { text: "Fungi", correct: false }
            ],
            explanation: "Viruses are considered the smallest microbes."
        },
        {
            question: "The smallest nervous system which consists of a nerve net without a brain is ________.",
            answers: [
                { text: "Aves", correct: false },
                { text: "Fishes and jellyfish", correct: false },
                { text: "Jellyfish and sea anemones", correct: true },
                { text: "Reptiles and sea anemones", correct: false }
            ],
            explanation: "Jellyfish and sea anemones have a nerve net without a centralized brain."
        },
        {
            question: "In the development of centipedes into adults, the display of the complement of segments and legs at the hatchery stage is ________.",
            answers: [
                { text: "Polymorphic", correct: false },
                { text: "Dimorphic", correct: false },
                { text: "Monophoric", correct: false },
                { text: "Epimorphic", correct: true }
            ],
            explanation: "Centipedes exhibit epimorphic development where segments and legs are displayed gradually."
        },
        {
            question: "________ is an example of zooflagellate.",
            answers: [
                { text: "Plasmodium", correct: false },
                { text: "Amoeba", correct: false },
                { text: "Sponges", correct: false },
                { text: "Trypanosoma", correct: true }
            ],
            explanation: "Trypanosoma is a well-known example of a zooflagellate."
        },
        {
            question: "Bacteria are regarded as prokaryotic because ________.",
            answers: [
                { text: "It has no nucleus", correct: true },
                { text: "It has lower plants", correct: false },
                { text: "It contains acid-like", correct: false }
            ],
            explanation: "Bacteria lack a nucleus, which is a characteristic feature of prokaryotes."
        },
        {
            question: "Who was the botanist known as the father of plant ecology?",
            answers: [
                { text: "Caesalpino", correct: false },
                { text: "Turner", correct: true },
                { text: "Eugler", correct: false }
            ],
            explanation: "Turner is recognized as the father of plant ecology."
        },
        {
            question: "Algae are found in which environment?",
            answers: [
                { text: "Rock", correct: false },
                { text: "Sea", correct: true },
                { text: "Hot spring", correct: false }
            ],
            explanation: "Algae are predominantly found in aquatic environments."
        },
        {
            question: "Spermatophytes consist of how many subclasses?",
            answers: [
                { text: "Two", correct: true }
                  ],
        explanation: "Spermatophytes are divided into two subclasses."
        },
        {
            question: "Mature ovum is called",
            answers: [
                { text: "Fern", correct: false },
                { text: "Ovale", correct: false },
                { text: "Seed", correct: false },
                { text: "Fruit", correct: true }
            ],
            explanation: "A mature ovum is commonly referred to as a seed."
        },
        {
            question: "_________ are vascular plants",
            answers: [
                { text: "Bryophyte", correct: false },
                { text: "Dicot", correct: true },
                { text: "Pteridophyta", correct: false },
                { text: "Spermatophyte", correct: false }
            ],
            explanation: "Dicots are vascular plants with seeds that have two cotyledons."
        },
        {
            question: "Reticulopodia has ________",
            answers: [
                { text: "Thin and branched network", correct: false },
                { text: "Thin and long support", correct: false },
                { text: "Thick and long support", correct: false },
                { text: "Long, thin with a canal support", correct: true }
            ],
            explanation: "Reticulopodia are characterized by long, thin structures with a canal support."
        },
        {
            question: "Blue-green algae are called __________",
            answers: [
                { text: "Cyanophyta", correct: true }
            ],
            explanation: "Blue-green algae are scientifically known as Cyanophyta."
        },
        {
            question: "On classification, the Whittaker system includes the following",
            answers: [
                { text: "Protista", correct: true },
                { text: "Mitosis", correct: false },
                { text: "Monera", correct: true },
                { text: "Bryophyta", correct: false }
            ],
            explanation: "The Whittaker system includes Protista and Monera in its classification."
        },
        {
            question: "The primitive organism of bryophytes is __________",
            answers: [
                { text: "Thalloid liverworts", correct: true }
            ],
            explanation: "Thalloid liverworts are considered primitive organisms in the bryophyte division."
        },
        {
            question: "Webbed toes are modified for the following except",
            answers: [
                { text: "Sunning", correct: true },
                { text: "Locomotion", correct: false },
                { text: "Respiration", correct: false },
                { text: "Catching of prey", correct: false }
            ],
            explanation: "Webbed toes are not modified for sunning."
        },
        {
            question: "Dioscorea alata is also known as",
            answers: [
                { text: "Aerial", correct: false },
                { text: "Water", correct: true },
                { text: "Yellow", correct: false },
                { text: "Bitter", correct: false }
            ],
            explanation: "Dioscorea alata is commonly known as water yam."
        },
        {
            question: "Physiology explains the complexity of flowering plants",
            answers: [
                { text: "True", correct: false },
                { text: "False", correct: true }
            ],
            explanation: "Physiology studies the functions of organisms rather than their complexity."
        },
        {
            question: "The most widely used criteria for classification of organisms is __",
            answers: [
                { text: "Palentology and physiology", correct: false },
                { text: "Seriology and anatomy", correct: false },
                { text: "Cytology and gerontology", correct: false },
                { text: "Morphology and Anatomy", correct: true }
            ],
            explanation: "Morphology and anatomy are key criteria in the classification of organisms."
        },
        {
            question: "Sporophyte is dominant in",
            answers: [
                { text: "Thallophyte", correct: false },
                { text: "Bryophyte", correct: false },
                { text: "Pteridophyte", correct: true },
                { text: "Spermatophyte", correct: false }
            ],
            explanation: "The sporophyte generation is dominant in the pteridophtee stage",
        },
        {
            question: "Division ______________is found in moist and shady places",
            answers: [
                { text: "Thallophyte", correct: true },
                { text: "Bryophyte", correct: true },
                { text: "Pteridophyte", correct: false },
                { text: "Spermatophyte", correct: false }
            ],
            explanation: "Thallophytes and bryophytes thrive in moist and shady environments."
        },
        {
            question: "Annelids use ______ for excretion",
            answers: [
                { text: "Malpighian tubules", correct: false },
                { text: "Flame cell", correct: false },
                { text: "Nephridia", correct: true },
                { text: "Lung book", correct: false }
            ],
            explanation: "Annelids utilize nephridia for excretion purposes."
        },
        {
            question: "The results of investigations for classification are based on",
            answers: [
                { text: "Comparative anatomy", correct: false },
                { text: "Palentology", correct: false },
                { text: "Comparative morphology", correct: false },
                { text: "All options are correct", correct: true }
            ],
            explanation: "Classification investigations consider comparative anatomy, paleontology, and morphology."
        },
        {
            question: "Branch networking is _______________ feature of pseudopodia",
            answers: [
                { text: "Filopodia", correct: false },
                { text: "Axopodia", correct: false },
                { text: "Reticulopodia", correct: true }
            ],
            explanation: "Reticulopodia exhibit a branch networking feature."
        },
        {
            question: "Organisms that belong to class Trematoda are called flukes",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Flukes are organisms classified under the class Trematoda."
        },
        {
            question: "_________ is the most primitive class of division Thallophyta",
            answers: [
                { text: "Hydra", correct: false },
                { text: "Algae", correct: false },
                { text: "Fungi", correct: false },
                { text: "Schizomycetes", correct: true }
            ],
            explanation: "Schizomycetes is considered the most primitive class in division Thallophyta."
        },
        {
            question: "What three is the most important hierarchy of classification",
            answers: [
                { text: "Family", correct: true },
                { text: "Order", correct: false },
                { text: "Genus", correct: true },
                { text: "Species", correct: true }
            ],
            explanation: "The most important hierarchical levels in classification are family, genus, and species."
        },
        {
            question: "Opalinata has more than one nucleus",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Opalinata organisms are characterized by having multiple nuclei."
        },
        {
            question: "The nuclei of Opalinata differ from each other",
            answers: [
                { text: "True", correct: false },
                { text: "False", correct: true }
            ],
            explanation: "The nuclei in Opalinata are typically identical, not differing from each other."
        },
        {
            question: "Sarcomastigophora are divided into how many types",
            answers: [
                { text: "3", correct: true },
                { text: "2", correct: false },
                { text: "5", correct: false },
                { text: "7", correct: false }
            ],
            explanation: "Sarcomastigophora are divided into three types."
        },
        {
            question: "The most commonly used criteria of classification are _________ and ____________",
            answers: [
                { text: "Physiology and morphology", correct: false },
                { text: "Morphology and Anatomy", correct: true },
                { text: "Ecosystem and osmoregulation", correct: false },
                { text: "Anatomy and Phycology", correct: false }
            ],
            explanation: "Classification commonly uses morphology and anatomy as criteria."
        },
        {
            question: "Head and thorax are fused with",
            answers: [
                { text: "Metathorax", correct: false },
                { text: "Endothorax", correct: false },
                { text: "Cephalothorax", correct: true },
                { text: "Prothorax", correct: false }
            ],
            explanation: "In some arthropods, the head and thorax are fused into a cephalothorax."
        },
        {
            question: "Hydra undergoes both sexual and asexual forms of reproduction",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Hydra is capable of both sexual and asexual reproduction."
        },
        {
            question: " The association between fungi and algae is",
            answers: [
                { text: "Lichen", correct: true },
                { text: "Rhizoid", correct: false },
                { text: "Virus", correct: false },
                { text: "Schimooid", correct: false }
            ],
            explanation: "Fungi and algae form a symbiotic association known as lichen."
        },
        {
            question: " Reproduction in Cnidarians is",
            answers: [
                { text: "Tetra", correct: false },
                { text: "Trimea", correct: false },
                { text: "Dimorphism", correct: true },
                { text: "", correct: false }
            ],
            explanation: "Reproduction in cnidarians involves both asexual polyp stage and sexual medusa stage."
        },
        {
            question: " The botanical name for three leaved yam is Dioscorea dutherim",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Dioscorea dumeriliana is another name for the three-leaved yam."
        },
        {
            question: " The combination of the following had a series of publications with comprehensive account of several families of flowering plants",
            answers: [
                { text: "Engler and Linnaeus", correct: false },
                { text: "Kaspar Bauhin and Engler", correct: false },
                { text: "Engler and Pranti", correct: true },
                { text: "De candollel and Engler", correct: false }
            ],
            explanation: "Engler and Prantl collaborated on comprehensive publications about flowering plant families."
        },
        {
            question: " The phylum that has radical symmetry and tripoblastic is",
            answers: [
                { text: "Annelids", correct: false },
                { text: "Arthropoda", correct: false },
                { text: "Coelenterata", correct: true },
                { text: "None of the options", correct: false }
            ],
            explanation: "Coelenterates (Cnidarians) exhibit radial symmetry and are triploblastic."
        },
        {
            question: " Does Thallophyte undergoes resting period?",
            answers: [
                { text: "YES/TRUE", correct: true },
                { text: "NO/FALSE", correct: false }
            ],
            explanation: "Thallophytes do undergo a resting period as part of their life cycle."
        },
        {
            question: " Selaginella is used to be heterosporous under pteridophytes",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Selaginella is a heterosporous plant belonging to the pteridophytes."
        },
        {
            question: " The locomotory organelles in the members of the phylum sarcomastigophoras are",
            answers: [
                { text: "Flagella and true feet", correct: false },
                { text: "Cilia and flagella", correct: false },
                { text: "Pseudopodia and flagella", correct: true },
                { text: "Pseudopodia and cilia", correct: false }
            ],
            explanation: "Sarcomastigophorans move using pseudopodia and flagella."
        },
        {
            question: " The Tentacles that surround the mouth which leads to a sac-like digestive cavity in cnidarians is",
            answers: [
                { text: "ENTERON", correct: false },
                { text: "COELENTERON", correct: true },
                { text: "GASTRORHEA", correct: false },
                { text: "MEDUSA", correct: false }
            ],
            explanation: "The tentacles around the mouth of cnidarians lead to a sac-like digestive cavity called the coelenteron."
        },
        {
            question: " The exoskeleton and endoskeleton of the cnidarians is made up of __________ except",
            answers: [
                { text: "Chitinous", correct: false },
                { text: "Calcareous", correct: false },
                { text: "Proteinous", correct: false },
                { text: "Cellulose", correct: true }
            ],
            explanation: "The exoskeleton and endoskeleton of cnidarians are made of chitinous, calcareous, or proteinous substances, not cellulose."
        },
        {
            question: " Reproduction in coelenterata is with an asexual sessile polyp and a sexual free-swimming ___________",
            answers: [
                { text: "MEDUSA", correct: true },
                { text: "RHIZOID", correct: false },
                { text: "FERTILIZATION", correct: false },
                { text: "SPORANGIUM", correct: false }
            ],
            explanation: "Coelenterates reproduce asexually through sessile polyps and sexually through free-swimming medusa."
        },
        {
            question: " Euglena are __________",
            answers: [
                { text: "Free living phaytomastigophoran", correct: true },
                { text: "Colonial masrstigophora", correct: false },
                { text: "Doubled marstigophora", correct: false },
                { text: "Joined mastigophoran", correct: false }
            ],
            explanation: "Euglena are free-living phagotrophic flagellates classified under Phytomastigophora."
        },
        {
            question: " Alternation of generation in coelentrates is ___________",
            answers: [
                { text: "Trimorphism", correct: false },
                { text: "Polymorphism", correct: false },
                { text: "Monomorphism", correct: false },
                { text: "Dimorphism", correct: true }
            ],
            explanation: "Coelenterates exhibit alternation of generations known as dimorphism."
        },
        {
            question: " Thallophytes have the following except ___________",
            answers: [
                { text: "The body is thalloid", correct: false },
                { text: "They are vascularised plants", correct: true },
                { text: "The female gametangium is oogonium", correct: false },
                { text: "No embryonic stage", correct: false }
            ],
            explanation: "Thallophytes lack vascular tissue, unlike vascular plants."
        },
        {
            question: " Seed-producing type is peculiar to spermatophyte",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Seed production is characteristic of spermatophytes."
        },
        {
            question: " Typically, the body of polyptubular with one end called aboral and other called oral with central mouth usually surrounded by _______",
            answers: [
                { text: "Cilia", correct: false },
                { text: "Tentacles", correct: true },
                { text: "Flagella", correct: false },
                { text: "None", correct: false }
            ],
            explanation: "Cnidarians have a tubular body with tentacles surrounding the oral end."
        },
        {
            question: " Anaerobic bacteria is found in the following",
            answers: [
                { text: "Toss surface of organism", correct: false },
                { text: "Soak away", correct: true },
                { text: "Aerated soil", correct: false }
            ],
            explanation: "Anaerobic bacteria thrive in environments like soakaways where oxygen is limited."
        },
        {
            question: " ___________ in the early 20th century gave the natural classification of plants",
            answers: [
                { text: "HUTCHINSON", correct: true },
                { text: "Ricardo Bertrand", correct: false },
                { text: "Ernst Heinrich", correct: false },
                { text: "Lysenko", correct: false }
            ],
            explanation: "Hutchinson contributed to the natural classification of plants in the early 20th century."
        },
        {
            question: " All these are considered during classification of organisms except",
            answers: [
                { text: "Social status", correct: true },
                { text: "Natural criteria", correct: false },
                { text: "Phylogenetic relationships", correct: false },
                { text: "Artificial criteria", correct: false }
            ],
            explanation: "Classification of organisms does not consider social status."
        },
        {
            question: " It is impossible to have many subgroups of organisms from a group under classification",
            answers: [
                { text: "True", correct: false },
                { text: "False", correct: true }
            ],
            explanation: "Classification can lead to numerous subgroups within a larger group."
        },
        {
            question: " Allongonia uses the type of pseudopodia called __________",
            answers: [
                { text: "Reticulopodia", correct: false },
                { text: "Axopodia", correct: false },
                { text: "Lobopodia", correct: false },
                { text: "Filopodia", correct: false },
                { text: "Reticulopodia", correct: true }
            ],
            explanation: "Allongonia utilizes reticulopodia as a type of pseudopodia."
        },
        {
            question: " Flagella mastigophora are also useful to the following except",
            answers: [
                { text: "Movement", correct: false },
                { text: "Collect food", correct: false },
                { text: "Perceive stimuli in the environment", correct: false },
                { text: "Get rid the waste", correct: true }
            ],
            explanation: "Flagella mastigophora are not used for getting rid of waste."
        },
        {
            question: " Haptors that are found at the anterior and posterior ends of the body of a polystoma are respectively called _____________",
            answers: [
                { text: "Steohaptor and Opisthaptor", correct: false },
                { text: "Prohaptor and Steohaptor", correct: false },
                { text: "Prohaptor and Opisthaptor", correct: true },
                { text: "Prohaptor and Opisthaptor", correct: true }
            ],
            explanation: "Haptors at the ends of Polystoma are known as Prohaptor and Opisthaptor."
        },
        {
            question: " Chlamydomonas pyrenoid found at the center of chloroplast is used for ________ their product",
            answers: [
                { text: "Absorbing", correct: false },
                { text: "Digestion", correct: false },
                { text: "Excretion", correct: false },
                { text: "Storing", correct: true }
            ],
            explanation: "Chlamydomonas pyrenoid stores their products at the center of the chloroplast."
        },
        {
            question: " Which of the following is not true",
            answers: [
                { text: "The male gametophore in Bryophyte is antheridium", correct: false },
                { text: "The male gametophore in spermatophyte is antheridium", correct: true },
                { text: "The male gametophore in thallophyte is antheridium", correct: false },
                { text: "The sex gametes is not protected in thallophyte", correct: false }
            ],
            explanation: "The male gametophore in spermatophytes is pollen grains, not an antheridium."
        },
        {
            question: " Nutrition in bacteria are the following except",
            answers: [
                { text: "Chemosynthetic", correct: false },
                { text: "Parasitic", correct: false },
                { text: "Homosynthetic", correct: false },
                { text: "Photosynthetic", correct: true }
            ],
            explanation: "Bacteria do not perform photosynthesis for nutrition."
        },
        {
            question: " Another name for Bryophyte is ___________",
            answers: [
                { text: "Bryophyta", correct: false },
                { text: "Marchantiophyta", correct: false },
                { text: "Liverwort", correct: false },
                { text: "None of the above", correct: true }
            ],
            explanation: "Bryophyte is not another name for itself, liverwort or Marchantiophyta are used."
        },
        {
            question: " Liverwort are found in the _________",
            answers: [
                { text: "Bryophyta", correct: true },
                { text: "Thallophyta", correct: false },
                { text: "Spermatophyta", correct: false },
                { text: "None of the above", correct: false }
            ],
            explanation: "Liverworts belong to the division Bryophyta."
        },
        {
            question: " Actinomorpha are example of Axopodia",
            answers: [
                { text: "False", correct: true },
                { text: "True", correct: false }
            ],
            explanation: "Actinopoda, not Actinomorpha, are examples of Axopodia."
        },
        {
            question: " A triploblastic, bilaterally symmetrical, elongated is characteristics of ______",
            answers: [
                { text: "ECHINODERMATA", correct: false },
                { text: "PLATYHELMINTHES", correct: false },
                { text: "ARTHROPODA", correct: false },
                { text: "ANNELIDA", correct: true }
            ],
            explanation: "Annelids are triploblastic, bilaterally symmetrical, and elongated."
        },
        {
            question: " Coelenterates do not possess a true organ except",
            answers: [
                { text: "Gonads only", correct: false },
                { text: "Gonads and sensory structure", correct: true },
                { text: "None", correct: false },
                { text: "Sensory structure only", correct: false }
            ],
            explanation: "Coelenterates lack true organs except for gonads and sensory structures."
        },
        {
            question: " The useful of flagella for locomotion in the member of sarcodina is restricted to",
            answers: [
                { text: "All the time", correct: false },
                { text: "Adult stage", correct: false },
                { text: "Developing stage", correct: true },
                { text: "All of the above", correct: false }
            ],
            explanation: "Flagella are primarily used for locomotion in the developing stage of Sarcodina."
        },
        {
            question: " The body of primitive bryophytes are _____",
            answers: [
                { text: "Thalloid", correct: true },
                { text: "Oogamus", correct: false },
                { text: "Liverwort", correct: false },
                { text: "Rhizoids", correct: false }
            ],
            explanation: "Primitive bryophytes have a thalloid body structure."
        },
        {
            question: " Autogamy is similar to conjugation except that ___________",
            answers: [
                { text: "One cell is involved", correct: true },
                { text: "Two cells are involved", correct: false },
                { text: "Three cells are involved", correct: false },
                { text: "Four cells are involved", correct: false }
            ],
            explanation: "Autogamy involves a single cell, unlike conjugation which involves two cells."
        },
        {
            question: " Digestion of food in fungi by extracellular enzymes absorbed into hyphae is called",
            answers: [
                { text: "Absorption heterotrophy", correct: true },
                { text: "Conjugation", correct: false },
                { text: "Digestion", correct: false },
                { text: "Budding", correct: false }
            ],
            explanation: "Digestion of food in fungi through extracellular enzymes is known as absorption heterotrophy."
        },
        {
            question: "Which of these is useful for fermentation?",
            answers: [
              { text: "Vibrio", correct: false },
              { text: "Lactobacillus", correct: true },
              { text: "Escherichia", correct: false },
              { text: "Mycobacterium", correct: false }
            ],
            explanation: "Lactobacillus is widely used in fermentation processes, such as in the production of yogurt, sauerkraut, and pickles."
          },
          {
            question: "The form of bacteria responsible for sore throat is?",
            answers: [
              { text: "Bacillus", correct: false },
              { text: "Escherichia", correct: false },
              { text: "Spirochaeta", correct: false },
              { text: "Coccus", correct: true }
            ],
            explanation: "Coccus-shaped bacteria, specifically Streptococcus, are known to cause sore throat."
          },
          {
            question: "Bacterial spores are all of the following except _______ as compared to vegetable cells.",
            answers: [
              { text: "More resistant to staining", correct: false },
              { text: "More likely to die in nutritionally poor conditions", correct: true },
              { text: "More resistant to temperature changes", correct: false },
              { text: "More likely to survive treatment with disinfection", correct: false }
            ],
            explanation: "Bacterial spores are actually more resistant to nutritionally poor conditions compared to vegetable cells."
          },
          {
            question: "Major components of virus include?",
            answers: [
              { text: "Nedocaprid and DNA", correct: false },
              { text: "Capsid & Protein coat", correct: false },
              { text: "Protein coat & RNA", correct: false },
              { text: "Protein coat & Nucleic acid", correct: true }
            ],
            explanation: "Viruses are primarily composed of a protein coat (capsid) and nucleic acid (either DNA or RNA)."
          },
          {
            question: "Prokaryotic Halophytes are ______ except?",
            answers: [
              { text: "Virus", correct: true },
              { text: "Fungi", correct: false },
              { text: "Bacteria", correct: false },
              { text: "Blue-green algae", correct: false }
            ],
            explanation: "Viruses are not considered prokaryotic halophytes; they are acellular."
          },
          {
            question: "Hemichordates are known as?",
            answers: [
              { text: "True chordate", correct: false },
              { text: "False chordate", correct: true },
              { text: "Non-Chordate", correct: false },
              { text: "All of the above", correct: false }
            ],
            explanation: "Hemichordates are considered 'false chordates' because they share some characteristics with chordates but lack a true notochord."
          },
          {
            question: "The classification is of a good availability because its?",
            answers: [
              { text: "Classic", correct: false },
              { text: "Complex", correct: false },
              { text: "Arbitrary", correct: false },
              { text: "Systematic", correct: true }
            ],
            explanation: "Systematic classification provides a structured and consistent approach to categorizing organisms."
          },
          {
            question: "Different types of Pseudopodia are these except?",
            answers: [
              { text: "Dilopodia", correct: true },
              { text: "Axialpodia", correct: false },
              { text: "Reticulopodia", correct: false },
              { text: "Lopododia", correct: false }
            ],
            explanation: "Dilopodia is not a recognized type of pseudopodia."
          },
          {
            question: "Which of these does not belong to the group?",
            answers: [
              { text: "Treponema pallidum", correct: false },
              { text: "Tobacco mosaic virus", correct: true },
              { text: "Bacillus subtilis", correct: false },
              { text: "Escherichia coli", correct: false }
            ],
            explanation: "Tobacco mosaic virus is a virus, whereas the others are bacteria."
          },
          {
            question: "Which of the following is the only prokaryotic group in algae?",
            answers: [
              { text: "Cyanophyta", correct: true },
              { text: "Pyrrophyta", correct: false },
              { text: "Chrysophyta", correct: false },
              { text: "Rhodophyta", correct: false }
            ],
            explanation: "Cyanophyta, also known as blue-green algae, are prokaryotic."
          },
          {
            question: "Which of the following fungi is imperfect?",
            answers: [
              { text: "Basidiomycetes", correct: false },
              { text: "Deuteromycetes", correct: true },
              { text: "Phycomycetes", correct: false },
              { text: "Ascomycetes", correct: false }
            ],
            explanation: "Deuteromycetes, also known as fungi imperfecti, do not have a known sexual reproductive stage."
          },
          {  question: "Liverworts are examples of what division?",
            answers: [
              { text: "Pteridophyta", correct: false },
              { text: "Spermatophyta", correct: false },
              { text: "Bryophyta", correct: true },
              { text: "Thallophyta", correct: false }
            ],
            explanation: "Liverworts belong to the division Bryophyta."
          },
          {
            question: "Virus ranges from?",
            answers: [
              { text: "10 to 500 micrometer", correct: false },
              { text: "10 to 500 nanometer", correct: false },
              { text: "2 to 500 micrometer", correct: false },
              { text: "2 to 500 nanometer", correct: true }
            ],
            explanation: "Viruses typically range from 2 to 500 nanometers in size."
          },
          {
            question: "The following are virus-caused infections except?",
            answers: [
              { text: "Influenza", correct: false },
              { text: "AIDS", correct: false },
              { text: "Syphilis", correct: true },
              { text: "Smallpox", correct: false }
            ],
            explanation: "Syphilis is caused by the bacterium Treponema pallidum, not a virus."
          },
          {
            question: "The division postila of whatever encompassed?",
            answers: [
              { text: "autotroph", correct: false },
              { text: "Virus", correct: true },
              { text: "None", correct: false },
              { text: "All", correct: false }
            ],
            explanation: "This question seems ambiguous and the provided answers do not fit the typical biological classification. Therefore, it's unclear what 'postila' refers to."
          },
          {
            question: "Under the microscope the morphology of Vibrio cholerae is?",
            answers: [
              { text: "Common shaped", correct: false },
              { text: "Spherical", correct: false },
              { text: "Rod-like shape", correct: false },
              { text: "Spiral Shaped", correct: false },
              { text: "Comma-shaped", correct: true }
            ],
            explanation: "Vibrio cholerae has a distinctive comma shape."
          },
          {
            question: "The Phylum Mollusca can be segregated into _______ number?",
            answers: [
              { text: "6", correct: false },
              { text: "7", correct: true },
              { text: "3", correct: false },
              { text: "2", correct: false }
            ],
            explanation: "The phylum Mollusca is traditionally divided into 7 classes."
          },
          {
            question: "_______ is the phylum that is parasitic?",
            answers: [
              { text: "Platyhelminthes", correct: true },
              { text: "Sarcomastigophora", correct: false },
              { text: "Cycliophora", correct: false },
              { text: "None of the above", correct: false }
            ],
            explanation: "Platyhelminthes, or flatworms, include many parasitic species."
          },
          {
            question: "_______ make up the megasporangium?",
            answers: [
              { text: "Male reproductive part of plant", correct: false },
              { text: "Female reproductive part of plant", correct: true },
              { text: "Both Female and Male reproductive part", correct: false },
              { text: "No reproductive part", correct: false }
            ],
            explanation: "The megasporangium is a structure in plants that develops into the female reproductive organ, containing megaspores."
          },
          {
            question: "Tetrad bacteria cells are formed as a result of division in?",
            answers: [
              { text: "Three planes", correct: false },
              { text: "Two planes", correct: true },
              { text: "One plane", correct: false },
              { text: "Four planes", correct: false }
            ],
            explanation: "Tetrad bacteria cells are formed when bacterial cells divide in two perpendicular planes, resulting in groups of four."
          },
          {
            question: "Simple acellular organisms occur in?",
            answers: [
              { text: "Virus", correct: true },
              { text: "Fungi", correct: false },
              { text: "Bacteria", correct: false },
              { text: "Protozoa", correct: false }
            ],
            explanation: "Viruses are simple acellular organisms that consist of genetic material enclosed in a protein coat."
          },
          {
            question: "Bacteria live mostly under which temperature-related condition?",
            answers: [
              { text: "Cold", correct: false },
              { text: "Hot", correct: false },
              { text: "Warm", correct: true },
              { text: "Sub-zero", correct: false }
            ],
            explanation: "Most bacteria thrive in warm conditions, although some can live in extreme environments."
          },
          {
            question: "Absorptive heterotrophy are collectively known as?",
            answers: [
              { text: "Bacteria", correct: false },
              { text: "Virus", correct: false },
              { text: "Fungi", correct: true },
              { text: "Green plant", correct: false }
            ],
            explanation: "Fungi are absorptive heterotrophs, meaning they absorb nutrients from their surroundings."
          },
          {
            question: "The bacterial form known as the spirillum form is _________ in structure?",
            answers: [
              { text: "Spiral", correct: true },
              { text: "Bent", correct: false },
              { text: "Oval", correct: false },
              { text: "Cylindrical", correct: false }
            ],
            explanation: "Spirillum bacteria are characterized by their spiral shape."
          },
          {
            question: "The division Protista of Whittaker?",
            answers: [
              { text: "Absorptive heterotrophs encompasses", correct: false },
              { text: "Eukaryotes", correct: true },
              { text: "Autotrophs", correct: false },
              { text: "Autotrophes", correct: false }
            ],
            explanation: "The kingdom Protista in Whittaker's classification includes eukaryotic organisms that are not plants, animals, or fungi."
          },
          {
            question: "After staining, Gram-positive and Gram-negative cells have ________ and ______ coloration respectively when viewed under the microscope?",
            answers: [
              { text: "Reddish and bluish", correct: false },
              { text: "Bluish and reddish", correct: true },
              { text: "Pinkish and blue-black", correct: false },
              { text: "Blue-black and pinkish", correct: false }
            ],
            explanation: "Gram-positive bacteria stain bluish (or purple) and Gram-negative bacteria stain reddish (or pink) after Gram staining."
          },
          {
            question: "Division of bacterial cells in plant results in formation of ________ cells?",
            answers: [
              { text: "Diplococci and clusters of cells", correct: false },
              { text: "Tetrads and chains of cells", correct: false },
              { text: "Diplococci and tetrads", correct: true },
              { text: "Chains and diplococci", correct: false }
            ],
            explanation: "Bacterial cell division can result in various arrangements, including diplococci (pairs) and tetrads (groups of four)."
          },
          {
            question: "Phycology is the study of?",
            answers: [
              { text: "Algae", correct: true },
              { text: "Fungi", correct: false },
              { text: "Virus", correct: false }
            ],
            explanation: "Phycology, or algology, is the study of algae."
          },
          {
            question: "Bacteria are referred to as prokaryotic because?",
            answers: [
              { text: "They lack a membrane-bound nucleus and other organelles.", correct: true }
            ],
            explanation: "Prokaryotes, such as bacteria, lack a membrane-bound nucleus and organelles, distinguishing them from eukaryotes."
          },
          {
            question: "The final stage in the life cycle of a virus is?",
            answers: [
              { text: "Lysis or release of new virions from the host cell.", correct: true }
            ],
            explanation: "The final stage in the viral life cycle is the release of new virions from the host cell, often causing cell lysis."
          },
          {
            question: "Virus has ________ cycle?",
            answers: [
              { text: "5", correct: true },
              { text: "4", correct: false },
              { text: "7", correct: false },
              { text: "2", correct: false }
            ],
            explanation: "Viruses typically go through a five-step cycle: attachment, penetration, biosynthesis, maturation, and release."
          },
          {
            question: "The DNA of bacteria is located in a place called?",
            answers: [
              { text: "Nucleoid", correct: true },
              { text: "Nucleus", correct: false },
              { text: "Central", correct: false }
            ],
            explanation: "The bacterial DNA is located in the nucleoid, which is not membrane-bound like a eukaryotic nucleus."
          },
          {
            question: "An example of a thermophilic bacterium is _________ and it has found application in?",
            answers: [
              { text: "Thermus aquaticus, molecular biology", correct: true },
              { text: "Escherichia coli, evolutionary biology", correct: false }
            ],
            explanation: "Thermus aquaticus is a thermophilic bacterium whose enzyme Taq polymerase is widely used in PCR in molecular biology."
          },
          {
            question: "Sore throat is caused by?",
            answers: [
              { text: "Coccus bacteria", correct: true }
            ],
            explanation: "Streptococcus bacteria, which are coccus-shaped, are a common cause of sore throat."
          },
          {
            question: "The two major components of a virus are?",
            answers: [
              { text: "Protein coat and nucleic acid strand", correct: true }
            ],
            explanation: "Viruses are composed of a protein coat (capsid) and a nucleic acid (DNA or RNA)."
          },
          {
            question: "Which of the following constituents is common to most of the classes of algae?",
            answers: [
              { text: "Cellulose", correct: true }
            ],
            explanation: "Cellulose is a common structural component of the cell walls in many classes of algae."
          },
          {
            question: "Bacteria are causative agents of?",
            answers: [
              { text: "Tetanus", correct: true },
              { text: "Smallpox", correct: false },
              { text: "Mumps", correct: false },
              { text: "Flu", correct: false }
            ],
            explanation: "Tetanus is caused by the bacterium Clostridium tetani, whereas smallpox and mumps are viral diseases, and flu is caused by the influenza virus."
          },
          {
            question: "All of the following about virus are true except:",
            answers: [
              { text: "They cannot do without a host", correct: false },
              { text: "They are facultative parasites", correct: true },
              { text: "They are stored as chemicals outside living cell", correct: false },
              { text: "They use the host mechanism for reproduction", correct: false }
            ],
            explanation: "Viruses are obligate parasites, not facultative parasites. They require a host to reproduce."
          },
          {
            question: "Counter stain used in Gram’s stain is?",
            answers: [
              { text: "Safranin", correct: true },
              { text: "Gram’s iodine", correct: false },
              { text: "Acetone", correct: false },
              { text: "Crystal violet", correct: false }
            ],
            explanation: "Safranin is used as a counterstain in Gram staining, making Gram-negative bacteria visible under the microscope."
          },
          {
            question: "Halophiles are?",
            answers: [
              { text: "Salt tolerant", correct: true },
              { text: "Salt lovers", correct: false },
              { text: "pH stable", correct: false },
              { text: "pH unstable", correct: false }
            ],
            explanation: "Halophiles are microorganisms that thrive in high-salt environments, making them salt tolerant."
          },
          {
            question: "Tooth decay is caused by?",
            answers: [
              { text: "Streptococcus mutans", correct: true },
              { text: "Bacillus thuringiensis", correct: false },
              { text: "Lactococcus mutans", correct: false },
              { text: "Streptococcus decae", correct: false }
            ],
            explanation: "Streptococcus mutans is a bacterium that plays a significant role in the development of tooth decay."
          },
          {
            question: "The most favorable condition where bacteria live is?",
            answers: [
              { text: "Warm", correct: true },
              { text: "Cold", correct: false },
              { text: "Sub-zero", correct: false },
              { text: "High", correct: false }
            ],
            explanation: "Most bacteria thrive in warm conditions, which provide an optimal environment for their growth and reproduction."
          },
          {
            question: "A function of the capsular layer in bacterial cells is?",
            answers: [
              { text: "Prevent plasmolysis", correct: false },
              { text: "Prevent phagocytosis", correct: true },
              { text: "Aids in nutrition", correct: false }
            ],
            explanation: "The bacterial capsule helps prevent phagocytosis by the host's immune cells, enhancing bacterial survival."
          },
          {
            question: "Aerated bacteria are found in the following?",
            answers: [
              { text: "Top surface of organisms", correct: false },
              { text: "Soak away", correct: false },
              { text: "Aerated soil", correct: true }
            ],
            explanation: "Aerated soil provides the necessary oxygen for aerobic bacteria to thrive."
          },
          {
            question: "Which of the following is a traditional classification of Echinodermata?",
            answers: [
              { text: "Pelmatozoa and Eleutherozoa", correct: true },
              { text: "Asteroidea and Ophiuroidea", correct: false },
              { text: "Asteroidea and Holothuroidea", correct: false }
            ],
            explanation: "Echinoderms are traditionally classified into two subgroups: Pelmatozoa and Eleutherozoa."
          },
          {
            question: "Viruses' mode of nutrition is mainly?",
            answers: [
              { text: "Symbiotic", correct: false },
              { text: "Parasitic", correct: true },
              { text: "Mutualism", correct: false },
              { text: "None of the above", correct: false }
            ],
            explanation: "Viruses are parasitic, relying on a host organism for replication and survival."
          },
          {
            question: "Division ________ is found in moist and shady places?",
            answers: [
              { text: "Thallophyta", correct: false },
              { text: "Bryophyta", correct: true },
              { text: "Pteridophyta", correct: false },
              { text: "Spermatophyta", correct: false }
            ],
            explanation: "Bryophytes, such as mosses, thrive in moist and shady environments."
          },
          {
            question: "Which of the following cell wall constituents is common to most of the classes of algae?",
            answers: [
              { text: "Pectin", correct: false },
              { text: "Lignin", correct: false },
              { text: "Lipid", correct: false },
              { text: "Cellulose", correct: true }
            ],
            explanation: "Cellulose is a common component of the cell walls of many algae."
          },
          {
            question: "In mammals, the copulatory organ is called?",
            answers: [
              { text: "Vagina", correct: false },
              { text: "Cervix", correct: false },
              { text: "None of the above", correct: false },
              { text: "Penis", correct: true }
            ],
            explanation: "The copulatory organ in male mammals is the penis."
          },
          {
            question: "All cephalocordates are generally known as?",
            answers: [
              { text: "Real chordates", correct: false },
              { text: "Vertebrates", correct: false },
              { text: "Lancelets", correct: true },
              { text: "None of the above", correct: false }
            ],
            explanation: "Cephalochordates are also known as lancelets, small, fish-like marine animals."
          },
          {
            question: "Urochordates are?",
            answers: [
              { text: "Segmented chordates", correct: false },
              { text: "Unsegmented chordates", correct: true },
              { text: "Semi chordates", correct: false },
              { text: "False chordates", correct: false }
            ],
            explanation: "Urochordates, or tunicates, are marine animals with a notochord only in the larval stage, and they are unsegmented."
          },
          {
            question: "Eggs are laid in cocoons produced by the _______ in class Oligochaeta of phylum Annelida?",
            answers: [
              { text: "Cuttle", correct: false },
              { text: "Clitellum", correct: true },
              { text: "Coelom", correct: false },
              { text: "Chaeta", correct: false }
            ],
            explanation: "The clitellum is a glandular section of the body that produces a cocoon for the eggs in earthworms and other oligochaetes."
          },
          {
            question: "________ is useful in agriculture for fixing nitrogen?",
            answers: [
              { text: "Streptococcus mutans", correct: false },
              { text: "Bacillus", correct: false },
              { text: "Lactobacillus bulgaricus", correct: false },
              { text: "Rhizobium spp.", correct: true }
            ],
            explanation: "Rhizobium spp. are nitrogen-fixing bacteria that form symbiotic relationships with legumes, aiding in agriculture."
          },
          {
            question: "Complete multicellular algae include the following except?",
            answers: [
              { text: "Oscillatoria", correct: true },
              { text: "Fucus", correct: false },
              { text: "Laminaria", correct: false }
            ],
            explanation: "Oscillatoria is a filamentous cyanobacterium, not a complete multicellular alga like Fucus or Laminaria."
          },
          {
            question: "Transformation that ranges from simple multicellular to complete multicellular is?",
            answers: [
              { text: "Complex multicellularity", correct: true }
            ],
            explanation: "The transformation from simple to complex multicellularity involves significant changes in cell differentiation and organization."
          },
          {
            question: "An example of cocci seen in a chain-like manner is?",
            answers: [
              { text: "Neisseria", correct: false },
              { text: "Micrococcus", correct: false },
              { text: "Streptococcus", correct: true },
              { text: "Staphylococcus", correct: false }
            ],
            explanation: "Streptococcus bacteria form chains, whereas Staphylococcus forms clusters."
          },
          {
            question: "The spread of division ________ is limited to moist and shady places?",
            answers: [
              { text: "Pteridophyta", correct: false },
              { text: "Thallophyta", correct: false },
              { text: "Bryophyta", correct: true },
              { text: "Spermatophyta", correct: false }
            ],
            explanation: "Bryophytes, such as mosses and liverworts, are commonly found in moist and shady environments."
          },
          {
            question: "_______ is useful in agriculture for fixing nitrogen?",
            answers: [
              { text: "Bacillus thuringiensis", correct: false },
              { text: "Lactobacillus", correct: false },
              { text: "Lactococcus", correct: false },
              { text: "Rhizobium spp.", correct: true }
            ],
            explanation: "Rhizobium spp. are nitrogen-fixing bacteria that form symbiotic relationships with legumes, aiding in agriculture."
          },
          {
            question: "Sore throat is caused by?",
            answers: [
              { text: "Spiral", correct: false },
              { text: "Coccus", correct: true },
              { text: "Vibrio", correct: false },
              { text: "Bacillus", correct: false }
            ],
            explanation: "Streptococcus bacteria, which are cocci (spherical), are common causes of sore throat."
          },
          {
            question: "Example of cocci arranged in clusters is?",
            answers: [
              { text: "Staphylococcus", correct: true },
              { text: "Sarcina", correct: false },
              { text: "Tetrad", correct: false },
              { text: "Neisseria", correct: false }
            ],
            explanation: "Staphylococcus bacteria are arranged in clusters, resembling grape-like structures."
          },
          {
            question: "Which of the following is a prokaryote group among the classes of algae?",
            answers: [
              { text: "Chrysophyta", correct: false },
              { text: "Pyrrophyta", correct: false },
              { text: "Cyanophyta", correct: true },
              { text: "Rhodophyta", correct: false }
            ],
            explanation: "Cyanophyta, or cyanobacteria, are prokaryotic algae."
          },
          {
            question: "Under the microscope, the morphology of Vibrio cholerae is?",
            answers: [
              { text: "Spherical", correct: false },
              { text: "Rod-like", correct: false },
              { text: "Spiral", correct: false },
              { text: "Comma", correct: true }
            ],
            explanation: "Vibrio cholerae has a comma-shaped morphology."
          },
          {
            question: "Organisms that belong to the class Chilopoda are fast-moving carnivores with a pair of poison?",
            answers: [
              { text: "Eyes", correct: false },
              { text: "Claws", correct: true },
              { text: "Legs", correct: false },
              { text: "Head", correct: false }
            ],
            explanation: "Chilopoda, or centipedes, have a pair of poison claws (forcipules) for capturing prey."
          },
          {
            question: "An example of a tadpole-shaped virus is?",
            answers: [
              { text: "Tadpole virus", correct: false },
              { text: "Tobacco mosaic virus", correct: false },
              { text: "Myxovirus", correct: false },
              { text: "T2 bacteriophage", correct: true }
            ],
            explanation: "The T2 bacteriophage has a tadpole-like structure, with a head and a tail."
          },
          {
            question: "Viruses undergo ________ feeding types?",
            answers: [
              { text: "Parasitic", correct: true },
              { text: "Commensalism", correct: false },
              { text: "Autotrophic", correct: false },
              { text: "Heterotrophic", correct: false }
            ],
            explanation: "Viruses are parasitic, relying on a host organism for replication and nutrition."
          },
          {
            question: "Eggs are laid in cocoons produced by the _______ in the class Oligochaeta of phylum Annelida?",
            answers: [
              { text: "Clitellum", correct: true },
              { text: "Chaeta", correct: false },
              { text: "Coelom", correct: false },
              { text: "Cuticle", correct: false }
            ],
            explanation: "The clitellum is a glandular section of the body that produces a cocoon for the eggs in earthworms and other oligochaetes."
          },
          {
            question: "Viruses cause all the following except?",
            answers: [
              { text: "Mumps", correct: false },
              { text: "Flu", correct: false },
              { text: "Tetanus", correct: true },
              { text: "Smallpox", correct: false }
            ],
            explanation: "Tetanus is caused by the bacterium Clostridium tetani, not by a virus."
          },
          {
            question: "One is not a division of vertebrata?",
            answers: [
              { text: "Head", correct: false },
              { text: "Tail", correct: false },
              { text: "Thorax", correct: true }
            ],
            explanation: "The thorax is not a division of vertebrata; vertebrates are typically divided into head, trunk (which includes the thorax), and tail regions."
          },
          {
            question: "Places where aerobic bacteria live include all the following except?",
            answers: [
              { text: "Aerated water", correct: false },
              { text: "Low-oxygen soil", correct: true },
              { text: "Soak away", correct: false },
              { text: "Body", correct: false }
            ],
            explanation: "Aerobic bacteria require oxygen and would not thrive in low-oxygen soil environments."
          },
          {
            question: "Brings uniformity in binomial nomenclature is?",
            answers: [
              { text: "Latin", correct: true },
              { text: "German", correct: false },
              { text: "Swedish", correct: false },
              { text: "Italian", correct: false }
            ],
            explanation: "Latin is used for binomial nomenclature to bring uniformity and avoid language barriers."
          },
          {
            question: "Which of these is incorrect?",
            answers: [
              { text: "Roundworm is unsegmented", correct: false },
              { text: "Earthworm is coelomate", correct: false },
              { text: "Earthworm and roundworm are metamerically segmented", correct: true },
              { text: "None", correct: false }
            ],
            explanation: "Roundworms (nematodes) are not metamerically segmented, unlike earthworms (annelids)."
          },
          {
            question: "Pathogenic bacteria can cause all the following except?",
            answers: [
              { text: "Gonorrhea", correct: false },
              { text: "Tooth decay", correct: false },
              { text: "Fermentation", correct: true },
              { text: "Syphilis", correct: false }
            ],
            explanation: "Fermentation is a process carried out by some bacteria and fungi for metabolic purposes, not a pathogenic condition."
          },
          {
            question: "Fungi are categorized into different classes on the basis of the following except?",
            answers: [
              { text: "Nature of sexual spores", correct: false },
              { text: "Nature of hyphae", correct: false },
              { text: "Nature of asexual spores", correct: false },
              { text: "Mode of reproduction", correct: true }
            ],
            explanation: "Fungi are classified based on the nature of their spores and hyphae, not directly by their mode of reproduction."
          },
          {
            question: "In hemichordates, the stomochord represents the notochord which is restricted to the region?",
            answers: [
              { text: "Proboscis", correct: true },
              { text: "Prostomium", correct: false },
              { text: "Proma", correct: false },
              { text: "Prostomat", correct: false }
            ],
            explanation: "In hemichordates, the stomochord is located in the proboscis region."
          },
          {
            question: "The following are true about viruses except?",
            answers: [
              { text: "They are stored as chemicals outside living cells", correct: false },
              { text: "They cannot do without a host", correct: false },
              { text: "They are facultative parasites", correct: true },
              { text: "They use the host mechanism for reproduction", correct: false }
            ],
            explanation: "Viruses are obligate parasites, not facultative parasites; they require a host to replicate."
          },
          {
            question: "The cell wall of bacteria consists of _______ and ________?",
            answers: [
              { text: "Sugars and peptides", correct: true },
              { text: "Water and sugar", correct: false },
              { text: "Peptides and moist substance", correct: false },
              { text: "None of the above", correct: false }
            ],
            explanation: "The bacterial cell wall is primarily composed of peptidoglycan, which consists of sugars and peptides."
          },
          {
            question: "In true fungi, the mycelium is made up of thread-like structures called?",
            answers: [
              { text: "Chitin", correct: false },
              { text: "Filament", correct: false },
              { text: "Rhizoid", correct: false },
              { text: "Hyphae", correct: true }
            ],
            explanation: "The mycelium of true fungi is composed of hyphae, which are thread-like structures."
          },
          {
            question: "The seven classes of molluscs are derived from ancestral molluscs as a result of all but one of their _________?",
            answers: [
              { text: "Head", correct: false },
              { text: "Shell", correct: true },
              { text: "Foot", correct: false },
              { text: "Symmetry", correct: false }
            ],
            explanation: "The shell is a key feature that varies significantly among mollusc classes, while head, foot, and symmetry are more consistent traits across classes."
          },
          {
            question: "The binomial system of nomenclature was designed by _________ in the year ________?",
            answers: [
              { text: "1707 – 1178", correct: false },
              { text: "1707 – 1778", correct: true },
              { text: "1707 – 1878", correct: false },
              { text: "1707 – 1788", correct: false }
            ],
            explanation: "The binomial nomenclature system was designed by Carl Linnaeus, who lived from 1707 to 1778."
          },
          {
            question: "Cluster from spore that occurs when fertilization results in formation of zygote is called?",
            answers: [
              { text: "Conjugation", correct: false },
              { text: "Embryo", correct: false },
              { text: "Spore formation", correct: false },
              { text: "Zygospore", correct: true }
            ],
            explanation: "A zygospore is a type of spore formed by the fusion of two similar gametes, resulting in a zygote."
          },
          {
            question: "Another name for brown algae is",
            answers: [
              { text: "Rhodophyta", correct: false },
              { text: "Pteritophyta", correct: false },
              { text: "Tracheophyta", correct: false }
            ],
            explanation: "The correct name for brown algae is Phaeophyta, which is not listed as an option."
          },
          {
            question: "Rod-like cells are referred to as",
            answers: [
              { text: "Spinlum", correct: false },
              { text: "Nibrio", correct: false },
              { text: "Basidiomycetes", correct: false },
              { text: "Bacillus", correct: true }
            ],
            explanation: "Rod-like bacterial cells are referred to as Bacillus."
          },
          {
            question: "The most primitive among the following is",
            answers: [
              { text: "Hydra", correct: false },
              { text: "Plasmodium", correct: false },
              { text: "Amoeba", correct: true },
              { text: "Paramecium", correct: false }
            ],
            explanation: "Amoeba is considered more primitive due to its simple, unicellular structure."
          },
          {
            question: "There are ___________ major shapes of bacteria",
            answers: [
              { text: "2", correct: false },
              { text: "3", correct: true },
              { text: "4", correct: false },
              { text: "5", correct: false }
            ],
            explanation: "The three major shapes of bacteria are cocci (spherical), bacilli (rod-shaped), and spirilla (spiral)."
          },
          {
            question: "Gastrulation in Echinoderms is by",
            answers: [
              { text: "invagination", correct: true },
              { text: "cephalization", correct: false },
              { text: "mentation", correct: false },
              { text: "insemination", correct: false }
            ],
            explanation: "Gastrulation in Echinoderms occurs by invagination, where the blastula folds inward to form the gastrula."
          },
          {
            question: "Fertilization in organisms of division Pteridophyta takes place in",
            answers: [
              { text: "Archegonium", correct: true },
              { text: "Lycopedium", correct: false },
              { text: "Aritheridium", correct: false },
              { text: "Oogonium", correct: false }
            ],
            explanation: "Fertilization in Pteridophytes occurs in the archegonium, which is the female reproductive structure."
          },
          {
            question: "Under the microscope the morphology of Vibrio cholera is",
            answers: [
              { text: "spherical", correct: false },
              { text: "rod-like", correct: false },
              { text: "spiral", correct: false },
              { text: "comma", correct: true }
            ],
            explanation: "Vibrio cholerae bacteria have a characteristic comma-shaped morphology."
          },
          {
            question: "Halophiles are",
            answers: [
              { text: "Salt tolerating", correct: true },
              { text: "pH stable", correct: false },
              { text: "pH unstable", correct: false },
              { text: "Salt lovers", correct: true }
            ],
            explanation: "Halophiles are microorganisms that thrive in high-salt environments. They are also referred to as salt lovers."
          },
          {
            question: "The classification of organisms that involves very few characters arbitrarily selected is",
            answers: [
              { text: "Natural", correct: false },
              { text: "Mechanical", correct: false },
              { text: "Phenetical", correct: false },
              { text: "Artificial", correct: true }
            ],
            explanation: "Artificial classification involves grouping organisms based on a few arbitrarily selected characters."
          },
          {
            question: "The oval bacteria formed are regarded as",
            answers: [
              { text: "Spirillum", correct: false },
              { text: "Vibrio", correct: false },
              { text: "Bacillus", correct: false },
              { text: "Coccus", correct: true }
            ],
            explanation: "Oval-shaped bacteria are classified as coccus."
          },
          {
            question: "Crustacea or aquatic arthropods respire by which means",
            answers: [
              { text: "gills", correct: true },
              { text: "lungs", correct: false },
              { text: "skin", correct: false },
              { text: "trachea", correct: false }
            ],
            explanation: "Aquatic arthropods such as crustaceans typically respire using gills."
          },
          {
            question: "Which of the following is the least step in the life cycle of a virus?",
            answers: [
              { text: "attachment to a living cell", correct: false },
              { text: "formation of nucleotide", correct: true },
              { text: "formation of flagella", correct: true },
              { text: "formation of Carbs base", correct: true },
            ],
            explanation: "The formation of nucleotides is not a direct step in the viral life cycle; it involves steps such as attachment, entry, replication, assembly, and release."
          },
          {
            question: "Virus range from what to what?",
            answers: [
              { text: "5 to 200 nanometer", correct: true },
              { text: "5 to 200 micrometer", correct: false },
              { text: "5 to 200 millimeter", correct: false },
              { text: "10 to 200 meter", correct: false },
            ],
            explanation: "Viruses range in size from approximately 5 to 200 nanometers."
          },
          {
            question: "An example of simple unicellular algae is",
            answers: [
              { text: "fucus", correct: false },
              { text: "chlamydomonas", correct: true },
              { text: "pandorina", correct: false },
              { text: "spirogyra", correct: false }
            ],
            explanation: "Chlamydomonas is an example of simple unicellular algae."
          },
          {
            question: "Bacterial spores are all of the following except _______ as compared with vegetative cells",
            answers: [
              { text: "more likely to die in nutritionally poor conditions", correct: true },
              { text: "more resistant to temperature changes", correct: false },
              { text: "more likely to survive treatment with disinfectant", correct: false },
              { text: "more resistant to staining", correct: false }
            ],
            explanation: "Bacterial spores are generally more resistant to harsh conditions, including nutritionally poor environments, temperature changes, disinfectants, and staining."
          },
          {
            question: "Which of these belong only to the prokaryotic group?",
            answers: [
              { text: "Rhodophyta", correct: false },
              { text: "chrysophyta", correct: false },
              { text: "cyanophyta", correct: true },
              { text: "pyrrophyta", correct: false }
            ],
            explanation: "Cyanophyta, also known as cyanobacteria, are the only prokaryotic group among the options listed."
          },
          {
            question: "All are true of algae except",
            answers: [
              { text: "they lack roots", correct: false },
              { text: "they have chloroplast", correct: false },
              { text: "they are aquatic", correct: false },
              { text: "all are eukaryotes", correct: true }
            ],
            explanation: "Not all algae are eukaryotes. Cyanobacteria, also known as blue-green algae, are prokaryotic."
          },
          {
            question: "Carbohydrate food reserve in fungi is called",
            answers: [
              { text: "starch", correct: false },
              { text: "glycogen", correct: true },
              { text: "sucrose", correct: false },
              { text: "glucose", correct: false }
            ],
            explanation: "Fungi store their carbohydrate reserves in the form of glycogen."
          },
          {
            question: "The bacteria that can only survive in high temperatures is",
            answers: [
              { text: "Escherichia coli", correct: false },
              { text: "Thermus aquaticus", correct: true },
              { text: "Pseudomonas aeruginosa", correct: false }
            ],
            explanation: "Thermus aquaticus is a thermophilic bacterium that thrives in high temperatures."
          },
          {
            question: "__________ have a wider distribution than any other living organism",
            answers: [
              { text: "virus", correct: false },
              { text: "Spirogyra", correct: false },
              { text: "bacteria", correct: true }
            ],
            explanation: "Bacteria are found in almost every environment on Earth, making them the most widely distributed organisms."
          },
          {
            question: "Phycology is the study of",
            answers: [
              { text: "fungi", correct: false },
              { text: "virus", correct: false },
              { text: "algae", correct: true },
              { text: "lichen", correct: false }
            ],
            explanation: "Phycology is the scientific study of algae."
          },
          {
            question: "In the life cycle of a virus the final stage is",
            answers: [
              { text: "multiplication of the strands", correct: false },
              { text: "injection of its nucleic acids", correct: false },
              { text: "liberation of new viruses", correct: true }
            ],
            explanation: "The final stage in the life cycle of a virus is the release of new viral particles from the host cell."
          },
          {
            question: "Anthozoa has one of the following features",
            answers: [
              { text: "polyp form is dominant and medusa form is absent", correct: true }
            ],
            explanation: "In Anthozoa, the polyp form is dominant, and the medusa form is absent."
          },
          {
            question: "The only class of algae that is prokaryotic is",
            answers: [
              { text: "cyanophyta", correct: true },
              { text: "rhodophyta", correct: false },
              { text: "chlorophyta", correct: false }
            ],
            explanation: "Cyanophyta, also known as cyanobacteria or blue-green algae, are prokaryotic."
          },
          {
            question: "An example of coccus in cluster is",
            answers: [
              { text: "staphylococcus", correct: true }
            ],
            explanation: "Staphylococcus bacteria form clusters resembling a bunch of grapes."
          },
          {
            question: "Organism with wider distribution in the plant kingdom is",
            answers: [
              { text: "fungi", correct: false },
              { text: "virus", correct: false },
              { text: "bacteria", correct: true },
              { text: "algae", correct: false }
            ],
            explanation: "Bacteria have the widest distribution in the plant kingdom, found in various habitats."
          },
          {
            question: "Digestive cavity in coelenterates is",
            answers: [
              { text: "mesenteron", correct: false },
              { text: "mesoderm", correct: false },
              { text: "enteron", correct: true },
              { text: "epiderm", correct: false }
            ],
            explanation: "The enteron, also known as the gastrovascular cavity, is the digestive cavity in coelenterates."
          },
          {
            question: "Organism become familiar from",
            answers: [
              { text: "Kingdom – species", correct: true },
              { text: "Kindgom – kingdom", correct: false },
              { text: "Genius – kingdom", correct: false },
              { text: "kingdom – species", correct: false }
            ],
            explanation: "The hierarchical classification system goes from Kingdom to Species."
          },
          {
            question: "Aerobic bacteria are found where except",
            answers: [
              { text: "body of living organism", correct: false },
              { text: "soak away", correct: true },
              { text: "aerated soil", correct: false },
              { text: "aerated surfaces", correct: false }
            ],
            explanation: "Aerobic bacteria are not typically found in soak away pits, which are anaerobic environments."
          },
          {
            question: "The form of asexual reproduction in bacteria in bad condition is",
            answers: [
              { text: "binary fission", correct: false },
              { text: "spore formation", correct: true }
            ],
            explanation: "Under unfavorable conditions, bacteria can form spores to survive until conditions improve."
          },
          {
            question: "In the human body __________ and __________ must remain sterile",
            answers: [
              { text: "urine and cerebrospinal fluid", correct: false },
              { text: "brain and gastrointestinal tract", correct: false },
              { text: "urine and blood", correct: false },
              { text: "blood and cerebrospinal fluid", correct: true }
            ],
            explanation: "Blood and cerebrospinal fluid must remain sterile to prevent infections."
          },
          {
            question: "An example of coccus seen as three or more cocci arranged in a chain-like manner is",
            answers: [
              { text: "staphylococcus", correct: false },
              { text: "neisseria", correct: false },
              { text: "streptococcus", correct: true },
              { text: "polycoccus", correct: false }
            ],
            explanation: "Streptococcus bacteria form chains of three or more cocci."
          },
          {
            question: "All these are true of algae except",
            answers: [
              { text: "they have chloroplast", correct: false },
              { text: "they are all eukaryotes", correct: true },
              { text: "they are aquatic", correct: false },
              { text: "they lack roots", correct: false }
            ],
            explanation: "Not all algae are eukaryotes. Cyanobacteria, also known as blue-green algae, are prokaryotic."
          },
          {
            question: "The oval bacteria forms are regarded as",
            answers: [
              { text: "coccus", correct: false },
              { text: "bacillus", correct: true },
              { text: "vibrio", correct: false },
              { text: "spirillum", correct: false }
            ],
            explanation: "Bacillus refers to rod-shaped bacteria, while oval bacteria are also considered bacilli."
          },
          {
            question: "Subfamily names of viruses end in",
            answers: [
              { text: "virinae", correct: true }
            ],
            explanation: "Subfamily names of viruses end in 'virinae'."
          },
          {
            question: "The class Anthozoa in the phylum Cnidaria",
            answers: [
              { text: "The medusa is dominant, which poly is anidarie", correct: false },
              { text: "The polyp alternates with medusa", correct: false }
            ],
            explanation: "This question seems to be incomplete or incorrectly worded. Typically, in Anthozoa, the polyp form is dominant, and the medusa form is absent."
          },
          {
            question: "The tympanic or eardrum of a mammal is supported by",
            answers: [
              { text: "ossicular bone", correct: false },
              { text: "incus bone", correct: false },
              { text: "stapes bone", correct: true }
            ],
            explanation: "The stapes bone, along with the malleus and incus, supports the tympanic membrane in the middle ear."
          },
          {
            question: "Some bacteria use ________ for movement through _________",
            answers: [
              { text: "pili, adhesion", correct: false },
              { text: "cilia, liquid", correct: false },
              { text: "flagella, liquid", correct: true },
              { text: "pseudopods, soil", correct: false }
            ],
            explanation: "Some bacteria use flagella for movement through liquid environments."
          },
          {
            question: "Herspesviridae is the name of an",
            answers: [
              { text: "Genius", correct: false },
              { text: "Species", correct: false },
              { text: "Family", correct: true },
              { text: "Order", correct: false }
            ],
            explanation: "Herpesviridae is the family name for herpes viruses."
          },
          {
            question: "Carbohydrate food reservation in fungi is stored as",
            answers: [
              { text: "Glucose", correct: false },
              { text: "Sucrose", correct: false },
              { text: "Starch", correct: false },
              { text: "Glycogen", correct: true }
            ],
            explanation: "Fungi store carbohydrates as glycogen."
          },
          {
            question: "Complex multicellular algae include the following except",
            answers: [
              { text: "Laminaria", correct: false },
              { text: "Fucus", correct: false },
              { text: "Oscillatoria", correct: true }
            ],
            explanation: "Oscillatoria is a genus of cyanobacteria, which are simple, multicellular organisms, not complex multicellular algae."
          },
          {
            question: "Transformation that ranges from simple multicellular to complex multicellular",
            answers: [
              { text: "Embryonic development", correct: true }
            ],
            explanation: "This process describes the transformation from simple multicellular forms to complex multicellular forms during development."
          },
          {
            question: "An example of coccus seen as three or more cocci arranged in a chain-like manner is",
            answers: [
              { text: "Neisseria", correct: false },
              { text: "Staphylococcus", correct: false },
              { text: "Polycoccus", correct: false },
              { text: "Streptococcus", correct: true }
            ],
            explanation: "Streptococcus bacteria form chains of three or more cocci."
          },
          {
            question: "All but one of the following is not part of the ossicles composed of mammals",
            answers: [
              { text: "Malleus", correct: false },
              { text: "Stapes", correct: false },
              { text: "Stepis", correct: true },
              { text: "Incus", correct: false }
            ],
            explanation: "The correct term is 'stapes,' not 'stepis.'"
          },
          {
            question: "Simple unicellular is",
            answers: [
              { text: "Chlamydomonas", correct: true },
              { text: "Spirogyra", correct: false },
              { text: "Volvox", correct: false }
            ],
            explanation: "Chlamydomonas is a genus of simple unicellular green algae."
          },
          {
            question: "Pili is for",
            answers: [
              { text: "Movement", correct: false },
              { text: "Locomotion", correct: false },
              { text: "Reproduction", correct: true }
            ],
            explanation: "Pili are hair-like structures on the surface of bacteria that play a role in reproduction, particularly in the transfer of genetic material during conjugation."
          },
          {
            question: "Which of the following is used in classifying algae",
            answers: [
              { text: "Cellulose", correct: true },
              { text: "Glycogen", correct: false },
              { text: "Glucose", correct: false },
              { text: "Starch", correct: false },
            ],
            explanation: "Algae can be classified based on the constituents of their cell walls, among other criteria."
          },
          {
            question: "Long chains of cocci occur when",
            answers: [
              { text: "cocci divide and remain together to form pairs of cells", correct: false },
              { text: "cells adhere after repeated division in two planes", correct: false },
              { text: "cells adhere after repeated division in one plane", correct: true },
              { text: "cocci divide and remain together to form tetrads of cells", correct: false }
            ],
            explanation: "Long chains of cocci form when cells adhere after repeated division in one plane."
          },
          {
            question: "Which of these is useful for fermentation",
            answers: [
              { text: "Escherichia", correct: false },
              { text: "Lactobacillus", correct: true },
              { text: "Mycobacterium", correct: false },
              { text: "Vibrio", correct: false }
            ],
            explanation: "Lactobacillus is a genus of bacteria known for its role in fermentation."
          },
          {
            question: "The urochordates are",
            answers: [
              { text: "semi-chordates", correct: false },
              { text: "false chordates", correct: false },
              { text: "unsegmented chordates", correct: true },
              { text: "segmented chordates", correct: false }
            ],
            explanation: "Urochordates, also known as tunicates, are unsegmented chordates."
          },
          {
            question: "The diameter of the largest bacterial cell should be around _________ in size",
            answers: [
              { text: "0.005mm", correct: false },
              { text: "0.05cm", correct: false },
              { text: "0.05mm", correct: true },
              { text: "0.005cm", correct: false }
            ],
            explanation: "The largest bacterial cells can be around 0.05mm in diameter."
          },
          {
            question: "All cephalochordates are generally known as",
            answers: [
              { text: "vertebrates", correct: false },
              { text: "none of the above", correct: false },
              { text: "real chordates", correct: false },
              { text: "lancelets", correct: true }
            ],
            explanation: "Cephalochordates are commonly known as lancelets."
          },
          {
            question: "Bacteria can live mostly in what condition",
            answers: [
              { text: "hot", correct: false },
              { text: "cold", correct: false },
              { text: "warm", correct: true },
              { text: "sub-zero", correct: false }
            ],
            explanation: "Bacteria can live in various conditions, but many thrive in warm environments."
          },
          {
            question: "Which of the following is not a parasite",
            answers: [
              { text: "Treponema sp.", correct: true },
              { text: "Plasmodium", correct: false },
              { text: "Opalina", correct: false },
              { text: "Euglena sp.", correct: false }
            ],
            explanation: "Treponema is not typically considered a parasite, whereas Plasmodium and Opalina are parasitic."
          },
          {
            question: "What is the name given to a sub-zero temperature bacteria",
            answers: [
              { text: "mesophile", correct: false },
              { text: "nanophile", correct: false },
              { text: "psychrophile", correct: true }
            ],
            explanation: "Bacteria that thrive in sub-zero temperatures are called psychrophiles."
          },
          {
            question: "Aerated bacteria are found in the following except",
            answers: [
              { text: "aerated soil", correct: false },
              { text: "soak away", correct: true },
              { text: "surface of an organism", correct: false },
              { text: "loose soil", correct: false }
            ],
            explanation: "Aerated bacteria are not typically found in soak away pits, which are anaerobic environments."
          },
          {
            question: "Absorptive heterotrophs are generally referred to as",
            answers: [
              { text: "bacteria", correct: false },
              { text: "virus", correct: false },
              { text: "fungi", correct: true },
              { text: "algae", correct: false }
            ],
            explanation: "Fungi are absorptive heterotrophs, meaning they absorb nutrients from their environment."
          },
          {
            question: "Which of the following is the last step in the life cycle of a virus",
            answers: [
              { text: "Attachment to a living cell", correct: false },
              { text: "formation of nucleotide", correct: false },
              { text: "multiplication of strands", correct: false },
              { text: "liberation of new viruses", correct: true }
            ],
            explanation: "The final step in the life cycle of a virus is the release of new viral particles from the host cell."
          },
          {
            question: "Which of the following is the reproduction of bacteria in an unfavorable condition",
            answers: [
              { text: "binary fission", correct: false },
              { text: "spore formation", correct: true },
              { text: "conjugation", correct: true },
              { text: "Vegetative Reproduction", correct: true },
            ],
            explanation: "Under unfavorable conditions, bacteria can form spores to survive until conditions improve."
          },
          {
            question: "Viruses' mode of nutrition is mainly",
            answers: [
              { text: "symbiotic", correct: false },
              { text: "parasitic", correct: true },
              { text: "mutualism", correct: false },
              { text: "none of the above", correct: false }
            ],
            explanation: "Viruses are obligate parasites, meaning they rely on a host for replication and nutrition."
          },
          {
            question: "Which of the following is not a major criterion for classifying algae",
            answers: [
              { text: "cell wall constituents", correct: false },
              { text: "cell wall pigment", correct: false },
              { text: "size and shape", correct: true },
              { text: "storage product", correct: false }
            ],
            explanation: "Size and shape are not major criteria for classifying algae, whereas cell wall constituents, pigments, and storage products are."
          },
          {
            question: "Crustacea, an aquatic arthropod, respire by which means?",
            answers: [
              { text: "Gills", correct: true },
              { text: "Lungs", correct: false },
              { text: "Skin", correct: false },
              { text: "Trachea", correct: false }
            ],
            explanation: "Crustaceans, which are aquatic arthropods, typically respire through gills."
          },
          {
            question: "Most visceral organs in vertebrates are located in the",
            answers: [
              { text: "Head", correct: false },
              { text: "Trunk", correct: true },
              { text: "Tail", correct: false },
              { text: "All of the above", correct: false }
            ],
            explanation: "In vertebrates, most visceral organs are located in the trunk of the body."
          },
          {
            question: "Bacteria are the causative agents of",
            answers: [
              { text: "Flu", correct: false },
              { text: "Mumps", correct: false },
              { text: "Smallpox", correct: false },
              { text: "Tetanus", correct: true }
            ],
            explanation: "Tetanus is caused by the bacterium Clostridium tetani."
          },
          {
            question: "Viral order ends in",
            answers: [
              { text: "Virals", correct: false },
              { text: "Viriales", correct: true },
              { text: "Virinae", correct: false },
              { text: "Virldae", correct: false }
            ],
            explanation: "The names of viral orders typically end in '-virales'."
          },
          {
            question: "The classification is a good quality because it is",
            answers: [
              { text: "Arbitrary", correct: false },
              { text: "Systematic", correct: true },
              { text: "Classic", correct: false },
              { text: "Complex", correct: false }
            ],
            explanation: "A good classification system is systematic, meaning it is based on a structured and consistent methodology."
          },
          {
            question: "Fungi are unable to feed like green plants because",
            answers: [
              { text: "They are parasitic autotrophs", correct: false },
              { text: "They are heterotrophic", correct: true },
              { text: "They are not autotrophic", correct: false },
              { text: "They lack chlorophyll", correct: false }
            ],
            explanation: "Fungi are heterotrophic organisms, meaning they cannot produce their own food through photosynthesis as plants do."
          },
          {
            question: "The oval bacteria forms are regarded as",
            answers: [
              { text: "Bacillus", correct: false },
              { text: "Spirillum", correct: false },
              { text: "Coccus", correct: false },
              { text: "Vibrio", correct: false }
            ],
            explanation: "Oval bacteria are more correctly described as cocci when they are spherical, or bacilli when they are rod-shaped. None of the provided options fit the 'oval' description precisely."
          },
          {
            question: "The presence of copulatory organs was first noticed in phylum",
            answers: [
              { text: "Nematode", correct: true },
              { text: "Mollusca", correct: false },
              { text: "Echinodermata", correct: false },
              { text: "Platyhelminthes", correct: false }
            ],
            explanation: "Nematodes are among the first phyla where the presence of copulatory organs was observed."
          },
          {
            question: "Algae are classified into different groups on the basis of the following",
            answers: [
              { text: "Cell wall pigments", correct: true },
              { text: "Sizes & shapes", correct: false },
              { text: "Cell wall materials", correct: false },
              { text: "Nature of their stored product", correct: false }
            ],
            explanation: "Algae are primarily classified based on their cell wall pigments."
          },
          {
            question: "The respiration of anaerobes is commonly called",
            answers: [
              { text: "Metabolism", correct: false },
              { text: "Fermentation", correct: true },
              { text: "Bio production", correct: false },
              { text: "Perspiration", correct: false }
            ],
            explanation: "Anaerobes typically undergo fermentation, which is a type of respiration that does not require oxygen."
          },
          {
            question: "Bacteria that exist as short rods are called",
            answers: [
              { text: "Coccobacillus", correct: true },
              { text: "Bacillus coccus", correct: false },
              { text: "Coccus", correct: false },
              { text: "Bacillus", correct: false }
            ],
            explanation: "Coccobacillus bacteria have a shape that is intermediate between cocci (spherical) and bacilli (rod-shaped)."
          },
          {
            question: "Phylum Arthropoda is the most extensive because it contains 891,000 species which represent",
            answers: [
              { text: "50-60% of animal species", correct: false },
              { text: "75-80% of animal species", correct: true },
              { text: "90-100% of animal species", correct: false },
              { text: "40-80% of animal species", correct: false }
            ],
            explanation: "Phylum Arthropoda is the most extensive phylum, representing approximately 75-80% of all animal species."
          },
          {
            question: "There are ________ major stages in the life cycle of a virus",
            answers: [
              { text: "6", correct: true },
              { text: "5", correct: false },
              { text: "4", correct: false },
              { text: "3", correct: false }
            ],
            explanation: "The major stages in the life cycle of a virus typically include attachment, penetration, uncoating, replication, assembly, and release, making a total of six stages."
          },
          {
            question: "Carbohydrate food reserve in fungi is stored as",
            answers: [
              { text: "Sucrose", correct: false },
              { text: "Glucose", correct: false },
              { text: "Starch", correct: false },
              { text: "Glycogen", correct: true }
            ],
            explanation: "Fungi store carbohydrates primarily as glycogen."
          },
          {
            question: "Which exhibit radial symmetry",
            answers: [
              { text: "Roundworms", correct: false },
              { text: "Snail", correct: false },
              { text: "Earthworm", correct: false },
              { text: "Hydra", correct: true }
            ],
            explanation: "Hydra exhibit radial symmetry, meaning their body plan is arranged around a central axis."
          },
          {
            question: "The diameter of the largest bacteria should be around",
            answers: [
              { text: "0.05cm", correct: false },
              { text: "0.05mm", correct: true },
              { text: "0.005cm", correct: false },
              { text: "0.005mm", correct: false }
            ],
            explanation: "The largest bacterial cells can have a diameter of around 0.05mm."
          },
          {
            question: "Which of this is not a prokaryotic",
            answers: [
              { text: "Staphylococcus", correct: false },
              { text: "Blue-green algae", correct: false },
              { text: "Pandorina", correct: true },
              { text: "Thermus sp.", correct: false }
            ],
            explanation: "Pandorina is a genus of green algae, which are eukaryotic, while the others are prokaryotic."
          },
          {
            question: "Fertilization in organisms of the division Pteridophyta takes place in the",
            answers: [
              { text: "Antheridium", correct: false },
              { text: "Archegonium", correct: true },
              { text: "Oogonium", correct: false },
              { text: "Lycopodium", correct: false }
            ],
            explanation: "In pteridophytes, fertilization takes place in the archegonium."
          },
          {
            question: "Herpesvirales is",
            answers: [
              { text: "Sub-family", correct: false },
              { text: "Order", correct: true },
              { text: "Genus", correct: false },
              { text: "Family", correct: false }
            ],
            explanation: "Herpesvirales is the order that includes herpes viruses."
          },
          {
            question: "Why are bacteria regarded as the smallest known living organisms?",
            answers: [
              { text: "Because their sizes are in millimeters", correct: false },
              { text: "Because viruses, which are smaller, are not regarded as living outside a living host", correct: true },
              { text: "Because of their small diameter", correct: false },
              { text: "Because of their well-defined cell wall", correct: false }
            ],
            explanation: "Bacteria are considered the smallest known living organisms because viruses, which are smaller, are not considered living outside a host."
          },
          {
            question: "Diversity of living organisms 'plant' could be in one of the following except",
            answers: [
              { text: "Physiology", correct: false },
              { text: "Function", correct: true },
              { text: "Habitat", correct: false },
              { text: "Forms", correct: false }
            ],
            explanation: "The diversity of plants can be described in terms of physiology, habitat, and forms, but not function."
          },
          {
            question: "The swelling of an imperfectly sterilized food can is as a result of the following except",
            answers: [
              { text: "Bacterial fermentation", correct: false },
              { text: "Bacterial declination", correct: true },
              { text: "Respiration of anaerobes", correct: false },
              { text: "Pressure of gases produced by bacteria", correct: false }
            ],
            explanation: "Swelling of food cans can result from bacterial fermentation, anaerobic respiration, and the pressure of gases produced by bacteria, but not from 'bacterial declination' as this is not a recognized biological process."
          },
          {
            question: "Class Arthropoda in the phylum Cnidaria is",
            answers: [
              { text: "The polyp alternates with the medusa", correct: true },
              { text: "The medusa and polyp are absent", correct: false }
            ],
            explanation: "In the phylum Cnidaria, the polyp stage often alternates with the medusa stage in the life cycle."
          },
          {
            question: "Fertilization in organisms of the division Pteridophyta takes place in the",
            answers: [
              { text: "Oogonium", correct: false },
              { text: "Archegonium", correct: true },
              { text: "Lycopodium", correct: false },
              { text: "Antheridium", correct: false }
            ],
            explanation: "In Pteridophytes, fertilization occurs in the archegonium."
          },
          {
            question: "The reproduction of bacteria when the condition is not favorable is by",
            answers: [
              { text: "Binary fusion", correct: false },
              { text: "Binary fission", correct: false },
              { text: "Spore formation", correct: true }
            ],
            explanation: "When conditions are unfavorable, bacteria can reproduce by forming spores."
          },
          {
            question: "In the coccus form, one of the following is an example",
            answers: [
              { text: "Cholera", correct: false },
              { text: "Staphylococcus", correct: true }
            ],
            explanation: "Staphylococcus is an example of bacteria in the coccus form."
          },
          {
            question: "The decolorizer used in Gram’s staining is",
            answers: [
              { text: "Crystal violet", correct: false },
              { text: "Safranin", correct: false },
              { text: "Acetone", correct: true },
              { text: "Gram’s iodine", correct: false }
            ],
            explanation: "In Gram’s staining, acetone or alcohol is used as the decolorizer."
          },
          {
            question: "The most important feature of a species is",
            answers: [
              { text: "Similar structure", correct: false },
              { text: "Similar appearance", correct: false },
              { text: "Interbreeding", correct: true },
              { text: "Similar functions", correct: false }
            ],
            explanation: "The ability to interbreed and produce fertile offspring is the most important feature of a species."
          },
          {
            question: "The basic origin of the work of Whittaker on the creation of the 5 kingdoms was on",
            answers: [
              { text: "Autotrophy and structure", correct: true },
              { text: "Heterotrophy and structure", correct: false },
              { text: "Heterotrophy and motility", correct: false },
              { text: "Autotrophy and motility", correct: false }
            ],
            explanation: "Whittaker's classification into five kingdoms was based on characteristics such as autotrophy and structure."
          },
          {
            question: "An example of simple unicellular algae is",
            answers: [
              { text: "Pandorina", correct: false },
              { text: "Spirogyra", correct: false },
              { text: "Chlamydomonas", correct: true },
              { text: "Fucus", correct: false }
            ],
            explanation: "Chlamydomonas is an example of simple unicellular algae."
          },
          {
            question: "The final stage in the cycle of a virus is",
            answers: [
              { text: "Liberation of new viruses", correct: true }
            ],
            explanation: "The final stage in the viral life cycle is the release or liberation of new virus particles."
          },
          {
            question: "Which of these classes of algae is referred to as red algae",
            answers: [
              { text: "Rhodophyta", correct: true }
            ],
            explanation: "Rhodophyta is the class of algae commonly referred to as red algae."
          },
          {
            question: "The form assumed by Neisseria gonorrhoeae is",
            answers: [
              { text: "Diplococci", correct: true },
              { text: "Staphylococci", correct: false },
              { text: "Tetracocci", correct: false },
              { text: "Streptococci", correct: false }
            ],
            explanation: "Neisseria gonorrhoeae typically assumes a diplococci form."
          },
          {
            question: "The peptidoglycan complex found in the bacterial cell wall is composed of",
            answers: [
              { text: "Peptidoglycan and sugars", correct: true },
              { text: "Peclin and glucose", correct: false },
              { text: "Peclide and sugars", correct: false },
              { text: "Peptidine and glycogen", correct: false }
            ],
            explanation: "The bacterial cell wall peptidoglycan complex is composed of peptides and sugars."
          },
          {
            question: "A bacterium is said to be circular if it is",
            answers: [
              { text: "Coccus", correct: true },
              { text: "Spirillum", correct: false },
              { text: "Bacillus", correct: false }
            ],
            explanation: "Circular-shaped bacteria are referred to as cocci."
          },
          {
            question: "The 5-kingdom classification divided by Whittaker includes",
            answers: [
              { text: "Heterotrophs", correct: true },
              { text: "Autotrophs", correct: false },
              { text: "Motility", correct: false }
            ],
            explanation: "Whittaker's classification includes the kingdom of Heterotrophs."
          },
          {
            question: "How many shapes do bacteria have?",
            answers: [
              { text: "3", correct: true },
              { text: "2", correct: false },
              { text: "5", correct: false },
              { text: "4", correct: false }
            ],
            explanation: "Bacteria are commonly classified into three shapes: cocci (spherical), bacilli (rod-shaped), and spirilla (spiral-shaped)."
          },
          {
            question: "__________ have a wider distribution than any other living organism",
            answers: [
              { text: "Bacteria", correct: true },
              { text: "Viruses", correct: false },
              { text: "Algae", correct: false },
              { text: "Fungi", correct: false }
            ],
            explanation: "Bacteria have a wider distribution and can be found in diverse environments all over the world."
          },
          {
            question: "When there is no increase in the total number of bacteria, it results from the formation and germination of",
            answers: [
              { text: "Spores", correct: true }
            ],
            explanation: "When conditions are unfavorable, bacteria may form spores, leading to no increase in the total number of active bacteria."
          },
          {
            question: "The form of another organism is called",
            answers: [
              { text: "Combination", correct: true },
              { text: "Fission", correct: false },
              { text: "Fusion", correct: false }
            ],
            explanation: "Combination refers to the form or structure resulting from the union of different organisms."
          },
          {
            question: "The exo-erythrocytic cycle of the malaria parasite occurs in the _________ of the main host",
            answers: [
              { text: "Liver", correct: true },
              { text: "Kidney", correct: false },
              { text: "Intestine", correct: false },
              { text: "Blood cell", correct: false }
            ],
            explanation: "The exo-erythrocytic cycle of the malaria parasite occurs in the liver of the host."
          },
          {
            question: "There are __________ number of segments along the length of a centipede (Chilopoda)",
            answers: [
              { text: "30", correct: true },
              { text: "40", correct: false },
              { text: "10", correct: false },
              { text: "11", correct: false }
            ],
            explanation: "Centipedes typically have around 30 segments along their body length."
          },
          {
            question: "Which of these classes of algae is referred to as red algae",
            answers: [
              { text: "Englenophyta", correct: false },
              { text: "Phodophyta", correct: true },
              { text: "Pyrrophyta", correct: false },
              { text: "Phaeophyta", correct: false }
            ],
            explanation: "Red algae are classified under the class Rhodophyta or Phodophyta."
          },
          {
            question: "The binomial system of classification was successfully completed between",
            answers: [
              { text: "1707 – 1778", correct: false },
              { text: "1515 - 1590", correct: false },
              { text: "1739 – 1788", correct: false },
              { text: "1807 – 1888", correct: false }
            ],
            explanation: "The binomial system of classification was introduced by Carl Linnaeus in the 18th century, not within the provided date ranges."
          },
          {
            question: "Classification is of good quality because it is",
            answers: [
              { text: "Classic", correct: false },
              { text: "Systematic", correct: true },
              { text: "Arbitrary", correct: false },
              { text: "Complex", correct: false }
            ],
            explanation: "Classification is systematic because it organizes organisms based on logical principles and criteria."
          },
          {
            question: "Carbohydrate food reserve in fungi is stored as",
            answers: [
              { text: "Sucrose", correct: false },
              { text: "Starch", correct: false },
              { text: "Glycogen", correct: true },
              { text: "Glucose", correct: false }
            ],
            explanation: "Fungi store carbohydrate food reserves as glycogen."
          },
          {
            question: "Which of these classes of algae is referred to as brown algae",
            answers: [
              { text: "Englenophyte", correct: false },
              { text: "Phaeophyte", correct: true },
              { text: "Pyrophyte", correct: false },
              { text: "Rodophyte", correct: false }
            ],
            explanation: "Brown algae are classified under the class Phaeophyceae or Phaeophyta."
          },
          {
            question: "The division Protista of Whittaker encompasses",
            answers: [
              { text: "Autotrophs", correct: false },
              { text: "Virus", correct: false },
              { text: "Heterotrophs", correct: false },
              { text: "Both autotrophs and heterotrophs", correct: true }
            ],
            explanation: "Whittaker's kingdom Protista includes both autotrophs and heterotrophs."
          },
          {
            question: "The following are prokaryotes thallophytes except",
            answers: [
              { text: "Fungi", correct: true },
              { text: "Bacteria", correct: false },
              { text: "Blue-green algae", correct: false }
            ],
            explanation: "Fungi are not prokaryotic thallophytes; they are eukaryotic."
          },
          {
            question: "The following make viruses different from bacteria except",
            answers: [
              { text: "The nucleic acid of virus may be RNA", correct: false },
              { text: "Viruses are smaller than bacteria", correct: false },
              { text: "Viruses require a host to be regarded as living", correct: false },
              { text: "Viruses do not have a nucleus", correct: true }
            ],
            explanation: "Viruses lack a cellular structure, including a nucleus, which bacteria possess."
          },
          {
            question: "Under the microscope, the morphology of Vibrio cholerae is",
            answers: [
              { text: "Comma-shaped", correct: true },
              { text: "Spherical-shaped", correct: false },
              { text: "Rod-like shaped", correct: false },
              { text: "Spiral-shaped", correct: false }
            ],
            explanation: "Vibrio cholerae appears as comma-shaped bacteria under the microscope."
          },
          {
            question: "Which of these are simple unicellular organisms",
            answers: [
              { text: "Chlamydomonas", correct: true },
              { text: "Pandorina", correct: false }
            ],
            explanation: "Chlamydomonas is an example of a simple unicellular organism."
          },
          {
            question: "The rod-like structure in organisms of the division Bryophyta is called",
            answers: [
              { text: "Liverworts", correct: false },
              { text: "Rhizoids", correct: false },
              { text: "Seta", correct: true },
              { text: "Rhizome", correct: false }
            ],
            explanation: "In bryophytes, the seta is a stalk-like structure that supports the capsule (sporangium) containing spores. It elevates the capsule above the gametophyte (the main body of the bryophyte) to aid in the dispersal of spores."
          },
          {
            question: "Absorptive heterotrophs are collectively known as",
            answers: [
              { text: "Fungi", correct: true },
              { text: "Virus", correct: false },
              { text: "Green plants", correct: false },
              { text: "Bacteria", correct: false }
            ],
            explanation: "Fungi are absorptive heterotrophs."
          },
          {
            question: "The form of bacteria that is responsible for sore throat is",
            answers: [
              { text: "Streptococcus", correct: true },
              { text: "Staphylococcus", correct: false },
              { text: "Escherichia coli", correct: false },
              { text: "Bacillus", correct: false }
            ],
            explanation: "Streptococcus bacteria are commonly associated with causing sore throat, specifically Streptococcus pyogenes."
          },
          {
            question: "The final stage in the life cycle of a virus is",
            answers: [
              { text: "Multiplication of strand and nucleic acid", correct: false },
              { text: "Addition of new viruses", correct: true }
            ],
            explanation: "The final stage in the life cycle of a virus involves the assembly and release of new virus particles."
          },
          {
            question: "All are parasites except",
            answers: [
              { text: "Opalina sp", correct: false },
              { text: "Plasmodium sp", correct: false },
              { text: "Trypanosoma sp", correct: false },
              { text: "Euglena sp", correct: true }
            ],
            explanation: "Opalina, Plasmodium, and Trypanosoma are parasitic organisms, whereas Euglena is a photosynthetic protist."
          },
          {
            question: "There are _________ major stages in the life cycle of a virus",
            answers: [
              { text: "5", correct: false },
              { text: "6", correct: false },
              { text: "4", correct: true },
              { text: "3", correct: false }
            ],
            explanation: "The life cycle of a virus typically involves attachment, penetration, replication, assembly, and release, making it 4 major stages."
          },
          {
            question: "The simple unicellular type of algae is",
            answers: [
              { text: "Chlamydomonas", correct: true },
              { text: "Volvox", correct: false },
              { text: "Pandorina", correct: false }
            ],
            explanation: "Chlamydomonas is an example of a simple unicellular algae."
          },
          {
            question: "Bacteria that survive at wide sub-zero temperatures are called",
            answers: [
              { text: "Psychrophiles", correct: true },
              { text: "Mesophiles", correct: false }
            ],
            explanation: "Psychrophiles are bacteria that thrive at very low temperatures."
          },
          {
            question: "A bacteria is said to be circular if it is",
            answers: [
              { text: "Coccus", correct: false },
              { text: "Spirillum", correct: false },
              { text: "Bacillus", correct: false },
              { text: "Coccal", correct: true },
            ],
            explanation: " Coccal bacteria are spherical or roughly spherical in shape, appearing as tiny, round cells when viewed under a microscope. These bacteria can occur individually, in pairs (diplococci), in chains (streptococci), or in clusters (staphylococci), depending on their arrangement and growth pattern."
          },
          {
            question: "Which of the following is the youngest plant tissue",
            answers: [
              { text: "Meristem", correct: true },
              { text: "Phloem", correct: false },
              { text: "Epidermis", correct: false },
              { text: "Apical buds", correct: false }
            ],
            explanation: "Meristem tissue is the region of plant tissue with actively dividing cells and is considered the youngest."
          },
          {
            question: "Who was the botanist Turner",
            answers: [
              { text: "An European physician", correct: false },
              { text: "Italian physician", correct: false },
              { text: "Swedish physician", correct: false },
              { text: "English physician", correct: true }
            ],
            explanation: "The botanist Turner refers to William Turner, an English physician and naturalist known as the 'Father of English Botany'."
          },
          {
            question: "The following are prokaryotic thallophytes except",
            answers: [
              { text: "Fungi", correct: true },
              { text: "Blue-green algae", correct: false },
              { text: "Bacteria", correct: false },
              { text: "Virus", correct: false }
            ],
            explanation: "Fungi are eukaryotic organisms, not prokaryotic thallophytes."
          },
          {
            question: "Which one of the following is not a division in vertebrates?",
            answers: [
              { text: "Thorax", correct: true },
              { text: "Head", correct: false },
              { text: "Trunk", correct: false },
              { text: "Tail", correct: false }
            ],
            explanation: "Vertebrates do not have a division called 'Thorax'. The correct divisions are Head, Trunk, and Tail."
          },
          {
            question: "The DNA of bacteria is located in a structure called",
            answers: [
              { text: "Nucleoid", correct: true },
              { text: "Nucleioid", correct: false },
              { text: "Nucleus", correct: false },
              { text: "Central", correct: false }
            ],
            explanation: "The DNA of bacteria is found in the nucleoid region, which is not membrane-bound like a nucleus."
          },
          {
            question: "Sea lily and feather star belong to class",
            answers: [
              { text: "Crinoidea", correct: true },
              { text: "Podia", correct: false },
              { text: "Grinoda", correct: false },
              { text: "Dentalium", correct: false }
            ],
            explanation: "Sea lilies and feather stars belong to the class Crinoidea within the phylum Echinodermata."
          },
          {
            question: "Which phylum of animal excludes marine organisms?",
            answers: [
              { text: "Dentalium", correct: true },
              { text: "Echinodermata", correct: false },
              { text: "Crinoidea", correct: false }
            ],
            explanation: "Dentalium is a phylum of marine organisms known as tusk shells."
          },
          {
            question: "Locomotory organs of starfish are",
            answers: [
              { text: "Podia", correct: true },
              { text: "Ventricle", correct: false },
              { text: "Spicules", correct: false }
            ],
            explanation: "Starfish use tube feet, also known as podia, for locomotion."
          },
          {
            question: "Virus are smaller than atoms. True or False?",
            answers: [
              { text: "True", correct: true },
              { text: "False", correct: false }
            ],
            explanation: "Viruses are indeed smaller than atoms. They typically range in size from 20-300 nanometers, while atoms are much smaller."
          },
          {
            question: "The class of organisms that is characterized by possessing the head, thorax, and abdomen is from",
            answers: [
              { text: "Insecta", correct: true },
              { text: "Insect", correct: false },
              { text: "Arachnida", correct: false },
              { text: "Crustacea", correct: false }
            ],
            explanation: "Insects (class Insecta) are characterized by having three distinct body segments: head, thorax, and abdomen."
          },
          {
            question: "A merocyte with pigment is called",
            answers: [
              { text: "Chromocyte", correct: true },
              { text: "Archaeocyte", correct: false },
              { text: "Chromatocyte", correct: false }
            ],
            explanation: "A merocyte with pigment is termed as a chromocyte."
          },
          {
            question: "Sporophyte is dominant in",
            answers: [
              { text: "Pteridophytes", correct: true },
              { text: "Thallophytes", correct: false },
              { text: "Bryophytes", correct: false },
              { text: "Spermatophytes", correct: false }
            ],
            explanation: "Pteridophytes have a dominant sporophyte phase in their life cycle."
          },
          {
            question: "Animals in the phylum Platyhelminthes are commonly known as",
            answers: [
              { text: "Flatworms", correct: true },
              { text: "Snail", correct: false },
              { text: "Fruit", correct: false },
              { text: "Chitons", correct: false }
            ],
            explanation: "Animals in the phylum Platyhelminthes are commonly known as flatworms."
          },
          {
            question: "The comma-shaped form of bacteria is responsible for",
            answers: [
              { text: "Cholera", correct: true },
              { text: "Syphilis", correct: false },
              { text: "Typhoid", correct: false },
              { text: "Pneumonia", correct: false }
            ],
            explanation: "The comma-shaped bacteria (Vibrio cholerae) is responsible for causing cholera."
          },
          {
            question: "Which of the following is not hermaphrodite?",
            answers: [
              { text: "Tapeworm", correct: false },
              { text: "Flatworm", correct: false },
              { text: "Roundworm", correct: true }
            ],
            explanation: "Roundworms (phylum Nematoda) are not hermaphroditic."
          },
          {
            question: "In a Gram stain procedure, bacteria that are Gram-positive decolorize less easily than Gram-negative cells. True or False?",
            answers: [
              { text: "True", correct: true },
              { text: "False", correct: false }
            ],
            explanation: "Gram-positive bacteria retain the crystal violet dye in Gram staining due to their thicker peptidoglycan layer."
          },
          {
            question: "The dominant plant in bryophytes is",
            answers: [
              { text: "Gametophyte", correct: true },
              { text: "Vascular plants", correct: false },
              { text: "Rhizoids", correct: false },
              { text: "Saprophyte", correct: false }
            ],
            explanation: "Bryophytes (mosses, liverworts, hornworts) have a dominant gametophyte stage in their life cycle."
          },
          {
            question: "The comma-shaped or vibroid form of bacteria is responsible for",
            answers: [
              { text: "Cholera", correct: true },
              { text: "Amoeba", correct: false },
              { text: "Typhoid", correct: false },
              { text: "Pneumonia", correct: false }
            ],
            explanation: "The comma-shaped or vibroid bacteria (Vibrio cholerae) causes cholera."
          },
          {
            question: "Examples of complex multicellular organisms are the following except",
            answers: [
              { text: "Oscillatoria", correct: false },
              { text: "Fucus", correct: false },
              { text: "Laminaria", correct: false },
              { text: "Extocarpus", correct: true }
            ],
            explanation: "Extocarpus is a genus of brown algae, which are complex multicellular organisms."
          },
          {
            question: "The filamentous types of algae include",
            answers: [
              { text: "Spirogyra and Oscillatoria", correct: true },
              { text: "Spirogyra and Fucus", correct: false },
              { text: "Tolox and Spirogyra", correct: false },
              { text: "Diatoms and Ulva", correct: false }
            ],
            explanation: "Spirogyra and Oscillatoria are examples of filamentous algae."
          },
          {
            question: "The part of the vertebrate body where all visceral organs are located is called",
            answers: [
              { text: "Trunk", correct: true },
              { text: "Head", correct: false },
              { text: "Tail", correct: false },
              { text: "All of the above", correct: false }
            ],
            explanation: "The trunk of a vertebrate body houses all the visceral organs."
          },
          {
            question: "One is not a division of vertebrates",
            answers: [
              { text: "Head", correct: false },
              { text: "Tail", correct: false },
              { text: "Thorax", correct: true },
              { text: "None of the above", correct: false }
            ],
            explanation: "Among the given options, 'Thorax' is not a division of vertebrates."
          },
          {
            question: "Division of bacteria in plane results in",
            answers: [
              { text: "Diplococci and chains", correct: true },
              { text: "Streptococci and staphylococci", correct: false },
              { text: "Bacilli and spirilla", correct: false },
              { text: "Cocci and bacilli", correct: false }
            ],
            explanation: "Division of bacteria in one plane can result in arrangements like diplococci (pairs) or chains."
          },
          {
            question: "Viruses cause all the following diseases except",
            answers: [
              { text: "Mumps", correct: false },
              { text: "Flu", correct: false },
              { text: "Tetanus", correct: true },
              { text: "Smallpox", correct: false }
            ],
            explanation: "Tetanus is caused by a bacterium (Clostridium tetani), not a virus."
          },
          {
            question: "Sexual spore of sac fungi ________ ascospore",
            answers: [
              { text: "Zoospore", correct: false },
              { text: "Conidia", correct: false },
              { text: "Is", correct: true },
              { text: "Protospore", correct: false }
            ],
            explanation: "The sexual spore of sac fungi is called ascospore."
          },
          {
            question: "Example of cocci in cluster ___________ Staphylococcus",
            answers: [
              { text: "Diplococci", correct: false },
              { text: "Tetracocci", correct: false },
              { text: "Streptococci", correct: false },
              { text: "Staphylococci", correct: true }
            ],
            explanation: "Staphylococcus is an example of cocci in clusters."
          },
          {
            question: "Fungi imperfecti is ___________ Deuteromycetes",
            answers: [
              { text: "Ascomycota", correct: false },
              { text: "Basidiomycota", correct: false },
              { text: "Anamorphic", correct: true },
              { text: "Zygomycota", correct: false }
            ],
            explanation: "Fungi imperfecti (imperfect fungi) are classified under Deuteromycetes."
          },
          {
            question: "Which of these does not belong to the group (a) Bacillus subtilis (b) Escherichia coli (c) Tobacco mosaic virus (d) Treponema pallidum",
            answers: [
              { text: "Bacillus subtilis", correct: false },
              { text: "Escherichia coli", correct: false },
              { text: "Tobacco mosaic virus", correct: false },
              { text: "Treponema pallidum", correct: true }
            ],
            explanation: "Treponema pallidum does not belong to the group of bacteria and viruses listed."
          },
          {
            question: "How many stages is virus (a) 3 (b) 4 (c) 2 (d) 5",
            answers: [
              { text: "3", correct: false },
              { text: "4", correct: true },
              { text: "2", correct: false },
              { text: "5", correct: false }
            ],
            explanation: "Viruses typically have a life cycle consisting of 4 stages."
          },
          {
            question: "Classification of plants is based on (a) Photosynthesis (b) Taxonomy (c) Chemosynthesis (d) Classification",
            answers: [
              { text: "Photosynthesis", correct: false },
              { text: "Taxonomy", correct: true },
              { text: "Chemosynthesis", correct: false },
              { text: "Classification", correct: false }
            ],
            explanation: "The classification of plants is based on taxonomy."
          },
          {
            question: "Length of virus is (a) 5 – 40nm (b) 2 – 20mm (c) 2 – 20nm (d) 5 – 40mm",
            answers: [
              { text: "5 – 40nm", correct: true },
              { text: "2 – 20mm", correct: false },
              { text: "2 – 20nm", correct: false },
              { text: "5 – 40mm", correct: false }
            ],
            explanation: "Viruses typically range in size from 5 to 40 nanometers."
          },
          {
            question: "Which of these does not belong to the group (a) Treponema pallidum (b) Bacillus subtilis (c) Tobacco mosaic virus (d) Escherichia coli",
            answers: [
              { text: "Treponema pallidum", correct: true },
              { text: "Bacillus subtilis", correct: false },
              { text: "Tobacco mosaic virus", correct: false },
              { text: "Escherichia coli", correct: false }
            ],
            explanation: "Treponema pallidum is not a bacterium or virus among the listed options."
          },
          {
            question: "___________ is used for the production of biopesticides (a) Streptococcus mutans (b) Rhizobacterium spp. (c) Lactobacillus bulgaricus (d) Bacillus thuringiensis",
            answers: [
              { text: "Streptococcus mutans", correct: false },
              { text: "Rhizobacterium spp.", correct: false },
              { text: "Lactobacillus bulgaricus", correct: false },
              { text: "Bacillus thuringiensis", correct: true }
            ],
            explanation: "Bacillus thuringiensis is used for the production of biopesticides."
          },
          {
            question: "The diplopods in millipedes are also known as (a) Cyclapods (b) Chilopoda (c) Lithobius (d) Myriapods",
            answers: [
              { text: "Cyclapods", correct: false },
              { text: "Chilopoda", correct: false },
              { text: "Lithobius", correct: false },
              { text: "Myriapods", correct: true }
            ],
            explanation: "Diplopods in millipedes are also referred to as myriapods."
          },
          {
            question: "The production of a series of publications with a comprehensive account of several families of flowering plants, in addition to the systematic classification of cryptograms, was made by (a) Engler and Prantl (b) Bauhin and Kasper (c) Bentham and Hooker (d) Turner and Bauhin",
            answers: [
              { text: "Engler and Prantl", correct: true },
              { text: "Bauhin and Kasper", correct: false },
              { text: "Bentham and Hooker", correct: false },
              { text: "Turner and Bauhin", correct: false }
            ],
            explanation: "Engler and Prantl produced a comprehensive series of plant publications."
          },
          {
            question: "Gram-positive and Gram-negative cells have ________ and ________",
            answers: [
              { text: "Thick peptidoglycan layer, thin peptidoglycan layer", correct: true },
              { text: "Thin peptidoglycan layer, thick peptidoglycan layer", correct: false },
              { text: "Cellulose layer, peptidoglycan layer", correct: false },
              { text: "Protein layer, lipid layer", correct: false }
            ],
            explanation: "Gram-positive bacteria have a thick peptidoglycan layer, whereas Gram-negative bacteria have a thin peptidoglycan layer."
          },
          {
            question: "The counter used in Gram staining is _________",
            answers: [
              { text: "Crystal violet", correct: false },
              { text: "Safranin", correct: false },
              { text: "Iodine", correct: false },
              { text: "Gram's iodine", correct: true }
            ],
            explanation: "Gram's iodine is used as the mordant (counter) in Gram staining."
          },
          {
            question: "Another name for brown algae is _____________",
            answers: [
              { text: "Chlorophyta", correct: false },
              { text: "Phaeophyta", correct: true },
              { text: "Rhodophyta", correct: false },
              { text: "Bacillariophyta", correct: false }
            ],
            explanation: "Brown algae are commonly known as Phaeophyta."
          },
          {
            question: "Bacteria are considered smallest because of __________",
            answers: [
              { text: "Small genome size", correct: false },
              { text: "Small cell volume", correct: true },
              { text: "Small number of chromosomes", correct: false },
              { text: "Small cell wall thickness", correct: false }
            ],
            explanation: "Bacteria are considered the smallest living organisms because of their small cell volume."
          },
          {
            question: "The diameter of the largest bacteria cell should be around __________ in size",
            answers: [
              { text: "100 micrometers", correct: false },
              { text: "10 micrometers", correct: false },
              { text: "1 micrometer", correct: true },
              { text: "0.1 micrometer", correct: false }
            ],
            explanation: "The largest bacteria cells can reach up to approximately 1 micrometer in diameter."
          },
          {
            question: "Liverwort is a primitive thaloid in the division ______________",
            answers: [
              { text: "Bryophyta", correct: true },
              { text: "Pteridophyta", correct: false },
              { text: "Coniferophyta", correct: false },
              { text: "Angiospermae", correct: false }
            ],
            explanation: "Liverworts are primitive thaloid plants classified under the division Bryophyta."
          },
          {
            question: "Eggs are laid in cocoon produced by the __________ in class the oligochaete of phylum Annelida",
            answers: [
              { text: "Chaeta", correct: false },
              { text: "Cuticle", correct: false },
              { text: "Clitellum", correct: true },
              { text: "Coelom", correct: false }
            ],
            explanation: "Eggs are laid in a cocoon produced by the clitellum in oligochaetes of the phylum Annelida."
          },
          {
            question: "Class Cyanophyta are distinct in (a) root (b) aquatic (c) primitive (d) chloroplast",
            answers: [
              { text: "Root", correct: false },
              { text: "Aquatic", correct: true },
              { text: "Primitive", correct: false },
              { text: "Chloroplast", correct: false }
            ],
            explanation: "Class Cyanophyta (blue-green algae) are distinct in being aquatic organisms."
          },
          {
            question: "Which of the following causes syphilis and cholera (a) Bacillus & Vibrio (b) Spirillum & Vibrio (c) Coccus & Bacillus (d) Vibrio & Coccus",
            answers: [
              { text: "Bacillus & Vibrio", correct: false },
              { text: "Spirillum & Vibrio", correct: false },
              { text: "Coccus & Bacillus", correct: false },
              { text: "Vibrio & Coccus", correct: true }
            ],
            explanation: "Syphilis is caused by Treponema pallidum (a spirochete) and cholera is caused by Vibrio cholerae (a vibrio)."
          },
          {
            question: "Which of the following bacteria live in a cold region (a) Mesophile (b) Thermophile (c) Psychrophile (d) Nanophile",
            answers: [
              { text: "Mesophile", correct: false },
              { text: "Thermophile", correct: false },
              { text: "Psychrophile", correct: true },
              { text: "Nanophile", correct: false }
            ],
            explanation: "Psychrophiles are bacteria that thrive in cold environments."
          },
          {
            question: "___________ is radial symmetry (a) Echinoderms (b) Earthworm (c) Mollusca (d) Roundworm",
            answers: [
              { text: "Echinoderms", correct: true },
              { text: "Earthworm", correct: false },
              { text: "Mollusca", correct: false },
              { text: "Roundworm", correct: false }
            ],
            explanation: "Echinoderms exhibit radial symmetry."
          },
          {
            question: "All of these are parasites except (a) Euglena (b) Plasmodium (c) Opalina (d) Trypanosome",
            answers: [
              { text: "Euglena", correct: false },
              { text: "Plasmodium", correct: false },
              { text: "Opalina", correct: false },
              { text: "Trypanosome", correct: true }
            ],
            explanation: "Trypanosomes are parasites, while Euglena, Plasmodium, and Opalina are also parasitic or symbiotic organisms."
          },
          {
            question: "Organisms with wider distribution in the plant kingdom include (a) Virus (b) Bacteria (c) Fungi",
            answers: [
              { text: "Virus", correct: false },
              { text: "Bacteria", correct: true },
              { text: "Fungi", correct: false }
            ],
            explanation: "Bacteria have a wider distribution in the plant kingdom compared to viruses and fungi."
          },
          {
            question: "The tympanic membrane of the eardrum is supported by (a) Tympanic bone (b) Incus bone (c) Stapes bone (d) Ossicular bone",
            answers: [
              { text: "Tympanic bone", correct: false },
              { text: "Incus bone", correct: true },
              { text: "Stapes bone", correct: false },
              { text: "Ossicular bone", correct: false }
            ],
            explanation: "The tympanic membrane of the eardrum is supported by the incus bone."
          },
          {
            question: "Which of the following is only found in algae (a) Pyrophyta (b) Rhodophyta (c) Chrysophyta (d) Cyanophyta",
            answers: [
              { text: "Pyrophyta", correct: false },
              { text: "Rhodophyta", correct: true },
              { text: "Chrysophyta", correct: false },
              { text: "Cyanophyta", correct: false }
            ],
            explanation: "Rhodophyta (red algae) are exclusively found in algae."
          },
          {
            question: "The waterproof substance that protects structures in spermatophytes is (a) Cutin and subman (b) Cutin and auxin (c) Cutin (d) Subman and integuments",
            answers: [
              { text: "Cutin and subman", correct: false },
              { text: "Cutin and auxin", correct: false },
              { text: "Cutin", correct: true },
              { text: "Subman and integuments", correct: false }
            ],
            explanation: "Cutin is the waterproof substance that protects structures in spermatophytes."
          },
          {
            question: "The type of nutrition in viruses is (a) Saprophytic (b) Parasitic (c) Commensalism (d) Autotrophic",
            answers: [
              { text: "Saprophytic", correct: false },
              { text: "Parasitic", correct: true },
              { text: "Commensalism", correct: false },
              { text: "Autotrophic", correct: false }
            ],
            explanation: "Viruses exhibit a parasitic mode of nutrition."
          },
          {
            question: "The following are examples of morphological arrangements of bacteria except (a) Cluster (b) Chain (c) Polygonal (d) Tetrad",
            answers: [
              { text: "Cluster", correct: false },
              { text: "Chain", correct: false },
              { text: "Polygonal", correct: false },
              { text: "Tetrad", correct: false }
            ],
            explanation: "All listed options (cluster, chain, polygonal, tetrad) are examples of morphological arrangements of bacteria."
          },
          {
            question: "Fungi are classified into different classes based on (a) Nature of sexual spore (b) Nature of asexual spore (c) Mode of reproduction (d) Nature of hyphae",
            answers: [
              { text: "Nature of sexual spore", correct: true },
              { text: "Nature of asexual spore", correct: false },
              { text: "Mode of reproduction", correct: false },
              { text: "Nature of hyphae", correct: false }
            ],
            explanation: "Fungi are classified into different classes primarily based on the nature of their sexual spores."
          },
          {
            question: "Arrange these organisms chronologically (a) fungi, virus, bacteria (b) bacteria, virus fungi (c) virus, fungi, bacteria (d) fungi, bacteria, virus",
            answers: [
              { text: "Fungi, virus, bacteria", correct: false },
              { text: "Bacteria, virus, fungi", correct: false },
              { text: "Virus, fungi, bacteria", correct: true },
              { text: "Fungi, bacteria, virus", correct: false }
            ],
            explanation: "Viruses are considered the earliest organisms in evolutionary history, followed by fungi and then bacteria."
          },
          {
            question: "One of these is a viral disease except one (a) syphilis (b) smallpox (c) influenza (d) AIDS",
            answers: [
              { text: "Syphilis", correct: true },
              { text: "Smallpox", correct: false },
              { text: "Influenza", correct: false },
              { text: "AIDS", correct: false }
            ],
            explanation: "Syphilis is caused by the bacterium Treponema pallidum, not a virus."
          },
          {
            question: "The most primitive among the following is _________ (a) Hydra (b) Plasmodium (c) Paramecium (d) Amoeba",
            answers: [
              { text: "Hydra", correct: false },
              { text: "Plasmodium", correct: false },
              { text: "Paramecium", correct: false },
              { text: "Amoeba", correct: true }
            ],
            explanation: "Amoeba is a primitive unicellular organism compared to Hydra, Plasmodium, and Paramecium."
          },
          {
            question: "The type of nutrition in virus is (a) saprophytic (b) parasitic (c) commensalism (d) autotrophie",
            answers: [
              { text: "Saprophytic", correct: false },
              { text: "Parasitic", correct: true },
              { text: "Commensalism", correct: false },
              { text: "Autotrophic", correct: false }
            ],
            explanation: "Viruses exhibit a parasitic mode of nutrition."
          },
          {
            question: "Amoebocyte with pigment is __________ (a) choanocyte (b) archaeocyte (c) chromatocytes (d) scleroblast",
            answers: [
              { text: "Choanocyte", correct: false },
              { text: "Archaeocyte", correct: false },
              { text: "Chromatocytes", correct: true },
              { text: "Scleroblast", correct: false }
            ],
            explanation: "Amoebocytes with pigment are known as chromatocytes."
          },
          {
            question: "Sexual reproduction between identical motile gametes is (a) conjugate (b) anisogamy (c) isogamy (d) aplaliogomes",
            answers: [
              { text: "Conjugate", correct: false },
              { text: "Anisogamy", correct: false },
              { text: "Isogamy", correct: true },
              { text: "Aplaliogomes", correct: false }
            ],
            explanation: "Isogamy involves sexual reproduction between identical motile gametes."
          },
          {
            question: "The arrangement of leaves is called ________ (a) phyllotaxy (b) decussate (c) petiole (d) testa",
            answers: [
              { text: "Phyllotaxy", correct: true },
              { text: "Decussate", correct: false },
              { text: "Petiole", correct: false },
              { text: "Testa", correct: false }
            ],
            explanation: "The arrangement of leaves on the stem is termed phyllotaxy."
          },
          {
            question: "Nitrogen contributes ______% of the Earth's surface (a) 78% (b) 1% (c) 2% (d) 50%",
            answers: [
              { text: "78%", correct: false },
              { text: "1%", correct: false },
              { text: "2%", correct: true },
              { text: "50%", correct: false }
            ],
            explanation: "Nitrogen makes up approximately 78% of the Earth's atmosphere, but only 2% of its surface."
          },
          {
            question: "Bacteria undergoes _________ uncommon process (a) fermentation (b) respirating (c) CO2 process",
            answers: [
              { text: "Fermentation", correct: false },
              { text: "Respirating", correct: false },
              { text: "CO2 process", correct: false },
              { text: "None of the above", correct: true }
            ],
            explanation: "Bacteria do not undergo a specific 'CO2 process' distinct from other metabolic processes like fermentation or respiration."
          },
          {
            question: "The botanical name for yellow yam is ________ (a) Dioscorea esculenta (b) Dioscorea cayenensis (c) Dioscorea alata (d) Dioscorea rotundata",
            answers: [
              { text: "Dioscorea esculenta", correct: false },
              { text: "Dioscorea cayenensis", correct: false },
              { text: "Dioscorea alata", correct: false },
              { text: "Dioscorea rotundata", correct: true }
            ],
            explanation: "Yellow yam is botanically known as Dioscorea rotundata."
          },
          {
            question: "The cuticle in insects is shed periodically in a process called (a) none of the above (b) cuticulation (c) ecdysis (d) cuticulating",
            answers: [
              { text: "None of the above", correct: false },
              { text: "Cuticulation", correct: false },
              { text: "Ecdysis", correct: true },
              { text: "Cuticulating", correct: false }
            ],
            explanation: "Insects shed their cuticle periodically through a process called ecdysis."
          },
          {
            question: "The diplopods & millipedes are also known as (a) lithobius (b) myriapod (c) cyclapods (d) chilopoda",
            answers: [
              { text: "Lithobius", correct: false },
              { text: "Myriapod", correct: true },
              { text: "Cyclapods", correct: false },
              { text: "Chilopoda", correct: false }
            ],
            explanation: "Diplopods and millipedes belong to the class Myriapoda."
          },
          {
            question: "Internal budding occurs in the phylum (a) Porifera (b) Nematoda (c) Annelida",
            answers: [
              { text: "Porifera", correct: false },
              { text: "Nematoda", correct: false },
              { text: "Annelida", correct: true }
            ],
            explanation: "Internal budding occurs in some annelids."
          },
          {
            question: "Digestive cavity in coelenterates is (a) Epiderm (b) Mesoderm (c) Mesentron (d) Enteron",
            answers: [
              { text: "Epiderm", correct: false },
              { text: "Mesoderm", correct: false },
              { text: "Mesentron", correct: false },
              { text: "Enteron", correct: true }
            ],
            explanation: "The digestive cavity in coelenterates is called the enteron."
          },
          {
            question: "Herpesviridae is the name of a (a) Genus (b) Subfamily (c) Family (d) Order",
            answers: [
              { text: "Genus", correct: false },
              { text: "Subfamily", correct: false },
              { text: "Family", correct: true },
              { text: "Order", correct: false }
            ],
            explanation: "Herpesviridae is a family of viruses."
          },
          {
            question: "Which of the following cell walls is common to most? (a) Lignin (b) Cellulose (c) Lipid (d) Pectin",
            answers: [
              { text: "Lignin", correct: false },
              { text: "Cellulose", correct: true },
              { text: "Lipid", correct: false },
              { text: "Pectin", correct: false }
            ],
            explanation: "Cellulose is a common component of cell walls in many organisms."
          },
          {
            question: "The decolorizer used in Gram staining is (a) Safranin (b) Acetone (c) Gram's iodine (d) Crystal violet",
            answers: [
              { text: "Safranin", correct: false },
              { text: "Acetone", correct: false },
              { text: "Gram's iodine", correct: false },
              { text: "Crystal violet", correct: true }
            ],
            explanation: "Crystal violet is the primary stain used in Gram staining, not the decolorizer."
          },
          {
            question: "Prokaryotes comprise of __________ and __________ (a) Bacteria, motile organisms (b) Bacteria, blue-green (c) Bacteria, viruses (d) Bacteria, fungi",
            answers: [
              { text: "Bacteria, motile organisms", correct: false },
              { text: "Bacteria, blue-green", correct: false },
              { text: "Bacteria, viruses", correct: false },
              { text: "Bacteria, fungi", correct: true }
            ],
            explanation: "Prokaryotes include bacteria and archaea, not viruses or fungi."
          },
          {
            question: "Another name for green algae is _________ (a) Rhodophyta (b) Chlorophyta (c) Tracheophyta (d) Chromophyta",
            answers: [
              { text: "Rhodophyta", correct: false },
              { text: "Chlorophyta", correct: true },
              { text: "Tracheophyta", correct: false },
              { text: "Chromophyta", correct: false }
            ],
            explanation: "Green algae are classified under the phylum Chlorophyta."
          },
          {
            question: "The unit of virus is _________ (a) Viroin (b) Virus (c) Viroid",
            answers: [
              { text: "Viroin", correct: false },
              { text: "Virus", correct: true },
              { text: "Viroid", correct: false }
            ],
            explanation: "The unit of virus is referred to as a virus."
          },
          {
            question: "The type of nutrition in viruses is _________ (a) Saprophytic (b) Parasitic (c) Autotrophic",
            answers: [
              { text: "Saprophytic", correct: false },
              { text: "Parasitic", correct: true },
              { text: "Autotrophic", correct: false }
            ],
            explanation: "Viruses exhibit a parasitic mode of nutrition."
          },
          {
            question: "The classification of organisms that considers the basic criteria is (a) Pheritical (b) Artificial (c) Mechanical (d) Natural",
            answers: [
              { text: "Pheritical", correct: false },
              { text: "Artificial", correct: false },
              { text: "Mechanical", correct: false },
              { text: "Natural", correct: true }
            ],
            explanation: "Natural classification considers fundamental criteria such as evolutionary relationships."
          },
          {
            question: "Economic importance of viruses include all these except (a) research (b) producing antibiotics (c) treatment of polluted water (d) disease",
            answers: [
              { text: "Research", correct: false },
              { text: "Producing antibiotics", correct: true },
              { text: "Treatment of polluted water", correct: false },
              { text: "Disease", correct: false }
            ],
            explanation: "Viruses do not produce antibiotics; rather, they are studied for research purposes, can affect disease, and are used in some aspects of water treatment."
          },
          {
            question: "In a Gram stain procedure, bacteria that are gram positive decolorize less easily than gram negative cells (a) true (b) false (c) none of the above",
            answers: [
              { text: "True", correct: true },
              { text: "False", correct: false },
              { text: "None of the above", correct: false }
            ],
            explanation: "Gram-positive bacteria retain the crystal violet stain better during the decolorization step of Gram staining compared to gram-negative bacteria."
          },
          {
            question: "Bacteria are regarded as prokaryotic because (a) they contain thread-like flagella (b) they have no proper nucleus (c) they contain a long thread of chromosome",
            answers: [
              { text: "They have no proper nucleus", correct: true },
              { text: "They contain thread-like flagella", correct: false },
              { text: "They contain a long thread of chromosome", correct: false }
            ],
            explanation: "Bacteria lack a membrane-bound nucleus, which is a characteristic feature of prokaryotic organisms."
          },
          {
            question: "Myxoviruses are distinct in that (a) they do not have nucleus (b) they have no cytoplasm (c) they have cytoplasm (d) they have nucleus",
            answers: [
              { text: "They do not have nucleus", correct: false },
              { text: "They have no cytoplasm", correct: false },
              { text: "They have cytoplasm", correct: false },
              { text: "They have nucleus", correct: true }
            ],
            explanation: "Myxoviruses, like other viruses, lack a cellular structure and do not have a nucleus."
          },
          {
            question: "Unchordates are (a) false (b) segmented (c) unsegmented (d) semi chordates",
            answers: [
              { text: "False", correct: false },
              { text: "Segmented", correct: false },
              { text: "Unsegmented", correct: true },
              { text: "Semi chordates", correct: false }
            ],
            explanation: "Unchordates refer to animals that do not have a notochord, hence they are unsegmented and lack the defining characteristic of chordates."
          },
          {
            question: "Phycology is the study of (a) Algae (b) Viruses (c) Lichens (d) Fungi",
            answers: [
              { text: "Algae", correct: true },
              { text: "Viruses", correct: false },
              { text: "Lichens", correct: false },
              { text: "Fungi", correct: false }
            ],
            explanation: "Phycology is the study of algae."
          },
          {
            question: "Bacteria are causative agents of (a) Mumps (b) Tetanus (c) Smallpox (d) Flu",
            answers: [
              { text: "Mumps", correct: false },
              { text: "Tetanus", correct: true },
              { text: "Smallpox", correct: false },
              { text: "Flu", correct: false }
            ],
            explanation: "Bacteria such as Clostridium tetani are responsible for causing tetanus."
          },
          {
            question: "The following are arrangements of bacterial cells except (a) chain (b) cluster (c) tetrad (d) polygenia",
            answers: [
              { text: "Chain", correct: false },
              { text: "Cluster", correct: false },
              { text: "Tetrad", correct: false },
              { text: "Polygenia", correct: true }
            ],
            explanation: "Polygenia is not a recognized arrangement of bacterial cells."
          },
          {
            question: "Type of Nutrition found in virus is (a) Saprophytic (b) Autotrophic",
            answers: [
              { text: "Saprophytic", correct: false },
              { text: "Autotrophic", correct: false }
            ],
            explanation: "Viruses do not exhibit nutrition as they are obligate intracellular parasites."
          },
          {
            question: "Special species of fungi are called (a) Ascopore (b) Baridia (c) Spore",
            answers: [
              { text: "Ascopore", correct: false },
              { text: "Baridia", correct: false },
              { text: "Spore", correct: false }
            ],
            explanation: "The term for special species of fungi is not among the options provided."
          },
          {
            question: "The transformation of that ranges from simplest unicellular to complex multicellular is? (a) Archaeology (b) Anthropology (c) Geology (d) Paleontology",
            answers: [
              { text: "Archaeology", correct: false },
              { text: "Anthropology", correct: true },
              { text: "Geology", correct: false },
              { text: "Paleontology", correct: false }
            ],
            explanation: "Anthropology studies human societies and cultures, encompassing simple to complex transformations."
          },
          {
            question: "Hemi-chordates (a) True-chordates (b) False-chordates (c) None",
            answers: [
              { text: "True-chordates", correct: false },
              { text: "False-chordates", correct: true },
              { text: "None", correct: false }
            ],
            explanation: "Hemichordates are not true chordates; they belong to a separate phylum."
          },
          {
            question: "The DNA of bacteria is located at (a) Nucleus (b) Nucleoid (c) Central",
            answers: [
              { text: "Nucleus", correct: false },
              { text: "Nucleoid", correct: true },
              { text: "Central", correct: false }
            ],
            explanation: "Bacterial DNA is found in the nucleoid region, not within a membrane-bound nucleus."
          },
          {
            question: "The diplopods or millipedes are also known as (a) Myriapods (b) Cyclopods (c) Chilopoda (d) Lithobus",
            answers: [
              { text: "Myriapods", correct: true },
              { text: "Cyclopods", correct: false },
              { text: "Chilopoda", correct: false },
              { text: "Lithobus", correct: false }
            ],
            explanation: "Diplopods or millipedes are classified under the class Myriapoda."
          },
          {
            question: "Digestive cavity in coelenterates is ___________ (a) Epiderm (b) Enteron (c) Mesoderm (d) Mesentron",
            answers: [
              { text: "Epiderm", correct: false },
              { text: "Enteron", correct: true },
              { text: "Mesoderm", correct: false },
              { text: "Mesentron", correct: false }
            ],
            explanation: "The digestive cavity in coelenterates is called the enteron."
          },
          {
            question: "Internal budding occurs in phylum __________ (a) Porifera (b) Cnidaria (c) Nematoda (d) Annelida",
            answers: [
              { text: "Porifera", correct: false },
              { text: "Cnidaria", correct: true },
              { text: "Nematoda", correct: false },
              { text: "Annelida", correct: false }
            ],
            explanation: "Internal budding occurs in some cnidarians."
          },
          {
            question: "Bacteria that survive at cold sub-zero temperatures are called (a) Mesophiles (b) Psychrophiles (c) Nanophiles (d) Thermophiles",
            answers: [
              { text: "Mesophiles", correct: false },
              { text: "Psychrophiles", correct: true },
              { text: "Nanophiles", correct: false },
              { text: "Thermophiles", correct: false }
            ],
            explanation: "Psychrophiles are bacteria that thrive at cold temperatures, including sub-zero."
          },
          {
            question: "The simplest nervous system which consist nerve net without brain is",
            answers: [
              { text: "Aves", correct: false },
              { text: "Fishes and jelly fish", correct: false },
              { text: "Jelly fish and sea anemones", correct: true },
              { text: "Reptile and sea anemones", correct: false }
            ],
            explanation: "Jelly fish and sea anemones have a nerve net without a centralized brain."
          },
          {
            question: "The smallest microbe is",
            answers: [
              { text: "virus", correct: true },
              { text: "algae", correct: false },
              { text: "bacteria", correct: false },
              { text: "fungi", correct: false }
            ],
            explanation: "Viruses are considered the smallest microbes."
          },
          {
            question: "Ware waxy weting of cuticle of pine leaf is an adaption against",
            answers: [
              { text: "loss of nutrients", correct: false },
              { text: "stunted growth", correct: false },
              { text: "turgidity", correct: false },
              { text: "loss of water", correct: true }
            ],
            explanation: "The waxy coating on pine leaves helps prevent loss of water."
          },
          {
            question: "_____ is the region lying in between the endodermis and vascular bundle of plants",
            answers: [
              { text: "cortex", correct: false },
              { text: "medullary rays", correct: false },
              { text: "pith", correct: false },
              { text: "pericycle", correct: true }
            ],
            explanation: "Pericycle is located between the endodermis and vascular bundle."
          },
          {
            question: "In echinoderms excretion is through the ____",
            answers: [
              { text: "unidirectional mouth", correct: false },
              { text: "Anes of the alimentary canal", correct: false },
              { text: "all of the above", correct: false },
              { text: "pigment formation on the outside", correct: true }
            ],
            explanation: "Excretion in echinoderms occurs through pigment formation on the outside."
          },
          {
            question: "In every organism, given two name, the first name which starts with capital letter is scientifically called",
            answers: [
              { text: "Genius", correct: true },
              { text: "family", correct: false },
              { text: "species", correct: false },
              { text: "surname", correct: false }
            ],
            explanation: "The first name of a species, starting with a capital letter, represents the genus."
          },
          {
            question: "Arid land are generally characterized by",
            answers: [
              { text: "no precipitation", correct: false },
              { text: "moderate precipitation", correct: false },
              { text: "low precipitation", correct: true },
              { text: "hush", correct: false }
            ],
            explanation: "Arid lands typically have low precipitation."
          },
          {
            question: "Defence action in mandi bulate termite in its category tertiary is termite as its",
            answers: [
              { text: "Biosphere", correct: false },
              { text: "predicator", correct: false },
              { text: "Niche", correct: true },
              { text: "ecological concept", correct: false }
            ],
            explanation: "In ecological terms, a termite's defense action is part of its niche."
          },
          {
            question: "In development of centipedes into adult the display of the complement of segment and legs at hatchery stage is",
            answers: [
              { text: "polymorphic", correct: false },
              { text: "dimorphic", correct: false },
              { text: "monophorphic", correct: false },
              { text: "Epimorphic", correct: true }
            ],
            explanation: "Centipedes display the complement of segments and legs at hatchery stage in an epimorphic development."
          },
          {
            question: "_____ is a sub-peculiar structures from which the cilia arises",
            answers: [
              { text: "osculum", correct: false },
              { text: "ribosome", correct: false },
              { text: "membrane", correct: false },
              { text: "Kinetosome", correct: true }
            ],
            explanation: "Kinetosome is the structure from which cilia arise."
          },
          {
            question: "_____ is referred to as solenogasters",
            answers: [
              { text: "aplacophora", correct: true },
              { text: "mondascophora", correct: false }
            ],
            explanation: "Aplacophora is referred to as solenogasters."
          },
          {
            question: "Torsion is displayed by _____",
            answers: [
              { text: "gastropoda", correct: true },
              { text: "cotoda", correct: false },
              { text: "aplacophora", correct: false },
              { text: "monlacephora", correct: false }
            ],
            explanation: "Torsion is a characteristic of gastropods."
          },
          {
            question: "____ and ____ are the male and female gemantore drum",
            answers: [
              { text: "Antheridium and Archegonium", correct: true }
            ],
            explanation: "Antheridium and Archegonium are the male and female gametangia."
          },
          {
            question: "____ is also referred to as solenogasters",
            answers: [
              { text: "Aplacophora", correct: true },
              { text: "monolacephora", correct: false }
            ],
            explanation: "Aplacophora is also known as solenogasters."
          },
          {
            question: "____ is a unit that is composed of all the living population in a habitat",
            answers: [
              { text: "Atmosphere", correct: false },
              { text: "Biosphere", correct: true },
              { text: "Hydrosphere", correct: false },
              { text: "commonly", correct: false }
            ],
            explanation: "Biosphere includes all the living populations in a habitat."
          },
          {
            question: "Fungus and Algae form",
            answers: [
              { text: "lichen", correct: true },
              { text: "Aspello", correct: false },
              { text: "food web", correct: false },
              { text: "food chain", correct: false }
            ],
            explanation: "Fungus and algae together form lichen."
          },
          {
            question: "Plant that are desert are called",
            answers: [
              { text: "cacys", correct: false },
              { text: "saprohy", correct: false },
              { text: "hydrophytes", correct: false },
              { text: "xerophytes", correct: true }
            ],
            explanation: "Plants adapted to desert conditions are called xerophytes."
          },
          {
            question: "The function of the root cap is to _____",
            answers: [
              { text: "Protect the apex", correct: true },
              { text: "help in elongation & energy", correct: false },
              { text: "Transport water", correct: false }
            ],
            explanation: "The root cap protects the growing tip of the root."
          },
          {
            question: "Which of the Phyla represent above 75-80% of all animal species",
            answers: [
              { text: "chordata", correct: false },
              { text: "Arthropoda", correct: true },
              { text: "Sacomostigophora", correct: false },
              { text: "Nematoda", correct: false }
            ],
            explanation: "Arthropods represent the largest percentage of animal species."
          },
          {
            question: "Hierarchy of classification is",
            answers: [
              { text: "species, genes, family, order, class, division, kingdom", correct: false },
              { text: "kingdom, family, order, phylum, genes, species", correct: false },
              { text: "kingdom, phylum, class, order, family, genus, species", correct: true }
            ],
            explanation: "The hierarchy of biological classification is kingdom, phylum, class, order, family, genus, species."
          },
          {
            question: "Amoebocytes with pigment are",
            answers: [
              { text: "chomocytic", correct: false },
              { text: "archeaoccyte", correct: false },
              { text: "Chromocyte", correct: true }
            ],
            explanation: "Amoebocytes with pigment are called chromocytes."
          },
          {
            question: "An example of dicotyledonous plant is",
            answers: [
              { text: "pea", correct: true },
              { text: "rice", correct: false },
              { text: "maize", correct: false },
              { text: "sun flower", correct: false }
            ],
            explanation: "Pea is an example of a dicotyledonous plant."
          },
          {
            question: "Primary photosynthesis organ in plant is ____",
            answers: [
              { text: "leaf", correct: true },
              { text: "root", correct: false },
              { text: "stem", correct: false },
              { text: "flower", correct: false }
            ],
            explanation: "The primary organ for photosynthesis in plants is the leaf."
          },
          {
            question: "Medusa is dominant in",
            answers: [
              { text: "Hydra", correct: false },
              { text: "coral", correct: false },
              { text: "Aurelia", correct: true }
            ],
            explanation: "Medusa is the dominant form in the life cycle of Aurelia (jellyfish)."
          },
          {
            question: "Amoebocyte with pigment is",
            answers: [
              { text: "chonocyte", correct: false },
              { text: "Bibocyte", correct: false },
              { text: "Chromocyte", correct: true },
              { text: "Scholorcyte", correct: false }
            ],
            explanation: "An amoebocyte with pigment is called a chromocyte."
          },
          {
            question: "The body cavity of all Mollusca is ____ in nature",
            answers: [
              { text: "Stcellic", correct: false },
              { text: "Turosionic", correct: false },
              { text: "Haemocoeus (Hemocoel)", correct: true }
            ],
            explanation: "The body cavity (coelom) of all mollusks is hemocoelous (haemocoel)."
          },
          {
            question: "The seven class of Mollusca are derived from ancenstral Mollusca as a result of all one of ___",
            answers: [
              { text: "head", correct: true },
              { text: "foot", correct: false },
              { text: "shell", correct: false }
            ],
            explanation: "The seven classes of Mollusca are derived based on the characteristics of the head."
          },
          {
            question: "Reproduction in mollusca is sexual and ____",
            answers: [
              { text: "asexual", correct: true },
              { text: "monoecious", correct: false },
              { text: "dioecious", correct: false }
            ],
            explanation: "Reproduction in mollusks can be both sexual and asexual."
          },
          {
            question: "The most primitive multicellular animals in the phylum is _____",
            answers: [
              { text: "sarcomastigation", correct: false },
              { text: "Opicomplex", correct: false },
              { text: "porifera", correct: true },
              { text: "ciliophora", correct: false }
            ],
            explanation: "Sponges (phylum Porifera) are considered the most primitive multicellular animals."
          },
          {
            question: "The biological status of an organism in relation to the community including feeding activities, nature of its enemy and infration with other is refer to as",
            answers: [
              { text: "Niche", correct: true },
              { text: "community", correct: false },
              { text: "Population", correct: false },
              { text: "ecosystem", correct: false }
            ],
            explanation: "Niche refers to the role of an organism within its ecological community."
          },
          {
            question: "____ is the larva stage if annelid that relating them to the Mollusca",
            answers: [
              { text: "Trocophore", correct: true },
              { text: "zygosphere", correct: false },
              { text: "sporophere", correct: false },
              { text: "sporophll", correct: false }
            ],
            explanation: "Trocophore larva is a stage linking annelids and mollusks."
          },
          {
            question: "Gnathostomata are vertebrate ____",
            answers: [
              { text: "without jaws", correct: false },
              { text: "with jaws", correct: true },
              { text: "without tongues", correct: false },
              { text: "with tongue", correct: false }
            ],
            explanation: "Gnathostomata are vertebrates with jaws."
          },
          {
            question: "Well developed stem, and root is for____",
            answers: [
              { text: "pteridophytes", correct: false },
              { text: "thallophyte", correct: false },
              { text: "spermatophyte", correct: true },
              { text: "bryophyte", correct: false }
            ],
            explanation: "Plants with well-developed stems and roots belong to the spermatophytes (seed plants)."
          },
          {
            question: "Animal in the Polyplacophora are commonly known as the ____",
            answers: [
              { text: "Snail", correct: false },
              { text: "fruit", correct: false },
              { text: "phoran", correct: false },
              { text: "chitons", correct: true }
            ],
            explanation: "Animals in the Polyplacophora class are commonly known as chitons."
          },
          {
            question: "Chiton generally have the ability to liver in _____",
            answers: [
              { text: "cold water only", correct: false },
              { text: "warm water only", correct: false },
              { text: "cold and warm water", correct: true }
            ],
            explanation: "Chitons can live in both cold and warm waters."
          },
          {
            question: "Which of the following is an example of Agnathans?",
            answers: [
              { text: "Scallop", correct: false },
              { text: "Lamprey", correct: true },
              { text: "Agama lizard", correct: false },
              { text: "Octopus", correct: false }
            ],
            explanation: "Lamprey is an example of Agnathans (jawless fish)."
          },
          {
            question: "Which one of these is regards as the lowest plant",
            answers: [
              { text: "Thallophyte", correct: true },
              { text: "Bryophyte", correct: false },
              { text: "Pteridophyte", correct: false },
              { text: "Spermatophyte", correct: false }
            ],
            explanation: "Thallophytes are considered the lowest plants."
          },
          {
            question: "An example of filopodia is",
            answers: [
              { text: "Axopodia", correct: true },
              { text: "Plystomella", correct: false },
              { text: "Euglena", correct: false }
            ],
            explanation: "Axopodia are examples of filopodia."
          },
          {
            question: "Pigment producing parasite is _____ that lives inside the body blood capsule",
            answers: [
              { text: "plasmodium", correct: true },
              { text: "Amoeba", correct: false }
            ],
            explanation: "Plasmodium is a pigment-producing parasite that lives in the blood capsules of humans."
          },
          {
            question: "Another re-organisation is found in",
            answers: [
              { text: "Autogamy", correct: true },
              { text: "Oogamy", correct: false },
              { text: "synagamy", correct: false }
            ],
            explanation: "Autogamy refers to self-fertilization."
          },
          {
            question: "Annelids use _____ for excretion",
            answers: [
              { text: "flame cell", correct: false },
              { text: "lung book", correct: false },
              { text: "Malpighian tubule", correct: false },
              { text: "Nephridia", correct: true }
            ],
            explanation: "Annelids use nephridia for excretion."
          },
          {
            question: "Excretory product of reptile is",
            answers: [
              { text: "Tannin", correct: false },
              { text: "Equamate", correct: false },
              { text: "Crocodilians", correct: false },
              { text: "Uric acid", correct: true }
            ],
            explanation: "Reptiles excrete uric acid as their excretory product."
          },
          {
            question: "The fat soluble pigment parting responsible for flower found in the",
            answers: [
              { text: "Chromoplasts", correct: true },
              { text: "Chloroplast", correct: false },
              { text: "Fatty layer", correct: false },
              { text: "vacuole of epidermic cell of petals", correct: false }
            ],
            explanation: "Chromoplasts are responsible for the fat-soluble pigment found in flowers."
          },
          {
            question: "Endoskeleton in sponge is made of calcenious or ____",
            answers: [
              { text: "bone", correct: false },
              { text: "Horny spicules", correct: true },
              { text: "iron", correct: false },
              { text: "none of the above", correct: false }
            ],
            explanation: "The endoskeleton in sponges is made of calcareous or horny spicules."
          },
          {
            question: "Another name for food chain is ____",
            answers: [
              { text: "Food sequence", correct: false },
              { text: "feeding sequence", correct: false },
              { text: "Nutritional sequence", correct: true }
            ],
            explanation: "Another name for a food chain is a nutritional sequence."
          },
          {
            question: "The following are classes of Platyhelminthes except",
            answers: [
              { text: "cestoda", correct: false },
              { text: "monogenea", correct: false },
              { text: "trematoda", correct: false },
              { text: "sarcodina", correct: true }
            ],
            explanation: "Sarcodina is not a class of Platyhelminthes."
          },
          {
            question: "Amoeba use _____ for locomotion",
            answers: [
              { text: "cilia", correct: false },
              { text: "pseudopodia", correct: true },
              { text: "flagella", correct: false }
            ],
            explanation: "Amoeba moves using pseudopodia."
          },
          {
            question: "____ is a pigment produced parasite which lives in the blood capsules of man",
            answers: [
              { text: "Tick", correct: false },
              { text: "Lice", correct: false },
              { text: "Plasmodium", correct: true }
            ],
            explanation: "Plasmodium is a pigment-producing parasite that lives in human blood."
          },
          {
            question: "The transition point between a sea and river is called",
            answers: [
              { text: "Hypolimniom", correct: false },
              { text: "sediment", correct: false },
              { text: "Estuary", correct: true },
              { text: "Epinnium", correct: false }
            ],
            explanation: "An estuary is the transition zone between a river and the sea."
          },
          {
            question: "In stratification \"A storey tree have height ranging from",
            answers: [
              { text: "50m – 70m", correct: false },
              { text: "7m - 40m", correct: false },
              { text: "40m – 50m", correct: true },
              { text: "15m - 40m", correct: false }
            ],
            explanation: "A storey tree has a height ranging from 40m to 50m in stratification."
          },
          {
            question: "Fresh water habitat include one of the following except",
            answers: [
              { text: "lake", correct: false },
              { text: "pond", correct: false },
              { text: "river", correct: false },
              { text: "ocean", correct: true }
            ],
            explanation: "An ocean is not a freshwater habitat."
          },
          {
            question: "The arrangement of leaves on stem is called",
            answers: [
              { text: "peltate", correct: false },
              { text: "whorled", correct: false },
              { text: "varication", correct: false },
              { text: "phyllotaxy", correct: true }
            ],
            explanation: "The arrangement of leaves on a stem is called phyllotaxy."
          },
          


        
        // Add more questions for Biology until you have 30
    ],
    chemistry: [
      {
        question: "Which of the following is an allotrope of carbon?",
        answers: [
          { text: "Diamond" , correct: true },
          { text: "Water", correct: false },
          { text: "Oxygen", correct: false },
          { text: "Sodium", correct: false }
        ],
        explanation: "Diamond is an allotrope of carbon, characterized by its unique crystalline structure."
      },
      { question: "What is the chemical formula for table salt?", answers: [{ text: "NaCl", correct: true }, { text: "KCl", correct: false }, { text: "Na2CO3", correct: false }, { text: "K2SO4", correct: false }], explanation: "Table salt is chemically known as sodium chloride (NaCl)." },
        { question: "Which element is known as the 'King of Chemicals'?", answers: [{ text: "Sulfuric Acid", correct: true }, { text: "Hydrochloric Acid", correct: false }, { text: "Nitric Acid", correct: false }, { text: "Acetic Acid", correct: false }], explanation: "Sulfuric Acid is often called the 'King of Chemicals' due to its wide range of uses." },
        {
            question: "The third electronegativity after fluorine is ______",
            answers: [
                { text: "Chloride", correct: false },
                { text: "Bromide", correct: false },
                { text: "Iodine", correct: true },
                { text: "Astatine", correct: false }
            ],
            explanation: "The third most electronegative element after fluorine is iodine."
        },
        {
            question: "Bromination of ethene is done in the presence of _______",
            answers: [
                { text: "AlCl3", correct: false },
                { text: "CCl4", correct: true },
                { text: "AlBr", correct: false },
                { text: "HBr", correct: false }
            ],
            explanation: "Bromination of ethene is typically carried out in the presence of carbon tetrachloride (CCl4) as a solvent."
        },
        {
            question: "Two nitrogen atoms form a stable (Ne) configuration by sharing _______ pair of electrons to form a covalent bond",
            answers: [
                { text: "2", correct: false },
                { text: "1", correct: false },
                { text: "3", correct: true },
                { text: "4", correct: false }
            ],
            explanation: "Nitrogen atoms share three pairs of electrons to form a triple bond."
        },
        {
            question: "The IUPAC name of the compound CH3CH2CH=CHC≡CCH3",
            answers: [
                { text: "Hept,3-en-5,yne", correct: false },
                { text: "Hept-3-en-5-yne", correct: false },
                { text: "Hept-4-en-2-yne", correct: true },
                { text: "Hept-4-en-2,yne", correct: false }
            ],
            explanation: "The correct IUPAC name for CH3CH2CH=CHC≡CCH3 is Hept-4-en-2-yne."
        },
        {
            question: "How many carbon atoms are present in one molecule of 2-methylpentane",
            answers: [
                { text: "6", correct: true },
                { text: "5", correct: false },
                { text: "3", correct: false },
                { text: "4", correct: false }
            ],
            explanation: "2-methylpentane has a total of six carbon atoms."
        },
        {
            question: "Any species that contain an unpaired electron is called",
            answers: [
                { text: "Ionic", correct: false },
                { text: "Anion", correct: false },
                { text: "Free radical", correct: true },
                { text: "Cation", correct: false }
            ],
            explanation: "A free radical is a species that contains an unpaired electron."
        },
        {
            question: "Ethanol and dimethylether are best considered _______",
            answers: [
                { text: "Stereoisomers", correct: false },
                { text: "Enantiomers", correct: false },
                { text: "Structural", correct: true },
                { text: "Diaster", correct: false }
            ],
            explanation: "Ethanol and dimethylether are structural isomers, as they have the same molecular formula but different structures."
        },
        {
            question: "The donor ligand that shares a donor atom is",
            answers: [
                { text: "Bidentate", correct: false },
                { text: "Monodentate", correct: true },
                { text: "Multidentate", correct: false },
                { text: "Tetradentate", correct: false }
            ],
            explanation: "A monodentate ligand shares a single donor atom with the central atom."
        },
        {
            question: "Nitrogen forms which type of bond",
            answers: [
                { text: "Triple bond", correct: true },
                { text: "Double bond", correct: false },
                { text: "Single bond", correct: false }
            ],
            explanation: "Nitrogen typically forms a triple bond (N≡N) in diatomic nitrogen."
        },
        {
            question: "Sodium donates how many electrons",
            answers: [
                { text: "4", correct: false },
                { text: "1", correct: true },
                { text: "3", correct: false },
                { text: "2", correct: false }
            ],
            explanation: "Sodium donates one electron to achieve a stable electronic configuration."
        },
        {
            question: "During the 2022 COVID-19 pandemic, remdesivir was approved or authorized for emergency use to treat COVID-19 in around 50 countries. If the molecular formula of remdesivir is C27H35N6O8P, the percentage carbon and phosphorus composition in remdesivir are [C = 12, N = 14, O = 16 and P = 31]",
            answers: [
                { text: "55.82% and 5.12% respectively", correct: false },
                { text: "5.81% and 53.82% respectively", correct: false },
                { text: "21.26% and 13.5% respectively", correct: false },
                { text: "53.82% and 5.15% respectively", correct: true }
            ],
            explanation: "Using the molecular formula and atomic weights, the percentage composition of carbon and phosphorus can be calculated."
        },
        {
            question: "Alkenes undergo the following reactions except",
            answers: [
                { text: "Combustion", correct: false },
                { text: "Hydrogenation", correct: false },
                { text: "Substitution", correct: true },
                { text: "Polymerization", correct: false }
            ],
            explanation: "Alkenes typically do not undergo substitution reactions; they undergo addition reactions instead."
        },
        {
            question: "Chlorine has an electronegativity value of 3.0. What type of bond is present in Cl-Cl molecule?",
            answers: [
                { text: "Dative covalent", correct: false },
                { text: "Electrovalent", correct: false },
                { text: "Covalent", correct: true },
                { text: "Polar covalent", correct: false }
            ],
            explanation: "The bond between two chlorine atoms in Cl2 is a covalent bond."
        },
        {
            question: "How many shells are in the nucleus of calcium",
            answers: [
                { text: "One", correct: false },
                { text: "Two", correct: false },
                { text: "Three", correct: false },
                { text: "Four", correct: true }
            ],
            explanation: "Calcium has four electron shells, corresponding to its position in the fourth period of the periodic table."
        },
        {
            question: "Reaction between C2H2 and HBr is called",
            answers: [
                { text: "Substitution", correct: false },
                { text: "Oxidation", correct: false },
                { text: "Addition", correct: true },
                { text: "Polymerization", correct: false }
            ],
            explanation: "The reaction between C2H2 (acetylene) and HBr is an addition reaction."
        },
        {
            question: "The name of the compound CH3CH2CH=CHC=CCH3 is",
            answers: [
                { text: "Hept, 4, en - 2, yne", correct: false },
                { text: "Hept-4-en-2-yne", correct: true },
                { text: "Hept-3-en-5-yne", correct: false },
                { text: "Hept,3-en-5,yne", correct: false }
            ],
            explanation: "The correct IUPAC name for CH3CH2CH=CHC≡CCH3 is Hept-4-en-2-yne."
        },
        {
            question: "Which of the following has the highest boiling point",
            answers: [
                { text: "Phenol", correct: false },
                { text: "Ethanol", correct: false },
                { text: "Methanol", correct: false },
                { text: "Propanol", correct: true }
            ],
            explanation: "Propanol has the highest boiling point among the given alcohols due to increased molecular weight and stronger intermolecular forces."
        },
        {
            question: "2,4,4-trimethylpent-1-ene is an example of an isomer of",
            answers: [
                { text: "Octane", correct: false },
                { text: "Octene", correct: true },
                { text: "Heptane", correct: false },
                { text: "Heptene", correct: false }
            ],
            explanation: "2,4,4-trimethylpent-1-ene is an isomer of octene, having the same molecular formula but a different structure."
        },
        {
            question: "Covalent character in group VII",
            answers: [
                { text: "Decreases down the group", correct: true },
                { text: "Increases down the group", correct: false },
                { text: "Decreases across the period", correct: false },
                { text: "Increases across the period", correct: false }
            ],
            explanation: "Covalent character decreases down the group in Group VII elements."
        },
        {
            question: "Which one has the highest boiling point",
            answers: [
                { text: "Pentane", correct: true },
                { text: "Methane", correct: false },
                { text: "Propane", correct: false },
                { text: "Ethane", correct: false }
            ],
            explanation: "Pentane has the highest boiling point due to its larger molecular size and stronger van der Waals forces."
        },
        {
            question: "Group 2 element which doesn't react with oxygen is",
            answers: [
                { text: "Be", correct: true },
                { text: "Mg", correct: false },
                { text: "Ba", correct: false },
                { text: "Ca", correct: false }
            ],
            explanation: "Beryllium (Be) does not react with oxygen under normal conditions."
        },
        {
            question: "Which of the following is a halide",
            answers: [
                { text: "Cl2", correct: false },
                { text: "HCN", correct: false },
                { text: "AlCl3", correct: true },
                { text: "NaH", correct: false }
            ],
            explanation: "AlCl3 is a halide, as it contains a halogen (chlorine) bonded to aluminum."
        },
        {
            question: "The reaction between C3H4 + H2O = CH3COCH3 takes place in the presence of",
            answers: [
                { text: "H2SO4/HgSO4", correct: true },
                { text: "H2SO3/HgSO3", correct: false },
                { text: "HCl/HgSO4", correct: false },
                { text: "H2SO4/NaOH", correct: false }
            ],
            explanation: "This reaction occurs in the presence of sulfuric acid (H2SO4) and mercuric sulfate (HgSO4)."
        },
        {
            question: "Which of the following has the greatest ionization energy",
            answers: [
                { text: "Kr", correct: false },
                { text: "Xe", correct: false },
                { text: "Ar", correct: true }
            ],
            explanation: "Argon (Ar) has the greatest ionization energy due to its smaller atomic radius and greater effective nuclear charge."
        },
        {
            question: "Isomerization of alkanes occur in the presence of __________",
            answers: [
                { text: "SO3/300℃", correct: false },
                { text: "AlCl3/300℃", correct: true },
                { text: "CCl4/300℃", correct: false },
                { text: "HCl/300℃", correct: false }
            ],
            explanation: "Isomerization of alkanes occurs in the presence of aluminum chloride (AlCl3) at 300℃."
        },
        {
            question: "When pentene is burned in air ________ is given off",
            answers: [
                { text: "Carbon IV oxide", correct: true },
                { text: "Pentanol", correct: false },
                { text: "Pentanal", correct: false },
                { text: "Pentene", correct: false }
            ],
            explanation: "Combustion of pentene in air produces carbon dioxide (CO2) and water."
        },
        {
            question: "CaCO3 is a component of the following except",
            answers: [
                { text: "Limestone", correct: false },
                { text: "Graphite", correct: true },
                { text: "Snail shell", correct: false }
            ],
            explanation: "Calcium carbonate (CaCO3) is not a component of graphite."
        },
        {
            question: "CaCO3 exists in _______",
            answers: [
                { text: "Snail shell", correct: false },
                { text: "Limestone", correct: false },
                { text: "Wood", correct: true },
                { text: "Sand", correct: false }
            ],
            explanation: "Calcium carbonate (CaCO3) can be found in limestone and snail shells, but not in wood."
        },
        {
            question: "The force that exists between noble gases and non-polar compounds is",
            answers: [
                { text: "Van der Waal", correct: false },
                { text: "Dispersion forces", correct: true },
                { text: "Hydrogen bonds", correct: false },
                { text: "Covalent", correct: false }
            ],
            explanation: "The forces between noble gases and non-polar compounds are dispersion forces (also known as London dispersion forces)."
        },
        {
            question: "The H-C-H bond angle in CH4 is",
            answers: [
                { text: "120°", correct: false },
                { text: "90°", correct: false },
                { text: "109.5°", correct: true },
                { text: "180°", correct: false }
            ],
            explanation: "Methane (CH4) has a tetrahedral structure with an H-C-H bond angle of 109.5°."
        },
        {
            question: "How many carbon molecules are in 2-methylpentane",
            answers: [
                { text: "3", correct: false },
                { text: "6", correct: true },
                { text: "5", correct: false },
                { text: "4", correct: false }
            ],
            explanation: "2-methylpentane has a total of six carbon atoms."
        },
        {
            question: "Alkane undergo the following except",
            answers: [
                { text: "Combustion", correct: false },
                { text: "Hydrogenation", correct: false },
                { text: "Substitution", correct: false },
                { text: "Polymerization", correct: true }
            ],
            explanation: "Alkanes do not undergo polymerization reactions; they typically undergo combustion, hydrogenation, and substitution."
        },
        {
            question: "The following compounds are polar solvent",
            answers: [
                { text: "CH4", correct: false },
                { text: "HF", correct: true },
                { text: "NH3", correct: false },
                { text: "H2O", correct: false }
            ],
            explanation: "HF (hydrofluoric acid) is a polar solvent due to the significant electronegativity difference between hydrogen and fluorine."
        },
        {
            question: "One of the following is an alkali metal",
            answers: [
                { text: "Group 3", correct: false },
                { text: "Group 0", correct: false },
                { text: "Group 1", correct: true },
                { text: "Group 2", correct: false }
            ],
            explanation: "Alkali metals are found in Group 1 of the periodic table."
        },
        {
            question: "Li2O is best prepared by ______ of Li2O2 at 450℃",
            answers: [
                { text: "Substitution", correct: false },
                { text: "Thermal", correct: true },
                { text: "Oxidation", correct: false },
                { text: "Reduction", correct: false }
            ],
            explanation: "Li2O is prepared by the thermal decomposition of Li2O2 at 450℃."
        },
        {
            question: "Which of the following is not correct",
            answers: [
                { text: "The longer the bond length, the higher the bond energy", correct: true },
                { text: "The shorter the bond length, the greater the s character", correct: false },
                { text: "Sigma bond is stronger than pi bond", correct: false }
            ],
            explanation: "The statement 'The longer the bond length, the higher the bond energy' is not correct; bond energy typically decreases with increasing bond length."
        },
        {
            question: "The process of converting large alkanes to smaller ones, alkenes and hydrogen is _______",
            answers: [
                { text: "Knocking", correct: false },
                { text: "Thermal cracking", correct: true },
                { text: "Nitration", correct: false },
                { text: "Isomerization", correct: false }
            ],
            explanation: "Thermal cracking is the process of breaking down large alkanes into smaller alkanes, alkenes, and hydrogen."
        },
        {
            question: "The high melting and boiling point in ionic bonds is due to",
            answers: [
                { text: "Strong electrovalent bond", correct: true },
                { text: "Intermolecular force", correct: false },
                { text: "Intramolecular force", correct: false },
                { text: "Dipole moment", correct: false }
            ],
            explanation: "Ionic compounds have high melting and boiling points due to the strong electrovalent (ionic) bonds between ions."
        },
        {
            question: "The type of bond between carbon-carbon triple bond in ethyne is",
            answers: [
                { text: "Three sigma bonds", correct: false },
                { text: "Three pi bonds", correct: false },
                { text: "One sigma bond and two pi bonds", correct: true },
                { text: "Two sigma bonds and one pi bond", correct: false }
            ],
            explanation: "In ethyne (C2H2), the carbon-carbon triple bond consists of one sigma bond and two pi bonds."
        },
        {
            question: "How many isomers does the compound C4H8 has",
            answers: [
                { text: "4", correct: false },
                { text: "3", correct: true },
                { text: "5", correct: false },
                { text: "2", correct: false }
            ],
            explanation: "C4H8 (butene) has three isomers: 1-butene, 2-butene, and isobutylene."
        },
        {
            question: "How many electrons are present in the outermost shell of Mg",
            answers: [
                { text: "2", correct: true },
                { text: "1", correct: false },
                { text: "3", correct: false },
                { text: "4", correct: false }
            ],
            explanation: "Magnesium (Mg) has 2 electrons in its outermost shell."
        },
        {
            question: "The hybridization present in Alkenes is",
            answers: [
                { text: "Sp", correct: false },
                { text: "Sp3", correct: false },
                { text: "Spp", correct: false },
                { text: "Sp2", correct: true }
            ],
            explanation: "Alkenes typically have sp2 hybridization, where each carbon atom forms three sigma bonds and one pi bond."
        },
        {
            question: "Which of the following is responsible for high melting point and boiling point",
            answers: [
                { text: "Polarization", correct: false },
                { text: "Dipole moment", correct: false },
                { text: "Strong electrovalent compound", correct: true },
                { text: "Intermolecular force", correct: false }
            ],
            explanation: "High melting and boiling points are characteristic of substances with strong electrovalent (ionic) bonds."
        },
        {
            question: "Differences in the properties of isomers is due to",
            answers: [
                { text: "Differences in the arrangement of carbon atoms", correct: true },
                { text: "Differences in the molecular weight", correct: false },
                { text: "Differences in the functional groups", correct: false },
                { text: "Differences in the boiling points", correct: false }
            ],
            explanation: "Isomers have different properties primarily because of their different arrangements of carbon atoms."
        },
        {
            question: "Characteristics of metals with high electrical conductivity and high boiling point are due to",
            answers: [
                { text: "Electrovalent bond", correct: false },
                { text: "Covalent bond", correct: false },
                { text: "Metallic bond", correct: true },
                { text: "Dative bond", correct: false }
            ],
            explanation: "Metals exhibit high electrical conductivity and boiling points due to metallic bonding."
        },
        {
            question: "Ammonium ion is an example of ______ bond",
            answers: [
                { text: "Covalent bond", correct: false },
                { text: "Ionic bond", correct: false },
                { text: "Metallic bond", correct: false },
                { text: "Dative bond", correct: true }
            ],
            explanation: "The ammonium ion (NH4+) forms through a dative covalent bond between ammonia (NH3) and a proton (H+)."
        },
        {
            question: "What is the color of LiO2 and Na2O oxides",
            answers: [
                { text: "Orange", correct: false },
                { text: "White", correct: true },
                { text: "Pink", correct: false },
                { text: "Yellow", correct: false }
            ],
            explanation: "Both LiO2 and Na2O oxides are white in color."
        },
        {
            question: "The increase in electronegativity across a period is as a result of the increasing effective ______ charge",
            answers: [
                { text: "Positive", correct: false },
                { text: "Negative", correct: false },
                { text: "Nuclear", correct: true },
                { text: "Electronic", correct: false }
            ],
            explanation: "Electronegativity increases across a period due to the increasing nuclear charge experienced by the electrons."
        },
        {
            question: "Ra is an example of ______",
            answers: [
                { text: "A stable element", correct: false },
                { text: "Inert gas", correct: false },
                { text: "Radioactive", correct: true },
                { text: "Transition metal", correct: false }
            ],
            explanation: "Radium (Ra) is a radioactive element."
        },
        {
            question: "Which of the following compounds possesses an ionic bond",
            answers: [
                { text: "CH4", correct: false },
                { text: "MgCl", correct: true },
                { text: "NH3BF3", correct: false },
                { text: "NH2", correct: false }
            ],
            explanation: "MgCl (magnesium chloride) contains an ionic bond between magnesium (Mg) and chlorine (Cl)."
        },
        {
            question: "Group I and II elements are generally referred to as _________ elements",
            answers: [
                { text: "d-block", correct: false },
                { text: "f-block", correct: false },
                { text: "s-block", correct: true },
                { text: "p-block", correct: false }
            ],
            explanation: "Group I (alkali metals) and Group II (alkaline earth metals) elements are found in the s-block of the periodic table."
        },
        {
            question: "The product formed from halogenation of 4-methylpent-1-ene with HCl is",
            answers: [
                { text: "4-chloro-2-methylpentane", correct: false },
                { text: "3-chloro-4-methylpentane", correct: false },
                { text: "4-methyl-1-chloromethane", correct: false },
                { text: "2-chloro-4-methylpentane", correct: true }
            ],
            explanation: "Halogenation of 4-methylpent-1-ene with HCl forms 2-chloro-4-methylpentane."
        },
        {
            question: "A suitable reagent to distinguish between alkenes and alkynes is",
            answers: [
                { text: "Bromine water", correct: false },
                { text: "Ammoniacal silver nitrate", correct: true },
                { text: "KMnO4", correct: false },
                { text: "Ammoniacal silver chloride", correct: false }
            ],
            explanation: "Ammoniacal silver nitrate (Tollen's reagent) is used to distinguish between alkenes and alkynes."
        },
        {
            question: "Compounds like silver halide and zinc sulfide show covalent character in ionic bonding due to",
            answers: [
                { text: "Weak force of attraction", correct: false },
                { text: "Strong force of attraction", correct: false },
                { text: "Polarization of ions", correct: true },
                { text: "Electronegativity", correct: false }
            ],
            explanation: "Silver halides and zinc sulfide exhibit covalent character in ionic bonds due to polarization of ions."
        },
        {
            question: "The type of bond present in NH3BF3 is",
            answers: [
                { text: "Covalent bond", correct: false },
                { text: "Hydrogen bond", correct: false },
                { text: "Ionic bond", correct: false },
                { text: "Dative covalent bond", correct: true }
            ],
            explanation: "NH3BF3 (ammonia boron trifluoride) involves a dative covalent bond between ammonia (NH3) and boron trifluoride (BF3)."
        },
        {
            question: "Ammonia has how many lone electrons",
            answers: [
                { text: "1", correct: true },
                { text: "2", correct: false },
                { text: "3", correct: false },
                { text: "4", correct: false }
            ],
            explanation: "Ammonia (NH3) has 1 lone pairs of electrons."
        },
        {
            question: "3-methylpentan-3-ol and 2-methylpentan-2-ol are types of ________ and _____________alkanol respectively",
            answers: [
                { text: "Secondary and Tertiary", correct: false },
                { text: "Tertiary and Tertiary", correct: false },
                { text: "Tertiary and Secondary", correct: true },
                { text: "Secondary and Secondary", correct: false }
            ],
            explanation: "3-methylpentan-3-ol is a tertiary alcohol, whereas 2-methylpentan-2-ol is a secondary alcohol."
        },
        {
            question: "Bromine molecule is a _________ compound",
            answers: [
                { text: "Covalent", correct: true },
                { text: "None of the above", correct: false },
                { text: "Electrovalent", correct: false },
                { text: "Dative", correct: false }
            ],
            explanation: "Bromine (Br2) exists as a covalent molecule."
        },
        {
            question: "The gas liberated when ionic hydride of group II elements react with water is",
            answers: [
                { text: "Iodine", correct: false },
                { text: "Hydrogen", correct: true },
                { text: "Bromine", correct: false },
                { text: "Chlorine", correct: false }
            ],
            explanation: "Group II ionic hydrides liberate hydrogen gas (H2) when they react with water."
        },
        {
            question: "3-methylbutan-2-ol and 2-methylbutan-1-ol are isomeric with",
            answers: [
                { text: "4-methylbutan-1-ol", correct: false },
                { text: "1-methylbutan-1-ol", correct: false },
                { text: "3-methylbutan-3-ol", correct: false },
                { text: "2-methylbutan-2-ol", correct: true }
            ],
            explanation: "3-methylbutan-2-ol and 2-methylbutan-1-ol are isomers with 2-methylbutan-2-ol."
        },
        {
            question: "The IUPAC name of the compound (CH3)2CHC≡CCH3",
            answers: [
                { text: "2-Methylpent-3-yne", correct: false },
                { text: "4,4-dimethylbut-2-yne", correct: false },
                { text: "1,1-dimethylbut-2-yne", correct: false },
                { text: "4-methylpent-2-yne", correct: true }
            ],
            explanation: "The compound (CH3)2CHC≡CCH3 is 4-methylpent-2-yne."
        },
        {
            question: "__________ is used for etching a glass",
            answers: [
                { text: "HF", correct: true },
                { text: "PK", correct: false },
                { text: "KrF2", correct: false },
                { text: "Cl2", correct: false }
            ],
            explanation: "Hydrofluoric acid (HF) is used for etching glass."
        },
        {
            question: "The following are polar except",
            answers: [
                { text: "HF", correct: true },
                { text: "NH3", correct: false },
                { text: "H2O", correct: false },
                { text: "CH4", correct: false }
            ],
            explanation: "HF is polar, whereas NH3, H2O, and CH4 are non-polar."
        },
        {
            question: "The reaction of C3H4 + H2O → CH3COCH3 takes place in the presence of",
            answers: [
                { text: "H2SO4/NaOH", correct: false },
                { text: "H2SO3/HgSO3", correct: false },
                { text: "HCl/HgSO4", correct: false },
                { text: "H2SO4/HgSO4", correct: true }
            ],
            explanation: "The reaction of C3H4 (propyne) with H2O (water) to form CH3COCH3 (acetone) takes place in the presence of H2SO4 (sulfuric acid) and HgSO4 (mercuric sulfate)."
        },
        {
            question: "What is used to differentiate between alkene and alkyne",
            answers: [
                { text: "Ammoniacal silver chloride", correct: false },
                { text: "Bromine water", correct: false },
                { text: "Ammoniacal silver nitrate", correct: true },
                { text: "H2SO4", correct: false }
            ],
            explanation: "Ammoniacal silver nitrate (Tollen's reagent) is used to differentiate between alkenes and alkynes."
        },
        {
            question: "A suitable reagent to distinguish between Alkane and Alkene is ___________",
            answers: [
                { text: "Bromine water", correct: true },
                { text: "Ammoniacal silver nitrate", correct: false },
                { text: "Ammoniacal silver chloride", correct: false },
                { text: "H2SO4", correct: false }
            ],
            explanation: "Bromine water is used to differentiate between alkanes and alkenes."
        },
        {
            question: "Which of the following compounds is used to manufacture gym equipment",
            answers: [
                { text: "MgO3", correct: false },
                { text: "MgCO3", correct: true },
                { text: "MgNO3", correct: false }
            ],
            explanation: "Magnesium carbonate (MgCO3) is used in the manufacturing of gym equipment."
        },
        {
            question: "Polar molecules such as HCl have _________ dipoles",
            answers: [
                { text: "Induced dipole", correct: false },
                { text: "Dipole dipole", correct: false },
                { text: "Instantaneous dipole", correct: true },
                { text: "Permanent dipole", correct: false }
            ],
            explanation: "Polar molecules like HCl have instantaneous dipoles."
        },
        {
            question: "Molten sodium chloride is called",
            answers: [
                { text: "Common salt", correct: false },
                { text: "Rock salt", correct: false },
                { text: "Brine", correct: false },
                { text: "Cryolite", correct: true }
            ],
            explanation: "Molten sodium chloride (NaCl) is known as cryolite."
        },
        {
            question: "How many isomers are possible for C4H8",
            answers: [
                { text: "4", correct: false },
                { text: "6", correct: false },
                { text: "2", correct: false },
                { text: "8", correct: false }
            ],
            explanation: "The number of isomers for C4H8 (butene) is actually 3: 1-butene, 2-butene, and isobutylene."
        },
        {
            question: "The electronic configuration of bromine is",
            answers: [
                { text: "[Xe]3d104d5 5s2", correct: false },
                { text: "[Ar]3d104s2 5p5", correct: true },
                { text: "[Ne]4f4 5d106s2 6p5", correct: false },
                { text: "[He]3d104s2 4p3", correct: false }
            ],
            explanation: "The electronic configuration of bromine (Br) is [Ar]3d104s2 5p5."
        },
        {
            question: "The calcination, slatting and carbonation steps involved in obtaining _________ from limestone",
            answers: [
                { text: "MgO", correct: false },
                { text: "MgCO3", correct: false },
                { text: "CaCO3", correct: true },
                { text: "CaO", correct: false }
            ],
            explanation: "The steps involving calcination, slaking, and carbonation lead to the formation of CaCO3 (calcium carbonate) from limestone."
        },
        {
            question: "The solubility of group II metal halides ___________ down the group",
            answers: [
                { text: "Remain constant", correct: false },
                { text: "Undetermined", correct: false },
                { text: "Increases", correct: false },
                { text: "Decreases", correct: true }
            ],
            explanation: "The solubility of group II metal halides decreases down the group."
        },
        {
            question: "The tendency of atom to attract bonding pair to itself is",
            answers: [
                { text: "Electronegativity", correct: true },
                { text: "Dipole", correct: false }
            ],
            explanation: "The tendency of an atom to attract a bonding pair of electrons towards itself is known as electronegativity."
        },
        {
            question: "Group 2 element that does not form peroxide and superoxide is",
            answers: [
                { text: "Li", correct: true },
                { text: "Na", correct: false },
                { text: "Cs", correct: false },
                { text: "K", correct: false }
            ],
            explanation: "Lithium (Li) is the Group 2 element that does not form peroxide and superoxide."
        },
        {
            question: "Which of the following alkanes has the highest boiling point",
            answers: [
                { text: "Ethane", correct: false },
                { text: "Propane", correct: false },
                { text: "Butane", correct: false },
                { text: "Pentane", correct: true }
            ],
            explanation: "Pentane (C5H12) has the highest boiling point among the given alkanes."
        },
        {
            question: "How many carbon atoms are present in one molecule of 2-methylpentane",
            answers: [
                { text: "6", correct: true },
                { text: "5", correct: false },
                { text: "3", correct: false },
                { text: "4", correct: false }
            ],
            explanation: "2-methylpentane has 6 carbon atoms in its molecule."
        },
        {
            question: "The correct decreasing order of polarization cation is",
            answers: [
                { text: "Mg2+ > Al3+ > Na+", correct: false },
                { text: "Al3+ < Mg2+ < Na+", correct: false },
                { text: "Al3+ > Mg2+ > Na+", correct: true },
                { text: "Al3+ > Na+ > Mg2+", correct: false }
            ],
            explanation: "The correct order of decreasing polarization of cations is Al3+ > Mg2+ > Na+."
        },
        {
            question: "Any species that contain an unpaired electron is called",
            answers: [
                { text: "Ionic", correct: false },
                { text: "Anion", correct: false },
                { text: "Free radicals", correct: true },
                { text: "Cation", correct: false }
            ],
            explanation: "Species containing unpaired electrons are called free radicals."
        },
        {
            question: "Ammonia has how many lone pair of electron",
            answers: [
                { text: "1", correct: true },
                { text: "2", correct: false },
                { text: "3", correct: false },
                { text: "4", correct: false }
            ],
            explanation: "Ammonia (NH3) has 1 lone pair of electrons."
        },
        {
            question: "Which of the following is a halide",
            answers: [
                { text: "NaCl", correct: true },
                { text: "HCN", correct: false },
                { text: "CaH", correct: false }
            ],
            explanation: "NaCl (Sodium chloride) is a halide."
        },
        {
            question: "Magnesium has how many electron charge",
            answers: [
                { text: "3", correct: false },
                { text: "2", correct: true },
                { text: "1", correct: false }
            ],
            explanation: "Magnesium (Mg) has a 2+ charge."
        },
        {
            question: "Lutein is a powerful antioxidant and anti-cancer carotenoid found in high quantities in green leafy vegetables and made up of 84.51% Carbon, 9.86% Hydrogen and 5.63% of Oxygen. If the molecular mass of Lutein is 568.871. Its empirical formula and molecular formula are",
            answers: [
                { text: "C40H56 and C5H7 respectively", correct: false },
                { text: "C20H28O and C40H56O2 respectively", correct: true },
                { text: "C5H7 and C40H56 respectively", correct: false },
                { text: "C40H56O2 and C20H28O respectively", correct: false }
            ],
            explanation: "Given the composition and molecular mass, the empirical formula of Lutein is C20H28O and its molecular formula is C40H56O2."
        },
        {
            question: "Which of the following is responsible for high melting and boiling point of ionic compound",
            answers: [
                { text: "Dipole moment", correct: false },
                { text: "Polarization", correct: false },
                { text: "Intermolecular forces", correct: false },
                { text: "Strong electrovalent bond", correct: true }
            ],
            explanation: "The high melting and boiling points of ionic compounds are due to their strong electrovalent bonds."
        },
        {
            question: "Ivermectin is on the World Health Organization (WHO) List of Essential Medicines and is FDA approved as an antiparasitic agent. It is currently being used as in the management of COVID-19. If its empirical formula is C24H37O7 and its molecular mass is 875.106, its molecular formula is",
            answers: [
                { text: "C24H42O8", correct: false },
                { text: "C12H18O3", correct: false },
                { text: "C24H37O7", correct: false },
                { text: "C43H74O14", correct: true }
            ],
            explanation: "The molecular formula of Ivermectin, given its empirical formula and molecular mass, is C43H74O14."
        },
        {
            question: "Hypochlorite is used for",
            answers: [
                { text: "Chlorinating drinking water", correct: true },
                { text: "Etching glasses", correct: false },
                { text: "Domestic blemishes", correct: false },
                { text: "Oxidating fireworks and matches", correct: false }
            ],
            explanation: "Hypochlorite is used for chlorinating drinking water."
        },
        {
            question: "Group I ion hydride has",
            answers: [
                { text: "Neutral ion", correct: false },
                { text: "Positive ion", correct: false },
                { text: "Negative ion", correct: true },
                { text: "Neutral atom", correct: false }
            ],
            explanation: "Group I ion hydride has a negative ion."
        },
        {
            question: "HCl has ____________ dipole molecules",
            answers: [
                { text: "Temporary", correct: false },
                { text: "Instantaneous", correct: false },
                { text: "Induced", correct: false },
                { text: "Permanent", correct: true }
            ],
            explanation: "HCl (Hydrochloric acid) has permanent dipole molecules."
        },
        {
            question: "Butanoic acid and ethyl ethanoate are isomers",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false },
                { text: "None is correct", correct: false },
                { text: "All are correct", correct: false }
            ],
            explanation: "Butanoic acid (CH3CH2CH2COOH) and ethyl ethanoate (CH3COOCH2CH3) are isomers."
        },
        {
            question: "When calcium loses its valence electron, the electronic configuration becomes",
            answers: [
                { text: "That of Argon", correct: true },
                { text: "That of Calcium", correct: false },
                { text: "That of Chlorine", correct: false },
                { text: "That of Calcium ion", correct: false }
            ],
            explanation: "When calcium loses its valence electron, its electronic configuration becomes that of Argon."
        },
        {
            question: "In the Group VII, the first ionization energy is",
            answers: [
                { text: "Decreases down the group", correct: true },
                { text: "Increases down the group", correct: false },
                { text: "All of the above", correct: false },
                { text: "Remain constant", correct: false }
            ],
            explanation: "The first ionization energy decreases down Group VII (halogens)."
        },
        {
            question: "When Group I element forms ionic hydride, the hydrogen presents as",
            answers: [
                { text: "Neutral ion", correct: false },
                { text: "Neutral atom", correct: false },
                { text: "Negative ion", correct: true },
                { text: "Positive ion", correct: false }
            ],
            explanation: "When Group I element forms ionic hydride, the hydrogen presents as a negative ion."
        },
        {
            question: "Lithium stearate is used as ______________ while transforming oil to lubricating grease",
            answers: [
                { text: "Treatment solution", correct: false },
                { text: "Cleaning solution", correct: false },
                { text: "Thinner", correct: false },
                { text: "Thicker", correct: true }
            ],
            explanation: "Lithium stearate is used as a thickener while transforming oil to lubricating grease."
        },
        {
            question: "What type of reaction is this: CH3CH3 + Cl2 → CH3CH2Cl + HCl",
            answers: [
                { text: "An esterification reaction", correct: false },
                { text: "A saponification reaction", correct: false },
                { text: "A substitution reaction", correct: true },
                { text: "An addition reaction", correct: false }
            ],
            explanation: "The reaction CH3CH3 + Cl2 → CH3CH2Cl + HCl is a substitution reaction."
        },
        {
            question: "The type of hydrogen bonding found between different molecules is",
            answers: [
                { text: "Van der Waals", correct: false },
                { text: "Intermolecular", correct: true },
                { text: "Intramolecular", correct: false },
                { text: "Covalent", correct: false }
            ],
            explanation: "Hydrogen bonding between different molecules is an example of intermolecular forces."
        },
        {
            question: "The IUPAC name of the compound CH3CH(CH3)CH(OH)CH3 is",
            answers: [
                { text: "1-methylbutan-2-ol", correct: false },
                { text: "3-methylbutan-2-ol", correct: true },
                { text: "All are isomers", correct: false },
                { text: "3-methylbutanol", correct: false }
            ],
            explanation: "The correct IUPAC name for CH3CH(CH3)CH(OH)CH3 is 3-methylbutan-2-ol."
        },
        {
            question: "How many lone pair of electrons is/are present in anionic",
            answers: [
                { text: "2", correct: false },
                { text: "3", correct: false },
                { text: "0", correct: false },
                { text: "1", correct: true }
            ],
            explanation: "An anion typically has one lone pair of electrons."
        },
        {
            question: "The intermediate product of reaction between propene and H2SO4 is",
            answers: [
                { text: "CH2(SO3H)", correct: false },
                { text: "CH3CH(OSO3H)CH3", correct: true },
                { text: "CH2(OSO3H)CH2CH3", correct: false },
                { text: "CH3CH2(SO3H)CH3", correct: false }
            ],
            explanation: "The intermediate product of the reaction between propene and H2SO4 is isopropylhydrogensulfate (CH3CH(OSO3H)CH3)."
        },
        {
            question: "The product of the distance between a small positive pole and a small negative pole and the magnitude of the charges is called",
            answers: [
                { text: "Permanent dipole", correct: false },
                { text: "Induced dipole", correct: false },
                { text: "Dipole moment", correct: true },
                { text: "Instantaneous dipole", correct: false }
            ],
            explanation: "The product of the distance between a small positive pole and a small negative pole and the magnitude of the charges is called dipole moment."
        },
        {
            question: "__________ is the fluoride of Be which is soluble in water",
            answers: [
                { text: "BeF2", correct: true },
                { text: "BeBr2", correct: false },
                { text: "BeCl2", correct: false },
                { text: "BeI2", correct: false }
            ],
            explanation: "BeF2 is the fluoride of Be which is soluble in water."
        },
        {
            question: "Bromine molecule is a _________ compound",
            answers: [
                { text: "Covalent", correct: true },
                { text: "Electrovalent", correct: false },
                { text: "Dative", correct: false },
                { text: "None of the above", correct: false }
            ],
            explanation: "Bromine molecule (Br2) is a covalent compound."
        },
        {
            question: "Which of the following compound shows isomerism",
            answers: [
                { text: "2-pentene", correct: true },
                { text: "2-methyl-2-butene", correct: false },
                { text: "Ethene", correct: false },
                { text: "1,2-dichloropropane", correct: false }
            ],
            explanation: "2-pentene shows geometric (cis-trans) isomerism."
        },
        {
            question: "The group VII elements form halide ions by",
            answers: [
                { text: "Donating an electron", correct: false },
                { text: "Accepting an electron", correct: true },
                { text: "Donating a proton", correct: false },
                { text: "Accepting a proton", correct: false }
            ],
            explanation: "Group VII elements (halogens) form halide ions by accepting an electron."
        },
        {
            question: "What is the IUPAC name of (CH3)2CHCH2CH(CH3)CH2CH3",
            answers: [
                { text: "2,4-dimethylhexane", correct: true },
                { text: "2,4-dimethylhexene", correct: false },
                { text: "5,5-dimethylpentene", correct: false },
                { text: "2-methylheptane", correct: false }
            ],
            explanation: "The IUPAC name of (CH3)2CHCH2CH(CH3)CH2CH3 is 2,4-dimethylhexane."
        },
        {
            question: "Which of the following is ionic compound",
            answers: [
                { text: "CCl4", correct: false },
                { text: "Br2", correct: false },
                { text: "HCl", correct: false },
                { text: "AlF3", correct: true }
            ],
            explanation: "AlF3 (Aluminum fluoride) is an ionic compound."
        },
        {
            question: "Which of the following undergo reduction easily",
            answers: [
                { text: "Cl", correct: false },
                { text: "F", correct: true },
                { text: "I", correct: false },
                { text: "As", correct: false }
            ],
            explanation: "Fluorine (F) undergoes reduction easily."
        },
        {
            question: "Group III elements ionization energy",
            answers: [
                { text: "Increases down the group", correct: false },
                { text: "Decreases down the group", correct: true },
                { text: "Increases from He - Ar", correct: false },
                { text: "Decreases from Ar - Xe", correct: false }
            ],
            explanation: "Ionization energy decreases down Group III elements."
        },
        {
            question: "The type of ion formed when alkaline earth metals lose their outermost shell electron is",
            answers: [
                { text: "M2+ ion", correct: true },
                { text: "M2− ion", correct: false },
                { text: "M+ ion", correct: false },
                { text: "M− ion", correct: false }
            ],
            explanation: "Alkaline earth metals form M2+ ions when they lose their outermost shell electron."
        },
        {
            question: "The atomic radius of Group I elements from Li to Fr",
            answers: [
                { text: "Decreases", correct: false },
                { text: "Undetermined", correct: false },
                { text: "Increases", correct: true },
                { text: "Remains constant", correct: false }
            ],
            explanation: "The atomic radius of Group I elements increases from Li to Fr."
        },
        {
            question: "HF is a weak acid because the H-F bond is very",
            answers: [
                { text: "Polar", correct: false },
                { text: "Weak", correct: false },
                { text: "All of the above", correct: false },
                { text: "Strong", correct: true }
            ],
            explanation: "HF is a weak acid primarily because the H-F bond is strong and not easily ionizable."
        },
        {
            question: "Mg may be extracted in commercial scale from",
            answers: [
                { text: "Dolomite", correct: true },
                { text: "Lepidolite", correct: false },
                { text: "Rock salt", correct: false },
                { text: "Limestone", correct: false }
            ],
            explanation: "Magnesium (Mg) may be extracted in commercial scale from dolomite."
        },
        {
            question: "The general formula that can be used to represent group I metal halide is",
            answers: [
                { text: "MX2", correct: false },
                { text: "MX3", correct: false },
                { text: "MX4", correct: false },
                { text: "MX", correct: true }
            ],
            explanation: "The general formula for group I metal halides is MX."
        },
        {
            question: "Which of the following is used in the dehydration of ethanol to give ethene",
            answers: [
                { text: "Conc. HNO3", correct: false },
                { text: "Conc. H2SO4", correct: true },
                { text: "Dilute H2SO4", correct: false },
                { text: "Dilute HNO3", correct: false }
            ],
            explanation: "Concentrated sulfuric acid (H2SO4) is used in the dehydration of ethanol to give ethene."
        },
        {
            question: "The type of bond present in HNO3 molecules is",
            answers: [
                { text: "Hydrogen", correct: false },
                { text: "Van der Waals", correct: false },
                { text: "Covalent", correct: true },
                { text: "Dative covalent", correct: false }
            ],
            explanation: "The bond present in HNO3 molecules is covalent."
        },
        {
            question: "The IUPAC name for the compound CH2=CHCH(CH3)CH2CH(OH)(CH2)2CH3 is",
            answers: [
                { text: "6-methyloct-7-en-4-ol", correct: false },
                { text: "5-hydroxyl-3-methyloct-1-ene", correct: false },
                { text: "3, methyloct-1-en-5, ol", correct: false },
                { text: "3-methyloct-en-5-ol", correct: true }
            ],
            explanation: "The IUPAC name for CH2=CHCH(CH3)CH2CH(OH)(CH2)2CH3 is 3-methyloct-en-5-ol."
        },
        {
            question: "Group VII and Group VIII belong to __________ block on the periodic table",
            answers: [
                { text: "P", correct: true },
                { text: "S", correct: false },
                { text: "d", correct: false },
                { text: "f", correct: false }
            ],
            explanation: "Group VII (halogens) and Group VIII (noble gases) belong to the p-block on the periodic table."
        },
        {
            question: "The IUPAC name of H2C=C(CH3)CH3C(CH3)3 is",
            answers: [
                { text: "Octane", correct: false },
                { text: "2, 4, 2-trimethylpentane", correct: false },
                { text: "2, 4, 4-trimethylpent-1-ene", correct: true }
            ],
            explanation: "The IUPAC name of H2C=C(CH3)CH3C(CH3)3 is 2, 4, 4-trimethylpent-1-ene."
        },
        {
            question: "Electronic configuration of Argon is given as",
            answers: [
                { text: "[He]2s2 2p6", correct: false },
                { text: "[Rn]2s2 3p6", correct: false },
                { text: "[Ar]3s2 3p6", correct: true },
                { text: "[Ne]3s2 3p6", correct: false }
            ],
            explanation: "The electronic configuration of Argon is [Ar]3s2 3p6."
        },
        {
            question: "The difference in the properties of isomers is due to __________",
            answers: [
                { text: "Different separation", correct: false },
                { text: "Binding forces", correct: false },
                { text: "Different mode of combination", correct: true },
                { text: "Molecular theory", correct: false }
            ],
            explanation: "The difference in properties of isomers is due to their different mode of chemical combination."
        },
        {
            question: "The IUPAC name for the compound H2C=CHCH2COOH is",
            answers: [
                { text: "But-3-enoic acid", correct: false },
                { text: "But-3-en-1-oic acid", correct: true },
                { text: "But-2-en-4-oic acid", correct: false },
                { text: "But-2-enoic acid", correct: false }
            ],
            explanation: "The IUPAC name for H2C=CHCH2COOH is But-3-en-1-oic acid."
        },
        {
            question: "The IUPAC name for CH3CH(CH3)CH(OH)CH3 is",
            answers: [
                { text: "1-methylbutan-2-ol", correct: false },
                { text: "3-methylbutan-2-ol", correct: true },
                { text: "All are isomers", correct: false },
                { text: "3-methylbutanol", correct: false }
            ],
            explanation: "The correct IUPAC name for CH3CH(CH3)CH(OH)CH3 is 3-methylbutan-2-ol."
        },
        {
            question: "The type of hydrogen bonding found between different molecules is",
            answers: [
                { text: "Van der Waals", correct: false },
                { text: "Intermolecular", correct: true },
                { text: "Intramolecular", correct: false },
                { text: "Covalent", correct: false }
            ],
            explanation: "Hydrogen bonding between different molecules is classified as intermolecular."
        },
        {
            question: "How many sigma and pi bonds present in a single bond",
            answers: [
                { text: "1, 0", correct: true },
                { text: "3, 0", correct: false },
                { text: "0, 0", correct: false },
                { text: "2, 2", correct: false }
            ],
            explanation: "A single bond consists of 1 sigma bond and 0 pi bonds."
        },
        {
            question: "Sigma and pi bonds in a double bond is",
            answers: [
                { text: "2, 1", correct: true },
                { text: "1, 1", correct: false },
                { text: "3, 1", correct: false },
                { text: "2, 2", correct: false }
            ],
            explanation: "A double bond consists of 1 sigma bond and 1 pi bond."
        },
        {
            question: "Halogens do not occur freely in nature because",
            answers: [
                { text: "They are too reactive", correct: true },
                { text: "They are electronegative", correct: false }
            ],
            explanation: "Halogens do not occur freely in nature because they are too reactive."
        },
        {
            question: "Two compounds have the same composition and also have same atoms attached to the same atoms although with different orientation in space",
            answers: [
                { text: "Stereoisomers", correct: true },
                { text: "Structural isomers", correct: false },
                { text: "Identical", correct: false }
            ],
            explanation: "Compounds with the same composition and same atoms attached in different spatial arrangements are called stereoisomers."
        },
        {
            question: "Which of the following group one metal oxide has an orange coloration",
            answers: [
                { text: "Na2O", correct: true },
                { text: "Rb2O", correct: false },
                { text: "Cs2O", correct: false },
                { text: "Li2O", correct: false }
            ],
            explanation: "Na2O (sodium oxide) has an orange coloration."
        },
        {
            question: "Which of the following is an ionic compound",
            answers: [
                { text: "CCl4", correct: false },
                { text: "Br2", correct: false },
                { text: "AlF3", correct: true },
                { text: "HCl", correct: false }
            ],
            explanation: "AlF3 (aluminum fluoride) is an ionic compound."
        },
        {
            question: "Bromine is a _________ compound",
            answers: [
                { text: "Dative", correct: false },
                { text: "Covalent", correct: true },
                { text: "None", correct: false },
                { text: "Ionic", correct: false }
            ],
            explanation: "Bromine (Br2) is a covalent compound."
        },
        {
            question: "The rise in boiling points down Group VII and Group VIII is due to the increase in the number of electrons in the molecule which leads to",
            answers: [
                { text: "Greater intermolecular", correct: false },
                { text: "Lesser intermolecular", correct: false },
                { text: "Lesser van der Waals", correct: false },
                { text: "Greater van der Waals", correct: true }
            ],
            explanation: "The increase in the number of electrons down Group VII and Group VIII leads to greater van der Waals forces, resulting in higher boiling points."
        },
        {
            question: "The compound used by gymnasts to ensure firm grip is",
            answers: [
                { text: "MgO", correct: false },
                { text: "Mg(OH)2", correct: false },
                { text: "MgCO3", correct: true },
                { text: "MgCl2", correct: false }
            ],
            explanation: "Gymnasts use MgCO3 (magnesium carbonate) to ensure a firm grip."
        },
        {
            question: "When Na metal reacts with water the reaction is",
            answers: [
                { text: "Vigorous", correct: true },
                { text: "Endothermic", correct: false },
                { text: "Mild", correct: false },
                { text: "Complex", correct: false }
            ],
            explanation: "The reaction of Na metal with water is vigorous."
        },
        {
            question: "A strong dipolar between a lone pair of electrons of a highly electronegative atom and a slightly positively charged hydrogen atom of another molecule is known as",
            answers: [
                { text: "Covalent bond", correct: false },
                { text: "Van der Waals force", correct: false },
                { text: "Incomplete ionic transfer", correct: false },
                { text: "Hydrogen bond", correct: true }
            ],
            explanation: "A hydrogen bond is a strong dipolar interaction between a lone pair on an electronegative atom and a hydrogen atom."
        },
        {
            question: "Halogens do not exist freely in nature because",
            answers: [
                { text: "They are poisonous", correct: false },
                { text: "They are too reactive", correct: true },
                { text: "They are not reactive", correct: false }
            ],
            explanation: "Halogens do not exist freely in nature because they are highly reactive."
        },
        {
            question: "Calculate the molecular formula of a compound containing 17.39% of C, 1.45% of H and 57.9% of Br if the vapor density is 166",
            answers: [
                { text: "C4H4BrO4", correct: true },
                { text: "C2H2BrO2", correct: false },
                { text: "C3H3BrO3", correct: false },
                { text: "CHBrO", correct: false }
            ],
            explanation: "The molecular formula of the compound with the given composition and vapor density is C4H4BrO4."
        },
        {
            question: "Which of the following is completely an acid",
            answers: [
                { text: "HCl", correct: true },
                { text: "NaCl", correct: false },
                { text: "HBr", correct: false },
                { text: "HI", correct: false }
            ],
            explanation: "HCl (hydrochloric acid) is a completely acidic compound."
        },
        {
            question: "The atomic radius of group I element _______ from Li to Fr",
            answers: [
                { text: "Remains constant", correct: false },
                { text: "Increases", correct: true },
                { text: "Decreases", correct: false },
                { text: "Undetermined", correct: false }
            ],
            explanation: "The atomic radius of group I elements increases from Li to Fr."
        },
        {
            question: "How many unsaturated isomers are possible for C4H8",
            answers: [
                { text: "4", correct: false },
                { text: "6", correct: false },
                { text: "5", correct: false },
                { text: "3", correct: true }
            ],
            explanation: "There are 3 unsaturated isomers possible for C4H8."
        },
        {
            question: "What is the chemical formula for Astatine",
            answers: [
                { text: "Tn", correct: false },
                { text: "At", correct: true },
                { text: "As", correct: false },
                { text: "St", correct: false }
            ],
            explanation: "The chemical symbol for Astatine is At."
        },
        {
            question: "How many moles of oxygen will be needed for the complete combustion of butene",
            answers: [
                { text: "6 moles", correct: true },
                { text: "5 moles", correct: false },
                { text: "5.5 moles", correct: false },
                { text: "6.5 moles", correct: false }
            ],
            explanation: "6 moles of oxygen are needed for the complete combustion of butene."
        },
        {
            question: "The bond angle in C2H4 is",
            answers: [
                { text: "180°", correct: false },
                { text: "109°", correct: false },
                { text: "90°", correct: false },
                { text: "120°", correct: true }
            ],
            explanation: "The bond angle in C2H4 (ethylene) is approximately 120°."
        },
        {
            question: "Alkanol reacts with Alkanoic acid to form",
            answers: [
                { text: "Alkanoates and water", correct: true },
                { text: "Alkanoates and Alkanones", correct: false },
                { text: "Alkanoates and phenol", correct: false },
                { text: "Ester and Ethene", correct: false }
            ],
            explanation: "Alkanol reacts with Alkanoic acid to form alkanoates and water."
        },
        {
            question: "Acetone reacting with HCN to form a cyanohydrin is an example of a/an ____",
            answers: [
                { text: "Nucleophilic substitution", correct: false },
                { text: "Nucleophilic addition", correct: true },
                { text: "Electrophilic addition", correct: false },
                { text: "Electrophilic substitution", correct: false }
            ],
            explanation: "Acetone reacting with HCN to form a cyanohydrin is an example of nucleophilic addition."
        },
        {
            question: "Which one is a group 1 element",
            answers: [
                { text: "Rb", correct: true },
                { text: "Rn", correct: false },
                { text: "Ra", correct: false },
                { text: "Ru", correct: false }
            ],
            explanation: "Rb (Rubidium) is a group 1 element."
        },
        {
            question: "__________ has the highest ionization potential",
            answers: [
                { text: "Helium", correct: true },
                { text: "Radon", correct: false },
                { text: "Xenon", correct: false },
                { text: "Krypton", correct: false }
            ],
            explanation: "Helium has the highest ionization potential."
        },
        {
            question: "What is the alkene hybridization",
            answers: [
                { text: "Sp", correct: false },
                { text: "Sp2", correct: true },
                { text: "Sp3", correct: false },
                { text: "S2p", correct: false }
            ],
            explanation: "The alkene hybridization is sp2."
        },
        {
            question: "The type of bonding with formation of an ammonium ion is known as",
            answers: [
                { text: "Coordinate covalent bond", correct: true },
                { text: "Ionic bond", correct: false },
                { text: "Covalent bond", correct: false }
            ],
            explanation: "The formation of an ammonium ion involves a coordinate covalent bond."
        },
        {
            question: "__________ isomers are non-imposable",
            answers: [
                { text: "Stereoisomer", correct: false },
                { text: "Geometric", correct: false },
                { text: "Optical", correct: true },
                { text: "Positional isomer", correct: false }
            ],
            explanation: "Optical isomers are non-superimposable mirror images of each other."
        },
        {
            question: "Quantitative analysis shows that the empirical formula of a compound is CH. The vapor density is found to be 39. Find the molecular formula",
            answers: [
                { text: "C2H2", correct: false },
                { text: "C6H6", correct: true },
                { text: "C6H12", correct: false },
                { text: "C2H6", correct: false }
            ],
            explanation: "Given the empirical formula CH and vapor density of 39, the molecular formula is C6H6 (benzene)."
        },
        {
            question: "Group VII elements exist freely in the atmosphere as",
            answers: [
                { text: "Hybride", correct: false },
                { text: "Diatomic molecules", correct: true },
                { text: "Monoatomic", correct: false },
                { text: "Ions", correct: false }
            ],
            explanation: "Group VII elements exist as diatomic molecules (e.g., Cl2, Br2) in the atmosphere."
        },
        {
            question: "One of the products of combustion of pentene in excess air is",
            answers: [
                { text: "Pentene", correct: false },
                { text: "Pentanol", correct: false },
                { text: "Pentanal", correct: false },
                { text: "Carbon (IV) oxide", correct: true }
            ],
            explanation: "One of the products of combustion of pentene in excess air is carbon dioxide (CO2)."
        },
        {
            question: "How many structural isomers are present in C4H9OH",
            answers: [
                { text: "4", correct: true },
                { text: "6", correct: false },
                { text: "5", correct: false },
                { text: "3", correct: false }
            ],
            explanation: "There are 4 structural isomers possible for C4H9OH."
        },
        {
            question: "Group II of the periodic table is also known as",
            answers: [
                { text: "Alkali metals", correct: false },
                { text: "Halogens", correct: false },
                { text: "Alkaline earth metals", correct: true },
                { text: "Noble gases", correct: false }
            ],
            explanation: "Group II of the periodic table is known as alkaline earth metals."
        },
        {
            question: "Hybridization contains",
            answers: [
                { text: "Sigma bond throughout", correct: true },
                { text: "Pi-bond throughout", correct: false },
                { text: "One sigma and one pi bond", correct: false },
                { text: "None", correct: false }
            ],
            explanation: "Hybridization involves sigma bonds throughout."
        },
        {
            question: "___________ is the ability of an element to attract ions towards itself",
            answers: [
                { text: "Electron affinity", correct: false },
                { text: "Electronegativity", correct: true },
                { text: "Covalent", correct: false },
                { text: "Ionic", correct: false }
            ],
            explanation: "Electronegativity is the ability of an element to attract electrons towards itself."
        },
        {
            question: "Reaction between C2H2 and HBr is called",
            answers: [
                { text: "Polymerization", correct: false },
                { text: "Substitution", correct: false },
                { text: "Addition", correct: true },
                { text: "Oxidation", correct: false }
            ],
            explanation: "The reaction between C2H2 (acetylene) and HBr (hydrobromic acid) is an addition reaction."
        },
        {
            question: "Reduction of an organic acid gives",
            answers: [
                { text: "Secondary alcohol", correct: false },
                { text: "Tertiary alcohol", correct: false },
                { text: "Primary alcohol", correct: true },
                { text: "Polyhydric alcohol", correct: false }
            ],
            explanation: "Reduction of an organic acid typically gives a primary alcohol."
        },
        {
            question: "__________ is used in dry cleaning",
            answers: [
                { text: "CH3Cl3", correct: false },
                { text: "CCl4", correct: true },
                { text: "CH2Cl2", correct: false },
                { text: "CH3Cl", correct: false }
            ],
            explanation: "CCl4 (carbon tetrachloride) is used in dry cleaning."
        },
        {
            question: "Alkanes have _________ bond",
            answers: [
                { text: "Single", correct: true },
                { text: "Double", correct: false },
                { text: "Triple", correct: false },
                { text: "Half", correct: false }
            ],
            explanation: "Alkanes have single bonds between carbon atoms."
        },
        {
            question: "Alkanes are generally known as",
            answers: [
                { text: "Polar", correct: false },
                { text: "Non-polar", correct: true },
                { text: "Crystalline", correct: false },
                { text: "Cycloalkanes", correct: false }
            ],
            explanation: "Alkanes are non-polar molecules."
        },
        {
            question: "The most reactive element in group I (Alkali metals) is",
            answers: [
                { text: "Fr", correct: true },
                { text: "Li", correct: false },
                { text: "Na", correct: false },
                { text: "Al", correct: false }
            ],
            explanation: "Francium (Fr) is the most reactive element in group I (Alkali metals)."
        },
        {
            question: "The valence electron in alkali metal is",
            answers: [
                { text: "1", correct: true },
                { text: "3", correct: false },
                { text: "2", correct: false },
                { text: "4", correct: false }
            ],
            explanation: "Alkali metals have 1 valence electron."
        },
        {
            question: "Aldehyde undergoes oxidation with KMnO4 to give",
            answers: [
                { text: "Ketone", correct: false },
                { text: "Alkanone", correct: false },
                { text: "Carboxylic acid", correct: true }
            ],
            explanation: "Aldehyde undergoes oxidation with KMnO4 to give carboxylic acid."
        },
        {
            question: "Conversion of pent-1-ene to pent-2-ene when heated at high temperature is called",
            answers: [
                { text: "Oxidation reaction", correct: false },
                { text: "Isomerism reaction", correct: true },
                { text: "Reduction reaction", correct: false },
                { text: "Replacement reaction", correct: false }
            ],
            explanation: "Conversion of pent-1-ene to pent-2-ene due to rearrangement of atoms is an isomerism reaction."
        },
        {
            question: "The central ion in Ni(CO)4 is",
            answers: [
                { text: "CO", correct: false },
                { text: "C", correct: false },
                { text: "Ni", correct: true },
                { text: "(CO)4", correct: false }
            ],
            explanation: "The central ion in Ni(CO)4 is nickel (Ni)."
        },
        {
            question: "What is the positive ion in Na[Au(CN)2]",
            answers: [
                { text: "Au", correct: false },
                { text: "Na", correct: true },
                { text: "Au(CN)2", correct: false },
                { text: "CN", correct: false }
            ],
            explanation: "In Na[Au(CN)2], Na+ is the positive ion."
        },
        {
            question: "Transition metals have what type of bond between atoms",
            answers: [
                { text: "Metallic", correct: false },
                { text: "Ionic", correct: false },
                { text: "Covalent", correct: false },
                { text: "Dative", correct: true }
            ],
            explanation: "Transition metals often form dative bonds between atoms."
        },
        {
            question: "Presence of ___________ dipole moment gives the fact that the compound has certain ionic character",
            answers: [
                { text: "Induced", correct: false },
                { text: "Permanent", correct: false },
                { text: "Electric", correct: false },
                { text: "Instantaneous", correct: true }
            ],
            explanation: "Presence of instantaneous dipole moment indicates certain ionic character in a compound."
        },
        {
            question: "Which of the following fluoride is not suitable",
            answers: [
                { text: "BaF", correct: false },
                { text: "MgF2", correct: false },
                { text: "BeF2", correct: false },
                { text: "CaF2", correct: true }
            ],
            explanation: "CaF2 is not suitable as it does not have the appropriate properties compared to the others listed."
        },
        {
            question: "__________ is a species that has an unpaired electron",
            answers: [
                { text: "Free radical", correct: true }
            ],
            explanation: "A free radical is a species that has an unpaired electron."
        },
        {
            question: "Product of halogenation of 4-methylpent-1-ene with HCl is ________",
            answers: [
                { text: "4-methyl-1-chloropentane", correct: false },
                { text: "2-chloro-4-methylpentane", correct: true },
                { text: "3-chloro-4-methylpentane", correct: false },
                { text: "4-chloro-2-methylbutane", correct: false }
            ],
            explanation: "The product of halogenation of 4-methylpent-1-ene with HCl is 2-chloro-4-methylpentane."
        },
        {
            question: "The following are characteristics of halogens except",
            answers: [
                { text: "They are non-metals", correct: false },
                { text: "They exist as diatomic molecules", correct: false },
                { text: "They are all colored", correct: false },
                { text: "They do not ionize to form univalent ion", correct: true }
            ],
            explanation: "Halogens do ionize to form univalent ions (e.g., Cl-, Br-, I-)."
        },
        {
            question: "If the empirical formula of an organic compound is C24H37O7 and its molecular mass is 875.106, find the molecular formula",
            answers: [
                { text: "C24H42O8", correct: false },
                { text: "C48H74O14", correct: true },
                { text: "C14H37O7", correct: false },
                { text: "C12H18O3", correct: false }
            ],
            explanation: "The molecular formula of the compound with empirical formula C24H37O7 and molecular mass 875.106 is C48H74O14."
        },
        {
            question: "Li2O is best prepared by _______ of Li2O2 at 450℃",
            answers: [
                { text: "Substitution", correct: false },
                { text: "Oxidation", correct: false },
                { text: "Reduction", correct: false },
                { text: "Thermal decomposition", correct: true }
            ],
            explanation: "Li2O is best prepared by thermal decomposition of Li2O2 at 450℃."
        },
        {
            question: "The valence electrons in alkali metals is/are",
            answers: [
                { text: "1", correct: true },
                { text: "3", correct: false },
                { text: "2", correct: false },
                { text: "4", correct: false }
            ],
            explanation: "Alkali metals have 1 valence electron."
        },
        {
            question: "3-methylbutan-3-ol and 3-methylbutan-2-ol is ________ and ________",
            answers: [
                { text: "Secondary/Secondary", correct: false },
                { text: "Tertiary/Secondary", correct: true },
                { text: "Secondary/Tertiary", correct: false },
                { text: "Tertiary/Tertiary", correct: false }
            ],
            explanation: "3-methylbutan-3-ol is tertiary and 3-methylbutan-2-ol is secondary."
        },
        {
            question: "Which of the following is not an alcohol",
            answers: [
                { text: "Monohydric", correct: false },
                { text: "Dihydric", correct: false },
                { text: "Trihydric", correct: false },
                { text: "Tetrahydric", correct: true }
            ],
            explanation: "Tetrahydric does not describe an alcohol; it refers to compounds with four hydrogens."
        },
        {
            question: "The IUPAC name for CH3CH2CH=CHC≡CCH3 is",
            answers: [
                { text: "Hept-4-en-2-yne", correct: false },
                { text: "Hept-3-en-5,yne", correct: false },
                { text: "Hept-4-en,2,yne", correct: false },
                { text: "Hept-3-en-5-yne", correct: true }
            ],
            explanation: "The correct IUPAC name for CH3CH2CH=CHC≡CCH3 is Hept-3-en-5-yne."
        },
        {
            question: "When propene completely reacts with chlorine, the name of the products formed is",
            answers: [
                { text: "1, 2-dichloropropane", correct: false },
                { text: "1, 1-dichloropropane", correct: false },
                { text: "2, 2-dichloropropane", correct: false },
                { text: "1-chloropropane", correct: true }
            ],
            explanation: "The product of propene reacting with chlorine is 1-chloropropane."
        },
        {
            question: "CH3CH3 + Cl2 → CH3CH2Cl + HCl This reaction is",
            answers: [
                { text: "Saponification", correct: false },
                { text: "Substitution", correct: true },
                { text: "Esterification", correct: false },
                { text: "Addition", correct: false }
            ],
            explanation: "This reaction is a substitution reaction, where chlorine substitutes a hydrogen atom."
        },
        {
            question: "The bond in NH3BF3 molecule is",
            answers: [
                { text: "Ionic", correct: false },
                { text: "Hydrogen", correct: false },
                { text: "Covalent", correct: true },
                { text: "Dative covalent", correct: false }
            ],
            explanation: "The bond in NH3BF3 molecule is covalent."
        },
        {
            question: "How many possible structural isomers are in unsaturated monohydric alkanol C4H9OH",
            answers: [
                { text: "5", correct: false },
                { text: "6", correct: false },
                { text: "3", correct: false },
                { text: "4", correct: true }
            ],
            explanation: "There are 4 possible structural isomers for C4H9OH."
        },
        {
            question: "Fluorine in all compounds has an oxidation number of ________",
            answers: [
                { text: "-2", correct: false },
                { text: "+2", correct: false },
                { text: "-1", correct: true },
                { text: "-7", correct: false }
            ],
            explanation: "Fluorine always has an oxidation number of -1 in compounds."
        },
        {
            question: "Reduction of ketones gives",
            answers: [
                { text: "Secondary alcohol", correct: true },
                { text: "Primary alcohol", correct: false },
                { text: "Ketal", correct: false },
                { text: "Carboxylic", correct: false }
            ],
            explanation: "Ketones are reduced to form secondary alcohols."
        },
        {
            question: "Reduction of aldehyde gives",
            answers: [
                { text: "Primary alcohol", correct: true },
                { text: "Secondary alcohol", correct: false },
                { text: "Tertiary alcohol", correct: false },
                { text: "None", correct: false }
            ],
            explanation: "Aldehydes are reduced to form primary alcohols."
        },
        {
            question: "Sp2 hybridization has how many sigma (σ ) bond and pi ( π) bond",
            answers: [
                { text: "1, 2", correct: false },
                { text: "1, 0", correct: false },
                { text: "1, 1", correct: true },
                { text: "0, 2", correct: false }
            ],
            explanation: "Sp2 hybridization has 1 sigma bond and 1 pi bond."
        },
        {
            question: "When the carbonyl group of a hydrocarbon is located in between the methylene chain, the hydrocarbon is",
            answers: [
                { text: "An alkanal", correct: false },
                { text: "An aldehyde", correct: false },
                { text: "An alkanone", correct: true },
                { text: "None", correct: false }
            ],
            explanation: "An alkanone has the carbonyl group (C=O) between two methylene groups."
        },
        {
            question: "The dehydrating agent for secondary alcohol is",
            answers: [
                { text: "Weak acid", correct: false },
                { text: "Dilute H2SO4", correct: false },
                { text: "Conc. H2SO4", correct: true },
                { text: "All acids", correct: false }
            ],
            explanation: "Concentrated sulfuric acid (Conc. H2SO4) is a strong dehydrating agent for secondary alcohols."
        },
        {
            question: "C=O is called",
            answers: [
                { text: "Carboxylic group", correct: false },
                { text: "Cabin group", correct: false },
                { text: "Kanal group", correct: false },
                { text: "Carbonyl group", correct: true }
            ],
            explanation: "The functional group C=O is called the carbonyl group."
        },
        {
            question: "The solubility of phenol is",
            answers: [
                { text: "Higher in water than phenol", correct: false },
                { text: "Higher in alcohol than water", correct: true },
                { text: "Equal in both liquids", correct: false },
                { text: "None", correct: false }
            ],
            explanation: "Phenol is more soluble in alcohol than in water."
        },
        {
            question: "Which of the following exhibits isomerism",
            answers: [
                { text: "Ethyne", correct: false },
                { text: "Propyne", correct: false },
                { text: "Methane", correct: false },
                { text: "Butane", correct: true }
            ],
            explanation: "Butane exhibits structural isomerism."
        },
        {
            question: "The H-C-H bond angle in CH4 is",
            answers: [
                { text: "120°", correct: false },
                { text: "90°", correct: false },
                { text: "109° 28'", correct: true },
                { text: "180°", correct: false }
            ],
            explanation: "The bond angle H-C-H in CH4 (methane) is approximately 109° 28'."
        },
        {
            question: "_________ is the most reactive metal in the periodic table",
            answers: [
                { text: "Li", correct: false },
                { text: "Fr", correct: true },
                { text: "Ca", correct: false },
                { text: "Na", correct: false }
            ],
            explanation: "Francium (Fr) is the most reactive metal in the periodic table."
        },
        {
            question: "Al3+ is highly polarizing due to its",
            answers: [
                { text: "High melting point", correct: false },
                { text: "Low melting point", correct: false },
                { text: "High charge density", correct: true },
                { text: "Low charge density", correct: false }
            ],
            explanation: "Al3+ has a high charge density, making it highly polarizing."
        },
        {
            question: "Alkene undergoes the following reaction except",
            answers: [
                { text: "Substitution", correct: true },
                { text: "Polymerization", correct: false },
                { text: "Addition", correct: false },
                { text: "Hydration", correct: false }
            ],
            explanation: "Alkenes do not typically undergo substitution reactions."
        },
        {
            question: "Molten sodium chloride is also called",
            answers: [
                { text: "Common salt", correct: true },
                { text: "Bawuire", correct: false },
                { text: "Roar salt", correct: false },
                { text: "None of the above", correct: false }
            ],
            explanation: "Molten sodium chloride refers to common salt in its molten state."
        },
        {
            question: "How many structural isomers are possible in C4H9Br",
            answers: [
                { text: "5", correct: false },
                { text: "3", correct: false },
                { text: "2", correct: false },
                { text: "4", correct: true }
            ],
            explanation: "There are 4 structural isomers possible for C4H9Br."
        },
        {
            question: "Any species that contains unpaired electron are called __________",
            answers: [
                { text: "Anion", correct: false },
                { text: "Free radicals", correct: true },
                { text: "Cation", correct: false },
                { text: "Ion", correct: false }
            ],
            explanation: "Species with unpaired electrons are called free radicals."
        },
        {
            question: "How many sigma bonds and pi bonds are in a double bond",
            answers: [
                { text: "0, 3", correct: false },
                { text: "1, 1", correct: true },
                { text: "1, 2", correct: false },
                { text: "1, 0", correct: false }
            ],
            explanation: "A double bond consists of 1 sigma bond and 1 pi bond."
        },
        {
            question: "Sp3 hybridization has _______ sigma bond and ________ pi bond",
            answers: [
                { text: "3, 2", correct: false },
                { text: "1, 0", correct: true },
                { text: "4, 3", correct: false },
                { text: "1, 2", correct: false }
            ],
            explanation: "Sp3 hybridization involves 1 sigma bond and 0 pi bonds."
        },
        {
            question: "Alkanol form hydrogen bonding with _________",
            answers: [
                { text: "Another alkanol", correct: false },
                { text: "H2O", correct: true },
                { text: "Carboxylic acid", correct: false },
                { text: "Ester", correct: false }
            ],
            explanation: "Alkanols (alcohols) can form hydrogen bonds with water."
        },
        {
            question: "________ is called alkaline hydrolysis of esters",
            answers: [
                { text: "Esterification", correct: false },
                { text: "Saponification", correct: true },
                { text: "Dehydration", correct: false },
                { text: "Fermentation", correct: false }
            ],
            explanation: "The process of esters reacting with alkalis to form alcohol and salt is called saponification."
        },
        {
            question: "The reason why the boiling point of alkanol decreases with increased branching is",
            answers: [
                { text: "The molecule cools easily", correct: false },
                { text: "The molecule assumes a circular shape", correct: false },
                { text: "The molecules assume a tetrahedral shape", correct: false },
                { text: "The molecule assumes a spherical shape", correct: true }
            ],
            explanation: "Increased branching in alkanols leads to a more spherical shape, reducing van der Waals forces and thus lowering boiling point."
        },
        {
            question: "Which of the following has the highest boiling point",
            answers: [
                { text: "1° alcohol", correct: true },
                { text: "3° alcohol", correct: false },
                { text: "2° alcohol", correct: false },
                { text: "Polyhydric alcohol", correct: false }
            ],
            explanation: "Primary alcohols (1° alcohol) generally have higher boiling points compared to other types."
        },
        {
            question: "Which of the following has the highest solubility",
            answers: [
                { text: "Secondary alcohol", correct: false },
                { text: "Polyhydric alcohol", correct: true },
                { text: "Tertiary alcohol", correct: false },
                { text: "Dihydric alcohol", correct: false }
            ],
            explanation: "Polyhydric alcohols have higher solubility due to multiple hydroxyl groups."
        },
        {
            question: "The raw materials for a large-scale production of ethanol is",
            answers: [
                { text: "Starch", correct: true },
                { text: "C2H6", correct: false },
                { text: "C2H2", correct: false },
                { text: "C2H6", correct: false }
            ],
            explanation: "Starch is a common raw material used in the production of ethanol."
        },
        {
          question: "Butanoic acid and ethyl ethanoate are isomers (a)True (b)none of the options (c)False (d)all of the options",
          answers: [
            { text: "True", correct: false },
            { text: "None of the options", correct: false },
            { text: "False", correct: true },
            { text: "All of the options", correct: false }
          ],
          explanation: "Butanoic acid (CH3CH2CH2COOH) and ethyl ethanoate (CH3COOC2H5) are not isomers."
        },
        {
          question: "The carbonyl group in aldehydes is ͟͟ ͟͟ ͟͟ (a)C=O (b)C-O (c)CHO (d)CO",
          answers: [
            { text: "C=O", correct: true },
            { text: "C-O", correct: false },
            { text: "CHO", correct: false },
            { text: "CO", correct: false }
          ],
          explanation: "The carbonyl group in aldehydes is represented as C=O."
        },
        {
          question: "Which of the following could exhibit optical isomerism? (a)𝐶𝐻2𝐶𝑙𝐹 (b)𝐶2𝐻6 (c)𝐶5𝐻12 (d)𝐶𝐻3𝐶(𝐶𝑙)(𝐵𝑟)𝐶𝐻𝑂",
          answers: [
            { text: "𝐶𝐻2𝐶𝑙𝐹", correct: false },
            { text: "𝐶2𝐻6", correct: false },
            { text: "𝐶5𝐻12", correct: true },
            { text: "𝐶𝐻3𝐶(𝐶𝑙)(𝐵𝑟)𝐶𝐻𝑂", correct: false }
          ],
          explanation: "Optical isomerism requires a chiral center, typically found in compounds like pentane (𝐶5𝐻12) but not in the other options."
        },
        {
          question: "Which of the following is used in the dehydration of ethanol to give ethene? (a)Conc.𝐻𝑁𝑂3 (b)𝐻2𝑆𝑂4 (c)Dil.𝐻𝑁𝑂3 (d)Conc.𝐻2𝑆𝑂4",
          answers: [
            { text: "Conc.𝐻𝑁𝑂3", correct: false },
            { text: "𝐻2𝑆𝑂4", correct: true },
            { text: "Dil.𝐻𝑁𝑂3", correct: false },
            { text: "Conc.𝐻2𝑆𝑂4", correct: false }
          ],
          explanation: "Concentrated sulfuric acid (𝐻2𝑆𝑂4) is commonly used in the dehydration of ethanol to ethene."
        },
        {
          question: "Which of the following compounds shows geometrical isomerism (a)2-methyl-2-butene (b)Ethene-2-pentene (c)1,2-dichloropropane",
          answers: [
            { text: "2-methyl-2-butene", correct: true },
            { text: "Ethene-2-pentene", correct: false },
            { text: "1,2-dichloropropane", correct: false }
          ],
          explanation: "2-Methyl-2-butene exhibits geometrical isomerism due to the presence of a double bond with different groups attached."
        },
        {
          question: "Aldehydes undergo oxidation with 𝐾𝑀𝑛𝑂4 in the presence of a mineral acid to form ͟͟ ͟͟ (a)Carboxylic acid (b)ketones (c)alcohol (d)acetals",
          answers: [
            { text: "Carboxylic acid", correct: true },
            { text: "Ketones", correct: false },
            { text: "Alcohol", correct: false },
            { text: "Acetals", correct: false }
          ],
          explanation: "Aldehydes are oxidized by potassium permanganate (𝐾𝑀𝑛𝑂4) to form carboxylic acids."
        },
        {
          question: "The conversion of pent-1-ene to pent-2-ene when heated at a high temperature is an example of (a)Replacement reaction (b)Isomerization reaction (c)Elimination reaction (d)Addition reaction",
          answers: [
            { text: "Replacement reaction", correct: false },
            { text: "Isomerization reaction", correct: true },
            { text: "Elimination reaction", correct: false },
            { text: "Addition reaction", correct: false }
          ],
          explanation: "Heating pent-1-ene to form pent-2-ene involves rearranging the atoms within the molecule, which is an example of isomerization."
        },
        {
          question: "The main factor that determines the order of boiling points of isomeric alcohols is (a)Molecular weight (b)Solubility in water (c)Halogen bonding (d)Hydrogen bonding",
          answers: [
            { text: "Molecular weight", correct: false },
            { text: "Solubility in water", correct: false },
            { text: "Halogen bonding", correct: false },
            { text: "Hydrogen bonding", correct: true }
          ],
          explanation: "Hydrogen bonding between isomeric alcohols significantly affects their boiling points."
        },
        {
          question: "Aldehydes can be distinguished from ketones by using (a)Phenylhydrazine (b)Saturated 𝑁𝑎𝐻𝑆𝑂3 solution (c)Ammoniacal 𝐴𝑔𝑁𝑂3 solution (d)Thionyl chloride",
          answers: [
            { text: "Phenylhydrazine", correct: true },
            { text: "Saturated 𝑁𝑎𝐻𝑆𝑂3 solution", correct: false },
            { text: "Ammoniacal 𝐴𝑔𝑁𝑂3 solution", correct: false },
            { text: "Thionyl chloride", correct: false }
          ],
          explanation: "Aldehydes react with phenylhydrazine to form hydrazones, which can be used to distinguish them from ketones."
        },
        {
          question: "The process of converting large alkanes to smaller ones, alkenes and hydrogen is called ͟͟ ͟͟ (a)Thermal cracking (b)Nitration (c)Isomerization (d)Knocking",
          answers: [
            { text: "Thermal cracking", correct: true },
            { text: "Nitration", correct: false },
            { text: "Isomerization", correct: false },
            { text: "Knocking", correct: false }
          ],
          explanation: "Thermal cracking is the process of breaking down large hydrocarbons into smaller ones, including alkenes and hydrogen."
        },
        {
          question: "A hydrocarbon is made up of 90% carbon. The empirical formula of the hydrocarbon is ͟͟ ͟͟ (a) 𝐶3𝐻4 (b) CH (c) 𝐶𝐻2 (d) 𝐶3𝐻6",
          answers: [
            { text: "𝐶3𝐻4", correct: false },
            { text: "CH", correct: true },
            { text: "𝐶𝐻2", correct: false },
            { text: "𝐶3𝐻6", correct: false }
          ],
          explanation: "The empirical formula of a hydrocarbon that is 90% carbon would be CH."
        },
        {
          question: "The carbon-carbon triple bond in the ethyne molecule consists of ͟͟ ͟͟ ͟͟ ͟͟ ͟͟",
          answers: [
            { text: "One sigma bond and two pi bonds", correct: true },
            { text: "Two sigma bonds and one pi bond", correct: false },
            { text: "Three sigma bonds", correct: false },
            { text: "Two pi bonds", correct: false }
          ],
          explanation: "The triple bond in ethyne (acetylene) consists of one sigma bond and two pi bonds."
        },
        {
          question: "Which hybridization of carbon has the lowest percentage of s character?",
          answers: [
            { text: "sp3", correct: true },
            { text: "sp2", correct: false },
            { text: "sp", correct: false },
            { text: "sp3d", correct: false }
          ],
          explanation: "sp3 hybridized carbon has 25% s character, which is the lowest among the listed options."
        },
        {
          question: "The hybridization present in alkene is",
          answers: [
            { text: "sp2", correct: true },
            { text: "sp3", correct: false },
            { text: "sp", correct: false },
            { text: "sp3d", correct: false }
          ],
          explanation: "Alkenes have sp2 hybridization due to the presence of a double bond between carbon atoms."
        },
        {
          question: "Which of the following has the highest boiling point?",
          answers: [
            { text: "2-pentanone", correct: false },
            { text: "2-hexanone", correct: true },
            { text: "Butanone", correct: false },
            { text: "Propanone", correct: false }
          ],
          explanation: "2-Hexanone has the highest boiling point among the listed ketones due to its larger molecular size."
        },
        {
          question: "Sigma bonds result from",
          answers: [
            { text: "End-to-end overlap of atomic orbitals", correct: true },
            { text: "Side-to-side overlap of atomic orbitals", correct: false },
            { text: "Overlap of p orbitals", correct: false },
            { text: "Overlap of d orbitals", correct: false }
          ],
          explanation: "Sigma bonds result from end-to-end overlap of atomic orbitals."
        },
        {
          question: "Ketones are prepared by the oxidation of",
          answers: [
            { text: "Alcohols", correct: true },
            { text: "Aldehydes", correct: false },
            { text: "Hydrocarbons", correct: false },
            { text: "Ethers", correct: false }
          ],
          explanation: "Ketones can be prepared by the oxidation of secondary alcohols."
        },
        {
          question: "How many unsaturated isomers are possible for 𝐶4𝐻8?",
          answers: [
            { text: "5", correct: true },
            { text: "6", correct: false },
            { text: "4", correct: false },
            { text: "3", correct: false }
          ],
          explanation: "There are 5 unsaturated isomers possible for 𝐶4𝐻8."
        },
        {
          question: "Which of the following will have the highest boiling point?",
          answers: [
            { text: "Ethanal", correct: false },
            { text: "Butanal", correct: false },
            { text: "Methanal", correct: false },
            { text: "Propanal", correct: true }
          ],
          explanation: "Propanal (CH3CH2CHO) has the highest boiling point among the listed aldehydes."
        },
        {
          question: "How many carbon atoms are present in a molecule of 2-methylpentane?",
          answers: [
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "5", correct: true },
            { text: "6", correct: false }
          ],
          explanation: "2-Methylpentane has 5 carbon atoms."
        },
        {
          question: "How many moles of oxygen will be needed to complete combustion of butane?",
          answers: [
            { text: "6", correct: false },
            { text: "5", correct: false },
            { text: "4", correct: true },
            { text: "6.5", correct: false }
          ],
          explanation: "The combustion of butane (C4H10) follows the equation: 2C4H10 + 13O2 → 8CO2 + 10H2O. From this equation, 13 moles of O2 are required to completely combust 2 moles of butane. Therefore, to combust 1 mole of butane, 13/2 = 6.5 moles of O2 are needed. For 2 moles of butane (which is C4H10), 2 * 6.5 = 13 moles of O2 are required. Hence, for 1 mole of butane, 6.5 moles of O2 are needed."
        },
        {
          question: "When ketones react with a Grignard reagent and the complex hydrolyzed, the product is",
          answers: [
            { text: "Primary alcohol", correct: false },
            { text: "Tertiary alcohol", correct: false },
            { text: "Dihydric alcohol", correct: false },
            { text: "Secondary alcohol", correct: true }
          ],
          explanation: "Ketones react with Grignard reagents (RMgX) to form a complex, which upon hydrolysis yields a secondary alcohol."
        },
        {
          question: "The simplest formula of a compound which expresses its percentage composition is",
          answers: [
            { text: "Empirical formula", correct: true },
            { text: "Chemical formula", correct: false },
            { text: "Molecular formula", correct: false },
            { text: "General formula", correct: false }
          ],
          explanation: "The empirical formula of a compound gives the simplest whole-number ratio of atoms of each element present in the compound."
        },
        {
          question: "The number of structural isomers of saturated monohydric alcohol with molecular formula C4H9OH is",
          answers: [
            { text: "4", correct: true },
            { text: "3", correct: false },
            { text: "5", correct: false },
            { text: "5", correct: false }
          ],
          explanation: "For C4H9OH (saturated monohydric alcohol), the structural isomers are: butan-1-ol, butan-2-ol, 2-methylpropan-1-ol, and 2-methylpropan-2-ol, totaling 4 isomers."
        },
        {
          question: "Which reaction best accounts for the solubility of aldehydes?",
          answers: [
            { text: "Hydrogen bonding between solute and solvent", correct: true },
            { text: "Hydrogen bonding between solute molecules", correct: false },
            { text: "Van der Waals forces", correct: false },
            { text: "", correct: false }
          ],
          explanation: "Aldehydes exhibit solubility due to hydrogen bonding between the carbonyl oxygen and solvent molecules."
        },
        {
          question: "Name this compound CH3CH2CH2CHO",
          answers: [
            { text: "Propanal", correct: true },
            { text: "Propanone", correct: false },
            { text: "Ethanal", correct: false },
            { text: "Butanal", correct: false }
          ],
          explanation: "The compound CH3CH2CH2CHO is propanal."
        },
        {
          question: "The IUPAC name of isopropyl alcohol is",
          answers: [
            { text: "2-methylpropan-2-ol", correct: true },
            { text: "Propan-1-ol", correct: false },
            { text: "Propan-2-ol", correct: false },
            { text: "2-methylpropan-1-ol", correct: false }
          ],
          explanation: "The IUPAC name of isopropyl alcohol is 2-methylpropan-2-ol."
        },
        {
          question: "Reduction of aldehydes and ketones gives",
          answers: [
            { text: "Primary and secondary alcohol", correct: false },
            { text: "Secondary and tertiary alcohol", correct: false },
            { text: "Primary and secondary alcohol", correct: true },
            { text: "Primary and tertiary alcohol", correct: false }
          ],
          explanation: "Aldehydes are reduced to primary alcohols, and ketones are reduced to secondary alcohols."
        },
        {
          question: "Ketones are prepared from",
          answers: [
            { text: "Oxidation of secondary alcohol", correct: true },
            { text: "Reduction of acid halides with alcohol", correct: false },
            { text: "Oxidation of primary alkanol", correct: false },
            { text: "Hydrolysis of ester", correct: false }
          ],
          explanation: "Ketones can be prepared from the oxidation of secondary alcohols."
        },
        {
          question: "The process of converting large alkanes to smaller ones, alkenes and H2 is",
          answers: [
            { text: "Nitration", correct: false },
            { text: "Isomerization", correct: false },
            { text: "Thermal cracking", correct: true },
            { text: "Knocking", correct: false }
          ],
          explanation: "Thermal cracking is the process of breaking down large alkanes into smaller ones, alkenes, and hydrogen."
        },
        {
          question: "A compound has the following percentage composition: 52.17% carbon, 13.04% hydrogen, and the remainder oxygen. The number of hydrogen atoms in the empirical formula is",
          answers: [
            { text: "3", correct: true },
            { text: "6", correct: false },
            { text: "4", correct: false },
            { text: "5", correct: false }
          ],
          explanation: "To find the empirical formula, assume we have 100 g of the compound. Then, we have 52.17 g C, 13.04 g H, and the rest is oxygen. Convert grams to moles: C = 52.17 / 12.01 ≈ 4.34 moles, H = 13.04 / 1.01 ≈ 12.92 moles. Divide by the smallest number of moles (which is C) to get the empirical formula: C4H3. Multiply to get whole numbers: C4H3 × 3 = C12H9, which gives us 9 H atoms."
        },
        {
          question: "When propene completely reacts with chlorine, the name of the product formed is",
          answers: [
            { text: "1,2-dichloropropane", correct: false },
            { text: "2,2-dichloropropane", correct: true },
            { text: "Dichloropropane", correct: false },
            { text: "1-chloropropane", correct: false }
          ],
          explanation: "When propene (C3H6) reacts with chlorine, 2,2-dichloropropane is formed."
        },
        {
          question: "Which of the following hybridizations has the lowest percentage of 's' character?",
          answers: [
            { text: "sp", correct: true },
            { text: "sp2", correct: false },
            { text: "sp3", correct: false },
            { text: "All of the above", correct: false }
          ],
          explanation: "sp hybridization has 50% s character, which is lower than sp2 (33.33%) and sp3 (25%)."
        },
        {
          question: "Bromination of ethane is done in the presence of",
          answers: [
            { text: "AlCl3", correct: false },
            { text: "AlBr3", correct: false },
            { text: "CCl4", correct: false },
            { text: "HBr", correct: true }
          ],
          explanation: "Bromination of ethane is carried out using HBr (hydrobromic acid)."
        },
        {
          question: "The general formula for alkanones is",
          answers: [
            { text: "RCOOH", correct: false },
            { text: "RCOOR", correct: false },
            { text: "R2CO", correct: false },
            { text: "RCHO", correct: true }
          ],
          explanation: "Alkanones have the general formula R2CO, where R can be any alkyl group."
        },
        {
          question: "Compounds with the same molecular formula but differ in the position of a functional group on the carbon chain are",
          answers: [
            { text: "Chain isomers", correct: false },
            { text: "Tactomers", correct: false },
            { text: "Positional isomers", correct: true },
            { text: "Functional group isomers", correct: false }
          ],
          explanation: "Positional isomers have the same molecular formula but differ in the position of functional groups on the carbon chain."
        },
        {
          question: "Reduction of ethanal with H2/Ni gives",
          answers: [
            { text: "Ethanone", correct: false },
            { text: "Ethanol", correct: true },
            { text: "Ethane", correct: false },
            { text: "Ethanoic acid", correct: false }
          ],
          explanation: "Ethanal (CH3CHO) is reduced by H2/Ni to give ethanol (CH3CH2OH)."
        },
        {
          question: "Butan-2-ol and butanal are",
          answers: [
            { text: "Geometric isomers", correct: false },
            { text: "Chain isomers", correct: true },
            { text: "Functional group isomers", correct: false },
            { text: "Positional isomers", correct: false }
          ],
          explanation: "Butan-2-ol (CH3CH2CH(OH)CH3) and butanal (CH3CH2CH2CHO) are chain isomers."
        },
        {
          question: "Which of these structures represents 3-ethyl-2-methylpentanal?",
          answers: [
            { text: "CH3(CH2)2CHCH(C2H5)COH", correct: true },
            { text: "CH3CH2CH2CH(C2H3)CH(C2H5)COH", correct: false },
            { text: "CH3(CH3)2CH(CH2)CH2CH(C2H5)OH", correct: false },
            { text: "CH3CH2CH(CH2CH2)2CH(C2H5)OH", correct: false }
          ],
          explanation: "3-Ethyl-2-methylpentanal has the structure CH3(CH2)2CHCH(C2H5)COH."
        },
        {
          question: "Butanoic acid and ethyl ethanoate are isomers",
          answers: [
            { text: "True", correct: true },
            { text: "False", correct: false },
            { text: "", correct: false },
            { text: "", correct: false }
          ],
          explanation: "Butanoic acid (CH3CH2CH2COOH) and ethyl ethanoate (CH3COOC2H5) are structural isomers."
        },
        {
          question: "The bond angle in C2H4 is",
          answers: [
            { text: "120°", correct: false },
            { text: "90°", correct: false },
            { text: "109.28°", correct: true },
            { text: "180°", correct: false }
          ],
          explanation: "The bond angle in ethene (C2H4) is approximately 109.5° due to sp2 hybridization."
        },
        {
          question: "Alkenes are generally",
          answers: [
            { text: "sp2", correct: true },
            { text: "sp", correct: false },
            { text: "s", correct: false },
            { text: "sp3", correct: false }
          ],
          explanation: "Alkenes are generally sp2 hybridized due to the presence of a double bond."
        },
        {
          question: "Which of the following effects is due to the size and shapes of molecules?",
          answers: [
            { text: "Steric", correct: true },
            { text: "Electronic", correct: false },
            { text: "Resonance", correct: false },
            { text: "Inductive", correct: false }
          ],
          explanation: "Steric effects refer to the hindrance caused by the size and shape of molecules."
        },
        {
          question: "The reaction of an alkyne with sodium in liquid ammonia yields",
          answers: [
            { text: "Basic oxide", correct: false },
            { text: "Trans alkene", correct: false },
            { text: "Acidic salt", correct: false },
            { text: "Basic salt", correct: true }
          ],
          explanation: "The reaction of an alkyne with sodium in liquid ammonia (Sodamide) yields a basic salt."
        },
        {
          question: "Sigma and pi bonds in alkyne are",
          answers: [
            { text: "2,1", correct: false },
            { text: "3,1", correct: true },
            { text: "1,3", correct: false },
            { text: "1,2", correct: false }
          ],
          explanation: "In an alkyne, there are 3 sigma bonds and 1 pi bond between the carbon atoms."
        },
        {
          question: "3-Methylbutan-2-ol and 2-methylbutanol are examples of",
          answers: [
            { text: "Chain isomers", correct: true },
            { text: "Geometric isomers", correct: false },
            { text: "Functional group isomers", correct: false },
            { text: "Positional isomers", correct: false }
          ],
          explanation: "3-Methylbutan-2-ol and 2-methylbutanol are chain isomers."
        },
        {
          question: "Which of the following has the highest boiling point?",
          answers: [
            { text: "Propane", correct: false },
            { text: "Pentane", correct: true },
            { text: "Methane", correct: false },
            { text: "Ethane", correct: false }
          ],
          explanation: "Pentane (C5H12) has the highest boiling point among the listed compounds."
        },
        {
          question: "Butanal is an example of",
          answers: [
            { text: "Geometric isomers", correct: false },
            { text: "Chain isomers", correct: true },
            { text: "Functional group isomers", correct: false },
            { text: "Positional isomers", correct: false }
          ],
          explanation: "Butanal (CH3CH2CH2CHO) is an example of chain isomers."
        },
        {
          question: "A hydrazone will result from the reaction of hydrazine with",
          answers: [
            { text: "Phenol", correct: false },
            { text: "Alcohol", correct: true },
            { text: "Acid", correct: false },
            { text: "Aldehyde", correct: false }
          ],
          explanation: "Hydrazones are formed by the reaction of hydrazine with aldehydes or ketones."
        },
        {
          question: "Which of the following has the highest solubility?",
          answers: [
            { text: "CH3OH", correct: false },
            { text: "CH3CH2CH2OH", correct: false },
            { text: "CH3CH2OH", correct: true },
            { text: "CH3CH2CH2CH2OH", correct: false }
          ],
          explanation: "Among the given alcohols, ethanol (CH3CH2OH) has the highest solubility in water due to its ability to form hydrogen bonds with water molecules."
        },
        {
          question: "The reduction of ketones gives",
          answers: [
            { text: "Primary alcohol", correct: false },
            { text: "Secondary alcohol", correct: true },
            { text: "Carboxyl acid", correct: false },
            { text: "Ketal", correct: false }
          ],
          explanation: "Ketones, upon reduction, typically give secondary alcohols."
        },
        {
          question: "The Fehling solution of Cu2+ reduced to reddish Cu+ is a confirmation of",
          answers: [
            { text: "Alcohol", correct: false },
            { text: "Ketone", correct: false },
            { text: "Aldehyde", correct: true },
            { text: "Carboxyl", correct: false }
          ],
          explanation: "The reduction of Fehling's solution to form a reddish precipitate of Cu+ confirms the presence of an aldehyde."
        },
        {
          question: "Which of the following does not represent the saturated monohydric alcohol?",
          answers: [
            { text: "CnH2n+2OH", correct: false },
            { text: "CnH2n-1OH", correct: true },
            { text: "CnH2n-2OH", correct: false },
            { text: "ROH", correct: false }
          ],
          explanation: "The formula CnH2n-1OH does not represent a saturated monohydric alcohol."
        },
        {
          question: "The intermediate product of reaction between propane and H2SO4 is",
          answers: [
            { text: "CH3CH2OSO3H", correct: false },
            { text: "CH3CH2CH2SO3H", correct: false },
            { text: "CH2(SO3H)CH2CH3", correct: false },
            { text: "CH3CH(SO3H)CH3", correct: true }
          ],
          explanation: "The intermediate product formed during the reaction of propane with sulfuric acid (H2SO4) is CH3CH(SO3H)CH3."
        },
        {
          question: "Isomerisation of alkane occurs at",
          answers: [
            { text: "HCl/300°C", correct: false },
            { text: "CCl4/300°C", correct: false },
            { text: "AlCl3/300°C", correct: true },
            { text: "SO3/300°C", correct: false }
          ],
          explanation: "Isomerisation of alkanes typically occurs in the presence of AlCl3 catalyst at elevated temperatures."
        },
        {
          question: "Which of the following has the highest boiling point?",
          answers: [
            { text: "CH3OH", correct: false },
            { text: "CH3CH2CH2OH", correct: false },
            { text: "CH3CH2OH", correct: true },
            { text: "CH3CH2CH2CH2OH", correct: false }
          ],
          explanation: "Ethanol (CH3CH2OH) has the highest boiling point among the listed alcohols due to its larger size and stronger intermolecular forces."
        },
        {
          question: "2-methylpentane and 2,2-dimethylbutene are isomeric with the following except",
          answers: [
            { text: "3-methyl pentane", correct: false },
            { text: "2,3-dimethylbutane", correct: false },
            { text: "2-methylhexane", correct: false },
            { text: "hexane", correct: true }
          ],
          explanation: "Hexane is not an isomer of 2-methylpentane or 2,2-dimethylbutene."
        },
        {
          question: "The differences in the properties of isomers is due to",
          answers: [
            { text: "Different chemical properties", correct: false },
            { text: "Different functional groups", correct: false },
            { text: "Different structural formulae", correct: false },
            { text: "Different arrangement of atoms", correct: true }
          ],
          explanation: "Isomers differ primarily due to their different arrangement of atoms while having the same molecular formula."
        },
        {
          question: "The presence of silver mirror in Tollen’s test indicates the presence of",
          answers: [
            { text: "Ketone", correct: false },
            { text: "Alcohol", correct: true },
            { text: "Aldehyde", correct: false },
            { text: "Alkene", correct: false }
          ],
          explanation: "A silver mirror formed in Tollen's test confirms the presence of an alcohol."
        },
        {
          question: "Which will react with Tollen’s reagent?",
          answers: [
            { text: "Alcohol", correct: true },
            { text: "Alkanal", correct: false },
            { text: "Alkanone", correct: false },
            { text: "Alkanoate", correct: false }
          ],
          explanation: "Tollen's reagent reacts with alcohols to produce a silver mirror."
        },
        {
          question: "One of the products of combustion of pentane in excess air is",
          answers: [
            { text: "Pentanol", correct: false },
            { text: "Pentanal", correct: false },
            { text: "Pentene", correct: false },
            { text: "Carbon dioxide", correct: true }
          ],
          explanation: "Combustion of pentane in excess air produces carbon dioxide (CO2) as one of the products."
        },
        {
          question: "The IUPAC name of CH3CH(CH3)CH(OH)CH3CH3 is",
          answers: [
            { text: "1-methyl but-2-ol", correct: false },
            { text: "All is correct", correct: false },
            { text: "3-methyl butanol", correct: false },
            { text: "3-methylbutan-2-ol", correct: true }
          ],
          explanation: "The correct IUPAC name for the given structure is 3-methylbutan-2-ol."
        },
        {
          question: "Sigma bond results from",
          answers: [
            { text: "Parallel overlapping of orbital", correct: false },
            { text: "When the bond makes a pi", correct: false },
            { text: "Direct overlapping of orbital", correct: true },
            { text: "None of the above", correct: false }
          ],
          explanation: "A sigma bond results from the direct overlap of atomic orbitals along the bond axis."
        },
        {
          question: "One of these is not a secondary alcohol",
          answers: [
            { text: "3-methylpent-3-ol", correct: false },
            { text: "3-methylpent-2-ol", correct: false },
            { text: "2-methylpent-3-ol", correct: true },
            { text: "Hexan-2-ol", correct: false }
          ],
          explanation: "2-methylpent-3-ol is not a secondary alcohol; it's a tertiary alcohol."
        },
        {
          question: "The reaction between C2H2 and HBr is called",
          answers: [
            { text: "Ammoniacal silver nitrate", correct: false },
            { text: "Ammonia silver concentration", correct: false },
            { text: "Bromine water", correct: true },
            { text: "KMnO4", correct: false }
          ],
          explanation: "The reaction between acetylene (C2H2) and HBr is known as bromination."
        },
        {
          question: "Ketones are prepared by the oxidation of",
          answers: [
            { text: "Tertiary alkanol", correct: false },
            { text: "Monohydric alkanol", correct: false },
            { text: "Primary alkanol", correct: false },
            { text: "Secondary alkanol", correct: true }
          ],
          explanation: "Ketones are typically prepared by the oxidation of secondary alcohols."
        },
        {
          question: "Propanal and propanone are examples of",
          answers: [
            { text: "Optical isomerism", correct: false },
            { text: "Geometric isomerism", correct: false },
            { text: "Positional isomerism", correct: false },
            { text: "Functional isomerism", correct: true }
          ],
          explanation: "Propanal and propanone are functional isomers, differing in the position of the carbonyl group."
        },
        {
          question: "Alcohols have a higher boiling point than expected from their molecular weight because",
          answers: [
            { text: "Hydrogen bond must be broken in the process of volatization", correct: false },
            { text: "Ionic forces are very strong in alcohol molecules", correct: false },
            { text: "Covalent bonds are very strong in alcohol molecules", correct: false },
            { text: "Van der Waals forces of attraction are strong in alcohol molecules", correct: true }
          ],
          explanation: "Alcohols have higher boiling points due to the presence of hydrogen bonding and stronger van der Waals forces."
        },
        {
          question: "Any species that contain unpaired electron is called",
          answers: [
            { text: "Anion", correct: false },
            { text: "Ionic", correct: false },
            { text: "Free radical", correct: true },
            { text: "Cation", correct: false }
          ],
          explanation: "A species with an unpaired electron is termed a free radical."
        },
        {
          question: "The number of saturated monohydric alcohol with molecular formula C4H9OH is",
          answers: [
            { text: "4", correct: false },
            { text: "3", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false }
          ],
          explanation: "There are three saturated monohydric alcohols with the molecular formula C4H9OH."
        },
        {
          question: "Isomers of a substance must have",
          answers: [
            { text: "Same structural formula", correct: true },
            { text: "Same molecular weight", correct: false },
            { text: "Same chemical properties", correct: false },
            { text: "Same functional group", correct: false }
          ],
          explanation: "Isomers of a substance must have the same molecular formula but different structural formulae."
        },
        {
          question: "The intermediate product of the reaction between propene and H2SO4 is",
          answers: [
            { text: "CH3CH2OSO3H", correct: false },
            { text: "CH3CH2CH2SO3H", correct: false },
            { text: "CH2(SO3H)CH2CH3", correct: false },
            { text: "CH3CH(SO3H)CH3", correct: true }
          ],
          explanation: "The reaction of propene with sulfuric acid (H2SO4) produces CH3CH(SO3H)CH3 as an intermediate product."
        },
        {
          question: "Which of the following show geometrical isomerism?",
          answers: [
            { text: "Ethane", correct: false },
            { text: "1,2-dichloropropane", correct: true },
            { text: "2-pentanone", correct: false },
            { text: "2-methyl-2-butene", correct: false }
          ],
          explanation: "1,2-Dichloropropane exhibits geometrical isomerism due to the restricted rotation around the C-C bond."
        },
        {
          question: "Which of the following has the highest boiling point?",
          answers: [
            { text: "2-hexanone", correct: true },
            { text: "Butanone", correct: false },
            { text: "Propanone", correct: false },
            { text: "2-pentanone", correct: false }
          ],
          explanation: "2-hexanone has the highest boiling point among the given ketones due to its larger molecular size and increased van der Waals forces."
        },
        {
          question: "What is the IUPAC name of (𝐶𝐻3)2𝐶𝐻𝐶𝐻2𝐶𝐻(𝐶𝐻3)𝐶𝐻2𝐶𝐻3?",
          answers: [
            { text: "2-methyl-4-ethylpentane", correct: false },
            { text: "2-ethyl-4-methylpentane", correct: true },
            { text: "Octane", correct: false },
            { text: "2,4-dimethylhexane", correct: false }
          ],
          explanation: "The correct IUPAC name for the given structure is 2-ethyl-4-methylpentane."
        },
        {
          question: "The main factors that determine the order of boiling points of isomeric alcohol",
          answers: [
            { text: "Molecular weight", correct: false },
            { text: "Solubility in water", correct: false },
            { text: "Hydrogen bonding", correct: true },
            { text: "Halogen bonding", correct: false }
          ],
          explanation: "The order of boiling points of isomeric alcohols is primarily determined by their ability to form hydrogen bonds with each other."
        },
        {
          question: "The condensed formula of 3-methylbutan-2-ol is",
          answers: [
            { text: "𝐶𝐻3𝐶𝐻2𝐶𝐻2𝐶𝐻(𝐶𝐻3)𝐶𝐻𝑂", correct: false },
            { text: "𝐶𝐻3𝐶𝐻𝑂𝐻𝐶𝐻2𝐶𝐻2𝐶𝐻3", correct: false },
            { text: "𝐶𝐻3𝐶𝐻(𝐶𝐻3)𝐶𝑂𝐶𝐻3", correct: false },
            { text: "(𝐶𝐻3)2𝐶𝐻𝐶𝑂𝐶𝐻3", correct: true }
          ],
          explanation: "The condensed formula of 3-methylbutan-2-ol is (𝐶𝐻3)2𝐶𝐻𝐶𝑂𝐶𝐻3."
        },
        {
          question: "Which of the following represent 5-bromopent-2-yne",
          answers: [
            { text: "𝐵𝑟𝐶𝐻2𝐶𝐻2 ≡ 𝐶𝐶𝐻3", correct: false },
            { text: "𝐶𝐻3𝐶𝐻2𝐶 ≡ 𝐶𝐶𝐻𝐵𝑟", correct: false },
            { text: "𝐵𝑟𝐶𝐻2𝐶𝐻(𝐵𝑟)𝐶 ≡ 𝐶𝐶𝐻3", correct: true },
            { text: "𝐶𝐻3𝐶𝐻(𝐵𝑟)𝐶 ≡ 𝐶𝐶𝐻3", correct: false }
          ],
          explanation: "The structure 5-bromopent-2-yne is represented as 𝐵𝑟𝐶𝐻2𝐶𝐻(𝐵𝑟)𝐶 ≡ 𝐶𝐶𝐻3."
        },
        {
          question: "What type of isomerism is in 𝐶𝐻3𝐶𝑂𝐶𝐻3",
          answers: [
            { text: "Geometrical isomerism", correct: false },
            { text: "Positional isomerism", correct: false },
            { text: "Functional group isomerism", correct: false },
            { text: "Optical isomerism", correct: true }
          ],
          explanation: "𝐶𝐻3𝐶𝑂𝐶𝐻3 exhibits optical isomerism."
        },
        {
          question: "The product of combustion of pentane in excess air is",
          answers: [
            { text: "𝐶𝑂2", correct: true },
            { text: "Pentene", correct: false },
            { text: "Pentanol", correct: false },
            { text: "Pentanoic acid", correct: false }
          ],
          explanation: "Combustion of pentane in excess air produces carbon dioxide (𝐶𝑂2) as a product."
        },
        {
          question: "Quantitative analysis show that the empirical formula of a compound is 𝐶𝐻 and the vapour density is 39, find the empirical formula",
          answers: [
            { text: "𝐶2𝐻2", correct: false },
            { text: "𝐶6𝐻6", correct: true },
            { text: "𝐶6𝐻12", correct: false },
            { text: "𝐶2𝐻6", correct: false }
          ],
          explanation: "Given the vapour density of 39, the empirical formula of the compound is 𝐶6𝐻6."
        },
        {
          question: "͟͟ ͟͟ ͟͟ is used in dry cleaning",
          answers: [
            { text: "𝐶𝐻3𝐶𝑙3", correct: true },
            { text: "𝐶𝐶𝑙4", correct: false },
            { text: "𝐶𝐻2𝐶𝑙2", correct: false },
            { text: "𝐶𝐻3𝐶𝑙", correct: false }
          ],
          explanation: "𝐶𝐻3𝐶𝑙3 (perchloroethylene) is commonly used in dry cleaning."
        },
        {
          question: "Alkenes show geometrical isomerism due to",
          answers: [
            { text: "Resonance", correct: false },
            { text: "Rotation around single bond", correct: false },
            { text: "Restricted rotation around a double bond", correct: true },
            { text: "Asymmetry", correct: false }
          ],
          explanation: "Geometrical isomerism in alkenes arises due to restricted rotation around the carbon-carbon double bond."
        },
        {
          question: "Which of these compounds will ͟͟ reduce ͟͟ Fehling’s ͟͟ solution?",
          answers: [
            { text: "𝐶𝐻3𝐶𝐻𝑂", correct: true },
            { text: "𝐶𝐻3𝐶𝐻(𝑂𝐻)𝐶𝐻3", correct: false },
            { text: "(𝐶𝐻3)2𝐶𝑂", correct: false },
            { text: "𝐶𝐻3𝐶𝐻2𝐶𝐻2𝐶𝐻2𝑂𝐻", correct: false }
          ],
          explanation: "Alcohol (𝐶𝐻3𝐶𝐻𝑂) can reduce Fehling's solution."
        },
        {
          question: "A hydrocarbon X which decolourize bromine water has no action on ammoniacal silver trioxonitrate(v) solution was found to have a molar mass 56𝑔𝑚𝑜𝑙−1. Which one of the following is the molecular formula of X?",
          answers: [
            { text: "None", correct: false },
            { text: "𝐶4𝐻8", correct: true },
            { text: "𝐶3𝐻6", correct: false },
            { text: "𝐶4𝐻8", correct: false }
          ],
          explanation: "The molecular formula of X, given a molar mass of 56 g/mol and properties described, is 𝐶4𝐻8."
        },
        {
          question: "How many structural isomerism is there in 𝐶2𝐻4𝑂𝐻?",
          answers: [
            { text: "2", correct: false },
            { text: "4", correct: true },
            { text: "6", correct: false },
            { text: "3", correct: false }
          ],
          explanation: "𝐶2𝐻4𝑂𝐻 has 4 structural isomers."
        },
        {
          question: "Name this (𝐶𝐻3)2𝐶𝐻𝐶 ≡ 𝐶𝐶𝐻3",
          answers: [
            { text: "4-methylpent-2-yne", correct: false },
            { text: "4,4-dimethylbut-2-yne", correct: false },
            { text: "1,1-dimethylpent-2-yne", correct: true },
            { text: "2-methylpent-2-yne", correct: false }
          ],
          explanation: "The compound (𝐶𝐻3)2𝐶𝐻𝐶 ≡ 𝐶𝐶𝐻3 is named 1,1-dimethylpent-2-yne."
        },
        {
          question: "Which of the following will react readily with both aldehyde and ketones?",
          answers: [
            { text: "Tollen’s reagent", correct: true },
            { text: "Fehling’s reagent", correct: false },
            { text: "Schiff’s reagent", correct: false },
            { text: "Grignard reagent", correct: false }
          ],
          explanation: "Tollen’s reagent (ammoniacal silver nitrate) reacts readily with both aldehydes and ketones."
        },
        {
          question: "Empirical formula 𝐶𝐻2𝑂 with molar mass 90. Calculate the molecular formula",
          answers: [
            { text: "𝐶3𝐻4𝑂6", correct: false },
            { text: "𝐶3𝐻2𝑂3", correct: true },
            { text: "𝐶3𝐻6𝑂2", correct: false },
            { text: "𝐶2𝐻3𝑂4", correct: false }
          ],
          explanation: "The molecular formula corresponding to 𝐶𝐻2𝑂 with a molar mass of 90 is 𝐶3𝐻2𝑂3."
        },
        {
          question: "Which type of reaction exist between 𝐶𝐻2 + 𝐻𝐵𝑟?",
          answers: [
            { text: "Polymerisation", correct: false },
            { text: "Substitution", correct: false },
            { text: "Addition", correct: true }
          ],
          explanation: "The reaction between 𝐶𝐻2 and 𝐻𝐵𝑟 is an addition reaction."
        },
        {
          question: "Which of these is correct for 𝐶𝐻3 − 𝐶𝐻 = 𝐶(𝐶𝐻3)2𝐶𝐻3",
          answers: [
            { text: "2-methylbutene", correct: false },
            { text: "2,2-dimethylbut-2-ene", correct: false },
            { text: "2-dimethylbutene", correct: true }
          ],
          explanation: "The correct name for 𝐶𝐻3 − 𝐶𝐻 = 𝐶(𝐶𝐻3)2𝐶𝐻3 is 2-dimethylbutene."
        },
        {
          question: "Ketones are partially oxidized to give",
          answers: [
            { text: "primary alcohol", correct: true },
            { text: "Halides", correct: false },
            { text: "ester", correct: false }
          ],
          explanation: "Partial oxidation of ketones results in the formation of primary alcohols."
        },
        {
          question: "What is the chemical formula for astatine",
          answers: [
            { text: "Tn", correct: false },
            { text: "At", correct: true },
            { text: "As", correct: false },
            { text: "St", correct: false }
          ],
          explanation: "The chemical symbol for astatine is At."
        },
        {
          question: "Which one is group 1 element",
          answers: [
            { text: "Rb", correct: true },
            { text: "Rn", correct: false },
            { text: "Ra", correct: false },
            { text: "Ru", correct: false }
          ],
          explanation: "Rb (Rubidium) is a Group 1 element."
        },
        {
          question: "Which of the following is completely an acid",
          answers: [
            { text: "NaCl", correct: false },
            { text: "HCl", correct: true },
            { text: "HI", correct: false },
            { text: "HBr", correct: false }
          ],
          explanation: "HCl (Hydrochloric acid) is a completely acidic compound."
        },
        {
          question: "The melting point of aldehyde and ketones tends to",
          answers: [
            { text: "Remain unchanged", correct: false },
            { text: "Increase with increasing molecular weight", correct: false },
            { text: "Decrease with increasing molecular weight", correct: true }
          ],
          explanation: "Aldehydes and ketones generally have lower melting points which decrease with increasing molecular weight."
        },
        {
          question: "Isomerism that differ in spatial arrangement is",
          answers: [
            { text: "Optical isomerism", correct: true },
            { text: "Stereo isomerism", correct: false },
            { text: "Positional isomerism", correct: false }
          ],
          explanation: "Isomerism that differs in spatial arrangement is called optical isomerism."
        },
        {
          question: "The complete hydrogenation of 𝐶6𝐻6 in the presence of nickel catalyst at 200°C gives",
          answers: [
            { text: "𝐶6𝐻12", correct: false },
            { text: "𝐶6𝐻8", correct: false },
            { text: "𝐶6𝐻14", correct: true },
            { text: "𝐶6𝐻10", correct: false }
          ],
          explanation: "Complete hydrogenation of 𝐶6𝐻6 gives 𝐶6𝐻14 (cyclohexane)."
        },
        {
          question: "Two compounds have the same compounds and also have the same atoms attached, although with different orientation in space. The compounds are",
          answers: [
            { text: "Positional isomerism", correct: false },
            { text: "Stereo isomerism", correct: true },
            { text: "Structural isomerism", correct: false },
            { text: "Identical isomerism", correct: false }
          ],
          explanation: "Compounds that have the same structural formula and atoms attached but differ in their spatial arrangement are stereo isomers."
        },
      {
        question: "What is the defining characteristic of allotropes?",
        answers: [
          { text: "Different physical states", correct: true },
          { text: "Same atomic arrangement", correct: false },
          { text: "Different chemical elements", correct: false },
          { text: "Same melting points", correct: false }
        ],
        explanation: "Allotropes are different forms of the same element, with the same chemical properties but different physical properties."
      },
      {
        question: "Which allotrope of carbon is known for its hardness?",
        answers: [
          { text: "Graphite", correct: false },
          { text: "Graphene", correct: false },
          { text: "Diamond", correct: true },
          { text: "Fullerene", correct: false }
        ],
        explanation: "Diamond is known for being the hardest natural substance."
      },
      {
        question: "Fullerene is composed of which element?",
        answers: [
          { text: "Hydrogen", correct: false },
          { text: "Carbon", correct: true },
          { text: "Nitrogen", correct: false },
          { text: "Oxygen", correct: false }
        ],
        explanation: "Fullerenes are molecules composed entirely of carbon atoms, arranged in a hollow sphere, ellipsoid, or tube."
      },
      {
        question: "Who discovered fullerene?",
        answers: [
          { text: "Marie Curie", correct: false },
          { text: "Isaac Newton", correct: false },
          { text: "Richard Smalley", correct: true },
          { text: "Albert Einstein", correct: false }
        ],
        explanation: "Fullerene was discovered by Richard Smalley, along with Robert Curl and Harold Kroto."
      },
      {
        question: "What structure do the carbon atoms in fullerene form?",
        answers: [
          { text: "Square", correct: false },
          { text: "Cubic", correct: false },
          { text: "Cage-like", correct: true },
          { text: "Linear", correct: false }
        ],
        explanation: "Fullerenes have a cage-like structure, which can enclose other atoms or molecules."
      },
      {
        question: "Which allotrope of carbon has a structure similar to that of graphite?",
        answers: [
          { text: "Diamond", correct: false },
          { text: "Graphene", correct: true },
          { text: "Fullerene", correct: false },
          { text: "Carbon nanotubes", correct: false }
        ],
        explanation: "Graphene consists of a single layer of carbon atoms arranged in a hexagonal lattice, similar to a single layer of graphite."
      },
      {
        question: "What is the composition formula for fullerene?",
        answers: [
          { text: "C<sub>n</sub>H<sub>2n</sub>", correct: false },
          { text: "C<sub>2n</sub> where n≥30", correct: true },
          { text: "C<sub>n</sub>H<sub>2n+2</sub>", correct: false },
          { text: "C<sub>n</sub>O<sub>n</sub>", correct: false }
        ],
        explanation: "Fullerenes are composed entirely of carbon atoms, with the general formula C<sub>2n</sub> where n≥30."
      },
      {
        question: "Which of the following is a type of fullerene?",
        answers: [
          { text: "Diamond", correct: false },
          { text: "Nanotubes", correct: true },
          { text: "Graphite", correct: false },
          { text: "Silicon", correct: false }
        ],
        explanation: "Carbon nanotubes are cylindrical fullerenes with unique electrical properties."
      },
      {
        question: "Buckminsterfullerene is also known as?",
        answers: [
          { text: "C<sub>60</sub>", correct: true },
          { text: "C<sub>70</sub>", correct: false },
          { text: "C<sub>80</sub>", correct: false },
          { text: "C<sub>90</sub>", correct: false }
        ],
        explanation: "Buckminsterfullerene, or C<sub>60</sub>, is a molecule composed of 60 carbon atoms arranged in a spherical shape."
      },
      {
        question: "What shape is Buckminsterfullerene?",
        answers: [
          { text: "Cubic", correct: false },
          { text: "Spherical", correct: true },
          { text: "Tetrahedral", correct: false },
          { text: "Linear", correct: false }
        ],
        explanation: "Buckminsterfullerene has a spherical structure, resembling a soccer ball."
      },
      {
        question: "Nanotubes are a type of fullerene with what characteristic?",
        answers: [
          { text: "High electrical and thermal conductivity", correct: true },
          { text: "Low density", correct: false },
          { text: "Non-reactive", correct: false },
          { text: "Brittle", correct: false }
        ],
        explanation: "Carbon nanotubes are known for their excellent electrical and thermal conductivity, as well as their mechanical strength."
      },
      {
        question: "What is a key application of nano-onions?",
        answers: [
          { text: "Electronics", correct: false },
          { text: "Lubricants", correct: true },
          { text: "Building materials", correct: false },
          { text: "Food industry", correct: false }
        ],
        explanation: "Nano-onions, a type of fullerene, are used as lubricants due to their unique layered structure."
      },
      {
        question: "What is the difference between megatubes and nanotubes?",
        answers: [
          { text: "Size", correct: true },
          { text: "Chemical composition", correct: false },
          { text: "Electrical properties", correct: false },
          { text: "Thermal stability", correct: false }
        ],
        explanation: "Megatubes are larger than nanotubes, with a diameter in the nanometer to micrometer range."
      },
      {
        question: "Which of the following elements is a noble gas?",
        answers: [
          { text: "Neon", correct: true },
          { text: "Nitrogen", correct: false },
          { text: "Oxygen", correct: false },
          { text: "Fluorine", correct: false }
        ],
        explanation: "Neon is a noble gas, which is found in Group 18 of the periodic table."
      },
      {
        question: "Which element is found in Group 1 and is known for its high reactivity?",
        answers: [
          { text: "Lithium", correct: true },
          { text: "Calcium", correct: false },
          { text: "Magnesium", correct: false },
          { text: "Aluminum", correct: false }
        ],
        explanation: "Lithium is an alkali metal in Group 1 and is highly reactive."
      },
      {
        question: "Which of the following elements is in Group 14 of the periodic table?",
        answers: [
          { text: "Carbon", correct: true },
          { text: "Oxygen", correct: false },
          { text: "Neon", correct: false },
          { text: "Sulfur", correct: false }
        ],
        explanation: "Carbon is an element in Group 14 of the periodic table."
      },
      {
        question: "The element with atomic number 12 is in which group of the periodic table?",
        answers: [
          { text: "Group 1", correct: false },
          { text: "Group 2", correct: true },
          { text: "Group 13", correct: false },
          { text: "Group 14", correct: false }
        ],
        explanation: "The element with atomic number 12 is magnesium, which is in Group 2."
      },
      {
        question: "Which of the following is a halogen?",
        answers: [
          { text: "Chlorine", correct: true },
          { text: "Sodium", correct: false },
          { text: "Argon", correct: false },
          { text: "Calcium", correct: false }
        ],
        explanation: "Chlorine is a halogen, found in Group 17 of the periodic table."
      },
      {
        question: "Which of the following metals is an alkali metal?",
        answers: [
          { text: "Sodium", correct: true },
          { text: "Iron", correct: false },
          { text: "Copper", correct: false },
          { text: "Gold", correct: false }
        ],
        explanation: "Sodium is an alkali metal found in Group 1."
      },
      {
        question: "Which of the following elements is a transition metal?",
        answers: [
          { text: "Iron", correct: true },
          { text: "Sulfur", correct: false },
          { text: "Helium", correct: false },
          { text: "Potassium", correct: false }
        ],
        explanation: "Iron is a transition metal located in the d-block of the periodic table."
      },
      {
        question: "Which group contains elements that are known for having full outer electron shells?",
        answers: [
          { text: "Group 1", correct: false },
          { text: "Group 17", correct: false },
          { text: "Group 18", correct: true },
          { text: "Group 14", correct: false }
        ],
        explanation: "Group 18 elements, known as noble gases, have full outer electron shells."
      },
      {
        question: "Which element in Group 15 is known for being a common component of fertilizers?",
        answers: [
          { text: "Phosphorus", correct: true },
          { text: "Nitrogen", correct: false },
          { text: "Arsenic", correct: false },
          { text: "Antimony", correct: false }
        ],
        explanation: "Phosphorus is commonly used in fertilizers and is in Group 15 of the periodic table."
      },
      {
        question: "The element with the highest atomic number in Group 2 is:",
        answers: [
          { text: "Magnesium", correct: false },
          { text: "Calcium", correct: false },
          { text: "Strontium", correct: false },
          { text: "Radium", correct: true }
        ],
        explanation: "Radium is the element with the highest atomic number in Group 2."
      },
      {
        question: "Which element is commonly used in batteries and is found in Group 1?",
        answers: [
          { text: "Lithium", correct: true },
          { text: "Rubidium", correct: false },
          { text: "Cesium", correct: false },
          { text: "Sodium", correct: false }
        ],
        explanation: "Lithium is commonly used in batteries and is an alkali metal in Group 1."
      },
      {
        question: "Which of the following elements is found in Group 13 and is a metalloid?",
        answers: [
          { text: "Aluminum", correct: false },
          { text: "Gallium", correct: false },
          { text: "Boron", correct: true },
          { text: "Indium", correct: false }
        ],
        explanation: "Boron is a metalloid found in Group 13 of the periodic table."
      },
      {
        question: "Which of the following is an element in Group 16 known for its role in respiration?",
        answers: [
          { text: "Oxygen", correct: true },
          { text: "Sulfur", correct: false },
          { text: "Selenium", correct: false },
          { text: "Tellurium", correct: false }
        ],
        explanation: "Oxygen is a Group 16 element essential for respiration."
      },
      {
        question: "Which of the following elements is an alkali earth metal?",
        answers: [
          { text: "Beryllium", correct: true },
          { text: "Sodium", correct: false },
          { text: "Iron", correct: false },
          { text: "Neon", correct: false }
        ],
        explanation: "Beryllium is an alkaline earth metal found in Group 2."
      },
      
      {
        question: "Which of the following metals is found in Group 10 and is used in jewelry?",
        answers: [
          { text: "Platinum", correct: true },
          { text: "Copper", correct: false },
          { text: "Lead", correct: false },
          { text: "Nickel", correct: false }
        ],
        explanation: "Platinum is a Group 10 metal often used in jewelry."
      },
      {
        question: "Which of the following is a characteristic of the alkaline earth metals?",
        answers: [
          { text: "They are highly reactive and soft", correct: false },
          { text: "They have two electrons in their outer shell", correct: true },
          { text: "They are gaseous at room temperature", correct: false },
          { text: "They have one electron in their outer shell", correct: false }
        ],
        explanation: "Alkaline earth metals have two electrons in their outer shell and are less reactive than alkali metals."
      },
      {
        question: "Which element in Group 17 is commonly used as a disinfectant?",
        answers: [
          { text: "Chlorine", correct: true },
          { text: "Fluorine", correct: false },
          { text: "Iodine", correct: false },
          { text: "Bromine", correct: false }
        ],
        explanation: "Chlorine is commonly used as a disinfectant."
      },
      {
        question: "Which of the following elements is not a metalloid?",
        answers: [
          { text: "Silicon", correct: false },
          { text: "Germanium", correct: false },
          { text: "Arsenic", correct: false },
          { text: "Magnesium", correct: true }
        ],
        explanation: "Magnesium is a metal, not a metalloid."
      },
      {
        question: "Which of the following elements is found in Group 3 and is used in catalytic converters?",
        answers: [
          { text: "Rhodium", correct: true },
          { text: "Boron", correct: false },
          { text: "Sodium", correct: false },
          { text: "Copper", correct: false }
        ],
        explanation: "Rhodium is a Group 3 element used in catalytic converters."
      },
      {
        question: "Which of the following elements is a noble gas that is used in neon signs?",
        answers: [
          { text: "Neon", correct: true },
          { text: "Argon", correct: false },
          { text: "Krypton", correct: false },
          { text: "Xenon", correct: false }
        ],
        explanation: "Neon is used in neon signs and is a noble gas."
      },
      {
        question: "Which of the following elements is a member of Group 15 and is used in semiconductors?",
        answers: [
          { text: "Arsenic", correct: true },
          { text: "Phosphorus", correct: false },
          { text: "Antimony", correct: false },
          { text: "Nitrogen", correct: false }
        ],
        explanation: "Arsenic is used in semiconductors and is a Group 15 element."
      },
      {
        question: "Which element is known as the lightest halogen?",
        answers: [
          { text: "Fluorine", correct: true },
          { text: "Chlorine", correct: false },
          { text: "Bromine", correct: false },
          { text: "Iodine", correct: false }
        ],
        explanation: "Fluorine is the lightest halogen."
      },
      {
        question: "Which of the following is true for transition metals?",
        answers: [
          { text: "They have d-electrons in their outer shell", correct: true },
          { text: "They are highly reactive nonmetals", correct: false },
          { text: "They form only one type of ion", correct: false },
          { text: "They have full outer shells of electrons", correct: false }
        ],
        explanation: "Transition metals have d-electrons in their outer shell."
      },
      {
        question: "Which of the following elements is a Group 2 metal and is used in fireworks?",
        answers: [
          { text: "Strontium", correct: false },
          { text: "Calcium", correct: false },
          { text: "Barium", correct: false },
          { text: "Magnesium", correct: true }
        ],
        explanation: "Magneisum is used in fireworks and is a Group 2 metal."
      },
      {
        question: "Which of the following elements is a Group 18 noble gas with the highest atomic number?",
        answers: [
          { text: "Radon", correct: true },
          { text: "Neon", correct: false },
          { text: "Xenon", correct: false },
          { text: "Argon", correct: false }
        ],
        explanation: "Radon is the noble gas with the highest atomic number in Group 18."
      },
      {
        question: "Which of the following elements is a Group 17 halogen known for its yellow color?",
        answers: [
          { text: "Iodine", correct: false },
          { text: "Fluorine", correct: false },
          { text: "Chlorine", correct: false },
          { text: "Bromine", correct: true }
        ],
        explanation: "Bromine is a yellow-colored halogen in Group 17."
      },
      {
        question: "Which of the following metals is found in Group 6 and is used in stainless steel?",
        answers: [
          { text: "Chromium", correct: true },
          { text: "Molybdenum", correct: false },
          { text: "Tungsten", correct: false },
          { text: "Iron", correct: false }
        ],
        explanation: "Chromium is used in stainless steel and is a Group 6 metal."
      },
      {
        question: "Which element in Group 13 is commonly used as a conductor in electrical cables?",
        answers: [
          { text: "Aluminum", correct: true },
          { text: "Gallium", correct: false },
          { text: "Indium", correct: false },
          { text: "Thallium", correct: false }
        ],
        explanation: "Aluminum is widely used as a conductor in electrical cables and is in Group 13."
      },
      {
        question: "Which of the following elements is a metalloid and is used in semiconductors?",
        answers: [
          { text: "Silicon", correct: true },
          { text: "Germanium", correct: false },
          { text: "Arsenic", correct: false },
          { text: "Selenium", correct: false }
        ],
        explanation: "Silicon is a metalloid used in semiconductors."
      },
      {
        question: "Which of the following elements is in Group 14 and is a key component of organic compounds?",
        answers: [
          { text: "Carbon", correct: true },
          { text: "Silicon", correct: false },
          { text: "Germanium", correct: false },
          { text: "Tin", correct: false }
        ],
        explanation: "Carbon is a Group 14 element and a key component of organic compounds."
      },
      {
        question: "Which of the following elements is known for its use in batteries and is found in Group 2?",
        answers: [
          { text: "Magnesium", correct: false },
          { text: "Calcium", correct: false },
          { text: "Barium", correct: false },
          { text: "Strontium", correct: true }
        ],
        explanation: "Strontium is used in certain types of batteries and is a Group 2 element."
      },
      {
        question: "Which of the following elements is used in neon lights and is found in Group 18?",
        answers: [
          { text: "Neon", correct: true },
          { text: "Krypton", correct: false },
          { text: "Xenon", correct: false },
          { text: "Argon", correct: false }
        ],
        explanation: "Neon is used in neon lights and is a Group 18 noble gas."
      },
      {
        question: "Which element in Group 15 is used in fertilizers and explosives?",
        answers: [
          { text: "Nitrogen", correct: true },
          { text: "Phosphorus", correct: false },
          { text: "Arsenic", correct: false },
          { text: "Antimony", correct: false }
        ],
        explanation: "Nitrogen is used in fertilizers and explosives and is in Group 15."
      },
      {
        question: "Which of the following metals is used in jewelry and is found in Group 11?",
        answers: [
          { text: "Gold", correct: true },
          { text: "Silver", correct: false },
          { text: "Copper", correct: false },
          { text: "Platinum", correct: false }
        ],
        explanation: "Gold is a Group 11 metal used in jewelry."
      },
      {
        question: "Which of the following elements is used in smoke detectors and is found in Group 16?",
        answers: [
          { text: "Radon", correct: true },
          { text: "Sulfur", correct: false },
          { text: "Selenium", correct: false },
          { text: "Tellurium", correct: false }
        ],
        explanation: "Radon is used in smoke detectors and is a Group 16 element."
      },
      {
        question: "Which of the following elements is an alkaline earth metal used in fireworks?",
        answers: [
          { text: "Strontium", correct: false },
          { text: "Calcium", correct: false },
          { text: "Barium", correct: false },
          { text: "Magnesium", correct: true }
        ],
        explanation: "Magnesium is an alkaline earth metal used in fireworks."
      },
      {
        question: "Which of the following elements is a transition metal used in jewelry?",
        answers: [
          { text: "Platinum", correct: true },
          { text: "Silver", correct: false },
          { text: "Copper", correct: false },
          { text: "Nickel", correct: false }
        ],
        explanation: "Platinum is a transition metal often used in jewelry."
      },
      {
        question: "Which element in Group 17 is a liquid at room temperature?",
        answers: [
          { text: "Bromine", correct: true },
          { text: "Iodine", correct: false },
          { text: "Chlorine", correct: false },
          { text: "Fluorine", correct: false }
        ],
        explanation: "Bromine is a liquid at room temperature and is in Group 17."
      },
      {
        question: "Which of the following elements is found in Group 15 and is used in semiconductors?",
        answers: [
          { text: "Arsenic", correct: true },
          { text: "Phosphorus", correct: false },
          { text: "Antimony", correct: false },
          { text: "Nitrogen", correct: false }
        ],
        explanation: "Arsenic is used in semiconductors and is a Group 15 element."
      },
      {
        question: "Which element is found in Group 16 and is essential for cellular respiration?",
        answers: [
          { text: "Oxygen", correct: true },
          { text: "Sulfur", correct: false },
          { text: "Selenium", correct: false },
          { text: "Tellurium", correct: false }
        ],
        explanation: "Oxygen is essential for cellular respiration and is found in Group 16."
      },
      {
        question: "Which of the following is a transition metal used in stainless steel?",
        answers: [
          { text: "Chromium", correct: true },
          { text: "Iron", correct: false },
          { text: "Nickel", correct: false },
          { text: "Manganese", correct: false }
        ],
        explanation: "Chromium is used in stainless steel and is a transition metal."
      },
      {
        question: "Which of the following elements is known for its use in fire extinguishers and is found in Group 17?",
        answers: [
          { text: "Bromine", correct: true },
          { text: "Chlorine", correct: false },
          { text: "Iodine", correct: false },
          { text: "Fluorine", correct: false }
        ],
        explanation: "Bromine is used in fire extinguishers and is a Group 17 element."
      },
      {
        question: "Which element in Group 1 is known for its use in table salt?",
        answers: [
          { text: "Sodium", correct: true },
          { text: "Potassium", correct: false },
          { text: "Lithium", correct: false },
          { text: "Rubidium", correct: false }
        ],
        explanation: "Sodium is used in table salt and is an alkali metal in Group 1."
      },
      {
        question: "Which of the following is a member of Group 14 and is used in the manufacturing of semiconductors?",
        answers: [
          { text: "Silicon", correct: true },
          { text: "Carbon", correct: false },
          { text: "Germanium", correct: false },
          { text: "Tin", correct: false }
        ],
        explanation: "Silicon is used in the manufacturing of semiconductors and is in Group 14."
      },
      {
        question: "Which element is a noble gas and used in lighting displays?",
        answers: [
          { text: "Neon", correct: true },
          { text: "Krypton", correct: false },
          { text: "Xenon", correct: false },
          { text: "Argon", correct: false }
        ],
        explanation: "Neon is used in lighting displays and is a noble gas in Group 18."
      },
      {
        question: "Which element in Group 15 is used in the production of ammonia?",
        answers: [
          { text: "Nitrogen", correct: true },
          { text: "Phosphorus", correct: false },
          { text: "Arsenic", correct: false },
          { text: "Antimony", correct: false }
        ],
        explanation: "Nitrogen is used in the production of ammonia and is a Group 15 element."
      },
      {
        question: "Which of the following is a noble gas used in high-intensity lighting?",
        answers: [
          { text: "Krypton", correct: true },
          { text: "Neon", correct: false },
          { text: "Xenon", correct: false },
          { text: "Argon", correct: false }
        ],
        explanation: "Krypton is used in high-intensity lighting and is a noble gas in Group 18."
      },
      {
        question: "Which element in Group 1 is used in batteries for its light weight?",
        answers: [
          { text: "Lithium", correct: true },
          { text: "Sodium", correct: false },
          { text: "Potassium", correct: false },
          { text: "Rubidium", correct: false }
        ],
        explanation: "Lithium is used in batteries due to its light weight and is an alkali metal in Group 1."
      },
      {
        question: "Which of the following elements is a transition metal used in magnetic materials?",
        answers: [
          { text: "Iron", correct: true },
          { text: "Copper", correct: false },
          { text: "Zinc", correct: false },
          { text: "Lead", correct: false }
        ],
        explanation: "Iron is used in magnetic materials and is a transition metal."
      },
      {
        question: "Which element in Group 16 is used in the production of sulfuric acid?",
        answers: [
          { text: "Sulfur", correct: true },
          { text: "Oxygen", correct: false },
          { text: "Selenium", correct: false },
          { text: "Tellurium", correct: false }
        ],
        explanation: "Sulfur is used in the production of sulfuric acid and is a Group 16 element."
      },
      {
        question: "Which of the following elements is found in Group 14 and is used in the manufacture of glass?",
        answers: [
          { text: "Silicon", correct: true },
          { text: "Carbon", correct: false },
          { text: "Germanium", correct: false },
          { text: "Tin", correct: false }
        ],
        explanation: "Silicon is used in the manufacture of glass and is in Group 14."
      },
      {
        question: "Which of the following elements is a halogen known for its use in bleach?",
        answers: [
          { text: "Chlorine", correct: true },
          { text: "Bromine", correct: false },
          { text: "Iodine", correct: false },
          { text: "Fluorine", correct: false }
        ],
        explanation: "Chlorine is used in bleach and is a halogen in Group 17."
      },
      {
        question: "Which element is a Group 18 noble gas used in some types of lasers?",
        answers: [
          { text: "Neon", correct: true },
          { text: "Argon", correct: false },
          { text: "Krypton", correct: false },
          { text: "Xenon", correct: false }
        ],
        explanation: "Neon is used in some types of lasers and is a Group 18 noble gas."
      },
      {
        question: "Which of the following is a transition metal used in making coins?",
        answers: [
          { text: "Copper", correct: true },
          { text: "Silver", correct: false },
          { text: "Gold", correct: false },
          { text: "Nickel", correct: false }
        ],
        explanation: "Copper is commonly used in making coins and is a transition metal."
      },
      {
        question: "Which of the following elements is a noble gas used in high-performance aircraft and spacecraft?",
        answers: [
          { text: "Argon", correct: true },
          { text: "Neon", correct: false },
          { text: "Krypton", correct: false },
          { text: "Xenon", correct: false }
        ],
        explanation: "Argon is used in high-performance aircraft and spacecraft and is a noble gas in Group 18."
      },
      {
        question: "Which of the following elements is a Group 2 metal used in fireworks to produce a green color?",
        answers: [
          { text: "Barium", correct: true },
          { text: "Strontium", correct: false },
          { text: "Calcium", correct: false },
          { text: "Magnesium", correct: false }
        ],
        explanation: "Barium is used in fireworks to produce a green color and is a Group 2 metal."
      },
      {
        question: "Which element is a metalloid used in the manufacture of semiconductors and is found in Group 14?",
        answers: [
          { text: "Silicon", correct: true },
          { text: "Germanium", correct: false },
          { text: "Carbon", correct: false },
          { text: "Tin", correct: false }
        ],
        explanation: "Silicon is used in semiconductors and is a metalloid in Group 14."
      },
      {
        question: "Which of the following elements is a halogen used in antiseptics?",
        answers: [
          { text: "Iodine", correct: true },
          { text: "Chlorine", correct: false },
          { text: "Bromine", correct: false },
          { text: "Fluorine", correct: false }
        ],
        explanation: "Iodine is used in antiseptics and is a halogen in Group 17."
      },
      {
        question: "What color is Chlorine gas at room temperature?",
        answers: [
          { text: "Greenish-yellow", correct: true },
          { text: "Colorless", correct: false },
          { text: "Blue", correct: false },
          { text: "Red", correct: false }
        ],
        explanation: "Chlorine gas is greenish-yellow at room temperature."
      },
      {
        question: "What is the physical appearance of Mercury at room temperature?",
        answers: [
          { text: "Liquid metal", correct: true },
          { text: "Solid metal", correct: false },
          { text: "Gas", correct: false },
          { text: "Powder", correct: false }
        ],
        explanation: "Mercury is the only metal that is liquid at room temperature."
      },
      {
        question: "What is the color of Gold?",
        answers: [
          { text: "Yellow", correct: true },
          { text: "White", correct: false },
          { text: "Red", correct: false },
          { text: "Green", correct: false }
        ],
        explanation: "Gold is yellow in color."
      },
      {
        question: "Which element reacts with water to produce a hydroxide and hydrogen gas and is stored under oil?",
        answers: [
          { text: "Sodium", correct: true },
          { text: "Copper", correct: false },
          { text: "Iron", correct: false },
          { text: "Silver", correct: false }
        ],
        explanation: "Sodium reacts with water to produce sodium hydroxide and hydrogen gas and is stored under oil."
      },
      {
        question: "What color is Bromine at room temperature?",
        answers: [
          { text: "Dark red-brown liquid", correct: true },
          { text: "Yellow", correct: false },
          { text: "Green", correct: false },
          { text: "Colorless", correct: false }
        ],
        explanation: "Bromine is a dark red-brown liquid at room temperature."
      },
      {
        question: "Which element is known as 'quick silver'?",
        answers: [
          { text: "Mercury", correct: true },
          { text: "Silver", correct: false },
          { text: "Gold", correct: false },
          { text: "Platinum", correct: false }
        ],
        explanation: "Mercury is known as 'quick silver' due to its liquid metal form."
      },
      {
        question: "Which noble gas is used in neon signs?",
        answers: [
          { text: "Neon", correct: true },
          { text: "Argon", correct: false },
          { text: "Krypton", correct: false },
          { text: "Xenon", correct: false }
        ],
        explanation: "Neon is used in neon signs due to its ability to emit bright colors when electrified."
      },
      {
        question: "What is the simple reaction of Sodium with water?",
        answers: [
          { text: "2Na + 2H₂O → 2NaOH + H₂", correct: true },
          { text: "Na + H₂O → NaOH + H₂", correct: false },
          { text: "Na + 2H₂O → NaOH + 2H₂", correct: false },
          { text: "2Na + H₂O → Na₂O + H₂", correct: false }
        ],
        explanation: "Sodium reacts with water to form sodium hydroxide and hydrogen gas."
      },
      {
        question: "Which element has a characteristic pink color in its solid state?",
        answers: [
          { text: "Cobalt", correct: true },
          { text: "Iron", correct: false },
          { text: "Nickel", correct: false },
          { text: "Copper", correct: false }
        ],
        explanation: "Cobalt is known for its characteristic pink color in its solid state."
      },
      {
        question: "What color does Copper turn when it oxidizes in air?",
        answers: [
          { text: "Green", correct: true },
          { text: "Blue", correct: false },
          { text: "Brown", correct: false },
          { text: "Yellow", correct: false }
        ],
        explanation: "Copper turns green when it oxidizes due to the formation of copper carbonate."
      },
      {
        question: "Which element is used in creating red colors in fireworks?",
        answers: [
          { text: "Strontium", correct: false },
          { text: "Barium", correct: false },
          { text: "Calcium", correct: false },
          { text: "Magnesium", correct: true }
        ],
        explanation: "Magnesium is used to create red colors in fireworks."
      },
      {
        question: "Which element is used in making incandescent light bulbs?",
        answers: [
          { text: "Tungsten", correct: true },
          { text: "Copper", correct: false },
          { text: "Nickel", correct: false },
          { text: "Aluminum", correct: false }
        ],
        explanation: "Tungsten is used in incandescent light bulbs due to its high melting point."
      },
      {
        question: "What is the physical appearance of Iodine at room temperature?",
        answers: [
          { text: "Purple solid", correct: true },
          { text: "Yellow liquid", correct: false },
          { text: "Colorless gas", correct: false },
          { text: "Red liquid", correct: false }
        ],
        explanation: "Iodine is a purple solid at room temperature."
      },
      {
        question: "Which element is used in batteries due to its high energy density?",
        answers: [
          { text: "Lithium", correct: true },
          { text: "Sodium", correct: false },
          { text: "Potassium", correct: false },
          { text: "Rubidium", correct: false }
        ],
        explanation: "Lithium is used in batteries because of its high energy density."
      },
      {
        question: "Which of the following elements is used in the production of sulfuric acid?",
        answers: [
          { text: "Sulfur", correct: true },
          { text: "Oxygen", correct: false },
          { text: "Phosphorus", correct: false },
          { text: "Nitrogen", correct: false }
        ],
        explanation: "Sulfur is used in the production of sulfuric acid."
      },
      {
        question: "What color is Potassium in its solid form?",
        answers: [
          { text: "Silvery-gray", correct: true },
          { text: "Yellow", correct: false },
          { text: "Red", correct: false },
          { text: "Green", correct: false }
        ],
        explanation: "Potassium is a silvery-gray metal in its solid form."
      },
      {
        question: "Which of the following elements is used as a disinfectant in water treatment?",
        answers: [
          { text: "Chlorine", correct: true },
          { text: "Iodine", correct: false },
          { text: "Fluorine", correct: false },
          { text: "Bromine", correct: false }
        ],
        explanation: "Chlorine is commonly used as a disinfectant in water treatment."
      },
      {
        question: "What is the simple reaction of Calcium with water?",
        answers: [
          { text: "Ca + 2H₂O → Ca(OH)₂ + H₂", correct: true },
          { text: "Ca + H₂O → CaO + H₂", correct: false },
          { text: "Ca + H₂O → Ca(OH)₂ + H₂", correct: false },
          { text: "Ca + 2H₂O → Ca(OH)₂ + 2H₂", correct: false }
        ],
        explanation: "Calcium reacts with water to form calcium hydroxide and hydrogen gas."
      },
      {
        question: "Which of the following elements is used in the manufacture of fertilizers?",
        answers: [
          { text: "Phosphorus only", correct: false },
          { text: "Potassium only", correct: false },
          { text: "Nitrogen only", correct: false },
          { text: "All of the above", correct: true }
        ],
        explanation: "Phosphorus is used in the manufacture of fertilizers."
      },
      {
        question: "What is the physical appearance of Aluminium?",
        answers: [
          { text: "Silver-white metal", correct: true },
          { text: "Red metal", correct: false },
          { text: "Yellow metal", correct: false },
          { text: "Blue metal", correct: false }
        ],
        explanation: "Aluminium is a silver-white metal."
      },
      {
        question: "Which element is used in the production of stainless steel?",
        answers: [
          { text: "Chromium", correct: true },
          { text: "Iron", correct: false },
          { text: "Nickel", correct: false },
          { text: "Manganese", correct: false }
        ],
        explanation: "Chromium is used in the production of stainless steel."
      },
      {
        question: "Which of the following elements is used in the production of steel?",
        answers: [
          { text: "Iron", correct: true },
          { text: "Copper", correct: false },
          { text: "Silver", correct: false },
          { text: "Zinc", correct: false }
        ],
        explanation: "Iron is used in the production of steel."
      },
      {
        question: "What color is Iodine vapor?",
        answers: [
          { text: "Purple", correct: true },
          { text: "Yellow", correct: false },
          { text: "Red", correct: false },
          { text: "Colorless", correct: false }
        ],
        explanation: "Iodine vapor is purple in color."
      },
      {
        question: "Which of the following elements is used in fireworks to produce blue colors?",
        answers: [
          { text: "Copper", correct: true },
          { text: "Sodium", correct: false },
          { text: "Strontium", correct: false },
          { text: "Barium", correct: false }
        ],
        explanation: "Copper compounds are used to produce blue colors in fireworks."
      },
      {
        question: "Which element is used in making dental amalgams?",
        answers: [
          { text: "Mercury", correct: true },
          { text: "Silver", correct: false },
          { text: "Gold", correct: false },
          { text: "Platinum", correct: false }
        ],
        explanation: "Mercury is used in making dental amalgams."
      },
      {
        question: "What is the color of the flame test for Lithium salts?",
        answers: [
          { text: "Crimson red", correct: true },
          { text: "Yellow", correct: false },
          { text: "Green", correct: false },
          { text: "Blue", correct: false }
        ],
        explanation: "Lithium salts produce a crimson red flame in a flame test."
      },
      {
        question: "Which element is used in the production of lightweight alloys?",
        answers: [
          { text: "Aluminium", correct: true },
          { text: "Iron", correct: false },
          { text: "Steel", correct: false },
          { text: "Copper", correct: false }
        ],
        explanation: "Aluminium is used in the production of lightweight alloys."
      },
      {
        question: "Which element forms a blue solution when dissolved in water?",
        answers: [
          { text: "Copper", correct: true },
          { text: "Iron", correct: false },
          { text: "Nickel", correct: false },
          { text: "Cobalt", correct: false }
        ],
        explanation: "Copper forms a blue solution in water when dissolved."
      },
      {
        question: "Which of the following metals is used in making thermometers?",
        answers: [
          { text: "Mercury", correct: true },
          { text: "Lead", correct: false },
          { text: "Zinc", correct: false },
          { text: "Aluminium", correct: false }
        ],
        explanation: "Mercury is used in making thermometers due to its wide range of liquid temperature."
      },
      {
        question: "What color flame does Potassium produce in a flame test?",
        answers: [
          { text: "Lilac", correct: true },
          { text: "Green", correct: false },
          { text: "Red", correct: false },
          { text: "Yellow", correct: false }
        ],
        explanation: "Potassium produces a lilac flame in a flame test."
      },
      {
        question: "Which element is commonly used as a catalyst in the Haber process for ammonia synthesis?",
        answers: [
          { text: "Iron", correct: true },
          { text: "Nickel", correct: false },
          { text: "Cobalt", correct: false },
          { text: "Platinum", correct: false }
        ],
        explanation: "Iron is used as a catalyst in the Haber process for ammonia synthesis."
      },
      {
        question: "Which element is known for its bright yellow color in its solid state?",
        answers: [
          { text: "Sulfur", correct: true },
          { text: "Gold", correct: false },
          { text: "Chromium", correct: false },
          { text: "Iodine", correct: false }
        ],
        explanation: "Sulfur is known for its bright yellow color."
      },
      {
        question: "Which metal is used in the production of electric cables due to its high conductivity?",
        answers: [
          { text: "Copper", correct: true },
          { text: "Aluminium", correct: false },
          { text: "Iron", correct: false },
          { text: "Silver", correct: false }
        ],
        explanation: "Copper is used in the production of electric cables due to its high electrical conductivity."
      },
      {
        question: "Which element is known for forming a white oxide when burned in air?",
        answers: [
          { text: "Magnesium", correct: true },
          { text: "Calcium", correct: false },
          { text: "Sodium", correct: false },
          { text: "Potassium", correct: false }
        ],
        explanation: "Magnesium forms a white oxide when burned in air."
      },
      {
        question: "Which element is used in making strong permanent magnets?",
        answers: [
          { text: "Neodymium", correct: true },
          { text: "Iron", correct: false },
          { text: "Cobalt", correct: false },
          { text: "Nickel", correct: false }
        ],
        explanation: "Neodymium is used in making strong permanent magnets."
      },
      {
        question: "What color is the flame produced by burning Strontium salts?",
        answers: [
          { text: "Red", correct: true },
          { text: "Blue", correct: false },
          { text: "Green", correct: false },
          { text: "Yellow", correct: false }
        ],
        explanation: "Strontium salts produce a red flame when burned."
      },
      {
        question: "Which element is used in the production of lead-acid batteries?",
        answers: [
          { text: "Lead", correct: true },
          { text: "Zinc", correct: false },
          { text: "Copper", correct: false },
          { text: "Nickel", correct: false }
        ],
        explanation: "Lead is used in the production of lead-acid batteries."
      },
      {
        question: "What is the appearance of Sodium chloride (table salt) in its solid form?",
        answers: [
          { text: "White crystalline solid", correct: true },
          { text: "Yellow powder", correct: false },
          { text: "Red liquid", correct: false },
          { text: "Colorless gas", correct: false }
        ],
        explanation: "Sodium chloride is a white crystalline solid in its solid form."
      },
      {
        question: "Which element is used in the manufacture of glass due to its high melting point?",
        answers: [
          { text: "Silicon", correct: true },
          { text: "Aluminium", correct: false },
          { text: "Iron", correct: false },
          { text: "Magnesium", correct: false }
        ],
        explanation: "Silicon is used in the manufacture of glass due to its high melting point."
      },
      {
        question: "Which metal is used in the manufacture of airplane parts due to its strength and lightness?",
        answers: [
          { text: "Titanium", correct: true },
          { text: "Aluminium", correct: false },
          { text: "Steel", correct: false },
          { text: "Iron", correct: false }
        ],
        explanation: "Titanium is used in the manufacture of airplane parts due to its strength and lightness."
      },
      {
        question: "What is the color of a solution of Potassium permanganate?",
        answers: [
          { text: "Purple", correct: true },
          { text: "Yellow", correct: false },
          { text: "Green", correct: false },
          { text: "Blue", correct: false }
        ],
        explanation: "Potassium permanganate forms a purple solution."
      },
      {
        question: "Which element is used in the manufacture of rechargeable batteries?",
        answers: [
          { text: "Nickel", correct: true },
          { text: "Copper", correct: false },
          { text: "Zinc", correct: false },
          { text: "Iron", correct: false }
        ],
        explanation: "Nickel is used in the manufacture of rechargeable batteries."
      },
      {
        question: "What color is the flame test for Calcium salts?",
        answers: [
          { text: "Orange-red", correct: true },
          { text: "Green", correct: false },
          { text: "Blue", correct: false },
          { text: "Red", correct: false }
        ],
        explanation: "Calcium salts produce an orange-red flame in a flame test."
      },
      {
        question: "Which element is used in the production of aluminum due to its reactivity?",
        answers: [
          { text: "Aluminium", correct: true },
          { text: "Iron", correct: false },
          { text: "Copper", correct: false },
          { text: "Zinc", correct: false }
        ],
        explanation: "Aluminium is used in the production of aluminum products due to its reactivity and versatility."
      },
      {
        question: "What is the physical state of Nitrogen at room temperature?",
        answers: [
          { text: "Gas", correct: true },
          { text: "Liquid", correct: false },
          { text: "Solid", correct: false },
          { text: "Plasma", correct: false }
        ],
        explanation: "Nitrogen is a gas at room temperature."
      },
      {
        question: "Which element is used as a catalyst in the production of sulfuric acid?",
        answers: [
          { text: "Vanadium", correct: true },
          { text: "Iron", correct: false },
          { text: "Nickel", correct: false },
          { text: "Cobalt", correct: false }
        ],
        explanation: "Vanadium is used as a catalyst in the production of sulfuric acid."
      },
      {
        question: "What is the appearance of Potassium in its pure form?",
        answers: [
          { text: "Soft, silvery metal", correct: true },
          { text: "Hard, reddish metal", correct: false },
          { text: "Colorless liquid", correct: false },
          { text: "Powdery yellow solid", correct: false }
        ],
        explanation: "Potassium is a soft, silvery metal in its pure form."
      },
      {
        question: "Which of the following metals is used in the construction of aircraft due to its low density?",
        answers: [
          { text: "Aluminium", correct: true },
          { text: "Copper", correct: false },
          { text: "Iron", correct: false },
          { text: "Lead", correct: false }
        ],
        explanation: "Aluminium is used in the construction of aircraft due to its low density."
      },
      {
        question: "Which element is used in the production of fertilizers and explosives?",
        answers: [
          { text: "Nitrogen", correct: true },
          { text: "Phosphorus", correct: false },
          { text: "Potassium", correct: false },
          { text: "Sulfur", correct: false }
        ],
        explanation: "Nitrogen is used in the production of fertilizers and explosives."
      },
      {
        question: "What is the physical appearance of Phosphorus in its white form?",
        answers: [
          { text: "White waxy solid", correct: true },
          { text: "Red powder", correct: false },
          { text: "Yellow liquid", correct: false },
          { text: "Colorless gas", correct: false }
        ],
        explanation: "White phosphorus appears as a waxy solid."
      },
      {
        question: "Which element is used in fireworks to produce green colors?",
        answers: [
          { text: "Barium", correct: true },
          { text: "Strontium", correct: false },
          { text: "Copper", correct: false },
          { text: "Lithium", correct: false }
        ],
        explanation: "Barium is used in fireworks to produce green colors."
      },
      {
        question: "What is the flame color of Magnesium when burned?",
        answers: [
          { text: "White", correct: true },
          { text: "Yellow", correct: false },
          { text: "Red", correct: false },
          { text: "Blue", correct: false }
        ],
        explanation: "Magnesium burns with a bright white flame."
      },
      {
        question: "Which element is used in making high-temperature superconductors?",
        answers: [
          { text: "Yttrium", correct: true },
          { text: "Iron", correct: false },
          { text: "Copper", correct: false },
          { text: "Nickel", correct: false }
        ],
        explanation: "Yttrium is used in making high-temperature superconductors."
      },
      {
        question: "Which element is known for its use in making glass and ceramics?",
        answers: [
          { text: "Silicon", correct: true },
          { text: "Titanium", correct: false },
          { text: "Iron", correct: false },
          { text: "Gold", correct: false }
        ],
        explanation: "Silicon is known for its use in making glass and ceramics."
      },
      {
        question: "What color is the flame test for Barium salts?",
        answers: [
          { text: "Green", correct: true },
          { text: "Red", correct: false },
          { text: "Blue", correct: false },
          { text: "Yellow", correct: false }
        ],
        explanation: "Barium salts produce a green flame in a flame test."
      },
      {
        question: "Which element is used in making high-strength steel?",
        answers: [
          { text: "Chromium", correct: true },
          { text: "Iron", correct: false },
          { text: "Nickel", correct: false },
          { text: "Manganese", correct: false }
        ],
        explanation: "Chromium is used in making high-strength steel."
      },
      {
        question: "What is the appearance of Sodium in its solid state?",
        answers: [
          { text: "Soft, silvery metal", correct: true },
          { text: "Hard, gray metal", correct: false },
          { text: "Yellow powder", correct: false },
          { text: "Colorless liquid", correct: false }
        ],
        explanation: "Sodium is a soft, silvery metal in its solid state."
      },
      {
        question: "Which element is used in the production of stainless steel along with iron and chromium?",
        answers: [
          { text: "Nickel", correct: true },
          { text: "Zinc", correct: false },
          { text: "Copper", correct: false },
          { text: "Manganese", correct: false }
        ],
        explanation: "Nickel is used in the production of stainless steel along with iron and chromium."
      },
      {
        question: "What is the appearance of the metal Bismuth?",
        answers: [
          { text: "Pinkish-silver", correct: true },
          { text: "Yellow", correct: false },
          { text: "Gray", correct: false },
          { text: "Red", correct: false }
        ],
        explanation: "Bismuth is a pinkish-silver metal."
      },
      {
        question: "Which of the following metals is used in the production of electric vehicle batteries?",
        answers: [
          { text: "Lithium", correct: true },
          { text: "Aluminium", correct: false },
          { text: "Copper", correct: false },
          { text: "Zinc", correct: false }
        ],
        explanation: "Lithium is used in the production of electric vehicle batteries."
      },
      {
        question: "What is the physical appearance of Iron(III) oxide?",
        answers: [
          { text: "Red-brown powder", correct: true },
          { text: "Yellow liquid", correct: false },
          { text: "Colorless gas", correct: false },
          { text: "Blue crystal", correct: false }
        ],
        explanation: "Iron(III) oxide is a red-brown powder."
      },
      {
        question: "Which element is used in the production of ammonia?",
        answers: [
          { text: "Iron", correct: true },
          { text: "Platinum", correct: false },
          { text: "Nickel", correct: false },
          { text: "Rhodium", correct: false }
        ],
        explanation: "Iron is used as a catalyst in the production of ammonia."
      },
      {
        question: "What is the color of the flame produced by burning Lithium salts?",
        answers: [
          { text: "Crimson red", correct: true },
          { text: "Blue", correct: false },
          { text: "Yellow", correct: false },
          { text: "Green", correct: false }
        ],
        explanation: "Lithium salts produce a crimson red flame when burned."
      },
      {
        question: "Which element is used as a catalyst in the hydrogenation of vegetable oils?",
        answers: [
          { text: "Nickel", correct: true },
          { text: "Iron", correct: false },
          { text: "Copper", correct: false },
          { text: "Platinum", correct: false }
        ],
        explanation: "Nickel is used as a catalyst in the hydrogenation of vegetable oils."
      },
      {
        question: "What is the physical state of Helium at room temperature?",
        answers: [
          { text: "Gas", correct: true },
          { text: "Liquid", correct: false },
          { text: "Solid", correct: false },
          { text: "Plasma", correct: false }
        ],
        explanation: "Helium is a gas at room temperature."
      },
      {
        question: "Which of the following elements is used in the production of light-emitting diodes (LEDs)?",
        answers: [
          { text: "Gallium", correct: true },
          { text: "Iron", correct: false },
          { text: "Copper", correct: false },
          { text: "Silver", correct: false }
        ],
        explanation: "Gallium is used in the production of light-emitting diodes (LEDs)."
      },
      {
        question: "What color does Iodine produce in a flame test?",
        answers: [
          { text: "Purple", correct: true },
          { text: "Yellow", correct: false },
          { text: "Red", correct: false },
          { text: "Green", correct: false }
        ],
        explanation: "Iodine produces a purple color in a flame test."
      },
      {
        question: "Which element is used in the production of superconductors?",
        answers: [
          { text: "Yttrium", correct: true },
          { text: "Copper", correct: false },
          { text: "Iron", correct: false },
          { text: "Gold", correct: false }
        ],
        explanation: "Yttrium is used in the production of superconductors."
      },
      {
        question: "What element can replace carbon atoms in heterofullerenes?",
        answers: [
          { text: "Hydrogen", correct: false },
          { text: "Nitrogen", correct: true },
          { text: "Oxygen", correct: false },
          { text: "Helium", correct: false }
        ],
        explanation: "Heterofullerenes are fullerenes in which carbon atoms are replaced by other elements, such as nitrogen."
      },
      {
        question: "What are endohedral fullerenes known for?",
        answers: [
          { text: "Being hollow inside", correct: false },
          { text: "Having additional atoms or ions inside", correct: true },
          { text: "Being used in jewelry", correct: false },
          { text: "Being unstable", correct: false }
        ],
        explanation: "Endohedral fullerenes are fullerenes that encapsulate other atoms, ions, or molecules within their structure."
      },
      {
        question: "Metallofullerenes contain what type of atoms?",
        answers: [
          { text: "Non-metals", correct: false },
          { text: "Metalloids", correct: false },
          { text: "Metals", correct: true },
          { text: "Noble gases", correct: false }
        ],
        explanation: "Metallofullerenes are fullerenes that contain metal atoms inside their structure."
      },
      {
        question: "What is a characteristic of fullerene derivatives?",
        answers: [
          { text: "Insoluble in organic solvents", correct: false },
          { text: "Chemically modified by functional groups", correct: true },
          { text: "Completely inert", correct: false },
          { text: "High melting point", correct: false }
        ],
        explanation: "Fullerene derivatives can be chemically modified with functional groups, altering their properties and solubility."
      },
      {
        question: "What type of fullerene is linked by a carbon chain?",
        answers: [
          { text: "Buckminsterfullerene", correct: false },
          { text: "Linked ball and chain dimer", correct: true },
          { text: "Nanotubes", correct: false },
          { text: "Graphene", correct: false }
        ],
        explanation: "Linked ball and chain dimers are fullerenes connected by a carbon chain."
      },
      {
        question: "What is the smallest member of the fullerene group?",
        answers: [
          { text: "C<sub>60</sub>", correct: false },
          { text: "C<sub>50</sub>", correct: false },
          { text: "C<sub>20</sub>", correct: true },
          { text: "C<sub>70</sub>", correct: false }
        ],
        explanation: "C<sub>20</sub> is the smallest fullerene, composed of 20 carbon atoms."
      },
      {
        question: "What property of fullerene changes under different pressures?",
        answers: [
          { text: "Melting point", correct: false },
          { text: "Structure", correct: true },
          { text: "Color", correct: false },
          { text: "Density", correct: false }
        ],
        explanation: "The structure of fullerene changes under different pressures, which can alter its physical and chemical properties."
      },
      {
        question: "What is the density of fullerene compared to diamond and graphite?",
        answers: [
          { text: "Higher", correct: false },
          { text: "Lower", correct: true },
          { text: "Same", correct: false },
          { text: "Unstable", correct: false }
        ],
        explanation: "Fullerene has a lower density compared to diamond and graphite due to its unique hollow structure."
      },
      {
        question: "At what temperature does fullerene sublimate in a vacuum?",
        answers: [
          { text: "100°C", correct: false },
          { text: "300°C", correct: false },
          { text: "600°C", correct: false },
          { text: "800°C", correct: true }
        ],
        explanation: "Fullerene sublimates at approximately 800°C in a vacuum."
      },
      {
        question: "What can be used to identify fullerene?",
        answers: [
          { text: "Infrared absorption", correct: true },
          { text: "X-ray diffraction", correct: false },
          { text: "UV-visible absorption bands", correct: false },
          { text: "NMR spectroscopy", correct: false }
        ],
        explanation: "Infrared absorption is commonly used to identify fullerene, as it provides information about its molecular vibrations."
      },
      {
        question: "Fullerene exhibits what type of magnetic property?",
        answers: [
          { text: "Ferromagnetic", correct: false },
          { text: "Paramagnetic", correct: false },
          { text: "Diamagnetic", correct: true },
          { text: "Antiferromagnetic", correct: false }
        ],
        explanation: "Fullerene is generally diamagnetic, meaning it creates an opposing magnetic field in the presence of an external magnetic field."
      },
      {
        question: "What type of reaction does fullerene undergo with hydrogen?",
        answers: [
          { text: "Substitution", correct: false },
          { text: "Addition", correct: true },
          { text: "Elimination", correct: false },
          { text: "Rearrangement", correct: false }
        ],
        explanation: "Fullerene undergoes addition reactions with hydrogen, forming hydrogenated fullerenes."
      },
      {
        question: "Fullerene can be dissolved in which solvent?",
        answers: [
          { text: "Water", correct: false },
          { text: "Benzene", correct: true },
          { text: "Methanol", correct: false },
          { text: "Acetone", correct: false }
        ],
        explanation: "Fullerene is soluble in nonpolar solvents like benzene."
      },
      {
        question: "What is the electrophilic nature of fullerene?",
        answers: [
          { text: "Reducing agent", correct: false },
          { text: "Oxidizing agent", correct: true },
          { text: "Neutral", correct: false },
          { text: "Inert", correct: false }
        ],
        explanation: "Fullerene can act as an oxidizing agent due to its ability to accept electrons."
      },
      {
        question: "What ion does fullerene form upon reduction with alkali metals?",
        answers: [
          { text: "Fulleride ion", correct: true },
          { text: "Hydride ion", correct: false },
          { text: "Peroxide ion", correct: false },
          { text: "Carbide ion", correct: false }
        ],
        explanation: "Fullerene can form fulleride ions when reduced by alkali metals."
      },
      {
        question: "Fullerene can be functionalized with which group?",
        answers: [
          { text: "Hydroxyl group", correct: false },
          { text: "Carboxyl group", correct: false },
          { text: "Amine group", correct: false },
          { text: "All of the above", correct: true }
        ],
        explanation: "Fullerene can be functionalized with various groups, including hydroxyl, carboxyl, and amine groups."
      },
      {
        question: "What type of complex can fullerene form with metals?",
        answers: [
          { text: "Covalent", correct: false },
          { text: "Endohedral", correct: true },
          { text: "Ionic", correct: false },
          { text: "Exothermic", correct: false }
        ],
        explanation: "Fullerene can form endohedral complexes with metals, where metal atoms are encapsulated inside the fullerene cage."
      },
      {
        question: "What reaction does fullerene undergo due to light absorption?",
        answers: [
          { text: "Combustion", correct: false },
          { text: "Polymerization", correct: false },
          { text: "Photochemical reaction", correct: true },
          { text: "Hydrolysis", correct: false }
        ],
        explanation: "Fullerene can undergo photochemical reactions when it absorbs light."
      },
      {
        question: "What is a common use of fullerene derivatives?",
        answers: [
          { text: "Pesticides", correct: false },
          { text: "Pharmaceuticals", correct: true },
          { text: "Fertilizers", correct: false },
          { text: "Detergents", correct: false }
        ],
        explanation: "Fullerene derivatives are often used in pharmaceuticals due to their unique properties."
      },
      {
        question: "What is the structure of fullerene primarily based on?",
        answers: [
          { text: "Tetrahedral rings", correct: false },
          { text: "Octahedral rings", correct: false },
          { text: "Hexagonal and pentagonal rings", correct: true },
          { text: "Cubic lattice", correct: false }
        ],
        explanation: "Fullerene's structure consists of hexagonal and pentagonal rings, forming a closed cage."
      },
      {
        question: "Which allotrope of carbon has interconnected carbon atoms?",
        answers: [
          { text: "Diamond", correct: true },
          { text: "Graphite", correct: false },
          { text: "Fullerene", correct: false },
          { text: "Graphene", correct: false }
        ],
        explanation: "Diamond has a three-dimensional network of interconnected carbon atoms, giving it its hardness."
      },
      {
        question: "Who was fullerene named after?",
        answers: [
          { text: "Richard Smalley", correct: false },
          { text: "Buckminster Fuller", correct: true },
          { text: "James Heath", correct: false },
          { text: "Harold Kroto", correct: false }
        ],
        explanation: "Fullerene was named after Buckminster Fuller, an architect known for his geodesic domes."
      },
      {
        question: "What is the general chemical formula for fullerene?",
        answers: [
          { text: "C<sub>n</sub>H<sub>n</sub>", correct: false },
          { text: "C<sub>2n</sub> where n≥30", correct: true },
          { text: "C<sub>n</sub>O<sub>n</sub>", correct: false },
          { text: "C<sub>n</sub>F<sub>n</sub>", correct: false }
        ],
        explanation: "The general formula for fullerene is C<sub>2n</sub>, where n is typically greater than or equal to 30."
      },
      {
        question: "What physical property of fullerene is temperature-dependent?",
        answers: [
          { text: "Color", correct: false },
          { text: "Behavior and structure", correct: true },
          { text: "Boiling point", correct: false },
          { text: "Hardness", correct: false }
        ],
        explanation: "The behavior and structure of fullerene can change with temperature, affecting its properties."
      },
      {
        question: "Which allotrope of carbon is known for its electrical conductivity?",
        answers: [
          { text: "Diamond", correct: false },
          { text: "Graphite", correct: true },
          { text: "Graphene", correct: true },
          { text: "Fullerene", correct: false }
        ],
        explanation: "Both graphite and graphene are known for their excellent electrical conductivity."
      },
      {
        question: "What is a notable feature of the physical properties of fullerene?",
        answers: [
          { text: "High density", correct: false },
          { text: "High melting point", correct: false },
          { text: "Low elasticity", correct: false },
          { text: "Temperature-dependent structure", correct: true }
        ],
        explanation: "Fullerene's structure and properties can change with temperature, making it unique among carbon allotropes."
      },
      {
        question: "What is the primary component of fullerene?",
        answers: [
          { text: "Hydrogen", correct: false },
          { text: "Nitrogen", correct: false },
          { text: "Carbon", correct: true },
          { text: "Oxygen", correct: false }
        ],
        explanation: "Fullerene is composed entirely of carbon atoms arranged in a unique structure."
      },
      {
        question: "What type of bonds connect carbon atoms in fullerene?",
        answers: [
          { text: "Ionic bonds", correct: false },
          { text: "Covalent bonds", correct: true },
          { text: "Hydrogen bonds", correct: false },
          { text: "Metallic bonds", correct: false }
        ],
        explanation: "The carbon atoms in fullerene are connected by covalent bonds, forming a stable structure."
      },
      {
        question: "What is the molecular geometry of Buckminsterfullerene (C<sub>60</sub>)?",
        answers: [
          { text: "Linear", correct: false },
          { text: "Tetrahedral", correct: false },
          { text: "Truncated icosahedron", correct: true },
          { text: "Octahedral", correct: false }
        ],
        explanation: "The molecular geometry of C<sub>60</sub> is a truncated icosahedron, resembling a soccer ball."
      },
      {
        question: "Which of the following is not a characteristic of fullerene?",
        answers: [
          { text: "Low density", correct: false },
          { text: "High hardness", correct: true },
          { text: "Diamagnetic properties", correct: false },
          { text: "High reactivity", correct: false }
        ],
        explanation: "Fullerenes are generally not known for high hardness, unlike diamond."
      },
      {
        question: "Which fullerene structure is known for resembling a soccer ball?",
        answers: [
          { text: "Carbon nanotubes", correct: false },
          { text: "Graphene", correct: false },
          { text: "C<sub>60</sub>", correct: true },
          { text: "Diamond", correct: false }
        ],
        explanation: "C<sub>60</sub>, also known as Buckminsterfullerene, has a structure resembling a soccer ball."
      },
      {
        question: "Fullerenes are known to undergo which type of chemical reactions?",
        answers: [
          { text: "Polymerization", correct: true },
          { text: "Substitution", correct: true },
          { text: "Oxidation and reduction", correct: true },
          { text: "Neutralization", correct: false }
        ],
        explanation: "Fullerenes can undergo various chemical reactions, including polymerization, substitution, and oxidation-reduction."
      },
      {
        question: "What makes heterofullerenes chemically unique compared to other fullerenes?",
        answers: [
          { text: "They contain non-carbon elements", correct: true },
          { text: "They are purely made of carbon", correct: false },
          { text: "They are only spherical in shape", correct: false },
          { text: "They have metallic properties", correct: false }
        ],
        explanation: "Heterofullerenes are unique because they contain non-carbon elements within the carbon cage structure."
      },
      {
        question: "What application are carbon nanotubes particularly useful for?",
        answers: [
          { text: "Food additives", correct: false },
          { text: "Conductors in electronic devices", correct: true },
          { text: "Optical lenses", correct: false },
          { text: "Agricultural fertilizers", correct: false }
        ],
        explanation: "Carbon nanotubes are widely used as conductors in electronic devices due to their excellent electrical properties."
      },
      {
        question: "Which type of fullerene can encapsulate other atoms, ions, or molecules?",
        answers: [
          { text: "Metallofullerenes", correct: false },
          { text: "Endohedral fullerenes", correct: true },
          { text: "Exohedral fullerenes", correct: false },
          { text: "Linked ball and chain dimers", correct: false }
        ],
        explanation: "Endohedral fullerenes can encapsulate other atoms, ions, or molecules within their carbon cage."
      },
      {
        question: "What is a defining feature of fullerene derivatives?",
        answers: [
          { text: "They are unstable", correct: false },
          { text: "They are chemically modified", correct: true },
          { text: "They cannot conduct electricity", correct: false },
          { text: "They are exclusively hydrophobic", correct: false }
        ],
        explanation: "Fullerene derivatives are chemically modified versions of fullerenes, often functionalized with various groups."
      },
      {
        question: "How are fullerene nanotubes different from graphene?",
        answers: [
          { text: "Fullerene nanotubes are not conductive", correct: false },
          { text: "Fullerene nanotubes are cylindrical", correct: true },
          { text: "Graphene is three-dimensional", correct: false },
          { text: "Graphene is not an allotrope of carbon", correct: false }
        ],
        explanation: "Fullerene nanotubes have a cylindrical shape, while graphene is a single-layer sheet of carbon atoms."
      },
      {
        question: "What is one of the most stable forms of fullerene?",
        answers: [
          { text: "C<sub>70</sub>", correct: false },
          { text: "C<sub>60</sub>", correct: true },
          { text: "C<sub>80</sub>", correct: false },
          { text: "C<sub>90</sub>", correct: false }
        ],
        explanation: "C<sub>60</sub> is one of the most stable forms of fullerene."
      },
      {
        question: "Fullerenes can act as which of the following?",
        answers: [
          { text: "Oxidizing agents", correct: true },
          { text: "Reducing agents", correct: true },
          { text: "Catalysts", correct: true },
          { text: "All of the above", correct: true }
        ],
        explanation: "Fullerenes can act as oxidizing agents, reducing agents, and catalysts due to their unique electronic structure."
      },
      {
        question: "What is the appearance of fullerene in its solid state?",
        answers: [
          { text: "Colorless crystals", correct: false },
          { text: "Metallic luster", correct: false },
          { text: "Black crystals", correct: true },
          { text: "White powder", correct: false }
        ],
        explanation: "Fullerene typically appears as black crystals in its solid state."
      },
      {
        question: "Which of the following describes fullerene's thermal properties?",
        answers: [
          { text: "Poor thermal conductor", correct: false },
          { text: "High thermal stability", correct: true },
          { text: "Low thermal stability", correct: false },
          { text: "Excellent thermal conductor", correct: false }
        ],
        explanation: "Fullerene has high thermal stability, making it resistant to decomposition at high temperatures."
      },
      {
        question: "How are fullerenes typically produced?",
        answers: [
          { text: "By sublimation", correct: false },
          { text: "By combustion of carbon materials", correct: false },
          { text: "By chemical reduction", correct: false },
          { text: "By laser vaporization of graphite", correct: true }
        ],
        explanation: "Fullerenes are often produced by laser vaporization of graphite."
      },
      {
        question: "In what year was fullerene discovered?",
        answers: [
          { text: "1980", correct: false },
          { text: "1985", correct: true },
          { text: "1990", correct: false },
          { text: "1995", correct: false }
        ],
        explanation: "Fullerene was discovered in 1985 by scientists who received the Nobel Prize in Chemistry for their work."
      },
      {
        question: "What is the molecular formula of the most common fullerene?",
        answers: [
          { text: "C<sub>60</sub>", correct: true },
          { text: "C<sub>50</sub>", correct: false },
          { text: "C<sub>70</sub>", correct: false },
          { text: "C<sub>80</sub>", correct: false }
        ],
        explanation: "The most common fullerene is C<sub>60</sub>, also known as Buckminsterfullerene."
      },
      {
        question: "What kind of structural configuration does graphene have?",
        answers: [
          { text: "Single-layer sheet", correct: true },
          { text: "Multi-layer spherical", correct: false },
          { text: "Cylindrical tubes", correct: false },
          { text: "Amorphous", correct: false }
        ],
        explanation: "Graphene is a single-layer sheet of carbon atoms arranged in a hexagonal lattice."
      },
      {
        question: "What is a distinguishing feature of amorphous carbon?",
        answers: [
          { text: "Crystalline structure", correct: false },
          { text: "Lack of a well-defined structure", correct: true },
          { text: "High electrical conductivity", correct: false },
          { text: "Hardness similar to diamond", correct: false },
        ],
        explanation: "amorphous carbon lacks well-defined structure",
      },
      {
        question: "Which type of fullerene is used as a good lubricant?",
        answers: [
          { text: "Nanotubes", correct: false },
          { text: "Nano-onions", correct: true },
          { text: "Buckminsterfullerene", correct: false },
          { text: "Amorphous carbon", correct: false }
        ],
        explanation: "Nano-onions are used as lubricants due to their layered spherical structure, which allows them to act as a ball bearing."
      },
      {
        question: "Which fullerene structure is primarily spherical in shape?",
        answers: [
          { text: "Graphene", correct: false },
          { text: "Nanotubes", correct: false },
          { text: "Nano-onions", correct: true },
          { text: "Amorphous carbon", correct: false }
        ],
        explanation: "Nano-onions are spherical fullerenes consisting of multiple concentric carbon shells."
      },
      {
        question: "Which element can be found inside endohedral fullerenes?",
        answers: [
          { text: "Argon", correct: false },
          { text: "Yttrium", correct: false },
          { text: "Sodium", correct: false },
          { text: "Helium", correct: true }
        ],
        explanation: "Helium atoms can be encapsulated within the fullerene cage structure in endohedral fullerenes."
      },
      {
        question: "What happens to fullerene under high pressure?",
        answers: [
          { text: "It becomes metallic", correct: false },
          { text: "It retains its structure", correct: false },
          { text: "Its structure changes", correct: true },
          { text: "It decomposes", correct: false }
        ],
        explanation: "Under high pressure, fullerene molecules can form a polymeric structure due to the reorganization of bonds."
      },
      {
        question: "Which property makes fullerenes suitable for photochemical reactions?",
        answers: [
          { text: "High thermal conductivity", correct: false },
          { text: "Ability to absorb light", correct: true },
          { text: "High electrical resistance", correct: false },
          { text: "Low chemical reactivity", correct: false }
        ],
        explanation: "Fullerenes can absorb light efficiently, making them suitable for photochemical reactions."
      },
      {
        question: "The horizontal rows in the periodic table are called",
        answers: [
          { text: "Groups", correct: false },
          { text: "Periods", correct: true },
          { text: "Energy", correct: false },
          { text: "Radius", correct: false }
        ],
        explanation: "Horizontal rows in the periodic table are called periods."
      },
      {
        question: "Elements are arranged in groups due to the number of electrons in their outermost shell",
        answers: [
          { text: "Number of electrons", correct: true },
          { text: "Number of protons", correct: false },
          { text: "Number of neutrons", correct: false },
          { text: "Number of nucleons", correct: false }
        ],
        explanation: "Elements in the same group have similar chemical properties due to having the same number of electrons in their outermost shell."
      },
      {
        question: "The periodic table was brought about by a chemist",
        answers: [
          { text: "Dmitri Mendeleev", correct: true },
          { text: "Antoine Lavoisier", correct: false },
          { text: "John Dalton", correct: false },
          { text: "J.J. Thomson", correct: false }
        ],
        explanation: "Dmitri Mendeleev is credited with creating the periodic table of elements."
      },
      {
        question: "The nitrate of which of the following cations would exhibit paramagnetism to the greatest extent?",
        answers: [
          { text: "Co", correct: true },
          { text: "Cr", correct: false },
          { text: "Fe", correct: false },
          { text: "Mn", correct: false }
        ],
        explanation: "Cobalt(II) nitrate exhibits the greatest extent of paramagnetism among the given options."
      },
      {
        question: "Which element group is the most reactive of all?",
        answers: [
          { text: "Alkali metals", correct: true },
          { text: "Alkaline earth metals", correct: false },
          { text: "Transition metals", correct: false },
          { text: "Noble gases", correct: false }
        ],
        explanation: "Alkali metals are the most reactive group of elements."
      },
      {
        question: "Which of the following is NOT true for Group IA elements?",
        answers: [
          { text: "Most of them are soft, silvery metals", correct: false },
          { text: "Their atomic radii increase with increasing molecular weight", correct: false },
          { text: "They are named the alkaline earth metals", correct: true },
          { text: "They are excellent conductors of heat and electricity", correct: false }
        ],
        explanation: "Group IA elements are known as alkali metals, not alkaline earth metals."
      },
      {
        question: "The most abundant metal in the earth's crust is",
        answers: [
          { text: "Cu", correct: false },
          { text: "Fe", correct: true },
          { text: "Na", correct: false },
          { text: "Al", correct: false }
        ],
        explanation: "Iron (Fe) is the most abundant metal in the Earth's crust."
      },
      {
        question: "Which element has the highest first ionization energy?",
        answers: [
          { text: "Be", correct: false },
          { text: "B", correct: false },
          { text: "C", correct: true },
          { text: "N", correct: false }
        ],
        explanation: "Carbon (C) has the highest first ionization energy among the given options."
      },
      {
        question: "Which of the following is NOT true for the halogens?",
        answers: [
          { text: "They are nonmetals", correct: false },
          { text: "They show the -1 oxidation number in most of their compounds", correct: false },
          { text: "The electronic configuration of their outermost electrons is ns np", correct: false },
          { text: "Their compounds with metals are generally ionic in nature", correct: true }
        ],
        explanation: "The halogens generally form ionic compounds with metals."
      },
      {
        question: "The elements in group VIII are called",
        answers: [
          { text: "Carbon Family", correct: false },
          { text: "Boron Family", correct: false },
          { text: "Halogen Family", correct: false },
          { text: "Inert Gases", correct: true }
        ],
        explanation: "Group VIII elements are known as Inert Gases or Noble Gases."
      },
      {
        question: "The periodic table was brought about by a chemist",
        answers: [
          { text: "Antoine Lavoisier", correct: false },
          { text: "John Dalton", correct: false },
          { text: "Dmitri Mendeleev", correct: true },
          { text: "J.J. Thomson", correct: false }
        ],
        explanation: "Dmitri Mendeleev is credited with creating the periodic table of elements."
      },
      {
        question: "Which of these is not a group IA element?",
        answers: [
          { text: "Potassium", correct: false },
          { text: "Rubidium", correct: false },
          { text: "Iron", correct: true },
          { text: "Sodium", correct: false }
        ],
        explanation: "Iron is not a Group IA element; it is a transition metal."
      },
      {
        question: "The periodic table was brought about in the year",
        answers: [
          { text: "1980", correct: false },
          { text: "1869", correct: true },
          { text: "1860", correct: false },
          { text: "1819", correct: false }
        ],
        explanation: "Dmitri Mendeleev's periodic table was published in 1869."
      },
      {
        question: "In increasing order of their atomic numbers, there is a periodic repetition of their chemical and physical properties. This is known as",
        answers: [
          { text: "The atomic law", correct: false },
          { text: "The periodic law", correct: true },
          { text: "The redox law", correct: false },
          { text: "The electrochemical law", correct: false }
        ],
        explanation: "The periodic law states that the properties of elements are periodic functions of their atomic numbers."
      },
      {
        question: "The elements in group III are called",
        answers: [
          { text: "Boron Family", correct: true },
          { text: "Carbon Family", correct: false },
          { text: "Alkali Family", correct: false },
          { text: "Nitrogen Family", correct: false }
        ],
        explanation: "Group III elements are known as the Boron Family."
      },
      {
        question: "The elements in group IV are called",
        answers: [
          { text: "Nitrogen Family", correct: false },
          { text: "Carbon Family", correct: true },
          { text: "Halogen Family", correct: false },
          { text: "Alkali Metal", correct: false }
        ],
        explanation: "Group IV elements are known as the Carbon Family."
      },
      {
        question: "The elements in group V are called",
        answers: [
          { text: "Boron Family", correct: false },
          { text: "Carbon Family", correct: false },
          { text: "Nitrogen Family", correct: true },
          { text: "Alkali Metal", correct: false }
        ],
        explanation: "Group V elements are known as the Nitrogen Family."
      },
      {
        question: "The elements in group VI are called",
        answers: [
          { text: "Alkali Metal", correct: false },
          { text: "Boron Family", correct: false },
          { text: "Halogen Family", correct: false },
          { text: "Chalcogen Family", correct: true }
        ],
        explanation: "Group VI elements are known as the Chalcogen Family."
      },
      {
        question: "The elements in group VII are called",
        answers: [
          { text: "Halogen Family", correct: true },
          { text: "Carbon Family", correct: false },
          { text: "Boron Family", correct: false },
          { text: "Nitrogen Family", correct: false }
        ],
        explanation: "Group VII elements are known as the Halogen Family."
      },
      {
        question: "The elements in group VIII are called",
        answers: [
          { text: "Carbon Family", correct: false },
          { text: "Boron Family", correct: false },
          { text: "Halogen Family", correct: false },
          { text: "Inert Gases", correct: true }
        ],
        explanation: "Group VIII elements are known as the Inert Gases or Noble Gases."
      },
      {
        question: "Which is the energy required to remove an electron from its gaseous atom?",
        answers: [
          { text: "Ionization Energy", correct: true },
          { text: "Electronegativity", correct: false },
          { text: "Atomic Radius", correct: false },
          { text: "Electron Affinity", correct: false }
        ],
        explanation: "Ionization energy is the energy required to remove an electron from a gaseous atom."
      },
      {
        question: "The addition of hydrogen to a substance is called",
        answers: [
          { text: "Redox", correct: false },
          { text: "Reduction", correct: true },
          { text: "Oxidation", correct: false },
          { text: "Transfer", correct: false }
        ],
        explanation: "Addition of hydrogen to a substance is known as reduction."
      },
      {
        question: "Which process involves gaining electrons?",
        answers: [
          { text: "Reduction", correct: true },
          { text: "Oxidation", correct: false },
          { text: "Redox", correct: false },
          { text: "Transfer", correct: false }
        ],
        explanation: "Gaining electrons is called reduction."
      },
      {
        question: "Another name for ionization energy is",
        answers: [
          { text: "Redox Reaction", correct: false },
          { text: "Ionization Potential", correct: true },
          { text: "Electron Affinity", correct: false },
          { text: "Atomic Radius", correct: false }
        ],
        explanation: "Ionization energy is also known as ionization potential."
      },
      {
        question: "The energy released when a neutral atom adds an extra electron to itself in order to form a stable ion is called",
        answers: [
          { text: "Ionization Potential", correct: false },
          { text: "Redox", correct: false },
          { text: "Electron Affinity", correct: true },
          { text: "Atomic Radius", correct: false }
        ],
        explanation: "The energy released when an atom gains an extra electron is called electron affinity."
      },
      {
        question: "Electronegativity refers to the tendency of an atom in a covalent bond to",
        answers: [
          { text: "Attract electrons to itself", correct: true },
          { text: "Lose electrons", correct: false },
          { text: "Transfer electrons", correct: false },
          { text: "Gain protons", correct: false }
        ],
        explanation: "Electronegativity is the tendency of an atom to attract electrons in a covalent bond."
      },
      {
        question: "Which process involves a decrease in the oxidation number?",
        answers: [
          { text: "Reduction", correct: true },
          { text: "Oxidation", correct: false },
          { text: "Positivity", correct: false },
          { text: "Negativity", correct: false }
        ],
        explanation: "A decrease in oxidation number is associated with reduction."
      },
      {
        question: "All elements in period one have only",
        answers: [
          { text: "One", correct: true },
          { text: "Three", correct: false },
          { text: "Four", correct: false },
          { text: "Two", correct: false }
        ],
        explanation: "Elements in period one have only one electron shell."
      },
      {
        question: "Which of the following is NOT true for Group IA elements?",
        answers: [
          { text: "Most of them are soft, silvery metals", correct: false },
          { text: "Their atomic radii increases with increasing molecular weight", correct: false },
          { text: "They are named the alkaline earth metals", correct: true },
          { text: "They are excellent conductors of heat and electricity", correct: false }
        ],
        explanation: "Group IA elements are known as alkali metals, not alkaline earth metals."
      },
      {
        question: "The nitrate of which of the following cations would exhibit paramagnetism to the greatest extent?",
        answers: [
          { text: "Co", correct: true },
          { text: "Cr", correct: false },
          { text: "Fe", correct: false },
          { text: "Mn", correct: false }
        ],
        explanation: "Cobalt (Co) exhibits the greatest extent of paramagnetism among the options given."
      },
      {
        question: "Which element group is the most reactive of all?",
        answers: [
          { text: "Alkali metals", correct: true },
          { text: "Alkaline earth metals", correct: false },
          { text: "Coinage metals", correct: false },
          { text: "Transition metals", correct: false }
        ],
        explanation: "Alkali metals are the most reactive group of elements."
      },
      {
        question: "Which of the following groups contains the greatest number of gaseous elements?",
        answers: [
          { text: "Alkali metals", correct: false },
          { text: "Alkaline earth metals", correct: false },
          { text: "Coinage metals", correct: false },
          { text: "Transition metals", correct: false }
        ],
        explanation: "This question appears incomplete. The correct group would be the Noble gases (Group VIII), which are not listed in the options provided."
      },
      {
        question: "A relationship where beryllium resembles aluminum, and boron resembles silicon, is called",
        answers: [
          { text: "Amphoterism", correct: false },
          { text: "An allotropic relationship", correct: false },
          { text: "A diagonal relationship", correct: true },
          { text: "Periodic relationship", correct: false }
        ],
        explanation: "A diagonal relationship describes similarities between elements in different groups but in the same periods."
      },
      {
        question: "Which of the following properties of alkaline earth metals decreases with increasing atomic weight?",
        answers: [
          { text: "Ionic radii", correct: false },
          { text: "Atomic radii", correct: false },
          { text: "Ionization energy", correct: true },
          { text: "Electronegativity", correct: false }
        ],
        explanation: "Ionization energy decreases with increasing atomic weight in alkaline earth metals."
      },
      {
        question: "Which is the most basic of the following oxides?",
        answers: [
          { text: "MgO", correct: true },
          { text: "Na₂O", correct: false },
          { text: "PO", correct: false },
          { text: "BeO", correct: false }
        ],
        explanation: "Magnesium oxide (MgO) is the most basic among the oxides listed."
      },
      {
        question: "A 300 g sample of CaCO₃ was heated until 10.0 L of CO₂ was collected at 50.0°C and 742 torr. What percentage of the CaCO₃ had decomposed?",
        answers: [
          { text: "6.84%", correct: false },
          { text: "9.10%", correct: false },
          { text: "12.3%", correct: true },
          { text: "15.8%", correct: false }
        ],
        explanation: "The percentage decomposed is calculated based on the collected volume of CO₂ and the initial mass of CaCO₃."
      },
      {
        question: "What mass of lithium nitride could be formed from 104 g of lithium and excess nitrogen gas?",
        answers: [
          { text: "4.35 g", correct: false },
          { text: "60 g", correct: false },
          { text: "105 g", correct: false },
          { text: "174 g", correct: true }
        ],
        explanation: "The mass of lithium nitride formed is based on stoichiometric calculations involving lithium and nitrogen."
      },
      {
        question: "The most abundant metal in the earth's crust is",
        answers: [
          { text: "Cu", correct: false },
          { text: "Fe", correct: true },
          { text: "Na", correct: false },
          { text: "Al", correct: false }
        ],
        explanation: "Iron (Fe) is the most abundant metal in the earth's crust."
      },
      {
        question: "Which element has the electron configuration [Ar] 4s² 3d⁷?",
        answers: [
          { text: "Co", correct: true },
          { text: "Cr", correct: false },
          { text: "Fe", correct: false },
          { text: "Mn", correct: false }
        ],
        explanation: "Cobalt (Co) has the electron configuration [Ar] 4s² 3d⁷."
      },
      {
        question: "Which of the following is NOT true for the halogens?",
        answers: [
          { text: "They are nonmetals.", correct: false },
          { text: "They show the -1 oxidation number in most of their compounds.", correct: false },
          { text: "The electronic configuration of their outermost electrons is ns² np⁵.", correct: false },
          { text: "Their compounds with metals are generally ionic in nature.", correct: true }
        ],
        explanation: "Halogens generally form ionic compounds with metals, not covalent."
      },
      {
        question: "Which acid listed on the right cannot be obtained by adding water to the substance on the left?",
        answers: [
          { text: "HS₂O₄ - sulfuric acid", correct: false },
          { text: "SeO₂ - selenous acid", correct: false },
          { text: "SO₃ - sulfuric acid", correct: true },
          { text: "TeO₂ - tellurous acid", correct: false }
        ],
        explanation: "SO₃ cannot be obtained by adding water to itself; it must react with water to form sulfuric acid."
      },
      {
        question: "Which of the following statements about sulfuric acid is false?",
        answers: [
          { text: "It is a strong acid.", correct: false },
          { text: "One mole of sulfuric acid reacts completely with two moles of potassium hydroxide.", correct: false },
          { text: "The sulfur atom is sp² hybridized.", correct: true },
          { text: "It is often present in acid rain.", correct: false }
        ],
        explanation: "The sulfur atom in sulfuric acid is sp³ hybridized, not sp²."
      },
      {
        question: "What is the major mineral present in phosphate rock?",
        answers: [
          { text: "Ca(PO₄)₂", correct: true },
          { text: "Na₃PO₄", correct: false },
          { text: "CaPO₄", correct: false },
          { text: "NaH₂PO₄", correct: false }
        ],
        explanation: "The major mineral in phosphate rock is calcium phosphate, Ca(PO₄)₂."
      },
      {
        question: "Some metals are found in the uncombined free state while other metals are found in the combined state. What is a deciding factor?",
        answers: [
          { text: "Metals with negative reduction potentials can occur in the free state while metals with positive reduction potentials occur in the combined state", correct: false },
          { text: "The active metals can occur in the free state while the less active metals occur in the combined state", correct: true },
          { text: "Metals with positive reduction potentials can occur in the free state while metals with negative reduction potentials can occur in the combined state", correct: false },
          { text: "There is no way we can predict which metals will be free or combined", correct: false }
        ],
        explanation: "Active metals are typically found in the combined state, while less active metals can be found in the free state."
      },
      {
        question: "Soluble metal compounds tend to be found in whereas insoluble metal compounds tend to be found in the",
        answers: [
          { text: "Oceans; earth's crust", correct: true },
          { text: "Earth's crust; oceans", correct: false },
          { text: "Salt beds; oceans", correct: false },
          { text: "Oceans; salt beds", correct: false }
        ],
        explanation: "Soluble metal compounds are commonly found in oceans, while insoluble metal compounds are found in the earth's crust."
      },
      {
        question: "The process known as 'roasting' converts (a) Sulfide to (b) Oxide",
        answers: [
          { text: "Hydroxide; oxide", correct: false },
          { text: "Carbonate; oxide", correct: false },
          { text: "Oxide; sulfate", correct: false },
          { text: "Sulfide; oxide", correct: true }
        ],
        explanation: "Roasting is the process where sulfide ores are converted to oxides."
      },
      {
        question: "Which metal can be found as the free element?",
        answers: [
          { text: "W", correct: false },
          { text: "Mn", correct: false },
          { text: "Cu", correct: true },
          { text: "Pr", correct: false }
        ],
        explanation: "Copper (Cu) can be found in its free elemental form."
      },
      {
        question: "The Hall-Héroult process is used in the extraction of",
        answers: [
          { text: "Al", correct: true },
          { text: "Fe", correct: false },
          { text: "Cu", correct: false },
          { text: "Au", correct: false }
        ],
        explanation: "The Hall-Héroult process is used to extract aluminum (Al)."
      },
      {
        question: "The atom having the valence-shell configuration 4p would be in:",
        answers: [
          { text: "Group VIA and Period 5", correct: false },
          { text: "Group IVB and Period 4", correct: false },
          { text: "Group VIB and Period 7", correct: false },
          { text: "Group VIIA and Period 4", correct: true }
        ],
        explanation: "The valence-shell configuration 4p corresponds to Group VIIA and Period 4."
      },
      {
        question: "Select the term best describing the series of elements: Mn, Fe, Co, Ni, Cu.",
        answers: [
          { text: "Transition metals", correct: true },
          { text: "Representative elements", correct: false },
          { text: "Metalloids", correct: false },
          { text: "Alkaline earth metals", correct: false }
        ],
        explanation: "Mn, Fe, Co, Ni, and Cu are all transition metals."
      },
      {
        question: "Which element has the largest atomic radius?",
        answers: [
          { text: "Rb", correct: true },
          { text: "Na", correct: false },
          { text: "F", correct: false },
          { text: "Cl", correct: false }
        ],
        explanation: "Rubidium (Rb) has the largest atomic radius among the elements listed."
      },
      {
        question: "Which of the following terms accurately describes the energy associated with the process:",
        answers: [
          { text: "Electron affinity", correct: false },
          { text: "Ionization energy", correct: true },
          { text: "Binding energy", correct: false },
          { text: "Electronegativity", correct: false }
        ],
        explanation: "Ionization energy is the energy required to remove an electron from an atom."
      },
      {
        question: "The species that contains 24 protons, 26 neutrons, and 22 electrons would be represented by the symbol:",
        answers: [
          { text: "Cr²⁺", correct: true },
          { text: "Mn²⁺", correct: false },
          { text: "Fe²⁺", correct: false },
          { text: "Ni²⁺", correct: false }
        ],
        explanation: "The species with 24 protons, 26 neutrons, and 22 electrons is Chromium (Cr²⁺)."
      },
      {
        question: "Which element has the highest first ionization energy?",
        answers: [
          { text: "Be", correct: false },
          { text: "B", correct: true },
          { text: "C", correct: false },
          { text: "N", correct: false }
        ],
        explanation: "Boron (B) has the highest first ionization energy among the given elements."
      },
      {
        question: "Which of these isoelectronic species has the smallest radius?",
        answers: [
          { text: "Na⁺", correct: true },
          { text: "Mg²⁺", correct: false },
          { text: "Cl⁻", correct: false },
          { text: "S²⁻", correct: false }
        ],
        explanation: "Isoelectronic species with the smallest radius is Na⁺ due to its higher nuclear charge."
      },
      {
        question: "Which of the following elements has the greatest attraction for electrons in a covalent bond?",
        answers: [
          { text: "Ge", correct: false },
          { text: "As", correct: false },
          { text: "Sc", correct: false },
          { text: "Br", correct: true }
        ],
        explanation: "Bromine (Br) has the greatest attraction for electrons in a covalent bond."
      },
      {
        question: "Which statement is wrong?",
        answers: [
          { text: "The atomic weight of carbon is about 12.", correct: false },
          { text: "The most stable ion of lithium is Li⁺", correct: false },
          { text: "A phosphorus atom is larger than an antimony atom.", correct: true },
          { text: "The radius of a sodium atom is larger than that of a sodium cation.", correct: false }
        ],
        explanation: "A phosphorus atom is smaller than an antimony atom, making this statement incorrect."
      },
      {
        question: "All of the following properties of the alkaline earth metals group except which one increases down the group?",
        answers: [
          { text: "Atomic radius", correct: true },
          { text: "First ionization energy", correct: false },
          { text: "Ionic radius", correct: false },
          { text: "Atomic mass", correct: false }
        ],
        explanation: "First ionization energy decreases, not increases, as you move down the alkaline earth metals group."
      },
      {
        question: "Which of the following is an ionic hydride?",
        answers: [
          { text: "PH₃", correct: false },
          { text: "HS", correct: false },
          { text: "NaH", correct: true },
          { text: "CH₄", correct: false }
        ],
        explanation: "Sodium hydride (NaH) is an ionic hydride."
      },
      {
        question: "Which of the following is the most basic oxide?",
        answers: [
          { text: "NO", correct: false },
          { text: "NO₂", correct: false },
          { text: "PO", correct: false },
          { text: "BaO", correct: true }
        ],
        explanation: "Barium oxide (BaO) is the most basic oxide among the options."
      },
      {
        question: "Magnesium is in group 2 in the periodic table. Which of the following formulas for Magnesium compounds is correct?",
        answers: [
          { text: "MgO", correct: true },
          { text: "MgS", correct: false },
          { text: "MgF", correct: false },
          { text: "MgO₂", correct: false }
        ],
        explanation: "Magnesium compounds commonly have the formula MgX₂, where X is a halogen or an oxide, such as MgO (magnesium oxide)."
      },
      {
        question: "Why does NaCl (Sodium Chloride) not conduct electricity in its solid form?",
        answers: [
          { text: "Ions in its structure are fixed in positions", correct: true },
          { text: "It contains no free electrons", correct: false },
          { text: "It has a giant covalent structure", correct: false },
          { text: "Ions in its structure only have single negative and single positive charges", correct: false }
        ],
        explanation: "In solid NaCl, ions are locked in a fixed position in a lattice structure and cannot move freely to conduct electricity."
      },
      {
        question: "Which of the following compounds does not conduct electricity?",
        answers: [
          { text: "Irons", correct: false },
          { text: "Copper", correct: false },
          { text: "Carbon (graphite)", correct: false },
          { text: "Carbon (diamond)", correct: true }
        ],
        explanation: "Diamond has a strong covalent network structure and does not have free electrons to conduct electricity, unlike graphite."
      },
      {
        question: "Halogens have their outermost shell. Number of electrons:",
        answers: [
          { text: "1", correct: false },
          { text: "7", correct: true },
          { text: "2", correct: false },
          { text: "5", correct: false }
        ],
        explanation: "Halogens are in Group VIIA and have seven electrons in their outermost shell."
      },
      {
        question: "Down the group ionization energy decreases due to:",
        answers: [
          { text: "Decrease in atomic radii", correct: false },
          { text: "Increase in atomic radii", correct: true },
          { text: "Shielding effect", correct: true },
          { text: "Electron Affinity", correct: false }
        ],
        explanation: "As you move down a group, the atomic radius increases and the shielding effect grows, which reduces the ionization energy."
      },
      {
        question: "Electronegativity increases across the period due to:",
        answers: [
          { text: "Arrangement of electrons", correct: false },
          { text: "Increase in the number of charges on the nucleus", correct: true },
          { text: "Increase in nuclear weight charge exert contracting effect", correct: false },
          { text: "Penultimate shell being filled", correct: false }
        ],
        explanation: "Across a period, the increase in nuclear charge attracts electrons more strongly, increasing electronegativity."
      },
      {
        question: "Group VIIA elements exist as molecules:",
        answers: [
          { text: "Tetra-atomic", correct: false },
          { text: "Triatomic", correct: false },
          { text: "Monatomic", correct: false },
          { text: "Diatomic", correct: true }
        ],
        explanation: "Group VIIA elements, or halogens, exist as diatomic molecules (e.g., Cl₂, F₂)."
      },
      {
        question: "The following are group IVA elements except:",
        answers: [
          { text: "Carbon", correct: false },
          { text: "Silicon", correct: false },
          { text: "Lead", correct: false },
          { text: "Antimony", correct: true }
        ],
        explanation: "Antimony is in Group VA, not IVA."
      },
      {
        question: "The oxidation state of nitrogen in nitric oxide is:",
        answers: [
          { text: "-1", correct: false },
          { text: "0", correct: false },
          { text: "+2", correct: true },
          { text: "+3", correct: false }
        ],
        explanation: "In nitric oxide (NO), nitrogen has an oxidation state of +2."
      },
      {
        question: "Certain elements are named S block elements because:",
        answers: [
          { text: "Their outermost electron is contained in S subshell", correct: true },
          { text: "They have one electron", correct: false },
          { text: "They have S in their name", correct: false },
          { text: "They are alkali metals", correct: false }
        ],
        explanation: "S block elements have their outermost electron in the S subshell, which includes groups 1 and 2."
      },
      {
        question: "Which of these reactions represent the laboratory preparation of hydrogen?",
        answers: [
          { text: "CH₄ + H₂", correct: false },
          { text: "2Na + 2H₂O → 2NaOH + H₂", correct: false },
          { text: "Zn + 2HCl → ZnCl₂ + H₂", correct: true },
          { text: "CuO + H₂", correct: false }
        ],
        explanation: "Hydrogen is prepared in the lab by the reaction of a metal (like zinc) with an acid (like hydrochloric acid)."
      },
      {
        question: "The alkali metals exhibit similar chemical properties because:",
        answers: [
          { text: "They occur in the combined state", correct: false },
          { text: "They are highly reactive", correct: false },
          { text: "They form crystalline salts", correct: false },
          { text: "They have the same number of outer electrons", correct: true }
        ],
        explanation: "All alkali metals have one electron in their outermost shell, which gives them similar chemical properties."
      },
      {
        question: "Which element group is the most reactive?",
        answers: [
          { text: "Group VIIA", correct: true },
          { text: "Noble gases", correct: false },
          { text: "Group IIA", correct: false },
          { text: "Group IIIA", correct: false }
        ],
        explanation: "Group VIIA elements (halogens) are the most reactive non-metals."
      },
      {
        question: "Which of the following is a peroxide?",
        answers: [
          { text: "FeO", correct: false },
          { text: "BaO₂", correct: true },
          { text: "CuO", correct: false },
          { text: "K₂O", correct: false }
        ],
        explanation: "BaO₂ is a peroxide, where oxygen is in the -1 oxidation state."
      },
      {
        question: "Which of the following statements is true about metals?",
        answers: [
          { text: "They are good conductors of electricity", correct: true },
          { text: "They are malleable and ductile", correct: true },
          { text: "They are poor conductors of heat", correct: false },
          { text: "They have high melting points", correct: true }
        ],
        explanation: "Metals are typically good conductors of electricity and heat, and are malleable and ductile."
      },
      {
        question: "The reduction of CO₂ with hydrogen to produce water gas is termed:",
        answers: [
          { text: "Reduction reaction", correct: false },
          { text: "Oxidation reaction", correct: false },
          { text: "Combustion reaction", correct: false },
          { text: "Water gas reaction", correct: true }
        ],
        explanation: "The reaction of CO₂ with hydrogen to produce water gas (a mixture of CO and H₂) is known as the water gas reaction."
      },
      {
        question: "The vertical columns in the periodic table are called:",
        answers: [
          { text: "Groups", correct: true },
          { text: "Periods", correct: false },
          { text: "Energy levels", correct: false },
          { text: "Orbitals", correct: false }
        ],
        explanation: "The vertical columns in the periodic table are called groups."
      },
      {
        question: "The horizontal rows in the periodic table are called:",
        answers: [
          { text: "Groups", correct: false },
          { text: "Periods", correct: true },
          { text: "Series", correct: false },
          { text: "Clusters", correct: false }
        ],
        explanation: "The horizontal rows in the periodic table are called periods."
      },
      {
        question: "Elements are arranged in groups due to the number of electrons in their outermost shell.",
        answers: [
          { text: "True", correct: true },
          { text: "False", correct: false }
        ],
        explanation: "Elements are arranged in groups based on the number of electrons in their outermost shell."
      },
      {
        question: "All elements in group one have only one electron in their outermost shell.",
        answers: [
          { text: "True", correct: true },
          { text: "False", correct: false }
        ],
        explanation: "Group one elements, or alkali metals, all have one electron in their outermost shell."
      },
      {
        question: "The periodic table can be used to compare and predict properties of different elements.",
        answers: [
          { text: "Redox Reaction", correct: false },
          { text: "Atomic Table", correct: false },
          { text: "Periodic Table", correct: true },
          { text: "Oxidation Reaction", correct: false }
        ],
        explanation: "The periodic table is a tool used to compare and predict properties of elements based on their position in the table."
      },
      {
        question: "The periodic table was brought about by a chemist named:",
        answers: [
          { text: "Antoine Lavoisier", correct: false },
          { text: "John Dalton", correct: false },
          { text: "Dmitri Mendeleev", correct: true },
          { text: "Marie Curie", correct: false }
        ],
        explanation: "Dmitri Mendeleev is credited with the development of the periodic table."
      },
      {
        question: "The lightest known gas is:",
        answers: [
          { text: "Hydrogen", correct: true },
          { text: "Helium", correct: false },
          { text: "Nitrogen", correct: false },
          { text: "Oxygen", correct: false }
        ],
        explanation: "Hydrogen is the lightest known gas."
      },
      {
        question: "Elements that have the same number of protons but different numbers of neutrons are called:",
        answers: [
          { text: "Isotopes", correct: true },
          { text: "Isobars", correct: false },
          { text: "Isomers", correct: false },
          { text: "Isotones", correct: false }
        ],
        explanation: "Isotopes are elements with the same number of protons but different numbers of neutrons."
      },
      {
        question: "Which of these is not a group IA element?",
        answers: [
          { text: "Potassium", correct: false },
          { text: "Rubidium", correct: false },
          { text: "Iron", correct: true },
          { text: "Lithium", correct: false }
        ],
        explanation: "Iron is not a group IA element; it is a transition metal."
      },
      {
        question: "The periodic table was brought about in the year:",
        answers: [
          { text: "1890", correct: false },
          { text: "1869", correct: true },
          { text: "1860", correct: false },
          { text: "1819", correct: false }
        ],
        explanation: "The periodic table was first developed by Dmitri Mendeleev in 1869."
      },
      {
        question: "Halogens have how many electrons in their outermost shell?",
        answers: [
          { text: "1", correct: false },
          { text: "7", correct: true },
          { text: "2", correct: false },
          { text: "5", correct: false }
        ],
        explanation: "Halogens have 7 electrons in their outermost shell, making them one electron short of a full octet."
      },
      {
        question: "Down the group, ionization energy decreases due to",
        answers: [
          { text: "Decrease in atomic radii", correct: false },
          { text: "Increase in atomic radii", correct: true },
          { text: "Shielding effect", correct: true },
          { text: "Electron Affinity", correct: false }
        ],
        explanation: "Ionization energy decreases down a group because of the increase in atomic radii and the shielding effect."
      },
      {
        question: "Electronegativity increases across a period due to",
        answers: [
          { text: "Arrangement of electrons", correct: false },
          { text: "Increase in the number of charges on the nucleus", correct: true },
          { text: "Increase in nuclear weight charge exert contracting effect", correct: false },
          { text: "Penultimate shell being filled", correct: false }
        ],
        explanation: "Electronegativity increases across a period primarily due to the increase in the number of protons in the nucleus, which attracts electrons more strongly."
      },
      {
        question: "Group VIIA elements exist as",
        answers: [
          { text: "Tetra-atomic", correct: false },
          { text: "Monatomic", correct: false },
          { text: "Triatomic", correct: false },
          { text: "Diatomic", correct: true }
        ],
        explanation: "Group VIIA elements, also known as halogens, exist as diatomic molecules (e.g., Cl<sub>2</sub>, F<sub>2</sub>)."
      },
      {
        question: "Magnesium is in group 2 in the periodic table. Which of the following formulas for Magnesium compounds is correct?",
        answers: [
          { text: "MgO", correct: true },
          { text: "MgS", correct: false },
          { text: "MgF", correct: false },
          { text: "MgO<sub>2</sub>", correct: false }
        ],
        explanation: "Magnesium forms Mg<sup>2+</sup> ions, so it combines with oxygen (O<sup>2-</sup>) to form MgO."
      },
      {
        question: "Why does NaCl (Sodium Chloride) not conduct electricity in its solid form?",
        answers: [
          { text: "Ions in its structure are fixed in positions", correct: true },
          { text: "It contains no free electrons", correct: false },
          { text: "It has a giant covalent structure", correct: false },
          { text: "It only has single positive and negative charges", correct: false }
        ],
        explanation: "In solid form, the ions in NaCl are fixed in a lattice and cannot move to conduct electricity. When melted or dissolved in water, the ions are free to move and can conduct electricity."
      },
      {
        question: "When elements are arranged in order of increasing atomic numbers, there is a periodic repetition of their chemical and physical properties. This is known as:",
        answers: [
          { text: "The atomic law", correct: false },
          { text: "The periodic law", correct: true },
          { text: "The oxidation law", correct: false },
          { text: "The redox law", correct: false }
        ],
        explanation: "This periodic repetition of properties is known as the periodic law."
      },


        {
          question: "Acetone reacting with HCN to form a cyanohydrin is an example of",
          answers: [
            { text: "Nucleophilic addition", correct: true },
            { text: "Electrophilic substitution", correct: false },
            { text: "Electrophilic addition", correct: false },
            { text: "Nucleophilic substitution", correct: false }
          ],
          explanation: "The reaction of acetone with HCN to form a cyanohydrin involves nucleophilic addition."
        },


        // Add more questions for Chemistry until you have 30
    ],
    math: [
        
      {
        question: "Simplify 1 + sinθ−cosθ / 1 + sinθ + cosθ",
        answers: [
            { text: "tan²θ", correct: true },
            { text: "cot²θ", correct: false },
            { text: "cosec²θ", correct: false },
            { text: "sin²θ cos²θ", correct: false }
        ],
        explanation: "The given expression simplifies to tan²θ."
    },
    {
        question: "Simplify ∫(2x² + 2) dx from -2 to 2.",
        answers: [
            { text: "54", correct: false },
            { text: "56", correct: true },
            { text: "58", correct: false },
            { text: "52", correct: false }
        ],
        explanation: "The integral evaluates to 56."
    },
    {
        question: "The radius of a circular disc is increasing at a rate of 0.2 cm/sec. At what rate is the area A of the disc increasing when its radius is 20 cm given A = πr²?",
        answers: [
            { text: "4π cm²/sec", correct: false },
            { text: "8π cm²/sec", correct: true },
            { text: "2π cm²/sec", correct: false },
            { text: "16π cm²/sec", correct: false }
        ],
        explanation: "The area of a disc is A = πr². By differentiating, dA/dt = 2πr(dr/dt), where r = 20 cm and dr/dt = 0.2 cm/sec, which gives dA/dt = 8π cm²/sec."
    },
    {
        question: "The radius of a circular disc is increasing at a rate of 0.5 cm/sec. At what rate is the area A of the disc increasing when its radius is 4 cm given A = πr²?",
        answers: [
            { text: "8π cm²/sec", correct: true },
            { text: "4π cm²/sec", correct: false },
            { text: "2π cm²/sec", correct: false },
            { text: "16π cm²/sec", correct: false }
        ],
        explanation: "The area of a disc is A = πr². By differentiating, dA/dt = 2πr(dr/dt), where r = 4 cm and dr/dt = 0.5 cm/sec, which gives dA/dt = 8π cm²/sec."
    },
    {
        question: "Find ∫cos³x dx.",
        answers: [
            { text: "sinx - (sin³x)/3 + c", correct: true },
            { text: "cosx + (cos³x)/3 + c", correct: false },
            { text: "sinx + (sin³x)/3 + c", correct: false },
            { text: "cosx - (cos³x)/3 + c", correct: false }
        ],
        explanation: "The integral of cos³x dx is sinx - (sin³x)/3 + c."
    },
    {
        question: "Find the value of sin 22.5° in surd form.",
        answers: [
            { text: "√(1 − √2)/2", correct: false },
            { text: "√(√2 − 2)/2", correct: false },
            { text: "√(2 − √2)/2", correct: true },
            { text: "√(√2 − 1)/2", correct: false }
        ],
        explanation: "The correct value of sin 22.5° in surd form is √(2 − √2)/2."
    },
    {
        question: "If tan⁻¹(3x) + tan⁻¹(2x) = 3π/4, find the value of x.",
        answers: [
            { text: "1/6, -1", correct: true },
            { text: "-1, -1/6", correct: false },
            { text: "1/6, 1", correct: false },
            { text: "1, -1/6", correct: false }
        ],
        explanation: "Using the formula for the sum of inverse tangents, the solution yields x = 1/6 or -1."
    },
    {
        question: "In a triangle ABC, <A = 53°, sides b and c are 4.2 cm and 3.5 cm respectively. Find the area of ΔABC.",
        answers: [
            { text: "8.7 cm²", correct: false },
            { text: "16.24 cm²", correct: false },
            { text: "4.87 cm²", correct: false },
            { text: "5.87 cm²", correct: true }
        ],
        explanation: "Using the formula for the area of a triangle, the correct area is 5.87 cm²."
    },
    {
        question: "Simplify √(1 + cot²θ) / (1 + tan²θ).",
        answers: [
            { text: "sec²θ", correct: true },
            { text: "cot²θ", correct: false },
            { text: "sin²θ", correct: false },
            { text: "cos²θ", correct: false }
        ],
        explanation: "The given expression simplifies to sec²θ."
    },
    {
        question: "If y = x³ + 3x², find the minimum and maximum points.",
        answers: [
            { text: "(0, 0) and (-2, 4)", correct: true },
            { text: "(0, 0) and (-2, 3)", correct: false },
            { text: "(0, 0) and (4, 3)", correct: false },
            { text: "(0, 0) and (-2, 5)", correct: false }
        ],
        explanation: "The minimum and maximum points occur at (0, 0) and (-2, 4), respectively."
    },
    {
        question: "If tan(A + B) = 1/7 and tanA = 1/3, find tanB.",
        answers: [
            { text: "-1/11", correct: true },
            { text: "-2/11", correct: false },
            { text: "4/11", correct: false },
            { text: "3/7", correct: false }
        ],
        explanation: "Using the tangent addition formula, tanB is found to be -1/11."
    },
    {
        question: "If sinx = 4/5 and cos y = 12/13, find sin(x - y).",
        answers: [
            { text: "63/65", correct: false },
            { text: "33/65", correct: true },
            { text: "48/65", correct: false },
            { text: "15/65", correct: false }
        ],
        explanation: "Using the sine difference identity, sin(x - y) = 33/65."
    },
    {
        question: "Find the value of sin 22.5° in surd form.",
        answers: [
            { text: "√(1 − √2)/2", correct: false },
            { text: "√(√2 − 2)/2", correct: false },
            { text: "√(2 + √2)/2", correct: true },
            { text: "√(√2 − 1)/2", correct: false }
        ],
        explanation: "The correct value of sin 22.5° in surd form is √(2 + √2)/2."
    },
    {
        question: "The volume of a sphere is increasing if its radius is 3 cm. Given V = 2/3πr³, find the rate of increase.",
        answers: [
            { text: "6π cm³", correct: true },
            { text: "5π cm³", correct: false },
            { text: "4π cm³", correct: false },
            { text: "9π cm³", correct: false }
        ],
        explanation: "The rate of volume increase is 6π cm³."
    },
    {
        question: "If x = asinθ and y = bcosθ, evaluate √(4b²x² + a²y²).",
        answers: [
            { text: "2ab", correct: true },
            { text: "ab", correct: false },
            { text: "2a²b²", correct: false },
            { text: "√ab", correct: false }
        ],
        explanation: "The given expression simplifies to 2ab."
    },
    {
        question: "Find the derivative of the function y = tan(2x + 45).",
        answers: [
            { text: "tan(2x + 45)", correct: false },
            { text: "2sec²(2x + 45)", correct: true },
            { text: "sec(2x + 3)", correct: false },
            { text: "2sec²(2x + 3)", correct: false }
        ],
        explanation: "The derivative of y = tan(2x + 45) is 2sec²(2x + 45)."
    },
    {
      question: "Find dy/dx if x²y + y² – 4x = 1.",
      answers: [
          { text: "(4 - 2xy) / (x² + 2y)", correct: true },
          { text: "(4 - 2xy) / (x³ - 2y)", correct: false },
          { text: "(4 + 2xy) / (x³ + 2y)", correct: false },
          { text: "(4 + 2xy) / (x² - 2y)", correct: false }
      ],
      explanation: "Using implicit differentiation, dy/dx is (4 - 2xy) / (x² + 2y)."
  },
  {
      question: "Find the vertical and horizontal asymptote of y = (4x² - 1) / (x² - 5x - 6).",
      answers: [
          { text: "(1, 2) and 3", correct: false },
          { text: "(3, 4) and 3", correct: false },
          { text: "(3, 2) and 3", correct: false },
          { text: "(3, -2) and 4", correct: true }
      ],
      explanation: "The vertical and horizontal asymptotes are (3, -2) and y = 4."
  },
  {
      question: "Find the area of ΔABC if A = 40°, B = 70°, a = 3.5 cm.",
      answers: [
          { text: "25.11 cm²", correct: false },
          { text: "6.22 cm²", correct: false },
          { text: "3.50 cm²", correct: false },
          { text: "8.42 cm²", correct: true }
      ],
      explanation: "Using the sine rule for the area of a triangle, the area is 8.42 cm²."
  },
  {
      question: "Find the value of tan 2α if tan β = 5/12 and sin α = 3/5.",
      answers: [
          { text: "7/24", correct: false },
          { text: "-24/7", correct: false },
          { text: "24/7", correct: true },
          { text: "-7/24", correct: false }
      ],
      explanation: "The value of tan 2α is 24/7 using the double angle identity."
  },
  {
      question: "Evaluate cos⁴θ - sin⁴θ.",
      answers: [
          { text: "cos²θ", correct: true },
          { text: "sin²θ", correct: false },
          { text: "cot²θ", correct: false },
          { text: "tan²θ", correct: false }
      ],
      explanation: "Using the identity for the difference of squares, cos⁴θ - sin⁴θ simplifies to cos²θ."
  },
  {
      question: "If tan θ = y, find cos²θ in terms of y.",
      answers: [
          { text: "y² / (1 + y²)", correct: false },
          { text: "(1 - y²) / (1 + y²)", correct: true },
          { text: "(1 + y²) / (1 - y²)", correct: false },
          { text: "(1 - y²) / y²", correct: false }
      ],
      explanation: "Using the Pythagorean identity, cos²θ = (1 - y²) / (1 + y²)."
  },
  {
      question: "Evaluate ∫ x² ln(x) dx.",
      answers: [
          { text: "(x² / 2)(ln x - 1/2) + c", correct: true },
          { text: "(x³ / 3x) ln(x) + c", correct: false },
          { text: "-(ln x / x + 1/x) + c", correct: false },
          { text: "(x³ / 3)(ln x - 1/3) + c", correct: false }
      ],
      explanation: "Using integration by parts, ∫ x² ln(x) dx = (x² / 2)(ln x - 1/2) + c."
  },
  {
      question: "If tan A = √2, find sec²A - 2.",
      answers: [
          { text: "2√2", correct: false },
          { text: "1", correct: true },
          { text: "2 + 2√2", correct: false },
          { text: "4 + 2√2", correct: false }
      ],
      explanation: "Using the identity sec²A = 1 + tan²A, sec²A = 3. Therefore, sec²A - 2 = 1."
  },
  {
      question: "Find the equation of the tangent y = 3x² + 2x - 1 at x = 1.",
      answers: [
          { text: "y = 8x - 4", correct: true },
          { text: "y = 6x - 1", correct: false },
          { text: "y = 8x + 2", correct: false },
          { text: "y = 8x + 4", correct: false }
      ],
      explanation: "The derivative of y = 3x² + 2x - 1 at x = 1 is 8, and the tangent line passes through (1, 4)."
  },
  {
      question: "Differentiate (1/3 + 4x)⁵ with respect to x.",
      answers: [
          { text: "20(1/3 + 4x)⁴", correct: true },
          { text: "10(1/3 + 4x)³", correct: false },
          { text: "15(1/3 + 4x)²", correct: false },
          { text: "30(1/3 + 4x)⁴", correct: false }
      ],
      explanation: "Using the chain rule, the derivative of (1/3 + 4x)⁵ is 20(1/3 + 4x)⁴."
  },
  {
      question: "Evaluate ∫ dx / (1 - cosx).",
      answers: [
          { text: "-1 / tan(x/2) + c", correct: true },
          { text: "-cos²x + c", correct: false },
          { text: "ln|secx + tanx| + c", correct: false },
          { text: "1 / tan²x + c", correct: false }
      ],
      explanation: "Using a trigonometric identity, ∫ dx / (1 - cosx) = -1 / tan(x/2) + c."
  },
  {
      question: "Find the value of sin(α + β), if tan β = 5/12 and sin α = 3/5.",
      answers: [
          { text: "56/65", correct: true },
          { text: "35/65", correct: false },
          { text: "20/65", correct: false },
          { text: "-36/65", correct: false }
      ],
      explanation: "Using the sum of angles identity, sin(α + β) = 56/65."
  },
  {
      question: "Evaluate tan195° in surd form.",
      answers: [
          { text: "(3 + √3) / (3 - √3)", correct: false },
          { text: "(3 - √3) / (3 + √3)", correct: true },
          { text: "-(3 - √3) / (3 + √3)", correct: false },
          { text: "(3 - √3) / -(3 + √3)", correct: false }
      ],
      explanation: "The value of tan195° in surd form is (3 - √3) / (3 + √3)."
  },
  {
      question: "Evaluate 2 / (1 - cos45°), leaving your answer in surd form.",
      answers: [
          { text: "√2 + 3", correct: false },
          { text: "√2 - 3", correct: false },
          { text: "4 + 2√2", correct: true },
          { text: "2 + √3", correct: false }
      ],
      explanation: "Using trigonometric identities, the expression evaluates to 4 + 2√2."
  },
  {
      question: "If tan θ = 3/4, find cos²θ.",
      answers: [
          { text: "5/3", correct: false },
          { text: "2/4", correct: false },
          { text: "3/5", correct: true },
          { text: "7/25", correct: false }
      ],
      explanation: "Using the Pythagorean identity, cos²θ = 3/5."
  },
  {
      question: "If cos θ = 3/12, find sec θ.",
      answers: [
          { text: "3.8", correct: false },
          { text: "2.5", correct: false },
          { text: "4", correct: true },
          { text: "3.5", correct: false }
      ],
      explanation: "Since sec θ = 1/cos θ, sec θ = 4."
  },
  {
    question: "Find the x-intercept of y = (x³ − 1) / (x² − 4).",
    answers: [
        { text: "(±2, 0)", correct: false },
        { text: "(0, ±2)", correct: false },
        { text: "(0, ±1)", correct: false },
        { text: "(±1, 0)", correct: true }
    ],
    explanation: "The x-intercepts occur where y = 0, which gives (±1, 0)."
},
{
    question: "Differentiate y = cos(Ax + B) with respect to x at x = 1.",
    answers: [
        { text: "-A sin(A + B)", correct: true },
        { text: "A cos(B)", correct: false },
        { text: "0", correct: false },
        { text: "1 - sin(B)", correct: false }
    ],
    explanation: "Differentiating y = cos(Ax + B) gives -A sin(Ax + B), and at x = 1, it is -A sin(A + B)."
},
{
    question: "Differentiate y = cos(Ax + B) with respect to x at x = 0.",
    answers: [
        { text: "-A sin(B)", correct: true },
        { text: "A cos(B)", correct: false },
        { text: "0", correct: false },
        { text: "- sin(B)", correct: false }
    ],
    explanation: "Differentiating y = cos(Ax + B) gives -A sin(Ax + B), and at x = 0, it is -A sin(B)."
},
{
    question: "Simplify 1/(secθ−1) + 1/(secθ+1).",
    answers: [
        { text: "2tanθ", correct: false },
        { text: "2cotθ", correct: false },
        { text: "2cosec²θcosθ", correct: true },
        { text: "2cosecθ", correct: false }
    ],
    explanation: "Simplifying the expression gives 2cosec²θcosθ."
},
{
    question: "Find dy/dx if (x²/a²) + (y²/b²) = 1.",
    answers: [
        { text: "-a²x/b²y", correct: true },
        { text: "a²x/b²y", correct: false },
        { text: "b²x/a²y", correct: false },
        { text: "-b²x/a²y", correct: false }
    ],
    explanation: "Using implicit differentiation, dy/dx = -a²x/b²y."
},
{
    question: "If cos(3x) + √3 cos(3x) = √3, 0 ≤ x ≤ 180°, find the value of x.",
    answers: [
        { text: "√3", correct: false },
        { text: "2", correct: true },
        { text: "1 + √3", correct: false },
        { text: "√(1 + √3)²", correct: false }
    ],
    explanation: "By solving the equation, the value of x is 2."
},
{
    question: "Find the antiderivative of e^(sinθ) ∙ cosθ + sin√θ/√θ.",
    answers: [
        { text: "e^(sinθ) - 2cos√θ + c", correct: true },
        { text: "e^(cosθsinθ) - 2sinθ + c", correct: false },
        { text: "e^(sinθ) + 2cos√θ + c", correct: false },
        { text: "e^(cosθ) - 2cos√θ + c", correct: false }
    ],
    explanation: "The antiderivative is e^(sinθ) - 2cos√θ + c."
},
{
    question: "Evaluate ∫ tan²(x) dx.",
    answers: [
        { text: "tan(x) - 1 + c", correct: false },
        { text: "tan(x) - x + c", correct: true },
        { text: "tan(x) + x + c", correct: false },
        { text: "-tan(x) + 1 + c", correct: false }
    ],
    explanation: "The integral of tan²(x) is tan(x) - x + c."
},
{
    question: "Evaluate ∫ cos³(x)tan³(x) dx.",
    answers: [
        { text: "(1/2)cos²(x) - ln|cos(x)| + c", correct: true },
        { text: "(1/2)cos²(x) - ln|tan(x)| + c", correct: false },
        { text: "(1/2)tan²(x) + ln|cos(x)| + c", correct: false },
        { text: "(1/2)tan²(x) - ln|tan(x)| + c", correct: false }
    ],
    explanation: "The integral of cos³(x)tan³(x) dx is (1/2)cos²(x) - ln|cos(x)| + c."
},
{
    question: "Find a value of α for 0 ≤ α ≤ 360° in the equation cos α tan α = 1, by using the substitution tan(α/2) = t.",
    answers: [
        { text: "45°", correct: false },
        { text: "90°", correct: true },
        { text: "180°", correct: false },
        { text: "0°", correct: false }
    ],
    explanation: "Using substitution and solving the equation, α = 90°."
},
{
    question: "Evaluate ∫ (2x + 3)e^x dx.",
    answers: [
        { text: "(2x + 3)e^x + c", correct: true },
        { text: "2xe^x - 3 + c", correct: false },
        { text: "xe^x - 3 + c", correct: false },
        { text: "(x²)e^x - 3 + c", correct: false }
    ],
    explanation: "The integral evaluates to (2x + 3)e^x + c."
},
{
    question: "If a sinθ + b cosθ = √p and a cosθ - b sinθ = √q, evaluate √(p + q).",
    answers: [
        { text: "√(a² - b²)", correct: false },
        { text: "√(a² + b²)", correct: true },
        { text: "√(ab)", correct: false },
        { text: "√(2ab)", correct: false }
    ],
    explanation: "Using the given trigonometric identities, √(p + q) = √(a² + b²)."
},
{
    question: "Find the value of θ in the range 180° ≤ θ ≤ 360° that satisfies (1 + cosθ) / (2 - cosθ) = 1.",
    answers: [
        { text: "300°", correct: true },
        { text: "210°", correct: false },
        { text: "60°", correct: false },
        { text: "330°", correct: false }
    ],
    explanation: "Solving the equation gives θ = 300°."
},
{
    question: "Find cos 45° in surd form.",
    answers: [
        { text: "√2 / 2", correct: true },
        { text: "1 / √2", correct: true }
    ],
    explanation: "The value of cos 45° in surd form is either √2 / 2 or 1 / √2."
},
{
    question: "Find sin 45° in surd form.",
    answers: [
        { text: "√2 / 2", correct: true },
        { text: "1 / √2", correct: true }
    ],
    explanation: "The value of sin 45° in surd form is either √2 / 2 or 1 / √2."
},
{
    question: "Evaluate ∫ (1 / (1 + 4x²)) dx.",
    answers: [
        { text: "(1/2)tan⁻¹(2x) + c", correct: true },
        { text: "2tan⁻¹(2x) + c", correct: false },
        { text: "(1/2)tan⁻¹(x/2) + c", correct: false },
        { text: "2tan⁻¹(x/2) + c", correct: false }
    ],
    explanation: "The integral evaluates to (1/2)tan⁻¹(2x) + c."
},
{
  question: "Find the extremum (R) in the equation 2sinx + 3cosx.",
  answers: [
      { text: "√13", correct: true },
      { text: "√15", correct: false },
      { text: "4", correct: false },
      { text: "17", correct: false }
  ],
  explanation: "The extremum of 2sinx + 3cosx is √13 using the formula for maximum value of a linear combination of sine and cosine."
},
{
  question: "∫ (2x² − 2) dx from -2 to 2.",
  answers: [
      { text: "8", correct: true },
      { text: "-8", correct: false },
      { text: "4", correct: false },
      { text: "0", correct: false }
  ],
  explanation: "Evaluating the integral of (2x² − 2) from -2 to 2 gives 8."
},
{
  question: "Find the volume of a sphere that is increasing at a rate of 20 cm³/sec when the radius is 4 cm.",
  answers: [
      { text: "0.1 cm/sec", correct: true },
      { text: "0.08 cm/sec", correct: false },
      { text: "0.79 cm/sec", correct: false },
      { text: "0.01 cm/sec", correct: false }
  ],
  explanation: "The rate of change of the radius is calculated using the formula for the volume of a sphere."
},
{
  question: "Evaluate ∫ sin⁷x dx.",
  answers: [
      { text: "sinx - (sin³x)/3 + (3sin⁵x)/5 + c", correct: true },
      { text: "sinx + (sin³x)/3 + (3sin⁵x)/5 + c", correct: false },
      { text: "(cos⁷x)/7 - (3cos⁵x)/5 + cos³x - cosx + c", correct: false },
      { text: "-(cos⁵x)/5 + c", correct: false }
  ],
  explanation: "The integral of sin⁷x dx evaluates to sinx - (sin³x)/3 + (3sin⁵x)/5 + c."
},
{
  question: "Solve the equation 2 = 2 for 0 < θ < 180°.",
  answers: [
      { text: "90", correct: false },
      { text: "60", correct: false },
      { text: "30", correct: false },
      { text: "120", correct: true }
  ],
  explanation: "By solving the given equation, the value of θ is 120°."
},
{
  question: "Find the value of cot⁻¹(√2 + 1), correct to two decimal places.",
  answers: [
      { text: "22.50°", correct: true },
      { text: "22.43°", correct: false },
      { text: "23.41°", correct: false },
      { text: "21.69°", correct: false }
  ],
  explanation: "Using the cotangent inverse function, cot⁻¹(√2 + 1) is approximately 22.50°."
},
{
  question: "Simplify sin³α.",
  answers: [
      { text: "3sinα - 4sin³α", correct: true },
      { text: "3sinα + 4sin³α", correct: false },
      { text: "4sin³α - 3sinα", correct: false },
      { text: "4sin³αsinα", correct: false }
  ],
  explanation: "Using the triple angle identity, sin³α simplifies to 3sinα - 4sin³α."
},
{
  question: "Find the value of sin2α if tanβ = 5/12 and sinα = 3/5.",
  answers: [
      { text: "36/55", correct: false },
      { text: "20/65", correct: false },
      { text: "36/35", correct: false },
      { text: "24/25", correct: true }
  ],
  explanation: "Using the double angle identity for sine, sin2α = 24/25."
},
{
  question: "∫ (sec²x + secxtanx) / (secx + tanx) dx.",
  answers: [
      { text: "ln|secx + tanx| + c", correct: true },
      { text: "2secx + c", correct: false },
      { text: "secx + tanx + c", correct: false },
      { text: "x + c", correct: false }
  ],
  explanation: "The integral of (sec²x + secxtanx) / (secx + tanx) simplifies to ln|secx + tanx| + c."
},
{
  question: "Evaluate ∫ (5x²) / (10x³ + 3) dx.",
  answers: [
      { text: "(1/6)ln|10x³ - 3| + c", correct: true },
      { text: "(5/3)ln|10x³ - 3| + c", correct: false },
      { text: "(1/2)ln|10x³ - 3| + c", correct: false },
      { text: "ln|10x³ - 3| + c", correct: false }
  ],
  explanation: "The integral of (5x²) / (10x³ + 3) dx evaluates to (1/6)ln|10x³ - 3| + c."
},
{
  question: "What is the value of cot⁻¹(√2 + 1), correct to two decimal places?",
  answers: [
      { text: "22.50°", correct: true },
      { text: "22.43°", correct: false },
      { text: "23.41°", correct: false },
      { text: "21.69°", correct: false }
  ],
  explanation: "Using a calculator, the value of cot⁻¹(√2 + 1) is approximately 22.50°."
},
{
  question: "Simplify sin³α.",
  answers: [
      { text: "3sinα - 4sin³α", correct: true },
      { text: "3sinα + 4sin³α", correct: false },
      { text: "4sin³α - 3sinα", correct: false },
      { text: "4sin³αsinα", correct: false }
  ],
  explanation: "Using the identity for sin³α, the expression simplifies to 3sinα - 4sin³α."
},
{
  question: "Find the value of sin2α if tanβ = 5/12 and sinα = 3/5.",
  answers: [
      { text: "36/55", correct: false },
      { text: "20/65", correct: false },
      { text: "36/35", correct: false },
      { text: "24/25", correct: true }
  ],
  explanation: "Using trigonometric identities, sin2α = 24/25."
},
{
  question: "Find cos45° in surd form.",
  answers: [
      { text: "√2 / 2", correct: true },
      { text: "1 / √2", correct: true }
  ],
  explanation: "The value of cos45° in surd form is either √2 / 2 or 1 / √2."
},
{
  question: "Find sin45° in surd form.",
  answers: [
      { text: "√2 / 2", correct: true },
      { text: "1 / √2", correct: true }
  ],
  explanation: "The value of sin45° in surd form is either √2 / 2 or 1 / √2."
},
{
  question: "Evaluate ∫ (1 / (1 + 4x²)) dx.",
  answers: [
      { text: "(1/2)tan⁻¹(2x) + c", correct: true },
      { text: "2tan⁻¹(2x) + c", correct: false },
      { text: "(1/2)tan⁻¹(x/2) + c", correct: false },
      { text: "2tan⁻¹(x/2) + c", correct: false }
  ],
  explanation: "The integral evaluates to (1/2)tan⁻¹(2x) + c."
},
{
  question: "Find the vertical and horizontal asymptote of y = (4x² − 1) / (x² − 5x − 6).",
  answers: [
      { text: "(1, 2) and 3", correct: false },
      { text: "(3, 4) and 3", correct: false },
      { text: "(3, 2) and 3", correct: false },
      { text: "(3, -2) and 4", correct: true }
  ],
  explanation: "The vertical and horizontal asymptotes are (3, -2) and y = 4."
},
{
  question: "Find dy/dx if y = tan(2x + 45).",
  answers: [
      { text: "tan(2x + 45)", correct: false },
      { text: "2sec²(2x + 45)", correct: true },
      { text: "sec(2x + 3)", correct: false },
      { text: "2sec(2x + 43)", correct: false }
  ],
  explanation: "The derivative of y = tan(2x + 45) is 2sec²(2x + 45)."
},
{
  question: "Find the volume generated by rotating the area under the curve y = 5x² between x = 0 and x = 1 through 2π radian about the x-axis.",
  answers: [
      { text: "π cubic unit", correct: false },
      { text: "10π cubic unit", correct: false },
      { text: "5π cubic unit", correct: true },
      { text: "25 cubic unit", correct: false }
  ],
  explanation: "The volume generated is 5π cubic units."
},
{
  question: "Find the lengths of the tangents of the circle x² + y² + 5x + 4y - 20 = 0 from the point (2, 3).",
  answers: [
      { text: "√13", correct: false },
      { text: "√31", correct: false },
      { text: "√19", correct: false },
      { text: "√15", correct: true }
  ],
  explanation: "The length of the tangent from (2, 3) to the circle is √15."
},
{
  question: "Differentiate y = (1 − 2x)(x³ + 5).",
  answers: [
      { text: "3x² − 8x³ − 10", correct: true },
      { text: "x² − 8x³ + 10", correct: false },
      { text: "x² + 28x³ − 10", correct: false },
      { text: "2x² + 8x³ + 10", correct: false }
  ],
  explanation: "The derivative of y = (1 − 2x)(x³ + 5) is 3x² − 8x³ − 10."
},
{
  question: "Obtain the equation of the circle with center (1, 2) and radius 5.",
  answers: [
      { text: "x² + y² − 2x − 4y = 20", correct: true },
      { text: "x² + y² − 4x − 2y = 20", correct: false },
      { text: "2x² + 2y² − 4x − 4y = 40", correct: false },
      { text: "2x² + 2y² + x + 2y = 10", correct: false }
  ],
  explanation: "The equation of the circle is x² + y² − 2x − 4y = 20."
},
{
  question: "Evaluate ∫ (3 − 2x) dx from 1 to 0.",
  answers: [
      { text: "6", correct: false },
      { text: "5", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false }
  ],
  explanation: "The integral evaluates to 2."
},
{
  question: "Find the fixed angle in the trigonometric equation 2√3 sinθ + 2cosθ = 2.",
  answers: [
      { text: "90", correct: false },
      { text: "60", correct: false },
      { text: "0", correct: true },
      { text: "30", correct: false }
  ],
  explanation: "The fixed angle that satisfies the equation is 0°."
},
{
  question: "Find the equation of the tangent to the curve y = 2x² − 5 at x = 2.",
  answers: [
      { text: "y = 8x − 13", correct: true },
      { text: "y = 3x − 2", correct: false },
      { text: "y = 3x + 2", correct: false },
      { text: "y = 4x − 5", correct: false }
  ],
  explanation: "The tangent line equation is y = 8x − 13."
},
{
  question: "Find the equation of a line passing through (1, -1) and (3, 7).",
  answers: [
      { text: "y − 2x + 5 = 0", correct: false },
      { text: "y = 4x + 5", correct: false },
      { text: "y = 2x + 5", correct: false },
      { text: "y = 4x − 5", correct: true }
  ],
  explanation: "The equation of the line passing through the points is y = 4x − 5."
},
{
  question: "Find dy/dx if y = 2sin²x + x³ − 6x.",
  answers: [
      { text: "4cos²x + 3x² − 6", correct: false },
      { text: "2cos²x + 3x² − 6", correct: true },
      { text: "4sin²x + 3x² − 6", correct: false },
      { text: "2cos²x + 3x² − 5", correct: false }
  ],
  explanation: "The derivative of y = 2sin²x + x³ − 6x is 2cos²x + 3x² − 6."
},
{
  question: "Find the equation of a normal to the curve y = (1 − x)(3 + x) at the point x = 2.",
  answers: [
      { text: "6y − x − 32 = 0", correct: false },
      { text: "6y − x − 30 = 0", correct: false },
      { text: "6y − x + 30 = 0", correct: false },
      { text: "6y − x + 32 = 0", correct: true }
  ],
  explanation: "The equation of the normal at x = 2 is 6y − x + 32 = 0."
},
{
  question: "Evaluate ∫ sin⁷x dx.",
  answers: [
      { text: "sinx − sin³x + (3sin⁵x)/5 + c", correct: true },
      { text: "sinx + sin³x + (3sin⁵x)/5 + c", correct: false },
      { text: "(cos⁷x)/7 − (3cos³x)/5 + cosx + c", correct: false },
      { text: "(cos⁵x)/5 + c", correct: false }
  ],
  explanation: "The integral of sin⁷x dx is sinx − sin³x + (3sin⁵x)/5 + c."
},
{
  question: "Evaluate ∫ cos(9x)cos(3x) dx.",
  answers: [
      { text: "(sin6x)/12 + (sin12x)/24 + c", correct: true },
      { text: "(sin6x)/12 − (sin12x)/24 + c", correct: false },
      { text: "(cos6x)/12 + (sin12x)/24 + c", correct: false },
      { text: "(cos6x)/12 − (sin12x)/24 + c", correct: false }
  ],
  explanation: "The integral of cos(9x)cos(3x) dx is (sin6x)/12 + (sin12x)/24 + c."
},
{
  question: "Evaluate ∫ tan⁷θsec²θ dθ.",
  answers: [
      { text: "tanθ/3 + c", correct: false },
      { text: "tan²θ/2 + c", correct: false },
      { text: "tan⁸θ/8 + c", correct: true },
      { text: "tan⁵θ/5 + c", correct: false }
  ],
  explanation: "The integral of tan⁷θsec²θ dθ is tan⁸θ/8 + c."
},
{
  question: "Find the extremum in the equation 2sinx + 3cosx.",
  answers: [
      { text: "√13", correct: true },
      { text: "√15", correct: false },
      { text: "4", correct: false },
      { text: "17", correct: false }
  ],
  explanation: "The extremum of 2sinx + 3cosx is √13."
},
{
  question: "Evaluate ∫ (2x² − 2) dx from -2 to 2.",
  answers: [
      { text: "8", correct: true },
      { text: "-8", correct: false },
      { text: "5", correct: false },
      { text: "4", correct: false }
  ],
  explanation: "The integral evaluates to 8."
},
{
  question: "If tanθ = 3/4, find cos²θ.",
  answers: [
      { text: "7/25", correct: true },
      { text: "5/4", correct: false },
      { text: "2/3", correct: false },
      { text: "4/5", correct: false }
  ],
  explanation: "Using the Pythagorean identity, cos²θ = 7/25."
},
{
  question: "If cosθ = 3/4, find secθ.",
  answers: [
      { text: "4/3", correct: true },
      { text: "2.5", correct: false },
      { text: "1.33", correct: false },
      { text: "3.8", correct: false }
  ],
  explanation: "Since secθ = 1/cosθ, secθ = 4/3."
},
{
  question: "Find dy/dx if y = x²cosx.",
  answers: [
      { text: "-xsinx + cosx", correct: true },
      { text: "-2xsinx + cosx", correct: false },
      { text: "-xsinx - cosx", correct: false },
      { text: "-2xsinx - cosx", correct: false }
  ],
  explanation: "Using the product rule, dy/dx = -xsinx + cosx."
},
{
  question: "If 180° ≤ θ ≤ 270° and tanβ = 12/5, find the value of cosβ - sinβ.",
  answers: [
      { text: "-2/13", correct: true },
      { text: "7/13", correct: false },
      { text: "5/13", correct: false },
      { text: "7/12", correct: false }
  ],
  explanation: "Using trigonometric identities, the value of cosβ - sinβ is -2/13."
},
{
  question: "If y = (x² / (x² − 1)), find the vertical asymptote.",
  answers: [
      { text: "±1", correct: true },
      { text: "±2", correct: false },
      { text: "4", correct: false },
      { text: "6", correct: false }
  ],
  explanation: "The vertical asymptote occurs where the denominator is zero, so x = ±1."
},
{
  question: "In a triangle ABC, if a = 8, b = 6, c = 3, find the area of the triangle and angle B (in two decimal places).",
  answers: [
      { text: "8.50, 45.09°", correct: false },
      { text: "8.45, 45.09°", correct: false },
      { text: "8.50, 45.10°", correct: false },
      { text: "7.64, 39.57°", correct: true }
  ],
  explanation: "The area is calculated using Heron’s formula, and angle B is found using the cosine rule."
},
{
  question: "Find ∫ (4 − 2cosθ)³sinθ dθ.",
  answers: [
      { text: "(1/6)(2sinθ + 1)² + c", correct: false },
      { text: "(1/3)(12cos²2θ) + c", correct: false },
      { text: "(1/6)(sin²θ + 2cosθ)² + c", correct: false },
      { text: "(1/8)(4 − 2cosθ)⁴ + c", correct: true }
  ],
  explanation: "The integral evaluates to (1/8)(4 − 2cosθ)⁴ + c."
},
{
  question: "Find the value of tan²α if tanβ = 5/12, sinα = 3/5.",
  answers: [
      { text: "24/7", correct: true },
      { text: "-7/24", correct: false },
      { text: "-24/7", correct: false },
      { text: "7/24", correct: false }
  ],
  explanation: "Using trigonometric identities, tan²α = 24/7."
},
{
  question: "If y = x²sin²x, find the derivative with respect to x.",
  answers: [
      { text: "2xsin²x + 2x²cos²x", correct: true },
      { text: "2xtanx + x²sec²x", correct: false },
      { text: "2xsinx + 2x²sec²x", correct: false },
      { text: "2xtanx + x²sec²x", correct: false }
  ],
  explanation: "The derivative of y = x²sin²x is 2xsin²x + 2x²cos²x."
},
{
  question: "(1/3 + 4x)⁵, find the derivative with respect to x.",
  answers: [
      { text: "(1/6)(1/3 + 4x)⁶", correct: false },
      { text: "(1/24)(1/3 + 4x)⁶", correct: false },
      { text: "None", correct: true },
      { text: "(1/3)(1/3)⁵ + (2/3)x⁶ + c", correct: false }
  ],
  explanation: "The correct answer is 20(1/3 + 4x)⁴."
},
{
  question: "Given ∆ABC, a = 8, b = 3, c = 7. What is the value of A in two decimal places?",
  answers: [
      { text: "49.60°", correct: false },
      { text: "49.63°", correct: false },
      { text: "94.32°", correct: false },
      { text: "98.21°", correct: true }
  ],
  explanation: "The angle A is calculated using the cosine rule."
},
{
  question: "Differentiate y = (1 + x/3)⁹⁹ with respect to x.",
  answers: [
      { text: "-33(1 − x/3)⁹⁸", correct: false },
      { text: "99(1 − x/3)⁹⁸", correct: true },
      { text: "-(1/3)(1 − x/3)⁹⁸", correct: false },
      { text: "33(1 − x/3)⁹⁸", correct: false }
  ],
  explanation: "The derivative of y = (1 + x/3)⁹⁹ is 99(1 − x/3)⁹⁸."
},
{
  question: "Find the y-intercept of the curve y = (x − 12)/(x² − 4).",
  answers: [
      { text: "(0, 0.25)", correct: true },
      { text: "(-0.25, 0)", correct: false },
      { text: "(±1, 0)", correct: false },
      { text: "(0, ±)", correct: false }
  ],
  explanation: "Setting x = 0, the y-intercept is (0, 0.25)."
},
{
  question: "Find dy/dx if y = cos(6x).",
  answers: [
      { text: "5sinx", correct: false },
      { text: "6sin6x", correct: true },
      { text: "3sin10x", correct: false },
      { text: "10x", correct: false }
  ],
  explanation: "The derivative of y = cos(6x) is 6sin6x."
},
{
  question: "Integrate 2 + 3x + x².",
  answers: [
      { text: "2x + (3/2)x² + (x³/3) + c", correct: true },
      { text: "3x + (5/2)x + (x²/3) + c", correct: false },
      { text: "x + (5/2)x² + (2/x) + c", correct: false },
      { text: "x + (2/3)x² + (5/2) + c", correct: false }
  ],
  explanation: "The integral of 2 + 3x + x² is 2x + (3/2)x² + (x³/3) + c."
},
{
  question: "Find the value of tan(A + B), if tanβ = 5/12 and sinA = 3/5.",
  answers: [
      { text: "35/65", correct: false },
      { text: "56/65", correct: true },
      { text: "20/65", correct: false },
      { text: "-36/65", correct: false }
  ],
  explanation: "Using the sum of angles identity, tan(A + B) = 56/65."
},
{
  question: "Find the derivative of x² + y³ = 1 with respect to x at y = 1.",
  answers: [
      { text: "-3/2x", correct: false },
      { text: "-2x/3", correct: true },
      { text: "0", correct: false },
      { text: "2x", correct: false }
  ],
  explanation: "The derivative of x² + y³ = 1 is -2x/3 at y = 1."
},
{
  question: "Find the minimum point of the curve y = 3x² + 6x.",
  answers: [
      { text: "(1, 9)", correct: false },
      { text: "(-9, -9)", correct: false },
      { text: "(-1, -3)", correct: true },
      { text: "(1, 12)", correct: false }
  ],
  explanation: "The minimum point occurs at (-1, -3) because the second derivative is positive."
},
{
  question: "Find the eccentricity of the ellipse 4x²/36 + 9y² = 1.",
  answers: [
      { text: "0.94", correct: true },
      { text: "0.45", correct: false },
      { text: "0.85", correct: false },
      { text: "0.46", correct: false }
  ],
  explanation: "The eccentricity of the ellipse is calculated as 0.94."
},
{
  question: "Simplify (tanθ − secθ)²/tanθ secθ.",
  answers: [
      { text: "2sinθ", correct: false },
      { text: "cosθ", correct: true },
      { text: "sin²θ", correct: false },
      { text: "2cosθ", correct: false }
  ],
  explanation: "The expression simplifies to cosθ."
},
{
  question: "Find the equation of the tangent to the curve y = 4x² − 5x + 6 at x = 1.",
  answers: [
      { text: "3x + 1", correct: true },
      { text: "3x + 2", correct: false },
      { text: "4x − 1", correct: false },
      { text: "2x + 2", correct: false }
  ],
  explanation: "The equation of the tangent to the curve at x = 1 is 3x + 1."
},
{
  question: "Find dy/dx if y = x⁴ cosx.",
  answers: [
      { text: "-x³sinx + 4x³cosx", correct: false },
      { text: "4x³cosx − x⁴sinx", correct: true },
      { text: "-x³cosx + 4x³sinx", correct: false },
      { text: "x³sinx − 4x⁴cosx", correct: false }
  ],
  explanation: "Using the product rule, the derivative is 4x³cosx − x⁴sinx."
},
{
  question: "Simplify tan(45° + x) + tan(45° − x).",
  answers: [
      { text: "sec²x", correct: true },
      { text: "cot²x", correct: false },
      { text: "sin²x", correct: false },
      { text: "cos²x", correct: false }
  ],
  explanation: "The given expression simplifies to sec²x using the tangent addition and subtraction formulas."
},
{
  question: "Find the value of sin(α + β) if tanβ = 5/12 and sinα = 3/5.",
  answers: [
      { text: "56/65", correct: true },
      { text: "35/65", correct: false },
      { text: "20/65", correct: false },
      { text: "-36/65", correct: false }
  ],
  explanation: "Using the sum of angles identity, sin(α + β) = 56/65."
},
{
  question: "Evaluate tan195° in surd form.",
  answers: [
      { text: "(3 + √3) / (3 − √3)", correct: false },
      { text: "(3 − √3) / (3 + √3)", correct: true },
      { text: "-(3 − √3) / (3 + √3)", correct: false },
      { text: "(3 − √3) / -(3 + √3)", correct: false }
  ],
  explanation: "The value of tan195° in surd form is (3 − √3) / (3 + √3)."
},
{
  question: "Evaluate 2 / (1 − cos45°), leaving your answer in surd form.",
  answers: [
      { text: "√2 + 3", correct: false },
      { text: "√2 − 3", correct: false },
      { text: "4 + 2√2", correct: true },
      { text: "2 + √3", correct: false }
  ],
  explanation: "Using trigonometric identities, the expression evaluates to 4 + 2√2."
},
{
  question: "Find the equation of the tangent to y = 3x² + 5x at x = 2.",
  answers: [
      { text: "y = 7x + 2", correct: false },
      { text: "y = 13x + 1", correct: false },
      { text: "y = 17x − 4", correct: true },
      { text: "y = 7x − 4", correct: false }
  ],
  explanation: "The equation of the tangent at x = 2 is y = 17x − 4."
},
{
  question: "Find dy/dx if y = xsinx.",
  answers: [
      { text: "cosx − xsinx", correct: true },
      { text: "sinx + xcosx", correct: false },
      { text: "xcosx − sinx", correct: false },
      { text: "xcosx + sinx", correct: false }
  ],
  explanation: "Using the product rule, dy/dx = cosx − xsinx."
},
{
  question: "Differentiate y = e^(2x) sin(3x).",
  answers: [
      { text: "2e^(2x) sin(3x) + 3e^(2x) cos(3x)", correct: true },
      { text: "2e^(2x) sin(3x) − 3e^(2x) cos(3x)", correct: false },
      { text: "3e^(2x) sin(2x) − 2e^(3x) cos(3x)", correct: false },
      { text: "2e^(3x) sin(3x) + 2e^(2x) cos(2x)", correct: false }
  ],
  explanation: "Using the product rule, the derivative is 2e^(2x) sin(3x) + 3e^(2x) cos(3x)."
},
{
  question: "Evaluate ∫(x² + x + 1) dx.",
  answers: [
      { text: "(x³)/3 + (x²)/2 + x + c", correct: true },
      { text: "(x³)/3 + (x²)/2 + c", correct: false },
      { text: "x³ + (x²)/2 + x + c", correct: false },
      { text: "(x³)/2 + x + c", correct: false }
  ],
  explanation: "The integral of (x² + x + 1) dx is (x³)/3 + (x²)/2 + x + c."
},
{
  question: "Find the length of the tangent to the circle x² + y² − 4x − 6y = 12 from the point (5, 7).",
  answers: [
      { text: "5", correct: false },
      { text: "7", correct: false },
      { text: "8", correct: true },
      { text: "6", correct: false }
  ],
  explanation: "The length of the tangent from the point (5, 7) is 8."
},
{
  question: "Find dy/dx if y = ln(3x + 1).",
  answers: [
      { text: "3 / (3x + 1)", correct: true },
      { text: "1 / (3x + 1)", correct: false },
      { text: "1 / (3x)", correct: false },
      { text: "3 / (x + 1)", correct: false }
  ],
  explanation: "The derivative of y = ln(3x + 1) is 3 / (3x + 1)."
},
{
  question: "Find the length of the radius of the circle x² + y² − 6x + 4y = 3.",
  answers: [
      { text: "5", correct: false },
      { text: "4", correct: true },
      { text: "6", correct: false },
      { text: "7", correct: false }
  ],
  explanation: "The length of the radius of the circle is 4."
},
{
  question: "Find dy/dx if y = (x² + 1)/(x + 2).",
  answers: [
      { text: "(2x + 4) / (x + 2)²", correct: true },
      { text: "(2x + 1) / (x + 1)", correct: false },
      { text: "(2x − 4) / (x + 2)", correct: false },
      { text: "x / (x + 2)²", correct: false }
  ],
  explanation: "Using the quotient rule, dy/dx = (2x + 4) / (x + 2)²."
},
{
  question: "Evaluate ∫ (2x + 5) dx.",
  answers: [
      { text: "x² + 5x + c", correct: true },
      { text: "x² + 5 + c", correct: false },
      { text: "(2x²) + 5x + c", correct: false },
      { text: "(2x²) + 5 + c", correct: false }
  ],
  explanation: "The integral evaluates to x² + 5x + c."
},
{
  question: "Find the derivative of y = 2x² + 3x + 1.",
  answers: [
      { text: "4x + 3", correct: true },
      { text: "4x + 1", correct: false },
      { text: "3x + 4", correct: false },
      { text: "2x + 3", correct: false }
  ],
  explanation: "The derivative of y = 2x² + 3x + 1 is 4x + 3."
},
{
  question: "Evaluate ∫(2x³ + 4x) dx.",
  answers: [
      { text: "(x⁴)/2 + 2x² + c", correct: true },
      { text: "(x³)/2 + 2x² + c", correct: false },
      { text: "x⁴ + x² + c", correct: false },
      { text: "x³ + 4x + c", correct: false }
  ],
  explanation: "The integral of (2x³ + 4x) dx is (x⁴)/2 + 2x² + c."
},
{
  question: "Find the equation of the tangent to y = 2x³ − 5x² at x = 1.",
  answers: [
      { text: "y = 3x − 2", correct: false },
      { text: "y = 5x − 3", correct: true },
      { text: "y = 2x + 3", correct: false },
      { text: "y = 4x − 5", correct: false }
  ],
  explanation: "The equation of the tangent to the curve at x = 1 is y = 5x − 3."
},
{
  question: "Find the semi-major axis, semi-minor axis, and eccentricity of the ellipse x² + 7y² = 49.",
  answers: [
    { text: "a = 7, b = √7, e = √42", correct: false },
    { text: "a = 3, b = 4, e = √7", correct: true },
    { text: "a = 10, b = 5, e = √6", correct: false },
    { text: "a = 1, b = 2, e = 0", correct: false }
  ],
  explanation: "For the ellipse x²/a² + y²/b² = 1, comparing x² + 7y² = 49 with this form, we get a² = 49 and b² = 7. Thus, a = 7 and b = √7. The eccentricity is e = √(a² - b²)/a."
},
{
  question: "Find the equation of the line AM, where A, B, and C are at (1,-4), (3,1), and (5,3), and M is the midpoint of BC.",
  answers: [
    { text: "y - 2x + 6 = 0", correct: true },
    { text: "x + y - 6 = 0", correct: false },
    { text: "y - x + 3 = 0", correct: false },
    { text: "None of the above", correct: false }
  ],
  explanation: "The midpoint of BC is M = (4, 2). The slope of AM is found using the coordinates of A and M, and the equation of the line is derived using point-slope form."
},
{
  question: "Write down the coordinates of the midpoint M of BC, where B = (3,1) and C = (5,3).",
  answers: [
    { text: "(3, 1)", correct: false },
    { text: "(1, 3)", correct: false },
    { text: "(4, 2)", correct: true },
    { text: "(3, 5)", correct: false }
  ],
  explanation: "The midpoint M of BC is calculated as ((3 + 5)/2, (1 + 3)/2) = (4, 2)."
},
{
  question: "Find the coordinates of the point P on AM such that AP:PM = 2:1.",
  answers: [
    { text: "(1, 2)", correct: false },
    { text: "(3, 0)", correct: true },
    { text: "(4, 2)", correct: false },
    { text: "(7, 5)", correct: false }
  ],
  explanation: "Using the section formula, P divides AM in the ratio 2:1, so its coordinates are found as (x1 + 2x2)/(2+1), (y1 + 2y2)/(2+1)."
},
{
  question: "What is the gradient of the line joining the points (5, -1) and (-3, 7)?",
  answers: [
    { text: "3", correct: false },
    { text: "1/3", correct: false },
    { text: "-3/4", correct: true },
    { text: "1", correct: false }
  ],
  explanation: "The gradient of a line joining two points (x1, y1) and (x2, y2) is given by (y2 - y1)/(x2 - x1)."
},
{
  question: "What is the distance between the points (3, -2) and (8, 10)?",
  answers: [
    { text: "5", correct: false },
    { text: "12", correct: false },
    { text: "13", correct: true },
    { text: "19", correct: false }
  ],
  explanation: "The distance between two points is calculated using the distance formula √((x2 - x1)² + (y2 - y1)²)."
},
{
  question: "What is the value of b if the gradient of the line joining (-1, b) and (b, 4) is 2/3?",
  answers: [
    { text: "b = 1", correct: true },
    { text: "b = 2", correct: false },
    { text: "b = -1", correct: false },
    { text: "b = 0", correct: false }
  ],
  explanation: "Using the formula for the gradient (y2 - y1)/(x2 - x1) = 2/3, solve for b."
},
{
  question: "What is the equation of the straight line with gradient 1/3 that passes through the point (1, 2)?",
  answers: [
    { text: "2x - y - 1 = 0", correct: true },
    { text: "x - 3y + 5 = 0", correct: false },
    { text: "3x - y + 10 = 0", correct: false },
    { text: "x + y - 1 = 0", correct: false }
  ],
  explanation: "Using the point-slope form of a line equation y - y1 = m(x - x1) with gradient 1/3 and point (1, 2), we find the equation."
},
{
  question: "The gradient of the line joining (1, 4) and (1, 2) is 1/2. Find the value of n.",
  answers: [
    { text: "n = 3", correct: false },
    { text: "n = -3", correct: true },
    { text: "n = -5", correct: false },
    { text: "n = 5", correct: false }
  ],
  explanation: "The line is vertical since both points have the same x-coordinate. Thus, the gradient is undefined. The given gradient suggests there's an error, and n must be corrected to fit the slope of 1/2."
},
{
  question: "What is the angle of slope of the line joining points (4, 3) and (6, 8)?",
  answers: [
    { text: "120°", correct: false },
    { text: "110°", correct: false },
    { text: "85°", correct: false },
    { text: "79.7°", correct: true }
  ],
  explanation: "The angle of slope can be found using tan⁻¹(m), where m is the gradient of the line. Here, m = (8 - 3) / (6 - 4), and the angle is approximately 79.7°."
},
{
  question: "The equation of a straight line with gradient 1/3 which passes through the point (1, 2) is:",
  answers: [
    { text: "2x - y - 1 = 0", correct: true },
    { text: "3x + y - 5 = 0", correct: false },
    { text: "x - y + 5 = 0", correct: false },
    { text: "x + y - 10 = 0", correct: false }
  ],
  explanation: "Using the point-slope form with m = 1/3 and passing through (1, 2), we derive the equation 2x - y - 1 = 0."
},
{
  question: "If the lines 3y = 4x + 1 and kx + 3y = 1 are perpendicular to each other, find k.",
  answers: [
    { text: "k = 4/3", correct: false },
    { text: "k = -3/4", correct: true },
    { text: "k = 3/4", correct: false },
    { text: "k = 1/3", correct: false }
  ],
  explanation: "The slopes of two perpendicular lines are negative reciprocals of each other. The slope of the first line is 4/3, so the slope of the second must be -3/4, making k = -3/4."
},
{
  question: "If the points (-3, 4), (k, -1), and (5, -6) are collinear, find the value of k.",
  answers: [
    { text: "k = -7", correct: true },
    { text: "k = -5", correct: false },
    { text: "k = 1", correct: false },
    { text: "k = 9", correct: false }
  ],
  explanation: "For the points to be collinear, the slope between any two pairs of points must be equal. Solving the equation formed by equating the slopes gives k = -7."
},
{
  question: "The midpoint of the line joining the points (4, 2) and (-5, 0) is:",
  answers: [
    { text: "(9, 2)", correct: false },
    { text: "(-1, 2)", correct: true },
    { text: "(1/2, 1)", correct: false },
    { text: "(0, 1)", correct: false }
  ],
  explanation: "The midpoint formula is ((x1 + x2)/2, (y1 + y2)/2). Substituting the values, we get the midpoint as (-1, 2)."
},
{
  question: "What is the equation of the line which makes intercepts of 2 and 3 on the x and y axes respectively?",
  answers: [
    { text: "2x + 3y = 1", correct: true },
    { text: "3x + 2y = 1", correct: false },
    { text: "3x - 2y = 1", correct: false },
    { text: "2x - 3y = 1", correct: false }
  ],
  explanation: "The equation of a line in intercept form is x/a + y/b = 1. With intercepts 2 and 3, the equation becomes 2x + 3y = 1."
},
{
  question: "Which of the following does not represent a circle?",
  answers: [
    { text: "x² + y² = 9", correct: false },
    { text: "x² + y² + 7x + 3y = 0", correct: false },
    { text: "3x² + 4y² - 5x + 6y = 0", correct: true },
    { text: "x² + y² + 2x - 4y = 0", correct: false }
  ],
  explanation: "A circle's equation is of the form x² + y² + Dx + Ey + F = 0. The equation 3x² + 4y² is an ellipse, not a circle."
},
{
  question: "What is the value of k if the midpoint of the line joining (1 - k, 4) and (2k + 1, -1) is (k, k)?",
  answers: [
    { text: "k = -1", correct: false },
    { text: "k = -2", correct: true },
    { text: "k = -3", correct: false },
    { text: "k = 4", correct: false }
  ],
  explanation: "Using the midpoint formula and solving for k, we get k = -2."
},
{
  question: "Find the equation of the asymptotes of the hyperbola 4x² - 9y² = 36.",
  answers: [
    { text: "y = ±x", correct: true },
    { text: "y = ±(2/3)x", correct: false },
    { text: "y = ±(3/4)x", correct: false },
    { text: "y = ±(4/3)x", correct: false }
  ],
  explanation: "For the hyperbola (x²/a²) - (y²/b²) = 1, the asymptotes are given by y = ±(b/a)x. Here, a = 3 and b = 2, so y = ±x."
},
{
  question: "Find the slope of the function y = f(t) = 5t² + 30 at t₁ = 1 and t₂ = 5",
  answers: [
    { text: "10 and 45", correct: true },
    { text: "5 and 40", correct: false },
    { text: "10 and 25", correct: false },
    { text: "10 and 40", correct: false }
  ],
  explanation: "The slope is found by differentiating the function y = 5t² + 30 to get dy/dt = 10t. Substituting t₁ = 1 and t₂ = 5 into the derivative gives 10(1) = 10 and 10(5) = 50."
},
{
  question: "Differentiate y = 3x² - 2 / (x+1)²",
  answers: [
    { text: "x√(x + 1)", correct: false },
    { text: "x√(x² + 1)", correct: false },
    { text: "2x(x + 1) - 2", correct: true },
    { text: "3x² - 2x", correct: false }
  ],
  explanation: "This problem requires using the quotient rule for differentiation. The numerator and denominator are both differentiated and combined according to the quotient rule."
},
{
  question: "If xy = x² + y², find dy/dx",
  answers: [
    { text: "1", correct: false },
    { text: "0", correct: false },
    { text: "-5", correct: false },
    { text: "x/y", correct: true }
  ],
  explanation: "Implicit differentiation is used here. By differentiating both sides of the equation with respect to x and solving for dy/dx, we get x/y."
},
{
  question: "If y = x²cos(2x), find dy/dx when x = 1",
  answers: [
    { text: "-2cos(2) + 2sin(2)", correct: true },
    { text: "cos(2)", correct: false },
    { text: "1", correct: false },
    { text: "-1", correct: false }
  ],
  explanation: "Using the product rule for differentiation, the derivative of x²cos(2x) is 2xcos(2x) - 2x²sin(2x). Substituting x = 1 gives the correct result."
},
{
  question: "If y = tan(2x - 1), find dy/dx",
  answers: [
    { text: "2sec²(2x - 1)", correct: true },
    { text: "2x³ - 4x² + 4", correct: false },
    { text: "2x² - 2x + 1", correct: false },
    { text: "(2x² - 2 + 1)sec²x", correct: false }
  ],
  explanation: "The derivative of tan(2x - 1) is 2sec²(2x - 1) due to the chain rule."
},
{
  question: "Find the average rate of change of s(t) = 2t² - 5t + 30 between t₁ = 3 and t₂ = 5",
  answers: [
    { text: "20", correct: true },
    { text: "17", correct: false },
    { text: "25", correct: false },
    { text: "11", correct: false }
  ],
  explanation: "The average rate of change is given by [s(t₂) - s(t₁)] / (t₂ - t₁). Substituting t₁ = 3 and t₂ = 5 into the equation gives 20."
},
{
  question: "Find the derivative of y = sin(x)cos(x) in terms of sin(x)",
  answers: [
    { text: "sin(x)cos(x)", correct: false },
    { text: "1 - 2sin²(x)", correct: true },
    { text: "sin²(x)", correct: false },
    { text: "cos²(x)", correct: false }
  ],
  explanation: "Using the double angle identity sin(2x) = 2sin(x)cos(x) and differentiating, the derivative is 1 - 2sin²(x)."
},
{
  question: "Given that y = a^(x+1), find dy/dx",
  answers: [
    { text: "a^(x+1) log(a)", correct: true },
    { text: "2a^(x+1) log(a)", correct: false },
    { text: "a^(2x)", correct: false },
    { text: "log(a^(x+1))", correct: false }
  ],
  explanation: "The derivative of a^x with respect to x is a^x ln(a). Here, the chain rule applies since the exponent is x+1, yielding a^(x+1) log(a)."
},
{
  question: "The gradient of the curve y = 3x² + 11x + 7 at point P(x, y) is -1. Find the coordinate of P.",
  answers: [
    { text: "(-2, -3)", correct: true },
    { text: "(-1, -5/2)", correct: false },
    { text: "(-3, -2)", correct: false },
    { text: "(-2, -3)", correct: false }
  ],
  explanation: "Using differentiation, the gradient of the curve is found to be -1 at P(x, y), and solving for x gives the coordinate (-2, -3)."
},
{
  question: "If y = sin(2x), find dy/dx.",
  answers: [
    { text: "2 cos(2x)", correct: true },
    { text: "cos(2x)", correct: false },
    { text: "sin(2x)", correct: false },
    { text: "2 sin(2x)", correct: false }
  ],
  explanation: "Differentiating y = sin(2x) gives dy/dx = 2 cos(2x) by the chain rule."
},
{
  question: "Which of the following is correct about cos(4+5)?",
  answers: [
    { text: "cos + cos", correct: false },
    { text: "sin + sin", correct: false },
    { text: "sin(4+5)", correct: true },
    { text: "cos(4+5)", correct: false }
  ],
  explanation: "The correct trigonometric identity for cos(4+5) is sin(4+5)."
},
{
  question: "The value of 1 + sec²(60) is:",
  answers: [
    { text: "2", correct: true },
    { text: "4", correct: false },
    { text: "5", correct: false },
    { text: "3", correct: false }
  ],
  explanation: "By using the trigonometric identity, sec²(60) = 3, so 1 + sec²(60) = 2."
},
{
  question: "The expression (1 + cosB) / (1 - cosB) can be simplified to:",
  answers: [
    { text: "sin B", correct: false },
    { text: "cos B", correct: false },
    { text: "1 - sin B", correct: true },
    { text: "1 + sin B", correct: false }
  ],
  explanation: "By using trigonometric identities, the expression can be simplified to 1 - sin B."
},




        // Add more questions for Math until you have 30
    ],
    english: [
        { question: "Which word is an antonym of 'happy'?", answers: [{ text: "Sad", correct: true }, { text: "Joyful", correct: false }, { text: "Excited", correct: false }, { text: "Ecstatic", correct: false }], explanation: "Sad is an antonym of happy." },
        { question: "What is the past tense of 'run'?", answers: [{ text: "Ran", correct: true }, { text: "Running", correct: false }, { text: "Runs", correct: false }, { text: "Run", correct: false }], explanation: "The past tense of 'run' is 'ran'." },

        {
    question: "When the people aren't coming together, they're ruled by empire and ____________",
    answers: [
      { text: "Kingdom", correct: true },
      { text: "Ruler", correct: false },
      { text: "Leader", correct: false },
      { text: "State", correct: false }
    ],
    explanation: "Historically, when people aren't unified, they are ruled by an empire or a kingdom."
  },
  {
    question: "A nation state has a permanent ______________",
    answers: [
      { text: "Territory", correct: false },
      { text: "Population", correct: true },
      { text: "Government", correct: false },
      { text: "None", correct: false }
    ],
    explanation: "A nation-state is characterized by a permanent population."
  },
  {
    question: "When did Nigeria become democratic?",
    answers: [
      { text: "1999", correct: true },
      { text: "1989", correct: false },
      { text: "2009", correct: false },
      { text: "2019", correct: false }
    ],
    explanation: "Nigeria transitioned to democracy in 1999."
  },
  {
    question: "Political and socio-economic disparities affect nation-building. True/False",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false }
    ],
    explanation: "Disparities in society can hinder the process of nation-building."
  },
  {
    question: "Youth unemployment leads to ____________",
    answers: [
      { text: "Chronic poverty", correct: true },
      { text: "Education", correct: false },
      { text: "None of the above", correct: false },
      { text: "All of the above", correct: false }
    ],
    explanation: "High youth unemployment rates are often linked to chronic poverty."
  },
  {
    question: "__________ accountability is a process whereby leaders render account of their stewardship.",
    answers: [
      { text: "Leadership", correct: false },
      { text: "Governance", correct: true },
      { text: "None", correct: false },
      { text: "All", correct: false }
    ],
    explanation: "Governance accountability refers to leaders being held accountable for their actions."
  },
  {
    question: "__________ has been ravaging communities.",
    answers: [
      { text: "Erosion", correct: false },
      { text: "Conflicts", correct: false },
      { text: "Storm", correct: false },
      { text: "None", correct: true }
    ],
    explanation: "None of the provided options directly apply, but environmental and social issues affect communities."
  },
  {
    question: "Which of the following is not used in nation-building?",
    answers: [
      { text: "Dialogue", correct: false },
      { text: "Reconciliation", correct: false },
      { text: "Conflict", correct: true },
      { text: "None of the above", correct: false }
    ],
    explanation: "Conflict is not a method for nation-building; dialogue and reconciliation are."
  },
  {
    question: "Which one is a sub-group of Niger-Congo?",
    answers: [
      { text: "West Branch", correct: true },
      { text: "Berber branch", correct: false },
      { text: "Handza branch", correct: false },
      { text: "Nilotic branch", correct: false }
    ],
    explanation: "The West Branch is a sub-group of the Niger-Congo language family."
  },
  {
    question: "According to Greenberg, Nigeria's languages have been categorized into ____________.",
    answers: [
      { text: "4", correct: true },
      { text: "3", correct: false },
      { text: "5", correct: false },
      { text: "6", correct: false }
    ],
    explanation: "Greenberg categorized Nigeria's languages into 4 major groups."
  },
  {
    question: "A person who belongs to a country is a/an ____________.",
    answers: [
      { text: "Indigene", correct: false },
      { text: "Aborigene", correct: false },
      { text: "Native", correct: false },
      { text: "Citizen", correct: true }
    ],
    explanation: "A citizen is someone who legally belongs to a country."
  },
  {
    question: "There have been several kinds of state apart from ____________.",
    answers: [
      { text: "Boundaries", correct: false },
      { text: "Nation-state", correct: false },
      { text: "Rivers", correct: true },
      { text: "Political unit", correct: false }
    ],
    explanation: "States are often defined by political units and boundaries, not rivers."
  },
  {
    question: "The shared belief about government and civil responsibility is ____________.",
    answers: [
      { text: "Religious ideal", correct: false },
      { text: "Political ideal", correct: false },
      { text: "Cultural ideal", correct: false },
      { text: "Social ideal", correct: true }
    ],
    explanation: "A shared belief about government and civil responsibility is a social ideal."
  },
  {
    question: "Ethnicity is a social ideal associated with ____________.",
    answers: [
      { text: "Voters Registration", correct: false },
      { text: "National identity Number", correct: false },
      { text: "Citizenship", correct: false },
      { text: "Identity of members", correct: true }
    ],
    explanation: "Ethnicity is linked to the identity of a group or community."
  },
  {
    question: "Political and socio-economic disparity is not a problem in the Nigerian state. True/False?",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ],
    explanation: "Socio-economic disparity is a well-documented issue in Nigeria."
  },
  {
    question: "Communal conflict can be ____________ or ____________.",
    answers: [
      { text: "bi or tri", correct: false },
      { text: "inter or intra", correct: true },
      { text: "inter or contra", correct: false },
      { text: "None", correct: false }
    ],
    explanation: "Communal conflict can be either inter-communal or intra-communal."
  },
  {
    question: "Which of these is associated with the Sudanic family?",
    answers: [
      { text: "Kwa", correct: false },
      { text: "Handza", correct: true },
      { text: "Berber", correct: false },
      { text: "Nilotic", correct: false }
    ],
    explanation: "Handza is associated with the Sudanic language family."
  },
  {
    question: "A nation state is characterized by ____________.",
    answers: [
      { text: "Political and religious entity", correct: false },
      { text: "Geographical location", correct: false },
      { text: "A political and cultural boundaries", correct: true },
      { text: "Territorial boundaries", correct: false }
    ],
    explanation: "A nation-state is characterized by political and cultural boundaries."
  },
  {
    question: "__________ is not a cultural attribute of a nation.",
    answers: [
      { text: "Religion", correct: false },
      { text: "Custom", correct: false },
      { text: "Language", correct: false },
      { text: "Age", correct: true }
    ],
    explanation: "Age is not typically considered a cultural attribute of a nation."
  },
  {
    question: "___________ Disparities exist among members of various geo-political zones.",
    answers: [
      { text: "Houses", correct: false },
      { text: "Gross", correct: false },
      { text: "Sky", correct: false },
      { text: "Water", correct: true }
    ],
    explanation: "There are various disparities among geopolitical zones, and water-related issues often come up."
  },
  {
    question: "Full meaning of IPOB.",
    answers: [
      { text: "Independent people of Biafra", correct: false },
      { text: "International people of Biafra", correct: false },
      { text: "Indigenous People of Biafra", correct: true },
      { text: "Indigenous person of Biafra", correct: false }
    ],
    explanation: "IPOB stands for Indigenous People of Biafra."
  },
  {
    question: "Nation-state is characterized by?",
    answers: [
      { text: "Political and cultural", correct: true },
      { text: "Social", correct: false },
      { text: "Political", correct: false },
      { text: "Cultural", correct: false }
    ],
    explanation: "A nation-state is defined by both political and cultural boundaries."
  },
  {
    question: "Major ethnic groups and major linguistic groups are not the same. True/False",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false }
    ],
    explanation: "While major ethnic groups and linguistic groups are related, they are distinct."
  },
  {
    question: "Governance and Civil responsibility are under ____________.",
    answers: [
      { text: "Political", correct: true },
      { text: "Cultural", correct: false },
      { text: "Social", correct: false },
      { text: "Economic", correct: false }
    ],
    explanation: "Governance and civil responsibility fall under political ideals."
  },
  {
    question: "Which of the following is involved in conducting free and fair elections?",
    answers: [
      { text: "The society", correct: false },
      { text: "The tribunal", correct: false },
      { text: "INEC", correct: true },
      { text: "The judiciary", correct: false }
    ],
    explanation: "INEC (Independent National Electoral Commission) is responsible for conducting free and fair elections in Nigeria."
  },
  {
    question: "In 1900, Nigeria was divided into southern protectorate, northern protectorate, and ____________.",
    answers: [
      { text: "Western", correct: false },
      { text: "Eastern", correct: false },
      { text: "Midwestern", correct: false },
      { text: "Colony", correct: true }
    ],
    explanation: "In 1900, Nigeria was divided into northern protectorate, southern protectorate, and the Colony of Lagos."
  },
  {
    question: "Kano has ____________ local government areas.",
    answers: [
      { text: "23", correct: false },
      { text: "44", correct: true },
      { text: "5", correct: false },
      { text: "34", correct: false }
    ],
    explanation: "Kano has 44 local government areas."
  },
  {
    question: "Kwa is under which group?",
    answers: [
      { text: "Afro-Asiatic", correct: false },
      { text: "Niger-Congo", correct: true },
      { text: "Nilo-Sahara", correct: false },
      { text: "Yoruba", correct: false }
    ],
    explanation: "Kwa is a subgroup of the Niger-Congo family."
  },
  {
    question: "Another name for Nilo-Saharan is ____________.",
    answers: [
      { text: "Saharan", correct: false },
      { text: "Semitic", correct: false },
      { text: "Sudanic", correct: true },
      { text: "Khoisan", correct: false }
    ],
    explanation: "Nilo-Saharan is also known as the Sudanic family."
  },
  {
    question: "A nation state has ____________ meaning ultimate authority within its borders and it's not subjected to any external power.",
    answers: [
      { text: "Sovereignty", correct: true },
      { text: "Territory", correct: false },
      { text: "Government", correct: false },
      { text: "National identity", correct: false }
    ],
    explanation: "Sovereignty means that a nation-state has ultimate authority within its borders."
  },
  {
    question: "Jus soli is the right of citizenship by ____________.",
    answers: [
      { text: "Blood", correct: false },
      { text: "Birth", correct: true },
      { text: "Family", correct: false },
      { text: "None", correct: false }
    ],
    explanation: "Jus soli refers to citizenship by birth within a country's territory."
  },
  {
    question: "Rearing of cattle is common among which tribe?",
    answers: [
      { text: "Igbos", correct: false },
      { text: "Yorubas", correct: false },
      { text: "Hausa", correct: true },
      { text: "Efik", correct: false }
    ],
    explanation: "Cattle rearing is a common practice among the Hausa people."
  },
  {
    question: "Goodluck Jonathan is a ____________ of Nigeria.",
    answers: [
      { text: "President", correct: true },
      { text: "Governor", correct: false },
      { text: "Senator", correct: false },
      { text: "Minister", correct: false }
    ],
    explanation: "Goodluck Jonathan served as the President of Nigeria."
  },
  {
    question: "Amalgamation of southern and northern ____________.",
    answers: [
      { text: "Protectorates", correct: true },
      { text: "Regions", correct: false },
      { text: "Districts", correct: false },
      { text: "Territories", correct: false }
    ],
    explanation: "The southern and northern protectorates of Nigeria were amalgamated in 1914."
  },
  {
    question: "Nilo-Saharan is otherwise known as ____________.",
    answers: [
      { text: "Sudanic group", correct: true },
      { text: "Berber group", correct: false },
      { text: "Kwa family", correct: false },
      { text: "Afro-Asiatic family", correct: false }
    ],
    explanation: "Nilo-Saharan is also known as the Sudanic group."
  },
  {
    question: "Underemployment leads to ____________.",
    answers: [
      { text: "Food", correct: false },
      { text: "Progress", correct: false },
      { text: "Degenerate", correct: true },
      { text: "Wealth", correct: false }
    ],
    explanation: "Underemployment often leads to social and economic decline (degeneration)."
  },
  {
    question: "How many local governments are there in Kano?",
    answers: [
      { text: "44", correct: true },
      { text: "23", correct: false },
      { text: "34", correct: false },
      { text: "50", correct: false }
    ],
    explanation: "Kano state has 44 local governments."
  },
  {
    question: "A nation state has clearly defined borders called ____________.",
    answers: [
      { text: "Sovereignty", correct: false },
      { text: "Territory", correct: true },
      { text: "Government", correct: false },
      { text: "Population", correct: false }
    ],
    explanation: "The borders of a nation-state are referred to as its territory."
  },
  {
    question: "Citizenship can be acquired by all of the following except ____________.",
    answers: [
      { text: "Naturalization", correct: false },
      { text: "Birth", correct: false },
      { text: "Descent", correct: false },
      { text: "Death", correct: true }
    ],
    explanation: "Citizenship cannot be acquired through death."
  },
  {
    question: "The Hausa tribe speaks ____________ language.",
    answers: [
      { text: "Hausa", correct: true },
      { text: "Yoruba", correct: false },
      { text: "Igbo", correct: false },
      { text: "Efik", correct: false }
    ],
    explanation: "The Hausa people speak the Hausa language."
  },
  {
    question: "Political independence is the ability of a nation to make decisions free from ____________ influence.",
    answers: [
      { text: "Internal", correct: false },
      { text: "External", correct: true },
      { text: "Cultural", correct: false },
      { text: "Ethnic", correct: false }
    ],
    explanation: "Political independence refers to the freedom of a nation to make decisions without external influence."
  },
  {
    question: "Who is responsible for conducting elections in Nigeria?",
    answers: [
      { text: "The Senate", correct: false },
      { text: "The Judiciary", correct: false },
      { text: "INEC", correct: true },
      { text: "The Police", correct: false }
    ],
    explanation: "The Independent National Electoral Commission (INEC) is responsible for conducting elections in Nigeria."
  },
  {
    question: "Which of these is NOT a major political party in Nigeria?",
    answers: [
      { text: "PDP", correct: false },
      { text: "APC", correct: false },
      { text: "ANPP", correct: false },
      { text: "NPP", correct: true }
    ],
    explanation: "NPP is not a major political party in Nigeria."
  },
  {
    question: "Nigeria's democracy is characterized by all the following except ____________.",
    answers: [
      { text: "Free elections", correct: false },
      { text: "Government accountability", correct: false },
      { text: "Single-party system", correct: true },
      { text: "Protection of rights", correct: false }
    ],
    explanation: "Nigeria's democracy is based on a multi-party system, not a single-party system."
  },
  {
    question: "The first civilian President of Nigeria was ____________.",
    answers: [
      { text: "Nnamdi Azikiwe", correct: true },
      { text: "Olusegun Obasanjo", correct: false },
      { text: "Goodluck Jonathan", correct: false },
      { text: "Muhammadu Buhari", correct: false }
    ],
    explanation: "Nnamdi Azikiwe was the first civilian President of Nigeria."
  },
  {
    question: "The Nigerian government is divided into how many branches?",
    answers: [
      { text: "Two", correct: false },
      { text: "Four", correct: false },
      { text: "Three", correct: true },
      { text: "Five", correct: false }
    ],
    explanation: "The Nigerian government is divided into three branches: the executive, legislative, and judiciary."
  },
  {
    question: "The Nigerian national flag has how many colors?",
    answers: [
      { text: "Three", correct: false },
      { text: "Two", correct: true },
      { text: "Four", correct: false },
      { text: "One", correct: false }
    ],
    explanation: "The Nigerian flag consists of two colors: green and white."
  },
  {
    question: "Nigeria gained independence in the year ____________.",
    answers: [
      { text: "1957", correct: false },
      { text: "1960", correct: true },
      { text: "1963", correct: false },
      { text: "1979", correct: false }
    ],
    explanation: "Nigeria gained its independence from Britain in 1960."
  },
  {
    question: "The Nigerian currency is called ____________.",
    answers: [
      { text: "Dollar", correct: false },
      { text: "Pound", correct: false },
      { text: "Euro", correct: false },
      { text: "Naira", correct: true }
    ],
    explanation: "The official currency of Nigeria is the Naira."
  },
  {
    question: "The capital of Nigeria is ____________.",
    answers: [
      { text: "Lagos", correct: false },
      { text: "Abuja", correct: true },
      { text: "Kano", correct: false },
      { text: "Port Harcourt", correct: false }
    ],
    explanation: "Abuja is the capital city of Nigeria."
  },
  {
    question: "Democracy in Nigeria is associated with all of the following except ____________.",
    answers: [
      { text: "Military rule", correct: true },
      { text: "Rule of law", correct: false },
      { text: "Popular participation", correct: false },
      { text: "Elected representatives", correct: false }
    ],
    explanation: "Democracy is characterized by rule of law and elected representatives, not military rule."
  },
  {
    question: "The Nigerian government practices a ____________ system.",
    answers: [
      { text: "Federal", correct: true },
      { text: "Unitary", correct: false },
      { text: "Confederate", correct: false },
      { text: "Monarchical", correct: false }
    ],
    explanation: "Nigeria practices a federal system of government, dividing power between the central government and states."
  },
  {
    question: "Which of these is a major religion in Nigeria?",
    answers: [
      { text: "Hinduism", correct: false },
      { text: "Islam", correct: true },
      { text: "Buddhism", correct: false },
      { text: "Shinto", correct: false }
    ],
    explanation: "Islam is one of the major religions in Nigeria, alongside Christianity."
  },
  {
    question: "The executive branch of the Nigerian government is headed by the ____________.",
    answers: [
      { text: "Chief Justice", correct: false },
      { text: "President", correct: true },
      { text: "Governor", correct: false },
      { text: "Minister of State", correct: false }
    ],
    explanation: "The President is the head of the executive branch in Nigeria."
  },
  {
    question: "The Nigerian civil war lasted from ____________.",
    answers: [
      { text: "1967-1970", correct: true },
      { text: "1965-1967", correct: false },
      { text: "1970-1975", correct: false },
      { text: "1980-1985", correct: false }
    ],
    explanation: "The Nigerian Civil War, also known as the Biafran War, lasted from 1967 to 1970."
  },
  {
    question: "The Nigerian Senate is part of the ____________ branch of government.",
    answers: [
      { text: "Executive", correct: false },
      { text: "Legislative", correct: true },
      { text: "Judicial", correct: false },
      { text: "Military", correct: false }
    ],
    explanation: "The Nigerian Senate is part of the legislative branch."
  },
  {
    question: "The three arms of government in Nigeria are the executive, legislative, and ____________ branches.",
    answers: [
      { text: "Judiciary", correct: true },
      { text: "Military", correct: false },
      { text: "Monarchy", correct: false },
      { text: "Federal", correct: false }
    ],
    explanation: "The three arms of government are the executive, legislative, and judiciary branches."
  },
  {
    question: "The 1999 Nigerian Constitution is based on a ____________ system of government.",
    answers: [
      { text: "Confederal", correct: false },
      { text: "Unitary", correct: false },
      { text: "Federal", correct: true },
      { text: "Dictatorship", correct: false }
    ],
    explanation: "The 1999 Nigerian Constitution established a federal system of government."
  },
  {
    question: "The Nigerian National Assembly consists of the Senate and ____________.",
    answers: [
      { text: "House of Representatives", correct: true },
      { text: "House of Lords", correct: false },
      { text: "Federal Executive Council", correct: false },
      { text: "Judiciary", correct: false }
    ],
    explanation: "The Nigerian National Assembly consists of two chambers: the Senate and the House of Representatives."
  },
  {
    question: "Who appoints the Nigerian ministers?",
    answers: [
      { text: "The Senate", correct: false },
      { text: "The President", correct: true },
      { text: "The Judiciary", correct: false },
      { text: "State Governors", correct: false }
    ],
    explanation: "The President of Nigeria appoints ministers, subject to approval by the Senate."
  },
  {
    question: "Nigeria is located on which continent?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Europe", correct: false },
      { text: "Africa", correct: true },
      { text: "South America", correct: false }
    ],
    explanation: "Nigeria is located in West Africa, a region on the African continent."
  },
  {
    question: "The supreme law of the land in Nigeria is the ____________.",
    answers: [
      { text: "President's decrees", correct: false },
      { text: "National Assembly", correct: false },
      { text: "Constitution", correct: true },
      { text: "Judiciary", correct: false }
    ],
    explanation: "The Constitution is the supreme law of Nigeria, and all other laws derive their authority from it."
  },
  {
    question: "The highest court in Nigeria is the ____________.",
    answers: [
      { text: "High Court", correct: false },
      { text: "Court of Appeal", correct: false },
      { text: "Supreme Court", correct: true },
      { text: "Magistrate Court", correct: false }
    ],
    explanation: "The Supreme Court is the highest court in Nigeria."
  },
  {
    question: "Nigeria is divided into how many states?",
    answers: [
      { text: "30", correct: false },
      { text: "32", correct: false },
      { text: "36", correct: true },
      { text: "40", correct: false }
    ],
    explanation: "Nigeria is divided into 36 states and a Federal Capital Territory."
  },
  {
    question: "The head of the judiciary in Nigeria is the ____________.",
    answers: [
      { text: "Chief Justice", correct: true },
      { text: "President", correct: false },
      { text: "Attorney General", correct: false },
      { text: "Senate President", correct: false }
    ],
    explanation: "The Chief Justice of Nigeria is the head of the judiciary."
  },
  {
    question: "The Nigerian economy is primarily based on ____________.",
    answers: [
      { text: "Manufacturing", correct: false },
      { text: "Agriculture", correct: false },
      { text: "Oil and gas", correct: true },
      { text: "Technology", correct: false }
    ],
    explanation: "Nigeria's economy is heavily dependent on its oil and gas sector, which generates the majority of its revenue."
  },
  {
    question: "The longest river in Nigeria is the ____________.",
    answers: [
      { text: "River Benue", correct: false },
      { text: "River Niger", correct: true },
      { text: "River Kaduna", correct: false },
      { text: "River Osun", correct: false }
    ],
    explanation: "The River Niger is the longest river in Nigeria, stretching through the country and beyond."
  },
  {
    question: "The national symbol of Nigeria includes all except ____________.",
    answers: [
      { text: "The Eagle", correct: false },
      { text: "The Coat of Arms", correct: false },
      { text: "The Pyramid", correct: true },
      { text: "The Green and White Flag", correct: false }
    ],
    explanation: "Nigeria's national symbols include the Eagle, the Coat of Arms, and the national flag, but not the Pyramid."
  },
  {
    question: "Nigeria is a member of which international organization?",
    answers: [
      { text: "NATO", correct: false },
      { text: "EU", correct: false },
      { text: "ECOWAS", correct: true },
      { text: "ASEAN", correct: false }
    ],
    explanation: "Nigeria is a member of the Economic Community of West African States (ECOWAS)."
  },
  {
    question: "The official language of Nigeria is ____________.",
    answers: [
      { text: "Hausa", correct: false },
      { text: "Yoruba", correct: false },
      { text: "Igbo", correct: false },
      { text: "English", correct: true }
    ],
    explanation: "English is the official language of Nigeria, used in government and business."
  },
  {
    question: "Nigeria's current constitution was adopted in ____________.",
    answers: [
      { text: "1979", correct: false },
      { text: "1989", correct: false },
      { text: "1999", correct: true },
      { text: "2010", correct: false }
    ],
    explanation: "Nigeria adopted its current constitution in 1999, which marked the return to civilian rule."
  },
  {
    question: "Which Nigerian leader was overthrown in the first military coup of 1966?",
    answers: [
      { text: "Nnamdi Azikiwe", correct: false },
      { text: "Tafawa Balewa", correct: true },
      { text: "Yakubu Gowon", correct: false },
      { text: "Olusegun Obasanjo", correct: false }
    ],
    explanation: "Tafawa Balewa, the Prime Minister of Nigeria, was overthrown and killed in the 1966 military coup."
  },
  {
    question: "The first Nigerian Republic was established in ____________.",
    answers: [
      { text: "1960", correct: false },
      { text: "1963", correct: true },
      { text: "1979", correct: false },
      { text: "1999", correct: false }
    ],
    explanation: "The First Nigerian Republic was established in 1963 after Nigeria became a republic."
  },
  {
    question: "Nigeria's traditional rulers are mainly involved in ____________.",
    answers: [
      { text: "Executive decision making", correct: false },
      { text: "Judicial matters", correct: true },
      { text: "Legislative functions", correct: false },
      { text: "Foreign policy", correct: false }
    ],
    explanation: "Traditional rulers in Nigeria mainly play a role in judicial matters and conflict resolution within their communities."
  },
  {
    question: "The Governor-General of Nigeria during independence was ____________.",
    answers: [
      { text: "Nnamdi Azikiwe", correct: true },
      { text: "Obafemi Awolowo", correct: false },
      { text: "Ahmadu Bello", correct: false },
      { text: "Yakubu Gowon", correct: false }
    ],
    explanation: "Nnamdi Azikiwe was Nigeria's first Governor-General and later became its first President."
  },
  {
    question: "Which Nigerian tribe is known for its bronze artwork?",
    answers: [
      { text: "Igbo", correct: false },
      { text: "Yoruba", correct: true },
      { text: "Hausa", correct: false },
      { text: "Ijaw", correct: false }
    ],
    explanation: "The Yoruba people, particularly from Ife, are known for their exquisite bronze artwork."
  },
  {
    question: "The role of citizens include the following except?",
    answers: [
      { text: "Patriotism", correct: false },
      { text: "Paying taxes", correct: false },
      { text: "Obey laws", correct: false },
      { text: "Disloyalty", correct: true }
    ],
    explanation: "Disloyalty is not a role of citizens."
  },
  {
    question: "Greenberg in his 1963 work classifies African language into ____________ main family.",
    answers: [
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false }
    ],
    explanation: "Greenberg classified African languages into 4 main families."
  },
  {
    question: "At one time, people who didn’t see themselves as united or sharing any sort of identity were ruled by empires and ____________.",
    answers: [
      { text: "Kingdoms", correct: true },
      { text: "Rulers", correct: false },
      { text: "Leaders", correct: false },
      { text: "State", correct: false }
    ],
    explanation: "Empires and kingdoms ruled over people who didn’t identify as united."
  },
  {
    question: "Nigeria was divided into three protectorates: the Niger/Northern protectorates, the southern protectorate and __________.",
    answers: [
      { text: "Eastern protectorate", correct: false },
      { text: "Mid-eastern protectorate", correct: false },
      { text: "Western protectorate", correct: false },
      { text: "Colony", correct: true }
    ],
    explanation: "Nigeria was divided into three protectorates, including the Colony."
  },
  {
    question: "___________ is not a cultural attribute of a nation.",
    answers: [
      { text: "Religion", correct: false },
      { text: "Custom", correct: false },
      { text: "Language", correct: false },
      { text: "Age", correct: true }
    ],
    explanation: "Age is not considered a cultural attribute of a nation."
  },
  {
    question: "___________ disparities exist among members of various geo-political zones.",
    answers: [
      { text: "Houses", correct: false },
      { text: "Gross", correct: true },
      { text: "Sky", correct: false },
      { text: "Water", correct: false }
    ],
    explanation: "Gross disparities exist among geo-political zones."
  },
   {
    question: "South-East has ____________ number of states (highest, least, middle).",
    answers: [
      { text: "Highest", correct: false },
      { text: "Least", correct: true },
      { text: "Middle", correct: false },
      { text: "Equal", correct: false }
    ],
    explanation: "The South-East has the least number of states in Nigeria."
  },
  {
    question: "Original Hausa is also called ____________.",
    answers: [
      { text: "Hausa Fulani", correct: false },
      { text: "Hausa Bakwai", correct: true },
      { text: "Kanuri", correct: false },
      { text: "Hausa Bakare", correct: false }
    ],
    explanation: "Original Hausa is known as Hausa Bakwai."
  },
  {
    question: "Nigeria is a multi-ethnic nation with ___________ ethnic groups.",
    answers: [
      { text: "Over 250", correct: true },
      { text: "Less than 100", correct: false },
      { text: "About 150", correct: false },
      { text: "Over 500", correct: false }
    ],
    explanation: "Nigeria has over 250 ethnic groups."
  },
  {
    question: "Nation state has ____________ population.",
    answers: [
      { text: "Temporary", correct: false },
      { text: "Dynamic", correct: false },
      { text: "Growing", correct: false },
      { text: "Permanent", correct: true }
    ],
    explanation: "A nation state has a permanent population."
  },
  {
    question: "A nation state is a type of political entity characterized by the agreement of ___________ and ___________ boundaries.",
    answers: [
      { text: "Regional and Local", correct: false },
      { text: "Political and Cultural", correct: true },
      { text: "Physical and Natural", correct: false },
      { text: "National and International", correct: false }
    ],
    explanation: "A nation state is characterized by the agreement of political and cultural boundaries."
  },
  {
    question: "Language distribution in Nigeria is in ___________ number.",
    answers: [
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false }
    ],
    explanation: "There are 4 major language groups in Nigeria."
  },
  {
    question: "Mass culture can also be called __________.",
    answers: [
      { text: "Traditional culture", correct: false },
      { text: "Elite culture", correct: false },
      { text: "Media culture", correct: false },
      { text: "Mass media", correct: true }
    ],
    explanation: "Mass culture is closely related to mass media."
  },
  {
    question: "No culture is perfect or complete, this was said by ____________.",
    answers: [
      { text: "Albert Einstein", correct: false },
      { text: "Ernest Hemingway", correct: false },
      { text: "Erstein Albert", correct: true },
      { text: "Isaac Newton", correct: false }
    ],
    explanation: "Erstein Albert said that no culture is perfect or complete."
  },
  {
    question: "According to Greenberg (1963), the classification of African languages is into how many classes?",
    answers: [
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "8", correct: false },
      { text: "6", correct: false }
    ],
    explanation: "Greenberg classified African languages into 4 main classes."
  },
  {
    question: "The Yoruba group is under the ___________ group.",
    answers: [
      { text: "Niger – Congo group", correct: true },
      { text: "Nihlo – Saharan group", correct: false },
      { text: "Afro – Asiatic group", correct: false },
      { text: "Cushitic group", correct: false }
    ],
    explanation: "The Yoruba group belongs to the Niger – Congo language family."
  },
  {
    question: "The following are ways of obtaining citizenship except?",
    answers: [
      { text: "Birth", correct: false },
      { text: "Naturalization", correct: false },
      { text: "Death", correct: true },
      { text: "Marriage", correct: false }
    ],
    explanation: "Citizenship cannot be obtained through death."
  },
  {
    question: "The Kwa group is branched under the ____________ group.",
    answers: [
      { text: "Niger-Congo", correct: true },
      { text: "Nihlo-Saharan", correct: false },
      { text: "Afro-Asiatic", correct: false },
      { text: "Bantu", correct: false }
    ],
    explanation: "The Kwa group is a subgroup of the Niger-Congo language family."
  },
  {
    question: "Political violence affects ___________.",
    answers: [
      { text: "Governance", correct: false },
      { text: "Electoral process", correct: false },
      { text: "Democracy", correct: false },
      { text: "All of the above", correct: true }
    ],
    explanation: "Political violence affects governance, electoral processes, and democracy as a whole."
  },
  {
    question: "What year was the amalgamation of the southern and northern protectorates?",
    answers: [
      { text: "1906", correct: false },
      { text: "1921", correct: false },
      { text: "1914", correct: true },
      { text: "1915", correct: false }
    ],
    explanation: "The amalgamation of the southern and northern protectorates took place in 1914."
  },
  {
    question: "What are the major ethnicities in Nigeria?",
    answers: [
      { text: "Swahili family", correct: false },
      { text: "Niger-Congo", correct: false },
      { text: "Afro-Asiatic family", correct: false },
      { text: "Hausa, Yoruba, Igbo", correct: true }
    ],
    explanation: "The major ethnic groups in Nigeria are Hausa, Yoruba, and Igbo."
  },
  {
    question: "Yoruba originates from ____________.",
    answers: [
      { text: "Niger-Congo", correct: true },
      { text: "Swahili family", correct: false },
      { text: "Afro-Asiatic family", correct: false },
      { text: "None", correct: false }
    ],
    explanation: "The Yoruba language originates from the Niger-Congo language family."
  },
  {
    question: "___________ is clearly defined by geographical borders.",
    answers: [
      { text: "State", correct: false },
      { text: "Territory", correct: true },
      { text: "Kingdom", correct: false },
      { text: "City", correct: false }
    ],
    explanation: "Territory is defined by geographical borders."
  },
  {
    question: "The type of conflict between Aguleri and Umuleri is ____________.",
    answers: [
      { text: "Political", correct: false },
      { text: "Communal", correct: true },
      { text: "Ethnic", correct: false },
      { text: "Religious", correct: false }
    ],
    explanation: "The Aguleri-Umuleri conflict is classified as communal."
  },
  {
    question: "In Joseph Greenberg's (1963) classification, which of the following is under the Afro-Asiatic family?",
    answers: [
      { text: "Kwa", correct: false },
      { text: "Berber branch", correct: true },
      { text: "Hausa", correct: true },
      { text: "Niger-Congo", correct: false }
    ],
    explanation: "The Berber and Hausa languages are part of the Afro-Asiatic language family."
  },
  {
    question: "The Yoruba language falls under which Nigerian language group?",
    answers: [
      { text: "Afro-Asiatic", correct: false },
      { text: "Niger-Congo", correct: true },
      { text: "Khoisan", correct: false },
      { text: "Nilo-Saharan", correct: false }
    ],
    explanation: "Yoruba is part of the Niger-Congo language group."
  },
  {
    question: "One of the following is peculiar to Lagos and Port Harcourt:",
    answers: [
      { text: "Mining", correct: false },
      { text: "Liming", correct: false },
      { text: "Flooding", correct: true },
      { text: "Agriculture", correct: false }
    ],
    explanation: "Flooding is a recurring problem in Lagos and Port Harcourt due to their coastal locations."
  },
  {
    question: "The region with the least number of local governments is ___________.",
    answers: [
      { text: "North-East", correct: false },
      { text: "North-West", correct: false },
      { text: "South-East", correct: true },
      { text: "South-South", correct: false }
    ],
    explanation: "The South-East region of Nigeria has the fewest local government areas."
  },
  {
    question: "The 35% affirmative declaration in favor of women during the Beijing conference was in what year?",
    answers: [
      { text: "1990", correct: false },
      { text: "1995", correct: true },
      { text: "2000", correct: false },
      { text: "2005", correct: false }
    ],
    explanation: "The 1995 Beijing conference set a goal of 35% representation for women in political leadership."
  },
  {
    question: "The following are responsible for ensuring a free and fair election except:",
    answers: [
      { text: "Independent National Electoral Commission (INEC)", correct: false },
      { text: "The Society", correct: true },
      { text: "Security Agency", correct: false },
      { text: "Civil Society Organizations", correct: false }
    ],
    explanation: "While the society plays a role in supporting democracy, it is not a direct institutional actor in ensuring free and fair elections."
  },
  {
    question: "One of the following is considered the main problem of a Nation state:",
    answers: [
      { text: "Competition", correct: false },
      { text: "Insecurity", correct: true },
      { text: "Gender discrimination", correct: false },
      { text: "Resource allocation", correct: false }
    ],
    explanation: "Insecurity is a significant challenge for many nation-states, impacting governance and development."
  },
  {
    question: "Nigeria became a political unit in what year?",
    answers: [
      { text: "1900", correct: false },
      { text: "1913", correct: false },
      { text: "1914", correct: true },
      { text: "1921", correct: false }
    ],
    explanation: "Nigeria was amalgamated into a political unit in 1914, uniting the northern and southern protectorates."
  },
  {
    question: "A nation state is characterized by the agreement of ____________.",
    answers: [
      { text: "Political and cultural boundaries", correct: true },
      { text: "Political and religious boundaries", correct: false },
      { text: "Political and economic boundaries", correct: false },
      { text: "Cultural and religious boundaries", correct: false }
    ],
    explanation: "A nation-state typically coincides with political and cultural boundaries."
  },
  {
    question: "National Identity can foster ___________.",
    answers: [
      { text: "Money and Pride", correct: false },
      { text: "Unity and Peace", correct: true },
      { text: "Unity and Wealth", correct: false },
      { text: "Pride and Power", correct: false }
    ],
    explanation: "National identity promotes unity and peace within a country."
  },
  {
    question: "The number of languages listed for Nigeria is ___________.",
    answers: [
      { text: "502", correct: false },
      { text: "508", correct: false },
      { text: "515", correct: true },
      { text: "520", correct: false }
    ],
    explanation: "Nigeria has 515 officially listed languages."
  },
  {
    question: "English is an indigenous language.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ],
    explanation: "English is not an indigenous language in Nigeria, it is a colonial legacy."
  },
   {
    question: "The role of citizens include the following except:",
    answers: [
      { text: "Patriotism", correct: false },
      { text: "Paying taxes", correct: false },
      { text: "Obeying laws", correct: false },
      { text: "Disloyalty", correct: true }
    ],
    explanation: "Disloyalty is not a role of citizens; instead, they are expected to show loyalty to their country."
  },
  {
    question: "Greenberg in his 1963 work classifies African language into ____________ main family.",
    answers: [
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false }
    ],
    explanation: "Joseph Greenberg classified African languages into four main families."
  },
  {
    question: "At one time, people who didn’t see themselves as united or sharing any sort of identity were ruled by empires and ____________.",
    answers: [
      { text: "Kingdoms", correct: true },
      { text: "Rulers", correct: false },
      { text: "Leaders", correct: false },
      { text: "States", correct: false }
    ],
    explanation: "Kingdoms, along with empires, were forms of rule before the concept of nation-states."
  },
  {
    question: "Nigeria was divided into three protectorates: the Niger/Northern protectorates, the southern protectorate and ___________.",
    answers: [
      { text: "Eastern protectorate", correct: false },
      { text: "Mid-eastern protectorate", correct: false },
      { text: "Western protectorate", correct: false },
      { text: "Colony", correct: true }
    ],
    explanation: "The third division was referred to as the Colony of Lagos."
  },
  {
    question: "___________ is not a cultural attribute of a nation.",
    answers: [
      { text: "Religion", correct: false },
      { text: "Custom", correct: false },
      { text: "Language", correct: false },
      { text: "Age", correct: true }
    ],
    explanation: "Age is not a cultural attribute; customs, religion, and language are key cultural traits."
  },
  {
    question: "___________ Disparities exist among members of various geo-political zones.",
    answers: [
      { text: "Houses", correct: false },
      { text: "Gross", correct: true },
      { text: "Sky", correct: false },
      { text: "Water", correct: false }
    ],
    explanation: "There are gross disparities in income, infrastructure, and opportunities among the geopolitical zones."
  },
  {
    question: "South-East has ____________ number of states (highest, least, middle).",
    answers: [
      { text: "Least", correct: true },
      { text: "Most", correct: false },
     
    ],
    explanation: "The South-East region has the least number of states compared to other regions in Nigeria."
  },
  {
    question: "Original Hausa is also called ____________.",
    answers: [
      { text: "Hausa Bakwai", correct: true }
    ],
    explanation: "The term 'Hausa Bakwai' refers to the original Hausa states."
  },
  {
    question: "Nigeria is a multi-ethnic nation with ___________ ethnic groups.",
    answers: [
      { text: "Over 250", correct: true },
      { text: "Over 255", correct: false },
      { text: "Over 550", correct: false },
      { text: "Over 50", correct: false }
    ],
    explanation: "Nigeria is home to more than 250 ethnic groups."
  },
  {
    question: "A nation state has ____________ population.",
    answers: [
      { text: "Permanent", correct: true },
      { text: "false", correct: false },
      { text: "temporary", correct: false },
      { text: "True", correct: false }
    ],
    explanation: "One of the defining features of a nation-state is its permanent population."
  },
  {
    question: "A nation state is a type of political entity characterized by the agreement of ___________ and ___________ boundaries.",
    answers: [
      { text: "Political and Cultural", correct: true }
    ],
    explanation: "A nation-state is characterized by the agreement of political and cultural boundaries."
  },
  {
    question: "Language distribution in Nigeria is in ___________ number.",
    answers: [
      { text: "4", correct: true },
      { text: "7", correct: false },
      { text: "14", correct: false },
      { text: "250", correct: false },
    ],
    explanation: "Nigeria's languages are classified into four major families."
  },
  {
    question: "Mass culture can also be called __________.",
    answers: [
      { text: "Mass media", correct: true }
    ],
    explanation: "Mass culture is heavily influenced by mass media."
  },
  {
    question: "No culture is perfect or complete, this is said by ____________.",
    answers: [
      { text: "Erstein Albert", correct: true }
    ],
    explanation: "Erstein Albert's statement reflects the idea that all cultures have room for development."
  },
  {
    question: "According to Greenberg (1963), the classification of African language is into how many classes?",
    answers: [
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "10", correct: false },
    ],
    explanation: "Greenberg's classification includes four main language families."
  },
  {
    question: "The following are ways of obtaining citizenship except?",
    answers: [
      { text: "Birth", correct: false },
      { text: "Naturalization", correct: false },
      { text: "Death", correct: true }
    ],
    explanation: "Death is not a means of obtaining citizenship."
  },
  {
    question: "The Kwa group is branched under the ____________ group.",
    answers: [
      { text: "Niger - Congo", correct: true }
    ],
    explanation: "The Kwa languages are a branch of the Niger-Congo family."
  },
  {
    question: "Political violence affects:",
    answers: [
      { text: "Governance", correct: false },
      { text: "Electoral process", correct: false },
      { text: "Democracy", correct: false },
      { text: "All of the above", correct: true }
    ],
    explanation: "Political violence can impact governance, electoral processes, and the stability of democracy."
  },
  {
    question: "What year was the amalgamation of the south and north protectorates?",
    answers: [
      { text: "1906", correct: false },
      { text: "1921", correct: false },
      { text: "1914", correct: true },
      { text: "1915", correct: false }
    ],
    explanation: "The north and south protectorates were amalgamated in 1914."
  },
  {
    question: "What are the major ethnicities in Nigeria?",
    answers: [
      { text: "Swahili family", correct: false },
      { text: "Niger Congo", correct: false },
      { text: "Afro Asiatic family", correct: false },
      { text: "Hausa, Yoruba, Igbo", correct: true }
    ],
    explanation: "The major ethnic groups in Nigeria are Hausa, Yoruba, and Igbo."
  },
  {
    question: "Where does Yoruba originate from?",
    answers: [
      { text: "Niger Congo", correct: true },
      { text: "Niger ", correct: false },
      { text: "Congo ", correct: false }
    ],
    explanation: "The Yoruba language originates from the Niger-Congo family."
  },
  {
    question: "___________ is clearly defined by geographical borders.",
    answers: [
      { text: "Territory", correct: true },
      { text: "land", correct: false },
      { text: "zone", correct: false },
      { text: "area", correct: false },
    ],
    explanation: "A territory is defined by geographical borders."
  },
  {
    question: "The type of conflict between Aguleri and Umulari is ____________.",
    answers: [
      { text: "Communal", correct: true },
      { text: "interCommunal", correct: false },
      { text: "intraCommunal", correct: false }
    ],
    explanation: "The conflict between Aguleri and Umulari is a communal conflict."
  },
  {
    question: "The Kwa subgroup is a branch of:",
    answers: [
        { text: "Nilo-Saharan", correct: false },
        { text: "Afro-Asiatic group", correct: false },
        { text: "Niger-Congo group", correct: true },
        { text: "Handza group", correct: false }
    ],
    explanation: "The Kwa subgroup is a branch of the Niger-Congo group."
},
{
    question: "All of the following are means of identifying a nation except:",
    answers: [
        { text: "Treason", correct: true },
        { text: "National flag", correct: false },
        { text: "National anthem", correct: false },
        { text: "National pledge", correct: false }
    ],
    explanation: "Treason is not a means of identifying a nation."
},
{
    question: "Which of the following is not a national symbol?",
    answers: [
        { text: "National flag", correct: false },
        { text: "Emblem", correct: false },
        { text: "Anthem", correct: false },
        { text: "Treason", correct: true }
    ],
    explanation: "Treason is not considered a national symbol."
},
{
    question: "The year females were given equal rights to participate in politics is:",
    answers: [
        { text: "1995", correct: true },
        { text: "2005", correct: false }
    ],
    explanation: "Females were given equal rights to participate in politics in 1995."
},
{
    question: "Which of the following sees corruption as an abuse of office or trust for private benefits?",
    answers: [
        { text: "African Development", correct: false },
        { text: "Central Bank", correct: false },
        { text: "Corruption", correct: true },
        { text: "Social Development", correct: false }
    ],
    explanation: "Corruption is viewed as an abuse of office or trust for private benefits."
},
{
    question: "A social conflict that relates to a group or groups of society is known as:",
    answers: [
        { text: "Group of society", correct: false },
        { text: "Social", correct: false },
        { text: "Communal", correct: true },
        { text: "Political", correct: false }
    ],
    explanation: "Communal conflict relates to groups within society."
},
{
    question: "Disagreement refers to conflict involving two or more communities engaging themselves in:",
    answers: [
        { text: "Communal conflict", correct: true },
        { text: "Social conflict", correct: false },
        { text: "Political conflict", correct: false }
    ],
    explanation: "Disagreement involving multiple communities is termed communal conflict."
},
{
    question: "Multi-linguistic group and multi-ethnic group are not the same:",
    answers: [
        { text: "True", correct: false },
        { text: "False", correct: true }
    ],
    explanation: "Multi-linguistic and multi-ethnic groups are not the same."
},
{
    question: "The Asiatic group and Afro-Asiatic group are not the same:",
    answers: [
        { text: "True", correct: true },
        { text: "False", correct: false }
    ],
    explanation: "The Asiatic and Afro-Asiatic groups are different."
},
{
    question: "_____ remained a major challenge to the Nigerian state up till the 21st century.",
    answers: [
        { text: "Nation state", correct: false },
        { text: "Nation building", correct: true },
        { text: "Citizen", correct: false },
        { text: "National identity", correct: false }
    ],
    explanation: "Nation building has remained a significant challenge for Nigeria."
},
{
    question: "Regional imbalance is a challenge of nation building:",
    answers: [
        { text: "True", correct: true },
        { text: "False", correct: false }
    ],
    explanation: "Regional imbalance is indeed a challenge in nation building."
},
{
    question: "Regional imbalance is part of the challenges facing Nigeria:",
    answers: [
        { text: "True", correct: true },
        { text: "False", correct: false },
        { text: "Undecided", correct: false },
        { text: "Unknown", correct: false }
    ],
    explanation: "Regional imbalance is a recognized challenge in Nigeria."
},
{
    question: "Regional imbalance are no extinction to language:",
    answers: [
        { text: "True", correct: false },
        { text: "False", correct: true }
    ],
    explanation: "Regional imbalances do not necessarily lead to the extinction of language."
},
{
    question: "English language, like every other language, is a tonal language:",
    answers: [
        { text: "True", correct: true },
        { text: "False", correct: false }
    ],
    explanation: "English is not a tonal language, unlike many other languages."
},
{
    question: "Nigeria was considered a political unit in what year?",
    answers: [
        { text: "1913", correct: false },
        { text: "1908", correct: false },
        { text: "1900", correct: true },
        { text: "1904", correct: false }
    ],
    explanation: "Nigeria was considered a political unit starting in 1900."
},
{
    question: "English language is an indigenous language in Nigeria:",
    answers: [
        { text: "True", correct: false },
        { text: "False", correct: true }
    ],
    explanation: "English is not indigenous to Nigeria; it is a colonial language."
},
{
    question: "The Afro-Asiatic group consists of:",
    answers: [
        { text: "Yoruba", correct: false },
        { text: "Kwa-subgroup", correct: false },
        { text: "Hausa", correct: true },
        { text: "Igbo", correct: false }
    ],
    explanation: "The Afro-Asiatic group includes languages such as Hausa."
},
{
    question: "Linguistics means the study of:",
    answers: [
        { text: "Science languages", correct: false },
        { text: "Science language", correct: false },
        { text: "Many languages", correct: true }
    ],
    explanation: "Linguistics is the study of many languages."
},
{
    question: "Creation of national _____ is to enhance sound nation building:",
    answers: [
        { text: "State", correct: false },
        { text: "Consciousness", correct: true },
        { text: "Map", correct: false },
        { text: "Roads", correct: false }
    ],
    explanation: "Creation of national consciousness is crucial for sound nation building."
},
{
    question: "In history, there have been several kinds of states apart from the:",
    answers: [
        { text: "Rivers", correct: false },
        { text: "Political unit", correct: false },
        { text: "Boundaries", correct: false },
        { text: "Nation-State", correct: true }
    ],
    explanation: "The Nation-State is one of several types of states in history."
},
{
    question: "The original Hausa states are known as:",
    answers: [
        { text: "Bayajidda", correct: false },
        { text: "Daura", correct: false },
        { text: "Banza Bakwai", correct: true },
        { text: "Hausa Bakwai", correct: false }
    ],
    explanation: "The original Hausa states are known as Banza Bakwai."
},
{
    question: "Political violence has constituted a bane in the Nigerian:",
    answers: [
        { text: "Domestic consolidation", correct: false },
        { text: "All of the above", correct: false },
        { text: "Governance", correct: true },
        { text: "Electoral process", correct: false }
    ],
    explanation: "Political violence has been a major issue in Nigerian governance."
},
  

              {
                question: "Which connective is used for transitional function?",
                answers: [
                  { text: "However", correct: true },
                  { text: "Now", correct: false },
                  { text: "Consequently", correct: false }
                ],
                explanation: "The correct answer is 'However'. 'However' is used to introduce a contrast or transition between ideas."
              },




        // Add more questions for English until you have 30
    ],
    physics: [
        { question: "What is the unit of force?", answers: [{ text: "Newton", correct: true }, { text: "Joule", correct: false }, { text: "Watt", correct: false }, { text: "Pascal", correct: false }], explanation: "The unit of force is Newton." },
        { question: "What is the first law of thermodynamics?", answers: [{ text: "Energy cannot be created or destroyed.", correct: true }, { text: "For every action, there is an equal and opposite reaction.", correct: false }, { text: "The entropy of a system never decreases.", correct: false }, { text: "Energy equals mass times the speed of light squared.", correct: false }], explanation: "The first law of thermodynamics states that energy cannot be created or destroyed, only transformed." },
        {
            question: " If the critical angle of a glass-air boundary is C, the refractive index of the glass is ___, which of the following relation is correct",
            answers: [
                { text: "n = sinCsin90°", correct: false },
                { text: "n = sinC90", correct: false },
                { text: "n = 1/sinC", correct: true }
            ],
            explanation: "The refractive index of the glass is given by � = 1/sinC."
        },
        {
            question: " Mirage is an example of _______",
            answers: [
                { text: "Reflection of light", correct: false },
                { text: "Scattering of light", correct: false },
                { text: "Refraction of light", correct: false },
                { text: "Total internal reflection", correct: true }
            ],
            explanation: "Mirage is caused by total internal reflection of light."
        },
        {
            question: " Transverse wave produced on a spring has a frequency of 200Hz and travels along a length of a spring of 80m in 0.5 seconds. The speed of the wave will be",
            answers: [
                { text: "160m/s", correct: true },
                { text: "150m/s", correct: false },
                { text: "122m/s", correct: false },
                { text: "133m/s", correct: false }
            ],
            explanation: "Speed of the wave = Distance / Time = 80m / 0.5s = 160m/s."
        },
        {
            question: " A transverse wave produced on a spring has a frequency of 200Hz and travels along a length of a string 80m in 0.5 seconds. What will be the wavelength of the transverse wave?",
            answers: [
                { text: "0.8m", correct: false },
                { text: "8m", correct: false },
                { text: "160m", correct: false },
                { text: "0.4m", correct: true }
            ],
            explanation: "Wavelength = Speed / Frequency = 160m/s / 200Hz = 0.8m."
        },
        {
            question: " In Simple Harmonic Motion, the equation relating the acceleration (a) and displacement (x) is a = -kx. The equation shows that at that instant",
            answers: [
                { text: "The velocity is involved", correct: false },
                { text: "The sign is just there", correct: false },
                { text: "The displacement is downward, the acceleration directed upward, the equilibrium position", correct: false },
                { text: "The acceleration is partly proportional to displacement", correct: true }
            ],
            explanation: "In SHM, the acceleration is directly proportional and opposite in direction to the displacement."
        },
        {
            question: " A metal wire of mass 1g and length 50cm is under tension of 80N. Calculate the frequency",
            answers: [
                { text: "300Hz", correct: false },
                { text: "500Hz", correct: false },
                { text: "400Hz", correct: false },
                { text: "200Hz", correct: true }
            ],
            explanation: "Frequency = 1 / (2L) * sqrt(T / �) = 1 / (2 * 0.5m) * sqrt(80N / (1g * 10^-3kg/m) = 200Hz."
        },
        {
            question: " A metal wire of mass 1g and length 50cm is under tension of 80N. Calculate the frequency of the first overtone",
            answers: [
                { text: "300Hz", correct: false },
                { text: "500Hz", correct: false },
                { text: "400Hz", correct: true },
                { text: "200Hz", correct: false }
            ],
            explanation: "Frequency of first overtone = 2 * Fundamental frequency = 2 * 200Hz = 400Hz."
        },
        {
            question: " In a pure capacitance A.C circuit of 50Hz. Calculate the capacitive reactance when connected to a 10μF capacitor",
            answers: [
                { text: "318.27Ω", correct: true },
                { text: "162.00Ω", correct: false },
                { text: "104.02Ω", correct: false },
                { text: "219.07Ω", correct: false }
            ],
            explanation: "Capacitive reactance XC = 1 / (2πfC) = 1 / (2π * 50Hz * 10μF) ≈ 318.27Ω."
        },
        {
            question: " In a pure A.C circuit of 50Hz. Calculate the inductive reactance when the inductance is 0.5H",
            answers: [
                { text: "318.27Ω", correct: false },
                { text: "219.07Ω", correct: true },
                { text: "162.00Ω", correct: false },
                { text: "104.02Ω", correct: false }
            ],
            explanation: "Inductive reactance XL = 2πfL = 2π * 50Hz * 0.5H ≈ 157.1Ω."
        },
        {
            question: " Any system which obeys __________ can exhibit Simple Harmonic Motion",
            answers: [
                { text: "superposition theorem", correct: false },
                { text: "Hooke's law", correct: true },
                { text: "Kirchhoff's law", correct: false },
                { text: "Thevenin's theorem", correct: false }
            ],
            explanation: "Simple Harmonic Motion is exhibited by systems that obey Hooke's law."
        },
        {
            question: ". A light spiral spring is loaded with a mass of 150g and extends by 10cm. Calculate the period of small vertical oscillatory (Take g = 10m/s^2)",
            answers: [
                { text: "0.63s", correct: false },
                { text: "0.53s", correct: false },
                { text: "0.33s", correct: false },
                { text: "0.45s", correct: true }
            ],
            explanation: "Period T = 2π * sqrt(m / k) = 2π * sqrt(0.15kg / (10N/m)) ≈ 0.45s."
        },
        {
            question: " A light spiral spring is loaded with a mass of 300g and extends by 15cm. What is the frequency of small vertical oscillatory (Take g = 10m/s^2)",
            answers: [
                { text: "2.20Hz", correct: false },
                { text: "1.30Hz", correct: true },
                { text: "1.59Hz", correct: false },
                { text: "1.63Hz", correct: false }
            ],
            explanation: "Frequency f = 1 / T = 1 / (2π * sqrt(m / k)) = 1 / (2π * sqrt(0.3kg / (10N/m))) ≈ 1.30Hz."
        },
        {
            question: " A light spiral spring is loaded with a mass of 250g and extends by 30cm. What is the frequency of small vertical oscillatory (Take g = 10m/s^2)",
            answers: [
                { text: "0.20Hz", correct: false },
                { text: "1.30Hz", correct: false },
                { text: "0.59Hz", correct: false },
                { text: "0.92Hz", correct: true }
            ],
            explanation: "Frequency f = 1 / T = 1 / (2π * sqrt(m / k)) = 1 / (2π * sqrt(0.25kg / (10N/m))) ≈ 0.92Hz."
        },
        {
            question: " Which of these is not a magnetic material",
            answers: [
                { text: "Copper", correct: true },
                { text: "Iron", correct: false },
                { text: "Cobalt", correct: false },
                { text: "Steel", correct: false }
            ],
            explanation: "Copper is not a magnetic material."
        },
        {
            question: " The high voltage across the spark plug on the ignition system in a motor car is supplied by",
            answers: [
                { text: "Alternator", correct: false },
                { text: "Carburetor", correct: false },
                { text: "Induction coil", correct: true },
                { text: "Capacitor", correct: false }
            ],
            explanation: "High voltage across the spark plug is supplied by the induction coil."
        },
        {
            question: " The unit of electric field intensity is",
            answers: [
                { text: "Newton/F", correct: false },
                { text: "N/C", correct: true },
                { text: "NC", correct: false },
                { text: "μ/k", correct: false }
            ],
            explanation: "The unit of electric field intensity is Newton per Coulomb (N/C)."
        },
        {
            question: " The unit of electric field intensity is",
            answers: [
                { text: "Newton per Farad", correct: false },
                { text: "Newton per meter", correct: false },
                { text: "Newton per Coulomb", correct: true },
                { text: "Newton per kelvin", correct: false }
            ],
            explanation: "The unit of electric field intensity is Newton per Coulomb (N/C)."
        },
        {
            question: " In a pure conductive A.C circuit",
            answers: [
                { text: "Current leads voltage by 45°", correct: false },
                { text: "Current lags voltage by 90°", correct: true },
                { text: "Current lags voltage by 45°", correct: false },
                { text: "Current leads voltage by 90°", correct: false }
            ],
            explanation: "In a purely conductive AC circuit, current lags voltage by 90°."
        },
        {
            question: " Natural damped oscillations are due to ________________ in a spring and fluids exerting a viscous drag",
            answers: [
                { text: "External forces", correct: false },
                { text: "Internal forces", correct: true },
                { text: "Resulting forces", correct: false },
                { text: "Gravitational forces", correct: false }
            ],
            explanation: "Natural damped oscillations are caused by internal forces in a spring and viscous drag from fluids."
        },
        {
            question: " How much current is drawn by a 60Ω resistor when a voltage of 12V is impressed on it",
            answers: [
                { text: "0.2A", correct: true },
                { text: "5.0A", correct: false },
                { text: "2.0A", correct: false },
                { text: "0.5A", correct: false }
            ],
            explanation: "Current (I) = Voltage (V) / Resistance (R) = 12V / 60Ω = 0.2A."
        },
        {
            question: " _______________ is the tendency of an electric current to oppose a change in the electric circuit",
            answers: [
                { text: "Impedance", correct: false },
                { text: "Reactance", correct: false },
                { text: "Circuit", correct: false },
                { text: "Inductance", correct: true }
            ],
            explanation: "Inductance is the tendency of an electric current to oppose a change in the electric circuit."
        },
        {
            question: " The opposition of material medium to current flow is called",
            answers: [
                { text: "current", correct: false },
                { text: "Resistor", correct: false },
                { text: "Conductor", correct: false },
                { text: "Resistance", correct: true }
            ],
            explanation: "Resistance is the opposition of a material medium to current flow."
        },
        {
            question: " Opposition presented to A.C by inductance or capacitance is",
            answers: [
                { text: "Inductance", correct: false },
                { text: "Reactance", correct: true },
                { text: "Impedance", correct: false },
                { text: "Circuit", correct: false }
            ],
            explanation: "Opposition presented to AC by inductance or capacitance is called reactance."
        },
        {
            question: " Opposition to A.C presented by the combine effect of resistance reactance is called",
            answers: [
                { text: "Circuit", correct: false },
                { text: "Reactance", correct: false },
                { text: "Inductance", correct: false },
                { text: "Impedance", correct: true }
            ],
            explanation: "Opposition to AC presented by the combined effect of resistance and reactance is called impedance."
        },
        {
            question: " The following are the uses of concave mirror except",
            answers: [
                { text: "Inside driving mirror", correct: false },
                { text: "Headlamp reflector", correct: false },
                { text: "Reflecting telescope", correct: false },
                { text: "Dental mirror", correct: true }
            ],
            explanation: "A dental mirror is not typically a use of a concave mirror."
        },
        {
            question: " Given that the wavelength is 300m and the velocity of the wave is 3×10^8 m/s. Calculate the frequency",
            answers: [
                { text: "100 mHz", correct: false },
                { text: "900 mHz", correct: false },
                { text: "9 mHz", correct: false },
                { text: "1 mHz", correct: true }
            ],
            explanation: "Frequency (f) = Velocity (v) / Wavelength (λ) = (3×10^8 m/s) / 300 m = 1 × 10^6 Hz = 1 mHz."
        },
        {
            question: "A coil of negligible resistance has 50V across its ends with 10mA. The inductive reactance is",
            answers: [
                { text: "50 ohms", correct: false },
                { text: "5000 ohms", correct: true },
                { text: "1000 ohms", correct: false },
                { text: "500 ohms", correct: false }
            ],
            explanation: "Inductive reactance (X_L) = V / I = 50V / 0.01A = 5000 ohms."
        },
        {
            question: "A disk with radius 0.10m is placed in a uniform electric field of magnitude 2.0×10^3 N/C and is inclined at 30° to the field. Calculate the electric flux through the disk",
            answers: [
                { text: "5400 Nm^2C^-1", correct: false },
                { text: "540 Nm^2C^-1", correct: false },
                { text: "54 Nm^2C^-1", correct: true },
                { text: "0.54 Nm^2C^-1", correct: false }
            ],
            explanation: "Electric flux (Φ) = E * A * cos(θ), where A = πr^2 * cos(30°). Calculate Φ using given values."
        },
        {
            question: "Calculate the electric dipole moment of charges 1.6×10^-19 C of a dipole separated by 0.125 nm",
            answers: [
                { text: "2×10^-19 Cm", correct: false },
                { text: "2.29×10^-19 Cm", correct: false },
                { text: "2.10×10^-29 Cm", correct: false },
                { text: "2×10^-29 Cm", correct: true }
            ],
            explanation: "Electric dipole moment (p) = q * d, where q = 1.6×10^-19 C and d = 0.125 nm converted to meters."
        },
        {
            question: "The capacitance of a parallel plate capacitor is 20μF in air and 60μF in vacuum in the presence of dielectric constant",
            answers: [
                { text: "2.0", correct: false },
                { text: "0.3", correct: false },
                { text: "3.0", correct: true },
                { text: "6.0", correct: false }
            ],
            explanation: "Capacitance (C) = ε₀ * εᵣ * A / d, where εᵣ for vacuum is 1 and for the dielectric constant."
        },
        {
            question: "A hypermetropic person having 'near point' at a distance of 0.75m puts on spectacles of power 2.5D. The nearest point now is at _________",
            answers: [
                { text: "0.83m", correct: false },
                { text: "0.75m", correct: false },
                { text: "26m", correct: true },
                { text: "0.26cm", correct: false }
            ],
            explanation: "Calculate the new near point distance using the lens formula."
        },
        {
            question: "Which of the following is true\ni. A reflected beam always has the same radiance as the incident beam\nii. A reflected beam lies in the same plane as the incident beam\niii. A reflected beam always makes an angle (θ) with the normal to the interface",
            answers: [
                { text: "i and ii are true", correct: false },
                { text: "i and iii are true", correct: false },
                { text: "i, ii and iii are true", correct: true },
                { text: "Only i is true", correct: false }
            ],
            explanation: "All three statements i, ii, and iii are true regarding the reflection of light."
        },
        {
            question: "What is the electric field intensity at 30cm from a charged body q = 4×10^-9 C [E = 8.85×10^-12 F/m]",
            answers: [
                { text: "1.199 N/C", correct: false },
                { text: "11.99 N/C", correct: false },
                { text: "399.6 N/C", correct: true },
                { text: "119.9 N/C", correct: false }
            ],
            explanation: "Electric field intensity (E) = k * q / r^2, where k is Coulomb's constant and r is the distance from the charge."
        },
        {
            question: "Gauss' law states that the total flux through any closed surface is proportional to the",
            answers: [
                { text: "total electric charge inside the surface", correct: true },
                { text: "total electric field in the surface", correct: false },
                { text: "total volume enclosed by the surface", correct: false },
                { text: "total electric force inside the surface", correct: false }
            ],
            explanation: "According to Gauss' law, the total electric flux through any closed surface is proportional to the total electric charge inside the surface."
        },
        {
            question: "Where is the image formed when an object is placed beyond the center of curvature of a concave mirror",
            answers: [
                { text: "beyond the center of curvature", correct: false },
                { text: "between focus and the center of curvature", correct: true },
                { text: "at the center of curvature", correct: false },
                { text: "at infinity", correct: false }
            ],
            explanation: "When an object is placed beyond the center of curvature of a concave mirror, its image is formed between the focus and the center of curvature."
        },
        {
            question: "In a concave mirror, when the object is at the center of curvature C, the size of the image is",
            answers: [
                { text: "would have been the same", correct: true },
                { text: "was too small", correct: false },
                { text: "would have been greatly magnified", correct: false },
                { text: "would have amplified", correct: false }
            ],
            explanation: "When the object is at the center of curvature C in a concave mirror, the size of the image would have been the same as the object."
        },
        {
            question: "A transformer with 800 turns at the primary coil and 100 turns at the secondary coil is connected to a primary voltage V and produces a 40V secondary winding. The voltage V applied to the primary winding is",
            answers: [
                { text: "20V", correct: false },
                { text: "5V", correct: false },
                { text: "2.5V", correct: false },
                { text: "320V", correct: true }
            ],
            explanation: "Use the transformer voltage ratio formula to calculate V."
        },
        {
            question: "A periscope makes use of",
            answers: [
                { text: "Two spherical mirrors", correct: false },
                { text: "Two plane mirrors", correct: true },
                { text: "Three plane mirrors", correct: false },
                { text: "Three spherical mirrors", correct: false }
            ],
            explanation: "A periscope uses two plane mirrors to allow viewing around obstacles."
        },
        {
            question: "Mirage is an example of",
            answers: [
                { text: "Reflection of light", correct: false },
                { text: "Scattering of light", correct: false },
                { text: "Total internal reflection", correct: false },
                { text: "Refraction of light", correct: true }
            ],
            explanation: "Mirage is an example of refraction of light due to temperature gradients in the air."
        },
        {
            question: "A 1000V by 250V transformer has 500 turns on the secondary coil. The number of turns on the primary coil is",
            answers: [
                { text: "1000", correct: false },
                { text: "125", correct: false },
                { text: "2000", correct: true },
                { text: "250", correct: false }
            ],
            explanation: "Use the transformer voltage ratio formula to calculate the number of turns on the primary coil."
        },
        {
            question: "A transverse wave produced on a spring has a frequency of 200Hz and travels along a length of spring 80m in 0.5 seconds. What will be the wavelength",
            answers: [
                { text: "160m", correct: false },
                { text: "0.8m", correct: false },
                { text: "0.122m", correct: false },
                { text: "8m", correct: true }
            ],
            explanation: "Wavelength (λ) = velocity (v) / frequency (f). v = distance/time = 80m/0.5s = 160m/s. λ = 160m/s / 200Hz = 0.8m."
        },
        {
            question: "The unit of luminous flux is",
            answers: [
                { text: "Candela", correct: false },
                { text: "Lumen", correct: true },
                { text: "Lux", correct: false },
                { text: "flux", correct: false }
            ],
            explanation: "The unit of luminous flux is the lumen (lm)."
        },
        {
            question: "The mutual inductance between two coils when a changing current of 20A/s in one coil induces an EMF of 10mV in the other is _________",
            answers: [
                { text: "200mH", correct: false },
                { text: "0.5mH", correct: true },
                { text: "2H", correct: false },
                { text: "0.5H", correct: false }
            ],
            explanation: "Mutual inductance (M) = EMF / (dI/dt) = 10mV / 20A/s = 0.5mH."
        },
        {
            question: "Calculate the final length when 1000cm of steel wire of linear expansivity 1.2×10^-5℃^-1 is heated from 0 to 80℃",
            answers: [
                { text: "1006.0", correct: true },
                { text: "6.0×10^-3", correct: false },
                { text: "1.2×10^-2", correct: false },
                { text: "6×10^-4", correct: false }
            ],
            explanation: "Final length (L) = L₀ + (L₀ * α * ΔT), where L₀ = 1000cm, α = 1.2×10^-5℃^-1, and ΔT = 80℃."
        },
        {
            question: "The resonating air column in a tube closed at one end emits its fundamental frequency when the effective length of the tube is 55.0cm. Calculate the frequency if the speed of sound in air is 330m/s",
            answers: [
                { text: "150Hz", correct: true },
                { text: "300Hz", correct: false },
                { text: "1.5Hz", correct: false },
                { text: "6.00Hz", correct: false }
            ],
            explanation: "Frequency (f) = v / 4L, where v = 330m/s and L = 55.0cm."
        },
        {
            question: "A prism (n = 1.5) has a refracting angle of 30°. The deviation of a monochromatic ray incident normally on its surface will be",
            answers: [
                { text: "18.6°", correct: true },
                { text: "19.5°", correct: false },
                { text: "20.5°", correct: false },
                { text: "18°", correct: false }
            ],
            explanation: "Using the prism formula, deviation δ = (n - 1) * A, where A is the angle of the prism."
        },
        {
            question: "Calculate the electrostatic force between two electrons separated by a distance of 10^-10m [k = 9×10^9Nm²C^-2, Electron charge = 1.6×10^-19C]",
            answers: [
                { text: "2.56×10^-38N", correct: false },
                { text: "2.30×10^-10N", correct: true },
                { text: "2.50×10^20 N", correct: false },
                { text: "2.56×10^-29N", correct: false }
            ],
            explanation: "Electrostatic force (F) = k * q₁ * q₂ / r², where k = 9×10^9Nm²C^-2, q₁ = q₂ = 1.6×10^-19C, and r = 10^-10m."
        },
        {
            question: "A 0.01μF capacitor is charged to a potential of 500V. It is then connected to an instrument with an input capacitance of 1.00μF. The potential difference across the instrument in volts is now",
            answers: [
                { text: "4.95V", correct: false },
                { text: "1.00V", correct: false },
                { text: "5.00V", correct: true },
                { text: "49.5V", correct: false }
            ],
            explanation: "Use the formula for capacitors in parallel: V_total = (C₁ * V₁) / (C₁ + C₂)."
        },
        {
            question: "The following are examples of repetitive to-and-fro motion about a mean position",
            answers: [
                { text: "Mass hanging from a coiled spring", correct: true },
                { text: "The balance wheel of a watch", correct: false },
                { text: "The car going to Kaduna", correct: false },
                { text: "The piston in a gasoline engine", correct: false }
            ],
            explanation: "Mass hanging from a coiled spring exhibits simple harmonic motion."
        },
        {
            question: "A 200-turn coil has an inductance of 12mH. If the number of turns is increased to 400 turns with all other parameters the same, the inductance of the coil is ______",
            answers: [
                { text: "14mH", correct: false },
                { text: "6mH", correct: false },
                { text: "48mH", correct: false },
                { text: "24mH", correct: true }
            ],
            explanation: "Inductance (L) ∝ N². If N is doubled, L becomes four times the original."
        },
        {
            question: "The radius of curvature of a mirror is 20cm. The focal length is",
            answers: [
                { text: "40cm", correct: false },
                { text: "5cm", correct: false },
                { text: "10cm", correct: true },
                { text: "20cm", correct: false }
            ],
            explanation: "Focal length (f) = Radius of curvature (R) / 2."
        },
        {
            question: "A long, straight wire carries a current of 4A. At one instant a proton 5mm from the wire travels at 2×10³ m/s parallel to the same direction as the current. What is the magnetic force acting on the proton because of the magnetic field produced by the wire",
            answers: [
                { text: "5.12×10^-20N", correct: true },
                { text: "1.52×10^-20N", correct: false },
                { text: "1.52×10^-10N", correct: false },
                { text: "2.51×10^-20N", correct: false }
            ],
            explanation: "Magnetic force (F) = q * v * B, where B is the magnetic field due to the wire."
        },
        {
            question: "An object 0.5cm high is placed from a convex lens of 10cm focal length. Find the size of the image",
            answers: [
                { text: "2.5cm", correct: false },
                { text: "-2.5cm", correct: false },
                { text: "5cm", correct: false },
                { text: "3.5cm", correct: false }
            ],
            explanation: "Use the lens formula and magnification formula to find the size of the image."
        },
        {
            question: "What is the velocity of light in steel if the refractive index of steel with respect to vacuum is 2.5",
            answers: [
                { text: "1.2×10¹⁰ m/s", correct: false },
                { text: "2.5×10⁸ m/s", correct: false },
                { text: "1.2×10⁸ m/s", correct: true },
                { text: "5×10⁸ m/s", correct: false }
            ],
            explanation: "Velocity of light (v) = c / n, where c is the speed of light in vacuum and n is the refractive index."
        },
        {
            question: "What is the velocity of light in steel if the refractive index of steel with respect to vacuum is 2.5",
            answers: [
                { text: "1.2×10¹⁰ m/s", correct: false },
                { text: "2.5×10⁸ m/s", correct: false },
                { text: "1.2×10⁸ m/s", correct: true },
                { text: "5×10⁸ m/s", correct: false }
            ],
            explanation: "Velocity of light (v) = c / n, where c is the speed of light in vacuum and n is the refractive index."
        },
        {
            question: "A ladder of 5cm high placed 20cm in front of a concave mirror whose focal length is 15cm. Find the magnification of the image",
            answers: [
                { text: "3", correct: true },
                { text: "2", correct: false },
                { text: "5", correct: false },
                { text: "2.0", correct: false }
            ],
            explanation: "Magnification (m) = -v / u = f / (u - f). Here, u = -20 cm, f = -15 cm, thus m = 3."
        },
        {
            question: "A ladder of 5cm high placed 20cm in front of a concave mirror whose focal length is 15cm. Find the image height",
            answers: [
                { text: "10cm", correct: false },
                { text: "15cm", correct: true },
                { text: "25cm", correct: false },
                { text: "20cm", correct: false }
            ],
            explanation: "Image height = Magnification × Object height. Magnification = 3, Object height = 5cm, thus Image height = 15cm."
        },
        {
            question: "___________ is the science of light measurement",
            answers: [
                { text: "None of the above", correct: false },
                { text: "Photometry", correct: true },
                { text: "Photometer", correct: false },
                { text: "Spectrometer", correct: false }
            ],
            explanation: "Photometry is the science of measurement of light, in terms of its perceived brightness to the human eye."
        },
        {
            question: "An electromotive force of 16v is induced in a coil of inductance 4H. The rate of change of current is",
            answers: [
                { text: "16A/s", correct: false },
                { text: "32A/s", correct: false },
                { text: "4A/s", correct: true },
                { text: "64A/s", correct: false }
            ],
            explanation: "Induced emf (e) = L * (di/dt). Here, e = 16V, L = 4H, thus di/dt = 4A/s."
        },
        {
            question: "A pd of 3.6v is maintained between two parallel plates which are 30cm apart. Calculate the electric field intensity between the plates",
            answers: [
                { text: "40vm⁻¹", correct: false },
                { text: "1.8vm⁻¹", correct: false },
                { text: "12.0vm⁻¹", correct: true },
                { text: "18vm⁻¹", correct: false }
            ],
            explanation: "Electric field (E) = V/d. Here, V = 3.6V, d = 0.3m, thus E = 12V/m."
        },
        {
            question: "A charge of magnitude 2×10⁻⁴ C experiences a force of 100N in an electric field. Find the electric field intensity",
            answers: [
                { text: "4.0×10⁵ N/C", correct: false },
                { text: "3.4×10⁵ N/C", correct: false },
                { text: "5.0×10⁵ N/C", correct: true },
                { text: "2.4×10⁵ N/C", correct: false }
            ],
            explanation: "Electric field intensity (E) = F/q. Here, F = 100N, q = 2×10⁻⁴ C, thus E = 5×10⁵ N/C."
        },
        {
            question: "The conductor of 2m long moves as right angle to a magnetic field of flux density 1T with a velocity of 0.5m/s. The induced EMF in the conductor",
            answers: [
                { text: "1.5v", correct: false },
                { text: "1.0v", correct: true },
                { text: "5.0v", correct: false },
                { text: "2.5v", correct: false }
            ],
            explanation: "Induced emf (e) = B * l * v * sinθ. Here, B = 1T, l = 2m, v = 0.5m/s, θ = 90°, thus e = 1V."
        },
        {
            question: "If an object is placed symmetrically between two plane mirrors inclined at an angle 72° then the total number of the image formed is",
            answers: [
                { text: "4", correct: false },
                { text: "2", correct: false },
                { text: "5", correct: true },
                { text: "10", correct: false }
            ],
            explanation: "Number of images (n) = (360/θ) - 1. Here, θ = 72°, thus n = 5."
        },
        {
            question: "The vibration resulting from the action of an external periodic force on a motion of a body is",
            answers: [
                { text: "Forced vibration", correct: true },
                { text: "All", correct: false },
                { text: "Damped vibration", correct: false },
                { text: "Free vibration", correct: false }
            ],
            explanation: "Forced vibration occurs when a system is subjected to a periodic force from an external source."
        },
        {
            question: "Critical angle of water when refracted angle is 90°, refractive index for water and air is 1.33 and 1.0 is",
            answers: [
                { text: "49.1°", correct: false },
                { text: "48.8°", correct: true },
                { text: "50°", correct: false },
                { text: "51°", correct: false }
            ],
            explanation: "Critical angle (θc) = sin⁻¹(n2/n1). Here, n1 = 1.33, n2 = 1.0, thus θc = 48.8°.",
        },
        {
            question: "The vibration resulting from the action of internal periodic force on the motion of a body is",
            answers: [
                { text: "Forced vibration", correct: false },
                { text: "Natural vibration", correct: true },
                { text: "Damped vibration", correct: false },
                { text: "Free vibration", correct: false }
            ],
            explanation: "Natural vibration occurs due to the internal periodic forces acting within the body itself."
        },
        {
            question: "The tension in a sonometer wire is tripled, the ratio of the new frequency to the initial frequency is",
            answers: [
                { text: "√3:1", correct: true },
                { text: "1:√3", correct: false },
                { text: "1:3", correct: false },
                { text: "3:1", correct: false }
            ],
            explanation: "Frequency is proportional to the square root of the tension. Thus, if the tension is tripled, the frequency increases by a factor of √3."
        },
        {
            question: "A photoemissive surface has a threshold wavelength of 0.45 μm. What is the threshold frequency",
            answers: [
                { text: "4.66×10¹⁴ Hz", correct: false },
                { text: "6.67×10¹⁴ Hz", correct: true }
            ],
            explanation: "Threshold frequency (f) = c / λ, where c is the speed of light and λ is the wavelength. Here, c = 3×10⁸ m/s, λ = 0.45×10⁻⁶ m, thus f ≈ 6.67×10¹⁴ Hz."
        },
        {
            question: "A certain prism is found to produce a minimum deviation of 51° while it produces a deviation of 42.8° for two values of the angles of incidence 40.1° and 82.7° respectively. Determine the refracting angle of the prism",
            answers: [
                { text: "42.6°", correct: false },
                { text: "122.7°", correct: false },
                { text: "91.1°", correct: false },
                { text: "60°", correct: true }
            ],
            explanation: "Using the formula for the minimum deviation of a prism, we find the refracting angle to be 60°."
        },
        {
            question: "The power of lens is -4, the focal length is",
            answers: [
                { text: "0.25m", correct: false },
                { text: "-4m", correct: false },
                { text: "4m", correct: false },
                { text: "-0.25m", correct: true }
            ],
            explanation: "Focal length (f) = 1 / Power. Here, Power = -4, thus f = -0.25m."
        },
        {
            question: "Opposition in alternating current presented by the combined effect of resistance is called",
            answers: [
                { text: "Impedance", correct: true },
                { text: "Reactance", correct: false },
                { text: "Circuit", correct: false },
                { text: "Inductance", correct: false }
            ],
            explanation: "Impedance is the total opposition to the flow of alternating current, consisting of both resistance and reactance."
        },
        {
            question: "A moving coil galvanometer measures direct current, not alternating current, unless it is used with",
            answers: [
                { text: "Wire", correct: false },
                { text: "Rectifier", correct: true },
                { text: "Hair spring", correct: false },
                { text: "Ammeter", correct: false }
            ],
            explanation: "A rectifier is used to convert alternating current (AC) to direct current (DC), allowing a moving coil galvanometer to measure it."
        },
        {
            question: "The velocity of a transverse wave along a string that is stretched by a tension (T) and linear mass density (K) is",
            answers: [
                { text: "(T/K)⁰.⁵", correct: true },
                { text: "(T/K)²", correct: false },
                { text: "(T/K)", correct: false },
                { text: "(T²/K)", correct: false }
            ],
            explanation: "The velocity of a transverse wave on a string is given by v = √(T/K)."
        },
        {
            question: "A variable capacitor is permanently connected to a 100V battery. If the capacitance is changed from 10μF to 2μF, The energy change is",
            answers: [
                { text: "4×10⁻² J to battery", correct: true },
                { text: "12×10⁻² J from battery", correct: false },
                { text: "8×10⁻² J to battery", correct: false },
                { text: "14×10⁻² J from battery", correct: false }
            ],
            explanation: "The energy stored in a capacitor is E = ½CV². Calculate the change in energy as the capacitance changes from 10μF to 2μF."
        },
        {
            question: "What is the magnitude of the electric field at a field point 2m from a point charge of 4nC",
            answers: [
                { text: "9N/C", correct: true },
                { text: "9NC/C", correct: false },
                { text: "0.9N/F", correct: false },
                { text: "9N/M", correct: false }
            ],
            explanation: "Electric field (E) = k * q / r². Here, q = 4nC, r = 2m, thus E = 9N/C."
        },
        {
            question: "A simple pendulum of length 50.0cm in performing SHM. The corresponding frequency and period of the pendulum is",
            answers: [
                { text: "4.49 and 0.22", correct: false },
                { text: "7.10 and 1.42", correct: false },
                { text: "7.05 and 0.14", correct: false },
                { text: "0.071 and 14.08", correct: true }
            ],
            explanation: "Using the formula for the period T = 2π√(L/g) and frequency f = 1/T for a simple pendulum, we calculate the period and frequency."
        },
        {
            question: "Calculate the increase in length when 10.0cm of steel wire of linear expansivity 1.2×10⁻⁵℃⁻¹ is heated from 0℃ to 50℃",
            answers: [
                { text: "6.0 ×10⁻⁴ cm", correct: false },
                { text: "1.2 ×10⁻² cm", correct: false },
                { text: "6.0 ×10⁻³ cm", correct: true },
                { text: "1006.0cm", correct: false }
            ],
            explanation: "Increase in length ΔL = L₀αΔT. Here, L₀ = 10.0cm, α = 1.2×10⁻⁵℃⁻¹, ΔT = 50℃."
        },
        {
            question: "A 1kg body vibrates in SHM with a period of 0.025s and an amplitude of 2.5cm. Find the maximum speed",
            answers: [
                { text: "4.25m/s", correct: false },
                { text: "0.25m/s", correct: false },
                { text: "25m/s", correct: false },
                { text: "6.28m/s", correct: true }
            ],
            explanation: "Maximum speed (v_max) = Aω. Here, A = 2.5cm, ω = 2π/T, T = 0.025s."
        },
        {
            question: "The critical angle for an air-water interface (the index of refraction of water is n = 1.33) is about",
            answers: [
                { text: "31.6°", correct: false },
                { text: "58.4°", correct: false },
                { text: "48.8°", correct: true },
                { text: "42.2°", correct: false }
            ],
            explanation: "Critical angle (θc) = sin⁻¹(n2/n1). Here, n1 = 1.33, n2 = 1.0, thus θc = 48.8°."
        },
        {
            question: "Static electricity is commonly used in the following except",
            answers: [
                { text: "Coating process used in manufacturing", correct: false },
                { text: "Xerograph", correct: false },
                { text: "Glass cutting", correct: true },
                { text: "Air filter", correct: false }
            ],
            explanation: "Static electricity is not typically used in glass cutting, but is used in processes like xerography and air filtration."
        },
        {
            question: "A positive charge 3μC is surrounded by a sphere with a radius of 0.20m centered on the charge. Find the electric flux through the sphere due to the charge",
            answers: [
                { text: "6.50×10⁵ N/C", correct: false },
                { text: "6.00×10⁵ N/C", correct: false },
                { text: "6.75×10⁵ N/C", correct: true },
                { text: "6.05×10⁵ N/C", correct: false }
            ],
            explanation: "The electric flux (Φ) through a sphere is given by Gauss's Law, Φ = q / ε₀. Here, q = 3μC = 3×10⁻⁶ C, and ε₀ = 8.85×10⁻¹² F/m, thus Φ = 3×10⁻⁶ / 8.85×10⁻¹² ≈ 6.75×10⁵ N·m²/C."
        },
        {
            question: "One of the following is not an effect due to static electricity",
            answers: [
                { text: "A wooden jumper worn over a nylon blouse gives sparks when taken off", correct: false },
                { text: "A plastic comb rubbed with hair attracts pieces of paper", correct: false },
                { text: "A bar of magnet attracts pieces of iron fillings", correct: true },
                { text: "Collection of dust on television screen", correct: false }
            ],
            explanation: "A bar magnet attracting pieces of iron fillings is due to magnetic forces, not static electricity."
        },
        {
            question: "A galvanometer measuring current from 0 to 1mA has a resistance of 40Ω. What value of resistor in parallel will the galvanometer use to measure current from 0 to 1A",
            answers: [
                { text: "0.24Ω", correct: false },
                { text: "0.04Ω", correct: true },
                { text: "1.42Ω", correct: false },
                { text: "2.53Ω", correct: false }
            ],
            explanation: "Using the shunt resistor formula, Rs = (IgRg) / (I - Ig), where Ig is the galvanometer current (1mA), Rg is the galvanometer resistance (40Ω), and I is the desired current (1A). Thus, Rs = (1×10⁻³ × 40) / (1 - 1×10⁻³) ≈ 0.04Ω."
        },
        {
            question: "In a wave the maximum displacement of a particle from their equilibrium positions is called",
            answers: [
                { text: "Amplitude", correct: true },
                { text: "Period", correct: false },
                { text: "Frequency", correct: false },
                { text: "Wavelength", correct: false }
            ],
            explanation: "Amplitude is the maximum displacement of a particle from its equilibrium position in a wave."
        },
        {
            question: "A transformer connected to a 120V A.C power line has 200 turns in its primary winding and 50 turns in its secondary winding. The secondary is connected to a 100Ω light bulb. How much current is drawn from the input side of the power line",
            answers: [
                { text: "0.075A", correct: false },
                { text: "0.300A", correct: false },
                { text: "0.025A", correct: true },
                { text: "0.045A", correct: false }
            ],
            explanation: "Using the transformer equations: Vp/Vs = Np/Ns and P_primary = P_secondary. Vp = 120V, Np = 200, Ns = 50, R_load = 100Ω. Thus, Vs = (Ns/Np) * Vp = (50/200) * 120V = 30V. Current in secondary Is = Vs / R_load = 30V / 100Ω = 0.3A. Power in secondary = 30V * 0.3A = 9W. Power in primary = 9W. Primary current Ip = Power / Vp = 9W / 120V = 0.075A."
        },
        {
            question: "For a mass hanging on a coiled spring, mass (M) was varied and the corresponding period (T) was recorded. On plotting T against M, a straight line graph was seen but it did not pass through the origin. What could have been responsible",
            answers: [
                { text: "There was an error in the first reading", correct: true },
                { text: "The period was not stable", correct: false },
                { text: "The mass of the spring was not taken into consideration", correct: false },
                { text: "It was meant to be curved", correct: false }
            ],
            explanation: "If the graph does not pass through the origin, it suggests that there might have been an error in the initial reading."
        },
        {
            question: "In a waveform, a crest and an adjacent trough are out of phase by",
            answers: [
                { text: "45°", correct: false },
                { text: "270°", correct: false },
                { text: "180°", correct: true },
                { text: "90°", correct: false }
            ],
            explanation: "A crest and the adjacent trough in a waveform are 180° out of phase."
        },
        {
            question: "A wire of length 90.0cm and diameter 0.3mm has a resistivity of 11×10⁻⁶Ωm. Calculate its resistance",
            answers: [
                { text: "14.0Ω", correct: true },
                { text: "12.0Ω", correct: false },
                { text: "16.0Ω", correct: false },
                { text: "13.0Ω", correct: false }
            ],
            explanation: "Resistance (R) = ρL/A, where ρ = 11×10⁻⁶ Ωm, L = 0.9m, A = π(d/2)² = π(0.00015)². Thus, R ≈ 14Ω."
        },
        {
            question: "The following are examples of repetitive to-and-fro motion of an object about a mean position",
            answers: [
                { text: "The piston in a gasoline engine", correct: false },
                { text: "A car going to Kaduna", correct: false },
                { text: "Mass hanging from a coiled spring", correct: true },
                { text: "The balance wheel of a watch", correct: false }
            ],
            explanation: "A mass hanging from a coiled spring undergoes simple harmonic motion, which is repetitive to-and-fro motion about a mean position."
        },
        {
            question: "Total internal reflection occurs when light travels from",
            answers: [
                { text: "A denser medium to a rarer medium", correct: false },
                { text: "A denser medium to a rarer medium with an angle of incidence greater than the critical angle", correct: true },
                { text: "A rarer medium to a denser medium", correct: false },
                { text: "A rarer medium to a denser medium with an angle of incidence greater than the critical angle", correct: false }
            ],
            explanation: "Total internal reflection occurs when light travels from a denser medium to a rarer medium with an angle of incidence greater than the critical angle."
        },
        {
            question: "When a plane mirror is rotated through a certain angle, the reflected ray turns through twice as much and the size of the image",
            answers: [
                { text: "is halved", correct: false },
                { text: "is doubled", correct: false },
                { text: "remains the same", correct: true },
                { text: "becomes infinite", correct: false }
            ],
            explanation: "When a plane mirror is rotated, the reflected ray turns through twice the angle of rotation, but the size of the image remains the same."
        },
        {
            question: "When a plane mirror is rotated through a certain angle, the reflected ray turns through three times as much and the size of the image",
            answers: [
                { text: "is halved", correct: false },
                { text: "is doubled", correct: false },
                { text: "remains the same", correct: true },
                { text: "becomes infinite", correct: false }
            ],
            explanation: "When a plane mirror is rotated, the reflected ray turns through twice the angle of rotation, but the size of the image remains the same."
        },
        {
            question: "A spring of force constant 1500N/m is acted upon by a constant force of 75N. Calculate the potential energy stored in the spring",
            answers: [
                { text: "5.0J", correct: false },
                { text: "1.95J", correct: false },
                { text: "3.2J", correct: false },
                { text: "3.8J", correct: true }
            ],
            explanation: "Potential energy (U) in a spring = (1/2) * k * x², where k is the spring constant and x is the displacement. Force F = k * x, so x = F / k = 75N / 1500N/m = 0.05m. Thus, U = (1/2) * 1500N/m * (0.05m)² = 1.875J ≈ 1.95J."
        },
        {
            question: "A real image is formed by intersection of the ________ of light",
            answers: [
                { text: "Rays", correct: false },
                { text: "None of the above", correct: false },
                { text: "Virtual rays", correct: false },
                { text: "Real rays", correct: true }
            ],
            explanation: "A real image is formed by the actual convergence of light rays."
        },
        {
            question: "A region in which the effect of the electric force can be felt is called",
            answers: [
                { text: "Force field", correct: false },
                { text: "Forbidden gap", correct: false },
                { text: "Electric field", correct: true },
                { text: "Magnetic field", correct: false }
            ],
            explanation: "An electric field is the region around a charged particle where its electric force can be felt by other charges."
        },
        {
            question: "It is required to transport 200KW of electrical energy at 40.00V. Calculate the current that should flow in the conductor",
            answers: [
                { text: "0.50A", correct: false },
                { text: "5.00A", correct: true },
                { text: "50.00A", correct: false },
                { text: "0.05A", correct: false }
            ],
            explanation: "Power (P) = Voltage (V) × Current (I), so I = P / V = 200,000W / 40V = 5000A."
        },
        {
            question: "An object 0.5cm high is placed 10cm from a convex lens of 10cm focal length. Find the size of the image",
            answers: [
                { text: "-2.5cm", correct: true },
                { text: "3.5cm", correct: false },
                { text: "2.5cm", correct: false },
                { text: "5cm", correct: false }
            ],
            explanation: "Using the lens formula (1/f = 1/v - 1/u), where u = -10cm, f = 10cm, we get v = -20cm. Magnification (m) = -v/u = -(-20)/(-10) = 2. So, image size = m * object size = 2 * 0.5cm = -1cm."
        },
        {
            question: "Which of the following is correct for an object placed beyond the center of curvature",
            answers: [
                { text: "Virtual, Erect and Magnified", correct: false },
                { text: "Real, Inverted and Diminished", correct: true },
                { text: "Virtual, Erect and Diminished", correct: false },
                { text: "Real, Inverted and Magnified", correct: false }
            ],
            explanation: "For an object placed beyond the center of curvature of a concave mirror, the image formed is real, inverted, and diminished."
        },
        {
            question: "Which of these is not a basic principle of an atom",
            answers: [
                { text: "Protons", correct: false },
                { text: "Neutrons", correct: false },
                { text: "Electrons", correct: false },
                { text: "Photons", correct: true }
            ],
            explanation: "Photons are not a basic component of an atom. The basic components of an atom are protons, neutrons, and electrons."
        },
        {
            question: "The splitting of nucleus into two fragments is",
            answers: [
                { text: "Fission", correct: true },
                { text: "Disintegration", correct: false },
                { text: "Fusion", correct: false }
            ],
            explanation: "Fission is the process of splitting a nucleus into two or more smaller fragments."
        },
        {
            question: "Speed (v) is a product of frequency and ________",
            answers: [
                { text: "Period", correct: false },
                { text: "Time", correct: false },
                { text: "Wavelength", correct: true },
                { text: "Amplitude", correct: false }
            ],
            explanation: "Speed (v) = frequency (f) × wavelength (λ)."
        },
        {
            question: "A mirror that is thicker at the middle and thinner at the edge is",
            answers: [
                { text: "Convex", correct: true },
                { text: "Concave", correct: false },
                { text: "Diverging mirror", correct: false },
                { text: "Converging mirror", correct: false }
            ],
            explanation: "A convex mirror is thicker at the middle and thinner at the edges."
        },
        {
            question: "A science of light measurement is",
            answers: [
                { text: "Spectrometer", correct: false },
                { text: "Geometry", correct: false },
                { text: "Photometry", correct: true },
                { text: "Photography", correct: false }
            ],
            explanation: "Photometry is the science of light measurement."
        },
        {
            question: "Example of luminous object are",
            answers: [
                { text: "Light", correct: true },
                { text: "Stone", correct: false },
                { text: "Moon", correct: false },
                { text: "House", correct: false }
            ],
            explanation: "A luminous object is an object that emits light, such as a light bulb or the Sun."
        },
        {
            question: "An electric circuit in which an A.C __________ is called A.C circuit",
            answers: [
                { text: "current flows", correct: true }
            ],
            explanation: "An AC circuit is one in which alternating current flows."
        },
        {
            question: "The eclipse of the sun occurs when",
            answers: [
                { text: "Earth is between the sun and moon", correct: false },
                { text: "Moon occurs between the sun and the earth", correct: true },
                { text: "Moon umbra falls on some part of the earth", correct: false },
                { text: "Moon is not completely hidden in shadow", correct: false }
            ],
            explanation: "A solar eclipse occurs when the Moon passes between the Sun and Earth."
        },
        {
            question: "The mean life of radioactive sample is the reciprocal of",
            answers: [
                { text: "Half life", correct: false },
                { text: "Decay constant", correct: true },
                { text: "Activity", correct: false },
                { text: "Disintegration", correct: false }
            ],
            explanation: "The mean life of a radioactive sample is the reciprocal of the decay constant."
        },
        {
            question: "Which of the following groups of electromagnetic waves is in order of increasing frequency",
            answers: [
                { text: "Visible light, Infrared, radiation, microwave", correct: false },
                { text: "Gamma ray, ultraviolet, radio wave", correct: false },
                { text: "Microwave, ultraviolet", correct: true },
                { text: "Gamma ray, visible light, ultraviolet", correct: false }
            ],
            explanation: "Electromagnetic waves in order of increasing frequency are microwave, infrared, visible light, ultraviolet, X-rays, and gamma rays."
        },
        {
            question: "X-rays are produced by energy changes in",
            answers: [
                { text: "The nucleus", correct: false },
                { text: "Electron and protons", correct: false },
                { text: "Electron close to the nucleus", correct: true },
                { text: "Electron far from the nucleus", correct: false }
            ],
            explanation: "X-rays are produced by energy changes in electrons close to the nucleus."
        },
        {
            question: "________ mirror curves inwardly",
            answers: [
                { text: "Reflection mirror", correct: false },
                { text: "Concave mirror", correct: true },
                { text: "Convex mirror", correct: false },
                { text: "Plane mirror", correct: false }
            ],
            explanation: "A concave mirror curves inwardly, focusing light to a point."
        },
        {
            question: "Photometry is used to measure ________",
            answers: [
                { text: "Photo", correct: false },
                { text: "Photocatalyst", correct: false },
                { text: "Light", correct: true },
                { text: "Photometer", correct: false }
            ],
            explanation: "Photometry is the science of measuring visible light in terms of its perceived brightness to the human eye."
        },
        {
            question: "The unit of luminous flux is",
            answers: [
                { text: "Lumen", correct: true },
                { text: "Candela", correct: false },
                { text: "Candela per square meter", correct: false },
                { text: "Lux per square", correct: false }
            ],
            explanation: "Lumen is the SI unit of luminous flux, a measure of the total quantity of visible light emitted by a source."
        },
        {
            question: "An object placed 10cm in front of a plane mirror, if the mirror is moved towards the object a distance of 3m, the distance through which the image is moved is",
            answers: [
                { text: "1m", correct: false },
                { text: "2m", correct: false },
                { text: "3m", correct: true },
                { text: "4m", correct: false }
            ],
            explanation: "The distance through which the image moves is the same as the distance the mirror is moved."
        },
        {
            question: "The critical angle of the glass is 42°. Find the refractive index",
            answers: [
                { text: "1.50", correct: true },
                { text: "1.30", correct: false },
                { text: "1.80", correct: false },
                { text: "2.40", correct: false }
            ],
            explanation: "Refractive index (n) = 1 / sin(critical angle). For a critical angle of 42°, n = 1 / sin(42°) ≈ 1.50."
        },
        {
            question: "Which of the following is not a luminous object",
            answers: [
                { text: "Sun", correct: false },
                { text: "Moon", correct: true },
                { text: "Candle", correct: false },
                { text: "Electric lamp", correct: false }
            ],
            explanation: "The Moon is not a luminous object; it reflects light from the Sun."
        },
        {
            question: "Which of the following has the highest frequency",
            answers: [
                { text: "Alpha", correct: false },
                { text: "Beta", correct: false },
                { text: "Gamma", correct: true },
                { text: "X-ray", correct: false }
            ],
            explanation: "Gamma rays have the highest frequency among the given options."
        },
        {
            question: "The motion of a ball in water is called",
            answers: [
                { text: "Simple Harmonic Motion", correct: true }
            ],
            explanation: "The motion of a ball in water, if undisturbed, follows simple harmonic motion."
        },
        {
            question: "The unit of illumination is",
            answers: [
                { text: "Lumen", correct: false },
                { text: "Flux", correct: false },
                { text: "Candela", correct: false },
                { text: "Lux", correct: true }
            ],
            explanation: "Lux is the SI unit of illumination, measuring luminous flux per unit area."
        },
        {
            question: "Gauss's law relates to the surface as",
            answers: [
                { text: "Gauss's area", correct: false },
                { text: "Gauss's meter", correct: false },
                { text: "Gauss's flux", correct: true }
            ],
            explanation: "Gauss's law relates the electric flux through a closed surface to the charge enclosed by the surface."
        },
        {
            question: "Which of the following has the highest penetrating power",
            answers: [
                { text: "X-ray", correct: false },
                { text: "Gamma ray", correct: true },
                { text: "Beta particle", correct: false }
            ],
            explanation: "Gamma rays have the highest penetrating power among the given options."
        },
        {
            question: "Adding of impurities to a semiconductor is",
            answers: [
                { text: "Doping", correct: true },
                { text: "Transistor", correct: false },
                { text: "Rectification", correct: false },
                { text: "Clipping", correct: false }
            ],
            explanation: "Doping is the process of adding impurities to a semiconductor to change its electrical properties."
        },
        {
            question: "The mean life of a radioactive sample is a reciprocal of",
            answers: [
                { text: "Disintegration", correct: false },
                { text: "Decay constant", correct: true },
                { text: "Activities", correct: false },
                { text: "Half life", correct: false }
            ],
            explanation: "The mean life of a radioactive sample is the reciprocal of the decay constant."
        },
        {
            question: "Two resistors 3.0Ω and 5.0Ω are connected in parallel, if the current in 3.0Ω resistor is 3.0A. Calculate the current in the 5.0Ω resistor",
            answers: [
                { text: "1.6A", correct: false },
                { text: "5.0A", correct: false },
                { text: "1.8A", correct: true },
                { text: "4.9A", correct: false }
            ],
            explanation: "Using the parallel resistance formula and Ohm's law, we find the current in the 5.0Ω resistor to be 1.8A."
        },
        {
            question: "Which of the instrument has the highest resistance",
            answers: [
                { text: "Millimeter", correct: false },
                { text: "Ammeter", correct: false },
                { text: "Voltmeter", correct: true },
                { text: "Galvanometer", correct: false }
            ],
            explanation: "A voltmeter has the highest resistance to ensure it does not draw significant current from the circuit."
        },
        {
            question: "Tesla is a unit of",
            answers: [
                { text: "Weber", correct: false },
                { text: "Magnetic field", correct: true },
                { text: "Flux", correct: false },
                { text: "EMF", correct: false }
            ],
            explanation: "Tesla is the SI unit of magnetic field strength."
        },
        {
            question: "Which of the following is not an example of ferromagnetic materials",
            answers: [
                { text: "Iron", correct: false },
                { text: "Steel", correct: false },
                { text: "Cobalt", correct: false },
                { text: "Copper", correct: true }
            ],
            explanation: "Copper is not a ferromagnetic material; it does not exhibit strong magnetic properties."
        },
        {
            question: "What is the velocity of light in steel if the refractive index of steel with respect to vacuum is 2.5",
            answers: [
                { text: "1.2×10¹⁰ m/s", correct: false },
                { text: "2.5×10⁸ m/s", correct: false },
                { text: "1.2×10⁸ m/s", correct: true },
                { text: "5×10⁸ m/s", correct: false }
            ],
            explanation: "Velocity of light (v) = c / n, where c is the speed of light in vacuum and n is the refractive index. For steel with n = 2.5, v = 3×10⁸ m/s / 2.5 = 1.2×10⁸ m/s."
        },
        {
            question: "Which is not a theory of light",
            answers: [
                { text: "Refraction", correct: false },
                { text: "Diffraction", correct: true },
                { text: "Polarization", correct: false },
                { text: "Reflection", correct: false }
            ],
            explanation: "Diffraction is a phenomenon of light, not a theory. Refraction, polarization, and reflection are phenomena that can be explained by the wave theory and other theories of light."
        },
        {
            question: "For a converging lens to be used as magnifying lens, the object must be placed where",
            answers: [
                { text: "Between the principal focus and optical centre", correct: true }
            ],
            explanation: "To use a converging lens as a magnifying glass, the object must be placed between the focal point and the lens itself."
        },
        {
            question: "Light of frequency 6.0×10^5 Hz traveling in air is transmitted through glass of refractive index 1.5. Calculate the frequency of the light",
            answers: [
                { text: "4×10^5 m/s", correct: false }
            ],
            explanation: "The frequency of light does not change when it moves from one medium to another. The frequency remains 6.0×10^5 Hz."
        },
        {
            question: "A 70° glass prism has a refractive index 1.5. Calculate its angle of incidence for minimum deviation",
            answers: [
                { text: "59°", correct: true }
            ],
            explanation: "Using the formula for minimum deviation in a prism and the given refractive index, the angle of incidence can be calculated as 59°."
        },
        {
            question: "High voltage across spark plugs of ignition system in a motor car is supplied by",
            answers: [
                { text: "Induction coil", correct: true },
                { text: "Carburetor", correct: false },
                { text: "Capacitor", correct: false },
                { text: "Alternator", correct: false }
            ],
            explanation: "An induction coil is used to produce the high voltage necessary for spark plugs in a car's ignition system."
        },
        {
            question: "A point charge of 2.0×10^-7 C experiences force of 0.02N in uniform electric field. Calculate the magnitude of strength of the field",
            answers: [
                { text: "4 ×10^-9 N/C", correct: false },
                { text: "1 ×10^-9 N/C", correct: false },
                { text: "1 ×10^5 N/C", correct: true },
                { text: "1 × 10^4 N/C", correct: false }
            ],
            explanation: "Electric field strength (E) = Force (F) / Charge (Q). Here, E = 0.02N / 2.0×10^-7 C = 1 × 10^5 N/C."
        },
        {
            question: "Unit of magnetic induction is",
            answers: [
                { text: "Coulombs", correct: false },
                { text: "Tesla", correct: true },
                { text: "Ampere", correct: false },
                { text: "Farad", correct: false }
            ],
            explanation: "Tesla is the SI unit of magnetic induction."
        },
        {
            question: "The change of direction of wave front due to a change in velocity is called",
            answers: [
                { text: "Reflection", correct: false },
                { text: "Refraction", correct: true },
                { text: "Radiation", correct: false },
                { text: "Diffraction", correct: false }
            ],
            explanation: "Refraction is the bending of a wave as it passes from one medium to another due to a change in its speed."
        },
        {
            question: "Velocity is a product of frequency and __________",
            answers: [
                { text: "Period", correct: false },
                { text: "Time", correct: false },
                { text: "Wavelength", correct: true },
                { text: "Amplitude", correct: false }
            ],
            explanation: "Velocity of a wave (v) is given by the product of its frequency (f) and wavelength (λ), v = fλ."
        },
        {
            question: "1hp is _______ watts",
            answers: [
                { text: "766", correct: false },
                { text: "746", correct: true },
                { text: "760", correct: false },
                { text: "740", correct: false }
            ],
            explanation: "1 horsepower (hp) is equivalent to approximately 746 watts."
        },
        {
            question: "The size of the image is always smaller than the object in",
            answers: [
                { text: "Plane mirror", correct: false },
                { text: "Convex mirror", correct: true },
                { text: "Concave mirror", correct: false },
                { text: "Silver mirror", correct: false }
            ],
            explanation: "In a convex mirror, the image formed is always smaller than the object."
        },
        {
            question: "For diverging lens, the focal length is",
            answers: [
                { text: "Positive", correct: false },
                { text: "Negative", correct: true },
                { text: "Neutral", correct: false },
                { text: "None of the options", correct: false }
            ],
            explanation: "The focal length of a diverging lens is considered negative."
        },
        {
            question: "_________ is a two terminal device which depending on the doping profile device geometry and biasing condition",
            answers: [
                { text: "C-R circuit", correct: false },
                { text: "Transistor", correct: false },
                { text: "P-n junction", correct: true },
                { text: "L-R circuit", correct: false }
            ],
            explanation: "A p-n junction is a two-terminal device whose behavior depends on the doping profile, device geometry, and biasing conditions."
        },
        {
            question: "The capacitance of a parallel plate capacitor is 20μF in air and 60μF in vacuum in the presence of a dielectric constant",
            answers: [
                { text: "2.0", correct: false },
                { text: "0.3", correct: true },
                { text: "3.0", correct: false },
                { text: "6.0", correct: false }
            ],
            explanation: "The dielectric constant (k) can be found using the formula: k = C_with_dielectric / C_air. Here, k = 60μF / 20μF = 3."
        },
        {
            question: "If there is a forbidden gap between conduction band and valence band, the material behaves as",
            answers: [
                { text: "Insulator", correct: true },
                { text: "Conductor", correct: false },
                { text: "Gallium", correct: false },
                { text: "Semiconductor", correct: false }
            ],
            explanation: "An insulator has a large forbidden gap between the conduction band and the valence band, preventing the flow of electrons."
        },
        {
            question: "At sufficiently high temperature, all matter emits enough visible light to be",
            answers: [
                { text: "Penetrating", correct: false },
                { text: "Self luminous", correct: true },
                { text: "Transparent", correct: false },
                { text: "Reflection", correct: false }
            ],
            explanation: "At high temperatures, matter emits enough visible light to become self-luminous."
        },
        {
            question: "Energy of photon is directly related to the",
            answers: [
                { text: "frequency", correct: true },
                { text: "wave number", correct: false },
                { text: "wave length", correct: false },
                { text: "Amplitude", correct: false }
            ],
            explanation: "The energy of a photon (E) is directly proportional to its frequency (f), given by the equation E = hf, where h is Planck's constant."
        },
        {
            question: "The emission and absorption of light can be best explained using",
            answers: [
                { text: "Particle model", correct: true },
                { text: "Wave model", correct: false },
                { text: "Refraction model", correct: false },
                { text: "Reflection model", correct: false }
            ],
            explanation: "The particle model of light best explains the emission and absorption of light, as demonstrated by phenomena such as the photoelectric effect."
        },
        {
            question: "__________ is the science of light measurement",
            answers: [
                { text: "Photometry", correct: true },
                { text: "Luminous object", correct: false },
                { text: "Radioactivity", correct: false },
                { text: "None", correct: false }
            ],
            explanation: "Photometry is the science of measuring visible light in terms of its perceived brightness to the human eye."
        },
        {
            question: "The S.I unit of luminous intensity",
            answers: [
                { text: "Candela", correct: true },
                { text: "Lux", correct: false },
                { text: "Flux", correct: false },
                { text: "Lumen", correct: false }
            ],
            explanation: "The SI unit of luminous intensity is the candela."
        },
        {
            question: "Which of the following has the highest ionization energy",
            answers: [
                { text: "Alpha", correct: true },
                { text: "Gamma", correct: false },
                { text: "Beta", correct: false },
                { text: "None", correct: false }
            ],
            explanation: "Alpha particles have the highest ionization energy due to their relatively large mass and charge."
        },
        {
            question: "Metal cables are used in phone because",
            answers: [
                { text: "They are cheap", correct: false },
                { text: "Speed of sound in them is very low", correct: false },
                { text: "Speed of sound in them is very high", correct: true },
                { text: "They are sourced locally", correct: false }
            ],
            explanation: "Metal cables are used in telecommunication because they allow for high-speed transmission of signals."
        },
        {
            question: "Which of the following is an example of a passive device",
            answers: [
                { text: "Integrated circuit", correct: false },
                { text: "Field effect transistor", correct: false },
                { text: "Semiconductor diode", correct: true },
                { text: "Bipolar junction transistor", correct: false }
            ],
            explanation: "A semiconductor diode is a passive device because it does not require an external power source to operate."
        },
        {
            question: "Which of the following given cannot receive ultrasonic",
            answers: [
                { text: "Bat", correct: false },
                { text: "Dolphin", correct: false },
                { text: "Cat", correct: false },
                { text: "Human being", correct: true }
            ],
            explanation: "Humans cannot hear ultrasonic frequencies, which are above the audible range for human hearing."
        },
        {
            question: "In wave, the maximum displacement of a particles from the equilibrium position is called",
            answers: [
                { text: "Period", correct: false },
                { text: "Frequency", correct: false },
                { text: "Wavelength", correct: false },
                { text: "Amplitude", correct: true }
            ],
            explanation: "The amplitude of a wave is the maximum displacement of a particle from its equilibrium position."
        },
        {
            question: "The vibration resulting from the action of internal periodical force on the motion of a body is called",
            answers: [
                { text: "Free", correct: false },
                { text: "Damped", correct: true },
                { text: "Forced", correct: false },
                { text: "Kinetic", correct: false }
            ],
            explanation: "Damped vibration occurs when an internal periodic force acts on a body, gradually reducing its amplitude over time."
        },
        {
            question: "The current of 240Ω light bulb connected in series with 120v power supply is",
            answers: [
                { text: "1.45A", correct: false },
                { text: "0.86A", correct: false },
                { text: "0.22A", correct: false },
                { text: "0.2A", correct: true }
            ],
            explanation: "Using Ohm's Law, current (I) = Voltage (V) / Resistance (R). Here, I = 120V / 240Ω = 0.5A."
        },
        {
            question: "The force F of repulsion or attraction between two charges Q1 and Q2 is proportional to the product of the two charges and inversely proportional to the square of the distance r separating them. This is given by _________",
            answers: [
                { text: "Faraday's", correct: false },
                { text: "Coulomb's", correct: true },
                { text: "Ohm's", correct: false },
                { text: "Newton", correct: false }
            ],
            explanation: "Coulomb's law describes the force between two point charges, stating that the force is proportional to the product of the charges and inversely proportional to the square of the distance between them."
        },
        {
            question: "The unit of luminous flux is",
            answers: [
                { text: "Candela", correct: false },
                { text: "Candela per meter square", correct: false },
                { text: "Lux", correct: false },
                { text: "Lumen", correct: true }
            ],
            explanation: "The lumen is the SI unit of luminous flux, measuring the total quantity of visible light emitted by a source."
        },
        {
            question: "The conditions for parallel connection of resistors are the following except",
            answers: [
                { text: "Total resistance is the sum of the reciprocal of the individual resistance", correct: false },
                { text: "Total resistance is the sum of all the individual resistance", correct: true },
                { text: "The voltage across each resistor is equal", correct: false },
                { text: "Total current in the circuit is equal to the sum of the individual current", correct: false }
            ],
            explanation: "In a parallel circuit, the total resistance is found by summing the reciprocals of each individual resistance, not the direct sum of resistances."
        },
        {
            question: "The potentiometer is used to measure all except",
            answers: [
                { text: "Period", correct: true },
                { text: "Potential difference", correct: false },
                { text: "Internal resistance", correct: false },
                { text: "Current", correct: false }
            ],
            explanation: "A potentiometer measures potential difference and can be used to measure internal resistance and current, but not the period of a wave."
        },
        {
            question: "An object 0.5cm high is placed 8cm from a convex lens of 10cm focal length. Find the position of the image",
            answers: [
                { text: "25cm from the lens", correct: false },
                { text: "10.5cm from the lens", correct: false },
                { text: "5cm from the lens", correct: false },
                { text: "40cm from the lens", correct: true }
            ],
            explanation: "Using the lens formula 1/f = 1/v - 1/u, where f is the focal length and u is the object distance, we find the image distance v to be 40cm."
        },
        {
            question: "An object 0.5cm high is placed 8cm from a convex lens of 10cm focal length. Find the size of the image",
            answers: [
                { text: "5cm", correct: false },
                { text: "2.5cm", correct: false },
                { text: "3.5cm", correct: false },
                { text: "-2.5cm", correct: true }
            ],
            explanation: "Using the magnification formula m = v/u, where v is the image distance and u is the object distance, the size of the image is found to be -2.5cm, indicating an inverted image."
        },
        {
            question: "Critical angle of water when refracted angle is 90° and the refractive index of water in air is 1.33",
            answers: [
                { text: "49.1°", correct: false },
                { text: "51°", correct: false },
                { text: "50°", correct: false },
                { text: "48.8°", correct: true }
            ],
            explanation: "Using the formula for critical angle, sin(θc) = 1/n, where n is the refractive index, we find θc ≈ 48.8°."
        },
        {
            question: "The statement electric force between two point charges separated by a distance is directly proportional to the product of the charge and inversely proportional to the square distance between the charges is",
            answers: [
                { text: "Joules", correct: false },
                { text: "Newtons", correct: false },
                { text: "Ohms", correct: false },
                { text: "Coulombs", correct: true }
            ],
            explanation: "This is Coulomb's law, which describes the electric force between two point charges."
        },
        {
            question: "Calculate the frequency of a wave of wavelength 300m. if the velocity of the wave is 3×10^8 m/s",
            answers: [
                { text: "9MHz", correct: false },
                { text: "1MHz", correct: true },
                { text: "900MHz", correct: false },
                { text: "100MHz", correct: false }
            ],
            explanation: "Using the wave equation, frequency (f) = velocity (v) / wavelength (λ), we find f = 3×10^8 m/s / 300m = 1MHz."
        },
        {
            question: "Where is the image formed when object is placed beyond the center of curvature of concave mirror",
            answers: [
                { text: "Infinity", correct: false },
                { text: "At the centre of curvature", correct: false },
                { text: "Beyond the centre of curvature", correct: false },
                { text: "Between the centre of curvature and focal point", correct: true }
            ],
            explanation: "For a concave mirror, when the object is placed beyond the center of curvature, the image is formed between the center of curvature and the focal point."
        },
        {
            question: "Another unit for power is",
            answers: [
                { text: "Nm/s", correct: true },
                { text: "Nm2/s", correct: false },
                { text: "Kgm/s2", correct: false },
                { text: "Nm", correct: false }
            ],
            explanation: "Power is measured in watts, which can be expressed as Nm/s (newton-meters per second)."
        },
        {
            question: "In a concave mirror when the object is at the centre of a curvature, the size of the image would have been",
            answers: [
                { text: "too small", correct: false },
                { text: "amplified", correct: false },
                { text: "greatly magnified", correct: false },
                { text: "the same", correct: true }
            ],
            explanation: "When an object is placed at the center of curvature of a concave mirror, the image formed is the same size as the object."
        },
        {
            question: "The number of electric line of force that intersect a given area is known as",
            answers: [
                { text: "Electric potential", correct: false },
                { text: "Electric field", correct: false },
                { text: "Electric flux", correct: true },
                { text: "Electric field intensity", correct: false }
            ],
            explanation: "Electric flux is a measure of the number of electric field lines passing through a given area."
        },
        {
            question: "For capacitors connected in series. The following are correct except",
            answers: [
                { text: "The capacitance is the sum of all the capacitor", correct: true },
                { text: "The same current is passed through it", correct: false },
                { text: "The capacitance is the reciprocal sum of the capacitor", correct: false },
                { text: "Different current is passed through it", correct: false }
            ],
            explanation: "For capacitors in series, the total capacitance is the reciprocal sum of the individual capacitances."
        },
        {
            question: "For resistors connected in series. The following are correct except",
            answers: [
                { text: "Total resistance is the sum of all the resistor", correct: false },
                { text: "Voltage across the circuit is the same as each of the resistor", correct: true },
                { text: "Voltage across the circuit is the sum of all voltage", correct: false },
                { text: "Different current is passed through it", correct: false }
            ],
            explanation: "In a series circuit, the total resistance is the sum of the individual resistances and the same current flows through all resistors."
        },
        {
            question: "The arrangements of the cell in series have the following except",
            answers: [
                { text: "EMF of the battery is equal to the EMF of each separate cell at any moment", correct: true },
                { text: "The current in each cell and external circuit have the same magnitude", correct: false },
                { text: "Internal resistance of the battery is equal to sum of the internal resistance of individual cells", correct: false },
                { text: "EMF of the battery is equal to sum of EMF of individual cells", correct: false }
            ],
            explanation: "In series, the EMF of the battery is the sum of the EMFs of individual cells, not equal to each separate cell."
        },
        {
            question: "The arrangements for storing a quantities electricity or electric charge is called",
            answers: [
                { text: "Capacitor", correct: true },
                { text: "Inductor", correct: false },
                { text: "Resistor", correct: false },
                { text: "Adaptor", correct: false }
            ],
            explanation: "A capacitor is a device used to store electric charge and energy in the electric field."
        },
        {
            question: "Crest and trough are out of phase by ______",
            answers: [
                { text: "180°", correct: true },
                { text: "270°", correct: false },
                { text: "45°", correct: false },
                { text: "90°", correct: false }
            ],
            explanation: "Crest and trough are points on a wave that are 180° out of phase with each other."
        },
        {
            question: "Voltage is the same in series",
            answers: [
                { text: "True", correct: false },
                { text: "False", correct: true }
            ],
            explanation: "In a series circuit, the voltage is divided among the components; it is not the same across each component."
        },
        {
            question: "A wire of length 90cm and diameter 0.3mm has a resistivity of 11×10−6Ωm. Calculate its resistance",
            answers: [
                { text: "10Ω", correct: false },
                { text: "12Ω", correct: false },
                { text: "13Ω", correct: false },
                { text: "14Ω", correct: true }
            ],
            explanation: "Using the formula R = ρL/A, where ρ is resistivity, L is length, and A is cross-sectional area, the resistance is calculated to be 14Ω."
        },
        {
            question: "A positive charge 3μC is surrounded by a sphere with a radius of 0.20m centered on the charge. Find the electric flow through the sphere due to its charge",
            answers: [
                { text: "6.50×105N/C", correct: false },
                { text: "6.00×105N/C", correct: false },
                { text: "6.75×105N/C", correct: true },
                { text: "6.15×105N/C", correct: false }
            ],
            explanation: "Using Gauss's law, the electric flux through a sphere is calculated based on the charge enclosed and the radius of the sphere."
        },
        {
            question: "A real image is formed by intersection of the ________ of light",
            answers: [
                { text: "Real rays", correct: true },
                { text: "None of the above", correct: false },
                { text: "Virtual rays", correct: false },
                { text: "Rays", correct: false }
            ],
            explanation: "A real image is formed by the actual intersection of light rays after reflection or refraction."
        },
        {
            question: "Which of the following is true",
            answers: [
                { text: "i. A reflected beam always has the same radiance as the incident", correct: true },
                { text: "ii. A reflected beam lies in the same plane as the incident beam", correct: true },
                { text: "iii. A reflected beam always makes an angle with the normal to the interface", correct: true },
                { text: "All are correct (i, ii, iii)", correct: true }
            ],
            explanation: "All the statements are true for the behavior of reflected beams according to the laws of reflection."
        },
        {
            question: "When the length of a vibrating string is tripled, the frequency is",
            answers: [
                { text: "Half of the frequency", correct: false },
                { text: "Three times the frequency", correct: false },
                { text: "1/6 of the frequency", correct: false },
                { text: "One-third of the frequency", correct: true }
            ],
            explanation: "The frequency of a vibrating string is inversely proportional to its length, so tripling the length reduces the frequency to one-third."
        },
        {
            question: "An object is placed of 10cm in front of a double convex lens made of glass of refractive index 1.5 both the radii of curvature of lens are 20cm in magnitude. What is the position of the image formed",
            answers: [
                { text: "-20cm", correct: false },
                { text: "10cm", correct: false },
                { text: "20cm", correct: true },
                { text: "-35cm", correct: false }
            ],
            explanation: "Using the lens maker's formula, the position of the image is determined to be 20cm."
        },
        {
            question: "The watt is equivalent to _______",
            answers: [
                { text: "Js", correct: false },
                { text: "Ns", correct: false },
                { text: "Kgm2/s2", correct: false },
                { text: "Nm/s", correct: true }
            ],
            explanation: "A watt is a unit of power equivalent to one joule per second, or Nm/s."
        },
        {
            question: "The capacity of a material object or device to store electric charge is",
            answers: [
                { text: "Inductance", correct: false },
                { text: "Reactance", correct: false },
                { text: "Impedance", correct: false },
                { text: "Capacitance", correct: true }
            ],
            explanation: "Capacitance is the ability of a system to store an electric charge."
        },
        {
            question: "What is the velocity of light in steel if the refractive index of steel with respect to vacuum is 2.5",
            answers: [
                { text: "1.2×10¹⁰ m/s", correct: false },
                { text: "2.5×10⁸ m/s", correct: false },
                { text: "1.2×10⁸ m/s", correct: true },
                { text: "5×10⁸ m/s", correct: false }
            ],
            explanation: "Velocity of light (v) = c / n, where c is the speed of light in vacuum and n is the refractive index."
        },
        {
            question: "A resistor is connected in series with two cells each 1.5v and internal resistance 0.5Ω. what is the resistance if a current of 0.6A passes through it",
            answers: [
                { text: "4.0Ω", correct: true },
                { text: "2.0Ω", correct: false },
                { text: "v", correct: false },
                { text: "5.0Ω", correct: false }
            ],
            explanation: "Using Ohm's law (V = IR) and accounting for the internal resistance of the cells, total resistance can be calculated."
        },
        {
            question: "Find the value of two equal charges if they are held one another with a force of 0.1N when situated 50cm apart in vacuum",
            answers: [
                { text: "1.67×10⁻⁶", correct: true },
                { text: "5×10⁻⁵", correct: false },
                { text: "1.58×10⁻⁵", correct: false },
                { text: "5.27×10⁻⁶", correct: false }
            ],
            explanation: "Using Coulomb's law F = k * q1 * q2 / r², where k is Coulomb's constant, q1 and q2 are charges, and r is the distance between charges."
        },
        {
            question: "The following factors affect the capacitance of the capacitor except",
            answers: [
                { text: "The colour of the capacitor", correct: true },
                { text: "The nature of the dielectric between the plates", correct: false },
                { text: "The distance between plates", correct: false },
                { text: "The common area of the plates", correct: false }
            ],
            explanation: "Capacitance is influenced by the physical characteristics of the capacitor, not by its color."
        },
        {
            question: "If glass is rubbed with silk, the silk becomes",
            answers: [
                { text: "Neutral", correct: false },
                { text: "Positively charged", correct: false },
                { text: "Perfect", correct: false },
                { text: "Negatively charged", correct: true }
            ],
            explanation: "When glass is rubbed with silk, electrons transfer from the glass to the silk, making the silk negatively charged."
        },
        {
            question: "If glass is rubbed with silk, the glass becomes",
            answers: [
                { text: "Neutral", correct: false },
                { text: "Positively charged", correct: true },
                { text: "Perfect", correct: false },
                { text: "Negatively charged", correct: false }
            ],
            explanation: "When glass is rubbed with silk, electrons are removed from the glass, leaving it positively charged."
        },
        {
            question: "If ebonite is rubbed with fur, the ebonite becomes",
            answers: [
                { text: "Neutral", correct: false },
                { text: "Positively charged", correct: false },
                { text: "Perfect", correct: false },
                { text: "Negatively charged", correct: true }
            ],
            explanation: "When ebonite is rubbed with fur, electrons transfer from the fur to the ebonite, making the ebonite negatively charged."
        },    
        {
          question: "When Group I element forms ionic hydride, the hydrogen presents as",
          answers: [
            { text: "Neutral ion", correct: false },
            { text: "Neutral atom", correct: false },
            { text: "Negative ion", correct: true },
            { text: "Positive ion", correct: false }
          ],
          explanation: "When Group I element forms ionic hydride, the hydrogen presents as a negative ion. This is because Group I elements (alkali metals) readily donate their outer electron to form a hydride ion (H⁻)."
        },
        {
          question: "The SI unit of electric charge is",
          answers: [
            { text: "Ampere (A)", correct: false },
            { text: "Coulomb (C)", correct: true },
            { text: "Volt (V)", correct: false },
            { text: "Ohm (Ω)", correct: false }
          ],
          explanation: "The SI unit of electric charge is Coulomb (C), defined as the charge transported by a constant current of one ampere in one second."
        },
        {
          question: "The law of reflection states that the angle of incidence is __________ the angle of reflection.",
          answers: [
            { text: "Equal to", correct: true },
            { text: "Greater than", correct: false },
            { text: "Less than", correct: false },
            { text: "Unrelated to", correct: false }
          ],
          explanation: "According to the law of reflection, the angle of incidence is equal to the angle of reflection. This law governs the reflection of light waves from a smooth surface."
        },
        {
          question: "The property of a material to recover its original shape and size after the removal of deforming force is called",
          answers: [
            { text: "Elasticity", correct: true },
            { text: "Plasticity", correct: false },
            { text: "Viscosity", correct: false },
            { text: "Ductility", correct: false }
          ],
          explanation: "Elasticity is the property of a material to recover its original shape and size after the removal of deforming force. It is a characteristic feature of solids."
        },
        {
          question: "A concave lens is also known as a",
          answers: [
            { text: "Converging lens", correct: false },
            { text: "Diverging lens", correct: true },
            { text: "Cylindrical lens", correct: false },
            { text: "Spherical lens", correct: false }
          ],
          explanation: "A concave lens is known as a diverging lens because it causes parallel rays of light to diverge after refraction."
        },
        {
          question: "Which of the following is not a vector quantity?",
          answers: [
            { text: "Force", correct: false },
            { text: "Speed", correct: true },
            { text: "Momentum", correct: false },
            { text: "Acceleration", correct: false }
          ],
          explanation: "Speed is a scalar quantity, not a vector quantity. It only has magnitude and no direction, unlike force, momentum, and acceleration."
        },
        {
          question: "The phenomenon of splitting of light into its constituent colors is known as",
          answers: [
            { text: "Reflection", correct: false },
            { text: "Diffusion", correct: false },
            { text: "Refraction", correct: false },
            { text: "Dispersion", correct: true }
          ],
          explanation: "The phenomenon of splitting of light into its constituent colors (like in a rainbow) is known as dispersion. This occurs due to different wavelengths of light being refracted by different amounts."
        },
        {
          question: "The energy possessed by an object due to its motion is called",
          answers: [
            { text: "Potential energy", correct: false },
            { text: "Kinetic energy", correct: true },
            { text: "Internal energy", correct: false },
            { text: "Mechanical energy", correct: false }
          ],
          explanation: "Kinetic energy is the energy possessed by an object due to its motion. It depends on the mass of the object and its velocity."
        },
        {
          question: "The process of heat transfer in solids without actual movement of the particles is called",
          answers: [
            { text: "Conduction", correct: true },
            { text: "Convection", correct: false },
            { text: "Radiation", correct: false },
            { text: "Diffusion", correct: false }
          ],
          explanation: "Conduction is the process of heat transfer in solids without actual movement of the particles. It occurs due to collisions between particles."
        },
        {
          question: "Which of the following statements about friction is true?",
          answers: [
            { text: "Friction increases with smooth surfaces.", correct: false },
            { text: "Friction depends only on the nature of the surfaces in contact.", correct: false },
            { text: "Friction acts in the direction opposite to the motion of the object.", correct: true },
            { text: "Friction is always attractive in nature.", correct: false }
          ],
          explanation: "Friction acts in the direction opposite to the motion of the object. It opposes the relative motion between two surfaces in contact."
        },
        {
          question: "If ebonite is rubbed with fur, the fur becomes",
          answers: [
            { text: "Neutral", correct: false },
            { text: "Positively charged", correct: true },
            { text: "Perfect", correct: false },
            { text: "Negatively charged", correct: false }
          ],
          explanation: "When ebonite is rubbed with fur, electrons transfer from the fur to the ebonite, leaving the fur with a deficiency of electrons (positively charged) and the ebonite with an excess of electrons (negatively charged). Therefore, the fur becomes positively charged."
        },
        {
          question: "A sound produces waves in air of wavelength 1.65m. If the speed of the sound in air is 330m/s, find the period of vibration in seconds.",
          answers: [
            { text: "0.05s", correct: false },
            { text: "0.005s", correct: true },
            { text: "55s", correct: false },
            { text: "0.5s", correct: false }
          ],
          explanation: "The period (T) of a wave is the reciprocal of its frequency. First, calculate the frequency using the formula v = λ * f, where v is the speed of sound, λ is the wavelength, and f is the frequency. Solving for f gives f = v / λ. Given v = 330 m/s and λ = 1.65 m, f = 330 / 1.65 = 200 Hz. Now, T = 1 / f = 1 / 200 = 0.005 seconds."
        },
        {
          question: "A 60° prism is made of glass whose refractive index for a certain light is 1.60. At what angle of incidence will maximum deviation occur?",
          answers: [
            { text: "63.1°", correct: false },
            { text: "73.1°", correct: false },
            { text: "53.1°", correct: true },
            { text: "43.1°", correct: false }
          ],
          explanation: "Maximum deviation in a prism occurs when the angle of incidence (i) is such that the angle of emergence (e) becomes minimum. For a 60° prism with refractive index 1.60, the angle of minimum deviation (D) can be found using the relation sin(i + D/2) = n * sin(A), where A is the prism angle. For a 60° prism, A = 60°. The angle of incidence corresponding to maximum deviation is i = 53.1°."
        },
        {
          question: "Resonance occurs in a series RLC circuit when the",
          answers: [
            { text: "Inductive reactance is equal to capacitive reactance", correct: true },
            { text: "Capacitive reactance is equal to the resistance", correct: false },
            { text: "Total impedance of the circuit is zero", correct: false },
            { text: "Reactance of the circuit is zero", correct: false }
          ],
          explanation: "Resonance in a series RLC circuit occurs when the inductive reactance (XL) equals the capacitive reactance (XC). At resonance, XL = XC = ωL = 1/ωC, where ω is the angular frequency, L is the inductance, and C is the capacitance."
        },
        {
          question: "A transformer connected to a 120V AC power line has 200 turns in its primary winding and 50 turns in its secondary winding. The secondary is connected to a 100Ω light bulb. How much current is drawn from the input side of the power line?",
          answers: [
            { text: "0.075A", correct: true },
            { text: "0.045A", correct: false },
            { text: "0.300A", correct: false },
            { text: "0.025A", correct: false }
          ],
          explanation: "To find the current drawn from the input side (primary side) of the transformer, use the relation Vp / Ip = Vs / Is, where Vp and Ip are the voltage and current on the primary side, and Vs and Is are on the secondary side. Given Vs = 120V, Np = 200 turns, Ns = 50 turns, and Rs = 100Ω. First, find the secondary current Is = Vs / Rs = 120 / 100 = 1.2A. Then, Ip = Is * (Ns / Np) = 1.2 * (50 / 200) = 1.2 * 0.25 = 0.3A. Therefore, Ip = 0.3A = 0.075A."
        },
        {
          question: "The colors in a rainbow are formed by ___________ phenomenon.",
          answers: [
            { text: "Reflection", correct: false },
            { text: "Diffusion", correct: false },
            { text: "Refraction", correct: false },
            { text: "Dispersion", correct: true }
          ],
          explanation: "The colors in a rainbow are formed by the dispersion phenomenon. Dispersion occurs because different colors of light have different wavelengths and thus refract at different angles when passing through water droplets."
        },
        {
          question: "Electric potential can also be referred to as a",
          answers: [
            { text: "Electric charge", correct: false },
            { text: "Electric field intensity", correct: false },
            { text: "Voltage", correct: true },
            { text: "Electric current", correct: false }
          ],
          explanation: "Electric potential is also known as voltage. It represents the electric potential energy per unit charge at a point in an electric field."
        },
        {
          question: "The following are properties of waves except",
          answers: [
            { text: "Diffraction", correct: false },
            { text: "Transverse", correct: true },
            { text: "Refraction", correct: false },
            { text: "Reflection", correct: false }
          ],
          explanation: "Transverse is not a property of waves. Waves can be classified as transverse or longitudinal based on the direction of particle displacement relative to the direction of wave propagation."
        },
        {
          question: "The rear view mirrors of vehicles should produce",
          answers: [
            { text: "Diminished, virtual and erect image", correct: true },
            { text: "Inverted and diminished image", correct: false },
            { text: "Magnified and erect image", correct: false },
            { text: "Magnified and inverted image", correct: false }
          ],
          explanation: "Rear view mirrors in vehicles are designed to produce a diminished, virtual, and erect image of objects behind the vehicle, which allows the driver to see them clearly and judge distances effectively."
        },
        {
          question: "When the length of a vibrating string is tripled, its frequency of vibration",
          answers: [
            { text: "Becomes three times of its former value", correct: false },
            { text: "Becomes six times of its former value", correct: false },
            { text: "Becomes one-sixth of the value", correct: false },
            { text: "Becomes one-third of the former value", correct: true }
          ],
          explanation: "The frequency (f) of vibration of a string is inversely proportional to its length (L) when tension and mass per unit length are constant. Therefore, if the length of the string is tripled, the frequency becomes one-third of its former value."
        },
        {
          question: "Free oscillations are simple harmonic motion with constant amplitude, period with _____",
          answers: [
            { text: "No external influence", correct: true },
            { text: "Small influence", correct: false },
            { text: "External influence", correct: false },
            { text: "Every influence", correct: false }
          ],
          explanation: "Free oscillations refer to simple harmonic motion where the system oscillates with a constant amplitude and period without any external influences or damping."
        },
        {
          question: "Energy that results from the relationship between opposite charges is termed",
          answers: [
            { text: "Electromagnetism", correct: false },
            { text: "Electricity", correct: false },
            { text: "Electrostatic", correct: true },
            { text: "Thermodynamics", correct: false }
          ],
          explanation: "Electrostatic energy arises from the interaction between static electric charges. It is the potential energy associated with the electric field created by charges at rest."
        },
        {
          question: "__________ is the capability of a material object or device to store electric charge",
          answers: [
            { text: "Inductance", correct: false },
            { text: "Reactance", correct: false },
            { text: "Capacitance", correct: true },
            { text: "Impedance", correct: false }
          ],
          explanation: "Capacitance is the ability of a system to store an electric charge. It is determined by the geometry of the system and the dielectric material between the plates or conductors."
        },
        {
          question: "In a pure resistive A.C circuits, current and voltage",
          answers: [
            { text: "Are in root", correct: false },
            { text: "At 90° to each other", correct: false },
            { text: "Are in phase", correct: true },
            { text: "In peak", correct: false }
          ],
          explanation: "In a pure resistive AC circuit, the current and voltage are in phase with each other. This means they reach their maximum and minimum values at the same points in time."
        },
        {
          question: "An electron of charge 1.6×10^-19 C is situated in a uniform electric field of intensity 1.2×10^5 V/m. Find its acceleration (mass of electron is 9.1×10^-31 kg)",
          answers: [
            { text: "1.92×10^-14", correct: false },
            { text: "2.11×10^16", correct: true },
            { text: "7.50 ×10^23", correct: false },
            { text: "1.37×10^-24", correct: false }
          ],
          explanation: "The acceleration of an electron in a uniform electric field is given by a = e * E / m, where e is the charge of the electron, E is the electric field intensity, and m is the mass of the electron. Substituting the given values: a = (1.6×10^-19) * (1.2×10^5) / (9.1×10^-31) = 2.11×10^16 m/s^2."
        },
        {
          question: "What is the magnification of the image formed by an object 10cm distant from a concave mirror of focal length 2cm?",
          answers: [
            { text: "1/25", correct: true },
            { text: "-25", correct: false },
            { text: "25", correct: false },
            { text: "-1/25", correct: false }
          ],
          explanation: "The magnification (m) of a mirror is given by m = -v/u, where v is the image distance and u is the object distance. For a concave mirror, v is positive if the image is real and negative if virtual. Given f = 2 cm and u = -10 cm (since the object is 10 cm in front of the mirror), using the mirror formula: 1/f = 1/v + 1/u, we find v = 20 cm. Therefore, m = -20 / -10 = 2. The magnification for a virtual image is positive, so m = 2."
        },
        {
          question: "Static electricity can be referred to as",
          answers: [
            { text: "Electrostatics", correct: true },
            { text: "Electric charge", correct: false },
            { text: "All of the above", correct: false },
            { text: "Electric current", correct: false }
          ],
          explanation: "Static electricity is also known as electrostatics. It deals with the study of stationary electric charges."
        },
        {
          question: "The path followed by the flow of electric current is called",
          answers: [
            { text: "Conductor", correct: false },
            { text: "Voltage", correct: false },
            { text: "Circuit", correct: true },
            { text: "Ampere", correct: false }
          ],
          explanation: "The path followed by the flow of electric current is called a circuit."
        },
        {
          question: "An electric current has the following effect except",
          answers: [
            { text: "Heating effect", correct: false },
            { text: "Magnetic effect", correct: false },
            { text: "Chemical effect", correct: false },
            { text: "Turning effect", correct: true }
          ],
          explanation: "An electric current does not have a turning effect. The other effects listed are well-known properties of electric currents."
        },
        {
          question: "The potentiometer is used to measure all except",
          answers: [
            { text: "Internal resistance", correct: false },
            { text: "Current", correct: true },
            { text: "Period", correct: false },
            { text: "Potential difference", correct: false }
          ],
          explanation: "A potentiometer is used to measure potential difference (voltage), not current. It can also measure other quantities like internal resistance and EMF (electromotive force)."
        },
        {
          question: "What is the electric potential at 30cm from a charged body of 4×10^-9 C? [ε₀ = 8.85×10^-12 F/m]",
          answers: [
            { text: "119.9 V", correct: false },
            { text: "1.199 V", correct: false },
            { text: "399.6 V", correct: true },
            { text: "11.99 V", correct: false }
          ],
          explanation: "The electric potential (V) at a distance r from a point charge q is given by V = k * q / r, where k = 1 / (4πε₀) is the Coulomb's constant. Substituting the given values: V = (1 / (4π * 8.85×10^-12)) * (4×10^-9) / (0.3) = 399.6 V."
        },
        {
          question: "Calculate the magnitude of the force of repulsion between two equal charges of 0.2μC separated by 100cm in a vacuum (k = 9×10^9 N m^2 C^-2)",
          answers: [
            { text: "3.6×10^-7 N", correct: false },
            { text: "3.6×10^-6 N", correct: false },
            { text: "3.6×10^-4 N", correct: true },
            { text: "3.6×10^-9 N", correct: false }
          ],
          explanation: "The magnitude of the electrostatic force between two charges q1 and q2 separated by distance r is given by F = k * |q1 * q2| / r^2, where k is the Coulomb's constant (9×10^9 N m^2 C^-2). Substituting q1 = q2 = 0.2 μC = 2×10^-7 C and r = 100 cm = 1 m: F = (9×10^9) * (2×10^-7)^2 / (1^2) = 3.6×10^-4 N."
        },
        {
          question: "Which of the following increase the sensitivity of a galvanometer?",
          answers: [
            { text: "i, ii and iii", correct: true },
            { text: "iii", correct: false },
            { text: "iii and ii", correct: false },
            { text: "i and ii", correct: false }
          ],
          explanation: "Increasing the sensitivity of a galvanometer can be achieved by using: i. a strong magnet (to increase the magnetic field strength), ii. more turns on the coil (to increase the coil's sensitivity), and iii. a light pointer (to reduce inertia and improve responsiveness). Therefore, i, ii, and iii are correct."
        },
        {
          question: "The blue colour of the sky and the reddish appearance of the sun at both sunrise and sunset is due to",
          answers: [
            { text: "Interference", correct: false },
            { text: "Scattering", correct: true },
            { text: "Refraction", correct: false },
            { text: "Reflection", correct: false }
          ],
          explanation: "The blue color of the sky and the reddish appearance of the sun at sunrise and sunset are primarily due to Rayleigh scattering of sunlight in the Earth's atmosphere."
        },
        {
          question: "A copper wire has a resistance of 10.0Ω at 20°C. What will be the resistance at 80°C?",
          answers: [
            { text: "5.5Ω", correct: false },
            { text: "4.6Ω", correct: false },
            { text: "12.4Ω", correct: true },
            { text: "2.4Ω", correct: false }
          ],
          explanation: "The resistance of a conductor changes with temperature according to the formula: R₂ = R₁ * (1 + α * ΔT), where R₂ is the resistance at the final temperature, R₁ is the resistance at the initial temperature, α is the temperature coefficient of resistance, and ΔT is the change in temperature. For copper, α ≈ 0.00393 / °C. Calculating: R₂ = 10.0Ω * (1 + 0.00393 * (80 - 20)) = 12.4Ω."
        },
        {
          question: "Current through a metallic conductor is directly proportional to the potential constant is",
          answers: [
            { text: "Coulomb's law", correct: false },
            { text: "Joule's law", correct: false },
            { text: "Newton's law", correct: false },
            { text: "Ohm's law", correct: true }
          ],
          explanation: "Ohm's law states that the current (I) flowing through a conductor is directly proportional to the voltage (V) applied across it, provided the temperature and other physical conditions remain constant."
        },
        {
          question: "How much energy is stored in a 20 mH coil when it carries a current of 0.2 A?",
          answers: [
            { text: "0.00004 J", correct: false },
            { text: "0.04 J", correct: false },
            { text: "0.0004 J", correct: true },
            { text: "0.4 J", correct: false }
          ],
          explanation: "The energy stored in an inductor is given by the formula: E = 0.5 * L * I^2, where E is the energy stored, L is the inductance, and I is the current. Substituting L = 20 mH = 20 × 10^-3 H and I = 0.2 A: E = 0.5 * (20 × 10^-3) * (0.2)^2 = 0.0004 J."
        },
        {
          question: "What is the electric potential at 30 cm from a charged body of 4×10^-9 C? [ε₀ = 8.85×10^-12 F/m]",
          answers: [
            { text: "119.9 V", correct: false },
            { text: "1.199 V", correct: false },
            { text: "399.6 V", correct: true },
            { text: "11.99 V", correct: false }
          ],
          explanation: "The electric potential (V) at a distance r from a point charge q is given by V = k * q / r, where k = 1 / (4πε₀) is the Coulomb's constant and ε₀ is the permittivity of free space. Substituting q = 4×10^-9 C and r = 0.3 m: V = (1 / (4π * 8.85×10^-12)) * (4×10^-9) / (0.3) = 399.6 V."
        },
        {
          question: "A wire of uniform cross-sectional area has a length of 10 m, a resistance of 2 Ω, and resistivity of 2×10^-7 Ωm. The area in m² is",
          answers: [
            { text: "1×10^-5", correct: false },
            { text: "2×10^-4", correct: false },
            { text: "0.5×10^-5", correct: false },
            { text: "1×10^-6", correct: true }
          ],
          explanation: "The resistance of a wire is given by R = ρ * (L / A), where ρ is the resistivity, L is the length, A is the cross-sectional area. Solving for A: A = ρ * (L / R) = (2×10^-7) * (10 / 2) = 1×10^-6 m²."
        },
        {
          question: "When the number of electrons is equal to the number of protons, the body is said to be",
          answers: [
            { text: "Charged", correct: false },
            { text: "Neutral", correct: true },
            { text: "Positive", correct: false },
            { text: "Negative", correct: false }
          ],
          explanation: "When the number of electrons is equal to the number of protons in a body, the net charge is zero, and the body is said to be electrically neutral."
        }, {
          question: "A telescope that uses two converging lenses is called",
          answers: [
            { text: "Refraction", correct: false },
            { text: "Compound", correct: true },
            { text: "Simple", correct: false },
            { text: "Reflection", correct: false }
          ],
          explanation: "A telescope that uses two converging lenses is called a compound telescope."
        },
        {
          question: "Which of the following cannot travel through a vacuum",
          answers: [
            { text: "Sound", correct: true },
            { text: "Visible", correct: false },
            { text: "Gamma", correct: false },
            { text: "Radio", correct: false }
          ],
          explanation: "Sound cannot travel through a vacuum because it requires a medium (such as air) for propagation."
        },
        {
          question: "The following are properties of waves except",
          answers: [
            { text: "Reflection", correct: false },
            { text: "Transverse", correct: false },
            { text: "Diffraction", correct: false },
            { text: "Refraction", correct: true }
          ],
          explanation: "Refraction is not a property of waves; it refers to the bending of waves when they pass from one medium to another."
        },
        {
          question: "When friction reduces, natural energy of system as time passes motion is said to be",
          answers: [
            { text: "Random", correct: false },
            { text: "Damped", correct: true },
            { text: "Linear", correct: false },
            { text: "Simple", correct: false }
          ],
          explanation: "When friction reduces the natural energy of a system over time, the motion is described as damped."
        },
        {
          question: "Natural frequency of a given string can be changed by changing its",
          answers: [
            { text: "Stiffness", correct: true },
            { text: "Diameter", correct: false },
            { text: "Length", correct: false },
            { text: "", correct: false }
          ],
          explanation: "The natural frequency of a string can be altered by changing its stiffness."
        },
        {
          question: "Heat can be transferred by these processes except",
          answers: [
            { text: "Radiation", correct: false },
            { text: "Convection", correct: false },
            { text: "Conduction", correct: false },
            { text: "Evaporation", correct: true }
          ],
          explanation: "Evaporation is not a method of heat transfer; it is a cooling process where a liquid turns into vapor."
        },
        {
          question: "______ generate illuminous source of light",
          answers: [
            { text: "Stars", correct: true },
            { text: "Planets", correct: false },
            { text: "Nebulae", correct: false },
            { text: "Moons", correct: false }
          ],
          explanation: "Stars generate their own light and are luminous sources."
        },
        {
          question: "What happens to the rays in a parallel beam of light?",
          answers: [
            { text: "They converge", correct: false },
            { text: "They diverge", correct: false },
            { text: "They remain parallel", correct: true },
            { text: "They scatter", correct: false }
          ],
          explanation: "Rays in a parallel beam of light remain parallel to each other."
        },
        {
          question: "The wave found under the water is",
          answers: [
            { text: "Intensity", correct: false },
            { text: "Transverse", correct: false },
            { text: "Longitudinal", correct: true },
            { text: "Reflection", correct: false }
          ],
          explanation: "Waves under water are typically longitudinal waves."
        },
        {
          question: "The lens thinner at the middle but thicker at the edge is",
          answers: [
            { text: "Diverging", correct: false },
            { text: "Converging", correct: true },
            { text: "", correct: false },
            { text: "", correct: false }
          ],
          explanation: "A lens that is thicker at the edges and thinner in the middle is a converging lens."
        },
        {
          question: "A resistor used as an ammeter is called",
          answers: [
            { text: "Shunt", correct: true },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false }
          ],
          explanation: "A resistor used as an ammeter is often called a shunt."
        },
        {
          question: "A resistor used as a voltmeter is called",
          answers: [
            { text: "Multiplier", correct: true },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false }
          ],
          explanation: "A resistor used as a voltmeter is often called a multiplier."
        },
        {
          question: "Virtual images can be photographed only with the help of ____",
          answers: [
            { text: "A camera", correct: true },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false }
          ],
          explanation: "Virtual images cannot be projected onto a screen, but they can be photographed using a camera."
        },
        {
          question: "A copper wire has a resistance of 10Ω at 20°C. What will be the resistance at 80°C?",
          answers: [
            { text: "5.5Ω", correct: false },
            { text: "4.6Ω", correct: false },
            { text: "12.4Ω", correct: true },
            { text: "2.4Ω", correct: false }
          ],
          explanation: "The resistance of copper wire increases with temperature. The formula used is R₂ = R₁ * (1 + α * ΔT), where α is the temperature coefficient of resistance for copper (approximately 0.00393 / °C)."
        },
        {
          question: "A galvanometer measuring current from 0 to 1 mA has a resistance of 40 ohms. What value of resistor in parallel with the galvanometer will allow it to measure current from 0 to 1 A?",
          answers: [
            { text: "0.04Ω", correct: true },
            { text: "2.53Ω", correct: false },
            { text: "0.24Ω", correct: false },
            { text: "1.42Ω", correct: false }
          ],
          explanation: "To convert a galvanometer into an ammeter capable of measuring higher currents, a shunt resistor is connected in parallel. The resistance of the shunt is calculated using the formula R_shunt = (G * R_g) / (I - G), where G is the full-scale deflection current of the galvanometer and R_g is its resistance."
        },
        {
          question: "If 100 waves pass through a medium in 20 s and their wavelength is 6 cm, what is their velocity?",
          answers: [
            { text: "0.3 m/s", correct: false },
            { text: "0.5 m/s", correct: false },
            { text: "1 m/s", correct: false },
            { text: "25 m/s", correct: true }
          ],
          explanation: "Velocity (v) of waves is given by v = frequency (f) * wavelength (λ). First, calculate the frequency (f) = 100 waves / 20 s = 5 waves/s. Then, v = f * λ = 5 waves/s * 0.06 m = 0.3 m/s."
        },
        {
          question: "Determine the upthrust on an iron cube of volume 400 cm³ if it is totally immersed in oil of density 0.8 g/cm³",
          answers: [
            { text: "4.0 N", correct: true },
            { text: "8.3 N", correct: false },
            { text: "2.4 N", correct: false },
            { text: "3.2 N", correct: false }
          ],
          explanation: "Upthrust (buoyant force) on an object immersed in a fluid is given by the formula: F = ρ * g * V, where ρ is the density of the fluid, g is the acceleration due to gravity, and V is the volume of the displaced fluid."
        },
        {
          question: "Water waves are ______?",
          answers: [
            { text: "Longitudinal", correct: false },
            { text: "Electromagnetic", correct: false },
            { text: "Chemical", correct: false },
            { text: "Transverse", correct: true }
          ],
          explanation: "Water waves are typically transverse waves, where the particles oscillate perpendicular to the direction of wave propagation."
        },
        {
          question: "Which waves are used for underwater communication?",
          answers: [
            { text: "Ultrasonic", correct: false },
            { text: "Radio wave", correct: false },
            { text: "Infrasonic", correct: true },
            { text: "Microwaves", correct: false }
          ],
          explanation: "Infrasonic waves (sound waves with frequencies below the human audible range) are used for underwater communication."
        },
        {
          question: "A positive charge of 3 microcoulombs is surrounded by a sphere with a radius of 0.20 m. The electric flux in the sphere is?",
          answers: [
            { text: "Zero", correct: false },
            { text: "3 μC", correct: false },
            { text: "3 μC/m²", correct: false },
            { text: "3 μC / ε₀", correct: true }
          ],
          explanation: "The electric flux (Φ) through a closed surface is given by Φ = q / ε₀, where q is the charge enclosed by the surface and ε₀ is the permittivity of free space."
        },
        {
          question: "Artificially damped oscillation is characterized by",
          answers: [
            { text: "Constant amplitude", correct: false },
            { text: "Increasing amplitude", correct: false },
            { text: "Decreasing amplitude", correct: true },
            { text: "Oscillations without damping", correct: false }
          ],
          explanation: "Artificially damped oscillation refers to oscillations whose amplitude decreases over time due to damping forces like friction."
        },
        {
          question: "The variation of focal length for a sharp image on the retina is called",
          answers: [
            { text: "Retina center", correct: false },
            { text: "Shutter", correct: false },
            { text: "Depth of field", correct: false },
            { text: "Accommodation", correct: true }
          ],
          explanation: "Accommodation is the process by which the eye changes its focal length to keep images sharply focused on the retina."
        },
        {
          question: "When light enters glass from air",
          answers: [
            { text: "Its wavelength increases and velocity increases", correct: false },
            { text: "Its frequency increases and velocity increases", correct: false },
            { text: "Its frequency decreases and velocity decreases", correct: false },
            { text: "Its wavelength decreases and velocity decreases", correct: true }
          ],
          explanation: "When light enters a denser medium like glass from air, its velocity decreases and its wavelength also decreases according to the formula v = c / n, where c is the speed of light in vacuum and n is the refractive index of the medium."
        },
        {
          question: "The eclipse of the moon occurs when?",
          answers: [
            { text: "When the earth is between the sun and moon", correct: true },
            { text: "Moon is between the sun and earth", correct: false },
            { text: "Earth is between the sun and moon", correct: false },
            { text: "", correct: false }
          ],
          explanation: "A lunar eclipse occurs when the Earth comes between the Sun and the Moon, casting its shadow on the Moon."
        },
        {
          question: "A 4 µF capacitor is used in a radio circuit through which a 5 µF alternating current of 60 Hz flows. The reactance of the capacitor is",
          answers: [
            { text: "6.635 Ω", correct: false },
            { text: "66.35 Ω", correct: true },
            { text: "63.6 Ω", correct: false },
            { text: "663.15 Ω", correct: false }
          ],
          explanation: "Reactance (Xₓ) of a capacitor in an AC circuit is given by Xₓ = 1 / (2πfC), where f is the frequency and C is the capacitance."
        },
        {
          question: "The series resonance circuit is used for",
          answers: [
            { text: "Resonance wave tube experiment", correct: false },
            { text: "Oscillating radio wave", correct: true },
            { text: "Tuning radio receiver", correct: false },
            { text: "Minimizing circuit heat", correct: false }
          ],
          explanation: "A series resonance circuit is used to select a specific frequency from a complex signal or to tune a radio receiver."
        },
        {
          question: "A spherical mirror whose inner surface is silvered is",
          answers: [
            { text: "Concave mirror", correct: true },
            { text: "Convex mirror", correct: false },
            { text: "Plane mirror", correct: false },
            { text: "Curved mirror", correct: false }
          ],
          explanation: "A concave mirror has a reflecting surface on its inner side (concave side), which is typically silvered."
        },
        {
          question: "Which waves are used for underwater communication?",
          answers: [
            { text: "Ultrasonic", correct: false },
            { text: "Radio wave", correct: false },
            { text: "Infrasonic", correct: true },
            { text: "Microwaves", correct: false }
          ],
          explanation: "Infrasonic waves (sound waves with frequencies below the human audible range) are used for underwater communication."
        },
        {
          question: "A mirror whose size of the image is smaller than the object is",
          answers: [
            { text: "Concave mirror", correct: false },
            { text: "Convex mirror", correct: true },
            { text: "Plane mirror", correct: false },
            { text: "Spherical mirror", correct: false }
          ],
          explanation: "A convex mirror produces virtual images that are smaller than the object."
        },
        {
          question: "The distance between the optical center and the focal length is",
          answers: [
            { text: "Radius", correct: false },
            { text: "Half length", correct: false },
            { text: "Focal length", correct: false },
            { text: "Principal axis", correct: true }
          ],
          explanation: "The distance between the optical center (O) of a lens or mirror and its focal point (F) is called the focal length."
        },
        {
          question: "If the acceleration of a body towards a fixed point is directly proportional to its distance from that point and is always directed towards it, the motion is",
          answers: [
            { text: "Translational", correct: false },
            { text: "Random", correct: false },
            { text: "Simple harmonic", correct: true },
            { text: "Rotational", correct: false }
          ],
          explanation: "Simple harmonic motion (SHM) is defined by an acceleration that is directly proportional to displacement and always directed towards a fixed equilibrium point."
        },
        {
          question: "A copper wire has a resistance of 10.0 ohms at 20°C. What will be the resistance at 80°C?",
          answers: [
            { text: "1.2Ω", correct: false },
            { text: "2.4Ω", correct: false },
            { text: "5.5Ω", correct: false },
            { text: "4.6Ω", correct: true }
          ],
          explanation: "The resistance of a conductor changes with temperature according to the formula: R₂ = R₁ * (1 + α * ΔT), where R₂ and R₁ are the resistances at temperatures T₂ and T₁ respectively, α is the temperature coefficient of resistance, and ΔT is the change in temperature."
        },
        {
          question: "The coefficient of friction between a perfectly smooth body and a very rough body is",
          answers: [
            { text: "2.0", correct: false },
            { text: "Zero", correct: true },
            { text: "0.5", correct: false },
            { text: "1.0", correct: false }
          ],
          explanation: "The coefficient of friction is a measure of the resistance to motion between two surfaces in contact. A perfectly smooth body would have zero friction when in contact with any surface."
        },
        {
          question: "When a brick is taken from the Earth's surface to the Moon, its mass becomes",
          answers: [
            { text: "Increases", correct: false },
            { text: "Remains constant", correct: true },
            { text: "Reduces", correct: false },
            { text: "Becomes zero", correct: false }
          ],
          explanation: "Mass is a fundamental property of matter that remains constant regardless of the location in the universe."
        },
        {
          question: "Calculate the increases in length when 1000cm of steel wire of linear expansivity 1.2× 10^−5 per degree Celsius is heated from 0 to 50 degree Celsius",
          answers: [
            { text: "1.2×10^−2 cm", correct: true },
            { text: "6.0×10^−4 cm", correct: false },
            { text: "1006.0 cm", correct: false },
            { text: "6.0 cm", correct: false }
          ],
          explanation: "The increase in length (ΔL) of a material due to heating is given by the formula: ΔL = L₀ * α * ΔT, where L₀ is the original length, α is the linear coefficient of thermal expansion, and ΔT is the change in temperature. Substituting the given values: ΔL = 1000 cm * 1.2×10^−5 /°C * 50°C = 1.2×10^−2 cm."
        },
        {
          question: "The following are the properties of a simple microscope except",
          answers: [
            { text: "Virtual", correct: false },
            { text: "Small magnification", correct: false },
            { text: "Less distorted", correct: false },
            { text: "Object placed between principal focus and the pole of lens", correct: true }
          ],
          explanation: "In a simple microscope, the object is placed very close to the focal point, not between the principal focus and the pole of the lens."
        },
        {
          question: "The size of the image depends on the position of the object in",
          answers: [
            { text: "Convex mirror", correct: true },
            { text: "Silver mirror", correct: false },
            { text: "Plane mirror", correct: false },
            { text: "Concave mirror", correct: false }
          ],
          explanation: "In a convex mirror, the size of the image formed depends on the position of the object."
        },
        {
          question: "Which of the following is correct for an object placed in the center of curvature?",
          answers: [
            { text: "Virtual, Erect, Magnified", correct: false },
            { text: "Real, Inverted, Magnified", correct: false },
            { text: "Virtual, Erect, Diminished", correct: false },
            { text: "Real, Inverted, Magnified", correct: true }
          ],
          explanation: "When an object is placed at the center of curvature of a concave mirror, the image formed is real, inverted, and magnified."
        },
        {
          question: "Find the electric field intensity of an object whose potential is 3.6V and distance is 30m",
          answers: [
            { text: "12.0 V/m", correct: false },
            { text: "8 V/m", correct: true },
            { text: "24 V/m", correct: false },
            { text: "18 V/m", correct: false }
          ],
          explanation: "Electric field intensity (E) is given by E = V / d, where V is the potential and d is the distance. Substituting the given values: E = 3.6V / 30m = 0.12 V/m."
        },
        {
          question: "A 200 kW appliance has a voltage of 40.0 V. Find its current",
          answers: [
            { text: "0.5 A", correct: false },
            { text: "0.05 A", correct: true },
            { text: "50.00 A", correct: false },
            { text: "5.00 A", correct: false }
          ],
          explanation: "Power (P) = Voltage (V) * Current (I). Rearranging gives I = P / V. Substituting the given values: I = 200 kW / 40.0 V = 0.05 A."
        },
        {
          question: "The oscillations of a system in the presence of some resistive force are",
          answers: [
            { text: "Random oscillation", correct: false },
            { text: "Damped oscillation", correct: true },
            { text: "Simple harmonic oscillation", correct: false },
            { text: "Linear oscillation", correct: false }
          ],
          explanation: "Damped oscillation refers to oscillations whose amplitude decreases over time due to damping forces."
        },
        {
          question: "An example of repetitive to-and-fro motion about a mean position",
          answers: [
            { text: "Piston in gasoline engine", correct: false },
            { text: "Mass hanging from a coiled spring", correct: true },
            { text: "Balance wheel of a watch", correct: false },
            { text: "A car going to Kaduna", correct: false }
          ],
          explanation: "Mass hanging from a coiled spring undergoes simple harmonic motion."
        },
        {
          question: "The total capacitance when three capacitors of 0.3 µF, 0.2 µF, and the joint capacitance when arranged to give minimum capacitance",
          answers: [
            { text: "1.0 µF", correct: true },
            { text: "0.2 µF", correct: false },
            { text: "0.1 µF", correct: false },
            { text: "0.3 µF", correct: false }
          ],
          explanation: "When capacitors are connected in parallel, their total capacitance is the sum of individual capacitances. So, 0.3 µF + 0.2 µF = 1.0 µF."
        },
        {
          question: "Two 240 Ω light bulbs are connected in series with a 120 V power source. Calculate the current in each bulb",
          answers: [
            { text: "0.25 A", correct: false },
            { text: "0.20 A", correct: false },
            { text: "0.22 A", correct: true },
            { text: "", correct: false }
          ],
          explanation: "Current (I) in a series circuit is the same through all components. Using Ohm's law: I = V / R. For one bulb: I = 120 V / 240 Ω = 0.5 A. Since they are in series, each bulb will have half of this current, so I = 0.5 A / 2 = 0.25 A."
        },
        {
          question: "A light spiral spring loaded with a mass of 200 g extends by 5 cm. What is the period (taking g = 10 m/s²)",
          answers: [
            { text: "0.63 s", correct: true },
            { text: "1.65 s", correct: false },
            { text: "0.44 s", correct: false }
          ],
          explanation: "The period (T) of a mass-spring system in simple harmonic motion is given by T = 2π√(m / k), where m is the mass and k is the spring constant. First, calculate the force constant (k): k = mg / x = 0.2 kg * 10 m/s² / 0.05 m = 40 N/m. Now, calculate the period: T = 2π√(0.2 kg / 40 N/m) ≈ 0.63 s."
        },
        {
          question: "A point charge of 2.0×10⁻⁷ C experiences a force of 0.02 N in a uniform electric field. Calculate the magnitude of the strength of the field",
          answers: [
            { text: "4×10⁻⁹ N/C", correct: true },
            { text: "1×10⁻⁵ N/C", correct: false },
            { text: "1×10⁻¹⁹ N/C", correct: false },
            { text: "1×10⁵ N/C", correct: false }
          ],
          explanation: "The electric field strength (E) is given by the formula E = F / q, where F is the force experienced by the charge q. Substituting the given values: E = 0.02 N / 2.0×10⁻⁷ C = 4×10⁻⁹ N/C."
        },
        {
          question: "_______ mirror curves inwardly",
          answers: [
            { text: "Concave mirror", correct: true },
            { text: "Convex mirror", correct: false },
            { text: "Reflection mirror", correct: false },
            { text: "Plane mirror", correct: false }
          ],
          explanation: "A concave mirror curves inwardly, towards the center."
        },
        {
          question: "Which of the following is not a ferromagnetic material",
          answers: [
            { text: "Iron", correct: false },
            { text: "Steel", correct: false },
            { text: "Cobalt", correct: false },
            { text: "Copper", correct: true }
          ],
          explanation: "Copper is not a ferromagnetic material."
        },
        {
          question: "An eye defect by which an image appears at a different plane is called",
          answers: [
            { text: "Myopia", correct: false },
            { text: "Hypermetropia", correct: true },
            { text: "Astigmatism", correct: false }
          ],
          explanation: "Hypermetropia (or hyperopia) is an eye defect where the image appears at a plane beyond the retina."
        },
        {
          question: "Which of the following cannot receive ultrasonic",
          answers: [
            { text: "Bat", correct: false },
            { text: "Dolphin", correct: false },
            { text: "Human being", correct: false },
            { text: "Cat", correct: true }
          ],
          explanation: "Cats cannot receive ultrasonic frequencies."
        },
        {
          question: "A light spiral spring loaded with a mass of 250 g extends by 10 cm. What is the frequency of small vertical oscillation (g = 10 m/s²)",
          answers: [
            { text: "1.30 Hz", correct: false },
            { text: "2.20 Hz", correct: false },
            { text: "1.63 Hz", correct: true },
            { text: "1.59 Hz", correct: false }
          ],
          explanation: "The frequency (f) of a mass-spring system in SHM is given by f = 1 / (2π) * √(k / m), where k is the spring constant and m is the mass. First, calculate the spring constant (k): k = mg / x = 0.25 kg * 10 m/s² / 0.1 m = 25 N/m. Now, calculate the frequency: f = 1 / (2π) * √(25 N/m / 0.25 kg) ≈ 1.63 Hz."
        },
        {
          question: "The belief that light consists of tiny particles can be attributed to",
          answers: [
            { text: "Early Greek", correct: false },
            { text: "James Maxwell", correct: false },
            { text: "Isaac Newton", correct: true },
            { text: "Michael Faraday", correct: false }
          ],
          explanation: "Isaac Newton proposed that light consists of tiny particles or corpuscles."
        },
        {
          question: "Artificial damped oscillations are",
          answers: [
            { text: "Heavy, critical, and solid", correct: false },
            { text: "Critical, heavy, and light", correct: false },
            { text: "Solid, critical, and light", correct: false },
            { text: "Solid, light, and heavy", correct: true }
          ],
          explanation: "Artificial damped oscillations can be adjusted to be solid, light, or heavy depending on the damping mechanism."
        },
        {
          question: "An electric current has the following except",
          answers: [
            { text: "Heating effect", correct: false },
            { text: "Tuning effect", correct: true },
            { text: "Magnetic effect", correct: false },
            { text: "Chemical effect", correct: false }
          ],
          explanation: "An electric current does not have a 'tuning effect'. It can cause heating, magnetic effects, and chemical effects."
        },
        {
          question: "A light spiral spring loaded with a mass of 50 g extends by 30 cm. What is the frequency of small vertical oscillation (g = 10 m/s²)",
          answers: [
            { text: "0.45 Hz", correct: true },
            { text: "0.23 Hz", correct: false },
            { text: "1.59 Hz", correct: false },
            { text: "0.92 Hz", correct: false }
          ],
          explanation: "First, calculate the spring constant (k): k = mg / x = 0.05 kg * 10 m/s² / 0.3 m = 1.67 N/m. Now, calculate the frequency: f = 1 / (2π) * √(1.67 N/m / 0.05 kg) ≈ 0.45 Hz."
        },
        {
          question: "Water waves are",
          answers: [
            { text: "Mechanical", correct: true },
            { text: "Electromagnetic", correct: false },
            { text: "Chemical", correct: false },
            { text: "Longitudinal", correct: false }
          ],
          explanation: "Water waves are a form of mechanical waves."
        },
        {
          question: "The following are the defects of lenses except",
          answers: [
            { text: "Distortion", correct: false },
            { text: "Accommodation", correct: true },
            { text: "Chromatic aberration", correct: false },
            { text: "Coma", correct: false }
          ],
          explanation: "Accommodation is not a defect of lenses; it refers to the ability of the eye to adjust focus."
        },
        {
          question: "Three capacitors of values 8 µF, 16 µF, and 32 µF are connected in series. The total capacitance will be",
          answers: [
            { text: "7.32 µF", correct: false },
            { text: "56 µF", correct: true },
            { text: "32 µF", correct: false },
            { text: "7 µF", correct: false }
          ],
          explanation: "When capacitors are connected in series, the reciprocal of the total capacitance is equal to the sum of the reciprocals of the individual capacitances. So, 1 / C_total = 1 / 8 µF + 1 / 16 µF + 1 / 32 µF = 56 µF."
        },
        {
          question: "A bulb of 60 W. Find the current passing through it when it is connected in series with a supply",
          answers: [
            { text: "1.5 A", correct: true },
            { text: "0.25 A", correct: false },
            { text: "0.10 A", correct: false },
            { text: "0.5 A", correct: false }
          ],
          explanation: "Power (P) = Voltage (V) * Current (I). For a 60 W bulb connected in series with a supply, if the supply voltage is known (not provided in the options), the current can be calculated using Ohm's law or the power formula."
        },
        {
          question: "Which instrument will accurately measure the EMF of a cell?",
          answers: [
            { text: "Voltmeter", correct: true },
            { text: "Ammeter", correct: false },
            { text: "Galvanometer", correct: false },
            { text: "Potentiometer", correct: false }
          ],
          explanation: "A voltmeter is specifically designed to measure voltage or EMF (electromotive force) across a circuit element like a cell."
        },
        {
          question: "Who stated the law that the direction of an induced EMF is always such as to oppose the change producing it?",
          answers: [
            { text: "Lenz", correct: true },
            { text: "Faraday", correct: false },
            { text: "Ohm", correct: false },
            { text: "Maxwell", correct: false }
          ],
          explanation: "Lenz's law states that the direction of induced EMF (electromotive force) is always such that it opposes the change in magnetic flux that caused it."
        },
        {
          question: "Alternating current is preferable to DC for the transmission of power because",
          answers: [
            { text: "It has lower energy losses", correct: false },
            { text: "It can be easily stored in batteries", correct: false },
            { text: "It can be transmitted over long distances more efficiently", correct: true },
            { text: "It is safer to use", correct: false }
          ],
          explanation: "AC can be transmitted over long distances more efficiently than DC due to its ability to be easily stepped up or down in voltage using transformers."
        },
        {
          question: "When a current flows in opposite directions through two conductors placed parallel and close to each other, what is produced between them is known as _____",
          answers: [
            { text: "Inductance", correct: false },
            { text: "Capacitance", correct: true },
            { text: "Resonance", correct: false },
            { text: "Impedance", correct: false }
          ],
          explanation: "When current flows in opposite directions through two conductors, capacitance is produced between them."
        },
        {
          question: "A copper wire has a resistance of 10.0 ohms at 20°C. What will be the resistance at 80°C?",
          answers: [
            { text: "1.2 ohms", correct: false },
            { text: "2.4 ohms", correct: false },
            { text: "5.5 ohms", correct: true },
            { text: "4.6 ohms", correct: false }
          ],
          explanation: "The resistance of a conductor increases with temperature. The formula to calculate resistance change due to temperature is: R₂ = R₁ * (1 + αΔT), where R₁ is the resistance at initial temperature, α is the temperature coefficient of resistance, ΔT is the change in temperature. Given α for copper is approximately 0.00393 /°C, ΔT = 80°C - 20°C = 60°C. So, R₂ = 10.0 ohms * (1 + 0.00393 * 60) ≈ 5.5 ohms."
        },
        {
          question: "What is obtained when cells are joined in series?",
          answers: [
            { text: "Current", correct: true },
            { text: "Potential difference", correct: false },
            { text: "Friction", correct: false },
            { text: "Resistance", correct: false }
          ],
          explanation: "When cells are joined in series, their voltages add up, resulting in a higher potential difference across the circuit."
        },
        {
          question: "The change of direction of a wavefront due to a change in velocity is called",
          answers: [
            { text: "Refraction", correct: true },
            { text: "Reflection", correct: false },
            { text: "Polarization", correct: false },
            { text: "Diffraction", correct: false }
          ],
          explanation: "Refraction is the change in direction of a wavefront due to a change in velocity when it passes from one medium to another."
        },
        {
          question: "A device used to increase the visual angle to the eye of an object being observed is",
          answers: [
            { text: "All of the above", correct: true },
            { text: "Optical instrument", correct: false },
            { text: "Mirror", correct: false },
            { text: "Lens", correct: false }
          ],
          explanation: "Optical instruments such as mirrors and lenses are used to increase the visual angle to the eye of an object being observed."
        },
        {
          question: "Three capacitors of capacitance 2 µF, 4 µF, and 8 µF are connected in parallel and a potential difference of 6 V is maintained across each capacitor. The total energy stored is",
          answers: [
            { text: "6.90 × 10⁻⁶ J", correct: false },
            { text: "2.52 × 10⁻⁴ J", correct: false },
            { text: "6.90 × 10⁻⁴ J", correct: true },
            { text: "2.52 × 10⁻⁶ J", correct: false }
          ],
          explanation: "The energy stored in a capacitor is given by E = 1/2 * C * V². When capacitors are in parallel, the total energy stored is the sum of the energies stored in each capacitor. So, E_total = 1/2 * (2 µF + 4 µF + 8 µF) * (6 V)² = 6.90 × 10⁻⁴ J."
        },
        {
          question: "The variation in image magnification is called",
          answers: [
            { text: "Chromatographic", correct: false },
            { text: "Distortion", correct: false },
            { text: "Coma", correct: false },
            { text: "Acceleration", correct: true }
          ],
          explanation: "The variation in image magnification is referred to as acceleration."
        },
        {
          question: "Any system which obeys ________ can exhibit simple harmonic motion.",
          answers: [
            { text: "Hooke's Law", correct: true },
            { text: "Theorenin Theorem", correct: false },
            { text: "Teirch off law", correct: false },
            { text: "Superposition Theorem", correct: false }
          ],
          explanation: "Simple harmonic motion (SHM) occurs when a restoring force is directly proportional to the displacement from equilibrium, as described by Hooke's Law."
        },
        {
          question: "The velocity of simple harmonic motion is always _____",
          answers: [
            { text: "Minimum", correct: false },
            { text: "Zero", correct: false },
            { text: "Maximum", correct: true },
            { text: "Negative", correct: false }
          ],
          explanation: "The velocity of an object undergoing simple harmonic motion is maximum when it passes through the equilibrium position."
        },
        {
          question: "The natural frequency of a spring can be changed by changing",
          answers: [
            { text: "Diameter", correct: false },
            { text: "Stiffness", correct: true },
            { text: "Area", correct: false },
            { text: "Length", correct: false }
          ],
          explanation: "The natural frequency of a spring depends on its stiffness or spring constant (k). Changing the stiffness of the spring will change its natural frequency."
        },
        {
          question: "The quality which does not change during refraction is__",
          answers: [
            { text: "Speed", correct: true },
            { text: "Wavelength", correct: false },
            { text: "Frequency", correct: false },
            { text: "Direction", correct: false }
          ],
          explanation: "During refraction, the speed of light changes, but the frequency (and therefore the wavelength in the medium) remains constant."
        },
        {
          question: "Determine the upthrust on an iron cube of volume 400 cm³ immersed in oil of density 0.8 g/cm³.",
          answers: [
            { text: "3.2 N", correct: true },
            { text: "8.3 N", correct: false },
            { text: "4.0 N", correct: false },
            { text: "2.4 N", correct: false }
          ],
          explanation: "Upthrust (buoyant force) = Volume * Density * Acceleration due to gravity = 400 cm³ * 0.8 g/cm³ * 10 m/s² = 3200 g m/s² = 3.2 N."
        },
        {
          question: "Power is the rate at which _____ is done.",
          answers: [
            { text: "Work", correct: true },
            { text: "Energy", correct: false },
            { text: "Force", correct: false },
            { text: "Time", correct: false }
          ],
          explanation: "Power is defined as the rate at which work is done or energy is transferred."
        },
        {
          question: "_____ IS used in measuring the fluid density in a car",
          answers: [
            { text: "Hydrometer", correct: true },
            { text: "Hygrometer", correct: false },
            { text: "Barometer", correct: false },
            { text: "Manometer", correct: false }
          ],
          explanation: "A hydrometer is used to measure the density of fluids such as coolants in cars."
        },
        {
          question: "Which of the following wave is used in determining the ocean depth",
          answers: [
            { text: "Refraction", correct: false },
            { text: "Reflection", correct: false },
            { text: "Sonar", correct: true },
            { text: "Diffraction", correct: false }
          ],
          explanation: "Sonar waves (Sound Navigation and Ranging) are used to determine ocean depth."
        },
        {
          question: "Which of the following is not a property of light",
          answers: [
            { text: "Reflection", correct: false },
            { text: "Refraction", correct: false },
            { text: "Photoelectric effect", correct: false },
            { text: "Diffraction", correct: true }
          ],
          explanation: "Diffraction is not a property of light but rather a phenomenon associated with wave behavior."
        },
        {
          question: "If the spring is stiff, then the value of k is ____________",
          answers: [
            { text: "Approximately zero", correct: false },
            { text: "Moderate", correct: false },
            { text: "Large", correct: true },
            { text: "Small", correct: false }
          ],
          explanation: "In Hooke's Law, the spring constant (k) is larger for stiffer springs."
        },
        {
          question: "Which of the following wave is not electromagnetic",
          answers: [
            { text: "Radiowave", correct: false },
            { text: "Sound wave", correct: true },
            { text: "X-ray", correct: false },
            { text: "Infra-red ray", correct: false }
          ],
          explanation: "Sound waves are not electromagnetic waves; they are mechanical vibrations."
        },
        {
          question: "The following are examples of repetitive to and fro motion about a mean position",
          answers: [
            { text: "A piston in a gasoline engine", correct: false },
            { text: "A mass hanging from a coiled spring", correct: true },
            { text: "Balance wheel of a watch", correct: false },
            { text: "A car going to kaduna", correct: false }
          ],
          explanation: "A mass hanging from a coiled spring exhibits simple harmonic motion (SHM)."
        },
        {
          question: "Heat can be transferred by these process except",
          answers: [
            { text: "Radiation", correct: false },
            { text: "Conduction", correct: false },
            { text: "Evaporation", correct: false },
            { text: "Convection", correct: true }
          ],
          explanation: "Convection is not a method of heat transfer; it involves the movement of fluid."
        },
        {
          question: "Determine the upthrust on an iron cube of volume 40cm³ totally immersed in oil of density 0.8g/cm³",
          answers: [
            { text: "8.3N", correct: false },
            { text: "2.4N", correct: false },
            { text: "4.0N", correct: false },
            { text: "3.2N", correct: true }
          ],
          explanation: "Upthrust (buoyant force) = Volume * Density * Acceleration due to gravity = 40 cm³ * 0.8 g/cm³ * 10 m/s² = 3200 g·m/s² = 3.2 N."
        },
        {
          question: "Which of the following is not a wavelength",
          answers: [
            { text: "Radiation", correct: true },
            { text: "Conduction", correct: false },
            { text: "Convection", correct: false },
            { text: "Evaporation", correct: false }
          ],
          explanation: "Wavelength refers to the distance between successive crests of a wave, not a mode of heat transfer."
        },
        {
          question: "Power is the rate of a",
          answers: [
            { text: "Energy", correct: false },
            { text: "Kinetic", correct: false },
            { text: "Work", correct: true },
            { text: "Mechanical Energy", correct: false }
          ],
          explanation: "Power is defined as the rate at which work is done or energy is transferred."
        },
        {
          question: "The following are properties of wave except",
          answers: [
            { text: "Transverse", correct: false },
            { text: "Diffraction", correct: false },
            { text: "Refraction", correct: false },
            { text: "Reflection", correct: false }
          ],
          explanation: "Transverse, diffraction, refraction, and reflection are all properties or phenomena associated with waves."
        },
        {
          question: "___________ lens curves inwardly",
          answers: [
            { text: "Reflection", correct: false },
            { text: "Concave mirror", correct: true },
            { text: "Convex mirror", correct: false },
            { text: "Plane mirror", correct: false }
          ],
          explanation: "A concave lens is one that curves inwardly, causing light to converge."
        },
        {
          question: "The unit of electric field intensity is",
          answers: [
            { text: "Newton per second", correct: false },
            { text: "Newton per coulomb", correct: true },
            { text: "", correct: false },
            { text: "", correct: false }
          ],
          explanation: "The electric field intensity is measured in newtons per coulomb (N/C)."
        },
        {
          question: "Metal cable are used as telephone wire because",
          answers: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false }
          ],
          explanation: ""
        },
        {
          question: "The light spiral spring is loaded with the mass of 100g and it extends by 25cm, what is the frequency of small vertical oscillation",
          answers: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false }
          ],
          explanation: ""
        },
        {
          question: "Water waves are _____________",
          answers: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false }
          ],
          explanation: ""
        },
        {
          question: "The minimum deviation when ray of light passes ___________ through the prism",
          answers: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false }
          ],
          explanation: ""
        },
        {
          question: "E.m.f can be defined as the force of____________",
          answers: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false }
          ],
          explanation: ""
        },
        {
          question: "A cell whose internal resistance is 0.5 ohms delivers a current of 4A to an external resistor. The lost voltage of the cell is ______________",
          answers: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false }
          ],
          explanation: ""
        },
        {
          question: "The belief of light that consists of tiny particles can be attributed to",
          answers: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false }
          ],
          explanation: ""
        },
        {
          question: "Which of these can be used at underwater communication",
          answers: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false }
          ],
          explanation: ""
        },
        {
          question: "Current of 2A flows in a coil of e.m.f 12v for 0.4s aback emf of 3v was induced during this period. The store in the loop that can be utilized is",
          answers: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false }
          ],
          explanation: ""
        },
        {
          question: "Platinum wire of 80cm long is to have a resistance of 0.1 ohms. What should its diameter be. Resistivity in platinum is 1.1x 10-7 ohms",
          answers: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false }
          ],
          explanation: ""
        },
        {
          question: "1hp is ____________",
          answers: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false }
          ],
          explanation: ""
        },
        {
          question: "Unit of magnetic induction is _____________",
          answers: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false }
          ],
          explanation: ""
        },
        {
          question: "A bint of charge of 2x10-7 c experience force of 0..02N in the electric field. Calculate the magnitude strength of the field",
          answers: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false }
          ],
          explanation: ""
        },
        {
          question: "The unit of power is _____________",
          answers: [
            { text: "Joules", correct: false },
            { text: "ms-1", correct: false },
            { text: "Watts", correct: true },
            { text: "Candela", correct: false }
          ],
          explanation: "The unit of power is the watt (W)."
        },
        {
          question: "Which of the following is a property of compound microscope",
          answers: [
            { text: "Less distortion", correct: true },
            { text: "Smaller magnification", correct: false },
            { text: "Single converging lens", correct: false },
            { text: "None of the above", correct: false }
          ],
          explanation: "A compound microscope typically offers less distortion in its images."
        },
        {
          question: "1amu = ___________________",
          answers: [
            { text: "931 MeV", correct: true },
            { text: "1 x 10^-19 MeV", correct: false },
            { text: "421 MeV", correct: false },
            { text: "444 MeV", correct: false }
          ],
          explanation: "1 atomic mass unit (amu) is approximately equal to 931 Mega-electron volts (MeV)."
        },
        {
          question: "Three capacitors of capacitance 2 µF, 4 µF, and a p.d of 6V is maintained across each capacitor. The total energy stored is",
          answers: [
            { text: "2.91 x 10^-4 J", correct: false },
            { text: "2.91 x 10^4 J", correct: false },
            { text: "6.90 x 10^-6 J", correct: true },
            { text: "6.90 x 10^-6 J", correct: false }
          ],
          explanation: "The total energy stored in capacitors in parallel is the sum of their individual energies: E_total = 1/2 * (2 µF + 4 µF + 8 µF) * (6 V)^2 = 6.90 x 10^-6 J."
        },
        {
          question: "Mirror that is thinner in the middle and thicker at the end is _____________",
          answers: [
            { text: "Convex mirror", correct: true },
            { text: "Concave mirror", correct: false },
            { text: "Converging lens", correct: false },
            { text: "Diverging lens", correct: false }
          ],
          explanation: "A convex mirror is thinner in the middle and thicker at the ends."
        },
        {
          question: "Which of the following will not receive the ultrasonic",
          answers: [
            { text: "Light", correct: true },
            { text: "Cat", correct: false },
            { text: "Human being", correct: false },
            { text: "Bat", correct: false }
          ],
          explanation: "Ultrasonic waves are not received by light, as light does not interact with sound waves in this frequency range."
        },
        {
          question: "How many lenses does a compound microscope have",
          answers: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false }
          ],
          explanation: "A compound microscope typically contains two lenses: an objective lens and an eyepiece."
        },
        {
          question: "Relative vapour density is measured by ______________",
          answers: [
            { text: "Hydrometer", correct: false },
            { text: "Hygrometer", correct: false },
            { text: "Spectrometer", correct: false },
            { text: "Manometer", correct: false }
          ],
          explanation: "Relative vapor density is measured using a spectrometer."
        },
        {
          question: "____________ is used to measure the refractive index of a glass",
          answers: [
            { text: "Optical instrument", correct: true },
            { text: "Photometer", correct: false },
            { text: "Spectrometer", correct: false },
            { text: "Kaleidoscope", correct: false }
          ],
          explanation: "An optical instrument is used to measure the refractive index of a glass."
        },
        {
          question: "The S.I unit of magnetic induction is ________________",
          answers: [
            { text: "Tesla", correct: true },
            { text: "Ampere", correct: false },
            { text: "Coulomb", correct: false },
            { text: "Farad", correct: false }
          ],
          explanation: "The SI unit of magnetic induction (B) is the tesla (T)."
        },
        {
          question: "Quantity of charge (Q) is equal to ______________",
          answers: [
            { text: "IR", correct: true },
            { text: "IV", correct: false },
            { text: "QV", correct: false },
            { text: "VT", correct: false }
          ],
          explanation: "The quantity of charge (Q) is equal to current (I) multiplied by time (T)."
        },
        {
          question: "Ohm’s law is",
          answers: [
            { text: "V = RR", correct: false },
            { text: "V = R/I", correct: true },
            { text: "V = I/R", correct: false },
            { text: "V = IR", correct: false }
          ],
          explanation: "Ohm's law states that voltage (V) is equal to current (I) multiplied by resistance (R)."
        },
        {
          question: "The position and nature of an object placed 10cm in front of a concave mirror with radius of curvature 12cm is",
          answers: [
            { text: "5.5cm real", correct: true },
            { text: "15cm real", correct: false },
            { text: "5.5cm virtual", correct: false },
            { text: "15cm virtual", correct: false }
          ],
          explanation: "A concave mirror with an object placed 10 cm in front and a radius of curvature of 12 cm will form a real, inverted image at 5.5 cm."
        },
        {
          question: "Which of the following is not a semi-conductor",
          answers: [
            { text: "H", correct: true },
            { text: "Cu", correct: false },
            { text: "Gas", correct: false },
            { text: "H2O", correct: false }
          ],
          explanation: "Hydrogen (H) is not a semiconductor; it is a gas."
        },
        {
          question: "The following are luminous except",
          answers: [
            { text: "Candle", correct: false },
            { text: "Touch", correct: true },
            { text: "Sun", correct: false },
            { text: "Ray of light", correct: false }
          ],
          explanation: "Touch is not a luminous source; it does not emit light."
        },
        {
          question: "The path followed by flow of electric current is _______________",
          answers: [
            { text: "Ampere", correct: false },
            { text: "Voltage", correct: false },
            { text: "Circuit", correct: true },
            { text: "Conduction", correct: false }
          ],
          explanation: "The path followed by the flow of electric current is called a circuit."
        },
        {
          question: "Which is a means of generating luminous source of light",
          answers: [
            { text: "All of the above", correct: true },
            { text: "Thermal conduction of molecules", correct: false },
            { text: "Vibration of molecules", correct: false },
            { text: "Harmonic motion of molecules", correct: false }
          ],
          explanation: "Various methods such as thermal conduction, vibration, and harmonic motion of molecules can generate luminous sources of light."
        },
        {
          question: "In which of the following material medium will sound travel faster",
          answers: [
            { text: "Oil", correct: false },
            { text: "Water", correct: false },
            { text: "Metal", correct: true },
            { text: "Gas", correct: false }
          ],
          explanation: "Sound travels fastest in solids like metals due to their higher elasticity and atomic arrangement."
        },
        {
          question: "Oscillations are damped due to a process, that when a particle executing S.H.M passes through the mean position it has",
          answers: [
            { text: "Maximum K.E and maximum P.E", correct: false },
            { text: "Minimum K.E and minimum P.E", correct: false },
            { text: "Maximum K.E and minimum P.E", correct: true },
            { text: "Maximum K.E and maximum K.E", correct: false }
          ],
          explanation: "Oscillations are damped due to energy losses, resulting in maximum kinetic energy and minimum potential energy at the mean position."
        },
        {
          question: "A galvanometer measuring current 0 to 1 mA, has a resistance of 40 ohms. What is the value of resistor in parallel the galvanometer will use to measure current 0 to 1 A",
          answers: [
            { text: "2.5 ohms", correct: true },
            { text: "0.24 ohms", correct: false },
            { text: "0.04 ohms", correct: false },
            { text: "1.42 ohms", correct: false }
          ],
          explanation: "To convert a galvanometer to an ammeter for a range of 0 to 1 A, a parallel resistor of 2.5 ohms should be used."
        },
        {
          question: "A radio is operated by eight cells, each of e.m.f 2.0 V connected in series. If the cells are wrongly connected, the net e.m.f of the radio is",
          answers: [
            { text: "16V", correct: false },
            { text: "10V", correct: false },
            { text: "12V", correct: false },
            { text: "8V", correct: true }
          ],
          explanation: "If cells with an EMF of 2.0 V each are connected in series, and they are wrongly connected, the net EMF of the radio will be 8V."
        },
        {
          question: "An electric generator with a power of 30 kW, voltage of 1.5 i.e. distributes power to a 100 m cable. The total resistance of the cable is 20.0. What is the power loss in the cable",
          answers: [
            { text: "4.00", correct: false },
            { text: "0.1", correct: false },
            { text: "10.0", correct: true },
            { text: "80.0", correct: false }
          ],
          explanation: "Power loss in the cable can be calculated using P = I^2 * R, where I = V / R. Substituting the values gives 10.0."
        },
        {
          question: "Any system which obeys ______________ can exhibit S.H.M",
          answers: [
            { text: "Kirchoff’s law", correct: false },
            { text: "Hooke’s law", correct: true },
            { text: "Thevenin’s law", correct: false },
            { text: "", correct: false }
          ],
          explanation: "A system that follows Hooke's law (F = -kx) can exhibit simple harmonic motion."
        },
        {
          question: "Examples of optical instruments except",
          answers: [
            { text: "Telescope", correct: false },
            { text: "Scanner", correct: false },
            { text: "Camera", correct: false },
            { text: "Projector", correct: true }
          ],
          explanation: "A projector is not typically considered an optical instrument in the same category as telescopes, scanners, and cameras."
        },
        {
          question: "Calculate the electric dipole length of the charge 6 x 10^-9 C separated by 0.125 N/m",
          answers: [
          { text: "2.19 x 10^-29 m", correct: true },
          { text: "2 x 10^-29 m", correct: false },
          { text: "2.2 x 10^-9 m", correct: false },
          { text: "None of the above", correct: false }
          ],
          explanation: "The electric dipole moment (p) is given by p = q * d, where q is the charge and d is the separation distance. Here, p = (6 x 10^-9 C) * (0.125 N/m) = 7.5 x 10^-10 Cm. The correct option represents this value in meters."
          },
          {
          question: "1 eV is equivalent to ________",
          answers: [
          { text: "764 hp", correct: false },
          { text: "732 hp", correct: false },
          { text: "746 hp", correct: true },
          { text: "744 hp", correct: false }
          ],
          explanation: "1 electron volt (eV) is equivalent to approximately 746 horsepower (hp)."
          },
          {
          question: "A force produced with a resistive force is called",
          answers: [
          { text: "Damped", correct: true },
          { text: "Random", correct: false },
          { text: "Translational", correct: false },
          { text: "None of the above", correct: false }
          ],
          explanation: "A force produced with a resistive force is called damped force, which gradually reduces in amplitude."
          },
          {
          question: "Speed (v) of wave is = product of frequency and ",
          answers: [
          { text: "Vibration", correct: false },
          { text: "Wavelength", correct: true },
          { text: "Amplitude", correct: false },
          { text: "Time period", correct: false }
          ],
          explanation: "The speed (v) of a wave is given by v = frequency * wavelength. Therefore, speed is the product of frequency and wavelength."
          },
          {
          question: "A steady current of 2A flows in a coil of emf 12V for 0.4 seconds. A back emf of 30V was induced during this period. The stored energy in the loop that can be utilized is",
          answers: [
          { text: "2.4 J", correct: false },
          { text: "12.0 J", correct: false },
          { text: "9.6 J", correct: true },
          { text: "0.2 J", correct: false }
          ],
          explanation: "The energy stored in an inductor (coil) is given by E = 1/2 * L * I^2, where L is the inductance and I is the current. Given the back emf, the stored energy that can be utilized is 9.6 joules."
          },
          {
          question: "A point charge of 2.07 x 10^-7 C experiences a force of 0.2 N in a uniform electric field. Compute the magnitude of the strength of the field",
          answers: [
          { text: "1 x 10^4 N/C", correct: true },
          { text: "4 x 10^-5 N/C", correct: false },
          { text: "1 x 10^-5 N/C", correct: false },
          { text: "1 x 10^-9 N/C", correct: false }
          ],
          explanation: "The electric field strength (E) is given by E = F / q, where F is the force experienced by the charge q. Substituting the given values, E = (0.2 N) / (2.07 x 10^-7 C) = 1 x 10^4 N/C."
          },
          {
          question: "The following are advantages of a potentiometer except",
          answers: [
          { text: "Connecting wires may be thin", correct: false },
          { text: "Slow to use", correct: true },
          { text: "No current is drawn from the circuit under test", correct: false },
          { text: "Scale can be varied and made long", correct: false }
          ],
          explanation: "One disadvantage of a potentiometer is that it can be slow to use due to manual adjustments."
          },
          {
          question: "Which of the following cannot travel in a vacuum?",
          answers: [
          { text: "Sound", correct: true },
          { text: "Visible light", correct: false },
          { text: "Gamma rays", correct: false },
          { text: "Radio waves", correct: false }
          ],
          explanation: "Sound waves require a medium (such as air, water, or solids) to propagate and cannot travel through a vacuum."
          },
          {
          question: "The change of direction of a wave front due to a change in velocity is called",
          answers: [
          { text: "Diffraction", correct: false },
          { text: "Refraction", correct: true },
          { text: "Reflection", correct: false },
          { text: "Interference", correct: false }
          ],
          explanation: "Refraction refers to the change in direction of a wave front when it passes from one medium to another with different velocity."
          },
          {
          question: "The lens with a long focal length is",
          answers: [
          { text: "Not strongly curved", correct: false },
          { text: "Thick", correct: false },
          { text: "Both b and c", correct: false },
          { text: "Thin", correct: true }
          ],
          explanation: "A lens with a long focal length tends to be thinner and less strongly curved."
          },
          {
          question: "A charge of magnitude 2 x 10^-4 C experiences a force of 4 x 10^-5 N in an electric field. Find the electric field intensity",
          answers: [
          { text: "5 x 10^5 N/C", correct: true },
          { text: "3.4 x 10^5 N/C", correct: false },
          { text: "2.4 x 10^5 N/C", correct: false },
          { text: "4 x 10^-5 N/C", correct: false }
          ],
          explanation: "The electric field intensity (E) is given by E = F / q, where F is the force experienced by the charge q. Substituting the given values, E = (4 x 10^-5 N) / (2 x 10^-4 C) = 5 x 10^5 N/C."
          },
          {
          question: "A light spiral spring is loaded with a mass of 150 g and it extends by 20 cm. Calculate the frequency",
          answers: [
          { text: "1.13 Hz", correct: true },
          { text: "2.56 Hz", correct: false },
          { text: "0.16 Hz", correct: false },
          { text: "None of the above", correct: false }
          ],
          explanation: "The frequency (f) of a spring-mass system is given by f = (1 / 2π) * sqrt(k / m), where k is the spring constant and m is the mass. In this case, m = 0.15 kg and k = F / x (using Hooke's Law). Calculate k first, then find the frequency."
          },
          {
          question: "Convex mirrors are used as drawing mirrors because",
          answers: [
          { text: "Erect and virtual images", correct: true },
          { text: "Wide field of view", correct: false },
          { text: "They produce upright and diminished images", correct: false },
          { text: "None of the above", correct: false }
          ],
          explanation: "Convex mirrors produce virtual, erect, and diminished images, which are useful for drawing purposes."
          },
          {
          question: " is used to measure the acidity of a car battery",
          answers: [
          { text: "Barometer", correct: false },
          { text: "Hydrometer", correct: true },
          { text: "Hygrometer", correct: false },
          { text: "Manometer", correct: false }
          ],
          explanation: "A hydrometer is a device used to measure the specific gravity (and thus the acidity) of a liquid like battery acid."
          },
          {
          question: "The emission and absorption of light can be best explained using",
          answers: [
          { text: "Reflection model", correct: false },
          { text: "Wave model", correct: false },
          { text: "Refraction model", correct: false },
          { text: "Particle model", correct: true }
          ],
          explanation: "The emission and absorption of light are phenomena best explained using the particle model, where light behaves like photons."
          },
          {
          question: "Which of the following is correct?",
          answers: [
          { text: "Unlike charges repel, like charges attract", correct: true },
          { text: "Repulsion is equal to attraction", correct: false },
          { text: "", correct: false },
          { text: "", correct: false }
          ],
          explanation: "According to Coulomb's law, unlike charges repel each other and like charges attract each other."
          },
          {
          question: "A wire of length 90.0 cm and diameter of 0.3 mm has a resistivity of 11 x 10^-8 ohm m. Calculate the resistance.",
          answers: [
          { text: "12.0 ohms", correct: true },
          { text: "14.00 ohms", correct: false },
          { text: "13.00 ohms", correct: false },
          { text: "10.0 ohms", correct: false }
          ],
          explanation: "The resistance (R) of a wire is given by R = (resistivity * length) / (cross-sectional area). First, calculate the cross-sectional area using the diameter of the wire, then use the formula."
          },
          {
          question: "An object is placed 30.0 cm from a converging lens. If the real image formed is 90.0 cm from the object, what is the focal length?",
          answers: [
          { text: "20.0 cm", correct: false },
          { text: "50.0 cm", correct: true },
          { text: "22.5 cm", correct: false },
          { text: "60.0 cm", correct: false }
          ],
          explanation: "Using the lens formula (1/f = 1/do + 1/di), where do is the object distance and di is the image distance, solve for f."
          },
          {
          question: "A sufficiently high temperature causes all matter to emit visible light due to",
          answers: [
          { text: "Reflection", correct: false },
          { text: "Self-luminous", correct: true },
          { text: "", correct: false },
          { text: "", correct: false }
          ],
          explanation: "At sufficiently high temperatures, all matter emits visible light due to being self-luminous."
          },
          {
          question: "What is the angle of refraction for a light ray of wavelength 589 nm traveling from air to crown glass at an angle of incidence of 30°?",
          answers: [
          { text: "41.10°", correct: true },
          { text: "60°", correct: false },
          { text: "90.20°", correct: false },
          { text: "30°", correct: false }
          ],
          explanation: "Use Snell's law (n1 * sin(theta1) = n2 * sin(theta2)) to find the angle of refraction."
          },
          {
          question: "When a stone is taken from Earth to the Moon, its mass will",
          answers: [
          { text: "Increase", correct: false },
          { text: "Decrease", correct: false },
          { text: "Remain constant", correct: true },
          { text: "None of the above", correct: false }
          ],
          explanation: "The mass of an object remains constant regardless of its location."
          },
          {
          question: "In an inductive circuit,",
          answers: [
          { text: "Current lags voltage by 90°", correct: true },
          { text: "Voltage lags current by 90°", correct: false },
          { text: "", correct: false },
          { text: "", correct: false }
          ],
          explanation: "In an inductive circuit, the current lags the voltage by 90° due to the inductance of the circuit."
          },
          {
          question: "A point on the principal axis at the center of curvature is called",
          answers: [
          { text: "Principal axis", correct: false },
          { text: "Optical center", correct: true },
          { text: "Focal length", correct: false },
          { text: "Principal focus", correct: false }
          ],
          explanation: "The optical center of a lens or mirror is the point on the principal axis at the center of curvature."
          },
          {
          question: "The inability of the eye to see objects clearly is called",
          answers: [
          { text: "Clarity of images", correct: false },
          { text: "Blurry images", correct: false },
          { text: "Defects of vision", correct: true },
          { text: "Small images", correct: false }
          ],
          explanation: "Defects of vision refer to the inability of the eye to see objects clearly."
          },
          {
          question: "What is the speed of light in a fluid where light travels from air to a fluid of refractive index 1.34?",
          answers: [
          { text: "0.74 m/s", correct: false },
          { text: "3 x 10^8 m/s", correct: false },
          { text: "2.25 x 10^8 m/s", correct: true },
          { text: "4.47 x 10^-9 m/s", correct: false }
          ],
          explanation: "The speed of light in a medium is v = c / n, where c is the speed of light in vacuum and n is the refractive index of the medium."
          },
          {
          question: "A copper wire has a resistance of 10.0 ohms at 20°C. What will be the resistance at 80°C?",
          answers: [
          { text: "1.20 ohms", correct: false },
          { text: "5.5 ohms", correct: false },
          { text: "2.4 ohms", correct: false },
          { text: "4.6 ohms", correct: true }
          ],
          explanation: "The resistance of a material changes with temperature according to the formula: R2 = R1 * [1 + α * (T2 - T1)], where α is the temperature coefficient of resistance."
          },
          {
          question: "Calculate the electrostatic force between two electrons separated by a distance of 10^-10 m. Given electronic charge = 1.6 x 10^-19 C (k = 9 x 10^9 Nm^2/C^2)",
          answers: [
          { text: "9 x 10^-8 N", correct: true },
          { text: "1.6 x 10^-19 N", correct: false },
          { text: "1.44 x 10^-28 N", correct: false },
          { text: "None of the above", correct: false }
          ],
          explanation: "The electrostatic force between two charges is given by Coulomb's law: F = (k * q1 * q2) / r^2, where q1 and q2 are the charges, k is the Coulomb constant, and r is the distance between the charges."
          },
          {
          question: "The nature of light is both wave and particle, which is known as",
          answers: [
          { text: "Triple", correct: false },
          { text: "Single", correct: false },
          { text: "Dual", correct: true },
          { text: "Negative", correct: false }
          ],
          explanation: "Light exhibits both wave-like and particle-like properties, known as wave-particle duality."
          },
          {
          question: "For a diverging lens, the focal length is __",
          answers: [
          { text: "Negative", correct: true },
          { text: "Zero", correct: false },
          { text: "Positive", correct: false },
          { text: "Constant", correct: false }
          ],
          explanation: "The focal length of a diverging lens is negative because the light rays diverge after passing through the lens."
          },
          {
          question: "Electric current has the following effects except",
          answers: [
          { text: "Heating effect", correct: false },
          { text: "Chemical effect", correct: false },
          { text: "Turning effect", correct: true },
          { text: "Magnetic effect", correct: false }
          ],
          explanation: "Electric current produces heating, chemical changes (electrolysis), and magnetic effects, but does not produce a turning effect."
          },
          {
          question: "The closed surface in Gauss's law is called",
          answers: [
          { text: "Gauss keyboard", correct: false },
          { text: "Gauss sphere", correct: false },
          { text: "Gauss surface", correct: true },
          { text: "None of the above", correct: false }
          ],
          explanation: "Gauss's law deals with the flux through a closed surface, known as a Gauss surface."
          },
          {
          question: " is a type of surface that can reflect a beam of light in one direction instead of scattering.",
          answers: [
          { text: "All of the above", correct: false },
          { text: "Mirror", correct: true },
          { text: "Prism", correct: false },
          { text: "Lens", correct: false }
          ],
          explanation: "Mirrors are surfaces designed to reflect light in a predictable direction, unlike rough surfaces that scatter light."
          },
          {
          question: "A telescope using a converging lens is",
          answers: [
          { text: "Simple telescope", correct: true },
          { text: "Compound microscope", correct: false },
          { text: "Refracting lens", correct: false },
          { text: "Reflecting lens", correct: false }
          ],
          explanation: "A telescope that uses a converging lens (objective lens) is known as a simple telescope."
          },
          {
          question: "The following are uses of static electricity except",
          answers: [
          { text: "Polythene fabrication", correct: false },
          { text: "Electrostatic paint spray", correct: false },
          { text: "Electrostatic dust collector", correct: false },
          { text: "Galden spray", correct: true }
          ],
          explanation: "Galden spray is not a common use of static electricity; the other options are valid applications."
          },
          {
          question: "The distance between the optical center and the principal focus is called",
          answers: [
          { text: "Focal length", correct: false },
          { text: "Lens length", correct: false },
          { text: "Radius", correct: false },
          { text: "Focal length", correct: true }
          ],
          explanation: "The distance between the optical center and the principal focus of a lens is known as the focal length."
          },
          {
          question: "Which of the following does not change during refraction?",
          answers: [
          { text: "Wavelength", correct: false },
          { text: "Direction", correct: false },
          { text: "Frequency", correct: false },
          { text: "Speed", correct: true }
          ],
          explanation: "Speed is the property of light that changes when it refracts through different media; wavelength, direction, and frequency may change."
          },
          {
          question: "The current passing through a semiconductor is directly proportional to its",
          answers: [
          { text: "Coulomb's law", correct: false },
          { text: "Ohm's law", correct: true },
          { text: "Faraday's law", correct: false },
          { text: "Lenz's law", correct: false }
          ],
          explanation: "Ohm's law states that the current flowing through a conductor is directly proportional to the potential difference applied across it, under constant temperature conditions."
          },
          {
          question: "A p.d of 3.6V is maintained between plates which are 30 cm apart. Calculate the intensity.",
          answers: [
          { text: "4 V/m", correct: true },
          { text: "1.8 V/m", correct: false },
          { text: "18 V/m", correct: false },
          { text: "12 V/m", correct: false }
          ],
          explanation: "Electric field intensity (E) between plates of a capacitor is given by E = V / d, where V is the potential difference and d is the distance between plates."
          },
          {
          question: "A cell whose internal resistance is 0.50 ohms delivers a current of 4A to an external resistor. The lost voltage of the cell is",
          answers: [
          { text: "2.00V", correct: true },
          { text: "0.125V", correct: false },
          { text: "8.00V", correct: false },
          { text: "1.250V", correct: false }
          ],
          explanation: "The lost voltage (Vlost) of a cell is given by Vlost = I * r, where I is the current and r is the internal resistance of the cell."
          },




        // Add more questions for Physics until you have 30
    ]
};

let currentQuestions = [];
let score = 0;
let timer;


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

function startQuiz(subject) {
    currentQuestions = quizData[subject].sort(() => Math.random() - 0.5).slice(0, 30);
    score = 0;
    document.getElementById('subject-selection').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    startTimer(25 * 60); // 25 minutes in seconds
    showQuestions();
}

function startTimer(seconds) {
    const timerElement = document.getElementById('timer');
    timerElement.textContent = formatTime(seconds);
    timer = setInterval(() => {
        seconds--;
        timerElement.textContent = formatTime(seconds);
        if (seconds <= 0) {
            clearInterval(timer);
            submitQuiz();
        }
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 25 ? '0' : ''}${remainingSeconds}`;
}

function showQuestions() {
    const questionContainer = document.getElementById('quiz-container');
    questionContainer.innerHTML = '';
    currentQuestions.forEach((questionData, questionIndex) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'quiz-question';
        questionElement.innerHTML = `<div>${questionIndex + 1}. ${questionData.question}</div>`;
        questionContainer.appendChild(questionElement);

        questionData.answers.forEach((answer, index) => {
            const answerElement = document.createElement('button');
            answerElement.className = 'quiz-answer';
            answerElement.innerHTML = answer.text;
            answerElement.onclick = () => selectAnswer(questionIndex, index);
            questionElement.appendChild(answerElement); 
        });
    });
}

function selectAnswer(questionIndex, answerIndex) {
    const questionElement = document.querySelectorAll('.quiz-question')[questionIndex];
    const answerElements = questionElement.querySelectorAll('.quiz-answer');
    answerElements.forEach(answer => answer.classList.remove('selected'));
    answerElements[answerIndex].classList.add('selected');
    currentQuestions[questionIndex].selected = answerIndex;
}


function submitQuiz() {
    clearInterval(timer);
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';
    currentQuestions.forEach((question, questionIndex) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'quiz-question';
        questionElement.innerHTML = `${questionIndex + 1}. ${question.question}`;
        resultsContainer.appendChild(questionElement);

        question.answers.forEach((answer, answerIndex) => {
            const answerElement = document.createElement('div');
            answerElement.className = 'quiz-answer';
            answerElement.innerHTML = answer.text;
            if (answer.correct) {
                answerElement.classList.add('correct');
            }
            if (question.selected === answerIndex && !answer.correct) {
                answerElement.classList.add('incorrect');
            }
            if (question.selected === answerIndex) {
                answerElement.classList.add('selected');
            }
            resultsContainer.appendChild(answerElement);
        });

        const explanationElement = document.createElement('div');
        explanationElement.className = 'explanation';
        explanationElement.innerHTML = `Explanation: ${question.explanation}`;
        resultsContainer.appendChild(explanationElement);
    });

    // Calculate score
    score = currentQuestions.filter(q => q.selected !== undefined && q.answers[q.selected].correct).length;

    const scoreElement = document.createElement('div');
    scoreElement.className = 'score';
    scoreElement.innerHTML = `Your score: ${score}/${currentQuestions.length}`;
    resultsContainer.appendChild(scoreElement);

    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('results-page').style.display = 'block';
}

function startOver() {
    document.getElementById('results-page').style.display = 'none';
    document.getElementById('subject-selection').style.display = 'block';
}


// Function to go back to the previous page
function goBack() {
  window.history.back('class-page');
}

// Function to go back to the opening page
function goHome() {
  showPage('class-page');
}

function goBackToSyllabus() {
  window.location.href = 'index.html'; // Redirect back to the main page
}