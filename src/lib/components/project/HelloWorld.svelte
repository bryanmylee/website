<script lang="ts">
	import RevealOnIntersection from '$lib/components/util/RevealOnIntersection.svelte';
	import ProjectItem from './ProjectItem.svelte';
</script>

<section class="max-w-screen-md gap-4 p-4 mx-auto space-y-4">
	<div class="z-10">
		<ProjectItem projectId="helloworld" />
	</div>
	<p class="font-mono text-xl font-bold">
		CODE_EXP 2021 ·
		<span class="text-yellow">1st Place</span>
	</p>
	<p>
		<strong>HelloWorld</strong> was developed in a week for the CODE_EXP 2021 Hackathon.
	</p>
	<p>
		<a
			href="https://news.smu.edu.sg/news/2021/07/02/smus-computing-and-information-systems-team-emerged-champions-dsta-hackathon"
			target="_blank"
			class="text-link"
		>
			Read more about us</a
		>.
	</p>
	<div class="relative z-0 aspect-square">
		<RevealOnIntersection
			percent={100}
			transition="fly"
			flyX={30}
			flyY={50}
			duration={600}
			delay={50}
			class="absolute top-0 left-[5%] right-[45%]"
		>
			<img src="/projects/helloworld/map-flat.png" alt="helloworld discover screen" />
		</RevealOnIntersection>
		<RevealOnIntersection
			percent={100}
			transition="fly"
			flyX={30}
			flyY={50}
			duration={600}
			delay={200}
			class="absolute top-[10%] left-[52%] right-0"
		>
			<img src="/projects/helloworld/ar-portrait-flat.png" alt="helloworld ar portrait" />
		</RevealOnIntersection>
		<RevealOnIntersection
			percent={100}
			transition="fly"
			flyX={-50}
			flyY={30}
			duration={600}
			delay={350}
			class="absolute top-[45%] left-[15%] right-[25%]"
		>
			<img src="/projects/helloworld/ar-landscape-flat-rotated.png" alt="helloworld ar portrait" />
		</RevealOnIntersection>
	</div>
</section>
