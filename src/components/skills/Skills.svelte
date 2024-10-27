<script lang="ts">
	import { activeTheme } from '$lib';
	import IconReact from '../icons/IconReact.svelte';
	import IconAwsLambda from '../icons/IconAWSLambda.svelte';
	import IconTypescript from '../icons/IconTypescript.svelte';
	import SkillsItem from './SkillsItem.svelte';
</script>

<div id="skills" style={`--text-colour: ${$activeTheme.pallette.textColour};`}>
	<ul>
		<li>
			<SkillsItem
				headerText="Frameworks"
				colourFeature={$activeTheme.pallette.reactIconColour}
				colourText={$activeTheme.isDark
					? $activeTheme.pallette.backgroundColour
					: $activeTheme.pallette.textColour}
				skillItems={['React', 'Svelte', 'NextJS', 'Angular', 'React Native']}
			>
				<IconReact />
			</SkillsItem>
		</li>
		<li>
			<SkillsItem
				headerText="Tools"
				colourFeature={$activeTheme.pallette.awsIconColour}
				colourText={$activeTheme.isDark
					? $activeTheme.pallette.backgroundColour
					: $activeTheme.pallette.textColour}
				skillItems={[
					'PostgreSQL',
					'Jest',
					'TypeORM',
					'AWS Lambda',
					'Google Analytics',
					'GitHub CI/CD',
					'Pulumi'
				]}
			>
				<IconAwsLambda />
			</SkillsItem>
		</li>
		<li>
			<SkillsItem
				headerText="Languages"
				colourFeature={$activeTheme.pallette.tsIconColour}
				colourText={$activeTheme.pallette.backgroundColour}
				skillItems={['TypeScript', 'HTML', 'CSS', 'Java', 'SQL', 'Python', 'C#']}
			>
				<IconTypescript />
			</SkillsItem>
		</li>
	</ul>
</div>

<style>
	#skills {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		border: 1px solid red;
	}
	ul {
		max-width: 70vw;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		list-style: none;
		gap: 2rem;
		padding: 0 2rem;
	}
	li {
		border: 2px solid var(--text-colour);
		padding: 1rem 2rem;
	}
</style>
