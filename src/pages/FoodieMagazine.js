import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import './FoodieMagazine.css'; // Import the CSS file

const articles = [
  {
    title: 'How Delicious is This Recipe?',
    description: 'Discover the tantalizing flavors and mouth-watering aromas of this exquisite Italian dish. It\'s a symphony of taste that will leave you craving for more!',
    image: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-main-1.jpg',
    content: `Italian cuisine is renowned for its deliciousness, and this recipe is no exception. The combination of fresh ingredients, aromatic herbs, and expert preparation results in a dish that tantalizes the taste buds. Each bite offers a burst of flavor, from the savory richness of the tomatoes to the creamy texture of the cheese. Whether you're a fan of traditional Italian fare or simply love good food, this recipe is sure to impress.

The secret to its deliciousness lies in the quality of the ingredients and the care taken in the cooking process. Fresh basil, ripe tomatoes, and premium olive oil are just a few of the key components that make this dish stand out. The flavors are balanced perfectly, with just the right amount of seasoning to enhance, rather than overpower, the natural tastes of the ingredients. It's a culinary experience that brings a touch of Italy to your table, leaving you craving for more. Buon appetito!`,
  },
  {
    title: 'How to Make This Recipe',
    description: 'Follow these simple steps to create this delicious Italian masterpiece in your own kitchen. From the freshest ingredients to the final garnish, we\'ve got you covered.',
    image: 'https://mediavine-res.cloudinary.com/image/upload/s--5JUltuJ8--/c_limit,f_auto,fl_lossy,h_1080,q_auto,w_1920/v1592169085/ezlsa8gsx0svaewu28f1.jpg',
    content: `Making this Italian recipe is easier than you might think. Here are the steps to follow:

1. **Gather Ingredients:**
   - Fresh basil leaves
   - Ripe tomatoes
   - Mozzarella cheese
   - Olive oil
   - Garlic
   - Salt and pepper

2. **Preparation:**
   - Preheat your oven to 180°C (350°F).
   - Slice the tomatoes and mozzarella cheese into even pieces.
   - Mince the garlic and chop the basil leaves.

3. **Assembling:**
   - Arrange the tomato and mozzarella slices on a baking dish, alternating between the two.
   - Sprinkle the minced garlic and chopped basil over the top.
   - Drizzle olive oil generously over the dish.
   - Season with salt and pepper to taste.

4. **Cooking:**
   - Place the baking dish in the preheated oven.
   - Bake for about 20-25 minutes, until the cheese is melted and bubbly.

5. **Serving:**
   - Remove from the oven and let it cool slightly.
   - Serve warm, garnished with additional fresh basil leaves.

Enjoy your homemade Italian delicacy! It's a perfect dish to impress your family and friends, and it's sure to become a favorite in your recipe collection.`,
  },
];

const FoodieMagazine = () => {
  return (
    <Container>
      <Grid container spacing={4}>
        {articles.map((article, index) => (
          <Grid item xs={12} key={index}>
            <Card className="blog-card">
              <CardMedia
                component="img"
                height="400"
                image={article.image}
                alt={article.title}
                className="card-media"
              />
              <CardContent className="card-content">
                <Typography gutterBottom variant="h4" component="div">
                  {article.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {article.description}
                </Typography>
                <Typography variant="body1" component="p" className="article-content">
                  {article.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FoodieMagazine;
