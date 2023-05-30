import { useAppContext } from "./Navbar";

const UserContainer = () => {
  const { user, logOut } = useAppContext();
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There, {user?.name?.toUpperCase()}</p>
          <button className="btn" onClick={logOut}>
            logout
          </button>
        </>
      ) : (
        <p>please log in</p>
      )}
    </div>
  );
};

export default UserContainer;
