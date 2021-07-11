import styled from "styled-components";

const FooterWrapper = styled.div`
  padding-top: 20px;
  height: 110px;
  background-color: #414954;
  text-align: center;
  color: #585756;
  padding-top: 20px;
`;

const P = styled.p`
  > a {
    padding: 0 5px;
    color: #fff;
  }
  > span {
    color: #fff;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <P data-spm-anchor-id="a1z3e1.11770841.0.i3.60137405Ar8wdE">
      <a
        title="阿里巴巴中国站"
        target="_blank"
        rel="noreferrer"
        href="http://china.alibaba.com/?tracelog=cnindex_sep_home_bottom"
      >
        阿里巴巴中国站
      </a>{" "}
      |
      <a
        title="阿里巴巴国际站"
        rel="noreferrer"
        target="_blank"
        href="http://www.alibaba.com/"
      >
        阿里巴巴国际站
      </a>{" "}
      |
      <a
        title="全球速卖通"
        rel="noreferrer"
        target="_blank"
        href="http://www.aliexpress.com/"
      >
        全球速卖通
      </a>{" "}
      |
      <a
        title="淘宝网"
        rel="noreferrer"
        target="_blank"
        href="http://www.taobao.com/"
      >
        淘宝网
      </a>{" "}
      |
      <a
        title="天猫"
        rel="noreferrer"
        target="_blank"
        href="http://www.tmall.com/"
      >
        天猫
      </a>{" "}
      |
      <a
        title="支付宝"
        rel="noreferrer"
        target="_blank"
        href="http://www.alipay.com/"
      >
        支付宝
      </a>{" "}
      |
      <a
        title="阿里云"
        rel="noreferrer"
        target="_blank"
        href="http://www.aliyun.com/"
      >
        阿里云
      </a>{" "}
      |
      <a
        title="聚划算"
        rel="noreferrer"
        target="_blank"
        href="http://ju.taobao.com/"
      >
        聚划算
      </a>{" "}
      |
      <a
        title="一淘"
        rel="noreferrer"
        target="_blank"
        href="http://www.etao.com/"
      >
        一淘
      </a>{" "}
      |
      <a
        title="淘工作"
        rel="noreferrer"
        target="_blank"
        href="http://www.alizhaopin.com/"
      >
        淘工作
      </a>{" "}
      |
      <a
        title="Official Website"
        target="_blank"
        rel="noreferrer"
        href="https://campus.alibaba.com/en/homepage "
      >
        Official Website (EN)
      </a>
    </P>

    <P>
      <span>©1999-2021 阿里巴巴集团 版权所有</span>
      <a href="http://weibo.com/campusali" rel="noreferrer" target="_blank">
        阿里巴巴集团校园招聘
      </a>
    </P>
  </FooterWrapper>
);
export { Footer };
