import styled from "styled-components";

const HelperWrapper = styled.div`
  position: fixed;
  z-index: 2;
  /* bottom: 110px;
  right: 40px; */
  width: 120px;
`;
const HeadWrapper = styled.div`
  position: relative;
`;
const Head = styled.div`
  width: 61px;
  height: 84px;
  margin: 0 auto -12px;
  background: url(https://img.alicdn.com/tfs/TB1yJ1Qw3HqK1RjSZFgXXa7JXXa-119-164.svg);
  background-size: contain;
  cursor: move;
`;
const Icon = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

const Body = styled.div`
  background: #fff;
  border: 2px solid #f7931e;
  border-radius: 12px;
  box-shadow: 0 10px 20px 0 rgb(0 0 0 / 30%);
  text-align: left;
  > ul {
    margin: 10px 0 0;
    padding: 0;
    list-style-type: none;
    > li {
      padding: 5px;
      color: #333;
      font-size: 12px;
      transition: 0.3s;
    }
    > li:nth-child(2n) {
      background: #fff8e8;
    }
    > li:hover {
      background: #fff0cc;
      cursor: pointer;
    }
  }
`;

const Button = styled.button`
  display: block;
  width: 100%;
  height: 30px;
  margin: 0;
  padding: 5px 0 3px;
  border: 0;
  border-radius: 0 0 6px 6px;
  background-color: #f7931e;
  color: #fff;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  > svg {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 5px;
    vertical-align: middle;
    fill: currentColor;
  }
`;

const Helper = (props) => {
  const { child, ...res } = props;
  return (
    <HelperWrapper {...res}>
      <HeadWrapper>
        <Head />
        <Icon>
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle fill="#333" cx="8" cy="8" r="8"></circle>
              <g stroke="#FFF" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 5l6 6M5 11l6-6"></path>
              </g>
            </g>
          </svg>
        </Icon>
      </HeadWrapper>

      <Body>
        <ul>
          <li data-id="" data-index="1">
            为什么登录个人中心要重新填写简历？
          </li>
          <li data-id="" data-index="2">
            被师兄推荐到某职位，想修改职位信息，该怎么办呢？
          </li>
          <li data-id="" data-index="3">
            笔试可以修改时间场次吗？
          </li>
          <li data-id="" data-index="4">
            测评有效期是多久？
          </li>
          <li data-id="" data-index="5">
            为什么一直是新投递状态？
          </li>
        </ul>
        <Button type="button">
          <svg viewBox="0 0 38 38">
            <path d="M13.8 31.2l1.1.3c1.3.3 2.7.5 4.1.5 8.9 0 16-6.5 16-14.5S27.9 3 19 3 3 9.5 3 17.5c0 3.6 1.5 7.1 4.1 9.7l.9.9v6.2zm.4 3.2L8 37.7c-.3.2-.7.3-1 .3-1.1 0-2-.9-2-2v-6.7C1.9 26.2 0 22 0 17.5 0 7.8 8.5 0 19 0s19 7.8 19 17.5S29.5 35 19 35c-1.7 0-3.3-.2-4.8-.6zm1.3-20.9c0-1.7 1.2-3 3.5-3 2.5 0 3.9 1.7 3.5 3.1-.3 1-.7 1.6-1.8 2.3-.1.1-.6.4-.5.3-1.9 1.3-2.8 2.5-2.8 4.7 0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-1.1.3-1.5 1.5-2.3-.1.1.4-.2.5-.3 1.6-1.1 2.5-2.2 3-4.1.8-3.3-2-6.9-6.5-6.9-4.1 0-6.5 2.7-6.5 6 0 .8.7 1.5 1.5 1.5.9.2 1.6-.5 1.6-1.3zM19 28c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
          </svg>
          <span>点我提问</span>
        </Button>
      </Body>
    </HelperWrapper>
  );
};

export { Helper };
