const Foods = [
    {
        "cuisine": "French",
        "id": 1,
        "url": "https://admin.expatica.com/fr/wp-content/uploads/sites/5/2023/11/french-onion-soup.jpg",
        "title": "Soupe à l’oignon",
        "body": "This is a traditional French soup made of onions and beef stock, usually served with croutons and melted cheese on top.",
        "price": 200 // Low
    },
    {
        "cuisine": "French",
        "id": 2,
        "url": "https://admin.expatica.com/fr/wp-content/uploads/sites/5/2023/11/coq-au-vin-1.jpg",
        "title": "Coq au vin",
        "body": "The dish sees chicken braised with wine, mushrooms, salty pork or bacon (lardons), mushrooms, onions, garlic, and sometimes even a drop of brandy.",
        "price": 350 // Medium
    },
    {
        "cuisine": "French",
        "id": 3,
        "url": "https://admin.expatica.com/fr/wp-content/uploads/sites/5/2023/11/cassoulet.jpg",
        "title": "Cassoulet",
        "body": "The dish typically uses pork or duck but can include sausages, goose, mutton or whatever else the chef has lying around.",
        "price": 500 // High
    },
    {
        "cuisine": "French",
        "id": 4,
        "url": "https://admin.expatica.com/fr/wp-content/uploads/sites/5/2023/11/boeuf-bourguignon.jpg",
        "title": "Bœuf bourguignon",
        "body": "Bœuf bourguignon is essentially a stew made from beef braised in red wine, beef broth, and seasoned vegetables including pearl onions and mushrooms.",
        "price": 700 // Premium
    },
    {
        "cuisine": "French",
        "id": 5,
        "url": "https://admin.expatica.com/fr/wp-content/uploads/sites/5/2023/11/chocolate-souffle.jpg",
        "title": "Chocolate soufflé",
        "body": "The crispy chocolatey crust is perfect for letting the creamy chocolate ooze out for a rich surprise.",
        "price": 200 // Low
    },
    {
        "cuisine": "French",
        "id": 6,
        "url": "https://admin.expatica.com/fr/wp-content/uploads/sites/5/2023/11/flamiche.jpg",
        "title": "Flamiche",
        "body": "It has a puff-pastry crust filled with cheese and vegetables and resembles a quiche. The traditional filling is leeks and cream.",
        "price": 350 // Medium
    },
    {
        "cuisine": "French",
        "id": 7,
        "url": "https://admin.expatica.com/fr/wp-content/uploads/sites/5/2023/11/confit-de-canard.jpg",
        "title": "Confit de canard",
        "body": "Confit de canard is a tasty French dish of duck – although some chefs use goose or pork – and is one of the finest French dishes.",
        "price": 500 // High
    },
    {
        "cuisine": "French",
        "id": 8,
        "url": "https://admin.expatica.com/fr/wp-content/uploads/sites/5/2023/11/salade-nicoise.jpg",
        "title": "Salade Niçoise",
        "body": "The salad is a mix of lettuce, fresh tomatoes, boiled eggs, (canned or fresh) tuna, green beans, Nicoise Cailletier olives, and anchovies.",
        "price": 700 // Premium
    },
    {
        "cuisine": "Italian",
        "id": 9,
        "url": "https://admin.expatica.com/it/wp-content/uploads/sites/17/2023/11/cacio-e-pepe.jpg",
        "title": "Cacio e Pepe",
        "body": "When in Rome… you might as well eat as the locals do and feast on cacio e pepe, a deceptively simple pasta dish.",
        "price": 200 // Low
    },
    {
        "cuisine": "Italian",
        "id": 10,
        "url": "https://admin.expatica.com/it/wp-content/uploads/sites/17/2023/11/amatriciana.jpg",
        "title": "Amatriciana",
        "body": "The traditional recipe calls for frying juicy guanciale (cured pork jowl), which adds a salty depth to the dish.",
        "price": 350 // Medium
    },
    {
        "cuisine": "Italian",
        "id": 11,
        "url": "https://admin.expatica.com/it/wp-content/uploads/sites/17/2023/11/pizza-napoletana.jpg",
        "title": "Pizza Napoletana",
        "body": "A symbol of Italian food, and Naples, the pizza Napoletana – better known as a Margherita – is a simple yet elegant classic.",
        "price": 500 // High
    },
    {
        "cuisine": "Italian",
        "id": 12,
        "url": "https://admin.expatica.com/it/wp-content/uploads/sites/17/2023/11/pansotti.jpg",
        "title": "Pansotti",
        "body": "Native to the Liguria region of Northwest Italy, pansotti is a type of stuffed pasta, similar to tortellini or ravioli. The word derives from the Genovese pansa, which – appropriately – means potbelly.",
        "price": 700 // Premium
    },
    {
        "cuisine": "Italian",
        "id": 13,
        "url": "https://admin.expatica.com/it/wp-content/uploads/sites/17/2023/11/ossobucco.jpg",
        "title": "Ossobucco",
        "body": "Traditionally, the dish is made with cross-cut veal shanks, vegetables, white wine, and broth, then finished with a garnishing of gremolata.",
        "price": 200 // Low
    },
    {
        "cuisine": "Italian",
        "id": 14,
        "url": "https://admin.expatica.com/it/wp-content/uploads/sites/17/2023/11/risi-e-bisi.jpg",
        "title": "Risi e bisi",
        "body": "To make this dish, cooked rice and peas are added to a simple, flavorsome broth made using onion and fatty pancetta.",
        "price": 350 // Medium
    },
    {
        "cuisine": "Italian",
        "id": 15,
        "url": "https://admin.expatica.com/it/wp-content/uploads/sites/17/2023/11/ribollita-soup.jpg",
        "title": "Ribollita",
        "body": "This hearty, rustic soup comes from the verdant Tuscan countryside.To make ribollita, there are three staple items: stale bread, cannellini beans, and kale.",
        "price": 500 // High
    },
    {
        "cuisine": "Italian",
        "id": 16,
        "url": "https://admin.expatica.com/it/wp-content/uploads/sites/17/2023/11/cacciucco.jpg",
        "title": "Cacciucco",
        "body": "A Tuscan fish stew that packs a flavorful punch, cacciucco is believed to have been created in Livorno more than 500 years ago.",
        "price": 700 // Premium
    },
    {
        "cuisine": "Deutsch",
        "id": 17,
        "url": "https://admin.expatica.com/de/wp-content/uploads/sites/6/2023/11/bratwurst-sauerkraut.jpg",
        "title": "Wurst",
        "body": "One of the most popular varieties is Bratwurst, a pan-fried or roasted sausage made from veal, beef, or pork.",
        "price": 200 // Low
    },
    {
        "cuisine": "Deutsch",
        "id": 18,
        "url": "https://admin.expatica.com/de/wp-content/uploads/sites/6/2023/11/rouladen-plate.jpg",
        "title": "Rouladen",
        "body": "This typical German dish consists of bacon, onions, mustard, and pickles wrapped in thinly sliced beef or veal.",
        "price": 350 // Medium
    },
    {
        "cuisine": "Deutsch",
        "id": 19,
        "url": "https://admin.expatica.com/de/wp-content/uploads/sites/6/2023/11/sauerbraten.jpg",
        "title": "Sauerbraten",
        "body": "Schweinebraten (which translates as ‘roast pork’) is a delicious Bavarian recipe that comes with braised cabbage and dumplings.",
        "price": 500 // High
    },
    {
        "cuisine": "Deutsch",
        "id": 20,
        "url": "https://admin.expatica.com/de/wp-content/uploads/sites/6/2023/11/kartoffelpuffer.jpg",
        "title": "Kartoffelpuffer",
        "body": "Kartoffelpuffer are pancakes made from grated or ground potatoes mixed with flour, egg, onion, and seasoning.",
        "price": 700 // Premium
    },
    {
        "cuisine": "Deutsch",
        "id": 21,
        "url": "https://admin.expatica.com/de/wp-content/uploads/sites/6/2023/11/schnitzel.jpg",
        "title": "Schnitzel",
        "body": "Coated in breadcrumbs and often served with a slice of lemon, this thin, boneless cutlet of meat is an iconic part of German cuisine.",
        "price": 200 // Low
    },
    {
        "cuisine": "Deutsch",
        "id": 22,
        "url": "https://admin.expatica.com/de/wp-content/uploads/sites/6/2023/11/schwarzwalder-kirschtorte.jpg",
        "title": "Schwarzwälder Kirschtorte",
        "body": "Germany’s most famous cake: the delicious Schwarzwälder Kirschtorte (which literally means ‘Black Forest cherry torte’)",
        "price": 350 // Medium
    },
    {
        "cuisine": "Deutsch",
        "id": 23,
        "url": "https://admin.expatica.com/de/wp-content/uploads/sites/6/2023/11/german-apfelstrudel.jpg",
        "title": "Apfelstrudel",
        "body": "Although Apfelstrudel (apple strudel),the popular dish consists of buttery pastry filled with apples that are flavored with sugar, cinnamon, and raisins.",
        "price": 500 // High
    },
    {
        "cuisine": "Deutsch",
        "id": 24,
        "url": "https://admin.expatica.com/de/wp-content/uploads/sites/6/2023/11/kasespatzle-bowl.jpg",
        "title": "Käsespätzle",
        "body": "Germany’s answer to pasta, Spätzle.These soft egg noodles are made from wheat flour and egg and are often topped with cheese (Käsespätzle) and roasted onions.",
        "price": 700 // Premium
    },
    {
        "cuisine": "English",
        "id": 25,
        "url": "https://admin.expatica.com/uk/wp-content/uploads/sites/10/2023/11/fish-chips.jpg",
        "title": "Fish and chips",
        "body": "The fish, which is usually cod, haddock, or plaice, is dipped in batter and deep-fried.Similarly, the chips are cut thicker than French fries and deep-fried twice.",
        "price": 200 // Low
    },
    {
        "cuisine": "English",
        "id": 26,
        "url": "https://admin.expatica.com/uk/wp-content/uploads/sites/10/2023/11/shepherds-pie.jpg",
        "title": "Shepherd’s pie",
        "body": "This popular winter-warmer is the perfect family meal.It consists of minced lamb cooked in gravy or sauce with onions and topped with a layer of fluffy mashed potato.",
        "price": 350 // Medium
    },
    {
        "cuisine": "English",
        "id": 27,
        "url": "https://admin.expatica.com/uk/wp-content/uploads/sites/10/2023/11/fresh-apple-crumble.jpg",
        "title": "Apple crumble",
        "body": "This consists of peeled, cored, and sliced Bramley apples covered with a crumbly breadcrumb mixture; made from flour, sugar, and butter.",
        "price": 500 // High
    },
    {
        "cuisine": "English",
        "id": 28,
        "url": "https://admin.expatica.com/uk/wp-content/uploads/sites/10/2023/11/full-english-breakfast.jpg",
        "title": "Full English breakfast",
        "body": "The Full English consists of fried or grilled bacon, a sausage or two, a fried egg, baked beans, grilled or fried tomatoes, and a slice of fried bread.",
        "price": 700 // Premium
    },
    {
        "cuisine": "English",
        "id": 29,
        "url": "https://admin.expatica.com/uk/wp-content/uploads/sites/10/2023/11/lancashire-hotpot.jpg",
        "title": "Lancashire hotpot",
        "body": "Similar to shepherd’s pie, this hearty stew is made from mutton or lamb and vegetables, topped with sliced potatoes.",
        "price": 200 // Low
    },
    {
        "cuisine": "English",
        "id": 30,
        "url": "https://admin.expatica.com/uk/wp-content/uploads/sites/10/2023/11/bangers-mash.jpg",
        "title": "Bangers and mash",
        "body": "The dish consists of a flavored sausage made of pork, lamb, or beef, served with a pile of mashed potatoes.",
        "price": 350 // Medium
    },
    {
        "cuisine": "English",
        "id": 31,
        "url": "https://admin.expatica.com/uk/wp-content/uploads/sites/10/2023/11/haggis-neeps-tatties.jpg",
        "title": "Haggis",
        "body": "It is essentially the stomach of a sheep stuffed with a mixture of chopped sheep’s heart, liver and lungs, oatmeal, onions, suet, stock, and seasoning.",
        "price": 500 // High
    },
    {
        "cuisine": "English",
        "id": 32,
        "url": "https://admin.expatica.com/uk/wp-content/uploads/sites/10/2023/11/british-roast.jpg",
        "title": "Roast",
        "body": "The delicious feast consists of roasted meat (beef, chicken, lamb or pork) and a selection of vegetables. These might include roast potatoes, carrots, peas, cabbage, and Brussels sprouts.",
        "price": 700 // Premium
    }
];

export default Foods;