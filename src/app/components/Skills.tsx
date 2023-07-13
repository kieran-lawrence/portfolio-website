const Skills = () => {
    return (
        <div className="grid place-items-center w-full align-middle py-5 gap-2 bg-primary-1 bg-opacity-80 my-24 snap-y snap-mandatory xs:h-auto" id="resume">
            <div className="w-full h-196 grid place-items-center">
                <div className="grid place-items-center"><h1 className="text-2xl text-primary-2 font-bold w-fit text-center">Relevant Skills</h1></div>
                <div className="w-1/2 max-h-1/2 bg-primary-1 rounded-md xs:w-screen xs:text-sm">
                    <div className="p-2 max-h-56">
                        <h1 className="font-bold text-center text-primary-2 text-xl">My Favourite Tech</h1>
                        <h2 className="text-feature-1 font-semibold px-1 text-regular">Some of my favourite tech is: </h2>
                        <ul className="list-disc px-5 text-primary-3">
                            <li>Express</li>
                            <li>Next</li>
                            <li>Node</li>
                            <li>React</li>
                            <li>TypeORM</li>
                        </ul>
                    </div><br />
                    <div className="p-2 max-h-56">
                        <h2 className="text-feature-1 font-semibold px-1 text-regular">This is some other tech that I am familiar with but haven't use regularly: </h2>
                        <ul className="list-disc px-5 text-primary-3">
                            <li>Angular</li>
                            <li>C#</li>
                            <li>Java</li>
                            <li>SQL</li>
                            <li>Tailwind CSS</li>
                            <li>TypeScript</li>
                        </ul>
                    </div>          
                </div>
                <div className="w-1/2 max-h-1/2 bg-primary-1 rounded-md px-1 py-2 snap-center xs:w-screen xs:text-sm">
                    <h1 className="font-bold text-center text-primary-2 text-xl py-2">Education</h1>
                    <div className="educationItem">
                        <div className="flex gap-2">
                            <h2 className="text-feature-1 font-bold">Microsoft Azure Fundamentals</h2>
                            <h3 className="text-primary-3 align-middle leading-7">• 2022</h3>
                            <h3 className="text-primary-3 align-middle leading-7">• AZ-900</h3>
                        </div>
                    </div>
                    <div className="educationItem">
                        <div className="flex gap-2">
                            <h2 className="text-feature-1 font-bold">Diploma of Software Development</h2>
                            <h3 className="text-primary-3 align-middle leading-7">• 2013</h3>
                            <h3 className="text-primary-3 align-middle leading-7">• ICA12345</h3>
                        </div>
                    </div>
                    <div className="educationItem">
                        <div className="flex gap-2">
                            <h2 className="text-feature-1 font-bold">Certificate III in Information Technology</h2>
                            <h3 className="text-primary-3 align-middle leading-7">• 2012</h3>
                            <h3 className="text-primary-3 align-middle leading-7">• ICA12345</h3>
                        </div>
                    </div>
                    <h1 className="font-bold text-center text-primary-2 text-xl py-2">Non Accredited Training</h1>
                    <div className="educationItem">
                        <div className="flex gap-2">
                            <h2 className="text-feature-1 font-bold">MERN Stack Real Time Chat App</h2>
                            <h3 className="text-primary-3 align-middle leading-7">• 2023</h3>
                            <h3 className="text-primary-3 align-middle leading-7">• <a className="underline" href="https://www.udemy.com/course/mern-stack-real-time-chat-app-with-express-react-mongodb/">Udemy</a></h3>
                        </div>
                        <p className="text-primary-3">This course taught me the fundamental concepts that go into a Chat Application and led me to create my own</p>
                    </div>
                    <div className="educationItem">
                        <div className="flex gap-2">
                            <h2 className="text-feature-1 font-bold">Online Food Store Using Angular</h2>
                            <h3 className="text-primary-3 align-middle leading-7">• 2023</h3>
                            <h3 className="text-primary-3 align-middle leading-7">• <a className="underline" href="https://www.youtube.com/playlist?list=PLpaspowtqj-dA0cRZ1yEZBv0iwdOru-SC">YouTube</a></h3>
                        </div>
                        <p className="text-primary-3">A really excellent tutorial series for Angular & MongoDB</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills