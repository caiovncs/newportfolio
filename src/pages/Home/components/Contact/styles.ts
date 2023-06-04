import styled from 'styled-components'

export const ContactContainer = styled.section`
  background-color: ${({ theme }) => theme.colors['base-black']};
  padding-top: 7rem;
  padding-bottom: 7rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-black-light']};

  > div {
    display: flex;
    justify-content: space-between;

    > span {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        width: 2px;
        background-color: ${({ theme }) => theme.colors['base-black-light']};
        height: 100%;
        left: 0;
      }
    }
  }
`

export const InfosContactContainer = styled.div`
  h1 {
    margin-bottom: 2.5rem;

    &::after {
      content: ' />';
      color: ${({ theme }) => theme.colors['brand-green']};
    }

    &::before {
      content: '<';
      color: ${({ theme }) => theme.colors['brand-green']};
    }
  }

  > p {
    max-width: 360px;
    margin-bottom: 2.25rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;

    a {
      width: 30px;
      height: 30px;
      border-bottom: 3px solid transparent;
      padding-bottom: 2.5rem;
      transition: 0.3s;

      &:hover {
        border-bottom: 3px solid ${({ theme }) => theme.colors['brand-purple']};
      }
    }
  }
`

export const FormFooterContainer = styled.form`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;

  input,
  textarea {
    width: 540px;
    color: ${({ theme }) => theme.colors['base-white']};
    background-color: ${({ theme }) => theme.colors['base-black-light']};
    padding: 1rem;
    border: 1px solid transparent;
    transition: 0.2s ease-in;
    font-size: 1rem;

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors['brand-purple']};
    }
  }

  textarea {
    height: 7.5rem;
    resize: none;

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors['brand-purple']};
    }

    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.colors['base-black-light']};
    }
  }

  button {
    margin-top: 1rem;
  }
`
