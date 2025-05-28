# Next.js Calculator and Two Sum Application

This is a Next.js application that includes two main features:

1. A calculator for adding two numbers
2. A Two Sum problem solver for sorted arrays

## Features

### Simple Calculator

- Add two numbers with a clean, modern interface
- Real-time calculation
- Input validation
- Responsive design with mobile support

### Two Sum II Solution

- Solves the classic "Two Sum II" problem for sorted arrays
- Features:
  - Input validation for sorted arrays
  - Target sum validation
  - Real-time error feedback
  - Clear solution display
  - Optimized algorithm with O(n) time complexity
  - Constant space complexity O(1)

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- React Hooks
- Modern ESLint Configuration

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm/yarn/pnpm

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd ascendion-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Pages and Navigation

- `/` - Home page with calculator
- `/two-sum` - Two Sum problem solver

## Components

### Calculator (Home Page)

- Simple interface for adding two numbers
- Input validation
- Real-time calculation display

### Two Sum Solver

- Input field for sorted array (comma-separated numbers)
- Target sum input
- Validation for:
  - Empty inputs
  - Invalid numbers
  - Array sorting
  - Minimum array length
- Solution display with indices

### Navbar

- Responsive navigation
- Mobile-friendly menu
- Search functionality (UI only)

## Algorithm Details

The Two Sum II implementation:

- Assumes a 1-indexed sorted array
- Returns indices of two numbers that add up to target
- Uses two-pointer technique for O(n) time complexity
- Maintains O(1) space complexity
- Guarantees exactly one solution

## Error Handling

- Input validation for all fields
- Clear error messages for:
  - Empty inputs
  - Invalid numbers
  - Unsorted arrays
  - No solution cases
  - Array length requirements
