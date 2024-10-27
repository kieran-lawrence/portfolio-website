<script>
	import { activeTheme } from '$lib';
	import IconEmail from '../icons/IconEmail.svelte';

	import IconGithub from '../icons/IconGithub.svelte';
	import IconLinkedIn from '../icons/IconLinkedIn.svelte';
	import Skills from '../skills/Skills.svelte';
	import Card from './Card.svelte';
</script>

<div id="resume">
	<div class="imageWrapper">
		<enhanced:img
			class="image"
			src="$lib/assets/Smee.jpg"
			alt="A self portrait of Kieran Lawrence"
		/>
		<div class="linkWrapper">
			<ul class="links">
				<li>
					<a
						href="https://github.com/kieran-lawrence"
						class="resumeIcons"
						target="_blank"
					>
						<IconGithub />
					</a>
				</li>
				<li>
					<a
						href="https://linkedin.com/in/kieran-lawrence-892027202"
						class="resumeIcons"
						target="_blank"
					>
						<IconLinkedIn />
					</a>
				</li>
				<li>
					<a href="mailto:kieranlawrence2@gmail.com" class="resumeIcons" target="_blank">
						<IconEmail />
					</a>
				</li>
			</ul>
		</div>
	</div>
	<Skills />
	<h2 class="subHeader">Work History</h2>
	<div class="resumeContainer">
		<Card
			jobTitle="Associate Developer"
			jobCompany="Seven West Media"
			jobDates="Oct 2023 - Present"
			cardTitleColour={$activeTheme.pallette.textColour}
			shadowColour={'#CCC'}
			backgroundColour={$activeTheme.pallette.backgroundColour}
		>
			<ul class="cardTextRegular">
				<li>
					Developed <b class="cardTextBold">front-end</b> features and functionality, including
					interactive elements and dynamic content
				</li>
				<li>
					Integrate <b class="cardTextBold">back-end</b> systems,
					<b class="cardTextBold">databases</b>, and
					<b class="cardTextCapitalized">APIs</b> to support website functionality
				</li>
				<li>
					Contributed to the successful launch of <b class="cardTextCapitalized"
						>The Nightly</b
					>, which now has over <b class="cardTextBold">5 million</b> monthly page views
				</li>
				<li>
					<b class="cardTextBold">Revamped our tech stack</b>, initially developed in
					2015, using a contemporary framework
				</li>
			</ul>
		</Card>
		<Card
			jobTitle="Associate Systems Engineer"
			jobCompany="Kinetic IT"
			jobDates="Jun 2022 - Oct 2023"
			cardTitleColour={$activeTheme.pallette.textColour}
			shadowColour={'#CCC'}
			backgroundColour={$activeTheme.pallette.backgroundColour}
		>
			<ul class="cardTextRegular">
				<li>
					Continuously <b class="cardTextBold"
						>monitor <b class="cardTextCapitalized">IT</b> systems</b
					>, networks, and applications to ensure their health and performance
				</li>
				<li>
					Create and maintain <b class="cardTextBold">scripts</b> for automating system tasks,
					such as deployments, monitoring, and backups
				</li>
				<li>
					Assist in the daily operations of the <b class="cardTextBold">data centre</b>,
					including managing physical access and routine hardware inspections
				</li>
			</ul>
		</Card>
		<Card
			jobTitle="Service Desk Technician"
			jobCompany="Kinetic IT"
			jobDates="Feb 2020 - Jun 2022"
			cardTitleColour={$activeTheme.pallette.textColour}
			shadowColour={'#CCC'}
			backgroundColour={$activeTheme.pallette.backgroundColour}
		>
			<ul class="cardTextRegular">
				<li>
					Provided <b class="cardTextBold">end-user support</b> for hardware, software, and
					network issues remotely and in-person
				</li>
				<li>
					Troubleshoot complex <b class="cardTextBold"
						>computer hardware & software faults</b
					>, liaising with vendors as required
				</li>
				<li>
					Identified and assisted in the resolution of <b class="cardTextBold"
						>high priority incidents</b
					>
				</li>
				<li>
					Provided <b class="cardTextBold">training and onboarding</b> for new employees
				</li>
			</ul>
		</Card>
	</div>
	<h2 class="subHeader">Education</h2>
	<div class="educationContainer">
		<Card
			jobTitle="Diploma of Software Development"
			jobCompany="South Metro TAFE"
			jobDates="July 2026"
			cardTitleColour={$activeTheme.pallette.textColour}
			shadowColour={'#CCC'}
			backgroundColour={$activeTheme.pallette.backgroundColour}
		>
			<ul class="cardTextRegular">
				<li>
					Built upon my existing knowledge of programming languages including <b
						class="cardTextBold">Java, C# and Python</b
					>
				</li>
				<li>
					Gained expertise in designing and developing <b class="cardTextBold"
						>SQL and NoSQL databases</b
					>
				</li>
			</ul>
		</Card>
		<Card
			jobTitle="Microsoft Azure Fundamentals"
			jobCompany="Microsoft"
			jobDates="May 2022"
			cardTitleColour={$activeTheme.pallette.textColour}
			shadowColour={'#CCC'}
			backgroundColour={$activeTheme.pallette.backgroundColour}
		>
			<ul class="cardTextRegular">
				<li>
					gained a familiarity with <b class="cardTextBold">Azure services</b> and how they
					fit into the broader cloud ecosystem
				</li>
				<li>
					learned to distinguish between <b class="cardTextBold">IaaS, PaaS, and SaaS</b>,
					and understand how each addresses different business needs and scenarios
				</li>
			</ul>
		</Card>
	</div>
</div>

<style>
	#resume {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
	.imageWrapper {
		display: flex;
	}
	.image {
		border-radius: 50%;
		aspect-ratio: 1/1;
		width: 15rem;
		height: auto;
		padding: 1rem;
		filter: grayscale(50%);
	}
	.linkWrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.links {
		list-style: none;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		padding: 0.5rem 1rem;
	}
	.links li {
		border-radius: 50%;
		width: 3rem;
		height: 3rem;
		display: grid;
		place-items: center;
	}
	.resumeIcons {
		fill: var(--text-colour);
		width: 100%;
		transition: fill 0.2s;
	}
	.resumeIcons:hover {
		fill: var(--hover-colour);
	}
	.subHeader {
		font-size: 5rem;
		letter-spacing: 3px;
		text-shadow: 0 0 17px #4b45af;
		font-family: 'Jersey 10', sans-serif;
		padding: 0 0 1.5rem 0;
		margin: 0;
	}
	.subHeader:last-of-type {
		padding: 1rem 0 1rem 0;
	}
	.educationContainer {
		padding: 0 5rem 2rem 5rem;
		max-width: 70vw;
		display: grid;
		gap: 2rem;
		list-style: none;
		justify-content: 'center';
		transition: 'gap 0.25s';
		grid-template-columns: 1fr 1fr;
	}
	.resumeContainer {
		padding: 0 5rem;
		max-width: 70vw;
		display: grid;
		gap: 2rem;
		list-style: none;
		justify-content: 'center';
		transition: 'gap 0.25s';
		grid-template-columns: 1fr 1fr 1fr;
	}
	.cardTextRegular {
		display: flex;
		justify-content: space-evenly;
		flex: 1;
		padding: 1rem 2rem;
		flex-direction: column;
		text-align: left;
		font-size: 1.1rem;
		gap: 0.5rem;
		letter-spacing: normal;
		text-transform: lowercase;
		font-weight: 400;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}
	.cardTextRegular li {
		padding: 0.1rem 0;
	}
	.cardTextCapitalized {
		text-transform: capitalize;
	}
	.cardTextBold {
		letter-spacing: normal;
		font-weight: 800;
	}
</style>
