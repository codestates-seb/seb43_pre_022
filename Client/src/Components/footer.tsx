import styled from 'styled-components';
import logo from '../assets/stacklogo.png';

const FooterContainer = styled.div`
  width: 100%;
  height: 260px;
  background-color: #232629;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 30px;
  position: relative;
  bottom: 0;
`;

const FooterInfoContainer = styled.div`
  margin: 10px;
  display: column;
  justify-content: center;
  align-items: flex-start;
`;

const FooterName = styled.div`
  color: white;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
`;

const FooterText = styled.div`
  color: rgba(170, 170, 170, 0.8);
  font-size: 16px;
  text-align: center;
`;

const FooterLink = styled.span`
  color: rgba(170, 170, 170, 0.8);
  text-align: center;
  font-size: 14px;
  margin: 10px;
`;

const Logo = styled.div`
  width: 60px;
  height: 70px;
  background: url(${logo}) center no-repeat;
  background-size: cover;
`;

function Footer() {
  const blogLink = 'https://stackoverflow.blog/?blb=1';
  const fbLink = 'https://www.facebook.com/officialstackoverflow/';
  const twitterLink = 'https://twitter.com/stackoverflow';
  const linkedinLink = 'https://www.linkedin.com/company/stack-overflow';
  const igLink = 'https://www.instagram.com/thestackoverflow/';

  return (
    <FooterContainer>
      <Logo />
      <FooterInfoContainer>
        <FooterName
          onClick={() => window.open('https://github.com/UseonJ', '_blank')}
        >
          FE_정우선
        </FooterName>
        <FooterText>
          GitHub
          <br />
          @UseonJ
        </FooterText>
      </FooterInfoContainer>
      <FooterInfoContainer>
        <FooterName
          onClick={() => window.open('https://github.com/hihijin', '_blank')}
        >
          FE_박희진
        </FooterName>
        <FooterText>
          GitHub
          <br />
          @hihijin
        </FooterText>
      </FooterInfoContainer>
      <FooterInfoContainer>
        <FooterName
          onClick={() =>
            window.open('https://github.com/raccoon0814', '_blank')
          }
        >
          FE_윤정훈
        </FooterName>
        <FooterText>
          GitHub
          <br />
          @raccoon0814
        </FooterText>
      </FooterInfoContainer>
      <FooterInfoContainer>
        <FooterName
          onClick={() => window.open('https://github.com/Seohabin', '_blank')}
        >
          BE_서하빈
        </FooterName>
        <FooterText>
          GitHub
          <br />
          @Seohabin6078
        </FooterText>
      </FooterInfoContainer>
      <FooterInfoContainer>
        <FooterName>BE_박기훈</FooterName>
        <FooterText>
          GitHub
          <br />@
        </FooterText>
      </FooterInfoContainer>
      <FooterInfoContainer>
        <FooterName>BE_이인건</FooterName>
        <FooterText>
          GitHub
          <br />@
        </FooterText>
      </FooterInfoContainer>
      <FooterLink onClick={() => window.open(blogLink, '_blank')}>
        Blog
      </FooterLink>
      <FooterLink onClick={() => window.open(fbLink, '_blank')}>
        Facebook
      </FooterLink>
      <FooterLink onClick={() => window.open(twitterLink, '_blank')}>
        Twitter
      </FooterLink>
      <FooterLink onClick={() => window.open(linkedinLink, '_blank')}>
        Linkedin
      </FooterLink>
      <FooterLink onClick={() => window.open(igLink, '_blank')}>
        Instagram
      </FooterLink>
    </FooterContainer>
  );
}

export default Footer;
