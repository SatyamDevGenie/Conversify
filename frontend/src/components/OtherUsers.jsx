import useGetOtherUsers from "../hooks/useGetOtherUsers";
import OtherUser from "./OtherUser";

const OtherUsers = () => {
  useGetOtherUsers();

  return (
    <div className="overflow-auto ">
      <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser />
    </div>
  );
};

export default OtherUsers;
