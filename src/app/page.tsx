import Header from "@/components/Header";
import Content from "@/components/Content";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <Content/>
        <About/>
        <WorkExperience/>
      </main>
      <footer>lorem</footer>
    </>
  );
}
