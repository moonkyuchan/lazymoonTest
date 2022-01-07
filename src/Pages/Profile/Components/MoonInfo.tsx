import React from "react";
import styled from "styled-components";
import Moon from "../../../Assets/Moon.jpeg";

const MoonInfo: React.FC = () => {
  return (
    <MoonInfoBack>
      <InfoCardTemplate>
        <ProfileImg src={Moon} />
        <IntroduceWrap>
          <Name>
            <span className="name">
              문규찬 <span className="kyuchan">kyuchan Moon</span>
            </span>
            <span className="frontend">Frontend Developer</span>
          </Name>
          <ContactBack>
            <span>Contact.</span>
            <RowWrap>
              <span>{`📞  Phone : 010-9343-3614`}</span>
              <span>{`📒  Blog : https://velog.io/@vlrtpfdkxm `}</span>
              <span>{`✉️  Email : lazychan90@gmail.com`}</span>
              <span>{`🔍  Github : https://github.com/moonkyuchan  `}</span>
            </RowWrap>
          </ContactBack>
        </IntroduceWrap>
      </InfoCardTemplate>
    </MoonInfoBack>
  );
};

const MoonInfoBack = styled.article`
  width: 900px;
  height: 500px;
  padding: 50px 20px;
  background-color: pink;
`;

const InfoCardTemplate = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ProfileImg = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin-right: 20px;
`;

const IntroduceWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 350px;
  height: 400px;
  margin-left: 100px;
`;

const Name = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: inherit;
  height: 120px;
  font-weight: bold;
  margin-top: 40px;
  .name {
    font-size: 60px;
    .kyuchan {
      font-size: 25px;
    }
  }
  .frontend {
    font-size: 30px;
    margin-top: 40px;
  }
`;

const ContactBack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: inherit;
  font-weight: bold;
  margin-top: 10px;
  span {
    font-size: 35px;
    margin-bottom: 30px;
  }
`;

const RowWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: inherit;
  span {
    font-size: 17px;
    margin-bottom: 15px;
  }
`;
export default MoonInfo;
