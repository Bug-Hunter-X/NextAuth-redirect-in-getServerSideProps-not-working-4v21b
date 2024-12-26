```javascript
import {unstable_getServerSession} from 'next-auth';
import {authOptions} from './api/auth/[...nextauth]';

export default function Home() {
  return (
    <div>Home page</div>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session
    }
  }
}
```