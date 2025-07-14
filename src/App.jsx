import React from "react";
import "./App.css";
import Card from "./components/Card";

import Dan from "./assets/images/image-daniel.jpg";
import Jean from "./assets/images/image-jeanette.jpg";
import Jon from "./assets/images/image-jonathan.jpg";
import Kira from "./assets/images/image-kira.jpg";
import Pat from "./assets/images/image-patrick.jpg";
import Quote from "./assets/images/bg-pattern-quotation.svg";

function App() {
  return (
    <main className="min-h-screen flex justify-center items-center mx-8 bg-gray-50">
      <section className="p-4 w-full max-w-6xl">
        <div className="grid md:grid-cols-4 md:grid-rows-2 gap-8">
          <div className="md:col-span-2 md:order-none">
            <Card
              ImgSrc={Dan}
              ImgAlt="Daniel"
              name="Daniel Clifford"
              Body="I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth."
              Footer="I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup."
              className="bg-purple-600 text-white"
            >
              <img src={Quote} alt="Quotation Mark" className="w-6 h-6" />
            </Card>
          </div>

          <div className="md-order-none">
            <Card
              ImgSrc={Jon}
              ImgAlt="Jonathan Walters"
              imgBorderClass="border-none"
              name="Jonathan Walters"
              Body="The team was very supportive and kept me motivated."
              Footer="I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself."
              className="bg-gray-700 text-white"
            />
          </div>

          <div className="md:row-span-2 flex-1/2 md:order-none order-last">
            <Card
              ImgSrc={Kira}
              ImgAlt="Kira Whittle"
              name="Kira Whittle"
              imgBorderClass="border-none"
              Body="Such a life-changing experience. Highly recommended!"
              Footer=" Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
  professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
  student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
  did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
  project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
  could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
  experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
  100% recommend! "
              className="bg-white text-gray-900 "
            />
          </div>

          <div className="md:order-none">
            <Card
              ImgSrc={Jean}
              ImgAlt="Jeanette Harmon"
              imgBorderClass="border-none"
              name="Jeanette Harmon"
              Body="An overall wonderful and rewarding experience."
              Footer="Thank you for the wonderful experience! I now have a job I really enjoy and make a good living while doing something I love."
              className="bg-white text-blue-950"
            />
          </div>

          <div className="md:col-span-2 md:order-none">
            <Card
              ImgSrc={Pat}
              ImgAlt="Patrick Abrams"
              name="Patrick Abrams"
              Body="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy."
              Footer="The staff seemed genuinely concerned about my progress, which I found really refreshing. The program gave me the confidence to go out into the world and present myself as a capable junior developer. The standard is above the rest. You get personal attention from an incredible community of smart, amazing people."
              className="bg-gray-900 text-white"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
