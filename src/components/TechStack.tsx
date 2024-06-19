import {
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
  SiAmazonaws,
  SiAuth0,
  SiRedis,
  SiShadcnui,
} from "react-icons/si";

interface TechstackProps {
  icon: JSX.Element;
  name: string;
}

const techstacks: TechstackProps[] = [
  {
    icon: <SiNextdotjs size={34} />,
    name: "Next.js",
  },
  {
    icon: <SiPrisma size={34} />,
    name: "Prisma",
  },
  {
    icon: <SiPostgresql size={34} />,
    name: "PostgreSQL",
  },
  {
    icon: <SiAmazonaws size={34} />,
    name: "AWS S3",
  },
  {
    icon: <SiShadcnui size={34} />,
    name: "Shadcn UI",
  },
  {
    icon: <SiAuth0 size={34} />,
    name: "NextAuth",
  },
  {
    icon: <SiRedis size={34} />,
    name: "Redis",
  },
];

export const TechStack = () => {
  return (
    <section id="TechStacks" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Our Tech Stack
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {techstacks.map(({ icon, name }: TechstackProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span>{icon}</span>
            <h3 className="text-xl font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
