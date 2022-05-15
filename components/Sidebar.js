import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Sidebar = () => {
  const { data } = useSession();
  console.log(data);
  return (
    <div className="space-y-2 min-w-max max-w-lg">
      {/* top */}
      <div className="bg-white dark:bg-[#1D2226] rounded-lg overflow-hidden relative flex flex-col items-center text-center border border-gray-300 dark:border-none">
        <div className="relative w-full h-14">
          <Image src="https://rb.gy/i26zak" layout="fill" priority />
        </div>
        {/* ur image */}
        <div
          onClick={() => signOut()}
          className="border-2 absolute top-4 cursor-pointer rounded-full overflow-hidden"
        >
          <Image
            width={56}
            height={56}
            src={data.user.image}
            objectFit="cover"
          />
        </div>
        <div className="mt-5 py-4 space-x-0.5">
          <h4 className="hover:underline">{data.user.name}</h4>
          <p className="text-black/60 dark:text-white/75 text-sm">
            {data.user.email}
          </p>
        </div>

        <div className="hidden md:inline text-left dark:text-white/75 text-sm">
          <div className="sidebarButton font-medium space-y-0 5">
            <div className="flex justify-between space-x-2">
              <h4>Who viewed your profile</h4>
              <span className="text-blue-500">321</span>
            </div>

            <div className="flex justify-between space-x-2">
              <h4>Views of your post</h4>
              <span className="text-blue-500">731</span>
            </div>
          </div>

          <div className="sidebarButton">
            <h4 className="leading-4 text-xs">
              Access exclusive tools & insights
            </h4>
            <h4 className="dark:text-white font-medium">
              <span className="w-3 h-3 bg-gradient-to-tr from-yellow-700 to-yellow-200 inline-block rounded-sm mr-1" />{" "}
              Try Premium for free
            </h4>
          </div>

          <div className="sidebarButton flex items-center space-x-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 -ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
            <h4 className="dark:text-white font-medium">My items</h4>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="hidden md:flex dark:bg-[#1D2226] text-black/70 dark:text-white/75 rounded-lg overflow-hidden flex-col space-y-2 pt-2.5 sticky top-20 border border-gray-300 dark:border-none">
        <p className="sidebarLink">Groups</p>
        <div className="flex items-center justify-between">
          <p className="sidebarLink">Events</p>
          {/* icon plus */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="sidebarLink">Followed Hashtags</p>

        <div className="sidebarButton text-center">
          <h4 className="dark:text-white font-medium text-sm">Discover More</h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
