Clerk is already install and connected. Wire it into the next.js app: provider, auth pages, redirects,
route protection, and user menu.

## Design

 Use Clerk `dark` theme from `@clerk/ui/themes` as the base.

 Override Clerk appearence variables using the app's axisting CSS variables. Do not harcode colors.

 ### Sign-in an sing-up pages:

 - large screens: simple two-panel layout
 - left: compact logo, tagline, short text-only feature list
 - right: centered Clerk form
 - small screens: form only
 - no gradients
 - no oversized hero sections
 - no feature cards
 - no scroll-heavy layouts

  Keep the layout minimal and professional.

  ## Implementation

   Wrap the root layout with `ClerkProvider` using Clerk's `dark' theme.

   Create sign-in and sign-up pages  using Clerk compoments.

   Use `proxy.ts` at the project root, not `midddleware.ts`.

   Define public routes using the exsting sing-in and sing-up env vars. Protect everything else by default.

   Update `/`:

   - authecticated users redirect to `/editor`
   - unaunthenticated users redirect to `/sign-in`

   Add Clerk's built-in `UserButton` to the editor navbar right section for profile settings and logout.

   Keep Clerk's default user menu and profile flows intact. Do not rebuild or heavily customize Clerk internals.

   Use existing Clerk env vars. Do not rename or invent new ones.

   ## Dependencies 

   install:@clerk/ui.

   # Check when done

   - `proxy.ts` exists at the root
   - all routes are protected except public auth paths
   - auth pages use CSS variables withh no hardcoded colors
   - `ClerkProvider` wraps the rooot layout
   - `npm run build` passes