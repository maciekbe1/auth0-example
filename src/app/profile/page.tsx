"use client";

import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";

import Alert from "@/components/Alert";
import Highlight from "@/components/Highlight";
import Loading from "@/components/Loading";
import Image from "next/image";

function Profile() {
  const { user, isLoading } = useUser();

  return (
    <>
      {isLoading && <Loading />}
      {user && (
        <>
          <div>
            <Image
              src={user.picture || "https://via.placeholder.com/200"}
              alt={user.name || "profile picture"}
              width={200}
              height={200}
            />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>

          <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
        </>
      )}
    </>
  );
}

export default withPageAuthRequired(Profile, {
  onRedirecting: () => <Loading />,
  onError: (error) => <Alert>{error.message}</Alert>,
});
