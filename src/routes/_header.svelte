<script lang="ts">
	import GlitchMarquee from '$lib/components/util/GlitchMarquee.svelte';
	import RevealOnIntersection from '$lib/components/util/RevealOnIntersection.svelte';

	let descriptions = [
		'software developer.',
		'computer science student.',
		'vim enthusiast.',
		'cybersecurity researcher.',
		'tech geek.',
	];
</script>

<header class="max-w-screen-md mx-auto mt-12">
	<div class="mx-4 font-mono text-2xl md:mx-0">
		I am a <GlitchMarquee
			interval={5000}
			duration={1000}
			texts={descriptions}
			class="font-bold text-cyan"
		/>
	</div>
	<RevealOnIntersection percent={50} transition="fly" flyY={50} duration={600}>
		<section class="relative p-8 mt-12 bg-shade">
			<h1 class="mb-8 font-mono text-4xl font-bold text-yellow">Bryan Lee (bryanmylee)</h1>
			<p class="mb-8 text-xl max-w-96">
				I am a software developer with a passion for building products and tools to solve your
				problems.
			</p>
			<a href="#projects" class="block font-mono text-2xl text-link">Check them out here.</a>
			<img
				src="profile.png"
				alt="profile"
				class="absolute right-0 bottom-0 w-[300px] hidden md:block"
			/>
		</section>
	</RevealOnIntersection>
</header>
