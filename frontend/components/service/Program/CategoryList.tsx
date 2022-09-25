import React from 'react'
import { ICategoryListItem, ITalkList } from '../../../interfaces/IProgram'
import styled from 'styled-components'
import { Heading3 } from '../../../assets/styles/typo'
import CategoryListItem from './CategoryListItem'
import Resources from '../../../data/constants/resources'

const CategoryBlock = styled.ul`
    & + & {
        margin-top: 4rem;
    }
`

const CategoryList = (props: { list: ITalkList }) => {
    const categoryList: { [key: string]: ICategoryListItem } = {}

    props.list.list.forEach((talk) => {
        if (talk.category !== Resources.KEYNOTE_NAME) {
            if (!categoryList.hasOwnProperty(talk.category)) {
                categoryList[talk.category] = {
                    name: talk.category,
                    talkList: []
                }
            }
            categoryList[talk.category].talkList.push(talk)
        }
    })

    return (
        <>
            {Object.keys(categoryList).map((key, index) => (
                <CategoryBlock key={`category-${index}`}>
                    <li>
                        <Heading3 useGradient={true}>
                            {categoryList[key].name}
                        </Heading3>
                        <CategoryListItem list={categoryList[key].talkList} />
                    </li>
                </CategoryBlock>
            ))}
        </>
    )
}

export default CategoryList
