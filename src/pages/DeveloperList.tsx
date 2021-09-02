import React from "react";
import { DeveloperCard, ErrorCard, Loader } from "../components";
import { repoType } from "../types";
import { useQuery } from "react-query";
import { getDevelopers } from "../api/getDevelopers";

interface developerListProps {
  range: string;
  langCode: string;
}

const DeveloperList = (props: developerListProps) => {
  const { range, langCode } = props;

  const { data, isLoading, isError } = useQuery(
    ["developers_trending"],
    () => getDevelopers(range, langCode)
  );

  return (
    <>
      {isLoading && <Loader />}

      {isError && <ErrorCard />}
      {!isLoading && data.legnth === 0 && (
        <ErrorCard title="No Trending Developers Found" />
      )}

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
