# Foodie - Food Ordering Website

# Foodie

**Foodie** is a comprehensive multi-page food ordering platform designed with **React** and **Material-UI** to provide a seamless and engaging user experience. The website encompasses various features and functionalities to cater to the needs of both casual users and avid food enthusiasts.

## Key Features

### 1. User Authentication
- The website features a **secure login page** where users can authenticate using credentials managed by the **Fakestore API**. Integration with **Axios** facilitates efficient data fetching and handling, ensuring a smooth login experience.

### 2. Dynamic Navigation Bar
- **Foodie** boasts an intuitive navigation bar that dynamically updates post-authentication to offer a personalized experience. This nav bar includes a **mega menu** with multiple tabs, providing easy access to different sections of the website.

### 3. User-Friendly Interface
- The website is designed with user-friendliness in mind, incorporating **Material-UI** components to deliver a clean and modern look. The interface includes:
  - An **accordion** section in the FAQ page, allowing users to expand and collapse questions for more information.
  - Various sections to navigate through, ranging from browsing food items to completing the checkout process.

### 4. Food Selection and Ordering
- Users can browse and filter a diverse range of food items. Each item includes detailed descriptions, prices, and images to help users make informed choices.
- The ordering process is streamlined, enabling users to add items to their cart, adjust quantities, and proceed to checkout with ease.

### 5. Checkout and Invoice Generation
- The checkout process is designed to be quick and secure, allowing users to review their orders and enter payment information.
- Upon successful order placement, users can **download an invoice** for their purchase, providing a detailed summary of their transaction.

## Additional Functionalities

### Search and Filter Options
- Users can utilize robust search and filter options to quickly find their desired food items based on categories, price ranges, and other criteria.

### User Account Management
- Users can manage their accounts, view order history, and update personal information through their profile page.

## Design Considerations

- **Plain Box Container Design:** The design of the website does not rely on Figma files. Instead, a **plain box container design** approach has been adopted to ensure simplicity and ease of development.

---

In essence, **Foodie** is a well-rounded food ordering website that combines aesthetic appeal, functional efficiency, and user-centric design to deliver an exceptional online food ordering experience. Whether you're looking to grab a quick bite or planning a lavish meal, Foodie has got you covered!

## What is this website made of?

The webpage contains the following:

- React Material UI icons
- Material-UI
- Fakestore API for login
- Food JSON for rendering (A JSON created for our food website)
- Use of Routes (React Router version 6)
- Use of Axios
- Authentication and private route for login
- Filter food items using UseState hook (improved filter functionality from Le Catering)
- Used React hooks like UseState, UseEffect, and UseContext
- Webpage designed using Material-UI and JSX
- Framer Motion for animations in the About page
- Login, logout, and checkout sections
- Used JsPDF to generate invoice
- Ability to download the invoice of your order
- Functional search bar to find specific food items

### Log in details of the website

- Username: mor_2314
- Password: 83r5^_

### Note:
This invoice is simple. In the website's New Arrivals section and in the Privateauthpage, the Rupee symbol is used. However, since jspdf does not support the Rupee symbol, the dollar symbol is used in the My Order page and in the Checkout as well.
