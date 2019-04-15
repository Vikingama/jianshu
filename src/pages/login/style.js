import styled from "styled-components";

export const LoginBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #eee;
    z-index: -1;
`;
export const LoginWrapper = styled.div`
    margin: 110px auto;
    padding: 50px 50px 30px;
    width: 400px;
    height: 350px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    text-align: center;
    input {
        padding: 4px 12px;
        width: 300px;
        height: 50px;
        background-color: hsla(0, 0%, 71%, 0.1);
        border: 1px solid #c8c8c8;
        box-sizing: border-box;
        font-size: 14px;
        outline: none;
    }
`;
export const LoginTitle = styled.span`
    color: #ea6f5a;
    font-size: 24px;
    font-weight: 700;
`;
export const LoginPhone = styled.input.attrs({
    type: "text",
    placeholder: "手机号或邮箱"
})`
    margin: 50px 0 0 0;
    border-bottom: none;
    border-radius: 4px 4px 0 0;
`;
export const LoginPwd = styled.input.attrs({
    type: "password",
    placeholder: "密码"
})`
    border-radius: 0 0 4px 4px;
`;
export const LoginBtn = styled.div`
    margin-top: 30px;
    padding: 9px 18px;
    width: 300px;
    height: 44px;
    background: #3194d0;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    line-height: 26px;
`;
