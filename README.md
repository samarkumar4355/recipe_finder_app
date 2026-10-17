# Recipe Finder

Discover your next favorite recipe with **Recipe Finder**, a React-based web application that lets you search for meals and explore their ingredients, cooking instructions, and more.

##  Features

- **Home Page:** Welcome page with quick-search options for Chicken, Pasta, and Cake.
- **Recipe Search:** Search for recipes by name.
- **Recipe Cards:** View recipe images, meal names, categories, and cuisine types.
- **Recipe Details:** Explore ingredients, measurements, and cooking instructions.
- **YouTube Links:** Watch recipe videos when available.
- **Navigation:** Navigate between pages using React Router.
- **404 Page:** Displays a helpful message when a page does not exist.
- **Loading and Error States:** Displays appropriate messages while fetching recipes or when requests fail.

##  Tech Stack

- **React** — Building the user interface.
- **Vite** — Development server and build tool.
- **React Router DOM** — Client-side routing.
- **CSS3** — Styling and responsive layouts.
- **TheMealDB API** — Fetching recipe information.

##  API Reference

This project uses the free [TheMealDB API](https://www.themealdb.com/api.php).

### Search Recipes

Search for meals by name:

`https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`

### Get Recipe Details

Fetch a recipe using its meal ID:

`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`

The API provides information such as meal names, images, categories, cuisine types, ingredients, measurements, instructions, and video links when available.

## Project Structure

```text
recipe-finder/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Meals.jsx
│   │   ├── Meals.css
│   │   ├── MealDetails.jsx
│   │   ├── MealDetails.css
│   │   ├── NotFound.jsx
│   │   └── NotFound.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── README.md
```

##  Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- A code editor such as Visual Studio Code

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Open the project directory

```bash
cd recipe-finder
```

Replace `recipe-finder` with your actual project directory name if it differs.

### 3. Install dependencies

```bash
npm install
```

If React Router DOM is not already installed, run:

```bash
npm install react-router-dom
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually `http://localhost:5173`.

##  Application Routes

| Route | Description |
|---|---|
| `/` | Home page and quick-search options |
| `/meals?search=chicken` | Search for recipes |
| `/meal/:id` | View details for a selected recipe |
| `*` | 404 page for unknown routes |



## Future Improvements

Possible enhancements include:

- Save favorite recipes.
- Filter meals by category or cuisine.
- Add pagination or load more recipes.
- Add user authentication.
- Build a backend with Node.js and Express.
- Store user favorites and custom recipes in MongoDB.

##  License

This project was created for educational purposes. Recipe data is provided by TheMealDB API and is subject to its applicable terms.

