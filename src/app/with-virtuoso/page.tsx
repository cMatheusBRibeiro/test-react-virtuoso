"use client";

import users from "@/assets/users.json";
import UserDetails from "@/shared/components/UserDetail";
import Link from "next/link";
import { Virtuoso } from "react-virtuoso";

const PageWithVirtuoso = () => {
  return (
    <main className="h-screen m-auto max-w-4xl p-10">
      <Link href="/">Back</Link>
      <Virtuoso
        style={{ height: "100%" }}
        totalCount={users.length}
        data={users}
        itemContent={(_, user) => (
          <div className="my-4 mr-4">
            <UserDetails
              firstName={user.first_name}
              lastName={user.last_name}
              email={user.email}
              address={user.address}
            />
          </div>
        )}
      />
    </main>
  );
};

export default PageWithVirtuoso;
