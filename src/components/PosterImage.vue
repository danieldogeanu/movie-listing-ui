<template>
	<img class="posterimage"
				:src="defaultImg"
				:alt="alt"
				:srcset="srcSet"
				:sizes="imgSizes" />
</template>

<script>
export default {
	name: 'PosterImage',
	props: {
		posterData: Object,
	},
	data() {
		return {};
	},
	computed: {
		alt() {
			return this.posterData.altText || 'Image Not Found';
		},
		defaultImg() {
			return this.getImg(this.posterData.posterSizes[0]) || '';
		},
		srcSet() {
			return this.getSrcSet() || '';
		},
		imgSizes() {
			return this.getSizes() || '';
		}
	},
	methods: {
		getImg(size) {
			let img = '';
			if (this.posterData && size) {
				img = this.posterData.baseUrl + size + this.posterData.imgPath;
			}
			return img;
		},
		getSrcSet() {
			let srcSetArr = [];
			this.posterData.posterSizes.forEach(size => {
				if (size !== 'original') {
					const strippedSize = size.replace('w', '');
					if (Number(strippedSize) <= 500) {
						const img = this.getImg(size);
						srcSetArr.push(img + ' ' + strippedSize + 'w');
					}
				}
			});
			return srcSetArr.join(', ');
		},
		getSizes() {
			let sizes = [];
			this.posterData.posterSizes.forEach(size => {
				if (size !== 'original') {
					const strippedSize = size.replace('w', '');
					if (Number(strippedSize) <= 500) {
						const processedSize = (Number(strippedSize) !== 500) ? `(max-width: ${strippedSize}px) ${strippedSize}px` : '100vw';
						sizes.push(processedSize);
					}
				}
			});
			return sizes.join(', ');
		},
	}
}
</script>
