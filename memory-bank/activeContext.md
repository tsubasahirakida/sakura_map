# Active Context: Sakura Map

## Current Focus
The project is currently in the initial planning and setup phase. We are defining the core requirements, technical architecture, and development approach before beginning implementation.

## Recent Decisions

### Project Scope
- Focus on basic functionality first, with plans for future enhancements
- Include multi-user functionality with support for a small number of concurrent users
- Use simple Japanese-style avatars (3-5 types)
- Create different environment designs for different locations

### Technical Approach
- Start with mock data for cherry blossom status, later integrate with actual APIs
- Use anonymous IDs for user identification (stored in local storage)
- Implement Supabase for real-time user presence
- Develop responsive design for both desktop and mobile

## Current Tasks
- Setting up the project repository and initial structure
- Creating Memory Bank documentation
- Planning the component architecture
- Researching cherry blossom data sources
- Designing the basic UI layout

## Next Steps

### Immediate (Next 1-2 Days)
1. Initialize Next.js project with TypeScript
2. Set up Tailwind CSS
3. Create basic project structure
4. Implement basic routing
5. Design database schema in Supabase

### Short-term (Next Week)
1. Implement avatar selection screen
2. Create Japan map component with mock data
3. Design basic hanami spot environment
4. Set up user presence system
5. Implement character movement controls

### Medium-term (Next 2-3 Weeks)
1. Refine hanami spot environments
2. Integrate with cherry blossom data API
3. Optimize for mobile devices
4. Add Google Analytics
5. Deploy to Vercel

## Open Questions and Considerations

### Technical Considerations
- Which map library is best suited for the Japan map component? (Leaflet.js, D3.js, etc.)
- What is the best approach for implementing the 2D environment? (Phaser.js, PixiJS, Canvas API, etc.)
- How to optimize real-time updates for multiple users?
- What is the most reliable source for cherry blossom data?

### Design Considerations
- How to represent different blooming stages on the map?
- What style of avatars will best match the Animal Crossing-like aesthetic?
- How to design the UI for intuitive navigation between map and hanami spots?
- What visual indicators to use for other users' presence?

### User Experience Considerations
- How to make the avatar selection process engaging but quick?
- What controls will work best across both desktop and mobile?
- How to handle users who visit locations with no other active users?
- What feedback to provide when moving between different views?

## Current Blockers
- Need to identify the most suitable cherry blossom data source
- Need to decide on the specific game/rendering engine for the hanami spots

## Recent Learnings
- Supabase Realtime can be used for presence indicators and position updates
- Next.js App Router provides efficient page routing and data fetching
- Tailwind CSS can significantly speed up responsive design implementation
