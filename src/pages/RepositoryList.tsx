import React from "react";
import { getRepositories } from "../api/getRepositories";
import { ErrorCard, Loader, RepositoryCard } from "../components";
import { repoType } from "../types";
import { useQuery } from "react-query";

const RepositoryList = () => {
  const { data, isLoading, isError } = useQuery(
    ["repositories_trending"],
    getRepositories
  );

  return (
    <>
      {isLoading && <Loader/> }

      {isError && <ErrorCard/>}

      {!isLoading &&
        data?.map((repo: repoType, index: number) => (
          <RepositoryCard
            key={`trending_repo_card_${index}`}
            data={repo}
          />
        ))}
    </>
  );
};

export default RepositoryList;
