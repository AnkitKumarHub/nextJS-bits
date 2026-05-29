import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



const AboutPage = () => {
  return (
    <div>
      <Link href={'/signup'}>Go to  Signup Page</Link>
      <Link href={{
        pathname: '/contacts',
        query: { name: 'test' }
      }}>
        Go to  Contact Page</Link>

      <Image
        src="/adventure.svg"
        width={200}
        height={200}
        alt="Picture of the author"
      />

      {/* But when you show the image which is hosted on CDN */}
      {/* sol -1 you can use native html tag fro the image <img> */}
      {/* sol-2 you have to configure this in the next.config.ts */}
      {/* <img src="https://www.chaicode.com/assets/white-1-CYshgcRl.webp" alt="" height={200} width={200} /> */}

      <Image src="https://www.chaicode.com/assets/chaicode-at-campus-DN7gVUzu.webp" width={200} height={200} alt='picture of the Heo'></Image>
    </div>
  );
};

export default AboutPage;