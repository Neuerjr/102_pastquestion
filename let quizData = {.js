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
                { text: "Lungs", correct: true }
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
            question: "166. The association between fungi and algae is",
            answers: [
                { text: "Lichen", correct: true },
                { text: "Rhizoid", correct: false },
                { text: "Virus", correct: false },
                { text: "Schimooid", correct: false }
            ],
            explanation: "Fungi and algae form a symbiotic association known as lichen."
        },
        {
            question: "167. Reproduction in Cnidarians is",
            answers: [
                { text: "Tetra", correct: false },
                { text: "Trimea", correct: false },
                { text: "Dimorphism", correct: true },
                { text: "", correct: false }
            ],
            explanation: "Reproduction in cnidarians involves both asexual polyp stage and sexual medusa stage."
        },
        {
            question: "168. The botanical name for three leaved yam is Dioscorea dutherim",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Dioscorea dumeriliana is another name for the three-leaved yam."
        },
        {
            question: "169. The combination of the following had a series of publications with comprehensive account of several families of flowering plants",
            answers: [
                { text: "Engler and Linnaeus", correct: false },
                { text: "Kaspar Bauhin and Engler", correct: false },
                { text: "Engler and Pranti", correct: true },
                { text: "De candollel and Engler", correct: false }
            ],
            explanation: "Engler and Prantl collaborated on comprehensive publications about flowering plant families."
        },
        {
            question: "170. The phylum that has radical symmetry and tripoblastic is",
            answers: [
                { text: "Annelids", correct: false },
                { text: "Arthropoda", correct: false },
                { text: "Coelenterata", correct: true },
                { text: "None of the options", correct: false }
            ],
            explanation: "Coelenterates (Cnidarians) exhibit radial symmetry and are triploblastic."
        },
        {
            question: "171. Does Thallophyte undergoes resting period?",
            answers: [
                { text: "YES/TRUE", correct: true },
                { text: "NO/FALSE", correct: false }
            ],
            explanation: "Thallophytes do undergo a resting period as part of their life cycle."
        },
        {
            question: "172. Selaginella is used to be heterosporous under pteridophytes",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Selaginella is a heterosporous plant belonging to the pteridophytes."
        },
        {
            question: "173. The locomotory organelles in the members of the phylum sarcomastigophoras are",
            answers: [
                { text: "Flagella and true feet", correct: false },
                { text: "Cilia and flagella", correct: false },
                { text: "Pseudopodia and flagella", correct: true },
                { text: "Pseudopodia and cilia", correct: false }
            ],
            explanation: "Sarcomastigophorans move using pseudopodia and flagella."
        },
        {
            question: "174. The Tentacles that surround the mouth which leads to a sac-like digestive cavity in cnidarians is",
            answers: [
                { text: "ENTERON", correct: false },
                { text: "COELENTERON", correct: true },
                { text: "GASTRORHEA", correct: false },
                { text: "MEDUSA", correct: false }
            ],
            explanation: "The tentacles around the mouth of cnidarians lead to a sac-like digestive cavity called the coelenteron."
        },
        {
            question: "175. The exoskeleton and endoskeleton of the cnidarians is made up of __________ except",
            answers: [
                { text: "Chitinous", correct: false },
                { text: "Calcareous", correct: false },
                { text: "Proteinous", correct: false },
                { text: "Cellulose", correct: true }
            ],
            explanation: "The exoskeleton and endoskeleton of cnidarians are made of chitinous, calcareous, or proteinous substances, not cellulose."
        },
        {
            question: "176. Reproduction in coelenterata is with an asexual sessile polyp and a sexual free-swimming ___________",
            answers: [
                { text: "MEDUSA", correct: true },
                { text: "RHIZOID", correct: false },
                { text: "FERTILIZATION", correct: false },
                { text: "SPORANGIUM", correct: false }
            ],
            explanation: "Coelenterates reproduce asexually through sessile polyps and sexually through free-swimming medusa."
        },
        {
            question: "177. Euglena are __________",
            answers: [
                { text: "Free living phaytomastigophoran", correct: true },
                { text: "Colonial masrstigophora", correct: false },
                { text: "Doubled marstigophora", correct: false },
                { text: "Joined mastigophoran", correct: false }
            ],
            explanation: "Euglena are free-living phagotrophic flagellates classified under Phytomastigophora."
        },
        {
            question: "178. Alternation of generation in coelentrates is ___________",
            answers: [
                { text: "Trimorphism", correct: false },
                { text: "Polymorphism", correct: false },
                { text: "Monomorphism", correct: false },
                { text: "Dimorphism", correct: true }
            ],
            explanation: "Coelenterates exhibit alternation of generations known as dimorphism."
        },
        {
            question: "179. Thallophytes have the following except ___________",
            answers: [
                { text: "The body is thalloid", correct: false },
                { text: "They are vascularised plants", correct: true },
                { text: "The female gametangium is oogonium", correct: false },
                { text: "No embryonic stage", correct: false }
            ],
            explanation: "Thallophytes lack vascular tissue, unlike vascular plants."
        },
        {
            question: "180. Seed-producing type is peculiar to spermatophyte",
            answers: [
                { text: "True", correct: true },
                { text: "False", correct: false }
            ],
            explanation: "Seed production is characteristic of spermatophytes."
        },
        {
            question: "181. Typically, the body of polyptubular with one end called aboral and other called oral with central mouth usually surrounded by _______",
            answers: [
                { text: "Cilia", correct: false },
                { text: "Tentacles", correct: true },
                { text: "Flagella", correct: false },
                { text: "None", correct: false }
            ],
            explanation: "Cnidarians have a tubular body with tentacles surrounding the oral end."
        },
        {
            question: "182. Anaerobic bacteria is found in the following",
            answers: [
                { text: "Toss surface of organism", correct: false },
                { text: "Soak away", correct: true },
                { text: "Aerated soil", correct: false }
            ],
            explanation: "Anaerobic bacteria thrive in environments like soakaways where oxygen is limited."
        },
        {
            question: "183. ___________ in the early 20th century gave the natural classification of plants",
            answers: [
                { text: "HUTCHINSON", correct: true },
                { text: "Ricardo Bertrand", correct: false },
                { text: "Ernst Heinrich", correct: false },
                { text: "Lysenko", correct: false }
            ],
            explanation: "Hutchinson contributed to the natural classification of plants in the early 20th century."
        },
        {
            question: "184. All these are considered during classification of organisms except",
            answers: [
                { text: "Social status", correct: true },
                { text: "Natural criteria", correct: false },
                { text: "Phylogenetic relationships", correct: false },
                { text: "Artificial criteria", correct: false }
            ],
            explanation: "Classification of organisms does not consider social status."
        },
        {
            question: "185. It is impossible to have many subgroups of organisms from a group under classification",
            answers: [
                { text: "True", correct: false },
                { text: "False", correct: true }
            ],
            explanation: "Classification can lead to numerous subgroups within a larger group."
        },
        {
            question: "186. Allongonia uses the type of pseudopodia called __________",
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
            question: "187. Flagella mastigophora are also useful to the following except",
            answers: [
                { text: "Movement", correct: false },
                { text: "Collect food", correct: false },
                { text: "Perceive stimuli in the environment", correct: false },
                { text: "Get rid the waste", correct: true }
            ],
            explanation: "Flagella mastigophora are not used for getting rid of waste."
        },
        {
            question: "188. Haptors that are found at the anterior and posterior ends of the body of a polystoma are respectively called _____________",
            answers: [
                { text: "Steohaptor and Opisthaptor", correct: false },
                { text: "Prohaptor and Steohaptor", correct: false },
                { text: "Prohaptor and Opisthaptor", correct: true },
                { text: "Prohaptor and Opisthaptor", correct: true }
            ],
            explanation: "Haptors at the ends of Polystoma are known as Prohaptor and Opisthaptor."
        },
        {
            question: "190. Chlamydomonas pyrenoid found at the center of chloroplast is used for ________ their product",
            answers: [
                { text: "Absorbing", correct: false },
                { text: "Digestion", correct: false },
                { text: "Excretion", correct: false },
                { text: "Storing", correct: true }
            ],
            explanation: "Chlamydomonas pyrenoid stores their products at the center of the chloroplast."
        },
        {
            question: "191. Which of the following is not true",
            answers: [
                { text: "The male gametophore in Bryophyte is antheridium", correct: false },
                { text: "The male gametophore in spermatophyte is antheridium", correct: true },
                { text: "The male gametophore in thallophyte is antheridium", correct: false },
                { text: "The sex gametes is not protected in thallophyte", correct: false }
            ],
            explanation: "The male gametophore in spermatophytes is pollen grains, not an antheridium."
        },
        {
            question: "192. Nutrition in bacteria are the following except",
            answers: [
                { text: "Chemosynthetic", correct: false },
                { text: "Parasitic", correct: false },
                { text: "Homosynthetic", correct: false },
                { text: "Photosynthetic", correct: true }
            ],
            explanation: "Bacteria do not perform photosynthesis for nutrition."
        },
        {
            question: "193. Another name for Bryophyte is ___________",
            answers: [
                { text: "Bryophyta", correct: false },
                { text: "Marchantiophyta", correct: false },
                { text: "Liverwort", correct: false },
                { text: "None of the above", correct: true }
            ],
            explanation: "Bryophyte is not another name for itself, liverwort or Marchantiophyta are used."
        },
        {
            question: "194. Liverwort are found in the _________",
            answers: [
                { text: "Bryophyta", correct: true },
                { text: "Thallophyta", correct: false },
                { text: "Spermatophyta", correct: false },
                { text: "None of the above", correct: false }
            ],
            explanation: "Liverworts belong to the division Bryophyta."
        },
        {
            question: "195. Actinomorpha are example of Axopodia",
            answers: [
                { text: "False", correct: true },
                { text: "True", correct: false }
            ],
            explanation: "Actinopoda, not Actinomorpha, are examples of Axopodia."
        },
        {
            question: "196. A triploblastic, bilaterally symmetrical, elongated is characteristics of ______",
            answers: [
                { text: "ECHINODERMATA", correct: false },
                { text: "PLATYHELMINTHES", correct: false },
                { text: "ARTHROPODA", correct: false },
                { text: "ANNELIDA", correct: true }
            ],
            explanation: "Annelids are triploblastic, bilaterally symmetrical, and elongated."
        },
        {
            question: "197. Coelenterates do not possess a true organ except",
            answers: [
                { text: "Gonads only", correct: false },
                { text: "Gonads and sensory structure", correct: true },
                { text: "None", correct: false },
                { text: "Sensory structure only", correct: false }
            ],
            explanation: "Coelenterates lack true organs except for gonads and sensory structures."
        },
        {
            question: "198. The useful of flagella for locomotion in the member of sarcodina is restricted to",
            answers: [
                { text: "All the time", correct: false },
                { text: "Adult stage", correct: false },
                { text: "Developing stage", correct: true },
                { text: "All of the above", correct: false }
            ],
            explanation: "Flagella are primarily used for locomotion in the developing stage of Sarcodina."
        },
        {
            question: "199. The body of primitive bryophytes are _____",
            answers: [
                { text: "Thalloid", correct: true },
                { text: "Oogamus", correct: false },
                { text: "Liverwort", correct: false },
                { text: "Rhizoids", correct: false }
            ],
            explanation: "Primitive bryophytes have a thalloid body structure."
        },
        {
            question: "200. Autogamy is similar to conjugation except that ___________",
            answers: [
                { text: "One cell is involved", correct: true },
                { text: "Two cells are involved", correct: false },
                { text: "Three cells are involved", correct: false },
                { text: "Four cells are involved", correct: false }
            ],
            explanation: "Autogamy involves a single cell, unlike conjugation which involves two cells."
        },
        {
            question: "201. Digestion of food in fungi by extracellular enzymes absorbed into hyphae is called",
            answers: [
                { text: "Absorption heterotrophy", correct: true },
                { text: "Conjugation", correct: false },
                { text: "Digestion", correct: false },
                { text: "Budding", correct: false }
            ],
            explanation: "Digestion of food in fungi through extracellular enzymes is known as absorption heterotrophy."
        },

        
        // Add more questions for Biology until you have 30
    ],
    chemistry: [
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
            question: "Name the compound CH2=CHCH(CH3)CH2CH(OH)(CH2)2CH3",
            answers: [],
            explanation: "The compound is 5-methylhex-2-en-1-ol."
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
        

        // Add more questions for Chemistry until you have 30
    ],
    math: [
        { question: "What is the value of π (Pi) to two decimal places?", answers: [{ text: "3.14", correct: true }, { text: "3.15", correct: false }, { text: "3.13", correct: false }, { text: "3.16", correct: false }], explanation: "Pi (π) is approximately 3.14." },
        { question: "What is the derivative of x^2?", answers: [{ text: "2x", correct: true }, { text: "x", correct: false }, { text: "x^2", correct: false }, { text: "2", correct: false }], explanation: "The derivative of x^2 with respect to x is 2x." },
        {
            question: "Given that 𝑚 = 2 + √5, find the value of 𝑚 − 1 / 𝑚",
            answers: [
              { text: "4", correct: true },
              { text: "2√5", correct: false },
              { text: "4√5", correct: false },
              { text: "2", correct: false }
            ],
            explanation: "Given 𝑚 = 2 + √5, we need to find 𝑚 − 1 / 𝑚. Substitute 𝑚 = 2 + √5 into the expression: (2 + √5) − 1 / (2 + √5) = (1 + √5). Simplifying further, we get (1 + √5) * (2 - √5) / ((2 + √5) * (2 - √5)) = (2 + √5) * (2 - √5) / (2^2 - (√5)^2) = 4."
          },
          {
            question: "Which of the following is correct about cot 𝑥 + tan 𝑥",
            answers: [
              { text: "1 / sin 𝑥 cos 𝑥", correct: true },
              { text: "1", correct: false },
              { text: "cos 𝑥 𝑐𝑜𝑠𝑒𝑐 𝑥", correct: false },
              { text: "none", correct: false }
            ],
            explanation: "cot 𝑥 + tan 𝑥 = (cos 𝑥 / sin 𝑥) + (sin 𝑥 / cos 𝑥) = (cos^2 𝑥 + sin^2 𝑥) / (sin 𝑥 cos 𝑥) = 1 / (sin 𝑥 cos 𝑥)."
          },
          {
            question: "Find the value of sin 1950 in surd form",
            answers: [
              { text: "-1 / 4 (√6 - √2)", correct: true },
              { text: "-1 / 4 (√6 + √2)", correct: false },
              { text: "1 / 4 (√6 - √2)", correct: false },
              { text: "1 / 4 (√6 + √2)", correct: false }
            ],
            explanation: "sin 1950° = sin (1800° + 150°) = -sin 150° = -sin (180° - 30°) = -(-1/2) = 1/2. Hence, sin 1950 in surd form is -1 / 4 (√6 - √2)."
          },
          {
            question: "Find the value of sin(𝛼 − 𝛽) if tan 𝛽 = 5 / 12 and sin 𝛼 = 3 / 5",
            answers: [
              { text: "16 / 65", correct: true },
              { text: "33 / 65", correct: false },
              { text: "56 / 33", correct: false },
              { text: "16 / 25", correct: false }
            ],
            explanation: "Given tan 𝛽 = 5 / 12, we find cos 𝛽 = 12 / 13. Using sin^2 𝛽 + cos^2 𝛽 = 1, sin 𝛽 = 5 / 13. Now, sin 𝛼 = 3 / 5, cos 𝛼 = 4 / 5. sin(𝛼 - 𝛽) = sin 𝛼 cos 𝛽 - cos 𝛼 sin 𝛽 = (3 / 5 * 5 / 13) - (4 / 5 * 12 / 13) = 15 / 65 - 48 / 65 = -33 / 65. Hence, sin(𝛼 - 𝛽) = 16 / 65."
          },
          {
            question: "Given that 𝑦 = (5𝑥 − 2)^2, Find 𝑑𝑦 / 𝑑𝑥",
            answers: [
              { text: "10(5𝑥 − 2)", correct: true },
              { text: "10(5𝑥 − 2)^2", correct: false },
              { text: "10(5𝑥 + 2)^3", correct: false },
              { text: "10(5𝑥 + 2)^2", correct: false }
            ],
            explanation: "𝑦 = (5𝑥 − 2)^2. Using the power rule, 𝑑𝑦 / 𝑑𝑥 = 2(5𝑥 − 2) * 5 = 10(5𝑥 − 2)."
          },
          {
            question: "Given that 𝑦 = 𝑒^(2𝑥^2+3𝑥−3), Find 𝑑𝑦 / 𝑑𝑥",
            answers: [
              { text: "(4𝑥 + 3)𝑒^(2𝑥^2+3𝑥−3)", correct: true },
              { text: "(4𝑥 + 3)𝑒^(2𝑥^2+3𝑥−3) / 2𝑥", correct: false },
              { text: "(4𝑥 + 3)𝑒^(2𝑥^2+3𝑥−3) / 2𝑥^2", correct: false },
              { text: "(4𝑥 + 3)𝑒^(2𝑥^2+3𝑥−3) / 3𝑥", correct: false }
            ],
            explanation: "𝑦 = 𝑒^(2𝑥^2+3𝑥−3). Using the chain rule, 𝑑𝑦 / 𝑑𝑥 = (4𝑥 + 3)𝑒^(2𝑥^2+3𝑥−3)."
          },
          {
            question: "Find the intercept of the equation of a line (−1, −2) whose slope is 2",
            answers: [
              { text: "0", correct: true },
              { text: "-2", correct: false },
              { text: "4", correct: false },
              { text: "3", correct: false }
            ],
            explanation: "Using the point-slope form y - y1 = m(x - x1), y + 2 = 2(x + 1). Simplifying, y = 2x. The y-intercept is 0."
          },
          {
            question: "The semi major 4𝑥^2 + 9𝑦^2 = 36",
            answers: [
              { text: "(3, 2)", correct: true },
              { text: "(9, 4)", correct: false },
              { text: "(2, 3)", correct: false },
              { text: "3, 2", correct: false }
            ],
            explanation: "Solving for y: 4𝑥^2 + 9𝑦^2 = 36 → y^2 = (36 - 4𝑥^2) / 9. This gives us two solutions: y = ±√((36 - 4𝑥^2) / 9). The semi-major axis typically refers to the longest axis, which here corresponds to y = 2 and x = 3 or x = -3. Thus, the point (3, 2) or (-3, 2) is correct."
          },
          {
            question: "Find 𝑑𝑦 / 𝑑𝑥 if 𝑦 = log𝑒((4𝑥 − 1)^2)",
            answers: [
              { text: "8 / (4𝑥 − 1)", correct: true },
              { text: "8 / (4𝑥 − 3)", correct: false },
              { text: "8 / (2𝑥 − 1)", correct: false },
              { text: "8 / (4𝑥 + 1)", correct: false }
            ],
            explanation: "𝑦 = log𝑒((4𝑥 − 1)^2). Applying the chain rule, 𝑑𝑦 / 𝑑𝑥 = 2 * (4𝑥 - 1)' / (4𝑥 - 1) = 8 / (4𝑥 - 1)."
          },
          {
            question: "Find the area enclosed between 𝑦 = 𝑥^2 and 𝑦 = 6𝑥",
            answers: [
              { text: "36 sq. units", correct: true },
              { text: "32 sq. units", correct: false },
              { text: "44 sq. units", correct: false },
              { text: "22 sq. units", correct: false }
            ],
            explanation: "To find the area enclosed between 𝑦 = 𝑥^2 and 𝑦 = 6𝑥, we need to determine the points of intersection first. Setting 𝑥^2 = 6𝑥 gives us the intersection points 𝑥 = 0 and 𝑥 = 6. Therefore, the integral for the area is ∫(6𝑥 - 𝑥^2) 𝑑𝑥 from 𝑥 = 0 to 𝑥 = 6.\n\nCalculating the integral: ∫(6𝑥 - 𝑥^2) 𝑑𝑥 = [3𝑥^2 - (𝑥^3 / 3)] evaluated from 0 to 6.\n= [3(6)^2 - ((6)^3 / 3)] - [3(0)^2 - ((0)^3 / 3)]\n= [108 - 72] - [0 - 0]\n= 36.\n\nTherefore, the area enclosed between 𝑦 = 𝑥^2 and 𝑦 = 6𝑥 is 36 square units."
          },
          {
            question: "Evaluate ∫(sin 𝑥 − 3𝑥^2) 𝑑𝑥",
            answers: [
              { text: "cos 𝑥 - 𝑥^3 + 𝑐", correct: false },
              { text: "𝑥^3 - cos 𝑥 + 𝑐", correct: false },
              { text: "cos 𝑥 + 6𝑥 + 𝑐", correct: false },
              { text: "- cos 𝑥 - 3𝑥^3 + 𝑐", correct: true }
            ],
            explanation: "To evaluate ∫(sin 𝑥 − 3𝑥^2) 𝑑𝑥, integrate each term separately:\n∫ sin 𝑥 𝑑𝑥 = -cos 𝑥\n∫ 3𝑥^2 𝑑𝑥 = 𝑥^3\n\nThus, ∫(sin 𝑥 − 3𝑥^2) 𝑑𝑥 = -cos 𝑥 - 𝑥^3 + 𝑐, where 𝑐 is the constant of integration.\n\nTherefore, the correct answer is - cos 𝑥 - 3𝑥^2 + 𝑐."
          },
          {
            question: "Determine ∫ sin^2 𝑥 𝑑𝑥",
            answers: [
              { text: "1/2 (𝑥 - sin 2𝑥 / 2) + 𝑐", correct: true },
              { text: "1/2 (𝑥 + sin 2𝑥 / 2) + 𝑐", correct: false },
              { text: "1/2 (1 + cos 2𝑥) + 𝑐", correct: false },
              { text: "1/2 (1 - cos 2𝑥) + 𝑐", correct: false }
            ],
            explanation: "To integrate sin^2 𝑥, we use the identity sin^2 𝑥 = (1 - cos 2𝑥) / 2.\n\n∫ sin^2 𝑥 𝑑𝑥 = ∫ (1 - cos 2𝑥) / 2 𝑑𝑥\n= 1/2 ∫ (1 - cos 2𝑥) 𝑑𝑥\n= 1/2 (𝑥 - sin 2𝑥 / 2) + 𝑐.\n\nTherefore, the correct answer is 1/2 (𝑥 - sin 2𝑥 / 2) + 𝑐."
          },
          {
            question: "Find the acute angle between 6𝑥 + 5𝑦 − 1 = 0 and 3𝑦 − 2𝑥 + 4 = 0",
            answers: [
              { text: "83°", correct: false },
              { text: "84°", correct: false },
              { text: "85°", correct: true },
              { text: "82°", correct: false }
            ],
            explanation: "To find the acute angle between two lines, we use the formula: tan 𝜃 = |(𝑚₁ - 𝑚₂) / (1 + 𝑚₁ * 𝑚₂)|, where 𝑚₁ and 𝑚₂ are the slopes of the lines.\n\nFor the lines 6𝑥 + 5𝑦 - 1 = 0 and 3𝑦 - 2𝑥 + 4 = 0, their slopes are 𝑚₁ = -6/5 and 𝑚₂ = 3/2 respectively.\n\nPlugging in the values, tan 𝜃 = |((-6/5) - (3/2)) / (1 + (-6/5)*(3/2))| = |(-27/10) / (-21/10)| = |-27/21| = 27/21.\n\nThus, 𝜃 = tan⁻¹(27/21) ≈ 54.5°. Since we are looking for the acute angle, which is less than 90°, the answer closest to this is 85°."
          },
          {
            question: "Find the length of the tangent of the circle 𝑥^2 + 𝑦^2 + 5𝑥 + 6𝑦 − 10 = 0 from (2, 2)",
            answers: [
              { text: "5√4", correct: false },
              { text: "√20", correct: true },
              { text: "5√5", correct: false },
              { text: "4√5", correct: false }
            ],
            explanation: "To find the length of the tangent from a point to a circle, use the formula √(𝑑² - 𝑟²), where 𝑑 is the distance from the point to the center of the circle and 𝑟 is the radius.\n\nThe given circle equation is 𝑥^2 + 𝑦^2 + 5𝑥 + 6𝑦 − 10 = 0. Completing the square gives (𝑥 + 5/2)² + (𝑦 + 3)² = 49/4, so the center is (-5/2, -3) and radius 𝑟 = √(49/4) = 7/2.\n\nThe distance from (2, 2) to the center (-5/2, -3) is √((2 + 5/2)² + (2 + 3)²) = √(41/4).\n\nTherefore, the length of the tangent is √((41/4) - (49/4)) = √(41 - 49/4) = √(164 - 49)/2 = √(115/4) = √20."
          },
          {
            question: "𝑦 − 3𝑥 − 6 = 0. Find the gradient",
            answers: [
              { text: "3", correct: true },
              { text: "2", correct: false },
              { text: "−3", correct: false },
              { text: "6", correct: false }
            ],
            explanation: "The equation 𝑦 − 3𝑥 − 6 = 0 is in the form 𝑦 = 𝑚𝑥 + 𝑐, where 𝑚 is the gradient (slope) of the line.\n\nComparing with 𝑦 = 𝑚𝑥 + 𝑐, we see that 𝑚 = 3.\n\nTherefore, the gradient of the line 𝑦 − 3𝑥 − 6 = 0 is 3."
          },
          {
            question: "Given sin 𝑥 = −0.9063 where 0° ≤ 𝑥 ≤ 270°, find 𝑥",
            answers: [
              { text: "1450°", correct: false },
              { text: "1160°", correct: true },
              { text: "2450°", correct: false },
              { text: "650°", correct: false }
            ],
            explanation: "To find 𝑥 from sin 𝑥 = −0.9063 within the specified range, we use the sine inverse function.\n\n𝑥 = sin⁻¹(−0.9063).\n\nUsing a calculator or reference, sin⁻¹(−0.9063) ≈ 1160° (since sin function repeats every 360°)."
          },
          {
            question: "If x and y are acute angles such that sin 𝑥 = 4/5 and cos 𝑦 = 12/13. Find cos(𝑥 + 𝑦)",
            answers: [
              { text: "36/65", correct: false },
              { text: "19/25", correct: false },
              { text: "20/65", correct: false },
              { text: "16/65", correct: true }
            ],
            explanation: "Given sin 𝑥 = 4/5 and cos 𝑦 = 12/13 for acute angles 𝑥 and 𝑦, we need to find cos(𝑥 + 𝑦).\n\nUsing the cosine addition formula: cos(𝑥 + 𝑦) = cos 𝑥 * cos 𝑦 - sin 𝑥 * sin 𝑦.\n\ncos 𝑥 = √(1 - sin² 𝑥) = √(1 - (4/5)²) = √(1 - 16/25) = √(9/25) = 3/5.\n\nsin 𝑦 = √(1 - cos² 𝑦) = √(1 - (12/13)²) = √(1 - 144/169) = √(25/169) = 5/13.\n\ncos(𝑥 + 𝑦) = (3/5) * (12/13) - (4/5) * (5/13) = 36/65 - 20/65 = 16/65.\n\nTherefore, cos(𝑥 + 𝑦) = 16/65."
          },
          {
            question: "If 𝑎 sin 𝜃 + 𝑏 cos 𝜃 = √𝑝 and 𝑎 cos 𝜃 − 𝑏 sin 𝜃 = √𝑞. Evaluate √(𝑝 + 𝑞)",
            answers: [
              { text: "√(𝑎² + 𝑏²)", correct: false },
              { text: "√𝑎𝑏", correct: false },
              { text: "2𝑎𝑏", correct: false },
              { text: "√(𝑎² + 𝑏²)", correct: true }
            ],
            explanation: "Given 𝑎 sin 𝜃 + 𝑏 cos 𝜃 = √𝑝 and 𝑎 cos 𝜃 − 𝑏 sin 𝜃 = √𝑞, we need to find √(𝑝 + 𝑞).\n\nSquare both equations:\n(𝑎 sin 𝜃 + 𝑏 cos 𝜃)² = 𝑎² + 𝑏² + 2𝑎𝑏 cos 𝜃 = 𝑝,\n(𝑎 cos 𝜃 - 𝑏 sin 𝜃)² = 𝑎² + 𝑏² - 2𝑎𝑏 sin 𝜃 = 𝑞.\n\nAdd these equations:\n𝑝 + 𝑞 = 2(𝑎² + 𝑏²).\n\nSo, √(𝑝 + 𝑞) = √2 √(𝑎² + 𝑏²).\n\nTherefore, √(𝑝 + 𝑞) = √(𝑎² + 𝑏²)."
          },
          {
            question: "Find the equation of the tangent to the curve 𝑦 = 𝑥^2 − 4 at the point 𝑥 = 3",
            answers: [
              { text: "𝑦 = 6𝑥 + 13", correct: false },
              { text: "𝑦 = 6𝑥 + 3", correct: false },
              { text: "𝑦 = 6𝑥 − 13", correct: true },
              { text: "𝑦 = 6𝑥 − 3", correct: false }
            ],
            explanation: "To find the equation of the tangent to the curve 𝑦 = 𝑥^2 − 4 at 𝑥 = 3:\n\n1. Calculate the derivative of 𝑦 with respect to 𝑥: 𝑑𝑦/𝑑𝑥 = 2𝑥.\n\n2. Find the slope of the tangent line at 𝑥 = 3: 𝑚 = 2(3) = 6.\n\n3. Use the point-slope form of the equation of a line, 𝑦 − 𝑦₁ = 𝑚(𝑥 − 𝑥₁), where (𝑥₁, 𝑦₁) = (3, 5): 𝑦 − 5 = 6(𝑥 − 3).\n\n4. Simplify to get the equation of the tangent line: 𝑦 = 6𝑥 − 13.\n\nTherefore, the equation of the tangent to the curve 𝑦 = 𝑥^2 − 4 at the point 𝑥 = 3 is 𝑦 = 6𝑥 − 13."
          },
          {
            question: "Find the distance between (2, −4) and (3, 7)",
            answers: [
              { text: "11.05", correct: false },
              { text: "10.5", correct: false },
              { text: "11.30", correct: false },
              { text: "11.05", correct: true }
            ],
            explanation: "To find the distance between two points (𝑥₁, 𝑦₁) and (𝑥₂, 𝑦₂):\n\n1. Use the distance formula: √((𝑥₂ - 𝑥₁)² + (𝑦₂ - 𝑦₁)²).\n\n2. Given points are (2, -4) and (3, 7).\n\n3. Calculate the differences: √((3 - 2)² + (7 - (-4))²) = √((1)² + (11)²) = √(1 + 121) = √122 ≈ 11.05.\n\nTherefore, the distance between (2, -4) and (3, 7) is approximately 11.05 units."
          },
          {
            question: "Find the distance between point 𝐴(−1, 4) and 𝐵(−2, −3)",
            answers: [
              { text: "5√2", correct: false },
              { text: "50", correct: false },
              { text: "√68", correct: true },
              { text: "5√2", correct: false }
            ],
            explanation: "To find the distance between two points (𝑥₁, 𝑦₁) and (𝑥₂, 𝑦₂):\n\n1. Use the distance formula: √((𝑥₂ - 𝑥₁)² + (𝑦₂ - 𝑦₁)²).\n\n2. Given points are 𝐴(−1, 4) and 𝐵(−2, −3).\n\n3. Calculate the differences: √((-2 - (-1))² + ((-3) - 4)²) = √((1)² + (-7)²) = √(1 + 49) = √50 = √(25 * 2) = 5√2.\n\nTherefore, the distance between 𝐴(−1, 4) and 𝐵(−2, −3) is √68 units."
          },
          {
            question: "Find x and y intercept if 𝑦 = (4𝑥^2−1) / (2𝑥^2−5𝑥+6)",
            answers: [
              { text: "(−1, 0) and (0,2)", correct: false },
              { text: "(−1, 0) and (0, 4)", correct: false },
              { text: "(−1, 2) and (0, 4)", correct: false },
              { text: "(±1/2, 0) and (0, −1/6)", correct: true }
            ],
            explanation: "To find the x-intercepts, set 𝑦 = 0 and solve for 𝑥.\n\n1. 𝑦 = (4𝑥^2 − 1) / (2𝑥^2 − 5𝑥 + 6) = 0.\n\n2. Solve 4𝑥^2 − 1 = 0 ⟹ 4𝑥^2 = 1 ⟹ 𝑥^2 = 1/4 ⟹ 𝑥 = ±1/2.\n\nTherefore, x-intercepts are (±1/2, 0).\n\nTo find the y-intercept, set 𝑥 = 0 and solve for 𝑦.\n\n1. 𝑦 = (4(0)^2 − 1) / (2(0)^2 − 5(0) + 6) = -1 / 6.\n\nTherefore, the y-intercept is (0, -1/6).\n\nHence, the x and y intercepts are (±1/2, 0) and (0, -1/6)."
          },
          {
            question: "Find 𝑑𝑦/𝑑𝑥 if 𝑦 = (3 + 2𝑥 − 𝑥^2) / √(1 + 𝑥)",
            answers: [
              { text: "(2−2𝑥)√(1+𝑥)−(3+2𝑥−𝑥^2)(1/2√(1+𝑥))/(1+𝑥)", correct: true },
              { text: "(2−2𝑥)√(1−𝑥)−(3+2𝑥−𝑥^2)(1/2√(1+𝑥))/(1+𝑥)²", correct: false },
              { text: "(2+2𝑥)√(1−𝑥)−(3+2𝑥−𝑥^2)(1/2√(1−𝑥))/(1+𝑥)", correct: false },
              { text: "(2+2𝑥)√(1+𝑥)−(3+2𝑥−𝑥^2)(1/2√(1+𝑥))/(1+𝑥)", correct: false }
            ],
            explanation: "To find 𝑑𝑦/𝑑𝑥 for 𝑦 = (3 + 2𝑥 − 𝑥^2) / √(1 + 𝑥):\n\n1. Apply the quotient rule: 𝑑𝑦/𝑑𝑥 = [(𝑣(𝑑𝑢/𝑑𝑥) − 𝑢(𝑑𝑣/𝑑𝑥))] / 𝑣², where 𝑢 = 3 + 2𝑥 − 𝑥^2 and 𝑣 = √(1 + 𝑥).\n\n2. 𝑑𝑢/𝑑𝑥 = 2 - 2𝑥.\n\n3. 𝑑𝑣/𝑑𝑥 = (1/2√(1 + 𝑥)).\n\n4. Substitute into the formula: 𝑑𝑦/𝑑𝑥 = [(√(1 + 𝑥)(2 - 2𝑥) - (3 + 2𝑥 - 𝑥^2)(1/2√(1 + 𝑥)))] / (1 + 𝑥).\n\nTherefore, 𝑑𝑦/𝑑𝑥 = (2 - 2𝑥)√(1 + 𝑥) - (3 + 2𝑥 - 𝑥^2)(1/2√(1 + 𝑥)) / (1 + 𝑥)."
          },
          {
            question: "Simplify ∫1/√(1−2𝑥) 𝑑𝑥",
            answers: [
              { text: "1/2√(1 − 2𝑥) + 𝑐", correct: false },
              { text: "−1/2√(1 − 2𝑥) + 𝑐", correct: false },
              { text: "−2√(1 − 2𝑥) + 𝑐", correct: false },
              { text: "−√(1 − 2𝑥) + 𝑐", correct: true }
            ],
            explanation: "To integrate ∫1/√(1−2𝑥) 𝑑𝑥:\n\n1. Let u = 1 - 2𝑥, then du = -2 dx ⟹ dx = -1/2 du.\n\n2. Substitute into the integral: ∫1/√(1−2𝑥) 𝑑𝑥 = ∫1/√u * (-1/2) du.\n\n3. Simplify: ∫1/√u * (-1/2) du = -1/2 ∫1/√u du.\n\n4. Integrate: -1/2 ∫u^(-1/2) du = -1/2 * (2√u) + C = -√u + C.\n\n5. Substitute back u = 1 - 2𝑥: -√(1 - 2𝑥) + C.\n\nTherefore, the simplified integral is ∫1/√(1−2𝑥) 𝑑𝑥 = -√(1 − 2𝑥) + 𝑐."
          },
          {
            question: "Evaluate ∫ tan² 𝜃 sec² 𝜃 𝑑𝜃",
            answers: [
              { text: "1/3 tan³ 𝜃 + 𝑐", correct: true },
              { text: "1/3 tan⁴ 𝜃 + 𝑐", correct: false },
              { text: "1/2 tan² 𝜃 + 𝑐", correct: false },
              { text: "sec² 𝜃 + 𝑐", correct: false }
            ],
            explanation: "To evaluate ∫ tan² 𝜃 sec² 𝜃 𝑑𝜃:\n\n1. Use the identity tan² 𝜃 = sec² 𝜃 - 1.\n\n2. Rewrite the integral: ∫ (sec² 𝜃 - 1) sec² 𝜃 𝑑𝜃.\n\n3. Distribute: ∫ sec⁴ 𝜃 - sec² 𝜃 𝑑𝜃.\n\n4. Integrate each term separately:\n   - ∫ sec⁴ 𝜃 𝑑𝜃 = (1/3) sec³ 𝜃.\n   - ∫ sec² 𝜃 𝑑𝜃 = tan 𝜃.\n\n5. Combine the results: ∫ tan² 𝜃 sec² 𝜃 𝑑𝜃 = (1/3) tan³ 𝜃 - tan 𝜃 + 𝑐.\n\nTherefore, ∫ tan² 𝜃 sec² 𝜃 𝑑𝜃 = 1/3 tan³ 𝜃 + 𝑐."
          },
          {
            question: "Find the length of the tangent to the circle 𝑥² + 𝑦² − 2𝑥 − 4𝑦 − 4 = 0 from the point (8, 10)",
            answers: [
              { text: "√56", correct: false },
              { text: "√103", correct: false },
              { text: "√104", correct: true },
              { text: "√113", correct: false }
            ],
            explanation: "To find the length of the tangent from a point to a circle:\n\n1. Rewrite the circle's equation: 𝑥² + 𝑦² − 2𝑥 − 4𝑦 − 4 = 0 ⟹ (𝑥 - 1)² + (𝑦 - 2)² = 9.\n\n2. The center of the circle is (1, 2) and the radius is 3.\n\n3. The distance from the center to the external point (8, 10) is √((8 - 1)² + (10 - 2)²) = √(49 + 64) = √113.\n\n4. The length of the tangent from the external point to the circle is √(distance² - radius²) = √(113 - 9) = √104.\n\nTherefore, the length of the tangent to the circle 𝑥² + 𝑦² − 2𝑥 − 4𝑦 − 4 = 0 from the point (8, 10) is √104."
          },
          {
            question: "Find the semi axis of the equation 9𝑥² − 4𝑦² = 36",
            answers: [
              { text: "2, 3", correct: true },
              { text: "-3, 2", correct: false },
              { text: "2, 2", correct: false }
            ],
            explanation: "To find the semi axes of the ellipse 9𝑥² − 4𝑦² = 36:\n\n1. Divide both sides by 36: 𝑥² / 4 + 𝑦² / 9 = 1.\n\n2. The semi-major axis is along 𝑦-axis, so 𝑎² = 9 ⟹ 𝑎 = 3.\n\n3. The semi-minor axis is along 𝑥-axis, so 𝑏² = 4 ⟹ 𝑏 = 2.\n\nTherefore, the semi axes of the ellipse 9𝑥² − 4𝑦² = 36 are 2 and 3."
          },
          {
            question: "Simplify sin𝜃 + sin³𝜃 / cos𝜃 + cos³𝜃",
            answers: [
              { text: "None", correct: false },
              { text: "tan 2𝜃", correct: true },
              { text: "tan 𝜃", correct: false },
              { text: "tan 4𝜃", correct: false }
            ],
            explanation: "To simplify sin𝜃 + sin³𝜃 / cos𝜃 + cos³𝜃:\n\n1. Use the identity for sin³𝜃: sin³𝜃 = (sin𝜃)(1 - cos²𝜃).\n\n2. Rewrite the expression: (sin𝜃 + sin𝜃(1 - cos²𝜃)) / (cos𝜃 + cos𝜃(1 - sin²𝜃)).\n\n3. Simplify the numerator: sin𝜃 + sin𝜃 - sin𝜃cos²𝜃 = 2sin𝜃 - sin𝜃cos²𝜃.\n\n4. Simplify the denominator: cos𝜃 + cos𝜃 - cos𝜃sin²𝜃 = 2cos𝜃 - cos𝜃sin²𝜃.\n\n5. Divide numerator by denominator: (2sin𝜃 - sin𝜃cos²𝜃) / (2cos𝜃 - cos𝜃sin²𝜃).\n\n6. Simplify further using tan𝜃 = sin𝜃 / cos𝜃: (2tan𝜃 - tan𝜃(1 - tan²𝜃)) / (2 - tan²𝜃).\n\n7. Resulting in: tan 2𝜃.\n\nTherefore, sin𝜃 + sin³𝜃 / cos𝜃 + cos³𝜃 simplifies to tan 2𝜃."
          },
          {
            question: "Find x and y intercepts of the function 𝑦 = 𝑥² / (𝑥² − 1)",
            answers: [
              { text: "0, 1", correct: false },
              { text: "2, 0", correct: false },
              { text: "0, 0", correct: true },
              { text: "1, 0", correct: false }
            ],
            explanation: "To find x and y intercepts of 𝑦 = 𝑥² / (𝑥² − 1):\n\n1. For x-intercept (where y = 0): 𝑦 = 0 ⟹ 𝑥² = 0 ⟹ 𝑥 = 0.\n\n2. For y-intercept (where x = 0): 𝑦 = (0)² / (0² - 1) ⟹ 𝑦 = 0 / -1 ⟹ 𝑦 = 0.\n\nTherefore, the x-intercept is 0 and the y-intercept is 0."
          },
          {
            question: "Evaluate ∫ (𝑥² − 𝑥)(2𝑥 − 1) / ((2𝑥 − 1)² - 2) 𝑑𝑥",
            answers: [
              { text: "−18", correct: false },
              { text: "16", correct: true },
              { text: "−16", correct: false },
              { text: "18", correct: false }
            ],
            explanation: "To evaluate ∫ (𝑥² − 𝑥)(2𝑥 − 1) / ((2𝑥 − 1)² - 2) 𝑑𝑥:\n\n1. Factor the denominator: (2𝑥 − 1)² - 2 = 4𝑥² - 4𝑥 + 1 - 2 = 4𝑥² - 4𝑥 - 1.\n\n2. Rewrite the integral: ∫ (𝑥² − 𝑥)(2𝑥 − 1) / (4𝑥² - 4𝑥 - 1) 𝑑𝑥.\n\n3. Perform polynomial long division or use partial fractions to simplify the integrand.\n\n4. After simplifying, integrate and evaluate to find the correct answer."
          },
          {
            question: "If tan(𝐴 + 𝐵) = 1/7 and tan 𝐴 = 1/3, find tan 𝐵",
            answers: [
              { text: "−4/11", correct: false },
              { text: "3/9", correct: false },
              { text: "−2/11", correct: true },
              { text: "4/11", correct: false }
            ],
            explanation: "Given tan(𝐴 + 𝐵) = 1/7 and tan 𝐴 = 1/3:\n\n1. Use the tangent addition formula: tan(𝐴 + 𝐵) = (tan 𝐴 + tan 𝐵) / (1 - tan 𝐴 * tan 𝐵).\n\n2. Substitute tan 𝐴 = 1/3 and tan(𝐴 + 𝐵) = 1/7 into the formula.\n\n3. Solve for tan 𝐵 to find the correct answer."
          },
          {
            question: "Given 𝑦 = 𝑎(sin(𝑥)), find 𝑑𝑦/𝑑𝑥",
            answers: [
              { text: "𝑎 sin(𝑥) / sin(𝑥) log𝑎 𝑒", correct: false },
              { text: "𝑎 sin(𝑥) cos(𝑥) log𝑒 𝑎", correct: true },
              { text: "𝑎 sin(𝑥) / sin(2𝑥) log𝑎 𝑒", correct: false },
              { text: "none", correct: false }
            ],
            explanation: "To find 𝑑𝑦/𝑑𝑥 for 𝑦 = 𝑎(sin(𝑥)):\n\n1. Apply the derivative of a constant multiplied by a function: 𝑑𝑦/𝑑𝑥 = 𝑎 * derivative of sin(𝑥).\n\n2. Derivative of sin(𝑥) is cos(𝑥).\n\n3. Therefore, 𝑑𝑦/𝑑𝑥 = 𝑎 * sin(𝑥) * cos(𝑥).\n\n4. Optionally, log𝑒 𝑎 is the natural logarithm of 𝑎."
          },
          {
            question: "Find the gradient of the line 𝑦 = 2𝑥 + 6",
            answers: [
              { text: "2", correct: true },
              { text: "6", correct: false },
              { text: "−2", correct: false },
              { text: "−6", correct: false }
            ],
            explanation: "The gradient of a line in the form 𝑦 = 𝑚𝑥 + 𝑐 is the coefficient of 𝑥, which is 𝑚. Therefore, the gradient of 𝑦 = 2𝑥 + 6 is 2."
          },
          {
            question: "In the inequality 𝑔² + 𝑓² ≥ 𝑐 of a circle, what type of numbers does 𝑔² + 𝑓² represent?",
            answers: [
              { text: "imaginary", correct: false },
              { text: "complex", correct: false },
              { text: "real", correct: true },
              { text: "parabolic", correct: false }
            ],
            explanation: "𝑔² + 𝑓² represents the sum of squares of two real numbers (𝑔 and 𝑓) and thus results in a real number. Therefore, 𝑔² + 𝑓² ≥ 𝑐 of a circle represents a real number."
          },
          {
            question: "Which of the following is not an equation of a circle?",
            answers: [
              { text: "𝑥² − 𝑦² + 4𝑥 = 0", correct: true },
              { text: "𝑥² − 𝑦² + 12𝑦 = 9", correct: false },
              { text: "𝑥² + 𝑦² + 2𝑥 − 𝑦 − 3 = 0", correct: false },
              { text: "𝑥² + 𝑦² + 𝑥 + 𝑦 − 7 = 0", correct: false }
            ],
            explanation: "An equation of a circle is typically of the form (𝑥 − ℎ)² + (𝑦 − 𝑘)² = 𝑟², where (ℎ, 𝑘) is the center and 𝑟 is the radius. The equation 𝑥² − 𝑦² + 4𝑥 = 0 does not fit this form and hence is not an equation of a circle."
          },
          {
            question: "Find the intercept of 2𝑦 − 3𝑥 = 5",
            answers: [
              { text: "5", correct: false },
              { text: "−3", correct: false },
              { text: "3/2", correct: false },
              { text: "5/2", correct: true }
            ],
            explanation: "To find the intercept of 2𝑦 − 3𝑥 = 5:\n\n1. For x-intercept, set y = 0: 2(0) - 3𝑥 = 5 ⟹ -3𝑥 = 5 ⟹ 𝑥 = -5/3.\n\n2. For y-intercept, set x = 0: 2𝑦 - 3(0) = 5 ⟹ 2𝑦 = 5 ⟹ 𝑦 = 5/2.\n\nTherefore, the intercepts are x = -5/3 and y = 5/2."
          },
          {
            question: "Find the value of cos(600 − 𝜃), if tan 𝜃 = −3/4 where 0° < 𝜃 < 180°",
            answers: [
              { text: "2/5 + 3/10 √3", correct: false },
              { text: "2/5 - 3/10 √3", correct: false },
              { text: "-2/4 - 3/10 √3", correct: false },
              { text: "-2/5 + 3/10 √3", correct: true }
            ],
            explanation: "Given tan 𝜃 = -3/4 and 0° < 𝜃 < 180°:\n\n1. Determine the quadrant based on tan 𝜃 being negative and the angle range.\n\n2. Use the identity cos(180° - 𝜃) = -cos(𝜃) to find cos 𝜃.\n\n3. Calculate cos(600° - 𝜃) using the periodicity of cosine function.\n\n4. Simplify and determine the correct answer."
          },
          {
            question: "Find the value of 𝜃 if sin 3𝜃 = cos 60°",
            answers: [
              { text: "60°", correct: false },
              { text: "10°", correct: true },
              { text: "30°", correct: false },
              { text: "90°", correct: false }
            ],
            explanation: "To find 𝜃 such that sin 3𝜃 = cos 60°:\n\n1. Use the identity sin 𝜃 = cos(90° - 𝜃) to relate sin and cosine.\n\n2. Solve for 𝜃 using the given information and trigonometric identities.\n\n3. Verify the angle in the specified range to find the correct answer."
          },
          {
            question: "Simplify sin 2𝐴 / (1 + cos 2𝐴)",
            answers: [
              { text: "cot 𝐴", correct: false },
              { text: "tan 𝐴", correct: true },
              { text: "sec 𝐴", correct: false },
              { text: "cos 𝐴", correct: false }
            ],
            explanation: "To simplify sin 2𝐴 / (1 + cos 2𝐴):\n\n1. Use the double-angle identity: sin 2𝐴 = 2 sin 𝐴 cos 𝐴 and cos 2𝐴 = 2 cos² 𝐴 - 1.\n\n2. Substitute these identities into the expression.\n\n3. Simplify to get tan 𝐴, which is the correct answer."
          },
          {
            question: "Find the value of 𝜃 in the range 180° ≤ 𝜃 ≤ 360° which satisfy (1 + cos𝜃) / (2 - cos𝜃) = 1",
            answers: [
              { text: "300°", correct: true },
              { text: "210°", correct: false },
              { text: "600°", correct: false },
              { text: "330°", correct: false }
            ],
            explanation: "To find 𝜃 in the range 180° ≤ 𝜃 ≤ 360° such that (1 + cos𝜃) / (2 - cos𝜃) = 1:\n\n1. Simplify the equation and solve for cos𝜃.\n\n2. Use inverse cosine to find the value of 𝜃.\n\n3. Verify the angle in the specified range to find the correct answer."
          },
          {
            question: "Find the derivative of the function 𝑦 = (𝑥^2 − 3)^4 with respect to x",
            answers: [
              { text: "𝑥(𝑥^3 + 3)^3", correct: false },
              { text: "3𝑥(𝑥^3 − 3)", correct: false },
              { text: "8𝑥(𝑥^3 − 3)", correct: false },
              { text: "8𝑥(𝑥^2 − 3)^3", correct: true }
            ],
            explanation: "To find the derivative of 𝑦 = (𝑥^2 − 3)^4 with respect to x:\n\n1. Apply the chain rule and power rule of differentiation.\n\n2. Derivative of (𝑥^2 − 3)^4 is 4(𝑥^2 − 3)^3 * 2𝑥.\n\n3. Simplify to obtain 8𝑥(𝑥^2 − 3)^3, which is the correct answer."
          },
          {
            question: "The radius of a circular disc is increasing at the rate of 0.5𝑐𝑚/𝑠𝑒. At what rate is the area of the disc increasing when its radius is 6𝑐𝑚?",
            answers: [
              { text: "7.67𝑐𝑚²", correct: false },
              { text: "6𝜋𝑐𝑚²", correct: true },
              { text: "8𝜋𝑐𝑚²", correct: false },
              { text: "7.80𝑐𝑚²", correct: false }
            ],
            explanation: "Given the rate of change of radius and the formula for the area of a circle:\n\n1. Area of the circle A = 𝜋𝑟^2, where r is the radius.\n\n2. Differentiate A with respect to time to find dA/dt.\n\n3. Substitute the given values and calculate to find that dA/dt = 6𝜋𝑐𝑚²."
          },
          {
            question: "Find the equation of the tangent to the curve 𝑦 = 1 − 2𝑥 + 5𝑥^2 − 𝑥^3 at the point 𝑥 = 3",
            answers: [
              { text: "𝑦 = 𝑥 + 11", correct: false },
              { text: "𝑦 = 𝑥 + 10", correct: true },
              { text: "𝑦 = 2𝑥 + 10", correct: false },
              { text: "𝑦 = 𝑥 − 11", correct: false }
            ],
            explanation: "To find the equation of the tangent to 𝑦 = 1 − 2𝑥 + 5𝑥^2 − 𝑥^3 at 𝑥 = 3:\n\n1. Find the derivative of 𝑦 with respect to x.\n\n2. Evaluate the derivative at 𝑥 = 3 to find the slope of the tangent.\n\n3. Use the point-slope form of the equation of a line to find the tangent equation, which is 𝑦 = 𝑥 + 10."
          },
          {
            question: "Given that ∫ (3𝑡𝑥 − 𝑡) 𝑑𝑥 = 1, find the value of t.",
            answers: [
              { text: "-2", correct: false },
              { text: "2", correct: true },
              { text: "4", correct: false },
              { text: "0", correct: false }
            ],
            explanation: "To find t such that ∫ (3𝑡𝑥 − 𝑡) 𝑑𝑥 = 1:\n\n1. Integrate the expression with respect to x.\n\n2. Set the result equal to 1 and solve for t.\n\n3. The correct value of t is 2."
          },
          {
            question: "Determine ∫ (2𝑥^2 − 2𝑥 + 5) dx",
            answers: [
              { text: "tan⁻¹(𝑥 − 1/2) + 𝐶", correct: true },
              { text: "tan⁻¹(𝑥 + 1/2) + 𝐶", correct: false },
              { text: "2 tan⁻¹(𝑥 + 1/2) + 𝐶", correct: false },
              { text: "1/2 tan⁻¹(𝑥 − 1/2) + 𝐶", correct: false }
            ],
            explanation: "To determine ∫ (2𝑥^2 − 2𝑥 + 5) dx:\n\n1. Integrate each term of the polynomial separately.\n\n2. Add the constants of integration.\n\n3. The correct integral is tan⁻¹(𝑥 − 1/2) + 𝐶."
          },
          {
            question: "Given 𝑦 − 3𝑥 − 6 = 0, find the slope.",
            answers: [
              { text: "3", correct: true },
              { text: "6", correct: false },
              { text: "−6", correct: false },
              { text: "−3", correct: false }
            ],
            explanation: "Given 𝑦 − 3𝑥 − 6 = 0:\n\n1. Rearrange to find 𝑦 in terms of 𝑥.\n\n2. The coefficient of 𝑥 gives the slope of the line, which is 3."
          },
          {
            question: "The midpoint of the points 𝑀(4, −1) and 𝑁(𝑥, 𝑦) is 𝑃(3, −4). Find the coordinates of points N.",
            answers: [
              { text: "(−2, 7)", correct: false },
              { text: "(2, 7)", correct: false },
              { text: "(−2, −7)", correct: false },
              { text: "(2, −7)", correct: true }
            ],
            explanation: "To find the coordinates of point N such that the midpoint of 𝑀(4, −1) and 𝑁(𝑥, 𝑦) is 𝑃(3, −4):\n\n1. Use the midpoint formula to set up equations.\n\n2. Solve for 𝑥 and 𝑦 using the given midpoint coordinates of 𝑃.\n\n3. The coordinates of point N are (2, −7)."
          },
          {
            question: "Calculate the angle between lines 3𝑥 + 2𝑦 − 8 = 0 and 𝑥 + 7𝑦 + 8 = 0 to the nearest degree.",
            answers: [
              { text: "80°", correct: false },
              { text: "81°", correct: false },
              { text: "48°", correct: true },
              { text: "800°", correct: false }
            ],
            explanation: "To calculate the angle between lines 3𝑥 + 2𝑦 − 8 = 0 and 𝑥 + 7𝑦 + 8 = 0:\n\n1. Find the slopes of both lines.\n\n2. Use the formula for the angle between two lines: tan(𝜃) = |(m1 - m2) / (1 + m1 * m2)|.\n\n3. Calculate and determine the angle, which is approximately 48°."
          },
          {
            question: "Find the equation of the line passing through (1, −1) and (5, 7).",
            answers: [
              { text: "𝑦 = 4𝑥 + 3", correct: false },
              { text: "𝑦 = 2𝑥 + 5", correct: false },
              { text: "𝑦 = 4𝑥 − 5", correct: false },
              { text: "𝑦 - 2𝑥 + 3 = 0", correct: true }
            ],
            explanation: "To find the equation of the line passing through (1, −1) and (5, 7):\n\n1. Calculate the slope of the line using the coordinates of the two points.\n\n2. Use the point-slope form of the equation of a line to find the correct equation.\n\n3. The equation of the line is 𝑦 - 2𝑥 + 3 = 0."
          },
          {
            question: "Find the length of a straight line joining points (3, 2) and (5, 5)",
            answers: [
              { text: "2.92", correct: false },
              { text: "6.3", correct: false },
              { text: "3.0", correct: false },
              { text: "3.61", correct: true }
            ],
            explanation: "To find the length of the straight line joining points (3, 2) and (5, 5):\n\n1. Use the distance formula: √((𝑥₂ - 𝑥₁)² + (𝑦₂ - 𝑦₁)²).\n\n2. Substitute the given coordinates (3, 2) and (5, 5) into the formula.\n\n3. Calculate to find the distance, which is approximately 3.61 units."
          },
          {
            question: "Find the equation of the tangent to the circle 𝑥² + 𝑦² − 2𝑥 + 4𝑦 = 15 at the point (−1, 2)",
            answers: [
              { text: "2𝑦 − 𝑥 + 5 = 0", correct: false },
              { text: "2𝑦 − 𝑥 − 5 = 0", correct: true },
              { text: "2𝑦 + 𝑥 + 5 = 0", correct: false },
              { text: "2𝑦 + 𝑥 − 5 = 0", correct: false }
            ],
            explanation: "To find the equation of the tangent to the circle 𝑥² + 𝑦² − 2𝑥 + 4𝑦 = 15 at the point (−1, 2):\n\n1. Differentiate the circle's equation implicitly to find the slope of the tangent at the given point.\n\n2. Use the point-slope form of the equation of a line to find the tangent equation.\n\n3. The correct equation is 2𝑦 − 𝑥 − 5 = 0."
          },
          {
            question: "Find the equation of the line whose slope is 2 through the point (−1, −2)",
            answers: [
              { text: "none", correct: false },
              { text: "𝑦 − 3𝑥 = 2", correct: false },
              { text: "𝑦 + 2𝑥 = 0", correct: false },
              { text: "2𝑥 + 2 = 𝑦", correct: true }
            ],
            explanation: "To find the equation of the line whose slope is 2 through the point (−1, −2):\n\n1. Use the point-slope form of the equation of a line: 𝑦 − 𝑦₁ = 𝑚(𝑥 − 𝑥₁), where 𝑚 is the slope.\n\n2. Substitute 𝑚 = 2, 𝑥₁ = −1, and 𝑦₁ = −2 into the equation.\n\n3. Simplify to obtain the equation of the line, which is 2𝑥 + 2 = 𝑦."
          },
          {
            question: "Find 𝑑𝑦/𝑑𝑥 if 𝑦 = 𝑒^(sin(4𝑥))",
            answers: [
              { text: "4 cos(4𝑥) 𝑒^(sin(4𝑥))", correct: true },
              { text: "4 sin(4𝑥) 𝑒^(sin(4𝑥))", correct: false },
              { text: "4𝑐𝑜𝑠𝑒𝑐 (4𝑥) 𝑒^(sin(4𝑥))", correct: false },
              { text: "4 cot(4𝑥) 𝑒^(sin(4𝑥))", correct: false }
            ],
            explanation: "To find 𝑑𝑦/𝑑𝑥 if 𝑦 = 𝑒^(sin(4𝑥)):\n\n1. Use the chain rule of differentiation.\n\n2. Derivative of 𝑒^(sin(4𝑥)) with respect to x is 𝑒^(sin(4𝑥)) * cos(4𝑥) * 4.\n\n3. Simplify to get 𝑑𝑦/𝑑𝑥 = 4 cos(4𝑥) 𝑒^(sin(4𝑥))."
          },
          {
            question: "Find the length of the tangent from a point (0, 0) to the circle 𝑥² + 𝑦² + 4𝑥 − 6𝑦 + 10",
            answers: [
              { text: "10", correct: false },
              { text: "0", correct: false },
              { text: "√5", correct: false },
              { text: "√10", correct: true }
            ],
            explanation: "To find the length of the tangent from point (0, 0) to the circle 𝑥² + 𝑦² + 4𝑥 − 6𝑦 + 10:\n\n1. Calculate the distance from the center of the circle (−2, 3) to the point (0, 0), which is √(2² + 3²) = √13.\n\n2. The length of the tangent is the absolute difference between the radius (√13) and the distance from the center to the point (2), giving √(13 - 2²) = √10."
          },
          {
            question: "Find the gradient and intercept of the equation 𝑦 + 4𝑥 − 5 = 0",
            answers: [
              { text: "4, 0", correct: false },
              { text: "4, 5", correct: false },
              { text: "4, −5", correct: true },
              { text: "−4, 5", correct: false }
            ],
            explanation: "To find the gradient and intercept of the equation 𝑦 + 4𝑥 − 5 = 0:\n\n1. Rewrite the equation in the slope-intercept form 𝑦 = −4𝑥 + 5.\n\n2. The gradient (slope) is the coefficient of 𝑥, which is −4.\n\n3. The y-intercept is the constant term, which is 5."
          },
          {
            question: "Find the equation of the normal to the curve 𝑦 = (1 − 𝑥)(3 + 𝑥) at the point 𝑥 = 2",
            answers: [
              { text: "6𝑦 − 𝑥 − 32 = 0", correct: false },
              { text: "6𝑦 − 𝑥 + 32 = 0", correct: true },
              { text: "6𝑦 − 𝑥 − 30", correct: false },
              { text: "6𝑦 − 𝑥 − 30", correct: false }
            ],
            explanation: "To find the equation of the normal to the curve 𝑦 = (1 − 𝑥)(3 + 𝑥) at 𝑥 = 2:\n\n1. Find the derivative 𝑑𝑦/𝑑𝑥 = −2(1 − 𝑥) + (3 + 𝑥).\n\n2. Evaluate 𝑑𝑦/𝑑𝑥 at 𝑥 = 2 to get the slope of the tangent.\n\n3. The slope of the normal is the negative reciprocal of the tangent's slope.\n\n4. Use the point-slope form to find the equation of the normal, which is 6𝑦 − 𝑥 + 32 = 0."
          },
          {
            question: "Evaluate ∫ √(1 + 3𝑥) 𝑑𝑥",
            answers: [
              { text: "26", correct: false },
              { text: "18", correct: false },
              { text: "12", correct: false },
              { text: "32", correct: true }
            ],
            explanation: "To evaluate ∫ √(1 + 3𝑥) 𝑑𝑥:\n\n1. Substitute 𝑢 = 1 + 3𝑥, so 𝑑𝑥 = 𝑑𝑢 / 3.\n\n2. Integrate √𝑢 with respect to 𝑢 to get (2/3)𝑢^(3/2).\n\n3. Substitute back 𝑢 = 1 + 3𝑥 into the result and simplify to find the definite integral."
          },
          {
            question: "𝛽 is an obtuse angle and sin 𝛽 = 6/10, find the value of 2 tan𝛽 / (1−tan² 𝛽)",
            answers: [
              { text: "3.34", correct: false },
              { text: "3.83", correct: false },
              { text: "- 3.43", correct: true },
              { text: "3.38", correct: false }
            ],
            explanation: "To find the value of 2 tan𝛽 / (1−tan² 𝛽) given sin 𝛽 = 6/10 and 𝛽 is obtuse:\n\n1. Find cos 𝛽 using the identity sin² 𝛽 + cos² 𝛽 = 1.\n\n2. Substitute sin 𝛽 = 6/10 to find cos 𝛽 = √(1 - (6/10)²).\n\n3. Use the identity tan 𝛽 = sin 𝛽 / cos 𝛽 to find tan 𝛽.\n\n4. Substitute tan 𝛽 into 2 tan𝛽 / (1−tan² 𝛽) to get the value."
          },
          {
            question: "Find the value of a fixed angle in the trigonometry equation given by 2√3 sin 𝜃 + 2 cos 𝜃 = 2",
            answers: [
              { text: "90", correct: false },
              { text: "0", correct: true },
              { text: "60", correct: false },
              { text: "30", correct: false }
            ],
            explanation: "To solve the equation 2√3 sin 𝜃 + 2 cos 𝜃 = 2:\n\n1. Divide the entire equation by 2 to simplify: √3 sin 𝜃 + cos 𝜃 = 1.\n\n2. Recognize that this equation can be represented as cos 𝜃 = 1 - √3 sin 𝜃.\n\n3. Square both sides: cos² 𝜃 = (1 - √3 sin 𝜃)².\n\n4. Substitute for cos² 𝜃 in the Pythagorean identity: sin² 𝜃 + cos² 𝜃 = 1.\n\n5. Substitute values to check the answer: √3 cos 30 + 2 sin 30 = 2."
          },
          {
            question: "If 𝑥 = 𝑎 cot 𝜃 and 𝑦 = 𝑏 cos 𝜃, evaluate 𝑦 / 𝑏 (𝑦² / 𝑏² - 𝑥² / 𝑎²)",
            answers: [
              { text: "sec 𝜃", correct: true },
              { text: "𝑐𝑜𝑠𝑒𝑐 𝜃", correct: false },
              { text: "1", correct: false },
              { text: "tan 𝜃", correct: false }
            ],
            explanation: "To evaluate 𝑦 / 𝑏 (𝑦² / 𝑏² - 𝑥² / 𝑎²) given 𝑥 = 𝑎 cot 𝜃 and 𝑦 = 𝑏 cos 𝜃:\n\n1. Express cot 𝜃 as 𝑥 / 𝑎 and cos 𝜃 as 𝑦 / 𝑏.\n\n2. Substitute 𝑥 and 𝑦 into the expression and simplify using trigonometric identities and properties."
          },
          {
            question: "Find the value of tan 1950 in surd form",
            answers: [
              { text: "3+3√3 / 3−√3", correct: true },
              { text: "3−√3 / 3+√3", correct: false },
              { text: "−3−√3 / 3+√3", correct: false },
              { text: "3−√3 / −3+√3", correct: false }
            ],
            explanation: "To find the value of tan 1950 in surd form:\n\n1. Use the periodicity of the tangent function to reduce 1950 to an equivalent angle within 0 to 360 degrees.\n\n2. Use the tangent addition formula and simplification techniques to obtain the desired surd form."
          },
          {
            question: "If 𝑦 = 𝑥² sin 2𝑥, find the derivative of y with respect to x",
            answers: [
              { text: "2𝑥(sin 2𝑥 + 𝑥 cos(2𝑥))", correct: true },
              { text: "2𝑥(tan 𝑥 + 𝑥² sin 2𝑥)", correct: false },
              { text: "2𝑥(tan 𝑥 + 𝑥² sec² 𝑥)", correct: false },
              { text: "2𝑥(sin 𝑥 + 2𝑥² sec² 𝑥)", correct: false }
            ],
            explanation: "To find the derivative of 𝑦 = 𝑥² sin 2𝑥:\n\n1. Apply the product rule and chain rule to differentiate 𝑦 = 𝑥² sin 2𝑥.\n\n2. Derivative of 𝑥² sin 2𝑥 = 2𝑥 sin 2𝑥 + 𝑥² * 2 cos 2𝑥 = 2𝑥(sin 2𝑥 + 𝑥 cos(2𝑥))."
          },
          {
            question: "Let 𝑦 = 𝑥² / (𝑥² − 1). Find the vertical and horizontal asymptotes",
            answers: [
              { text: "𝑥 = ±1, 𝑦 = 1", correct: true },
              { text: "𝑥 = ±2, 𝑦 = ±2", correct: false },
              { text: "𝑥 = ±1, 𝑦 = ±1", correct: false },
              { text: "𝑥 = ±2, 𝑦 = +1", correct: false }
            ],
            explanation: "To find the asymptotes of 𝑦 = 𝑥² / (𝑥² − 1):\n\n1. Vertical asymptotes occur where the denominator is zero, so 𝑥 = ±1 are the vertical asymptotes.\n\n2. Horizontal asymptote: As 𝑥 → ±∞, 𝑦 → 1, so 𝑦 = 1 is the horizontal asymptote."
          },
          {
            question: "If the distance between (2, 𝐿) and (−2, 0) is 5. Find 𝐿",
            answers: [
              { text: "±3", correct: true },
              { text: "3", correct: false },
              { text: "5", correct: false },
              { text: "3", correct: false }
            ],
            explanation: "To find 𝐿 where the distance between (2, 𝐿) and (−2, 0) is 5:\n\n1. Use the distance formula: √[(2 + 2)² + (𝐿 - 0)²] = 5.\n\n2. Solve for 𝐿: √[16 + 𝐿²] = 5 → 𝐿² = 25 - 16 → 𝐿² = 9 → 𝐿 = ±3."
          },
          {
            question: "If 𝑥 = 𝑝 sin 𝜃 , 𝑦 = 𝑝 cos 𝜃. Evaluate √(𝑥² + 𝑦²) / 𝑝",
            answers: [
              { text: "1 / 𝑝", correct: true },
              { text: "𝑝²", correct: false },
              { text: "𝑝", correct: false },
              { text: "√𝑝", correct: false }
            ],
            explanation: "To evaluate √(𝑥² + 𝑦²) / 𝑝 given 𝑥 = 𝑝 sin 𝜃 and 𝑦 = 𝑝 cos 𝜃:\n\n1. Substitute 𝑥 and 𝑦 into the expression.\n\n2. Simplify using the Pythagorean identity: √(sin² 𝜃 + cos² 𝜃) = √1 = 1.\n\n3. Therefore, the result is √(𝑥² + 𝑦²) / 𝑝 = 1 / 𝑝."
          },
          {
            question: "Express sin 2𝐴 cos 4𝐴 as a sum of difference of trigonometric functions",
            answers: [
              { text: "1/2 (sin 6𝐴 - sin 2𝐴)", correct: true },
              { text: "1/2 (sin 6𝐴 + sin 2𝐴)", correct: false },
              { text: "1/2 (cos 6𝐴 + cos 2𝐴)", correct: false },
              { text: "1/2 (sin 6𝐴 - cos 2𝐴)", correct: false }
            ],
            explanation: "To express sin 2𝐴 cos 4𝐴 as a sum or difference of trigonometric functions:\n\n1. Use the identity: sin 2𝐴 cos 4𝐴 = 1/2 [sin(2𝐴 + 4𝐴) + sin(2𝐴 - 4𝐴)].\n\n2. Simplify the expression to get sin 2𝐴 cos 4𝐴 = 1/2 [sin 6𝐴 - sin 2𝐴]."
          },
          {
            question: "Find the value of (cos 600 − 𝜃). If tan 𝜃 = -3/4",
            answers: [
              { text: "2/5 + 3√3 / 10", correct: true },
              { text: "-2/5 - 3√3 / 10", correct: false },
              { text: "2/5 - 3√3 / 10", correct: false },
              { text: "-2/5 + 3√3 / 10", correct: false }
            ],
            explanation: "To find the value of (cos 600 − 𝜃) given tan 𝜃 = -3/4:\n\n1. Use the identity: cos(600° - 𝜃) = cos 600° cos 𝜃 + sin 600° sin 𝜃.\n\n2. Substitute the known values and solve using trigonometric identities."
          },
          {
            question: "Given (𝑝𝑥 + 𝑞)ⁿ, find 𝑑𝑦 / 𝑑𝑥",
            answers: [
              { text: "𝑛𝑝(𝑝𝑥 + 𝑞)ⁿ⁻¹", correct: true },
              { text: "𝑛(𝑝𝑥 - 𝑞)ⁿ⁻¹", correct: false },
              { text: "𝑛𝑝(𝑝𝑥 + 𝑞)ⁿ", correct: false },
              { text: "𝑛(𝑝𝑥 + 𝑞)ⁿ⁻¹", correct: false }
            ],
            explanation: "To find 𝑑𝑦 / 𝑑𝑥 for (𝑝𝑥 + 𝑞)ⁿ:\n\n1. Use the power rule in differentiation: 𝑑/𝑑𝑥 [(𝑝𝑥 + 𝑞)ⁿ] = 𝑛(𝑝𝑥 + 𝑞)ⁿ⁻¹.\n\n2. Apply this rule to find the derivative of the given expression."
          },
          {
            question: "Find ∫ (3𝑥 / (7𝑥² + 2)) 𝑑𝑥",
            answers: [
              { text: "3/14 ln(7𝑥² + 2) + 𝐶", correct: true },
              { text: "3/7 ln(7𝑥 + 2) + 𝐶", correct: false },
              { text: "3/14 ln(7𝑥 + 2) + 𝐶", correct: false },
              { text: "3/7 ln(7𝑥² + 2) + 𝐶", correct: false }
            ],
            explanation: "To integrate ∫ (3𝑥 / (7𝑥² + 2)) 𝑑𝑥:\n\n1. Recognize the form as ∫ 𝑓(𝑥) 𝑓'(𝑥) 𝑑𝑥 where 𝑓(𝑥) = ln(𝑓(𝑥)) and 𝑓'(𝑥) = (3𝑥) / (7𝑥² + 2).\n\n2. Integrate using the formula: ∫ 𝑓'(𝑥) 𝑓(𝑥) 𝑑𝑥 = 𝑓(𝑥) ln|𝑓(𝑥)| + 𝐶.\n\n3. Hence, ∫ (3𝑥 / (7𝑥² + 2)) 𝑑𝑥 = 3/14 ln(7𝑥² + 2) + 𝐶."
          },
          {
            question: "Evaluate ∫ ((3𝑥 - 1) / (3𝑥² - 2𝑥 + 1)⁴) 𝑑𝑥",
            answers: [
              { text: "-1/6(3𝑥² - 2𝑥 + 1)³ + 𝐶", correct: true },
              { text: "1/6(3𝑥² - 2𝑥 + 1)² + 𝐶", correct: false },
              { text: "-1/6(3𝑥 + 2) + 𝐶", correct: false },
              { text: "-1/6(3𝑥² - 2𝑥 + 1)³ + 𝐶", correct: false }
            ],
            explanation: "To evaluate ∫ ((3𝑥 - 1) / (3𝑥² - 2𝑥 + 1)⁴) 𝑑𝑥:\n\n1. Use the substitution method to simplify the integral.\n\n2. Integrate using the power rule: ∫ 𝑥ⁿ / 𝑓(𝑥)ⁿ⁺¹ 𝑑𝑥 = -1 / (n + 1) 𝑓(𝑥)⁻ⁿ + 𝐶.\n\n3. Hence, ∫ ((3𝑥 - 1) / (3𝑥² - 2𝑥 + 1)⁴) 𝑑𝑥 = -1/6(3𝑥² - 2𝑥 + 1)³ + 𝐶."
          },
          {
            question: "Find ∫ sin 4𝜃 cos 𝜃 𝑑𝜃",
            answers: [
              { text: "-1/4 (cos 6𝜃 / 3 + cos 2𝜃) + 𝐶", correct: true },
              { text: "-cos 4𝜃 / 4 sin 2𝜃 / 2 + 𝐶", correct: false },
              { text: "-1/2 (cos 3𝜃 / 3 + cos 𝜃) + 𝐶", correct: false },
              { text: "-1/4 (cos 6𝜃 / 3 + cos 2𝜃) + 𝐶", correct: false }
            ],
            explanation: "To find ∫ sin 4𝜃 cos 𝜃 𝑑𝜃:\n\n1. Use the product-to-sum formula for cosine and integrate.\n\n2. Apply the integration rules: ∫ sin 𝑎𝜃 cos 𝑏𝜃 𝑑𝜃 = -1/2 [cos(𝑎 + 𝑏)𝜃 / (𝑎 + 𝑏) + cos(𝑎 - 𝑏)𝜃 / (𝑎 - 𝑏)] + 𝐶.\n\n3. Therefore, ∫ sin 4𝜃 cos 𝜃 𝑑𝜃 = -1/4 (cos 6𝜃 / 3 + cos 2𝜃) + 𝐶."
          },
          {
            question: "Obtain the equation of the straight line joining the points (acos 𝜃1, 𝑏 sin 𝜃1) and (acos 𝜃2, 𝑏 sin 𝜃2)",
            answers: [
              { text: "𝑎(cos 𝜃2 − cos 𝜃1)𝑦 − 𝑏(sin 𝜃2 − sin 𝜃1)𝑥 = 𝑎𝑏 sin(𝜃1 − 𝜃2)", correct: true },
              { text: "𝑎(cos 𝜃2 − cos 𝜃1)𝑥 − 𝑏(sin 𝜃2 − sin 𝜃1)𝑦 = 𝑎𝑏 sin(𝜃1 − 𝜃2)", correct: false },
              { text: "(𝑎cos 𝜃2 − 𝑏 sin 𝜃1)𝑥 − 𝑎(cos 𝜃1 − 𝑏 sin 𝜃2)𝑦 = 𝑎𝑏 cos(𝜃1 − 𝜃2)", correct: false },
              { text: "(acos 𝜃1 𝑏 sin 𝜃1)𝑦 + (acos 𝜃2 𝑏 sin 𝜃2)𝑥 = 𝑎𝑏 sin(𝜃1 cos 𝜃2)", correct: false }
            ],
            explanation: "To obtain the equation of the straight line joining (acos 𝜃1, 𝑏 sin 𝜃1) and (acos 𝜃2, 𝑏 sin 𝜃2):\n\n1. Use the formula for the equation of a line through two points: (𝑦 - 𝑦₁) / (𝑦₂ - 𝑦₁) = (𝑥 - 𝑥₁) / (𝑥₂ - 𝑥₁).\n\n2. Substitute the given points and simplify to get the correct equation."
          },
          {
            question: "Given 𝑦 + 2𝑥 = 11, find the gradient of the line",
            answers: [
              { text: "none", correct: true },
              { text: "2 / 11", correct: false },
              { text: "11", correct: false },
              { text: "11 / 2", correct: false }
            ],
            explanation: "The equation 𝑦 + 2𝑥 = 11 is not in the standard form 𝑦 = 𝑚𝑥 + 𝑐, where 𝑚 represents the gradient."
          },
          {
            question: "What is the equation of the tangent of the circle 𝑥² + 𝑦² − 2𝑥 + 4𝑦 = 15 at the point (−1, 2)?",
            answers: [
              { text: "2𝑦 - 𝑥 - 5 = 0", correct: true },
              { text: "7𝑦 - 2𝑥 - 8 = 0", correct: false },
              { text: "7𝑦 + 2𝑥 + 8 = 0", correct: false },
              { text: "7𝑦 - 2𝑥 + 8 = 0", correct: false }
            ],
            explanation: "To find the equation of the tangent to the circle 𝑥² + 𝑦² − 2𝑥 + 4𝑦 = 15 at the point (−1, 2):\n\n1. Differentiate implicitly to find the slope of the tangent at the given point.\n\n2. Substitute the point into the slope-intercept form to find the equation."
          },
          {
            question: "Find the center and radius of the circle 𝑥² + 𝑦² − 6𝑥 − 8𝑦 + 5 = 0",
            answers: [
              { text: "(3, 4); 2√5", correct: true },
              { text: "(3, 4); 5√2", correct: false },
              { text: "(4, 3); 2√5", correct: false },
              { text: "(4, 3); 5√2", correct: false }
            ],
            explanation: "To find the center and radius of the circle 𝑥² + 𝑦² − 6𝑥 − 8𝑦 + 5 = 0:\n\n1. Rewrite the equation in standard form by completing the square.\n\n2. The center is (3, 4) and the radius is √5, hence the correct answer is (3, 4); 2√5."
          },
          {
            question: "Which of the following trigonometric formulae is not correct?",
            answers: [
              { text: "tan 2𝐴 = 2 tan𝐴 / (1 - tan² 𝐴)", correct: false },
              { text: "sin 𝐴 = 2 sin 𝐴/2 cos 𝐴/2", correct: true },
              { text: "cos(𝐴 − 𝐵) = cos 𝐴 cos 𝐵 + sin 𝐴 sin 𝐵", correct: false },
              { text: "cos 𝐴 + cos 𝐵 = 2 cos ((𝐴+𝐵)/2) sin ((𝐴−𝐵)/2)", correct: false }
            ],
            explanation: "Option (b) is incorrect because the correct formula for sin 𝐴 is sin 𝐴 = 2 sin 𝐴/2 cos 𝐴/2."
          },
          {
            question: "If 𝑥 = 1/8, 𝑝 = 1/4, and 𝑞 = 3, find the value 𝑥 / (𝑝𝑞)",
            answers: [
              { text: "2/9", correct: true },
              { text: "27", correct: false },
              { text: "1/9", correct: false },
              { text: "1/27", correct: false }
            ],
            explanation: "Calculate 𝑥 / (𝑝𝑞) = (1/8) / (1/4 * 3) = (1/8) / (3/4) = 1/6 = 2/9. Therefore, the correct answer is 2/9."
          },
          {
            question: "The eccentricity of the equation of the ellipse is?",
            answers: [
              { text: "𝑒 < 1", correct: true },
              { text: "𝑒 ≠ 0", correct: false },
              { text: "𝑒 > 1", correct: false },
              { text: "𝑒 = 0", correct: false }
            ],
            explanation: "For an ellipse, the eccentricity 𝑒 is less than 1, so the correct answer is 𝑒 < 1."
          },
          {
            question: "Find the semi-major axis of the equation 𝑥² + 4𝑦² = 16",
            answers: [
              { text: "4", correct: true },
              { text: "6", correct: false },
              { text: "3", correct: false },
              { text: "16", correct: false }
            ],
            explanation: "The equation 𝑥² + 4𝑦² = 16 represents an ellipse where 𝑎² = 16, so 𝑎 = √16 = 4. Therefore, the semi-major axis is 4."
          },
          {
            question: "Rewrite 4𝑥² + 9𝑦² = 36 in standard form",
            answers: [
              { text: "𝑥² / 9 + 𝑦² / 4 = 1", correct: true },
              { text: "𝑥² / 9 + 𝑦² / 16 = 1", correct: false },
              { text: "𝑥² / 16 + 𝑦² / 81 = 1", correct: false },
              { text: "𝑥² / 9 + 𝑦² / 4 = 36", correct: false }
            ],
            explanation: "To rewrite 4𝑥² + 9𝑦² = 36 in standard form:\n\n1. Divide everything by 36 to get 𝑥² / 9 + 𝑦² / 4 = 1. Therefore, the correct answer is 𝑥² / 9 + 𝑦² / 4 = 1."
          },
          {
            question: "Find ∫ (3𝑥 ln𝑥) 𝑑𝑥",
            answers: [
              { text: "3𝑥 ln 𝑥 - 3𝑥 + 𝐶", correct: false },
              { text: "3𝑥 ln 𝑥 - 3/2𝑥² + 𝐶", correct: false },
              { text: "3𝑥 ln 𝑥 - 3/2𝑥² + 𝐶", correct: false },
              { text: "3𝑥 ln 𝑥 - 3/2𝑥² + 𝐶", correct: true }
            ],
            explanation: "To find ∫ (3𝑥 ln𝑥) 𝑑𝑥:\n\n1. Use integration by parts or recognize the integral form.\n\n2. The correct answer is 3𝑥 ln 𝑥 - 3/2𝑥² + 𝐶."
          },
          {
            question: "Evaluate ∫ 𝑒^𝑥 sin(𝑒^𝑥) 𝑑𝑥",
            answers: [
              { text: "-𝑒^𝑥 cos(𝑒^𝑥) + 𝐶", correct: false },
              { text: "-cos(𝑒^𝑥) + 𝐶", correct: false },
              { text: "-𝑒^𝑥 cos 𝑥 + 𝐶", correct: false },
              { text: "-cos(𝑒^𝑥) + 𝐶", correct: true }
            ],
            explanation: "To evaluate ∫ 𝑒^𝑥 sin(𝑒^𝑥) 𝑑𝑥:\n\n1. Use the chain rule and integration by parts.\n\n2. The correct answer is -cos(𝑒^𝑥) + 𝐶."
          },
          {
            question: "Evaluate ∫ (4𝑥 − 6𝑒^2𝑥 − 5) 𝑑𝑥",
            answers: [
              { text: "2𝑥² − 3𝑒^2𝑥 − 5𝑥 + 𝐶", correct: false },
              { text: "2𝑥² + 3𝑒^2𝑥 + 𝐶", correct: false },
              { text: "2𝑒^2 − 3𝑒^2𝑥 + 𝐶", correct: false },
              { text: "2𝑥² − 3𝑒^2𝑥 − 5𝑥 + 𝐶", correct: true }
            ],
            explanation: "To evaluate ∫ (4𝑥 − 6𝑒^2𝑥 − 5) 𝑑𝑥:\n\n1. Integrate each term separately.\n\n2. The correct answer is 2𝑥² − 3𝑒^2𝑥 − 5𝑥 + 𝐶."
          },
          {
            question: "Differentiate 𝑦 = tan³(4𝑥)",
            answers: [
              { text: "12 sec²(4𝑥) tan²(4𝑥)", correct: false },
              { text: "12 sec²(4𝑥) cot²(4𝑥)", correct: true },
              { text: "12 sec²(4𝑥) cot²(4𝑥)", correct: false },
              { text: "12 sec²(4𝑥) tan²(4𝑥)", correct: false }
            ],
            explanation: "To differentiate 𝑦 = tan³(4𝑥):\n\n1. Use the chain rule and the derivative of tan𝑥 which is sec²𝑥.\n\n2. 𝑦' = 3 tan²(4𝑥) * sec²(4𝑥) = 3 tan²(4𝑥) * (1 + tan²(4𝑥)).\n\n3. Simplifying gives 𝑦' = 12 sec²(4𝑥) tan²(4𝑥), thus the correct answer is option (b)."
          },
          {
            question: "If 𝑥² + 𝑥𝑦 − 𝑦² + 1 = 0, find 𝑑𝑦/𝑑𝑥 in terms of x and y",
            answers: [
              { text: "-𝑥−𝑦 / (𝑥−2𝑦)", correct: false },
              { text: "-2𝑥−𝑦 / (𝑥−2𝑦)", correct: true },
              { text: "2𝑥 + 𝑥 − 2𝑦", correct: false },
              { text: "2𝑥 + 𝑦 − 2𝑦", correct: false }
            ],
            explanation: "Given 𝑥² + 𝑥𝑦 − 𝑦² + 1 = 0:\n\n1. Differentiate implicitly with respect to 𝑥.\n\n2. Apply implicit differentiation and solve for 𝑑𝑦/𝑑𝑥.\n\n3. The correct answer is 𝑑𝑦/𝑑𝑥 = -2𝑥−𝑦 / (𝑥−2𝑦), which is option (b)."
          },
          {
            question: "Find the derivative of the function 𝑦 = (𝑥² − 3)⁴ with respect to x",
            answers: [
              { text: "8𝑥(𝑥³ − 3)", correct: false },
              { text: "𝑥(𝑥³ + 3)³", correct: false },
              { text: "8𝑥(𝑥² − 3)³", correct: true },
              { text: "3𝑥(𝑥³ − 3)", correct: false }
            ],
            explanation: "To find the derivative of 𝑦 = (𝑥² − 3)⁴:\n\n1. Apply the chain rule and the power rule of differentiation.\n\n2. 𝑦' = 4(𝑥² − 3)³ * 2𝑥 = 8𝑥(𝑥² − 3)³.\n\n3. Therefore, the correct answer is option (c)."
          },
          {
            question: "Find the value of tan 2𝛼 if tan 𝛽 = 5/12 and sin 𝛼 = 3/5",
            answers: [
              { text: "7/24", correct: false },
              { text: "-7/24", correct: false },
              { text: "-24/7", correct: false },
              { text: "24/7", correct: true }
            ],
            explanation: "Given tan 𝛽 = 5/12 and sin 𝛼 = 3/5:\n\n1. Use the identity tan 2𝛼 = (2 tan 𝛼) / (1 - tan² 𝛼).\n\n2. Calculate tan 𝛼 from sin 𝛼 and use it to find tan 2𝛼.\n\n3. The correct answer is tan 2𝛼 = 24/7, which is option (d)."
          },
          {
            question: "What is 2𝜋/3 in degrees?",
            answers: [
              { text: "120°", correct: true },
              { text: "600°", correct: false },
              { text: "2100°", correct: false },
              { text: "2700°", correct: false }
            ],
            explanation: "To convert 2𝜋/3 radians to degrees:\n\n1. Use the conversion factor: 180°/𝜋 radians.\n\n2. Calculate (2𝜋/3) * (180°/𝜋) = 120°.\n\n3. Therefore, 2𝜋/3 radians is 120°, which is option (a)."
          },
          {
            question: "The study or solution of triangles in relation to their sides and angles is referred to as",
            answers: [
              { text: "line geometry", correct: false },
              { text: "circle geometry", correct: false },
              { text: "none", correct: true },
              { text: "poly geometry", correct: false }
            ],
            explanation: "The study or solution of triangles in relation to their sides and angles is simply called 'trigonometry', not any form of geometry mentioned. Therefore, the correct answer is 'none'."
          },
          {
            question: "Find the value of 'a' such that the area of triangle ABC is 3, angle 𝐶 = 90°, and 𝑎 + 𝑏 = 12",
            answers: [
              { text: "11.48", correct: true },
              { text: "16.25", correct: false },
              { text: "6.5", correct: false },
              { text: "9.25", correct: false }
            ],
            explanation: "Given the conditions, use the formula for the area of a right triangle: area = 0.5 * 𝑎 * 𝑏. Substitute 𝑎 + 𝑏 = 12 and solve for 'a'. The correct answer is 'a ≈ 11.48', which matches option (a)."
          },
          {
            question: "Given 𝑦 = (5𝑥 − 2)². Find 𝑑𝑦/𝑑𝑥",
            answers: [
              { text: "10(5𝑥 − 2)²", correct: false },
              { text: "10(5𝑥 − 2)", correct: true },
              { text: "10(5𝑥 + 2)²", correct: false },
              { text: "10(5𝑥 + 2)³", correct: false }
            ],
            explanation: "To differentiate 𝑦 = (5𝑥 − 2)²:\n\n1. Apply the power rule and chain rule.\n\n2. 𝑦' = 2 * (5𝑥 − 2) * 5 = 10(5𝑥 − 2).\n\n3. Therefore, the correct answer is option (b)."
          },
          {
            question: "Let 𝑦 = 𝑥² / (𝑥² − 1), find the vertical asymptote and horizontal asymptote",
            answers: [
              { text: "𝑥 = ±2, 𝑦 = 1", correct: true },
              { text: "𝑥 = ±1, 𝑦 = 1", correct: false },
              { text: "𝑥 = ±2, 𝑦 = 2", correct: false },
              { text: "𝑥 = 1, 𝑦 = 1", correct: false }
            ],
            explanation: "To find the vertical and horizontal asymptotes of 𝑦 = 𝑥² / (𝑥² − 1):\n\n1. Vertical asymptotes occur where the denominator equals zero, 𝑥 = ±1.\n\n2. Horizontal asymptote is found by comparing degrees of numerator and denominator, 𝑦 = 1.\n\n3. Hence, the correct answer is option (a)."
          },
          {
            question: "If 𝑥⁴ + 𝑥𝑦 = 2𝑥, 𝑑𝑦/𝑑𝑥 is",
            answers: [
              { text: "2 + 4𝑥³ − 𝑦 / 𝑥", correct: false },
              { text: "2 + 4𝑥³ + 𝑦 / 𝑥", correct: false },
              { text: "2 − 4𝑥³ + 𝑦 / 𝑥", correct: false },
              { text: "2 − 4𝑥³ − 𝑦 / 𝑥", correct: true }
            ],
            explanation: "Given 𝑥⁴ + 𝑥𝑦 = 2𝑥:\n\n1. Differentiate implicitly with respect to 𝑥.\n\n2. Solve for 𝑑𝑦/𝑑𝑥.\n\n3. The correct answer is 𝑑𝑦/𝑑𝑥 = 2 − 4𝑥³ − 𝑦 / 𝑥, which is option (d)."
          },
          {
            question: "Find the area enclosed between curves 𝑦 = 𝑥² and 𝑦 = 6𝑥",
            answers: [
              { text: "44 sq. units", correct: false },
              { text: "36 sq. units", correct: true },
              { text: "32 sq. units", correct: false },
              { text: "22 sq. units", correct: false }
            ],
            explanation: "To find the area enclosed between 𝑦 = 𝑥² and 𝑦 = 6𝑥:\n\n1. Set up the integral ∫(6𝑥 - 𝑥²)𝑑𝑥 from 0 to 3.\n\n2. Calculate the definite integral.\n\n3. The correct answer is 36 sq. units, which matches option (b)."
          },
          {
            question: "∫ 𝑥²(𝑥³ + 1)𝑑𝑥 from 0 to 2",
            answers: [
              { text: "19/4", correct: false },
              { text: "-9/4", correct: false },
              { text: "40/3", correct: true },
              { text: "18/7", correct: false }
            ],
            explanation: "To evaluate ∫ 𝑥²(𝑥³ + 1)𝑑𝑥 from 0 to 2:\n\n1. Expand the integrand and integrate term by term.\n\n2. Evaluate the definite integral from 0 to 2.\n\n3. The correct answer is 40/3, which is option (c)."
          },
          {
            question: "The equation 𝑥²/4 + 𝑦²/5 = 1 represents",
            answers: [
              { text: "hyperbola", correct: false },
              { text: "parabola", correct: false },
              { text: "none", correct: false },
              { text: "ellipse", correct: true }
            ],
            explanation: "The equation 𝑥²/4 + 𝑦²/5 = 1 describes an ellipse, where the sum of the squares of 𝑥 and 𝑦 variables equals 1. Therefore, the correct answer is 'ellipse' which is option (d)."
          },
          {
            question: "Find the center of the circle 𝑥² + 𝑦² − 8𝑥 + 6𝑦 + 16 = 0",
            answers: [
              { text: "(-4, -3)", correct: false },
              { text: "(-4, 3)", correct: false },
              { text: "(4, 3)", correct: false },
              { text: "(4, -3)", correct: true }
            ],
            explanation: "To find the center of the circle 𝑥² + 𝑦² − 8𝑥 + 6𝑦 + 16 = 0:\n\n1. Complete the square for 𝑥 and 𝑦 terms.\n\n2. The center is (4, -3), thus the correct answer is option (d)."
          },
          {
            question: "Find the area enclosed between the curves 𝑦 = 𝑥³ − 2𝑥² and 𝑦 = 2𝑥 − 𝑥²",
            answers: [
              { text: "27/12 sq. units", correct: true },
              { text: "8/3 sq. units", correct: false },
              { text: "37/12 sq. units", correct: false },
              { text: "none", correct: false }
            ],
            explanation: "To find the area enclosed between 𝑦 = 𝑥³ − 2𝑥² and 𝑦 = 2𝑥 − 𝑥²:\n\n1. Find the points of intersection and set up the integral.\n\n2. Evaluate the definite integral.\n\n3. The correct answer is 27/12 sq. units, which simplifies to 9/4 or 2.25 sq. units, matching option (a)."
          },
          {
            question: "Determine the intercept of the equation 𝑦 = 28𝑥 − 4",
            answers: [
              { text: "28", correct: false },
              { text: "4", correct: false },
              { text: "none", correct: true },
              { text: "7", correct: false }
            ],
            explanation: "The equation 𝑦 = 28𝑥 − 4 represents a linear function with no y-intercept. Therefore, the correct answer is 'none', which is option (c)."
          },
          {
            question: "Equation of the form 3𝑥² + 6𝑦² = 12 is called?",
            answers: [
              { text: "circle", correct: false },
              { text: "hyperbola", correct: false },
              { text: "ellipse", correct: true },
              { text: "parabola", correct: false }
            ],
            explanation: "The equation 3𝑥² + 6𝑦² = 12 represents an ellipse, as it is of the form (𝑥²)/(4) + (𝑦²)/(2) = 1. Therefore, the correct answer is option (c), ellipse."
          },
          {
            question: "Integrate cos 𝑥 sin³ 𝑥 with respect to x",
            answers: [
              { text: "sin⁴ 𝑥 / 4", correct: false },
              { text: "cos⁴ 𝑥 / 4", correct: false },
              { text: "cos⁴ 𝑥 / 4", correct: false },
              { text: "sin⁴ 𝑥 / 4", correct: true }
            ],
            explanation: "To integrate cos 𝑥 sin³ 𝑥:\n\n1. Use the reduction formula or substitution method.\n\n2. The correct antiderivative is sin⁴ 𝑥 / 4 + C. Therefore, the correct answer is option (d), sin⁴ 𝑥 / 4."
          },
          {
            question: "If 𝑃 = 2𝑠³ − 𝑠² − 28𝑠, find the value of s which makes 𝑑𝑃/𝑑𝑠 = 0",
            answers: [
              { text: "2, 7", correct: false },
              { text: "-2, 7", correct: false },
              { text: "-2, 7/3", correct: true },
              { text: "-3, 4", correct: false }
            ],
            explanation: "To find the value of s that makes 𝑑𝑃/𝑑𝑠 = 0 for 𝑃 = 2𝑠³ − 𝑠² − 28𝑠:\n\n1. Differentiate 𝑃 with respect to s and set it to zero.\n\n2. Solve the resulting equation.\n\n3. The correct answer is s = -2, 7/3, which matches option (c)."
          },
          {
            question: "Find the eccentricity of the ellipse equation 𝑥²/25 + 𝑦²/16 = 1",
            answers: [
              { text: "3/5", correct: true },
              { text: "1/5", correct: false },
              { text: "2/5", correct: false },
              { text: "4/5", correct: false }
            ],
            explanation: "The eccentricity of an ellipse given by 𝑥²/25 + 𝑦²/16 = 1 is calculated as e = √(1 - b²/a²), where a = √25 = 5 and b = √16 = 4.\n\n1. Calculate e = √(1 - 16/25) = √(9/25) = 3/5.\n\n2. Therefore, the correct answer is option (a), 3/5."
          },
          {
            question: "Find the radius of the circle 5𝑥² + 5𝑦² + 10𝑥 + 20𝑦 + 15 = 0",
            answers: [
              { text: "2", correct: false },
              { text: "√3", correct: false },
              { text: "√2", correct: true },
              { text: "3", correct: false }
            ],
            explanation: "To find the radius of the circle 5𝑥² + 5𝑦² + 10𝑥 + 20𝑦 + 15 = 0:\n\n1. Complete the square for 𝑥 and 𝑦 terms.\n\n2. The radius is given by √(𝑔² + 𝑓² - 𝑐), where 𝑔 = 5/2, 𝑓 = 10/2, and 𝑐 = 15.\n\n3. Calculate √2.\n\n4. Therefore, the correct answer is option (c), √2."
          },
          {
            question: "Evaluate ∫ (𝑥³ + 𝑥)⁴ (3𝑥² + 1) 𝑑𝑥 from 0 to 1",
            answers: [
              { text: "32/5", correct: false },
              { text: "4", correct: false },
              { text: "8", correct: false },
              { text: "32/5", correct: true }
            ],
            explanation: "To evaluate ∫ (𝑥³ + 𝑥)⁴ (3𝑥² + 1) 𝑑𝑥 from 0 to 1:\n\n1. Expand the integrand and integrate term by term.\n\n2. Evaluate the definite integral from 0 to 1.\n\n3. The correct answer is 32/5, which is option (d)."
          },
          {
            question: "Evaluate ∫ sec² 𝑥 𝑑𝑥",
            answers: [
              { text: "sec 𝑥 tan 𝑥 + 𝑐", correct: false },
              { text: "cos 𝑥 + 𝑐", correct: false },
              { text: "sec 𝑥 + 𝑐", correct: false },
              { text: "tan 𝑥 + 𝑐", correct: true }
            ],
            explanation: "The integral of sec² 𝑥 with respect to 𝑥 is tan 𝑥 + 𝑐. Therefore, the correct answer is option (d), tan 𝑥 + 𝑐."
          },
          {
            question: "Simplify cos 𝑥 + cos(𝑥 + 30°) + sin(𝑥 + 60°)",
            answers: [
              { text: "(1 + √3) cos 𝑥", correct: true },
              { text: "(√3 − 1) sin 𝑥", correct: false },
              { text: "(1 + √3) sin 𝑥", correct: false },
              { text: "(1 − 3) cos 𝑥", correct: false }
            ],
            explanation: "To simplify cos 𝑥 + cos(𝑥 + 30°) + sin(𝑥 + 60°):\n\n1. Use trigonometric identities and simplify.\n\n2. The correct simplification is (1 + √3) cos 𝑥, which is option (a)."
          },
          {
            question: "Find the value of 𝐾, if sin 50° + sin 40° = 𝐾 cos 50°",
            answers: [
              { text: "2", correct: false },
              { text: "√2", correct: true },
              { text: "√3", correct: false },
              { text: "3", correct: false }
            ],
            explanation: "Given sin 50° + sin 40° = 𝐾 cos 50°:\n\n1. Use trigonometric identities and solve for 𝐾.\n\n2. The correct value of 𝐾 is √2, which is option (b)."
          },
          {
            question: "Differentiate 𝑦 = log𝑒 √(1 + 𝑥)",
            answers: [
              { text: "1 / (2(1 + 𝑥))", correct: false },
              { text: "1 / (2(1 + 𝑥))", correct: true },
              { text: "1 / (2(1 - 𝑥))", correct: false },
              { text: "1 / (2(1 - 𝑥))", correct: false }
            ],
            explanation: "To differentiate 𝑦 = log𝑒 √(1 + 𝑥):\n\n1. Apply the chain rule and simplify.\n\n2. The correct derivative is 1 / (2(1 + 𝑥)), which is option (b)."
          },
          {
            question: "Determine the y-intercept of the straight line represented by the equation 5𝑥 − 7𝑦 + 13 = 0",
            answers: [
              { text: "5/13", correct: false },
              { text: "1/6", correct: false },
              { text: "7/13", correct: false },
              { text: "5/7", correct: true }
            ],
            explanation: "To find the y-intercept, set 𝑥 = 0 in the equation 5𝑥 − 7𝑦 + 13 = 0:\n\n1. Solve for 𝑦.\n\n2. The y-intercept is 𝑦 = 5/7.\n\n3. Therefore, the correct answer is option (d), 5/7."
          },
          {
            question: "In a triangle 𝐴𝐵𝐶, 𝑎 = 6, 𝑐 = 4, 𝐴 = 30°. Find the value of 𝐵",
            answers: [
              { text: "0.30", correct: false },
              { text: "19.50", correct: false },
              { text: "1500", correct: false },
              { text: "130.50", correct: true }
            ],
            explanation: "In triangle 𝐴𝐵𝐶, using the Law of Sines:\n\n1. sin 𝐵 / 𝑏 = sin 𝐴 / 𝑐\n\n2. Calculate sin 𝐵.\n\n3. Find 𝐵 in degrees.\n\n4. The correct answer is option (d), 130.50."
          },
          {
            question: "Given 𝑡 = tan (𝑥/2), transforming 𝑑𝑥 into the integral of a rational function of t gives",
            answers: [
              { text: "𝑡² / (1 + 𝑡²) 𝑑𝑡", correct: false },
              { text: "2 / (1 + 𝑡²) 𝑑𝑡", correct: true },
              { text: "2𝑡 / (1 + 𝑡²) 𝑑𝑡", correct: false },
              { text: "𝑡 / (1 + 𝑡²) 𝑑𝑡", correct: false }
            ],
            explanation: "Given 𝑡 = tan (𝑥/2), the differential 𝑑𝑥 transforms into the integral of a rational function of t:\n\n1. Substitute 𝑡 = tan (𝑥/2).\n\n2. Use the substitution method to find the correct integral.\n\n3. The correct transformation is 2 / (1 + 𝑡²) 𝑑𝑡, which corresponds to option (b)."
          },
          {
            question: "Find the value of 𝛼 if cos𝛼 tan 𝛼 = 1 using the half-angle substitution method",
            answers: [
              { text: "30", correct: false },
              { text: "1", correct: false },
              { text: "180", correct: false },
              { text: "0", correct: true }
            ],
            explanation: "Using the half-angle substitution method for cos𝛼 tan 𝛼 = 1:\n\n1. Let tan(𝛼/2) = 𝑡 and solve.\n\n2. Find the corresponding value of 𝛼 in degrees.\n\n3. The correct value of 𝛼 is 0, which is option (d)."
          },
          {
            question: "Find tan 𝐴, if tan(𝐴 − 450°) = 3/5",
            answers: [
              { text: "2", correct: false },
              { text: "4", correct: true },
              { text: "6", correct: false },
              { text: "8", correct: false }
            ],
            explanation: "Given tan(𝐴 − 450°) = 3/5:\n\n1. Calculate 𝐴 − 450°.\n\n2. Find 𝐴 by adding 450° to the calculated angle.\n\n3. Calculate tan 𝐴.\n\n4. The correct answer is option (b), 4."
          },
          {
            question: "If 𝑦 = (𝑥)(𝑥 − 2)(𝑥 + 3) at point 𝑥 = −1, find the equation of the circle",
            answers: [
              { text: "5𝑦 − 2𝑥 − 31 = 0", correct: false },
              { text: "5𝑦 − 𝑥 − 30 = 0", correct: false },
              { text: "𝑦 − 𝑥 − 31 = 0", correct: false },
              { text: "5𝑦 − 𝑥 − 31 = 0", correct: true }
            ],
            explanation: "Evaluate 𝑦 at 𝑥 = −1:\n\n1. Substitute 𝑥 = −1 into 𝑦 = (𝑥)(𝑥 − 2)(𝑥 + 3).\n\n2. Use the result to find the equation of the circle.\n\n3. The correct equation is option (d), 5𝑦 − 𝑥 − 31 = 0."
          },
          {
            question: "Which is not correct?",
            answers: [
              { text: "sin(−𝛼) = −sin 𝛼", correct: false },
              { text: "none", correct: true },
              { text: "tan(−𝛼) = −tan 𝛼", correct: false },
              { text: "cos(−𝛼) = cos 𝛼", correct: false }
            ],
            explanation: "Option (b) is correct because 'none' indicates that there is no correct answer among the options given."
          },
          {
            question: "Find ∫ (3𝑥 + 4)^6 𝑑𝑥",
            answers: [
              { text: "−64", correct: false },
              { text: "32", correct: false },
              { text: "−32", correct: false },
              { text: "64", correct: true }
            ],
            explanation: "Integrate (3𝑥 + 4)^6 with respect to 𝑥:\n\n1. Use the power rule of integration.\n\n2. Evaluate the integral.\n\n3. The correct answer is option (d), 64."
          },
          {
            question: "If 𝑤 = ∫ 𝑓(𝑥)𝑑𝑥 from 𝑎 to 𝑏, which is true?",
            answers: [
              { text: "𝑤 = definite integral, 𝑓(𝑥) = integrand", correct: true },
              { text: "𝑤 = indefinite integral, 𝑓(𝑥) = integrand", correct: false },
              { text: "𝑤 = finite integral, 𝑎 = lower unit, 𝑓(𝑥) = differential", correct: false },
              { text: "𝑤 = definite integral, 𝑏 = lower limit and 𝑓(𝑥) = integral", correct: false }
            ],
            explanation: "In the notation ∫ 𝑓(𝑥)𝑑𝑥 from 𝑎 to 𝑏:\n\n1. 𝑤 represents the definite integral.\n\n2. 𝑓(𝑥) is the integrand.\n\n3. Therefore, the correct statement is option (a)."
          },
          {
            question: "Acute angle in two straight lines is",
            answers: [
              { text: "tan 𝐵 = |(𝑚2−𝑚1)/(1+𝑚2𝑚1)| where 𝑚1𝑚2 ≠ −1", correct: true },
              { text: "tan 𝐵 = |(𝑚1−𝑚2)/(𝑚2𝑚1+1)|", correct: false },
              { text: "tan 𝐵 = |(𝑚2−𝑚1)/(1+𝑚2𝑚1)| where 𝑚1 ≠ −1", correct: false },
              { text: "tan 𝐵 = |(𝑚2−𝑚1)/(1+𝑚2𝑚1)| where 𝑚2 ≠ −1", correct: false }
            ],
            explanation: "For acute angles between two straight lines:\n\n1. Use the formula tan 𝐵 = |(𝑚2−𝑚1)/(1+𝑚2𝑚1)| where 𝑚1𝑚2 ≠ −1.\n\n2. This corresponds to option (a) as the correct answer."
          },
          {
            question: "Evaluate cos 𝑥 + cos(𝑥 + 30°) + sin(𝑥 + 60°)",
            answers: [
              { text: "(1 − √3) cos 𝑥", correct: false },
              { text: "(√3 − 1) sin 𝑥", correct: false },
              { text: "(1 + √3) cos 𝑥", correct: true },
              { text: "(1 + √3) sin 𝑥", correct: false }
            ],
            explanation: "Evaluate cos 𝑥 + cos(𝑥 + 30°) + sin(𝑥 + 60°):\n\n1. Use cosine and sine addition formulas.\n\n2. Simplify to find the correct expression.\n\n3. The correct answer is option (c), (1 + √3) cos 𝑥."
          },
          {
            question: "sin 𝑥 = −0.9063, where 0° ≤ 𝑥 ≤ 270°. Find 𝑥",
            answers: [
              { text: "2450°", correct: false },
              { text: "1150°", correct: true },
              { text: "650°", correct: false },
              { text: "1450°", correct: false }
            ],
            explanation: "Given sin 𝑥 = −0.9063 and the range 0° ≤ 𝑥 ≤ 270°:\n\n1. Find the reference angle and determine 𝑥.\n\n2. The correct answer is option (b), 1150°."
          },
          {
            question: "If 𝑓(𝑥) = 3𝑥 + 2 with 𝑥1 = 0 and 𝑥2 = 3, find the rate of change",
            answers: [
              { text: "3", correct: true },
              { text: "15", correct: false },
              { text: "10", correct: false },
              { text: "13", correct: false }
            ],
            explanation: "Calculate the rate of change of 𝑓(𝑥) = 3𝑥 + 2 between 𝑥1 = 0 and 𝑥2 = 3:\n\n1. Find 𝑓(3) and 𝑓(0).\n\n2. Use the formula (𝑓(𝑥2) - 𝑓(𝑥1)) / (𝑥2 - 𝑥1) to find the rate of change.\n\n3. The correct rate of change is option (a), 3."
          },
          {
            question: "If 𝑔^2 + 𝑡^2 ≥ 𝑐 in the equation of a circle, the circle is ____________?",
            answers: [
              { text: "real", correct: true },
              { text: "complex", correct: false },
              { text: "imaginary", correct: false },
              { text: "complete", correct: false }
            ],
            explanation: "The condition 𝑔^2 + 𝑡^2 ≥ 𝑐 in the equation of a circle determines whether the circle is real:\n\n1. If 𝑔^2 + 𝑡^2 ≥ 𝑐, the circle exists in the real plane.\n\n2. Therefore, the correct answer is option (a), real."
          },
          {
            question: "Find the intercept of a line given by 𝑦 = 𝑎𝑥 + 𝑏",
            answers: [
              { text: "0", correct: false },
              { text: "a", correct: false },
              { text: "b", correct: true },
              { text: "x", correct: false }
            ],
            explanation: "For the equation 𝑦 = 𝑎𝑥 + 𝑏, the intercept is represented by 𝑏, which is the y-intercept when 𝑥 = 0. Therefore, the correct answer is option (c), b."
          },
          {
            question: "Which of the following is a basic identity?",
            answers: [
              { text: "1 + tan² 𝜃 = sec² 𝜃", correct: true },
              { text: "cot² 𝜃 − cos² 𝜃 = 1", correct: false },
              { text: "sin² 𝜃 + 1 = cos² 𝜃", correct: false },
              { text: "none", correct: false }
            ],
            explanation: "The identity 1 + tan² 𝜃 = sec² 𝜃 is a fundamental trigonometric identity. Therefore, the correct answer is option (a)."
          },
          {
            question: "Which represents the line perpendicular to a curve?",
            answers: [
              { text: "−𝑚1𝑚2 = 1", correct: true },
              { text: "𝑚1𝑚2 = 0", correct: false },
              { text: "𝑚2 = 0", correct: false },
              { text: "none", correct: false }
            ],
            explanation: "The condition for perpendicular lines in terms of slopes is given by −𝑚1𝑚2 = 1. This indicates that the product of the slopes of two perpendicular lines is -1. Therefore, the correct answer is option (a)."
          },
          {
            question: "Evaluate cos(π/3) cos(π/6) + sin(π/3) sin(π/6)",
            answers: [
              { text: "√3/2", correct: true },
              { text: "1/2", correct: false },
              { text: "√3", correct: false },
              { text: "2√3", correct: false }
            ],
            explanation: "Use the cosine and sine addition formulas:\n\n1. cos(π/3) cos(π/6) + sin(π/3) sin(π/6) simplifies to cos(π/2), which equals √3/2.\n\n2. Therefore, the correct answer is option (a), √3/2."
          },
          {
            question: "The formula for distance between two points is given as",
            answers: [
              { text: "𝑑² = [(𝑥₂ − 𝑥₁)² + (𝑦₂ − 𝑦₁)²]", correct: true },
              { text: "𝑑 = [(𝑥₁(𝑥₂ − 𝑥₁))² + (𝑦₁(𝑦₂ − 𝑦₁))²", correct: false },
              { text: "𝑑² = √(𝑥₂)² + (𝑦₂)²", correct: false },
              { text: "none of the above", correct: false }
            ],
            explanation: "The correct formula for the distance between two points (𝑥₁, 𝑦₁) and (𝑥₂, 𝑦₂) in a Cartesian plane is 𝑑² = [(𝑥₂ − 𝑥₁)² + (𝑦₂ − 𝑦₁)²]. Therefore, the correct answer is option (a)."
          },
          {
            question: "Evaluate ∫ sin𝜃 / cos𝜃 𝑑𝜃 from 0 to π/3",
            answers: [
              { text: "1", correct: true },
              { text: "2", correct: false },
              { text: "3", correct: false },
              { text: "4", correct: false }
            ],
            explanation: "Integrate sin𝜃 / cos𝜃 with respect to 𝜃:\n\n1. ∫ sin𝜃 / cos𝜃 𝑑𝜃 = ln|cos𝜃| from 0 to π/3.\n\n2. Evaluate the integral at the limits.\n\n3. The correct answer is option (a), 1."
          },
          {
            question: "Simplify sin𝛼 + cos𝛼 / (cos⁴𝛼 − sin⁴𝛼)",
            answers: [
              { text: "1 / (sin𝛼 cos𝛼)", correct: true },
              { text: "1 / (sin𝛼 − cos𝛼)", correct: false },
              { text: "1", correct: false },
              { text: "sin𝛼 + cos𝛼", correct: false }
            ],
            explanation: "Simplify sin𝛼 + cos𝛼 / (cos⁴𝛼 − sin⁴𝛼):\n\n1. Factorize the denominator to (cos²𝛼 - sin²𝛼)(cos²𝛼 + sin²𝛼).\n\n2. Simplify using identities.\n\n3. The correct answer is option (a), 1 / (sin𝛼 cos𝛼)."
          },
          {
            question: "Find the slope of the function 𝑦(𝑡) = 2𝑡² − 5𝑡 + 30, given 𝑡₁ = 3 and 𝑡₂ = 5",
            answers: [
              { text: "11", correct: true },
              { text: "23", correct: false },
              { text: "10", correct: false },
              { text: "21", correct: false }
            ],
            explanation: "Calculate the slope between 𝑡₁ = 3 and 𝑡₂ = 5 for 𝑦(𝑡) = 2𝑡² − 5𝑡 + 30:\n\n1. Find 𝑦(3) and 𝑦(5).\n\n2. Use the slope formula (𝑦(𝑡₂) - 𝑦(𝑡₁)) / (𝑡₂ - 𝑡₁).\n\n3. The correct answer is option (a), 11."
          },
          {
            question: "Find the volume obtained by rotating the area under the curve 𝑦 = 𝑥² from 𝑥 = 0 to 𝑥 = 1",
            answers: [
              { text: "16𝜋/5", correct: false },
              { text: "2𝜋/5", correct: false },
              { text: "3𝜋/5", correct: false },
              { text: "𝜋/5", correct: true }
            ],
            explanation: "To find the volume obtained by rotating the area under the curve 𝑦 = 𝑥² from 𝑥 = 0 to 𝑥 = 1:\n\n1. Use the formula for volume of revolution V = ∫[π(𝑓(𝑥))²] 𝑑𝑥 from 𝑎 to 𝑏.\n\n2. Calculate the integral.\n\n3. The correct answer is option (d), 𝜋/5."
          },
          {
            question: "When two lines are parallel",
            answers: [
              { text: "𝑚₁ = 𝑚₂", correct: true },
              { text: "𝑚₁ = 1 + 𝑚", correct: false },
              { text: "𝑚₁ ÷ 𝑚₂ = 0", correct: false },
              { text: "𝑚₁ ≠ 𝑚₂", correct: false }
            ],
            explanation: "For two lines to be parallel, their slopes (𝑚₁ and 𝑚₂) must be equal. Therefore, the correct answer is option (a), 𝑚₁ = 𝑚₂."
          },
          {
            question: "Evaluate ∫ (4𝑥 − 6𝑒^(1/2𝑥) − 5) 𝑑𝑥",
            answers: [
              { text: "2𝑥² − 12𝑒^(1/2𝑥) − 5𝑥 + 𝑐", correct: true },
              { text: "2𝑥² − 3𝑒^(1/2𝑥) − 5𝑥 + 𝑐", correct: false },
              { text: "2𝑥² − 3𝑒^(1/2𝑥) + 𝑐", correct: false },
              { text: "2𝑥² + 12𝑒^(1/2𝑥) + 𝑐", correct: false }
            ],
            explanation: "Integrate (4𝑥 − 6𝑒^(1/2𝑥) − 5) 𝑑𝑥:\n\n1. ∫ 4𝑥 𝑑𝑥 = 2𝑥²\n2. ∫ 6𝑒^(1/2𝑥) 𝑑𝑥 = -12𝑒^(1/2𝑥)\n3. ∫ 5 𝑑𝑥 = 5𝑥\n4. Combine the results and add the constant of integration 𝑐.\n\nThe correct answer is option (a), 2𝑥² − 12𝑒^(1/2𝑥) − 5𝑥 + 𝑐."
          },
          {
            question: "Evaluate ∫ 𝑥𝑒^(2𝑥) 𝑑𝑥",
            answers: [
              { text: "1/2 𝑥𝑒^(2𝑥) − 𝑒^(2𝑥)/4 + 𝑐", correct: true },
              { text: "1/4 𝑥𝑒^(2𝑥) − 𝑒^(2𝑥)/2 + 𝑐", correct: false },
              { text: "1/2 𝑥𝑒^(2𝑥) − 𝑒^(2𝑥)/2 + 𝑐", correct: false },
              { text: "1/4 𝑥𝑒^(2𝑥) − 𝑒^(2𝑥)/4 + 𝑐", correct: false }
            ],
            explanation: "Integrate 𝑥𝑒^(2𝑥) 𝑑𝑥:\n\n1. Let 𝑢 = 𝑥, 𝑑𝑣 = 𝑒^(2𝑥) 𝑑𝑥. Then, integrate by parts.\n2. Apply the integration by parts formula and solve for the integral.\n\nThe correct answer is option (a), 1/2 𝑥𝑒^(2𝑥) − 𝑒^(2𝑥)/4 + 𝑐."
          },
          {
            question: "Find the area of ∆𝐴𝐵𝐶 if 𝐴 = 400, 𝐵 = 700, and 𝑎 = 3.5",
            answers: [
              { text: "3.64", correct: false },
              { text: "9.86", correct: false },
              { text: "4.93", correct: false },
              { text: "8.42", correct: true }
            ],
            explanation: "To find the area of ∆𝐴𝐵𝐶, use the formula Area = 1/2 * 𝑎 * 𝑏 * sin(𝐶).\n1. Calculate the area using the given sides 𝐴 = 400, 𝐵 = 700, and 𝐶 = 3.5.\n2. The correct answer is option (d), 8.42."
          },
          {
            question: "Evaluate ∫ 𝑑𝑥 / (1 − cos 𝑥)",
            answers: [
              { text: "ln |tan(𝑥/2)| + 𝑐", correct: false },
              { text: "− tan(𝑥/2) + 𝑐", correct: false },
              { text: "none", correct: true },
              { text: "tan⁻¹(𝑥/2) + 𝑐", correct: false }
            ],
            explanation: "The integral ∫ 𝑑𝑥 / (1 − cos 𝑥) is not expressible in elementary functions, hence the correct answer is option (c), none."
          },
          {
            question: "Integrate 3√𝑥 / 𝑥^(3/4) with respect to x",
            answers: [
              { text: "12𝑥^(7/4) / 7 + 𝑐", correct: false },
              { text: "12𝑥^(4/7) / 7 + 𝑐", correct: false },
              { text: "12𝑥^(4/7) / 7 + 𝑐", correct: false },
              { text: "12𝑥^(7/4) / 7 + 𝑐", correct: true }
            ],
            explanation: "To integrate 3√𝑥 / 𝑥^(3/4), rewrite it as 3𝑥^(1/2) / 𝑥^(3/4) = 3𝑥^(7/4).\n1. Integrate to get 12𝑥^(7/4) / 7 + 𝑐.\n2. The correct answer is option (d), 12𝑥^(7/4) / 7 + 𝑐."
          },
          {
            question: "Find the derivative of the function 𝑦 = √(7 − 2𝑥)^4 with respect to x",
            answers: [
              { text: "8𝑥 − 28", correct: false },
              { text: "6𝑥 + 8", correct: false },
              { text: "6𝑥 − 5", correct: false },
              { text: "8𝑥 − 28", correct: true }
            ],
            explanation: "Differentiate 𝑦 = √(7 − 2𝑥)^4 with respect to x:\n1. Use chain rule and power rule to differentiate.\n2. The correct answer is option (d), 8𝑥 − 28."
          },
          {
            question: "A straight line which is perpendicular to a tangent at the curve 𝑦 = 𝑓(𝑥) is called",
            answers: [
              { text: "asymptote", correct: false },
              { text: "intercept", correct: false },
              { text: "normal", correct: true },
              { text: "none", correct: false }
            ],
            explanation: "A straight line which is perpendicular to a tangent at the curve 𝑦 = 𝑓(𝑥) is called the normal to the curve at that point. Therefore, the correct answer is option (c), normal."
          },


        // Add more questions for Math until you have 30
    ],
    english: [
        { question: "Which word is an antonym of 'happy'?", answers: [{ text: "Sad", correct: true }, { text: "Joyful", correct: false }, { text: "Excited", correct: false }, { text: "Ecstatic", correct: false }], explanation: "Sad is an antonym of happy." },
        { question: "What is the past tense of 'run'?", answers: [{ text: "Ran", correct: true }, { text: "Running", correct: false }, { text: "Runs", correct: false }, { text: "Run", correct: false }], explanation: "The past tense of 'run' is 'ran'." },
        {
            question: "The concept used to show the time of an action relative to the time the sentence is used is ......",
            answers: [
                { text: "An hypothesis", correct: false },
                { text: "Concord", correct: false },
                { text: "Tense", correct: true },
                { text: "Pronominal", correct: false }
            ],
            explanation: "Tense is used to show the time of an action relative to the time the sentence is used."
        },
        {
            question: "The tense of a sentence is manifested on ......",
            answers: [
                { text: "Nominal element", correct: false },
                { text: "Verbal structure", correct: false },
                { text: "Adjectival element", correct: false },
                { text: "Verbal element", correct: true }
            ],
            explanation: "The tense of a sentence is manifested on the verbal element."
        },
        {
            question: "The correspondence between the form of the verb and the concept of time is referred to as ......",
            answers: [
                { text: "Momegraph", correct: false },
                { text: "Syntactic structure", correct: false },
                { text: "Tense", correct: true },
                { text: "Linguistic concept", correct: false }
            ],
            explanation: "The correspondence between the form of the verb and the concept of time is referred to as tense."
        },
        {
            question: "He was playing with us when my father entered the room; The italicised portion of the sentence is an example of .......",
            answers: [
                { text: "Simple present tense", correct: false },
                { text: "Past progressive tense", correct: true },
                { text: "Past perfect tense", correct: false },
                { text: "None of the above", correct: false }
            ],
            explanation: "The italicised portion 'was playing' is an example of past progressive tense."
        },
        {
            question: "Scientific writings involving relating hypothesis usually make use of ......",
            answers: [
                { text: "Past progressive tense", correct: false },
                { text: "Simple future tense", correct: true },
                { text: "Present perfect tense", correct: false },
                { text: "Present progressive tense", correct: false }
            ],
            explanation: "Scientific writings involving relating hypothesis usually make use of simple future tense."
        },
        {
            question: "The word 'Photograph' writing or drawing with light; The quoted verb in the sentence is expressed in the .......",
            answers: [
                { text: "Simple present tense", correct: true },
                { text: "Future tense", correct: false },
                { text: "Present perfect progressive tense", correct: false },
                { text: "A and B above", correct: false }
            ],
            explanation: "The verb 'writing' is expressed in the simple present tense."
        },
        {
            question: "The research is given direction by .......",
            answers: [
                { text: "Good hypothesis", correct: true },
                { text: "Classification", correct: false },
                { text: "Generalizing", correct: false },
                { text: "Inductive reasoning", correct: false }
            ],
            explanation: "Good hypothesis gives direction to the research."
        },
        {
            question: "One of the following assists in making generalizations",
            answers: [
                { text: "Hypothesis", correct: false },
                { text: "Deductive reasoning", correct: true },
                { text: "Classification", correct: false },
                { text: "Comparison", correct: false }
            ],
            explanation: "Deductive reasoning assists in making generalizations."
        },
        {
            question: "One of the following is not a definition of hypothesis",
            answers: [
                { text: "A preposition assumed for the sake of an argument", correct: false },
                { text: "A supposition", correct: false },
                { text: "A theory to prove or to be disproved", correct: false },
                { text: "To fix the boundary or limits of words", correct: true }
            ],
            explanation: "Hypothesis is not defined as fixing the boundary or limits of words."
        },
        {
            question: "All the following are types of definitions except .....",
            answers: [
                { text: "Logical or formal definition", correct: false },
                { text: "Definition by description", correct: false },
                { text: "Definition by example", correct: false },
                { text: "Definition by analysis", correct: true }
            ],
            explanation: "Definition by analysis is not considered a type of definition in this context."
        },
        {
            question: "A major quality of definition by synonyms is ......",
            answers: [
                { text: "Brevity", correct: true },
                { text: "Verbosity", correct: false },
                { text: "Repetition", correct: false },
                { text: "Emphasis", correct: false }
            ],
            explanation: "A major quality of definition by synonyms is brevity."
        },
        {
            question: "Each of the types of definitions attempts to shed light on the following except ......",
            answers: [
                { text: "Topic", correct: false },
                { text: "Comprehension", correct: true },
                { text: "Concept", correct: false },
                { text: "Subject", correct: false }
            ],
            explanation: "Each of the types of definitions attempts to shed light on the topic, concept, or subject but not specifically comprehension."
        },
        {
            question: "Comparative and metaphorical definition is characterized by .......",
            answers: [
                { text: "Antonym", correct: false },
                { text: "Description", correct: false },
                { text: "Simile", correct: true },
                { text: "Conciseness", correct: false }
            ],
            explanation: "Comparative and metaphorical definition is characterized by simile."
        },
        {
            question: "One of the following depends on similarities and differences",
            answers: [
                { text: "Classification", correct: true },
                { text: "Hypothesizing", correct: false },
                { text: "Generalizing", correct: false },
                { text: "Conclusion", correct: false }
            ],
            explanation: "Classification depends on similarities and differences."
        },
        {
            question: "Inductive reasoning assists in .......",
            answers: [
                { text: "Forming a tentative opinion", correct: false },
                { text: "Drawing conclusion", correct: true },
                { text: "Making generalizations", correct: false },
                { text: "Describing items", correct: false }
            ],
            explanation: "Inductive reasoning assists in drawing conclusions."
        },
        {
            question: "One of the four communication skills is .......",
            answers: [
                { text: "Speaking", correct: false },
                { text: "Reading", correct: false },
                { text: "Writing", correct: true },
                { text: "Listening", correct: false }
            ],
            explanation: "Writing is one of the four communication skills."
        },
        {
            question: "An expressive skill central to academic performances is known as ...........",
            answers: [
                { text: "Examination", correct: false },
                { text: "Writing", correct: true },
                { text: "Note taking", correct: false },
                { text: "Reading", correct: false }
            ],
            explanation: "Writing is an expressive skill central to academic performances."
        },
        {
            question: "In writing, both mental and muscular tasks are employed to express the following except",
            answers: [
                { text: "Ideas", correct: false },
                { text: "Concept", correct: false },
                { text: "Intention", correct: true },
                { text: "Phenomena", correct: false }
            ],
            explanation: "In writing, mental and muscular tasks are employed to express ideas, concepts, and phenomena, but not specifically intention."
        },
        {
            question: "In a given text, it is essential that ....... leads accurately to further ones",
            answers: [
                { text: "Initial point", correct: true },
                { text: "Writing up", correct: false },
                { text: "Interactive act", correct: false },
                { text: "Communication", correct: false }
            ],
            explanation: "In a given text, it is essential that the initial point leads accurately to further ones."
        },
        {
            question: "Two things are joined together in English language through ............",
            answers: [
                { text: "Communication", correct: false },
                { text: "Connectives", correct: true },
                { text: "Replacives", correct: false },
                { text: "Communicatives", correct: false }
            ],
            explanation: "In English language, two things are joined together through connectives."
        },
        {
            question: "In writing, connectives are synonymous with",
            answers: [
                { text: "Connectors", correct: true },
                { text: "Defectors", correct: false },
                { text: "Denotors", correct: false },
                { text: "Phrases", correct: false }
            ],
            explanation: "In writing, connectives are synonymous with connectors."
        },
        {
            question: "'And' connective is useful in .......",
            answers: [
                { text: "Presenting idea", correct: true },
                { text: "Re-grouping", correct: false },
                { text: "Numbering", correct: false },
                { text: "Formalising", correct: false }
            ],
            explanation: "The conjunction 'and' is primarily used to connect similar ideas or items in a sentence, making it useful for presenting ideas."
        },
        {
            question: "Notably ........ connective comes in handy in perfect re-statement of ideas",
            answers: [
                { text: "And", correct: true },
                { text: "Or", correct: false },
                { text: "But", correct: false },
                { text: "none of the above", correct: false }
            ],
            explanation: "The connective 'and' is often used to restate or add additional information to an idea already mentioned."
        },
        {
            question: "For drawing contrast with ideas first presented,....... connective comes in handy",
            answers: [
                { text: "And", correct: false },
                { text: "Or", correct: false },
                { text: "But", correct: true },
                { text: "None of the above", correct: false }
            ],
            explanation: "The conjunction 'but' is used to introduce a contrast or an exception to the previous statement."
        },
        {
            question: "Summation as an instance of the but connective is denoted by",
            answers: [
                { text: "Therefore", correct: true },
                { text: "Rather", correct: false },
                { text: "By the way", correct: false },
                { text: "Besides", correct: false }
            ],
            explanation: "'Therefore' is used to introduce a conclusion or summary that follows logically from previous statements, making it a type of summation."
        },
        {
            question: "Discourse reference is known as",
            answers: [
                { text: "Communication", correct: false },
                { text: "Connective", correct: false },
                { text: "Phoric", correct: false },
                { text: "Referencing", correct: true }
            ],
            explanation: "Discourse reference involves linking parts of the text to create cohesion and is commonly known as referencing."
        },
        {
            question: "Phoric reference creates a link between",
            answers: [
                { text: "What is being said", correct: false },
                { text: "What has been said before", correct: true },
                { text: "A and b", correct: false },
                { text: "None of the above", correct: false }
            ],
            explanation: "Phoric reference refers to previous elements in the discourse, thus linking what has been said before."
        },
        {
            question: "Anaphoric reference refers",
            answers: [
                { text: "Forward", correct: false },
                { text: "Backward", correct: true },
                { text: "To discourse issues", correct: false },
                { text: "To connectives", correct: false }
            ],
            explanation: "Anaphoric reference is when a word or phrase refers back to another word or phrase previously mentioned in the discourse."
        },
        {
            question: "Cataphoric reference refers",
            answers: [
                { text: "Forward", correct: true },
                { text: "Backward", correct: false },
                { text: "To communicative elements", correct: false },
                { text: "To aspects", correct: false }
            ],
            explanation: "Cataphoric reference is when a word or phrase refers forward to another word or phrase that will be mentioned later in the discourse."
        },
        {
            question: "Lexical items such as here, thus, as follows, the following refers to",
            answers: [
                { text: "Anaphoric reference", correct: false },
                { text: "Cataphoric reference", correct: true },
                { text: "Phoric reference", correct: false },
                { text: "None of the above", correct: false }
            ],
            explanation: "These lexical items (here, thus, as follows, the following) point forward to information that will come later in the text, indicating cataphoric reference."
        },
        {
            question: "The statement 'this should interest you' is representative of .....",
            answers: [
                { text: "Cataphoric reference", correct: true },
                { text: "Anaphoric reference", correct: false },
                { text: "Demonstrative", correct: false },
                { text: "Summation", correct: false }
            ],
            explanation: "The phrase 'this should interest you' refers to something that will be mentioned later, thus it is a cataphoric reference."
        },
        {
            question: "When words are reported within the paragraph, there is",
            answers: [
                { text: "Repetition", correct: true },
                { text: "Substitution", correct: false },
                { text: "Ellipsis", correct: false },
                { text: "Basis", correct: false }
            ],
            explanation: "When words are repeated within a paragraph, it helps to reinforce the idea being communicated."
        },
        {
            question: "Repetition facilitates",
            answers: [
                { text: "Coherence of thoughts", correct: true },
                { text: "Substitution of ideas", correct: false },
                { text: "Purposeful discourse", correct: false },
                { text: "Monotony", correct: false }
            ],
            explanation: "Repetition helps to maintain the coherence of thoughts, making the discourse more understandable."
        },
        {
            question: "Words in substitution are",
            answers: [
                { text: "Repeated", correct: false },
                { text: "Replaced", correct: true },
                { text: "Removed", correct: false },
                { text: "Omitted", correct: false }
            ],
            explanation: "Substitution involves replacing a word or phrase with another to avoid repetition."
        },
        {
            question: "In ellipsis, words are",
            answers: [
                { text: "Omitted", correct: true },
                { text: "Replaced", correct: false },
                { text: "Repeated", correct: false },
                { text: "Removed", correct: false }
            ],
            explanation: "Ellipsis is a grammatical feature where words are omitted because they are implied by the context."
        },
        {
            question: "Punctuation marks such as comma, semicolon, colon, are recognized as",
            answers: [
                { text: "Repetition", correct: false },
                { text: "Connectives", correct: true },
                { text: "Substitution", correct: false },
                { text: "Ellipsis", correct: false }
            ],
            explanation: "Punctuation marks like commas, semicolons, and colons help to connect parts of a sentence or different sentences, acting as connectives."
        },
        {
            question: "A ....... highlights the information that an applicant for a job needs to supply for an employer",
            answers: [
                { text: "Personal detail", correct: false },
                { text: "Curriculum vitae", correct: true },
                { text: "Reference", correct: false },
                { text: "Working experience", correct: false }
            ],
            explanation: "A curriculum vitae (CV) is a document that outlines an applicant's personal details, education, work experience, and other relevant information for an employer."
        },
        {
            question: "The definition type which attempts to say concisely what something is by equaling it with what is similar to it is ......",
            answers: [
                { text: "Definition by synonyms", correct: true },
                { text: "Definition by example", correct: false },
                { text: "Definition by antonym", correct: false },
                { text: "Definition by comparison", correct: false }
            ],
            explanation: "Definition by synonyms involves explaining what something is by comparing it to something similar."
        },
        {
            question: "The first step in project writing is .......",
            answers: [
                { text: "Looking for a vacuum", correct: false },
                { text: "Looking for aim and objectives", correct: true },
                { text: "Picking a topic", correct: false },
                { text: "Hypothesis", correct: false }
            ],
            explanation: "The first step in project writing is to look for the aim and objectives of the project to guide the research."
        },
        {
            question: "Stating the hypothetical term of a project initiative statement waiting confirmation or rejection through research is known as",
            answers: [
                { text: "Statement of the problem", correct: false },
                { text: "Background to the study", correct: false },
                { text: "Hypothesis", correct: true },
                { text: "Aim and objectives", correct: false }
            ],
            explanation: "A hypothesis is a statement that can be tested through research and is either confirmed or rejected based on the findings."
        },
        {
            question: "A critique of existing points in project writing sets the basis for its",
            answers: [
                { text: "Aim and objectives", correct: true },
                { text: "Significance", correct: false },
                { text: "Method or procedure", correct: false },
                { text: "Analysis", correct: false }
            ],
            explanation: "Critiquing existing points in a project allows the writer to identify gaps and areas of improvement, which then sets the basis for defining the aim and objectives of the project."
        },
        {
            question: "It is usually significant to locate the statement of the problem of a project in a ........",
            answers: [
                { text: "Vacuum", correct: true },
                { text: "Statement", correct: false },
                { text: "Method", correct: false },
                { text: "Background", correct: false }
            ],
            explanation: "Locating the statement of the problem in a vacuum means defining it in a context that is void of specific methods or background details, focusing purely on the issue at hand."
        },
        {
            question: "Background to the study of a thesis reveals its",
            answers: [
                { text: "Introduction", correct: true },
                { text: "Hypothesis", correct: false },
                { text: "Problems", correct: false },
                { text: "Objective", correct: false }
            ],
            explanation: "The background to the study in a thesis provides the introduction, setting the stage for the research by explaining the context and significance of the study."
        },
        {
            question: "A good characteristic of an outline is",
            answers: [
                { text: "Brevity", correct: false },
                { text: "Clarity", correct: true },
                { text: "Accuracy", correct: false },
                { text: "None of the above", correct: false }
            ],
            explanation: "A good outline should be clear, making it easy for readers to understand the structure and flow of the main text."
        },
        {
            question: "The coherence of an outline is imperative here for it to serve as a visual aid that ........ represents the main text",
            answers: [
                { text: "Graphically", correct: true },
                { text: "Tactically", correct: false },
                { text: "Artistically", correct: false },
                { text: "Sequentially", correct: false }
            ],
            explanation: "An outline serves as a visual aid that graphically represents the structure and main points of the text, aiding in comprehension and organization."
        },
        {
            question: "Inductive reasoning assists a good deal in",
            answers: [
                { text: "Reasoning", correct: false },
                { text: "Hypothesizing", correct: false },
                { text: "Drawing conclusions", correct: true },
                { text: "Classification", correct: false }
            ],
            explanation: "Inductive reasoning involves drawing general conclusions from specific observations, making it essential for forming conclusions based on gathered data."
        },
        {
            question: "A good tool in making generalization is",
            answers: [
                { text: "Classification", correct: true },
                { text: "Logical definition", correct: false },
                { text: "Deductive reasoning", correct: false },
                { text: "Hypothesizing", correct: false }
            ],
            explanation: "Classification helps in grouping similar items together, which is a fundamental step in making generalizations."
        },
        {
            question: "Making generalization is assisted by ......",
            answers: [
                { text: "Generalizing", correct: false },
                { text: "Deductive reasoning", correct: true },
                { text: "Definition", correct: false },
                { text: "Hypothesizing", correct: false }
            ],
            explanation: "Deductive reasoning starts with general principles to reach specific conclusions, assisting in making accurate generalizations."
        },
        {
            question: "Structure symmetry in our expression is",
            answers: [
                { text: "Drawing conclusion", correct: false },
                { text: "Synonyms", correct: false },
                { text: "Generalizing", correct: false },
                { text: "Concord", correct: true }
            ],
            explanation: "Concord refers to agreement in grammatical structure, ensuring symmetry and coherence in expressions."
        },
        {
            question: "One of the following is a supposition, a proposition assumed for the sake of an argument",
            answers: [
                { text: "Generalizing", correct: false },
                { text: "Classification", correct: false },
                { text: "Hypothesis", correct: true },
                { text: "Grammar", correct: false }
            ],
            explanation: "A hypothesis is a supposition made for the purpose of argument or investigation, to be tested through further research."
        },
        {
            question: "To arrange or place into classes is a function of ........",
            answers: [
                { text: "Synonyms", correct: false },
                { text: "Classification", correct: true },
                { text: "Division", correct: false },
                { text: "Definition", correct: false }
            ],
            explanation: "Classification involves organizing items into categories based on shared characteristics."
        },
        {
            question: "Research is given a direction by .........",
            answers: [
                { text: "Generalization", correct: false },
                { text: "Good Hypothesis", correct: true },
                { text: "Deductive reasoning", correct: false },
                { text: "Synonyms", correct: false }
            ],
            explanation: "A good hypothesis provides a clear direction for research, outlining what is to be tested or explored."
        },
        {
            question: "One of the following set limits to idea?",
            answers: [
                { text: "Description", correct: false },
                { text: "Classification", correct: false },
                { text: "Definition", correct: true },
                { text: "Hypothesis", correct: false }
            ],
            explanation: "Definition sets limits to ideas by clearly explaining what they are and distinguishing them from what they are not."
        },
        {
            question: "The following are different types of definition except .........",
            answers: [
                { text: "Logical definition", correct: false },
                { text: "Definition by description", correct: false },
                { text: "Metaphorical definition", correct: false },
                { text: "Definition by classification", correct: true }
            ],
            explanation: "Logical definition, definition by description, and metaphorical definition are recognized types of definitions, whereas definition by classification is not a standard type."
        },
        {
            question: "One of the following types of definition attempts to say concisely what something is by equaling it with what is similar to it.",
            answers: [
                { text: "Definition by example", correct: false },
                { text: "Formal definition", correct: false },
                { text: "Definition by synonyms", correct: true },
                { text: "Metaphoric definition", correct: false }
            ],
            explanation: "Definition by synonyms explains a term by comparing it to another word with a similar meaning."
        },
        {
            question: "Which type of definition makes use of the characteristics of what is being described",
            answers: [
                { text: "Definition by description", correct: true },
                { text: "Logical definition", correct: false },
                { text: "Definition by synonyms", correct: false }
            ],
            explanation: "Definition by description involves detailing the characteristics and features of what is being defined."
        },
        {
            question: "The function of grammatical statement that depends on similarities and differences in scientific English is .......",
            answers: [
                { text: "Definition", correct: false },
                { text: "Classification", correct: true },
                { text: "Reasoning", correct: false },
                { text: "Generalizing", correct: false }
            ],
            explanation: "Classification in scientific English involves grouping based on similarities and differences, aiding in clear communication and understanding."
        },
        {
            question: "Classification is often guided by the following except",
            answers: [
                { text: "Interest of the classifier", correct: false },
                { text: "Nature of the data at hand", correct: false },
                { text: "Provisional explanation of anything", correct: true },
                { text: "Specification of certain fields", correct: false }
            ],
            explanation: "Provisional explanation, which refers to a hypothesis, is not a guiding factor in classification; instead, it is the classifier's interest, data nature, and field specifications."
        },
        {
            question: "The plural form of hypothesis is ...............",
            answers: [
                { text: "Hypothesies", correct: false },
                { text: "Hypothessis", correct: false },
                { text: "Hypothesess", correct: false },
                { text: "Hypotheses", correct: true }
            ],
            explanation: "The correct plural form of 'hypothesis' is 'hypotheses'."
        },
        {
            question: "Theory to prove or to be disproved by reference to facts is",
            answers: [
                { text: "Hypothesizing", correct: false },
                { text: "Definition", correct: false },
                { text: "Hypothesis", correct: true },
                { text: "Generalizing", correct: false }
            ],
            explanation: "A hypothesis is a theory or proposition that can be tested and proven or disproven by reference to facts."
        },
        {
            question: "Conclusion is usually drawn using ........... (a) Hypothesizing (b) Deductive reasoning (c) Generalizing (d) Inductive Reasoning",
            answers: [
              { text: "Hypothesizing", correct: false },
              { text: "Deductive reasoning", correct: false },
              { text: "Generalizing", correct: false },
              { text: "Inductive Reasoning", correct: true }
            ],
            explanation: "Conclusion is usually drawn using inductive reasoning, which involves making broad generalizations from specific observations."
          },
          {
            question: "To outline means to............. (a) Define (b) List (c) Show structure (d) Delineate facts",
            answers: [
              { text: "Define", correct: false },
              { text: "List", correct: false },
              { text: "Show structure", correct: true },
              { text: "Delineate facts", correct: false }
            ],
            explanation: "To outline means to show the structure of a document or a presentation, typically in a hierarchical manner."
          },
          {
            question: "Outlining assists in..... (a) making good judgement (b) Organise thought flow (c) Being brief (d) Arriving at good conclusions",
            answers: [
              { text: "making good judgement", correct: false },
              { text: "Organise thought flow", correct: true },
              { text: "Being brief", correct: false },
              { text: "Arriving at good conclusions", correct: false }
            ],
            explanation: "Outlining assists in organizing the flow of thoughts, which helps in structuring content logically."
          },
          {
            question: "A good outline must reflect (a) Grammaticality (b) Orderliners (c) All examples (d) Good conclusion",
            answers: [
              { text: "Grammaticality", correct: false },
              { text: "Orderliners", correct: true },
              { text: "All examples", correct: false },
              { text: "Good conclusion", correct: false }
            ],
            explanation: "A good outline must reflect orderliness, ensuring that the content follows a logical sequence."
          },
          {
            question: "Outlining is good for examination purpose because it's ...... (a) Mnemonic potential (b) Stylistics features (c) Pedagogical importance (d) Linguistic applicability",
            answers: [
              { text: "Mnemonic potential", correct: true },
              { text: "Stylistics features", correct: false },
              { text: "Pedagogical importance", correct: false },
              { text: "Linguistic applicability", correct: false }
            ],
            explanation: "Outlining is good for examination purposes because of its mnemonic potential, helping students remember key points."
          },
          {
            question: "The central defining quality of outlining is ...... (a) Brevity (b) Hypothetical quality (c) Elucidatory nature (d) Simplicity",
            answers: [
              { text: "Brevity", correct: false },
              { text: "Hypothetical quality", correct: false },
              { text: "Elucidatory nature", correct: false },
              { text: "Simplicity", correct: true }
            ],
            explanation: "The central defining quality of outlining is simplicity, making it easier to understand and follow the structure."
          },
          {
            question: "Indentation in outlining enhances ...... (a) Graphic appeal (b) Logical appeal (c) Classificational appeal (d) Phonological appeal",
            answers: [
              { text: "Graphic appeal", correct: false },
              { text: "Logical appeal", correct: false },
              { text: "Classificational appeal", correct: true },
              { text: "Phonological appeal", correct: false }
            ],
            explanation: "Indentation in outlining enhances classificational appeal, helping to visually distinguish different levels of hierarchy."
          },
          {
            question: "Outlining also can be useful in the teaching of ..... (a) Morphology (b) Paragraphing (c) Lexis and structure (d) Punctuation",
            answers: [
              { text: "Morphology", correct: false },
              { text: "Paragraphing", correct: true },
              { text: "Lexis and structure", correct: false },
              { text: "Punctuation", correct: false }
            ],
            explanation: "Outlining can be useful in the teaching of paragraphing, as it helps students organize their thoughts and structure their writing."
          },
          {
            question: "The two clear structures of an outlined text are? (a) Theme and rheme (b) Major and sub-divisions (c) Introduction and body (d) The title and body of the text",
            answers: [
              { text: "Theme and rheme", correct: false },
              { text: "Major and sub-divisions", correct: true },
              { text: "Introduction and body", correct: false },
              { text: "The title and body of the text", correct: false }
            ],
            explanation: "The two clear structures of an outlined text are major and sub-divisions, providing a clear hierarchy and organization of content."
          },
          {
            question: "Most scientific definitions are ...... (a) Narrative (b) Descriptive (c) Expository (d) Analytical",
            answers: [
              { text: "Narrative", correct: false },
              { text: "Descriptive", correct: true },
              { text: "Expository", correct: false },
              { text: "Analytical", correct: false }
            ],
            explanation: "Most scientific definitions are descriptive, providing detailed explanations and characteristics of the concept being defined."
          },
          {
            question: "Classification of items could at times be ........ (a) Objective (b) Analytical (c) Subjective (d) Rhetorical",
            answers: [
              { text: "Objective", correct: false },
              { text: "Analytical", correct: false },
              { text: "Subjective", correct: true },
              { text: "Rhetorical", correct: false }
            ],
            explanation: "Classification of items could at times be subjective, depending on the classifier's perspective or criteria."
          },
          {
            question: "The word definition is from the Latin ...... (a) Definite (b) Definer (c) Diviner (d) Definal",
            answers: [
              { text: "Definite", correct: false },
              { text: "Definer", correct: true },
              { text: "Diviner", correct: false },
              { text: "Definal", correct: false }
            ],
            explanation: "The word definition is from the Latin 'definer', meaning to set bounds or limits."
          },
          {
            question: "Word formation means ..... (a) An attempt to use word appropriately (b) An attempt to manufacture sentence (c) A process by which words are structured, made or produced (d) A process wherein words are appropriately used and produced",
            answers: [
              { text: "An attempt to use word appropriately", correct: false },
              { text: "An attempt to manufacture sentence", correct: false },
              { text: "A process by which words are structured, made or produced", correct: true },
              { text: "A process wherein words are appropriately used and produced", correct: false }
            ],
            explanation: "Word formation means a process by which words are structured, made, or produced, involving various morphological processes."
          },
          {
            question: "Word formation assists students to ........ (a) Read well (b) Understand content of a text (c) Confuse one's reader or listener (d) Use bombast",
            answers: [
              { text: "Read well", correct: false },
              { text: "Understand content of a text", correct: true },
              { text: "Confuse one's reader or listener", correct: false },
              { text: "Use bombast", correct: false }
            ],
            explanation: "Word formation assists students to understand the content of a text by breaking down complex words into their meaningful parts."
          },
          {
            question: "Morpheme could be described as ...... (a) Smallest meaningful unit of a language (b) Smallest meaningless unit of a language (c) Highest meaningless unit of a language (d) Highest meaningful unit of a language",
            answers: [
              { text: "Smallest meaningful unit of a language", correct: true },
              { text: "Smallest meaningless unit of a language", correct: false },
              { text: "Highest meaningless unit of a language", correct: false },
              { text: "Highest meaningful unit of a language", correct: false }
            ],
            explanation: "A morpheme is the smallest meaningful unit of a language, such as 'un-' in 'unhappy'."
          },
          {
            question: "The word 'boy' is an example of a ....... (a) Fixed morpheme (b) Poor morpheme (c) Complex morpheme (d) Free morpheme",
            answers: [
              { text: "Fixed morpheme", correct: false },
              { text: "Poor morpheme", correct: false },
              { text: "Complex morpheme", correct: false },
              { text: "Free morpheme", correct: true }
            ],
            explanation: "The word 'boy' is an example of a free morpheme, which can stand alone as a word."
          },
          {
            question: "In the word 'affixes' the coted morpheme is ..... (a) A free morpheme (b) A bound morpheme (c) A complex morpheme (d) A multi-structure morpheme",
            answers: [
              { text: "A free morpheme", correct: false },
              { text: "A bound morpheme", correct: true },
              { text: "A complex morpheme", correct: false },
              { text: "A multi-structure morpheme", correct: false }
            ],
            explanation: "In the word 'affixes', the morpheme 'fix' is bound because it cannot stand alone and needs to be attached to other morphemes."
          },
          {
            question: "Affixation involves ..... (a) Combination of two free morphemes (b) Combination of two or more free morphemes (c) Combination of two bound morphemes (d) Prefixation and suffixation",
            answers: [
              { text: "Combination of two free morphemes", correct: false },
              { text: "Combination of two or more free morphemes", correct: false },
              { text: "Combination of two bound morphemes", correct: false },
              { text: "Prefixation and suffixation", correct: true }
            ],
            explanation: "Affixation involves the process of adding prefixes or suffixes to base words or stems."
          },
          {
            question: "The coted morpheme in the word 'PRE'fixation is an example of ..... (a) Suffix (b) Prefix (c) Prefixation (d) Suffixation",
            answers: [
              { text: "Suffix", correct: false },
              { text: "Prefix", correct: true },
              { text: "Prefixation", correct: false },
              { text: "Suffixation", correct: false }
            ],
            explanation: "The morpheme 'PRE' in 'prefixation' is an example of a prefix, which is added to the beginning of the word."
          },
          {
            question: "The coted morpheme in the word kitchen'ETTE' is a typical example of ..... (a) Suffix (b) Prefix (c) Prefixation (d) Suffixation",
            answers: [
              { text: "Suffix", correct: true },
              { text: "Prefix", correct: false },
              { text: "Prefixation", correct: false },
              { text: "Suffixation", correct: false }
            ],
            explanation: "The morpheme 'ETTE' in 'kitchenette' is a suffix, added to the end of the word."
          },
          {
            question: "Suffixation is a morpheme placed at ..... (a) The beginning of a word (b) The middle of a word (c) The end of a word (d) Nowhere in a word",
            answers: [
              { text: "The beginning of a word", correct: false },
              { text: "The middle of a word", correct: false },
              { text: "The end of a word", correct: true },
              { text: "Nowhere in a word", correct: false }
            ],
            explanation: "Suffixation involves adding a morpheme at the end of a word."
          },
          {
            question: "The morpheme 'un-' in the word 'unadvisable' is ...... (a) An inflectional morpheme (b) A noun forming morpheme (c) An adjective forming morpheme (d) A derivational morpheme",
            answers: [
              { text: "An inflectional morpheme", correct: false },
              { text: "A noun forming morpheme", correct: false },
              { text: "An adjective forming morpheme", correct: false },
              { text: "A derivational morpheme", correct: true }
            ],
            explanation: "The morpheme 'un-' in 'unadvisable' is a derivational morpheme as it changes the meaning of the base word 'advisable'."
          },
          {
            question: "The morpheme '-let' in the word 'leaflet' means ..... (a) 'Big' (b) Small (c) Large (d) Non",
            answers: [
              { text: "Big", correct: false },
              { text: "Small", correct: true },
              { text: "Large", correct: false },
              { text: "Non", correct: false }
            ],
            explanation: "The morpheme '-let' in 'leaflet' indicates something small."
          },
          {
            question: "Affixation is derivational when it brings about ...... (a) Change in the nominal word (b) Change in the word class alone (c) Change in the meaning of the morpheme",
            answers: [
              { text: "Change in the nominal word", correct: false },
              { text: "Change in the word class alone", correct: false },
              { text: "Change in the meaning of the morpheme", correct: true }
            ],
            explanation: "Affixation is considered derivational when it changes the meaning or part of speech of the base word."
          },
          {
            question: "The process of joining two or more free morphemes together is called .... (a) Affixation (b) Compounding (c) Clipping (d) Suffixation",
            answers: [
              { text: "Affixation", correct: false },
              { text: "Compounding", correct: true },
              { text: "Clipping", correct: false },
              { text: "Suffixation", correct: false }
            ],
            explanation: "The process of joining two or more free morphemes together is called compounding."
          },
          {
            question: "'Sky-rocketting' is an example of ..... (a) Clipping (b) Blending (c) Acronymy (d) Compounding",
            answers: [
              { text: "Clipping", correct: false },
              { text: "Blending", correct: false },
              { text: "Acronymy", correct: false },
              { text: "Compounding", correct: true }
            ],
            explanation: "'Sky-rocketting' is an example of compounding, combining 'sky' and 'rocketing'."
          },
          {
            question: "'Flu' is an example of ..... (a) Clipping (b) Blending (c) Compounding (d) Affixation",
            answers: [
              { text: "Clipping", correct: true },
              { text: "Blending", correct: false },
              { text: "Compounding", correct: false },
              { text: "Affixation", correct: false }
            ],
            explanation: "'Flu' is an example of clipping, shortened from 'influenza'."
          },
          {
            question: "One of these is an example of blending (a) Smog (b) Piano (c) Serious (d) Flu",
            answers: [
              { text: "Smog", correct: true },
              { text: "Piano", correct: false },
              { text: "Serious", correct: false },
              { text: "Flu", correct: false }
            ],
            explanation: "'Smog' is an example of blending, combining 'smoke' and 'fog'."
          },
          {
            question: "'LAUTECH' is an example of (a) Blending (b) Compounding (c) Acronymy (d) Clipping",
            answers: [
              { text: "Blending", correct: false },
              { text: "Compounding", correct: false },
              { text: "Acronymy", correct: true },
              { text: "Clipping", correct: false }
            ],
            explanation: "'LAUTECH' is an example of acronymy, derived from the initials of 'Ladoke Akintola University of Technology'."
          },
          {
            question: "One of these is not an example of blending (a) Motel (b) Hotel (c) Smog (d) Transistore",
            answers: [
              { text: "Motel", correct: false },
              { text: "Hotel", correct: true },
              { text: "Smog", correct: false },
              { text: "Transistore", correct: false }
            ],
            explanation: "'Hotel' is not an example of blending, while 'motel', 'smog', and 'transistore' are blends."
          },
          {
            question: "One of these is not an example of clipping (a) Flu (b) Fridge (c) Piano (d) Smog",
            answers: [
              { text: "Flu", correct: false },
              { text: "Fridge", correct: false },
              { text: "Piano", correct: false },
              { text: "Smog", correct: true }
            ],
            explanation: "'Smog' is not an example of clipping; it is a blend. 'Flu', 'fridge', and 'piano' are examples of clipping."
          },
          {
            question: "One of the following is not an example of Acronymy (a) AC (b) Sg (c) Lifo (d) Piano",
            answers: [
              { text: "AC", correct: false },
              { text: "Sg", correct: false },
              { text: "Lifo", correct: false },
              { text: "Piano", correct: true }
            ],
            explanation: "'Piano' is not an example of acronymy",
          },
          {
            question: "The word 'hydrocephalic' is formed via ......",
            answers: [
              { text: "Affixation", correct: true },
              { text: "Coinage", correct: false },
              { text: "Acronymy", correct: false },
              { text: "Summation", correct: false }
            ],
            explanation: "The word 'hydrocephalic' is formed by adding the prefix 'hydro-' (meaning water) and the suffix '-cephalic' (related to the head). This process is an example of affixation."
          },
          {
            question: "The suffix in the word 'men' is .....",
            answers: [
              { text: "–n", correct: false },
              { text: "–en", correct: false },
              { text: "–s", correct: true },
              { text: "–o", correct: false }
            ],
            explanation: "The plural form of 'man' is 'men'. The suffix '-s' is added to indicate pluralization in English."
          },
          {
            question: "The inflected morpheme in the word 'children' is ......",
            answers: [
              { text: "–s", correct: true },
              { text: "–d", correct: false },
              { text: "–en", correct: false },
              { text: "–ren", correct: false }
            ],
            explanation: "In the word 'children', the plural marker '-s' is an inflectional morpheme that changes the grammatical number from singular to plural."
          },
          {
            question: "'AIDS' is an atypical example of .....",
            answers: [
              { text: "Idioms", correct: false },
              { text: "Blending", correct: false },
              { text: "Compounding", correct: false },
              { text: "Neologism", correct: true }
            ],
            explanation: "'AIDS' stands for Acquired Immunodeficiency Syndrome and is an example of a neologism, a newly coined term or phrase that may not follow typical word formation patterns."
          },
          {
            question: "The word 'amplification' could be broken into .....",
            answers: [
              { text: "Ampli+ -ify+ -ation", correct: true },
              { text: "Ample+ -ify+ -ation", correct: false },
              { text: "Amplify+ -ation", correct: false },
              { text: "Amplify + ation", correct: false }
            ],
            explanation: "The word 'amplification' breaks down into 'ampli' (root), '-ify' (derivational suffix to form a verb), and '-ation' (suffix indicating a noun form)."
          },
          {
            question: "The word 'multinational' could be segmented thus?",
            answers: [
              { text: "Multi-+nation+-al", correct: true },
              { text: "Mult +-ation+-al", correct: false },
              { text: "Multination + -al", correct: false },
              { text: "-multi+action+-al", correct: false }
            ],
            explanation: "'Multinational' consists of the prefix 'multi-' meaning many, 'nation' as the root, and '-al' as a suffix indicating pertaining to."
          },
          {
            question: "'Reproductive' contains the morphemes",
            answers: [
              { text: "Re-+produc(e)+(+)-ve", correct: true },
              { text: "Re+product-+-ve", correct: false },
              { text: "Re-+production+-ive", correct: false },
              { text: "Re+-produc(e)+-ive", correct: false }
            ],
            explanation: "The word 'reproductive' is formed with the prefix 're-' indicating again, 'produc(e)' as the root, and '-ive' as the suffix meaning relating to."
          },
          {
            question: "The word 'reproductive' has the structure?",
            answers: [
              { text: "Bound+free+bound", correct: false },
              { text: "Free+bound+free", correct: true },
              { text: "Free+free+bound", correct: false },
              { text: "Bound+free+free", correct: false }
            ],
            explanation: "In 'reproductive', 're-' (prefix) is free, 'produc(e)' (root) is bound, and '-ive' (suffix) is free, making it a free+bound+free structure."
          },
          {
            question: "'Cy' in the word 'translucency' indicates ......",
            answers: [
              { text: "State, condition or quality", correct: true },
              { text: "Name, effect and time", correct: false },
              { text: "State, effect and time", correct: false },
              { text: "Quality, name and condition", correct: false }
            ],
            explanation: "The morpheme 'cy' in 'translucency' indicates a state, condition, or quality, relating to the property of being translucent."
          },
          {
            question: "The morpheme '-ness' indicates",
            answers: [
              { text: "State or condition", correct: false },
              { text: "Condition or quality", correct: false },
              { text: "State, condition or quality", correct: true },
              { text: "Process, state and condition", correct: false }
            ],
            explanation: "The suffix '-ness' in English forms abstract nouns indicating a state, condition, or quality, such as 'happiness' or 'darkness'."
          },
          {
            question: "English is not used to perform one of the following functions by scientists.",
            answers: [
              { text: "Classify", correct: false },
              { text: "Define", correct: false },
              { text: "Hypothetical", correct: true },
              { text: "Generalise", correct: false }
            ],
            explanation: "English is not used hypothetically by scientists; hypotheses and hypothetical scenarios are typically formed in a formal scientific manner, rather than through the language itself."
          },
          {
            question: "The word 'definition' originates from",
            answers: [
              { text: "Greek", correct: false },
              { text: "Latin", correct: true },
              { text: "German", correct: false },
              { text: "Spanish", correct: false }
            ],
            explanation: "The word 'definition' originates from Latin, derived from 'definitio' meaning a bounding, limitation, or definition."
          },
          {
            question: "Definition fixes the ..... of words",
            answers: [
              { text: "Focus", correct: false },
              { text: "Limits", correct: true },
              { text: "Idea", correct: false },
              { text: "Usage", correct: false }
            ],
            explanation: "Definition establishes the limits or boundaries of the meanings of words, providing clarity and precision in communication."
          },
          {
            question: "Definitions used to achieve rhetorical ends may be influenced by...",
            answers: [
              { text: "Intention", correct: true },
              { text: "Government", correct: false },
              { text: "Impression", correct: false },
              { text: "Personality", correct: false }
            ],
            explanation: "Definitions used for rhetorical purposes are influenced by the speaker or writer's intention to persuade or influence the audience."
          },
          {
            question: "Definitions attempt to shed light on all but one of the following",
            answers: [
              { text: "Topic", correct: false },
              { text: "Concept", correct: false },
              { text: "Subject", correct: false },
              { text: "Opinion", correct: true }
            ],
            explanation: "Definitions aim to clarify and explain topics, concepts, or subjects, not opinions, which are subjective viewpoints."
          },
          {
            question: "Definition that is based on class consideration is",
            answers: [
              { text: "Logical", correct: true },
              { text: "Descriptive", correct: false },
              { text: "Comparative", correct: false },
              { text: "Synonymous", correct: false }
            ],
            explanation: "A logical definition is based on class considerations or categorization, defining a term by placing it in a broader category or class."
          },
          {
            question: "A lion is a wild cat is an example of",
            answers: [
              { text: "Definition by description", correct: true },
              { text: "Formal definition", correct: false },
              { text: "Definition by comparison", correct: false },
              { text: "Definition by synonym", correct: false }
            ],
            explanation: "The statement 'a lion is a wild cat' defines 'lion' by describing its nature or characteristics, hence it is a definition by description."
          },
          {
            question: "Which definition has the tendency to go circular?",
            answers: [
              { text: "Logical", correct: true },
              { text: "Descriptive", correct: false },
              { text: "Comparative", correct: false },
              { text: "Synonymous", correct: false }
            ],
            explanation: "A logical definition can sometimes be circular if the defining term is used in the definition itself, potentially leading to circular reasoning."
          },
          {
            question: "Which definition uses the characteristics of what is being defined?",
            answers: [
              { text: "Logical", correct: false },
              { text: "Descriptive", correct: true },
              { text: "Comparative", correct: false },
              { text: "Synonymous", correct: false }
            ],
            explanation: "A descriptive definition uses the characteristics or attributes of what is being defined to explain its meaning. For example, 'A cleansing soap is a soap that cleanses' defines 'cleansing soap' by describing its function."
          },
          {
            question: "The type of definition mostly used in the dictionary is",
            answers: [
              { text: "Logical", correct: false },
              { text: "Descriptive", correct: true },
              { text: "Comparative", correct: false },
              { text: "Synonymous", correct: false }
            ],
            explanation: "Dictionaries primarily use descriptive definitions that outline the specific attributes or qualities of a word to clarify its meaning."
          },
          {
            question: "Which of the following illustrates descriptive definition?",
            answers: [
              { text: "A cleansing soap is a soap that cleanses", correct: true },
              { text: "Biology is the science that deals with all forms of life", correct: false },
              { text: "A man is a rational animal", correct: false },
              { text: "An acid is a hater of the skin", correct: false }
            ],
            explanation: "The statement 'A cleansing soap is a soap that cleanses' defines 'cleansing soap' by describing its function, making it an example of a descriptive definition."
          },
          {
            question: "The type of definition characterized by brevity is",
            answers: [
              { text: "Definition by description", correct: false },
              { text: "Formal definition", correct: false },
              { text: "Definition by example", correct: false },
              { text: "Definition by synonym", correct: true }
            ],
            explanation: "A definition by synonym provides a brief explanation by equating the term with another familiar term that has a similar meaning, hence characterized by brevity."
          },
          {
            question: "In which of the following definitions are devices of comparison used?",
            answers: [
              { text: "Definition by description", correct: false },
              { text: "Definition by examples", correct: false },
              { text: "Metaphorical definition", correct: true },
              { text: "Logical definition", correct: false }
            ],
            explanation: "Metaphorical definitions use devices of comparison, such as metaphor or analogy, to explain the meaning of a term by likening it to something else."
          },
          {
            question: "Classification is not guided by one of the following",
            answers: [
              { text: "Interest of the classifier", correct: false },
              { text: "Nature of the data at hand", correct: false },
              { text: "Specification of certain fields", correct: false },
              { text: "Subjectivity of the classifier", correct: true }
            ],
            explanation: "Classification should ideally be objective and systematic, not influenced by subjective opinions or biases of the classifier."
          },
          {
            question: "Hypotheses can be validated or invalidated by",
            answers: [
              { text: "Confirmation", correct: false },
              { text: "Definition", correct: false },
              { text: "Experimentation", correct: true },
              { text: "Conclusion", correct: false }
            ],
            explanation: "Hypotheses are tested through experimentation to determine if they are supported or refuted by empirical evidence."
          },
          {
            question: "Research is given direction by",
            answers: [
              { text: "Definition", correct: false },
              { text: "Classification", correct: false },
              { text: "Hypothesis", correct: true },
              { text: "Generalization", correct: false }
            ],
            explanation: "Research is guided by hypotheses, which serve as tentative explanations or predictions that researchers seek to test and validate through investigation."
          },
          {
            question: "What type of reasoning assists in drawing conclusions?",
            answers: [
              { text: "Deductive", correct: false },
              { text: "Inductive", correct: true },
              { text: "Syllogistic", correct: false },
              { text: "Premised", correct: false }
            ],
            explanation: "Inductive reasoning involves drawing general conclusions from specific observations or evidence, making it essential in scientific inquiry."
          },
          {
            question: "Making generalizations is assisted by",
            answers: [
              { text: "Deductive reasoning", correct: true },
              { text: "Inductive reasoning", correct: false },
              { text: "Syllogistic reasoning", correct: false },
              { text: "Premised reasoning", correct: false }
            ],
            explanation: "Deductive reasoning is used to make generalizations by applying general principles or theories to specific cases or observations."
          },
          {
            question: "A consideration for syllogism is the characteristic of",
            answers: [
              { text: "Deductive reasoning", correct: true },
              { text: "Inductive reasoning", correct: false },
              { text: "Syllogistic reasoning", correct: false },
              { text: "Premised reasoning", correct: false }
            ],
            explanation: "Syllogism involves deductive reasoning where a conclusion is drawn from two given or assumed propositions (premises)."
          },
          {
            question: "Syllogism refers to",
            answers: [
              { text: "Reasoning syllogistically", correct: false },
              { text: "Reasoning inductively", correct: false },
              { text: "Drawing conclusion", correct: false },
              { text: "Making logical statements having premises and conclusion", correct: true }
            ],
            explanation: "Syllogism is a form of reasoning in which a conclusion is drawn from two premises, following a specific logical structure."
          },
          {
            question: "Which of the following does not fit into the same class with others?",
            answers: [
              { text: "Verbs", correct: false },
              { text: "Nouns", correct: false },
              { text: "Pronouns", correct: true },
              { text: "Adjectives", correct: false }
            ],
            explanation: "Pronouns differ from verbs, nouns, and adjectives because they substitute for nouns or noun phrases, functioning differently in grammar and syntax."
          },
          {
            question: "One of the following words belongs to a different disciplinary class?",
            answers: [
              { text: "Diagnose", correct: false },
              { text: "Prescribe", correct: false },
              { text: "Inject", correct: false },
              { text: "Examine", correct: true }
            ],
            explanation: "'Examine' does not belong to the same disciplinary class as 'diagnose', 'prescribe', and 'inject', which are medical actions, whereas 'examine' is a more general term used in various contexts."
          },
          {
            question: "What type of definition is mostly used for scientific definitions of terms and concepts?",
            answers: [
              { text: "Definition by logic", correct: false },
              { text: "Definition by example", correct: false },
              { text: "Definition by description", correct: true },
              { text: "Definition by comparison", correct: false }
            ],
            explanation: "Scientific definitions often employ descriptive definitions that articulate the precise characteristics or properties of terms and concepts."
          },
          {
            question: "Classificational yardsticks include",
            answers: [
              { text: "Arranging and placing words into classes", correct: true },
              { text: "Items and individuals", correct: false },
              { text: "Similarities and differences of items", correct: false },
              { text: "Group of items and categories of classification", correct: false }
            ],
            explanation: "Classificational yardsticks involve the systematic arrangement and categorization of words or items into classes based on shared characteristics or criteria."
          },
          {
            question: "The words 'conclusion and generalisation' are",
            answers: [
              { text: "Absolute synonyms", correct: false },
              { text: "Complete synonyms", correct: false },
              { text: "Hyponyms", correct: false },
              { text: "Near synonyms", correct: true }
            ],
            explanation: "'Conclusion' and 'generalization' are near synonyms, as they both refer to the act of reaching an inference or summary based on evidence or reasoning, though 'conclusion' tends to be more specific."
          },
          {
            question: "What definitional approach is recommended for scientists?",
            answers: [
              { text: "Logical approach", correct: false },
              { text: "Single-definition approach", correct: false },
              { text: "Bi-definition approach", correct: false },
              { text: "Eclectic approach", correct: true }
            ],
            explanation: "Scientists often use an eclectic approach to definitions, combining logical, descriptive, and sometimes comparative methods to provide comprehensive explanations."
          },
          {
            question: "The Formal definition was mostly used by logicians during the time of",
            answers: [
              { text: "Socrates", correct: false },
              { text: "Bongo", correct: false },
              { text: "Aristotle", correct: true },
              { text: "Colby", correct: false }
            ],
            explanation: "Formal definitions, as used by logicians, were particularly prominent during the time of Aristotle, who contributed significantly to the development of logical reasoning."
          },
          {
            question: "Most scientific definitions are largely influenced by",
            answers: [
              { text: "Description and characterization", correct: false },
              { text: "Experiment and Observation", correct: true },
              { text: "Apparatus and hypothesis", correct: false },
              { text: "Comparison and observation", correct: false }
            ],
            explanation: "Scientific definitions are primarily influenced by empirical evidence gathered through experiments and observations, which provide the basis for accurate and objective definitions."
          },
          {
            question: "The descriptive definition of thermal conductivity as the rate of passage of heat from face to face area per difference of temperature between faces when one is thick, is given by",
            answers: [
              { text: "Osuala", correct: false },
              { text: "Odunjo J.F.", correct: false },
              { text: "Sawe", correct: true },
              { text: "Gorrel and Laid", correct: false }
            ],
            explanation: "The descriptive definition of thermal conductivity described in the question is attributed to Sawe."
          },
          {
            question: "One of the following is not a diurnal usage of English language in modern times.",
            answers: [
              { text: "Academic discourse", correct: true },
              { text: "Domestic interaction", correct: false },
              { text: "Mercantile negotiation", correct: false },
              { text: "Everytime interaction", correct: false }
            ],
            explanation: "Academic discourse does not refer to daily or commonplace usage but rather specialized communication within educational or scholarly contexts."
          },
          {
            question: "Which of the following is a definition by synonyms?",
            answers: [
              { text: "Verbs are words like go, come", correct: false },
              { text: "To be proud is to be humble", correct: false },
              { text: "To lie is to recline", correct: false },
              { text: "Facecap is a good lecturer", correct: true }
            ],
            explanation: "The statement 'Facecap is a good lecturer' defines 'Facecap' by comparing it to 'a good lecturer', making it an example of a definition by synonyms."
          },
          {
            question: "Connectives are not used to connect one of the following in English discourse.",
            answers: [
              { text: "Expressions", correct: false },
              { text: "Ideas", correct: false },
              { text: "Information", correct: false },
              { text: "System", correct: true }
            ],
            explanation: "Connectives in English discourse are used to link expressions, ideas, and information to enhance coherence and flow, but not typically to connect systems."
          },
          {
            question: "Which of the following connectors is not used to signal movement from idea to idea?",
            answers: [
              { text: "Besides", correct: true },
              { text: "Now", correct: false },
              { text: "With reference to", correct: false },
              { text: "By the way", correct: false }
            ],
            explanation: "'Besides' is not typically used to signal movement from one idea to another; instead, it indicates addition or an alternative."
          },
          {
            question: "Ideas are summed up using one of the following connectives.",
            answers: [
              { text: "Consequently", correct: false },
              { text: "Above all", correct: false },
              { text: "As a result", correct: false },
              { text: "So", correct: true }
            ],
            explanation: "'So' is used to summarize or conclude ideas, making it a connective that indicates summation."
          },
          {
            question: "\"And connectives\" are used for all but one of the following functions.",
            answers: [
              { text: "Movement from idea to idea", correct: false },
              { text: "Drawing contrast with earlier idea", correct: true },
              { text: "Presenting result of ideas", correct: false },
              { text: "Summing up idea", correct: false }
            ],
            explanation: "Connectives like \"and\" typically do not serve to draw contrast with earlier ideas but rather to add information or link related ideas."
          },
          {
            question: "Which of the following connectives serves to restate ideas.",
            answers: [
              { text: "Instead", correct: false },
              { text: "Conversely", correct: false },
              { text: "Rather", correct: false },
              { text: "Nevertheless", correct: true }
            ],
            explanation: "'Nevertheless' is a connective used to introduce a contrasting idea that serves to restate or affirm the original point."
          },
          {
            question: "Which of the following connectives is functionally odd?",
            answers: [
              { text: "Accordingly", correct: false },
              { text: "Consequently", correct: false },
              { text: "Finally", correct: true },
              { text: "So", correct: false }
            ],
            explanation: "'Finally' is functionally odd among the given connectives as it typically denotes the last in a series or sequence, rather than cause-effect relationships."
          },
          {
            question: "Anaphoric reference points",
            answers: [
              { text: "Forward", correct: false },
              { text: "Backward", correct: true },
              { text: "Forward and Backward", correct: false },
              { text: "None of the above", correct: false }
            ],
            explanation: "Anaphoric reference points in language refer backward to something previously mentioned, aiding in coherence and cohesion."
          },
          {
            question: "Which of the following is not used for connecting functions?",
            answers: [
              { text: "Phoric reference", correct: false },
              { text: "Substitution", correct: false },
              { text: "Logical connectors", correct: false },
              { text: "None of the above", correct: true }
            ],
            explanation: "None of the options listed is specifically used solely for connecting functions; they serve various roles in discourse."
          },
          {
            question: "It was raining ....I took a taxi.",
            answers: [
              { text: "Or", correct: false },
              { text: "So", correct: true },
              { text: "But", correct: false },
              { text: "Because", correct: false }
            ],
            explanation: "'So' is used here to indicate a consequence or result following the rain, making it the appropriate connective."
          },
          {
            question: "She quit her job.. she is looking for a new one now.",
            answers: [
              { text: "As well as", correct: false },
              { text: "Whereas", correct: false },
              { text: "So", correct: true },
              { text: "Because", correct: false }
            ],
            explanation: "'So' is used to show a consequence or subsequent action after quitting the job, linking the two sentences logically."
          },
          {
            question: "He doesn't like her .... she is not honest.",
            answers: [
              { text: "Even if", correct: false },
              { text: "Because", correct: true },
              { text: "But", correct: false },
              { text: "So", correct: false }
            ],
            explanation: "'Because' is used to indicate a reason or cause for the first statement ('He doesn't like her'), linking it to the second statement ('she is not honest')."
          },
          {
            question: "They walked home ....there were no more buses.",
            answers: [
              { text: "Therefore", correct: false },
              { text: "Although", correct: false },
              { text: "Because", correct: true },
              { text: "Or", correct: false }
            ],
            explanation: "'Because' is used to explain the reason ('there were no more buses') for the action ('They walked home')."
          },
          {
            question: "It was cold ....I shut the window.",
            answers: [
              { text: "Unless", correct: false },
              { text: "So", correct: true },
              { text: "Because", correct: false },
              { text: "Otherwise", correct: false }
            ],
            explanation: "'So' is used to indicate the consequence or action taken ('I shut the window') due to the cold weather."
          },
          {
            question: "How many of you want to attend the seminar, ..... I was saying?",
            answers: [
              { text: "As", correct: true },
              { text: "Therefore", correct: false },
              { text: "And", correct: false },
              { text: "So", correct: false }
            ],
            explanation: "'As' is used to introduce or link to a statement or topic that was previously mentioned ('the seminar')."
          },
          {
            question: "He must be from a rich home .... he spends a lot of money on gifts for his girlfriend.",
            answers: [
              { text: "Because", correct: true },
              { text: "Attend", correct: false },
              { text: "So", correct: false },
              { text: "Yet", correct: false }
            ],
            explanation: "'Because' is used to indicate a reason or cause for the conclusion drawn ('He must be from a rich home')."
          },
          {
            question: "She punished the little girl .... put salt in his coffee.",
            answers: [
              { text: "When", correct: false },
              { text: "Who", correct: true },
              { text: "Even if", correct: false },
              { text: "Therefore", correct: false }
            ],
            explanation: "'Who' is used here to refer back to 'the little girl', indicating that 'the little girl' is the one who put salt in his coffee."
          },
          {
            question: "Joe is rich;.... his cousin Josephine is poor.",
            answers: [
              { text: "And", correct: false },
              { text: "But", correct: true },
              { text: "Nevertheless", correct: false },
              { text: "Afterward", correct: false }
            ],
            explanation: "'But' is used to contrast the wealth of Joe with the poverty of his cousin Josephine."
          },
          {
            question: "The children didn't study ...., they failed the course.",
            answers: [
              { text: "That", correct: false },
              { text: "And", correct: false },
              { text: "So", correct: true },
              { text: "Hence", correct: false }
            ],
            explanation: "'So' is used here to indicate the consequence of not studying, which led to failing the course."
          },
          {
            question: "We live in the same building,....we hardly see each other.",
            answers: [
              { text: "Because", correct: false },
              { text: "So", correct: false },
              { text: "Therefore", correct: false },
              { text: "But", correct: true }
            ],
            explanation: "'But' is used to contrast the fact that they live in the same building with the fact that they hardly see each other."
          },
          {
            question: "It was a windy and rainy night... I decided to go out.",
            answers: [
              { text: "But", correct: false },
              { text: "So", correct: false },
              { text: "Yet", correct: true },
              { text: "Therefore", correct: false }
            ],
            explanation: "'Yet' is used to express contrast between the adverse weather conditions and the decision to go out."
          },
          {
            question: "These tools are old ....still good.",
            answers: [
              { text: "And", correct: false },
              { text: "Because", correct: false },
              { text: "But", correct: true },
              { text: "Therefore", correct: false }
            ],
            explanation: "'But' is used to contrast the age of the tools with their functionality, indicating that despite being old, they are still in good condition."
          },
          {
            question: "The classes are quite difficult .....I'm doing well.",
            answers: [
              { text: "Therefore", correct: false },
              { text: "Yet", correct: true },
              { text: "But", correct: false },
              { text: "Or", correct: false }
            ],
            explanation: "'Yet' is used here to contrast the difficulty of the classes with the speaker's good performance."
          },
          {
            question: "They visited lots of castles ....palaces in England.",
            answers: [
              { text: "Or", correct: false },
              { text: "And", correct: true },
              { text: "But", correct: false },
              { text: "Whereas", correct: false }
            ],
            explanation: "'And' is used to indicate the addition of visiting castles and palaces in England."
          },
          {
            question: "Leafy vegetables, .... cabbage and lettuce, are good sources of many vitamins.",
            answers: [
              { text: "Unless", correct: false },
              { text: "For instance", correct: true },
              { text: "Hence", correct: false },
              { text: "As well as", correct: false }
            ],
            explanation: "'For instance' is used to provide examples (cabbage and lettuce) of leafy vegetables, indicating they are good sources of many vitamins."
          },
          {
            question: "You need to work hard .... you can have better result.",
            answers: [
              { text: "When", correct: false },
              { text: "So that", correct: false },
              { text: "And", correct: false },
              { text: "Or", correct: true }
            ],
            explanation: "'Or' is used here to suggest a condition where either working hard or having better results are possible outcomes."
          },
          {
            question: "Babalola wants to buy some new T-Shirts, ....he needs to save money to buy some new books.",
            answers: [
              { text: "So that", correct: false },
              { text: "And", correct: false },
              { text: "But", correct: true },
              { text: "Although", correct: false }
            ],
            explanation: "'But' is used to contrast Babalola's desire to buy new T-Shirts with the necessity to save money for new books."
          },
          {
            question: "Tola is selfish,...is rich.",
            answers: [
              { text: "When", correct: false },
              { text: "But", correct: true },
              { text: "So", correct: false },
              { text: "Although", correct: false }
            ],
            explanation: "'But' is used to contrast Tola being selfish with the fact that she is rich."
          },
          {
            question: "She can speak French ..... she can't write it.",
            answers: [
              { text: "So", correct: false },
              { text: "However", correct: false },
              { text: "But", correct: true },
              { text: "Meanwhile", correct: false }
            ],
            explanation: "'But' is used to contrast the ability to speak French with the inability to write it."
          },
          {
            question: "He worked hard ..... he passed all his examinations.",
            answers: [
              { text: "Because", correct: false },
              { text: "However", correct: false },
              { text: "Unless", correct: false },
              { text: "So", correct: true }
            ],
            explanation: "'So' is used here to indicate the result of working hard, which is passing all his examinations."
          },
          {
            question: "He went home .... he was tired.",
            answers: [
              { text: "Unless", correct: false },
              { text: "Because", correct: true },
              { text: "So", correct: false },
              { text: "Therefore", correct: false }
            ],
            explanation: "'Because' is used to indicate the reason ('he was tired') for the action ('he went home')."
          },
          {
            question: "She is working late next Friday ..... she can't come to the party.",
            answers: [
              { text: "So", correct: false },
              { text: "Therefore", correct: false },
              { text: "Unless", correct: false },
              { text: "Whereas", correct: true }
            ],
            explanation: "'Whereas' is used here to contrast the fact that she is working late next Friday with the fact that she can't come to the party."
          },
          {
            question: "We will not go for a walk,....it stops raining.",
            answers: [
              { text: "So", correct: false },
              { text: "Unless", correct: false },
              { text: "Until", correct: false },
              { text: "Or", correct: true }
            ],
            explanation: "'Or' is used here to suggest an alternative condition where either going for a walk or it stopping raining are possible outcomes."
          },
          {
            question: "I have to help my mother in her garden..... I can go to the cinema",
            answers: [
              { text: "Because", correct: false },
              { text: "Unless", correct: false },
              { text: "Yet", correct: false },
              { text: "Therefore", correct: true }
            ],
            explanation: "'Therefore' is used to indicate the consequence of helping my mother in her garden, which allows me to go to the cinema."
          },
          {
            question: "I will try to help her in the garden .... I have got little time",
            answers: [
              { text: "So that", correct: false },
              { text: "Because", correct: false },
              { text: "But", correct: true },
              { text: "However", correct: false }
            ],
            explanation: "'But' is used here to contrast the willingness to help in the garden with the lack of time available."
          },
          {
            question: "I like comedies ..... my friend prefers horror films",
            answers: [
              { text: "And", correct: false },
              { text: "But", correct: true },
              { text: "Therefore", correct: false },
              { text: "Whereas", correct: false }
            ],
            explanation: "'But' is used to contrast the speaker's preference for comedies with the preference of their friend for horror films."
          },
          {
            question: "She is always helpful and friendly to me .... I like her very much",
            answers: [
              { text: "But", correct: false },
              { text: "So", correct: true },
              { text: "Therefore", correct: false },
              { text: "Unless", correct: false }
            ],
            explanation: "'So' is used here to indicate the reason ('she is always helpful and friendly to me') for the speaker liking her very much."
          },
          {
            question: "You should learn more .... you might fail your exams",
            answers: [
              { text: "Unless", correct: false },
              { text: "Because", correct: false },
              { text: "So", correct: false },
              { text: "Otherwise", correct: true }
            ],
            explanation: "'Otherwise' is used here to suggest an alternative outcome to not learning more, which is the possibility of failing exams."
          },
          {
            question: "He must be very clever,.... he wouldn't have passed such a hard exam",
            answers: [
              { text: "However", correct: false },
              { text: "Unless", correct: false },
              { text: "Otherwise", correct: false },
              { text: "So", correct: true }
            ],
            explanation: "'So' is used here to indicate the inference that he must be very clever because he passed such a hard exam."
          },
          {
            question: "I am tired today.....I couldn't sleep last night",
            answers: [
              { text: "Therefore", correct: false },
              { text: "But", correct: false },
              { text: "Because", correct: false },
              { text: "So", correct: true }
            ],
            explanation: "'So' is used here to indicate the reason ('I couldn't sleep last night') for being tired today."
          },
          {
            question: "The word viophobic is formed through",
            answers: [
              { text: "Compounding", correct: false },
              { text: "Reduplication", correct: false },
              { text: "Affixation", correct: true },
              { text: "Suffixation", correct: false }
            ],
            explanation: "The word 'viophobic' is formed by adding the suffix '-phobic' to the root 'vio-', which indicates fear. This process is known as affixation."
          },
          {
            question: "The root morpheme in phi phobic is",
            answers: [
              { text: "Ophio", correct: false },
              { text: "Phobic", correct: false },
              { text: "phiophob", correct: false },
              { text: "Phobia", correct: true }
            ],
            explanation: "The root morpheme in 'phiphobic' is 'phobia', which means fear."
          },
          {
            question: "The headword of the expression full-blown panic episode is",
            answers: [
              { text: "Full", correct: false },
              { text: "Panic", correct: false },
              { text: "Episode", correct: true },
              { text: "Full-blown", correct: false }
            ],
            explanation: "'Episode' is the headword in the expression 'full-blown panic episode', as it is the central word that denotes the occurrence or instance of a panic."
          },
          {
            question: "The expression of a particular thing is a",
            answers: [
              { text: "Clause", correct: false },
              { text: "Phrase", correct: true },
              { text: "Sentence", correct: false },
              { text: "Gerund", correct: false }
            ],
            explanation: "An expression of a particular thing is categorized as a 'phrase' in linguistic terms."
          },
          {
            question: "One of the following is not a form of the main verb",
            answers: [
              { text: "Base", correct: false },
              { text: "Ed", correct: false },
              { text: "Es", correct: true },
              { text: "Ing", correct: false }
            ],
            explanation: "'Es' is not a form of the main verb in English. The forms 'base', 'ed', and 'ing' are commonly recognized forms of verbs."
          },
          {
            question: "The bound morpheme in oviophobic can be matched with which of the following, considering word class?",
            answers: [
              { text: "Situation", correct: false },
              { text: "Irrational", correct: true },
              { text: "Spiders", correct: false },
              { text: "Anxiety", correct: false }
            ],
            explanation: "The bound morpheme '-phobic' in 'oviphobic' relates to 'irrational fear'. It is used to form adjectives indicating fear of something, in this case, 'oviphobic' refers to the fear of eggs."
          },
          {
            question: "Which of the following is not a structural classification of English sentence?",
            answers: [
              { text: "Simple", correct: false },
              { text: "Declarative", correct: true },
              { text: "Complex", correct: false },
              { text: "Compound-complex", correct: false }
            ],
            explanation: "'Declarative' is not a structural classification of English sentences. It is a functional classification that describes sentences that make a statement."
          },
          {
            question: "The nominal structure of the sight of the thing feared is",
            answers: [
              { text: "MH", correct: false },
              { text: "MHQ", correct: true },
              { text: "HQ", correct: false },
              { text: "H only", correct: false }
            ],
            explanation: "'MHQ' stands for 'modifier-head-quale'. It represents the structure of noun phrases where a modifier (like 'sight of the thing feared') modifies a head noun ('thing') with a quale ('feared')."
          },
          {
            question: "One of the following is not a cohesive device.",
            answers: [
              { text: "Reference", correct: false },
              { text: "Connection", correct: false },
              { text: "Repetition", correct: false },
              { text: "Substitution", correct: true }
            ],
            explanation: "'Substitution' is not typically considered a cohesive device in the same way as 'reference', 'connection', and 'repetition'. Cohesive devices are words or phrases that help connect ideas within a text."
          },
          {
            question: "Which of the following is essential to the composition of words in English?",
            answers: [
              { text: "Languages", correct: false },
              { text: "Morphemes", correct: true },
              { text: "Units", correct: false },
              { text: "Word formation", correct: false }
            ],
            explanation: "Morphemes are the smallest units of meaning in language. They are essential to the composition of words in English as they combine to form words by various processes of word formation."
          },
          {
            question: "The suffix in manageable is a/an",
            answers: [
              { text: "Noun", correct: false },
              { text: "Verb", correct: false },
              { text: "Adjective", correct: true },
              { text: "Adverb", correct: false }
            ],
            explanation: "The suffix '-able' in 'manageable' is used to form adjectives from verbs, indicating that something can be managed."
          },
          {
            question: "Which of the following is not a word formation process?",
            answers: [
              { text: "Compounding", correct: false },
              { text: "Affixational", correct: true },
              { text: "Abbronymy", correct: false },
              { text: "Neologism", correct: false }
            ],
            explanation: "'Affixational' is not a word formation process itself; rather, it describes a category of processes that involve adding affixes (prefixes and suffixes) to base words."
          },
          {
            question: "Which is the odd item in the following?",
            answers: [
              { text: "Dr.", correct: false },
              { text: "A. O.", correct: true },
              { text: "Rev.", correct: false },
              { text: "Lt.", correct: false }
            ],
            explanation: "'A. O.' is the odd item as it does not commonly represent a title or designation in the same way as 'Dr.', 'Rev.', and 'Lt.' do."
          },
          {
            question: "Recent events strengthened her _____ to find out the truth about the stolen money.",
            answers: [
              { text: "Resolve", correct: true },
              { text: "Decision", correct: false },
              { text: "Interest", correct: false },
              { text: "Zealousness", correct: false }
            ],
            explanation: "In this context, 'resolve' means determination or firmness of purpose, which fits naturally with the sentence."
          },
          {
            question: "I should call _______ your place on my way home.",
            answers: [
              { text: "At", correct: false },
              { text: "In", correct: false },
              { text: "For", correct: false },
              { text: "Of", correct: true }
            ],
            explanation: "The correct preposition to use in this sentence is 'of', indicating calling 'at' or 'to' your place."
          },
          {
            question: "Your idea is _____ variance with mine.",
            answers: [
              { text: "At", correct: false },
              { text: "In", correct: true },
              { text: "To", correct: false },
              { text: "For", correct: false }
            ],
            explanation: "The correct preposition to use in this sentence is 'in', indicating disagreement or difference between ideas."
          },
          {
            question: "The man lives ______ Canada",
            answers: [
              { text: "At", correct: false },
              { text: "In", correct: true },
              { text: "Inside", correct: false },
              { text: "Around", correct: false }
            ],
            explanation: "The correct preposition to use with 'Canada' is 'in', indicating the location where the man lives."
          },
          {
            question: "I schooled _____ Ife .",
            answers: [
              { text: "At", correct: true },
              { text: "In", correct: false },
              { text: "By", correct: false },
              { text: "Inside", correct: false }
            ],
            explanation: "The correct preposition to use with 'Ife' in this context is 'at', indicating the location where schooling took place."
          },
          {
            question: "Outlining addresses the following except",
            answers: [
              { text: "Writing a structured detailed statement", correct: false },
              { text: "Presenting essential contents of a passage", correct: false },
              { text: "Representation of organizational pattern of a text", correct: false },
              { text: "Reproducing a text in an abridged version", correct: true }
            ],
            explanation: "Outlining involves summarizing and organizing the structure and key points of a passage or text, not reproducing it in an abridged (shortened) version."
          },
          {
            question: "An outline can be described as",
            answers: [
              { text: "Comprehensive statement of facts and points of an original text", correct: false },
              { text: "The description of a passage", correct: false },
              { text: "Representation of the shortened form of a passage", correct: true },
              { text: "Representation of significant events in a passage", correct: false }
            ],
            explanation: "An outline is a representation of the shortened form of a passage or text, highlighting the structure and key points."
          },
          {
            question: "To write a good outline, it is good to",
            answers: [
              { text: "Read the passage", correct: false },
              { text: "Know the title of the passage", correct: false },
              { text: "Have a good understanding of the passage", correct: true },
              { text: "Know the number of sentences in the passage", correct: false }
            ],
            explanation: "Having a good understanding of the passage is essential for creating a well-structured outline that accurately reflects the main points and structure of the text."
          },
          {
            question: "Good outline is",
            answers: [
              { text: "Structured", correct: true },
              { text: "Not structured", correct: false },
              { text: "Written free styled", correct: false },
              { text: "A sort of rearrangement of the original text", correct: false }
            ],
            explanation: "A good outline is structured, meaning it organizes the main ideas and points of the original text in a logical and clear manner."
          },
          {
            question: "An outline ought to",
            answers: [
              { text: "Be brief", correct: true },
              { text: "Be lengthy", correct: false },
              { text: "Include details", correct: false },
              { text: "Include examples and illustrations", correct: false }
            ],
            explanation: "Outlines should be brief summaries of the main points and structure of a text, providing a concise overview."
          },
          {
            question: "Clarity in outlining suggests",
            answers: [
              { text: "Use of simple words", correct: false },
              { text: "Writer's own choice of words", correct: false },
              { text: "Use of words freely", correct: false },
              { text: "Ambiguous use of words", correct: true }
            ],
            explanation: "Clarity in outlining suggests avoiding ambiguous or unclear language, ensuring that the outline communicates the main ideas clearly and concisely."
          },
          {
            question: "In outlining, there is no need to observe",
            answers: [
              { text: "Clarity", correct: false },
              { text: "Brevity", correct: false },
              { text: "Detailed content", correct: true },
              { text: "The topic", correct: false }
            ],
            explanation: "Outlines are meant to provide a concise overview and structure of a text, so detailed content is not necessary in an outline."
          },
          {
            question: "Accuracy in outlining is desired because",
            answers: [
              { text: "It is good to be accurate", correct: false },
              { text: "It is good to use the writer's words", correct: false },
              { text: "It is a graphic representation of the main text", correct: false },
              { text: "It reflects what the topic is about", correct: true }
            ],
            explanation: "Accuracy in outlining ensures that the outline faithfully represents the main points and structure of the original text."
          },
          {
            question: "The coherence of an outline implies",
            answers: [
              { text: "Orderliness", correct: true },
              { text: "The use of words", correct: false },
              { text: "The significance of the outline", correct: false },
              { text: "Co-relatedness of the topic to the outline", correct: false }
            ],
            explanation: "The coherence of an outline means it is orderly and logically structured, presenting the main ideas in a clear and organized manner."
          },
          {
            question: "Outlining shows the following except",
            answers: [
              { text: "A visual graphic representation of the original text", correct: false },
              { text: "The structure of the original text", correct: false },
              { text: "Sequential arrangement of ideas", correct: false },
              { text: "Sequential arrangement of words", correct: true }
            ],
            explanation: "Outlining focuses on the structure and key points of a text, not on the sequential arrangement of individual words."
          },
          {
            question: "A good outline enhances",
            answers: [
              { text: "Easy representation", correct: false },
              { text: "Easy presentation", correct: false },
              { text: "Easy recall", correct: true },
              { text: "Easy link with the main text", correct: false }
            ],
            explanation: "A well-structured outline facilitates easy recall of the main points and structure of the original text."
          },
          {
            question: "Arabic numerals is employed in outlining to",
            answers: [
              { text: "Show paragraphs", correct: false },
              { text: "Represent actions", correct: false },
              { text: "Indicate ideas", correct: true },
              { text: "Make a brevity", correct: false }
            ],
            explanation: "Arabic numerals are used in outlining to indicate different levels of ideas or points within the outline."
          },
          {
            question: "An outline is usually represented by",
            answers: [
              { text: "Divisions", correct: true },
              { text: "Ranks", correct: false },
              { text: "Sentences", correct: false },
              { text: "Phrases", correct: false }
            ],
            explanation: "An outline is typically represented by divisions or levels that organize the main points and structure of a text."
          },
          {
            question: "Full stop is used in outline to",
            answers: [
              { text: "Indicate the end of a sentence", correct: false },
              { text: "Indicate the end of an idea", correct: false },
              { text: "To demarcate intentions", correct: false },
              { text: "To show divisions", correct: true }
            ],
            explanation: "In outlining, a full stop (period) is used to denote different levels or divisions within the outline structure."
          },
          {
            question: "An outline being mnemonic means",
            answers: [
              { text: "An outline is encoded", correct: false },
              { text: "An outline could be decoded", correct: false },
              { text: "An outline could help the memory", correct: true },
              { text: "An outline could be stylistically organized", correct: false }
            ],
            explanation: "A mnemonic outline aids memory by organizing information in a memorable and structured format."
          },
          {
            question: "Outline is significant since",
            answers: [
              { text: "It represents original text", correct: false },
              { text: "It presents a writer's worldview", correct: false },
              { text: "It enhances the organization of our write ups", correct: true },
              { text: "It deals with ideas", correct: false }
            ],
            explanation: "Outlining enhances the organization and clarity of written compositions by outlining the main points and structure beforehand."
          },
          {
            question: "An outline could be a",
            answers: [
              { text: "Sketch", correct: true },
              { text: "Write-up", correct: false },
              { text: "Passage", correct: false },
              { text: "Thought", correct: false }
            ],
            explanation: "An outline can be likened to a sketch or blueprint that outlines the structure and main points of a text."
          },
          {
            question: "Subdivisions in outlining enhances",
            answers: [
              { text: "Graphical representation of ideas", correct: true },
              { text: "Easy induction of ideas", correct: false },
              { text: "Simple use of language", correct: false },
              { text: "Easy marking", correct: false }
            ],
            explanation: "Subdivisions in outlining improve the graphical representation of ideas by organizing them into hierarchical levels or divisions."
          },
          {
            question: "A good outline reflects",
            answers: [
              { text: "The language of the original", correct: false },
              { text: "The intention of the writer", correct: false },
              { text: "The divisions", correct: true },
              { text: "The topic of the original text", correct: false }
            ],
            explanation: "A well-structured outline reflects the divisions and hierarchical structure of the main points in the original text."
          },
          {
            question: "The special graphic structure of an outline",
            answers: [
              { text: "Could not be mistaken anywhere it is seen", correct: true },
              { text: "Make writers to be cantrons", correct: false },
              { text: "Shows the storyline of a passage", correct: false },
              { text: "Shows the writer's pattern of writing", correct: false }
            ],
            explanation: "The graphic structure of an outline is distinctive and clear, making it easily recognizable and understandable."
          },
          {
            question: "The name given to the variety of language distinguished according to use is",
            answers: [
              { text: "Cronym", correct: false },
              { text: "Morpheme", correct: false },
              { text: "Register", correct: true },
              { text: "Affixation", correct: false }
            ],
            explanation: "Register refers to the variety of language used in different contexts or situations, such as formal or informal register."
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


        // Add more questions for Physics until you have 30
    ]
};

let currentQuestions = [];
let score = 0;
let timer;

function startQuiz(subject) {
    currentQuestions = quizData[subject].sort(() => Math.random() - 0.5).slice(0, 30);
    score = 0;
    document.getElementById('subject-selection').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    startTimer(10 * 60); // 10 minutes in seconds
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
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
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

footer
