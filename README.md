# Zoni Puzzle

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Description

Zoni Puzzle is a React-based web application designed to visualize and interact with grid-based puzzle data. It provides users with training examples to understand puzzle mechanics and offers an exercise to apply their knowledge. The application dynamically renders grids with color-coded symbols and verifies user answers through an API.

## Features

- **Visual Grid Display**: Render grid-based puzzles with customizable colors.
- **Training Examples**: Multiple examples to help users grasp the puzzle logic.
- **Interactive Exercise**: Users can attempt to solve a test puzzle.
- **Answer Verification**: Validate user answers via an API and display results in real-time.
- **Responsive Design**: Optimized for various screen sizes and devices.

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/zoni-group/puzzle.git
   cd puzzle
   ```

2. **Install Dependencies**

   Ensure you have [Node.js](https://nodejs.org/) installed. Then, install the necessary packages:

   ```bash
   npm install
   ```

3. **Run the Development Server**

   Start the application in development mode:

   ```bash
   npm run dev
   ```

4. **Open in Browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

### Viewing Training Examples

The application displays a series of training examples on the left side of the screen. Each example consists of an input grid and the corresponding output grid, helping users understand the puzzle transformations.

### Attempting the Exercise

On the right side, users can view a test puzzle. After attempting to solve the puzzle, the application automatically verifies the answer by sending it to the backend API and displays the result.

### Customizing Puzzles

To add or modify puzzles, update the `puzzleData` object in `src/app/page.tsx`:

```typescript
const puzzleData: PuzzleData = {
  train: [
    // Add or modify training examples here
  ],
  test: [
    // Add or modify test examples here
  ]
};
```

Each `ExampleData` consists of an `input` and `output` grid, represented as two-dimensional arrays of numbers corresponding to different symbols.

## Project Structure

```
├── README.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
├── src
│   └── app
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── tailwind.config.ts
└── tsconfig.json
```

- **`src/app/page.tsx`**: Main page component that renders training examples and the exercise puzzle.
- **`src/app/globals.css`**: Global CSS styles, including grid cell styles and color classes.
- **`src/app/layout.tsx`**: Root layout component defining the HTML structure.

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **Next.js**: React framework for server-side rendering and static site generation.
- **TypeScript**: Superset of JavaScript for static typing.
- **CSS**: Styling for grid cells and overall layout.
- **Fetch API**: For making HTTP requests to the backend API.

## API Integration

The application verifies user answers by communicating with a backend API. Ensure the API endpoint is correctly configured in `src/app/page.tsx`:

```typescript
const checkAnswer = async () => {
  const puzzleId = 'h3dda6jbel';
  const answer = JSON.stringify(puzzleData.test[0].output);
  const response = await fetch(`https://www.zoni.edu/api/method/zoni_edu.zoni_edu.doctype.puzzle.puzzle.check_answer?puzzle_id=${puzzleId}&answer=${encodeURIComponent(answer)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();
  console.log('Check Answer Response:', data);
  const resultElement = document.getElementById('check-answer-result');
  if (resultElement) {
    if (data.message) {
      resultElement.innerText = data.message;
    }
  }
};
```

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. **Fork the Repository**

   Click the "Fork" button at the top right of the repository page.

2. **Create a New Branch**

   ```bash
   git checkout -b feature/YourFeatureName
   ```

3. **Make Changes**

   Implement your feature or fix.

4. **Commit Your Changes**

   ```bash
   git commit -m "Add your commit message"
   ```

5. **Push to the Branch**

   ```bash
   git push origin feature/YourFeatureName
   ```

6. **Open a Pull Request**

   Navigate to the repository on GitHub and open a pull request.

## License

©  2025 ZONI®. All rights reserved.

---
