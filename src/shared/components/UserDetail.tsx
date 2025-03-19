type UserDetailsProps = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
};

const UserDetails = ({
  firstName,
  lastName,
  email,
  address,
}: UserDetailsProps) => {
  return (
    <div className="p-4 border rounded-xl flex gap-16">
      <div className="w-50 h-50 bg-white rounded-full"></div>
      <div className="flex flex-col justify-between py-4">
        <h1 className="text-2xl">
          {lastName}, {firstName}
        </h1>
        <h3 className="text-lg">E-mail: {email}</h3>
        <p>Address: {address}</p>
      </div>
    </div>
  );
};

export default UserDetails;
