import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  max-width: 300px;
  margin: 0 auto;
`
export const TextField = styled.div`
  position: relative;
  & input {
    border: none;
    padding: 10px;
    border-radius: 4px;
    font-size: 1rem;
    color: #0e0e0e;
    margin: 10px 0;
    width: 100%;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(0, 0, 0, 0.2);

    &::placeholder {
      color: transparent;
    }

    &:focus {
      outline: none;
      border: 1px solid #0095f6;
      &::placeholder {
        color: #e1e1e1;
      }
    }

    &:focus + label, &:not(:placeholder-shown) + label {
      outline: none;
      transform: translate(10px, 1.5px) scale(0.75);
      background-color: #fff;
      padding: 0 5px;

      color: #0095f6;
    }
  }
  & label {
    color: rgba(0, 0, 0, 0.6);
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: .9rem;
    padding: 0px;
    display: block;
    transform-origin: left top;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    transform: translate(10px, 20px) scale(1);
    transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,max-width 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;

  }
`

export const ForgotPassword = styled.div`
  margin-top: 12px;
  width: 100%;
  color: #00376b;
  font-size: 14px;
  text-align: center;
`

export const Error = styled.p`
  color: red;
  text-align: center;
  margin: 0px 0 10px;
  font-weight: 600;
  font-size: 14px;
`
