"use client";

import { UserButton } from "@clerk/nextjs";

// import { useAuth } from "@clerk/nextjs";
// import { useUser } from "@clerk/nextjs";
// import { auth, currentUser } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";

const ProtectedPage = () => {
  // const user = await currentUser();
  // const { userId } = await auth();
  // if (!user || !userId) {
  //   redirect("/sign-in");
  // }

  // const { userId } = useAuth();
  // const { user } = useUser();

  // if (!user) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <UserButton
        fallback={<div>Loading...</div>}
        appearance={{
          elements: {
            avatarBox: "h-20 w-20",
          },
        }}
      />
    </div>
  );
};

export default ProtectedPage;
