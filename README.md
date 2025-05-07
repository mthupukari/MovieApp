# 🎬 MovieApp

**MovieApp** is a cross-platform mobile application built with **React Native** and **Expo**, designed to provide users with an intuitive interface to browse and explore movies. The app fetches data from a movie API, allowing users to view popular, top-rated, and upcoming movies, along with detailed information for each.

## 🚀 Features

- **Browse Movies**: Explore popular, top-rated, and upcoming movies.
- **Search Functionality**: Search for movies by title.
- **Movie Details**: View comprehensive details of selected movies, including synopsis, release date, and ratings.
- **Responsive Design**: Optimized for both Android and iOS devices.

## 🛠️ Technologies Used

- **React Native**: For building the mobile application.
- **Expo**: To streamline development and testing.
- **TypeScript**: For type safety and better code maintainability.
- **Tailwind CSS**: Utilized via `nativewind` for styling components.
- **TMDB API**: To fetch movie data.

## 📂 Project Structure

```
MovieApp/
├── app/                  # Main application components and screens
├── assets/               # Images and other static assets
├── components/           # Reusable UI components
├── constants/            # Constant values used across the app
├── interfaces/           # TypeScript interfaces
├── services/             # API service configurations
├── types/                # Custom TypeScript types
├── .gitignore
├── app.json              # Expo configuration
├── babel.config.js
├── env.example           # Example environment variables file
├── metro.config.js
├── nativewind-env.d.ts
├── package-lock.json
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🧑‍💻 Getting Started

### Prerequisites

- **Node.js** and **npm** installed on your machine.
- **Expo CLI** installed globally:
  ```bash
  npm install -g expo-cli
  ```

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mthupukari/MovieApp.git
   cd MovieApp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the root directory.
   - Copy the contents from `env.example` and add your TMDB API key.

4. **Start the development server**:
   ```bash
   npx expo start
   ```

   - Use the Expo Go app on your device or an emulator to view the app.

## 📌 Future Enhancements

- **User Authentication**: Allow users to log in and save favorite movies.
- **Pagination**: Implement infinite scrolling for movie lists.
- **Offline Support**: Cache data for offline access.
- **Dark Mode**: Add theme support for better user experience.

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mahit Thupukari**  
[GitHub](https://github.com/mthupukari)

---

Feel free to customize this `README.md` to better fit your project's specifics, such as adding screenshots or deployment instructions.
