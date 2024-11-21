'use client'

import {useParams} from "next/navigation";


const Page = () => {

  const params = useParams();
  const tenant = params.subdomain;

  return (
    <div>
      Welcome {tenant}
    </div>
  );
};

export default Page;
