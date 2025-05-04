# Droply

A simple file storage application built with Next.js, Clerk, Neon, Drizzle, and HeroUI.

## Features

- User authentication with Clerk
- File uploads with ImageKit
- File management (star, trash)
- Responsive UI with HeroUI

## Tech Stack

- **Frontend**: Next.js, HeroUI
- **Authentication**: Clerk
- **Database**: Neon (PostgreSQL)
- **ORM**: Drizzle
- **File Storage**: Imagekit

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Clerk account
- Neon PostgreSQL database
- ImageKit account

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rohith2025/dropify
   cd droply
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Create a `.env.local` file in the root directory and add all the content same as .env.example




### Running the Application

1. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

1. Build the application:

   ```bash
   npm run build
   # or
   yarn build
   # or
   pnpm build
   ```

2. Start the production server:
   ```bash
   npm start
   # or
   yarn start
   # or
   pnpm start
   ```
