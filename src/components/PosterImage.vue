<template>
	<img class="posterimage"
				v-if="posterData"
				:src="defaultImg"
				:alt="altText"
				:srcset="srcSet"
				:sizes="imgSizes" />
</template>

<script>
export default {
	name: 'PosterImage',
	props: {
		posterData: Object,
	},
	computed: {
		// Get the Alt text for the image.
		altText() {
			return this.posterData.altText || 'Image Not Found';
		},
		// Get the image with the smallest size to set it as default image.
		defaultImg() {
			return this.getImg(this.posterData.posterSizes[0]) || '';
		},
		// Get the srcset string.
		srcSet() {
			return this.getSrcSet() || '';
		},
		// Get the sizes string.
		imgSizes() {
			return this.getSizes() || '';
		}
	},
	methods: {

		// Compose the image URL.
		getImg(size) {
			if (this.posterData && size) {
				return this.posterData.baseUrl + size + this.posterData.imgPath;
			}
		},

		// Process all the poster sizes and return a string with all the images and sizes for the srcset attribute.
		// We skip the 'original' and larger than 500px sizes, because we never need them.
		getSrcSet() {
			if (this.posterData) {
				let srcSetArr = [];
				this.posterData.posterSizes.forEach(size => {
					if (size !== 'original') {
						const strippedSize = size.replace('w', '');
						if (Number(strippedSize) <= 500) {
							srcSetArr.push(this.getImg(size) + ' ' + strippedSize + 'w');
						}
					}
				});
				return srcSetArr.join(', ');
			}
		},

		// Process all the poster sizes and return a string with all the media queries for the sizes attribute.
		// We skip the 'original' and larger than 500px sizes, because we never need them.
		getSizes() {
			if (this.posterData) {
				let sizes = [];
				this.posterData.posterSizes.forEach(size => {
					if (size !== 'original') {
						const strippedSize = size.replace('w', '');
						if (Number(strippedSize) <= 500) {
							sizes.push((Number(strippedSize) !== 500) ? `(max-width: ${strippedSize}px) ${strippedSize}px` : '100vw');
						}
					}
				});
				return sizes.join(', ');
			}
		},

	}
}
</script>
