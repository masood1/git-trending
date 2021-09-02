import React from "react";
import { getRepositories } from "../api/getRepositories";
import { ErrorCard, Loader, RepositoryCard } from "../components";
import { repoType } from "../types";
import { useQuery } from "react-query";

interface repositoryListProps {
  range: string;
  speakingCode: string;
  langCode: string;
}

const RepositoryList = (props: repositoryListProps) => {
  const { range, speakingCode, langCode } = props;
  const { data, isLoading, isError } = useQuery(
    ["repositories_trending"],
    () => getRepositories(range, speakingCode, langCode)
  );

  return (
    <>
      {isLoading && <Loader />}

      {isError && <ErrorCard />}
      {!isLoading && data.legnth === 0 && (
        <ErrorCard title="No Trending Repositories Found" />
      )}

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
