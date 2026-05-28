import { useTheme } from "@/components/providers/theme-provider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Sun, Moon } from "lucide-react";
import { Link } from "react-router";

type Props = {};

type FeaturesProps = {
  title: string;
  description: string;
};

const Landing = (props: Props) => {
  const { setTheme } = useTheme();
  return (
    <>
      <header className="py-4 bg-amber-100">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="flex gap-4 ">
              <Link to={"/home"}>ZenNotes</Link>
              <ul className="flex gap-4">
                <li>
                  <Link to={"/"}>Features</Link>
                </li>
                <li>
                  <Link to={"/"}>Pricing</Link>
                </li>
                <li>
                  <Link to={"/"}>About</Link>
                </li>
              </ul>
            </div>
            <div className="flex gap-4">
              <Button>Login</Button>
              <Button>Get Started</Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container mx-auto">
          {hero()}
          {newSection()}
          {experienceClarity()}
          {cta()}
        </div>
      </main>
      <footer className="border-t border-neutral-400">
        <div className="container mx-auto pt-10">
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-4">
              <Link to={"/"}>ZenNotes</Link>
              <p>© 2024 ZenNotes. Designed for calm productivity.</p>
            </div>
            <ul className="flex gap-4">
              <li>
                <Link to={"/"}>Privacy</Link>
              </li>
              <li>
                <Link to={"/"}>Terms</Link>
              </li>
              <li>
                <Link to={"/"}>Twitter</Link>
              </li>
              <li>
                <Link to={"/"}>Support</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );

  function hero() {
    return (
      <div className="text-center py-20">
        <h1 className="pb-8 text-5xl font-bold">
          Capture your thoughts, find your zen
        </h1>
        <p>
          A digital sanctuary designed for deep focus. Strip away the noise and
          organize your life with our minimalist note-taking experience.
        </p>
        <div className="gap-4 inline-flex pt-6">
          <Button>Get Started for Free</Button>
          <Button>View Demo</Button>
        </div>
      </div>
    );
  }

  function experienceClarity() {
    const features: Array<Record<string, string>> = [
      {
        title: "Bi-directional linking for atomic notes",
      },
      {
        title: "Markdown support for rapid formatting",
      },
      {
        title: "Offline-first architecture",
      },
    ];

    return (
      <div className="text-left py-20">
        <h1 className="pb-4 text-5xl font-bold">Experience Clarity</h1>
        <p>We built the features you need, and none of the ones you don't.</p>
        <ul className="">
          {features.map((items, index) => (
            <li key={index} className="w-full">
              {items.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  function newSection() {
    const features: FeaturesProps[] = [
      {
        title: "Distraction-Free Writing",
        description:
          "A clean, focused environment that lets your ideas flow without interruptions or visual clutter.",
      },
      {
        title: "Smart Organization",
        description:
          "Intelligent tagging and auto-sorting systems that keep your workspace tidy without manual effort.",
      },
      {
        title: "Seamless Sync",
        description:
          "Access your thoughts from any device. Your notes are encrypted and updated in real-time across all platforms.",
      },
    ];

    return (
      <div className="text-left py-20">
        <h1 className="pb-4 text-5xl font-bold">
          Designed for the modern thinker
        </h1>
        <p>
          Whether you're a writer, developer, or manager, ZenNotes provides the
          mental space required for high-quality output. Our interface follows
          the 8px rule to ensure mathematical harmony in every view.
        </p>
        <div className="flex gap-4 py-16">
          {features.map((items, index) => (
            <Card key={index} className="w-full">
              <CardHeader>
                <CardTitle>{items.title}</CardTitle>
                <CardDescription>{items.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    );
  }
  function cta() {
    return (
      <div className="text-left py-20">
        <Card className="w-full text-center">
          <CardHeader>
            <CardTitle> Start your journey to clarity today.</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            Join over 50,000 users who have found their zen with ZenNotes. No
            credit card required to start.
          </CardContent>
          <CardFooter>
            <Button>GetStarted for Free</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
};

export default Landing;
