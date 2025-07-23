# Psychology Mini App

## Overview
The Psychology Mini App is an interactive educational application designed to provide users with access to a comprehensive psychology course consisting of 36 lessons. Each lesson includes video content, tests, methodical materials, and helpful tips, all organized in a user-friendly interface.

## Features
- **36 Lesson Icons**: Each lesson is represented by an icon that users can click to access lesson materials.
- **Video Playback**: Users can watch videos associated with each lesson.
- **Interactive Tests**: Each lesson includes a series of tests to assess understanding.
- **Methodical Materials**: Access to additional resources and methodical materials for deeper learning.
- **Helpful Tips**: Users can view tips related to each lesson to enhance their learning experience.
- **Navigation**: Easy navigation between the main menu and lesson-specific content.

## Project Structure
```
psychology-mini-app
├── src
│   ├── assets
│   │   └── icons
│   ├── components
│   │   ├── LessonIcon.tsx
│   │   ├── LessonMenu.tsx
│   │   ├── VideoPlayer.tsx
│   │   ├── TestList.tsx
│   │   ├── MethodicsList.tsx
│   │   ├── TipsList.tsx
│   │   └── MainMenu.tsx
│   ├── screens
│   │   ├── HomeScreen.tsx
│   │   ├── LessonScreen.tsx
│   │   └── MenuScreen.tsx
│   ├── services
│   │   └── googleDriveService.ts
│   ├── styles
│   │   └── theme.ts
│   ├── App.tsx
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd psychology-mini-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
- Run the application:
  ```
  npm start
  ```
- Open your browser and navigate to `http://localhost:3000` to access the app.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.