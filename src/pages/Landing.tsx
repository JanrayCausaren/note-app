import { href } from "@/app/config/href";
import Heading from "@/components/common/Heading";
import TextBody from "@/components/common/TextBody";
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
import { cn } from "@/lib/utils";
import { Sun, Moon } from "lucide-react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { LuFolderCog, LuLaptopMinimal } from "react-icons/lu";
import { TbWriting } from "react-icons/tb";
import { Link } from "react-router";

type Props = {};

type FeaturesProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const Landing = (props: Props) => {
  const { setTheme } = useTheme();
  return (
    <>
      <header className="py-4 border-b border-muted">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="flex gap-8  items-center">
              <Link to={href.notes()}>
                <Heading
                  as="h1"
                  size="xl"
                  className="font-bold text-primary text-2xl"
                >
                  {" "}
                  ZenNotes
                </Heading>
              </Link>
              <ul className="flex gap-4">
                <li>
                  <Link to={href.noteNew()}>Features</Link>
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
              <Button variant="ghost" className="h-auto">
                Login
              </Button>
              <Button className="h-auto px-6 py-2 rounded-3xl text-sm font-medium">
                Get Started
              </Button>
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
        <div className="container mx-auto">{hero()}</div>
        {experienceClarity()}
        {newSection()}
        {cta()}
      </main>
      <footer className="border-t border-neutral-400">
        <div className="container mx-auto pt-10">
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-4">
              <Link to={"/home"}>
                <Heading
                  as="h6"
                  size="xl"
                  className="font-bold  text-2xl"
                >
                  
                  ZenNotes
                </Heading>
              </Link>
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
      <div className="text-center py-20 max-w-150 mx-auto">
        <Heading as="h1" className="text-center text-5xl pb-8">
          Capture your thoughts,{" "}
          <span className="text-primary block"> find your zen</span>
        </Heading>
        <TextBody className="pb-8 text-lg">
          A digital sanctuary designed for deep focus. Strip away the noise and
          organize your life with our minimalist note-taking experience.
        </TextBody>

        <div className="gap-4 inline-flex ">
          <Button className="h-auto px-8 py-4 text-xl rounded-xl">
            Get Started for Free
          </Button>
          <Button
            variant="outline"
            className="h-auto px-8 py-4 text-xl rounded-xl"
          >
            View Demo
          </Button>
        </div>
      </div>
    );
  }

  function experienceClarity() {
    const features: FeaturesProps[] = [
      {
        title: "Distraction-Free Writing",
        description:
          "A clean, focused environment that lets your ideas flow without interruptions or visual clutter.",
        icon: <TbWriting className="size-5" />,
      },
      {
        title: "Smart Organization",
        description:
          "Intelligent tagging and auto-sorting systems that keep your workspace tidy without manual effort.",
        icon: <LuFolderCog className="size-5" />,
      },
      {
        title: "Seamless Sync",
        description:
          "Access your thoughts from any device. Your notes are encrypted and updated in real-time across all platforms.",
        icon: <LuLaptopMinimal className="size-5" />,
      },
    ];

    const iconColors = [
      {
        text: "text-primary",
        bg: "bg-primary/5",
      },
      {
        text: "text-secondary",
        bg: "bg-secondary/5",
      },
      {
        text: "text-tertiary",
        bg: "bg-tertiary/5",
      },
    ];

    return (
      <div className="bg-white py-25 ">
        <div className="text-center max-w-300 mx-auto">
          <Heading as="h2" className="pb-4 font-semibold">
            Experience Clarity
          </Heading>
          <TextBody className="pb-16">
            We built the features you need, and none of the ones you don't.
          </TextBody>
          <p></p>
          <div className="flex gap-4 py-16 text-left">
            {features.map((items, index) => (
              <Card key={index} className="w-full bg-background p-8">
                <div
                  className={cn(
                    "icon p-3 rounded-4 self-start rounded-xl",
                    iconColors[index].text,
                    iconColors[index].bg,
                  )}
                >
                  {items.icon}
                </div>
                <CardHeader className="px-0">
                  <CardTitle>{items.title}</CardTitle>
                  <CardDescription>{items.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function newSection() {
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
      <div className="container mx-auto">
        <div className="py-20 ">
          <div className="max-w-300 mx-auto">
            <div className="grid grid-cols-2 gap-16">
              <div className="text-left py-10">
                <Heading as="h2" className="pb-4 font-semibold">
                  Designed for the modern thinker
                </Heading>
                <TextBody className="pb-8">
                  Whether you're a writer, developer, or manager, ZenNotes
                  provides the mental space required for high-quality output.
                  Our interface follows the 8px rule to ensure mathematical
                  harmony in every view.
                </TextBody>

                <ul className="[&>li]:pb-2">
                  {features.map((items, index) => (
                    <li key={index} className="w-full flex items-center gap-4">
                      <span className="p-1 bg-primary rounded-full">
                        <IoCheckmarkSharp className="text-white size-3" />
                      </span>{" "}
                      <span>{items.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  function cta() {
    return (
      <div className="">
        <div className="text-center py-20 max-w-250 mx-auto">
          <div className=" h-auto w-full p-25 text-center bg-primary text-primary-foreground rounded-4xl">
            <div className="flex flex-col items-center gap-8">
                <Heading as="h2" className="font-semibold">
                  Start your journey to clarity today.
                </Heading>
                <TextBody className=" max-w-150 text-neutral-300">
                  Join over 50,000 users who have found their zen with ZenNotes. No
                  credit card required to start.
                </TextBody>
                <Button className="bg-white text-primary h-auto py-4 px-10" >Get Started for Free</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Landing;
