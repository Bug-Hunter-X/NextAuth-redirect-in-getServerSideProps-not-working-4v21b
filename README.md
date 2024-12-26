# NextAuth redirect in getServerSideProps not working

This repository demonstrates a bug where NextAuth's `getServerSideProps` redirect doesn't work as expected.  The issue occurs when attempting a redirect to a different page based on session status. The redirect is expected to take the user to the `/login` page if not logged in; however, the redirect does not function properly.

## Bug Description

The `getServerSideProps` function checks for a user session using `unstable_getServerSession`. If no session exists, it should redirect the user to the `/login` page.  However, the redirect does not happen, and the user remains on the `/` page (or the original page). This is an issue with NextAuth, and this repo shows the problem to reproduce it.