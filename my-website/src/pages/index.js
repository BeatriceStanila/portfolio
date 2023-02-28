import Head from "next/head";
import { projectsData } from "../data/data";

import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Beatrice Stanila Porftolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Hero
          greeting="Hi there! My name is .."
          name="Beatrice Stanila"
          intro="A software developer excited to  build technologies solutions to problems."
        />
        <About />
        <div class="projects">
          <div>
            <h3>My projects</h3>
            <div class="projects-wrapper">
              {projectsData.map((data) => {
                return (
                  <Projects
                    title={data.project_name}
                    description={data.project_description}
                    stack={data.stack_used}
                    demo={data.demo_link}
                    repo={data.repo_link}
                    image={data.image}
                    key={data.project_name}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
