'use client'

import {useParams} from "next/navigation";
import {useUser} from "@auth0/nextjs-auth0/client";


const Page = () => {

  const { user, error, isLoading} = useUser()

  return (
    <div>
      Welcome {user?.name}
    </div>
  );
};

export default Page;
