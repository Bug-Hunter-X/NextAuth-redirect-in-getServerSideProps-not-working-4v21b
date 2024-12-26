```javascript
import {unstable_getServerSession} from 'next-auth';
import {authOptions} from './api/auth/[...nextauth]';

export default function Home({session}) {
  if (!session) {
    return (
        <div>Redirecting...</div>
    );
  }

  return (
    <div>Home page</div>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context, authOptions);

  return {
    props: {
      session
    }
  }
}
```