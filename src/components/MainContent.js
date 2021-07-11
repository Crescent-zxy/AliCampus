import styled from "styled-components";
import { Block } from "./Block";

const ContentWrapper = styled.div`
  display: flex;
  height: 300px;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  width: 1180px;
  margin: 0 auto;
`;

const list = [
  {
    title: "应届生入口",
    info: "毕业时间：2020年11月-2021年10月",
    apply: "",
    disabled: true
  },
  {
    title: "实习生入口",
    info: "毕业时间：2021年11月-2022年10月",
    apply: "https://campus.alibaba.com/traineePositionList.htm",
    disabled: false
  },
  {
    title: "人才计划",
    info: "毕业时间：2020年11月及以后",
    apply: "https://campus.alibaba.com/talentPlan.htm",
    disabled: false
  }
];

const MainContent = () => (
  <ContentWrapper>
    {list.map((item) => (
      <Block {...item} key={item.title} />
    ))}
  </ContentWrapper>
);
export { MainContent };
