import styled, {css} from "styled-components";
import { changeThemeTime } from "../../../../application/config/variables";
import {device} from "../../../../application/style/breakpoint";

export const Ballon = styled.span`
    display: inline-block;
    min-height: 16em;
    min-width: 16em;
    position: absolute;
    border-radius: 150%;
    border-bottom-left-radius: 425%;
    border-bottom-right-radius: 425%;
    border-top-left-radius: 425%;
    border-top-radius: 220%;
    background-image: ${({ urlImg }) => css`url(${urlImg})`};
    transform: rotate(135deg);
    z-index: 2;


    #span1 {
        position: relative;
        top: -5px;
        left: 210px;
        display: inline-block;
        min-height: 3em;
        min-width: 3em;
        border-radius: 50%;
        border-bottom-left-radius: 52%;
        border-bottom-right-radius: 72%;
        border-top-left-radius: 72%;
        border-top-right-radius: 420%;
        border: 2px solid #ffffff;
        border-top-color: transparent;
        border-right-color: transparent;
        transform: rotate(180deg);
        z-index: -8;
    }

    #span2 {
        position: relative;
        bottom: 60px;
        top: -45px;
        left: 185px;
        right: 450px;
        display: inline-block;
        height: 40px;
        width: 60px;
        border: 3px;
        transition: background-color ${changeThemeTime}s;
        background-color: ${({theme}) => theme.primaryColor};
        transform: rotate(45deg);
    }
`;

export const Anchor = styled.a`
  width: 100%;
  border-radius: 5px;

  @media ${device.tablet} {
    width: 45%;
  }
`;
