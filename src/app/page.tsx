import Image from "next/image";
import Header from "./Header";
import Profile from '../components/Profile'
import Timeline from "@/components/ui/timeline";
export default function Home() {
  return (
    <div className="">
      
      <Header />
      <Profile/>
      <Timeline/>
</div>
  );
}
