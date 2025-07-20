# LoveBurundi Dating App

## Overview

LoveBurundi is a modern dating application built for the Burundian market. The application features a Tinder-style swipe interface for discovering potential matches, profile management, real-time messaging, and location-based filtering. The app is designed with a mobile-first approach and includes comprehensive user authentication and matching algorithms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui design system
- **Styling**: Tailwind CSS with custom brand colors (red theme for dating app)
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for bundling server code
- **API Design**: RESTful API with centralized route registration

### Data Storage Solutions
- **Database**: PostgreSQL (configured for Neon Database)
- **ORM**: Drizzle ORM for type-safe database operations
- **Development Storage**: In-memory storage implementation for rapid prototyping
- **Session Management**: connect-pg-simple for PostgreSQL session storage

## Key Components

### Authentication System
- Mock authentication middleware for development
- Integrated with Replit Auth system (production-ready)
- User profile creation and management
- Session-based authentication with PostgreSQL storage

### Core Features
1. **User Discovery**: Swipe-based profile discovery with filtering
2. **Profile Management**: Comprehensive profile creation with photos, bio, and preferences
3. **Matching System**: Mutual like-based matching algorithm
4. **Real-time Messaging**: Chat functionality between matched users
5. **Location Services**: Burundi-specific location filtering and distance preferences

### UI/UX Components
- **SwipeCard**: Interactive card component with drag-to-swipe functionality
- **BottomNavigation**: Mobile-optimized navigation bar
- **MatchModal**: Celebration modal for new matches
- **FiltersModal**: Advanced filtering options for discovery

### Database Schema
- **Users**: Core user information and authentication data
- **Profiles**: Extended profile information for dating features
- **Swipes**: Track user interactions (like/pass)
- **Matches**: Store mutual matches between users
- **Messages**: Chat message storage with sender information
- **Sessions**: Session management for authentication

## Data Flow

### User Authentication Flow
1. User accesses application
2. Authentication middleware validates session
3. User profile is fetched or created if new
4. User is redirected to appropriate view (profile setup or discovery)

### Discovery and Matching Flow
1. User requests profiles for discovery
2. System filters profiles based on user preferences (age, location, distance)
3. User swipes on profiles (like/pass)
4. System checks for mutual likes to create matches
5. Match notification displayed for successful matches

### Messaging Flow
1. Users navigate to matches list
2. Select a match to open chat interface
3. Messages are sent via API and stored in database
4. Real-time updates through polling mechanism

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **express**: Web server framework
- **zod**: Runtime type validation

### UI Dependencies
- **@radix-ui/***: Unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Dependencies
- **tsx**: TypeScript execution for development
- **esbuild**: Fast bundler for production builds
- **vite**: Development server and build tool

## Deployment Strategy

### Development Environment
- Vite development server with HMR (Hot Module Replacement)
- tsx for running TypeScript server code
- In-memory storage for rapid prototyping
- Mock authentication for testing

### Production Environment
- Vite builds optimized client bundle to `dist/public`
- esbuild bundles server code to `dist/index.js`
- PostgreSQL database with Drizzle migrations
- Replit Auth integration for user management
- Static file serving for client assets

### Database Management
- Drizzle Kit for schema management and migrations
- Push-based deployment with `db:push` command
- PostgreSQL with connection pooling via Neon Database
- Automated session cleanup and management

### Configuration
- Environment-based configuration (NODE_ENV)
- Database URL configuration via environment variables
- TypeScript path mapping for clean imports
- Tailwind CSS custom theme with brand colors
