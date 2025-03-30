# Technical Context: Sakura Map

## Technology Stack

### Frontend
- **Framework**: Next.js 14+ (React 18+)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API, React Query
- **Rendering Engine**: To be decided (Phaser.js, PixiJS, or custom Canvas implementation)
- **Map Visualization**: To be decided (Leaflet.js, D3.js, or MapLibre GL JS)

### Backend
- **Platform**: Supabase
- **Database**: PostgreSQL (provided by Supabase)
- **Authentication**: Supabase Auth (anonymous sessions)
- **Real-time**: Supabase Realtime (WebSocket-based)
- **Storage**: Supabase Storage (for assets if needed)
- **Serverless Functions**: Supabase Edge Functions (if needed)

### DevOps
- **Version Control**: GitHub
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel
- **Containerization**: Docker (optional)
- **Analytics**: Google Analytics

## Development Environment

### Local Development
- **Node.js**: v18+ LTS
- **Package Manager**: npm or yarn
- **IDE**: Visual Studio Code with recommended extensions:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - TypeScript support

### Environment Variables
```
# Next.js
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Supabase
SUPABASE_SERVICE_ROLE_KEY=

# Cherry Blossom API (when implemented)
NEXT_PUBLIC_SAKURA_API_URL=
SAKURA_API_KEY=

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=
```

### Development Workflow
1. Local development with Next.js dev server
2. Pull requests for code review
3. GitHub Actions for automated testing
4. Preview deployments on Vercel
5. Production deployment on Vercel

## Dependencies

### Core Dependencies
- **next**: React framework
- **react**, **react-dom**: UI library
- **typescript**: Type checking
- **tailwindcss**, **postcss**, **autoprefixer**: Styling
- **@supabase/supabase-js**: Supabase client
- **@tanstack/react-query**: Data fetching and caching

### Map and Visualization (Options)
- **leaflet**, **react-leaflet**: Interactive maps
- **d3**: Data visualization
- **maplibre-gl**: Open-source maps

### Game Engine (Options)
- **phaser**: 2D game framework
- **pixi.js**: 2D WebGL renderer
- **three.js**: 3D library (for potential future use)

### Utility Libraries
- **date-fns**: Date manipulation
- **zod**: Schema validation
- **lodash**: Utility functions
- **uuid**: Unique ID generation

### Development Dependencies
- **eslint**: Code linting
- **prettier**: Code formatting
- **jest**, **@testing-library/react**: Testing
- **husky**, **lint-staged**: Git hooks
- **@types/***: TypeScript type definitions

## Project Structure

```
sakura_map/
├── .github/                # GitHub workflows
├── .vscode/                # VS Code settings
├── memory-bank/            # Project documentation
├── public/                 # Static assets
│   ├── avatars/            # Avatar images
│   ├── environment/        # Environment assets
│   ├── icons/              # UI icons
│   └── maps/               # Map assets
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── api/            # API routes
│   │   ├── avatar/         # Avatar selection
│   │   ├── map/            # Japan map view
│   │   └── spot/[id]/      # Hanami spot view
│   ├── components/         # React components
│   │   ├── avatar/         # Avatar components
│   │   ├── map/            # Map components
│   │   ├── spot/           # Hanami spot components
│   │   └── ui/             # UI components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   │   ├── supabase/       # Supabase client
│   │   └── api/            # API clients
│   ├── store/              # State management
│   ├── styles/             # Global styles
│   └── types/              # TypeScript types
├── .env.local              # Local environment variables
├── .eslintrc.js            # ESLint configuration
├── .gitignore              # Git ignore rules
├── .prettierrc             # Prettier configuration
├── docker-compose.yml      # Docker configuration (optional)
├── jest.config.js          # Jest configuration
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Database Schema

### Tables

#### users
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  avatar_type VARCHAR NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_seen_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### locations
```sql
CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  prefecture VARCHAR NOT NULL,
  latitude DECIMAL NOT NULL,
  longitude DECIMAL NOT NULL,
  bloom_status VARCHAR NOT NULL,
  environment_type VARCHAR NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### user_locations
```sql
CREATE TABLE user_locations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  location_id INTEGER REFERENCES locations(id) ON DELETE CASCADE,
  position_x DECIMAL NOT NULL,
  position_y DECIMAL NOT NULL,
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, location_id)
);
```

## API Endpoints

### Next.js API Routes

#### Authentication
- `POST /api/auth/anonymous`: Create anonymous session

#### Map Data
- `GET /api/locations`: Get all locations with bloom status
- `GET /api/locations/:id`: Get specific location details

#### User Data
- `GET /api/users/me`: Get current user data
- `POST /api/users/avatar`: Update user avatar
- `GET /api/users/location/:locationId`: Get users at specific location

### Supabase Realtime Channels

#### User Presence
- Channel: `presence-location-{locationId}`
- Events:
  - `presence`: User joined/left location
  - `position`: User position update

## Technical Constraints

### Browser Compatibility
- Modern evergreen browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers on iOS 14+ and Android 8+
- No IE11 support required

### Performance Targets
- Initial load: < 3s on 4G connection
- Time to Interactive: < 5s
- Core Web Vitals:
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1

### Accessibility Requirements
- WCAG 2.1 AA compliance where applicable
- Keyboard navigation support
- Screen reader compatibility for essential functions

### Security Considerations
- No sensitive user data stored
- Supabase RLS (Row Level Security) for data access control
- Rate limiting for API endpoints
- Content Security Policy implementation

## External Integrations

### Cherry Blossom Data API
- To be determined (options include Japan Meteorological Agency, Weather News, or custom scraping solution)
- Fallback to static/mock data during development

### Google Analytics
- Basic pageview tracking
- Custom events for user interactions
- User journey analysis

## Deployment Strategy

### Environments
- **Development**: Local development environment
- **Staging**: Vercel preview deployments
- **Production**: Vercel production deployment

### Deployment Process
1. Push to feature branch
2. Create pull request
3. Automated tests and preview deployment
4. Code review
5. Merge to main branch
6. Automated production deployment

### Monitoring
- Vercel Analytics for performance monitoring
- Google Analytics for user behavior
- Error tracking (to be implemented)
