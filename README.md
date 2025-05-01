# Pokémon Explorer 🐾

A responsive React-based web application for exploring Pokémon. Users can browse, search, filter, sort, view detailed stats, mark favorites, and compare Pokémon. The app is mobile-friendly and uses React Router, Context API, and Tailwind CSS.

## 🚀 Features

- 🔎 **Search & Filter** Pokémon by name or type
- ↕️ **Sort** Pokémon by ID or name
- 💖 **Favorite** system with persistent storage (localStorage)
- 📄 **Detailed pages** for each Pokémon
- 🔀 **Random Pokémon** button (visible only on mobile)
- 📱 **Responsive** design using Tailwind CSS
- 🛡 **Error handling** with Error Boundaries
- 🔄 **Pagination** for navigating through large lists
- 🔁 **Compare Tool** to compare multiple Pokémon

---

## 🛠 Tech Stack

- **React**
- **React Router**
- **Context API** (for Favorites and Pokémon data)
- **Tailwind CSS**
- **Vite** (for fast development)
- **PokéAPI** (https://pokeapi.co)

---

## 📦 Installation & Setup

1. **Clone the repo:**

```bash
git clone https://github.com/NishantSingh2964/Pokemon-Explorer
cd pokemon-explorer
Install dependencies:

bash
Copy
Edit
npm install
Run the app:

bash
Copy
Edit
npm run dev
Open http://localhost:5173 to view it in your browser.

📂 Project Structure
css
Copy
Edit
src/
├── components/
├── contexts/
├── hooks/
├── pages/
├── App.jsx
├── main.jsx
└── index.css
📝 Notes
Favorites are stored in localStorage, so they persist even after refreshing.

The Random Button appears only on mobile screens (below 640px width).

Uses responsive Tailwind classes like sm:hidden and block sm:hidden.

🤝 Contributing
Pull requests are welcome! If you find a bug or have suggestions, please open an issue.

💫 Acknowledgements
PokéAPI for Pokémon data.

Tailwind CSS for utility-first styling.

