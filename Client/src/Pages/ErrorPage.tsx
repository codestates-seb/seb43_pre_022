import '../Global.css';

import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import error from '../assets/error.png';
import BackgroundGray from '../Styles/BackgroundGray';

const Content = styled.div`
  height: 50vh;
  margin: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  .link {
    text-decoration: none;
    color: #0175cc;
  }
`;

const UnderConstruction = styled.img`
  width: 200px;
  margin-right: 50px;
`;

export default function ErrorPage() {
  const h2Text = 'Page not found';
  const pText = "We're sorry, we couldn't find the page you requested.";
  return (
    <Content>
      <BackgroundGray />
      <UnderConstruction src={error} />
      <div>
        <h2>{h2Text}</h2>
        <div>{pText}</div>
        <div>
          Browse our{' '}
          <Link className="link" to="/">
            recent questions
          </Link>
        </div>
      </div>
    </Content>
  );
}
