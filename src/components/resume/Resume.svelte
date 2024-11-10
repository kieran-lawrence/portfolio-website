<script>
	import { activeTheme } from '$lib';
	import Cloud from '../Cloud.svelte';
	import IconAwsLambda from '../icons/IconAWSLambda.svelte';
	import IconEmail from '../icons/IconEmail.svelte';
	import IconGithub from '../icons/IconGithub.svelte';
	import IconLinkedIn from '../icons/IconLinkedIn.svelte';
	import IconReact from '../icons/IconReact.svelte';
	import SkillsItem from '../skills/SkillsItem.svelte';
	import Card from './Card.svelte';
</script>

<div
	id="resume"
	style={`--hover-colour:${$activeTheme.pallette.cloudsOneColour};--text-shadow-colour:${$activeTheme.pallette.textShadowColour}`}
>
	<div class="imageWrapper">
		<Cloud />
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
	<h2 class="subHeader">Work History</h2>
	<div class="resumeContainer">
		<Card
			jobTitle="Associate Developer"
			jobCompany="Seven West Media"
			jobDates="Oct 2023 - Present"
			cardTitleColour={$activeTheme.pallette.textColour}
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
					Conducted technical research and exploratory investigations <b
						class="cardTextBold">(spikes)</b
					> to assess new technologies and approaches
				</li>
			</ul>
		</Card>
		<Card
			jobTitle="Associate Systems Engineer"
			jobCompany="Kinetic IT"
			jobDates="Jun 2022 - Oct 2023"
			cardTitleColour={$activeTheme.pallette.textColour}
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
		<SkillsItem
			headerText="Tools"
			colourFeature={$activeTheme.pallette.awsIconColour}
			colourText={$activeTheme.pallette.textColour}
			skillItems={['PostgreSQL', 'Jest', 'TypeORM', 'AWS Lambda', 'GitHub CI/CD', 'Pulumi']}
		>
			<IconAwsLambda />
		</SkillsItem>
		<SkillsItem
			headerText="Frameworks"
			colourFeature={$activeTheme.pallette.reactIconColour}
			colourText={$activeTheme.pallette.textColour}
			skillItems={['React', 'Svelte', 'NextJS', 'React Native', 'NestJS']}
		>
			<IconReact />
		</SkillsItem>
	</div>
</div>

<style>
	#resume {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.imageWrapper {
		display: flex;
		padding: 10rem;
		position: relative;
	}
	.image {
		border-radius: 50%;
		aspect-ratio: 1/1;
		width: 15rem;
		height: auto;
		padding: 1rem;
		filter: grayscale(40%);
	}
	.linkWrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		z-index: 2;
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
		text-shadow: 3px 3px 2px var(--text-shadow-colour);
		font-family: 'Coiny', system-ui;
		margin: 0;
		padding: 1rem 0 0.5rem;
	}
	.resumeContainer {
		width: 60vw;
		max-width: 85rem;
		display: grid;
		gap: 2rem;
		list-style: none;
		place-items: 'center';
		transition: 'gap 0.25s';
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
	.cardTextRegular {
		display: flex;
		justify-content: space-evenly;
		flex: 1;
		flex-direction: column;
		text-align: left;
		font-size: 1.1rem;
		gap: 0.5rem;
		letter-spacing: normal;
		text-transform: lowercase;
		font-weight: 400;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		margin: 0;
		padding-left: 1rem;
	}

	.cardTextCapitalized {
		text-transform: capitalize;
	}
	.cardTextBold {
		letter-spacing: normal;
		font-weight: 800;
	}

	/* Mobile Styling */
	@media only screen and (max-width: 680px) {
		.subHeader {
			font-size: 3.5rem;
		}
		.resumeContainer {
			width: 90vw;
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
	}
	/* Tablet Styling */
	@media (min-width: 681px) and (max-width: 1024px) {
		.subHeader {
			font-size: 3.8rem;
		}
		.resumeContainer {
			width: 90vw;
			display: grid;
			gap: 1rem;
		}
	}
</style>
