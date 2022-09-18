import React from 'react'
import { useTranslation } from 'react-i18next'
import { Heading2, Paragraph } from '../../../assets/styles/typo'
import styled from 'styled-components'

const Content = styled(Paragraph)`
    margin-top: 1rem;
    white-space: pre-line;
`
const ContactList = styled.ul`
    margin-top: 0.5rem;
    margin-left: 1rem;
`
const ContactListItem = styled.li`
    list-style: disc;
`
const ContactListLabel = styled.span`
    font-weight: bold;
    display: inline-block;
    margin-right: 0.25rem;
`

const MainSlogan = () => {
    const { t } = useTranslation()

    return (
        <div>
            <Heading2 useGradient={true}>
                {t('label:contactAndOfficial')}
            </Heading2>
            <Content>
                <div>{t('label:contactInfo')}</div>
                <ContactList>
                    <ContactListItem>
                        <ContactListLabel>{t('label:email')}</ContactListLabel>
                        <a href={`mailto:${t('label:contact.email')}`}>
                            {t('label:contact.email')}
                        </a>
                    </ContactListItem>
                    <ContactListItem>
                        <ContactListLabel>
                            {t('label:sponsor')}
                        </ContactListLabel>
                        <a href={`mailto:${t('label:contact.sponsor')}`}>
                            {t('label:contact.sponsor')}
                        </a>
                    </ContactListItem>
                </ContactList>
            </Content>
        </div>
    )
}

export default MainSlogan
