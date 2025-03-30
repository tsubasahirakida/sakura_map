# Project Brief: Sakura Map

## Project Overview
Sakura Map is a web application that allows users to experience virtual hanami (cherry blossom viewing) from anywhere. The application provides a real-time map of cherry blossom blooming status across Japan and allows users to visit virtual hanami spots with their avatars.

## Core Requirements

### Functional Requirements
1. **Real-time Cherry Blossom Map**
   - Display a map of Japan showing real-time cherry blossom blooming status
   - Initially use mock data, later integrate with actual cherry blossom data APIs

2. **Avatar System**
   - Allow users to select from 3-5 simple Japanese-style avatars
   - No registration required, store avatar selection in local storage

3. **Virtual Hanami Spots**
   - Create Animal Crossing-like environments for each blooming location
   - Different designs for different locations
   - Include cherry trees, food stalls, and other hanami elements

4. **Multi-user Experience**
   - Display other users in the same hanami spot
   - Support a small number of concurrent users
   - Anonymous identification system

5. **Character Movement**
   - Allow users to walk around within hanami spots
   - Support both keyboard (PC) and touch (mobile) controls

### Non-Functional Requirements
1. **Responsive Design**
   - Ensure the application is usable on both desktop and mobile devices
   - Optimize UI elements for different screen sizes

2. **Performance**
   - Fast loading times for map and hanami spots
   - Smooth character movement and interactions

3. **Accessibility**
   - No registration required for access
   - Intuitive user interface

## Technology Stack
- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Supabase (authentication, database, real-time subscriptions)
- **Deployment**: Vercel
- **Analytics**: Google Analytics
- **Version Control**: GitHub
- **Optional**: Docker for development environment

## Acceptance Criteria
1. Users can access the application without registration
2. Users can select an avatar upon first access
3. After avatar selection, users see a map of Japan with cherry blossom status
4. Users can select a location to visit a virtual hanami spot
5. The virtual hanami spot has an Animal Crossing-like appearance with cherry trees and stalls
6. Users can move their avatar within the hanami spot
7. Other users' avatars are visible in the same hanami spot
8. The application works well on both desktop and mobile devices

## Future Enhancements (Post-MVP)
- Chat functionality between users
- More avatar customization options
- Seasonal events and changes to environments
- Additional interactive elements in hanami spots

## Project Timeline
- Initial planning and setup
- Basic functionality implementation
- Integration with real-time data
- Testing and refinement
- Deployment and monitoring
