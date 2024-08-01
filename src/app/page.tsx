import Image from "next/image";
import Landingpage from "./Landingpage/page";
import { MantineProvider } from '@mantine/core';

export default function Home() {
  return (
   <MantineProvider>
      <Landingpage/>
   </MantineProvider>
  );
}
