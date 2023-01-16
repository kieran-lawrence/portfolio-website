import React from 'react'
import { ResumeContainer,ResumeLeftPanel,ResumeMiddlePanel,ResumeRightPanel,ResumePic,ResumeTitle,ResumeSubHeader,ResumeContent,ResumeDividingLine,ResumeIcons,ResumeSkills,ResumeLinks, ResumeBG, ResumeHeader } from '../../utils/styles/Resume.style'
import { FaEnvelope,FaGithubSquare,FaLinkedin,FaReact,FaJava,FaHtml5,FaCss3Alt,FaArrowAltCircleDown } from 'react-icons/fa';
import { Tooltip } from '@mui/material'
import { Link } from 'react-router-dom';
import { ButtonOutline } from '../../utils/styles/Home.style';

const Resume = () => {
  return (
        <>
            <ResumeBG>
                <ResumeContainer>
                    <ResumeLeftPanel>
                        <ResumeIcons>
                            <Tooltip title="Email Me" placement="left">
                                <ResumeLinks href='/contact'><FaEnvelope /></ResumeLinks>
                            </Tooltip>
                        </ResumeIcons>
                        <ResumeIcons>
                            <Tooltip title="GitHub" placement="left">
                                <ResumeLinks href='https://github.com/nfctargus'><FaGithubSquare /></ResumeLinks>
                            </Tooltip> 
                        </ResumeIcons>
                        <ResumeIcons>
                            <Tooltip title="LinkedIn" placement="left">
                                <ResumeLinks href='https://www.linkedin.com/in/kieran-lawrence-892027202/'><FaLinkedin /></ResumeLinks>
                            </Tooltip> 
                        </ResumeIcons>
                    </ResumeLeftPanel>
                    <ResumeMiddlePanel>
                        <ResumePic src='images/smee.png' alt="It's Me!"/>
                        <ResumeTitle>Kieran Lawrence</ResumeTitle>
                        <ResumeContent className='education'>
                            <ResumeHeader>Education</ResumeHeader>
                            <ResumeDividingLine />
                            <ResumeSubHeader>
                            <h3 className='smaller'>Certificate III in Information Technology</h3>
                            </ResumeSubHeader>
                            <ResumeSubHeader>
                            <h3 className='smaller'>Diploma of Software Development</h3>
                            </ResumeSubHeader>
                            <ResumeSubHeader>
                            <h3 className='smaller'>AZ-900 Azure Fundamentals</h3>
                            </ResumeSubHeader>
                        </ResumeContent>
                        <ResumeContent className='skills'>
                            <ResumeHeader>Skills</ResumeHeader>
                            <ResumeDividingLine />
                            <span className='skills'>
                                <Tooltip title="React" placement="left">
                                <ResumeSkills> <FaReact /> </ResumeSkills>
                                </Tooltip>
                                <Tooltip title="Java" placement="right">
                                <ResumeSkills> <FaJava /> </ResumeSkills>
                                </Tooltip>
                                <Tooltip title="HTML" placement="left">
                                <ResumeSkills> <FaHtml5 /> </ResumeSkills>
                                </Tooltip>
                                <Tooltip title="CSS" placement="right">
                                    <ResumeSkills><FaCss3Alt /></ResumeSkills>
                                </Tooltip> 
                            </span>
                        </ResumeContent>
                    </ResumeMiddlePanel>
                    <ResumeRightPanel>
                        <ResumeTitle>About Me</ResumeTitle>
                        <ResumeDividingLine />
                        <ResumeContent className='aboutMe'>
                            In 2011 I enrolled in a Certificate III in Information Technology, once I completed this we were presented 2 options to progress to the next level: Cert IV Networking or Programming. 
                            The concept of making a computer application or program sounded exciting to me, and a few friends I made in the course were continuing to the Programming course so that's what I did. <br /><br />
                            Shortly after starting our course the TAFE offered us an expedited, 18-month Diploma of Software Development. During my studies I learnt the fundamentals of programming and applying those skills to develop some very basic applications.
                            The languages taught in my Diploma were Java, Visual Basic, C# .NET and SQL. 
                        </ResumeContent>
                        <ResumeTitle>Work Experience</ResumeTitle>
                        <ResumeDividingLine />
                        <ResumeContent className='workExperience'>
                            <ResumeSubHeader>
                                Associate Systems Engineer - Kinetic IT <br />
                                <h3 className='smaller'>2022-Current</h3>
                            </ResumeSubHeader>
                            <div className='workExperienceDetails'>
                                I currently work in the Enterprise Operations team on one of our customer sites with Kinetic IT. I look after our customers Data Center, work on tickets, 
                                complete project work and where possible I use my skills to develop new scripts in PowerShell or improve existing scripts.
                            </div>
                            <ResumeSubHeader>
                                Desktops Technician - Kinetic IT <br />
                                <h3 className='smaller'>2021-2022</h3>
                            </ResumeSubHeader>
                            <div className='workExperienceDetails'>
                                I provided onsite and remote support for end users to rectify computer hardware & software issues.
                                This presented many challenges as we lost some valuable team members, performed a handover to the new Service Provider and closed out as many ongoing issues as possible before the contract ended.
                            </div>
                            <ResumeSubHeader>
                                Senior Service Desk Technician - Kinetic IT <br />
                                <h3 className='smaller'>2020-2021</h3>                
                            </ResumeSubHeader>
                            <div className='workExperienceDetails'>
                                After a short time on the Service Desk I was promoted to a Senior position within the team where I was responsible for VIP customers within the business. I provided over the phone support to senior management and the executive office. 
                                I applied my programming background to learn PowerShell and developed several scripts which were used by the Service Desk to automate tasks.
                            </div>
                            <div className='mobileLinks'>
                                <Link to='/portfolio'><ButtonOutline className='buttons'>Portfolio</ButtonOutline></Link>
                                <Link to='/contact'><ButtonOutline className='buttons'>Contact</ButtonOutline></Link>
                            </div>
                        </ResumeContent>
                    </ResumeRightPanel>
                </ResumeContainer>
            </ResumeBG>
        </>
  )
}

export default Resume