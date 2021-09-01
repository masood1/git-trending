import React from "react";
import { DeveloperCard } from "../components";
import { devType } from "../types";


const developerMock: devType = {
    avatar: "",
    name: "Kunal Kushwaha",
    repo: {
      description:
        "This repository consists of the code samples, assignments, and the curriculum for the Community Classroom complete Data Structures & Algorithms Java bootcamp.",
      name: "DSA-Bootcamp-Java",
      url: "www.google.com",
    },
    url: "www.google.com",
    username: "kunal-kushwaha",
    type:"organization",
  };

const DeveloperList = () => {
  return (
    <>
      <DeveloperCard data={developerMock} index={1} />
      <DeveloperCard data={developerMock} index={2} />
      <DeveloperCard data={developerMock} index={3} />
      <DeveloperCard data={developerMock} index={4} />
    </>
  );
};

export default DeveloperList;