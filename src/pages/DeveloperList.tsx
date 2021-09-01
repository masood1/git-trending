import React from "react";
import { DeveloperCard, ErrorCard, Loader } from "../components";
import { repoType } from "../types";
import { useQuery } from "react-query";
import { getDevelopers } from "../api/getDevelopers";

const DeveloperList = () => {
  const { data, isLoading, isError } = useQuery(
    ["developers_trending"],
    getDevelopers
  );

  return (
    <>
      {isLoading && <Loader />}

      {isError && <ErrorCard />}

      {!isLoading &&
        data?.map((repo: repoType, index: number) => (
          <DeveloperCard
            key={`trending_repo_card_${index}`}
            data={repo}
            index={index + 1}
          />
        ))}
    </>
  );
};

export default DeveloperList;
