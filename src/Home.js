import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import CustomCard from './cards/CustomCard';
import CircularCard from './cards/CircularCard';
import ReviewCard from './cards/ReviewCard';
import './Home.css';
import CustomCardwithText from './cards/CustomCardwithText';

const Home = () => {
  return (
    <Container>
      {/* Fresh from Our Community Section */}
     <Box className="Label"><Typography variant="h4" gutterBottom>FRESH FROM OUR COMMUNITY</Typography></Box>
<Box display="flex" flexWrap="wrap" gap={2}>
  <ReviewCard
    pic="https://i.imgur.com/dAOva3F.jpeg"  // Path to the display picture image
    reviewer="Sid_Selva"
    recipeName="Blueberry Muffins"
    rating={5}
    comment="These blueberry muffins are an absolute delight! They're moist, fluffy, and bursting with fresh blueberries. Perfect for breakfast or a snack."
    time="an hour ago"
  />
  <ReviewCard
    pic="https://i.imgur.com/4A94yl4.jpeg"  // Path to the display picture image
    reviewer="Sundar"
    recipeName="Spaghetti Carbonara"
    rating={4}
    comment="This Spaghetti Carbonara recipe is a winner! The creamy sauce and crispy pancetta make it irresistible. Definitely a crowd-pleaser."
    time="2 hours ago"
  />
   <ReviewCard
    pic="https://i.imgur.com/5ogGFc7.jpeg"  // Path to the display picture image
    reviewer="Deepak"
    recipeName="Classic Margherita Pizza"
    rating={4}
    comment="Simple yet delicious! The fresh basil, tomatoes, and mozzarella create the perfect Margherita pizza. My family loved it!"
    time="8 hours ago"
  />
</Box>

      {/* What We're Craving Section */}
      <Box className="Label"><Typography variant="h4" gutterBottom>WHAT WE'RE CRAVING </Typography></Box>
      <Box display="flex" flexWrap="wrap" gap={2}>
        {/* Add your craving cards here */}
        <CustomCardwithText
          title="COLLECTION"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/79/30/8/EhcIwi89QF6GRvSwt5wq_turkey%2520chili%2520(2%2520of%25203).jpg"
          description="73 WINNING CHILLI RECIPES"
        />
        <CustomCardwithText
          title="COLLECTION"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/86/90/3/xsezF5WFQNSNl86Tef4D_bowties%2520roasted%2520eggplant%2520SITE-3.jpg"
          description="52 CREATIVE EGGPLANT RECIPES..."
        />
        <CustomCardwithText
          title="COLLECTION"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/75/75/8/NxhOU2TMa2ZhvnHCoobQ_0S9A8180.jpg"
          description="40 QUICK & EASY CHICKEN DINNERS"
        />
      </Box>

      {/* Explore More Section */}
     <Box className="Label"><Typography variant="h4" gutterBottom>EXPLORE MORE</Typography></Box>
      <Box display="flex" flexWrap="wrap" gap={2}>
        {/* Add your explore cards here */}
        <CircularCard
          title="COMFORT CLASSICS"
          image="https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/be27babc-a2cb-4807-a7cf-f492f190f130.jpg"
          description="Explore more of our content."
        />
        <CircularCard
          title="INTERNATIONAL EATS"
          image="https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/0ba5e633-8a82-4412-9912-3e4b021d3f36.jpg"
          description="Explore more of our content."
        />
        <CircularCard
          title="BREAKFAST & BRUNCH"
          image="https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/9985d8e3-87d3-4cfc-b312-b355a6630e76.jpg"
          description="Explore more of our content."
        />
        <CircularCard
          title="COMMUNITY PICKS"
          image="https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/b968c752-8018-429d-aa68-b0baf71a9129.jpg"
          description="Explore more of our content."
        />
        <CircularCard
          title="QUICK & EASY"
          image="https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/0e6210a9-7b32-4bae-a8a2-b1f8178cd33a.jpg"
          description="Explore more of our content."
        />
        <CircularCard
          title="THIRSTY DELIGHTS"
          image="https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/4c90f65d-398c-462c-a165-eeca9e73aa8a.jpg"
          description="Explore more of our content."
        />
      </Box>
{/* Trending Now Section */}
<Box className="Label"><Typography variant="h4" gutterBottom>TRENDING NOW</Typography></Box>
      <Box display="flex" flexWrap="wrap" gap={2}>
        {/* Add your Trending cards here */}
        <CustomCard
          title="SPICED PUMPKIN WAFFLES"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/67/93/0/bJaWG2msTwqyQhHTEI7Z_PSW%25206%2520final%2520-%2520pumpkin%2520waffles%2520syrup%2520pour.jpg"
          description="Delicious recipe from our community."
        />
        <CustomCard
          title="TENDER POT ROAST"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/22/13/7/v8NXUJbzQwCB6nL15eWt_PR%25204%2520final%2520-%2520pot%2520roast.jpg"
          description="Another tasty recipe."
        />
        <CustomCard
          title="EASY DUTCH APPLE PIE"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/37/14/3/hPMRhdRCSPizzmzWSr1i_C40IWQyHRk2Tlxn6JB7z_batch23-7181.jpg"
          description="Another tasty recipe."
        />
        <CustomCard
          title="CHOCOLATE MOUSSE"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/89/95/omZbv836RCmfVJbCHwx8-Chocolate-Mousse---8995--1.JPG"
          description="Another tasty recipe."
        />
      </Box>
   {/* Don't Miss Section */}
   <Box className="Label"><Typography variant="h4">DON'T MISS</Typography></Box>
      <Box display="flex" flexWrap="wrap" gap={2}>
        {/* Add your Don't Miss cards here */}
        <CustomCardwithText
          title="COLLECTION"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/17/82/49/C0UjeSAKQi69gCwS0DBQ_0S9A2819.jpg"
          description="50 MEDITERRANEAN DIET RECIPES"
        />
        <CustomCardwithText
          title="COLLECTION"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/29/66/52/EkOcxngGTbqHZQ2OyY89_0S9A2524.jpg"
          description="NACHOS, 20 WAYS "
        />
        <CustomCardwithText
          title="COLLECTION"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/30/92/31/arM2OvNhQ5aKWEBOgAex_easy-bolognese-recipe-6693.jpg"
          description="21 ESSENTIAL ITALIAN PASTAS"
        />
      </Box>
      {/* More Ideas Section */}
<Box className="Label"><Typography variant="h4" gutterBottom>MORE IDEAS</Typography></Box>
      <Box display="flex" flexWrap="wrap" gap={2}>
        {/* Add your More Ideas cards here */}
        <CustomCard
          title="CHICKEN TIKKA MASALA"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/39/46/39/WM8rgRclQsGroxlo7eHA_0S9A3950.jpg"
          description="Delicious recipe from our community."
        />
        <CustomCard
          title="BACON & TOASTED BREAD"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/14/88/99/LlkHd9qlTpqOlaaYdJjy_0S9A6887.jpg"
          description="Another tasty recipe."
        />
         <CustomCard
          title="BIG MAC SAUCE"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/42/94/38/fS29ttQnitOZ9fPVIvxA_0S9A5582.jpg"
          description="Delicious recipe from our community."
        />
        <CustomCard
          title="CROCK-POT BEEF ROAST"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/38/49/05/E2DPzYkQgGkM7QXntE1Q_Instant-pot-pot-roast-2895.jpg"
          description="Another tasty recipe."
        />
      </Box>
      {/* Fan Favorite Section */}
      <Box className="Label"><Typography variant="h4" gutterBottom>FAN FAVORITES</Typography></Box>
      <Box display="flex" flexWrap="wrap" gap={2}>
        {/* Add your Fan Favorite cards here */}
        <CustomCard
          title="OVEN-BAKED RIBS"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/30/32/45/19L2ucjQneoEANPzyfiQ_0S9A6363.jpg"
          description="Delicious recipe from our community."
        />
        <CustomCard
          title="MOZZARELLA STICKS"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/30/97/7/7GmgWw4TTUCCw7xGKQAP_0S9A6434.jpg"
          description="Another tasty recipe."
        />
        <CustomCard
          title="PANCAKES"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/13/22/63/D30C2lxTy6SAflQlb61Q_VP%25204%2520-%2520final_2.jpg"
          description="Delicious recipe from our community."
        />
        <CustomCard
          title="SHAKSHUKA"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/28/18/77/ZyG0h2VYRjei7iPFSWNI_food.com-14.jpg"
          description="Another tasty recipe."
        />
        <CustomCard
          title="OVEN-BAKED SEA BASS"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/35/16/31/TW8kFVRNTwKckUevzMv7_sea-bass-recipe-5393.jpg"
          description="Delicious recipe from our community."
        />
        <CustomCard
          title="BEEF & BROCCOLI STIR-FRY"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/99/47/6/j7L11nRQNeKACth1WJkg_easy-beef-broccoli-stir-fry-6106.jpg"
          description="Another tasty recipe."
        />
        <CustomCard
          title="FAJITAS"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/63/78/6/NrPa79ZESEOqMlMoFDos_fajitas-3.jpg"
          description="Delicious recipe from our community."
        />
        <CustomCard
          title="WHIPPED CREAM FROSTING"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/39/01/3/aeAtoOWHSeWQh9UD7W3K_0S9A6192.jpg"
          description="Another tasty recipe."
        />
        <CustomCard
          title="RESTAURANT TERIYAKI SAUCE"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/13/37/51/IrDuUPieR1GP9vviVyiM_restaurant-teriyaki-sauce-133751_-5.jpg"
          description="Delicious recipe from our community."
        />
        <CustomCard
          title="SKYLINE CHILI"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/11/05/48/N7DcpuhBRW2ahWsyzNAw_0S9A6275.jpg"
          description="Another tasty recipe."
        />
        <CustomCard
          title="BANANA NUT BREAD"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/48/66/41/aB9Ar2MzTy2CIyxoINma_b.jpg"
          description="Delicious recipe from our community."
        />
        <CustomCard
          title="AWARD WINNING CHILI"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/10/58/65/G9Ez7rFmQOmtdHERTPgK_AWC%25204%2520-%2520final_2.png"
          description="Another tasty recipe."
        />
         <CustomCard
          title="BELGIAN WAFFLES"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/63/07/1/Oey61BTvKAEV0tVQz4gU_untitled-1868.jpg"
          description="Delicious recipe from our community."
        />
        <CustomCard
          title="BROILED STEAK"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/16/52/54/XE7h7mpTK69lpb05OhGB_broil-perfect-steak_4984.jpg"
          description="Another tasty recipe."
        />
        <CustomCard
          title="OVEN CRISP CHICKEN WINGS"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/40/49/7/iUlxb54sSWaD9Zp44kfP_FGgWFV4mSVq8aISp1eQG_baked%2520wings%2520(1%2520of%25204).jpg"
          description="Delicious recipe from our community."
        />
        <CustomCard
          title="BROCOLLI & GARLIC PASTA"
          image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/11/70/31/ieo2HguHQEiy7VYnh9cT_0S9A5095.jpg"
          description="Another tasty recipe."
        />
      </Box>
    </Container>
  );
};

export default Home;
