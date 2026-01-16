import Link from "next/link";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="w-full pt-36 md:pt-48">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto ">
          <h1 className="text-3xl md:text-5xl font-bold">
            Unlock Opportunities, Find Your Path
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Foonda is your gateway to discovering the best educational and
            career opportunities in South Africa. Whether you are a student
            looking for bursaries, a parent guiding your child’s future, or a
            professional seeking growth, Foonda provides a personalised
            experience to help you make informed decisions.
          </p>
          <div className="flex gap-2 mt-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="px-8">
                Get Started
              </Button>
            </Link>
            <Link href="https://www.youtube.com">
              <Button size="lg" className="px-8" variant="outline">
                Watch Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
