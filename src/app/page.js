import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black overflow-hidden">
      <div className="flex items-center justify-center mx-10 gap-10">
        <div className="my-auto">
          <img src={ "https://miro.medium.com/v2/resize:fit:618/1*OnHifcJC1TofAyGI1p0Y2Q.jpeg"} className="rounded-3xl  "></img>
        </div>
        <div>
          <h1 className="text-5xl font-extrabold text-white  text-center text italic">
            WELCOME TO THE RECIPE WEBSITE
          </h1>
          <h3 className="text-center mt-10">
            <Button>
              <Link href={"/recipe-list"}>Explore the recipe </Link>{" "}
            </Button>
          </h3>
        </div>
      </div>
    </main>
  );
}
