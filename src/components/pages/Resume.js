import React from 'react'
import { ResumeContainer,ResumeLeftPanel,ResumeMiddlePanel,ResumeRightPanel,ResumePic,ResumeTitle,ResumeSubHeader,ResumeContent,ResumeDividingLine,ResumeIcons,ResumeSkills,ResumeLinks, ResumeBG, ResumeHeader } from '../../utils/styles/Resume.style'
import { FaEnvelope,FaGithubSquare,FaLinkedin,FaReact,FaJava,FaHtml5,FaCss3Alt } from 'react-icons/fa';
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
                            In 2011 I enrolled in a Certificate III in Information Technology, once I completed this we I moved into an 18-month Diploma of Software Development. During my studies I learnt the fundamentals of programming and applying those skills to develop some very basic applications.
                            The languages taught in my Diploma were Java, Visual Basic, C# .NET and SQL. <br /><br />
                            After finishing my Diploma at the end of 2013, I was unsuccessful in finding a developer role and ended up getting a job at a local car dealership as a trainee Service Advisor. Cars are a huge passion of mine so I worked on building a career in the automotive industry.
                            I really enjoyed my job but my love of coding was always in the back of my mind, so I decided to start a career in IT with the hope of one day becoming a Software Devloper.
                        </ResumeContent>
                        <ResumeTitle>Work Experience</ResumeTitle>
                        <ResumeDividingLine />
                        <ResumeContent className='workExperience'>
                            <ResumeSubHeader>
                                Associate Systems Engineer - Kinetic IT <br />
                                <h3 className='smaller'>2022-Current</h3>
                            </ResumeSubHeader>
                            <div className='workExperienceDetails'>
                                I currently work in the Enterprise Operations team, my role includes Data Center support, server maintenance as well as reviewing and creating scripts in PowerShell.
                            </div>
                            <ResumeSubHeader>
                                Desktops Technician - Kinetic IT <br />
                                <h3 className='smaller'>2021-2022</h3>
                            </ResumeSubHeader>
                            <div className='workExperienceDetails'>
                                I provided onsite and remote support for users to rectify computer hardware & software issues.  
                                During my time in Desktops, I really got back into coding, building many scripts to automate tasks.
                            </div>
                            <ResumeSubHeader>
                                Service Desk Technician - Kinetic IT <br />
                                <h3 className='smaller'>2020-2021</h3>                
                            </ResumeSubHeader>
                            <div className='workExperienceDetails'>
                                As a Service Desk Technician I provided over the phone support to customers. I trained new starters, resolved complex tickets and managed high priority incidents as needed.
                            </div>
                            <ResumeSubHeader>
                                Service Advisor - Mandurah Mazda <br />
                                <h3 className='smaller'>2014-2020</h3>            
                            </ResumeSubHeader>
                            <div className='workExperienceDetails'>
                                Working at Mazda was a great opportunity to learn and grow. I built an amazing relationship with my customers and was always commended on my outstanding service.   
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