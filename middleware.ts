import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// page that show to every one without need to sign in 
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)", "/"]);

export default clerkMiddleware((auth, req) => {
  // Restrict admin route to users with specific role
  if (!isPublicRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};

//(.*) meaning => catch every routes start with sign-in or sign-up 