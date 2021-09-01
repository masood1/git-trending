import React from "react";
import { RepositoryCard } from "../components";
import DeveloperCard from "../components/DeveloperCard";
import { repoType } from "../types";


const repositoryMock: any = [
  {
    "author": "xingshaocheng",
    "name": "architect-awesome",
    "avatar": "https://github.com/xingshaocheng.png",
    "url": "https://github.com/xingshaocheng/architect-awesome",
    "description": "后端架构师技术图谱",
    "language": "Go",
    "languageColor": "#3572A5",
    "stars": 7333,
    "forks": 1546,
    "currentPeriodStars": 1528,
    "builtBy": [
      {
        "href": "https://github.com/viatsko",
        "avatar": "https://avatars0.githubusercontent.com/u/376065",
        "username": "viatsko"
      }
    ]
  },
  {
    "author": "google",
    "name": "gvisor",
    "avatar": "https://github.com/google.png",
    "url": "https://github.com/google/gvisor",
    "description": "Container Runtime Sandbox",
    "language": "Go",
    "languageColor": "#3572A5",
    "stars": 3346,
    "forks": 118,
    "currentPeriodStars": 1624,
    "builtBy": [
      {
        "href": "https://github.com/viatsko",
        "avatar": "https://avatars0.githubusercontent.com/u/376065",
        "username": "viatsko"
      }
    ]
  },
  {
    "author": "davideuler",
    "name": "architecture.of.internet-product",
    "avatar": "https://github.com/davideuler.png",
    "url": "https://github.com/davideuler/architecture.of.internet-product",
    "description": "互联网公司技术架构，微信/淘宝/腾讯/阿里/美团点评/百度/微博/Google/Facebook/Amazon/eBay的架构，欢迎PR补充",
    "language": "Go",
    "languageColor": "#3572A5",
    "stars": 2763,
    "forks": 416,
    "currentPeriodStars": 1427,
    "builtBy": [
      {
        "href": "https://github.com/viatsko",
        "avatar": "https://avatars0.githubusercontent.com/u/376065",
        "username": "viatsko"
      }
    ]
  },]

const RepositoryList = () => {
  return (
    <>
    <RepositoryCard data={repositoryMock[1]}/>
    <RepositoryCard data={repositoryMock[0]}/>


    <RepositoryCard data={repositoryMock[2]}/>

    </>
  );
};

export default RepositoryList;