import { Question, QuizCategory, QuizDifficulty } from '@/types/quiz';

const quizQuestions: Question[] = [
    // GENERAL - Easy
    { id: 1, question: "What is the capital of Spain?", options: ["Madrid", "Barcelona", "Seville", "Valencia"], correctAnswer: 0, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.EASY },
    { id: 2, question: "What is 5 + 3?", options: ["6", "7", "8", "9"], correctAnswer: 2, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.EASY },
    { id: 3, question: "Which day comes after Monday?", options: ["Sunday", "Tuesday", "Wednesday", "Thursday"], correctAnswer: 1, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.EASY },
    { id: 4, question: "What color is the sky on a clear day?", options: ["Red", "Blue", "Green", "Yellow"], correctAnswer: 1, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.EASY },
    { id: 5, question: "How many hours are there in a day?", options: ["12", "24", "36", "48"], correctAnswer: 1, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.EASY },
    { id: 6, question: "What shape is a stop sign?", options: ["Square", "Circle", "Octagon", "Triangle"], correctAnswer: 2, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.EASY },
    { id: 7, question: "What is the main ingredient in bread?", options: ["Flour", "Sugar", "Salt", "Water"], correctAnswer: 0, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.EASY },
    { id: 8, question: "Which animal is known for its long neck?", options: ["Giraffe", "Elephant", "Kangaroo", "Lion"], correctAnswer: 0, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.EASY },
    { id: 9, question: "What is 10 - 4?", options: ["5", "6", "7", "8"], correctAnswer: 1, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.EASY },
    { id: 10, question: "What fruit is known for its yellow peel?", options: ["Apple", "Orange", "Banana", "Grape"], correctAnswer: 2, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.EASY },

    // GENERAL - Medium
    { id: 11, question: "Who painted the Sistine Chapel ceiling?", options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"], correctAnswer: 1, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.MEDIUM },
    { id: 12, question: "What is the smallest prime number?", options: ["0", "1", "2", "3"], correctAnswer: 2, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.MEDIUM },
    { id: 13, question: "Which country is the Eiffel Tower located in?", options: ["Italy", "Germany", "France", "Spain"], correctAnswer: 2, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.MEDIUM },
    { id: 14, question: "What is the primary language spoken in Brazil?", options: ["Spanish", "Portuguese", "French", "English"], correctAnswer: 1, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.MEDIUM },
    { id: 15, question: "Who wrote 'Romeo and Juliet'?", options: ["Mark Twain", "Charles Dickens", "William Shakespeare", "Jane Austen"], correctAnswer: 2, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.MEDIUM },
    { id: 16, question: "What is the square root of 81?", options: ["8", "9", "10", "11"], correctAnswer: 1, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.MEDIUM },
    { id: 17, question: "What year did the Titanic sink?", options: ["1910", "1912", "1914", "1916"], correctAnswer: 1, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.MEDIUM },
    { id: 18, question: "What is the largest bone in the human body?", options: ["Femur", "Tibia", "Humerus", "Skull"], correctAnswer: 0, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.MEDIUM },
    { id: 19, question: "What gas do plants use in photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"], correctAnswer: 2, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.MEDIUM },
    { id: 20, question: "Which is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], correctAnswer: 1, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.MEDIUM },

    // GENERAL - Hard
    { id: 21, question: "What is the hardest natural substance?", options: ["Gold", "Iron", "Diamond", "Platinum"], correctAnswer: 2, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.HARD },
    { id: 22, question: "Which element has the chemical symbol 'Fe'?", options: ["Iron", "Fluorine", "Phosphorus", "Fermium"], correctAnswer: 0, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.HARD },
    { id: 23, question: "Who discovered penicillin?", options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Isaac Newton"], correctAnswer: 1, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.HARD },
    { id: 24, question: "What is the tallest building in the world?", options: ["Shanghai Tower", "Burj Khalifa", "Abraj Al-Bait", "Petronas Towers"], correctAnswer: 1, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.HARD },
    { id: 25, question: "What is the capital of Iceland?", options: ["Reykjavik", "Oslo", "Copenhagen", "Helsinki"], correctAnswer: 0, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.HARD },
    { id: 26, question: "What is the chemical formula of methane?", options: ["CH4", "CO2", "C2H6", "H2O"], correctAnswer: 0, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.HARD },
    { id: 27, question: "Which country is known as the Land of the Rising Sun?", options: ["China", "South Korea", "Japan", "Thailand"], correctAnswer: 2, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.HARD },
    { id: 28, question: "What is the scientific name for humans?", options: ["Homo Erectus", "Homo Sapiens", "Homo Neanderthalensis", "Homo Habilis"], correctAnswer: 1, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.HARD },
    { id: 29, question: "What is the currency of Switzerland?", options: ["Euro", "Franc", "Dollar", "Pound"], correctAnswer: 1, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.HARD },
    { id: 30, question: "Which artist painted 'The Starry Night'?", options: ["Van Gogh", "Monet", "Da Vinci", "Picasso"], correctAnswer: 0, category: QuizCategory.GENERAL, difficulty: QuizDifficulty.HARD },

    // SCIENCE - Easy
    { id: 31, question: "What planet is known as the Red Planet?", options: ["Mars", "Venus", "Earth", "Jupiter"], correctAnswer: 0, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.EASY },
    { id: 32, question: "What is the main gas found in the air we breathe?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correctAnswer: 2, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.EASY },
    { id: 33, question: "What is H2O commonly known as?", options: ["Salt", "Water", "Sugar", "Alcohol"], correctAnswer: 1, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.EASY },
    { id: 34, question: "What is the force that keeps us on the ground?", options: ["Magnetism", "Gravity", "Friction", "Air Resistance"], correctAnswer: 1, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.EASY },
    { id: 35, question: "Which organ pumps blood in the human body?", options: ["Brain", "Liver", "Heart", "Lungs"], correctAnswer: 2, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.EASY },
    { id: 36, question: "How many planets are in the Solar System?", options: ["7", "8", "9", "10"], correctAnswer: 1, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.EASY },
    { id: 37, question: "What part of the plant absorbs water?", options: ["Stem", "Roots", "Leaves", "Flowers"], correctAnswer: 1, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.EASY },
    { id: 38, question: "What is the closest star to Earth?", options: ["Proxima Centauri", "Sirius", "Sun", "Betelgeuse"], correctAnswer: 2, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.EASY },
    { id: 39, question: "What do bees produce?", options: ["Milk", "Honey", "Silk", "Wax"], correctAnswer: 1, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.EASY },
    { id: 40, question: "Which is the smallest unit of life?", options: ["Organ", "Cell", "Tissue", "Molecule"], correctAnswer: 1, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.EASY },

    // SCIENCE - Medium
    { id: 41, question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Pb", "Fe"], correctAnswer: 0, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.MEDIUM },
    { id: 42, question: "What is the process of water changing from a liquid to a gas?", options: ["Condensation", "Evaporation", "Sublimation", "Freezing"], correctAnswer: 1, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.MEDIUM },
    { id: 43, question: "Which planet has the most moons?", options: ["Earth", "Saturn", "Jupiter", "Uranus"], correctAnswer: 2, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.MEDIUM },
    { id: 44, question: "Which type of blood cell helps fight infections?", options: ["Red", "White", "Platelets", "Plasma"], correctAnswer: 1, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.MEDIUM },
    { id: 45, question: "What is the main function of the liver?", options: ["Filter toxins", "Pump blood", "Digest food", "Control temperature"], correctAnswer: 0, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.MEDIUM },
    { id: 46, question: "What is the basic unit of heredity?", options: ["Gene", "Chromosome", "DNA", "Protein"], correctAnswer: 0, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.MEDIUM },
    { id: 47, question: "What does DNA stand for?", options: ["Deoxyribose Acid", "Deoxyribonucleic Acid", "Deoxybiological Acid", "Dioxyribonucleic Acid"], correctAnswer: 1, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.MEDIUM },
    { id: 48, question: "What is the most abundant element in the Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correctAnswer: 1, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.MEDIUM },
    { id: 49, question: "Which organelle is known as the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"], correctAnswer: 1, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.MEDIUM },
    { id: 50, question: "Which planet is tilted on its side?", options: ["Mars", "Neptune", "Uranus", "Pluto"], correctAnswer: 2, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.MEDIUM },

    // SCIENCE - Hard
    { id: 51, question: "What is the most abundant gas in the Universe?", options: ["Hydrogen", "Oxygen", "Helium", "Carbon Dioxide"], correctAnswer: 0, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.HARD },
    { id: 52, question: "Who developed the theory of general relativity?", options: ["Newton", "Einstein", "Tesla", "Bohr"], correctAnswer: 1, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.HARD },
    { id: 53, question: "What is the approximate age of the Earth?", options: ["4.5 million years", "4.5 billion years", "45 billion years", "450 million years"], correctAnswer: 1, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.HARD },
    { id: 54, question: "Which element is named after a planet?", options: ["Mercury", "Plutonium", "Uranium", "Neptunium"], correctAnswer: 0, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.HARD },
    { id: 55, question: "What is the rarest blood type?", options: ["A", "AB-", "B-", "O+"], correctAnswer: 1, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.HARD },
    { id: 56, question: "What is the study of fungi called?", options: ["Botany", "Mycology", "Zoology", "Ecology"], correctAnswer: 1, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.HARD },
    { id: 57, question: "What type of electromagnetic radiation has the shortest wavelength?", options: ["Gamma rays", "X-rays", "Ultraviolet", "Microwaves"], correctAnswer: 0, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.HARD },
    { id: 58, question: "What is the main ingredient in glass?", options: ["Quartz", "Sand", "Limestone", "Clay"], correctAnswer: 1, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.HARD },
    { id: 59, question: "Which particle is negatively charged?", options: ["Proton", "Electron", "Neutron", "Photon"], correctAnswer: 1, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.HARD },
    { id: 60, question: "What is the atomic number of oxygen?", options: ["6", "7", "8", "9"], correctAnswer: 2, category: QuizCategory.SCIENCE, difficulty: QuizDifficulty.HARD },
    // HISTORY - Easy
{ id: 61, question: "Who was the first President of the United States?", options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"], correctAnswer: 1, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.EASY },
{ id: 62, question: "In which year did World War II end?", options: ["1942", "1945", "1950", "1939"], correctAnswer: 1, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.EASY },
{ id: 63, question: "What ancient civilization built the pyramids?", options: ["Greeks", "Romans", "Egyptians", "Mayans"], correctAnswer: 2, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.EASY },
{ id: 64, question: "Who discovered America in 1492?", options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "Marco Polo"], correctAnswer: 1, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.EASY },
{ id: 65, question: "What famous wall was built in Germany during the Cold War?", options: ["The Berlin Wall", "The Great Wall of China", "The Iron Curtain", "The Western Wall"], correctAnswer: 0, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.EASY },
{ id: 66, question: "What is the name of the ship that transported the Pilgrims to America?", options: ["Mayflower", "Santa Maria", "HMS Victory", "Endeavour"], correctAnswer: 0, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.EASY },
{ id: 67, question: "What country gifted the Statue of Liberty to the USA?", options: ["Germany", "France", "Italy", "Spain"], correctAnswer: 1, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.EASY },
{ id: 68, question: "Who was the first man to step on the moon?", options: ["Yuri Gagarin", "Buzz Aldrin", "Neil Armstrong", "John Glenn"], correctAnswer: 2, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.EASY },
{ id: 69, question: "Which empire was ruled by Julius Caesar?", options: ["Greek", "Egyptian", "Roman", "Ottoman"], correctAnswer: 2, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.EASY },
{ id: 70, question: "Who was known as 'The Maid of Orleans'?", options: ["Queen Elizabeth I", "Joan of Arc", "Cleopatra", "Marie Antoinette"], correctAnswer: 1, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.EASY },

// HISTORY - Medium
{ id: 71, question: "Who was the British Prime Minister during World War II?", options: ["Winston Churchill", "Neville Chamberlain", "Margaret Thatcher", "Tony Blair"], correctAnswer: 0, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.MEDIUM },
{ id: 72, question: "What year did the French Revolution begin?", options: ["1789", "1776", "1804", "1799"], correctAnswer: 0, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.MEDIUM },
{ id: 73, question: "Who was the last Tsar of Russia?", options: ["Alexander II", "Nicholas II", "Peter the Great", "Ivan the Terrible"], correctAnswer: 1, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.MEDIUM },
{ id: 74, question: "What battle marked the end of Napoleon's reign?", options: ["Battle of Austerlitz", "Battle of Waterloo", "Battle of Trafalgar", "Battle of Leipzig"], correctAnswer: 1, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.MEDIUM },
{ id: 75, question: "Who was assassinated in 1963 in Dallas, Texas?", options: ["Martin Luther King Jr.", "John F. Kennedy", "Robert F. Kennedy", "Malcolm X"], correctAnswer: 1, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.MEDIUM },
{ id: 76, question: "What year did the Titanic sink?", options: ["1905", "1912", "1920", "1915"], correctAnswer: 1, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.MEDIUM },
{ id: 77, question: "Which empire built the Colosseum?", options: ["Roman", "Greek", "Byzantine", "Ottoman"], correctAnswer: 0, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.MEDIUM },
{ id: 78, question: "What was the name of the first human civilization?", options: ["Egyptian", "Roman", "Sumerian", "Mayan"], correctAnswer: 2, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.MEDIUM },
{ id: 79, question: "What war was known as 'The Great War' before World War II?", options: ["American Civil War", "World War I", "Franco-Prussian War", "Napoleonic Wars"], correctAnswer: 1, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.MEDIUM },
{ id: 80, question: "What ancient city was covered in ash by a volcanic eruption?", options: ["Athens", "Pompeii", "Rome", "Carthage"], correctAnswer: 1, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.MEDIUM },

// HISTORY - Hard
{ id: 81, question: "Who was the longest-reigning British monarch before Queen Elizabeth II?", options: ["Queen Victoria", "King George III", "Queen Mary", "King Henry VIII"], correctAnswer: 0, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.HARD },
{ id: 82, question: "What treaty ended World War I?", options: ["Treaty of Paris", "Treaty of Versailles", "Treaty of Ghent", "Treaty of Vienna"], correctAnswer: 1, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.HARD },
{ id: 83, question: "Who wrote the Communist Manifesto?", options: ["Karl Marx", "Vladimir Lenin", "Joseph Stalin", "Friedrich Engels"], correctAnswer: 0, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.HARD },
{ id: 84, question: "What year was the Berlin Wall torn down?", options: ["1987", "1989", "1991", "1995"], correctAnswer: 1, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.HARD },
{ id: 85, question: "Who led the slave rebellion in ancient Rome?", options: ["Hannibal", "Spartacus", "Caesar", "Crassus"], correctAnswer: 1, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.HARD },
{ id: 86, question: "What war saw the Charge of the Light Brigade?", options: ["World War I", "Crimean War", "Boer War", "Napoleonic Wars"], correctAnswer: 1, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.HARD },
{ id: 87, question: "What was the first dynasty of Imperial China?", options: ["Han", "Tang", "Zhou", "Qin"], correctAnswer: 3, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.HARD },
{ id: 88, question: "Who was the first emperor of a unified China?", options: ["Liu Bang", "Qin Shi Huang", "Sun Tzu", "Kublai Khan"], correctAnswer: 1, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.HARD },
{ id: 89, question: "Who was the Viking credited with discovering America?", options: ["Eric the Red", "Leif Erikson", "Ragnar Lodbrok", "Bjorn Ironside"], correctAnswer: 1, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.HARD },
{ id: 90, question: "What year marked the fall of Constantinople?", options: ["1453", "1492", "1415", "1517"], correctAnswer: 0, category: QuizCategory.HISTORY, difficulty: QuizDifficulty.HARD },
// GEOGRAPHY - Easy
{ id: 91, question: "What is the largest continent?", options: ["Africa", "Asia", "Europe", "North America"], correctAnswer: 1, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.EASY },
{ id: 92, question: "What is the capital city of France?", options: ["Rome", "Paris", "Berlin", "Madrid"], correctAnswer: 1, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.EASY },
{ id: 93, question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "South Korea", "Thailand"], correctAnswer: 1, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.EASY },
{ id: 94, question: "What is the longest river in the world?", options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"], correctAnswer: 1, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.EASY },
{ id: 95, question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correctAnswer: 3, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.EASY },
{ id: 96, question: "What is the smallest country in the world?", options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"], correctAnswer: 2, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.EASY },
{ id: 97, question: "What mountain range is Mount Everest a part of?", options: ["Andes", "Himalayas", "Rockies", "Alps"], correctAnswer: 1, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.EASY },
{ id: 98, question: "Which desert is the largest in the world?", options: ["Sahara", "Gobi", "Antarctic Desert", "Arabian"], correctAnswer: 2, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.EASY },
{ id: 99, question: "What is the capital city of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], correctAnswer: 2, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.EASY },
{ id: 100, question: "What country is famous for its tulips and windmills?", options: ["Belgium", "Netherlands", "Sweden", "Denmark"], correctAnswer: 1, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.EASY },

// GEOGRAPHY - Medium
{ id: 101, question: "What country has the most natural lakes?", options: ["USA", "India", "Canada", "Brazil"], correctAnswer: 2, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.MEDIUM },
{ id: 102, question: "Which European city is located on two continents?", options: ["Rome", "Istanbul", "Moscow", "Athens"], correctAnswer: 1, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.MEDIUM },
{ id: 103, question: "What is the driest place on Earth?", options: ["Atacama Desert", "Sahara Desert", "Death Valley", "Antarctica"], correctAnswer: 3, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.MEDIUM },
{ id: 104, question: "What is the capital of Canada?", options: ["Toronto", "Ottawa", "Vancouver", "Montreal"], correctAnswer: 1, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.MEDIUM },
{ id: 105, question: "What is the deepest ocean trench?", options: ["Mariana Trench", "Tonga Trench", "Puerto Rico Trench", "Java Trench"], correctAnswer: 0, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.MEDIUM },
{ id: 106, question: "What river flows through Paris?", options: ["Thames", "Danube", "Rhine", "Seine"], correctAnswer: 3, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.MEDIUM },
{ id: 107, question: "What is the largest island in the world?", options: ["Greenland", "Australia", "Madagascar", "New Guinea"], correctAnswer: 0, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.MEDIUM },
{ id: 108, question: "What country has the highest population?", options: ["USA", "India", "China", "Indonesia"], correctAnswer: 2, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.MEDIUM },
{ id: 109, question: "What strait separates Asia and Europe?", options: ["Bering Strait", "Bosporus Strait", "Strait of Gibraltar", "Malacca Strait"], correctAnswer: 1, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.MEDIUM },
{ id: 110, question: "Which US state has the most volcanoes?", options: ["California", "Hawaii", "Alaska", "Oregon"], correctAnswer: 2, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.MEDIUM },

// GEOGRAPHY - Hard
{ id: 111, question: "What is the smallest continent?", options: ["Antarctica", "Europe", "Australia", "South America"], correctAnswer: 2, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.HARD },
{ id: 112, question: "What is the oldest active volcano in the world?", options: ["Mount Etna", "Kilauea", "Mount Vesuvius", "Mauna Loa"], correctAnswer: 0, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.HARD },
{ id: 113, question: "What is the second-longest river in the world?", options: ["Amazon River", "Yangtze River", "Nile River", "Mississippi River"], correctAnswer: 0, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.HARD },
{ id: 114, question: "What country is bordered by both the Atlantic and Indian Oceans?", options: ["Australia", "Brazil", "South Africa", "India"], correctAnswer: 2, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.HARD },
{ id: 115, question: "What city is known as 'The City of Canals'?", options: ["Venice", "Amsterdam", "Bangkok", "Hamburg"], correctAnswer: 0, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.HARD },
{ id: 116, question: "Which desert covers much of Botswana?", options: ["Sahara Desert", "Kalahari Desert", "Gobi Desert", "Namib Desert"], correctAnswer: 1, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.HARD },
{ id: 117, question: "Which country is Mount Kilimanjaro located in?", options: ["Kenya", "Uganda", "Tanzania", "Ethiopia"], correctAnswer: 2, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.HARD },
{ id: 118, question: "Which country has the most UNESCO World Heritage sites?", options: ["Italy", "China", "Spain", "France"], correctAnswer: 0, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.HARD },
{ id: 119, question: "What ocean surrounds the Maldives?", options: ["Pacific", "Atlantic", "Indian", "Southern"], correctAnswer: 2, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.HARD },
{ id: 120, question: "What is the easternmost state of the USA?", options: ["Maine", "Alaska", "Hawaii", "Florida"], correctAnswer: 1, category: QuizCategory.GEOGRAPHY, difficulty: QuizDifficulty.HARD },
]



export const getQuizQuestions = (
  category: QuizCategory,
  difficulty: QuizDifficulty,
  limit: number = 10
): Question[] => {
  let filteredQuestions = quizQuestions.filter(q =>
    q.category === category && q.difficulty === difficulty
  );

  if (filteredQuestions.length === 0) {
    throw new Error(`No questions available for ${category} category with ${difficulty} difficulty`);
  }

  for (let i = filteredQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filteredQuestions[i], filteredQuestions[j]] = [filteredQuestions[j], filteredQuestions[i]];
  }

  return filteredQuestions.slice(0, Math.min(limit, filteredQuestions.length))
    .map(question => {
      const correctOption = question.options[question.correctAnswer];

      for (let i = question.options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [question.options[i], question.options[j]] = [question.options[j], question.options[i]];
      }

      question.correctAnswer = question.options.indexOf(correctOption);

      return question;
    });
};
