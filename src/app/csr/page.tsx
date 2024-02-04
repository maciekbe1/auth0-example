"use client";

import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

export default withPageAuthRequired(function CSRPage() {
  return (
    <>
      <div className="mb-5">
        <h1>Client-side Rendered Page</h1>
        <div>
          Protected client-side rendered page. Only logged in users can access
        </div>
      </div>
    </>
  );
});
