<script lang="ts">
	import RevealOnIntersection, {
		TransitionType,
	} from '$lib/components/util/RevealOnIntersection.svelte';
	import SmuItem from './SmuItem.svelte';

	const revealProps = {
		percent: 100,
		transition: 'fly' as TransitionType,
		flyX: 30,
		flyY: 50,
		duration: 600,
	};
</script>

<SmuItem smuProjectId="wok_n_roll">
	<p>
		We conducted market research and discovered an unfulfilled niche for a comprehensive database
		and search engine for hawker food in Singapore.
	</p>
	<p>
		Using this database, we developed a product, risk mitigation strategies, and a feature roadmap
		for future growth.
	</p>
	<p>
		Our final presentation slides can be found
		<a href="/projects/woknroll/cs206-final-pres.pdf" target="_blank">here</a>.
	</p>
	<div class="relative z-0 mt-8 aspect-square">
		<RevealOnIntersection
			{...revealProps}
			delay={50}
			class="absolute top-[5%] left-[5%] right-[45%]"
		>
			<img src="/projects/woknroll/search-flat.png" alt="woknroll search page" />
		</RevealOnIntersection>
		<RevealOnIntersection
			{...revealProps}
			duration={600}
			delay={150}
			class="absolute top-[15%] left-[52%] right-0"
		>
			<img src="/projects/woknroll/add-stall-flat.png" alt="woknroll add stall page" />
		</RevealOnIntersection>
		<RevealOnIntersection
			{...revealProps}
			duration={600}
			delay={250}
			class="absolute top-[47%] left-0 right-[50%]"
		>
			<img src="/projects/woknroll/stall-page-flat.png" alt="woknroll stall page" />
		</RevealOnIntersection>
		<RevealOnIntersection
			{...revealProps}
			duration={600}
			delay={350}
			class="absolute top-[47%] left-[40%] right-[10%]"
		>
			<img src="/projects/woknroll/add-review-flat.png" alt="woknroll add review page" />
		</RevealOnIntersection>
	</div>
</SmuItem>
