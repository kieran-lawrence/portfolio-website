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

	// Not the best way to do this, but it works for now
	const imageCounts: Record<string, number> = {
		'coming-soon': 1,
		quill: 6,
		'bulletin-news': 1,
		'improved-obisidan': 1
	};

	const nextImage = () => {
		if (currentImageIndex < imageCounts[imagePath] - 1) {
			currentImageIndex += 1;
		} else {
			currentImageIndex = 0;
		}
	};

	const prevImage = () => {
		if (currentImageIndex > 0) {
			currentImageIndex -= 1;
		} else {
			currentImageIndex = imageCounts[imagePath] - 1;
		}
	};
</script>

<section class="carousel">
	<button class="close" onclick={onClose}>{'x'}</button>
	<div class="carousel-content">
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
		width: 90vw;
		height: auto;
		display: flex;
		justify-content: center;
		align-items: center;
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
		top: 0.9rem;
		right: 0.9rem;
	}
	.prev {
		left: 0;
		top: 50%;
		transform: translateY(-50%);
	}
	.next {
		right: 0;
		top: 50%;
		transform: translateY(-50%);
	}
	.image {
		width: 90%;
		height: auto;
		border-radius: 0.5rem;
	}
</style>
