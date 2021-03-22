import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon, Image} from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import useI18n from 'hooks/useI18n'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const Upcomming = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <StyledNotFound>
        <Image src="/images/kick/upcomming.png" alt="illustration" width={1352} height={587} responsive />
      </StyledNotFound>
    </Page>
  )
}

export default Upcomming
