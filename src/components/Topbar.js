import styled from "styled-components";

const TopbarWrapper = styled.div`
  background-color: #444;
`;
const TopbarContent = styled.div`
  color: #c7c7c7;
  margin: 0 auto;
  width: 1290px;
  height: 30px;
  text-align: right;
  line-height: 30px;
`;

const Span = styled.span`
  > a {
    padding: 0 10px;
    color: #c7c7c7;
  }
  > a:hover {
    color: #fa7b0e;
    text-decoration: underline;
  }
`;
const Topbar = () => (
  <TopbarWrapper>
    <TopbarContent>
      <Span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://job.alibaba.com/?spm=a1z3e1.11770841.0.0.60137405Ar8wdE"
          data-spm-anchor-id="a1z3e1.11770841.0.0"
        >
          社会招聘
        </a>
        |
        <a target="_blank" rel="noreferrer" href="https://102.alibaba.com/">
          阿里校园合作
        </a>
        |
        <a target="_blank" rel="noreferrer" href="http://e.weibo.com/campusali">
          官方微博
        </a>
        <input
          type="hidden"
          id="loginUrl"
          value="https://passport.alibaba.com/login.htm?appName=hrjob&amp;params=https%3A%2F%2Fcampus.alibaba.com%2Findex.htm"
        />
      </Span>
      <Span>
        欢迎来到阿里巴巴校园招聘！
        <a
          id="login"
          href="https://campus.alibaba.com/login.htm?params=https%3A%2F%2Fcampus.alibaba.com%2Findex.htm"
          target="_top"
        >
          登录
        </a>
        <a
          href="http://member1.taobao.com/member/new_register.jhtml"
          target="_blank"
          rel="noreferrer"
        >
          免费注册
        </a>
      </Span>
    </TopbarContent>
  </TopbarWrapper>
);

export { Topbar };
