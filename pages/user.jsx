import { getSession, signOut } from 'next-auth/react';

function User({ user }) {
    return (
        <div>
            <h4>User session:</h4>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <button onClick={() => signOut({ redirect: '/signin' })}>Sign out</button>

            <div>
                 <h3>Now you see me cause your login</h3>
            </div>

            <div>
              <img
                src="https://gateway.ipfs.io/ipfs/QmNgoacgbARoSn9vhAPYdDMzSnsow7dFCfHzeZKftJ1hRD"
                alt="junjie"
              />
            </div>
        </div>       
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        };
    }

    return {
        props: { user: session.user },
    };
}

export default User;
