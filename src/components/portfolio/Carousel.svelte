<script lang="ts">
	let {
		currentImageIndex = $bindable<number>(),
		onClose,
		imagePath
	}: {
		imagePath: string;
		currentImageIndex: number;
		onClose?: () => void;
	} = $props();

	const nextImage = () => (currentImageIndex += 1);

	const prevImage = () => (currentImageIndex -= 1);
</script>

<section class="carousel">
	<div class="carousel-content">
		<button class="close" onclick={onClose}>{'x'}</button>
		<button class="prev" onclick={prevImage}>{'<'}</button>
		{#await import(`$lib/assets/portfolio/${imagePath}/${currentImageIndex}.png`) then { default: src }}
			<img {src} alt={'Carousel'} class="image" loading="lazy" />
		{/await}
		<button class="next" onclick={nextImage}>{'>'}</button>
	</div>
</section>

<style>
	.carousel {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}
	.carousel-content {
		position: relative;
		width: 80vw;

		height: auto;
	}
	.close,
	.prev,
	.next {
		position: absolute;
		background: #1a1a1a;
		border: none;
		color: #f1f1f1;
		font-size: 2rem;
		cursor: pointer;
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
	}
	.close {
		top: 1rem;
		right: 1rem;
	}
	.prev {
		left: 1rem;
		top: 50%;
		transform: translateY(-50%);
	}
	.next {
		right: 1rem;
		top: 50%;
		transform: translateY(-50%);
	}
	.image {
		width: 100%;
		height: auto;
	}
</style>
