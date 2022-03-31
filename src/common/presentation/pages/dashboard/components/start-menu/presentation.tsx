// dependencies
import React from 'react';

// local components
import { 
    Container, 
    WaterMark, 
    Name, 
    LastName, 
    Content, 
    Programs,
    Program,
    Icon,
    ShutDown,
} from './styles';

// assets
import projectsIcon from 'src/assets/icons/projects.png';
import aboutIcon from 'src/assets/icons/about.png';
import findIcon from 'src/assets/icons/find.png';
import skillsIcon from 'src/assets/icons/skills.png';

export function StartMenuPresentation(props: any) {
    const { isActive } = props;

    const programsList = [
        {
            imageSource: projectsIcon,
            title: 'Projects'
        },
        {
            imageSource: aboutIcon,
            title: 'About'
        },
        {
            imageSource: findIcon,
            title: 'Find'
        },
        {
            imageSource: skillsIcon,
            title: 'Skills'
        },
    ];

    function renderPrograms() {
        const mappedProgramsList = programsList.map((program) => {
            const { imageSource, title } = program;

            return (
                <Program>
                    <Icon src={imageSource}/>

                    {title}
                </Program>
            )
        });

        return mappedProgramsList;
    }

    return (
        <Container isActive={isActive}>
            <WaterMark>
                <LastName>Pedro</LastName>
                <Name>João</Name>
            </WaterMark>

            <Content>
                <Programs>{renderPrograms()}</Programs>

                <ShutDown/>
            </Content>
        </Container>
    )
}