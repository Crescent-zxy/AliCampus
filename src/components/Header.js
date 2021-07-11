import styled from "styled-components";

const HeaderWrapper = styled.div`
  margin: 0 auto;
  width: 1290px;
  height: 60px;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  height: 30px;
  width: 190px;
`;

const Ul = styled.ul`
  display: flex;
  /* align-items: center; */
  margin: 0 0 0 30px;
  height: 60px;
  line-height: 60px;
  z-index: 1;
  transition: all 1s linear;
  > li {
    padding: 0 18px;
    font-size: 16px;
    position: relative;
    overflow: hidden;
    > a {
      height: 60px;
      display: block;
      color: #79889b;
    }
    > ul {
      position: absolute;
      /* display: none; */
      border-radius: 4px;
      background: white;
      margin-top: 4px;
      top: 60px;
      left: 0;
      > li {
        /* height: 26px; */
        width: 110px;
        line-height: 26px;
        padding: 5px 0;
        > a {
          display: inline-block;
          line-height: 26px;
          color: #3c3c3c;
          font-size: 14px;
        }
      }
    }
  }
  > li:hover {
    overflow: visible;
    > a {
      color: #fa7b0e;
      text-decoration: underline;
    }
    > ul {
      /* display: block; */
      box-shadow: rgb(31 56 88) 0px 4px 15px;
      > li {
        > a:hover {
          color: #fa7b0e;
          text-decoration: underline;
        }
      }
    }
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Img
      src="https://img.alicdn.com/tfs/TB18loYdh9YBuNjy0FfXXXIsVXa-378-58.png"
      alt=""
      data-spm-anchor-id="a1z3e1.11770841.0.i5.60137405Ar8wdE"
    />
    <Ul>
      <li>
        <a href="https://campus.alibaba.com/index.htm">首页</a>
        <ul>
          <li>
            <a href="https://campus.alibaba.com/trainNotice.htm">招聘公告</a>
          </li>
        </ul>
      </li>
      <li>
        <a
          href="https://campus.alibaba.com/trainProcess.htm?spm=a1z3e1.11770841.0.0.60137405Ar8wdE"
          data-spm-anchor-id="a1z3e1.11770841.0.0"
        >
          实习生招聘
        </a>
        <ul>
          <li>
            <a href="https://campus.alibaba.com/trainProcess.htm">招聘流程</a>
          </li>
          <li>
            <a href="https://campus.alibaba.com/traineePositionList.htm">
              招聘岗位
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="https://campus.alibaba.com/process.htm">应届生招聘</a>
        <ul>
          <li>
            <a href="https://campus.alibaba.com/process.htm">招聘流程</a>
          </li>
          <li>
            <a href="https://campus.alibaba.com/positionList.htm">招聘岗位</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="https://campus.alibaba.com/talentPlan.htm">人才计划</a>
        <ul>
          <li>
            <a
              href="https://campus.alibaba.com/talentPlanDetail.htm?spm=a1z3e1.11770841.0.0.60137405oxoYDH&amp;id=82"
              data-spm-anchor-id="a1z3e1.11770841.0.0"
            >
              研究型实习生
            </a>
          </li>
          <li>
            <a href="https://campus.alibaba.com/talentPlanDetail.htm?id=95">
              香港博士实习生计划
            </a>
          </li>
          <li>
            <a href="https://campus.alibaba.com/talentPlanDetail.htm?id=96">
              文娱体验官
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="https://campus.alibaba.com/salary.htm">薪酬福利</a>
        <ul>
          <li>
            <a href="https://campus.alibaba.com/salary.htm">阿里薪资</a>
          </li>
          <li>
            <a href="https://campus.alibaba.com/welfare.htm">阿里福利</a>
          </li>
        </ul>
      </li>

      <li>
        <a href="https://campus.alibaba.com/joywork.htm">阿里味道</a>
        <ul>
          <li>
            <a href="https://campus.alibaba.com/joywork.htm">快乐工作</a>
          </li>
          <li>
            <a href="https://campus.alibaba.com/alilife.htm">认真生活</a>
          </li>
          <li>
            <a href="https://campus.alibaba.com/environment.htm">办公环境</a>
          </li>
        </ul>
      </li>
      <li>
        <a target="_blank" href="https://campus.alibaba.com/myJobApply.htm">
          个人中心
        </a>
      </li>
      <li>
        <a target="_blank" href="https://campus.alibaba.com/en/homepage">
          Official Website (EN)
        </a>
      </li>
    </Ul>
  </HeaderWrapper>
);
export { Header };
