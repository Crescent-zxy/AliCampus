import styled from "styled-components";
const BlockWrapper = styled.div`
  height: 220px;
  width: 380px;
  border: 1px solid #e2e2e2;
  box-shadow: 0px 2px 5px #c5c5c5;
  border-radius: 6px;
  font-family: PingFangSC-Regular;
  font-size: 18px;
  &.disabled {
    > div {
      color: rgb(155, 155, 155);
    }
    > a {
      background-color: rgb(226, 226, 226);
      color: white;
      pointer-events: none;
      cursor: not-allowed;
    }
  }
  > a:hover {
    color: white;
  }
`;

const MainText = styled.div`
  margin-top: 40px;
  font-size: 18px;
  color: #f37327;
`;
const TimeText = styled.div`
  font-size: 13px;
  margin-top: 10px;
  color: #f37327;
`;

const Apply = styled.a`
  display: block;
  width: 173px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 35px auto;
  color: white;
  background: #f37327;
  border-radius: 40px;
  cursor: pointer;
`;

const Block = (props) => {
  const { title, info, apply, disabled } = props;
  return (
    <BlockWrapper className={disabled ? "disabled" : ""}>
      <MainText>{title}</MainText>
      <TimeText>{info}</TimeText>
      <Apply href={apply}>马上申请</Apply>
    </BlockWrapper>
  );
};

export { Block };
