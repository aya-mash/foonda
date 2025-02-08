import HeroSection from "@/components/hero";
import { features } from "@/data/features";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="flex justify-center pb-40 flex-col gap-10">
      <HeroSection />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature) => (
          <Card
            key={feature.id}
            className="border-2 hover:border-primary transition-colors duration-300"
          >
            <CardContent className="pt-6 text-center flex flex-col items-center">
              <div className="flex flex-col items-center justify-center">
                {feature.icon}
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
