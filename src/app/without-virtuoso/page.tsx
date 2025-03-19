import users from "@/assets/users.json";
import UserDetails from "@/shared/components/UserDetail";
import Link from "next/link";

const PageWithoutVirtuoso = () => {
  return (
    <main className="max-h-screen m-auto max-w-4xl p-10">
      <Link href="/">Back</Link>
      <ul className="flex flex-col gap-4 mt-4">
        {users.map((user) => (
          <li key={user.id}>
            <UserDetails
              firstName={user.first_name}
              lastName={user.last_name}
              email={user.email}
              address={user.address}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default PageWithoutVirtuoso;
