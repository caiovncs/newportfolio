import styled from 'styled-components'

export const ContactContainer = styled.section`
  background-color: ${({ theme }) => theme.colors['base-black']};
  padding-top: 7rem;
  padding-bottom: 7rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-black-light']};

  @media (max-width: 767px) {
    padding-top: 3.75rem;
    padding-bottom: 3.75rem;
  }
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    > span {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        width: 2px;
        background-color: ${({ theme }) => theme.colors['base-black-light']};
        height: 100%;
        left: 0;

        @media (max-width: 1024px) {
          display: none;
        }
      }
    }
  }
`

export const InfosContactContainer = styled.div`
  h1 {
    margin-bottom: 2.5rem;

    @media (max-width: 767px) {
      font-size: ${({ theme }) => theme.textSizes['title-mobile']};
      margin-bottom: 1.5rem;
    }

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

  p {
    @media (max-width: 767px) {
      font-size: ${({ theme }) => theme.textSizes['regular-s']};
    }
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;

    a {
      width: 30px;
      height: 30px;
      border-bottom: 2px solid transparent;
      padding-bottom: 2.5rem;
      transition: 0.3s;

      &:hover {
        border-bottom: 2px solid ${({ theme }) => theme.colors['brand-purple']};
      }
    }

    @media (max-width: 767px) {
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
`

export const FormFooterContainer = styled.form`
  grid-row: 1;
  grid-column: 2;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;

  @media (max-width: 767px) {
    grid-column: 1;
    grid-row: 2;
  }
  input,
  textarea {
    /* width: 540px; */
    width: 100%;
    color: ${({ theme }) => theme.colors['base-white']};
    background-color: ${({ theme }) => theme.colors['base-black-light']};
    padding: 1rem;
    border: 1px solid transparent;
    transition: 0.2s ease-in;
    font-size: 1rem;

    @media (max-width: 1024px) {
      max-width: 540px;
      width: 100%;
      /* min-width: 300px; */
    }

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

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .rotate-icon {
    animation: spin 1s linear infinite;
  }
`
