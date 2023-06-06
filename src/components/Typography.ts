import styled from 'styled-components'

interface RegularTextProps {
  size?: 's' | 'm' | 'l'
  color?: 'white' | 'black' | 'gray' | 'nav-color' | 'black-light'
}

interface TitleTextProps {
  size?: 'm' | 'l' | 'xl' | 'mobile'
  color?: 'white' | 'black'
}

export const RegularText = styled.p<RegularTextProps>`
  font-size: ${({ theme, size }) => theme.textSizes[`regular-${size ?? 'm'}`]};
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'white'}`]};
  font-weight: 400;
  line-height: 130%;
`

export const TitleText = styled.h1<TitleTextProps>`
  font-size: ${({ theme, size }) => theme.textSizes[`title-${size ?? 'm'}`]};
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'white'}`]};
  font-weight: 500;
`
