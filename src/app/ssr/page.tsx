import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";

import Highlight from "@/components/Highlight";

export default withPageAuthRequired(
  async function SSRPage() {
    const session = await getSession();
    const user = session?.user;
    return (
      <>
        <div className="mb-5">
          <h1>Server-side Rendered Page</h1>
          <div>
            Protected server-side rendered page. Only logged in users can access
          </div>
        </div>
        <h6>User</h6>
        <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
      </>
    );
  },
  { returnTo: "/ssr" }
);
