<template>
	<nav class="pagination-wrap" v-if="total !== 0">
		<ul class="pagination">
			<li class="page-item" :class="{disabled: isDisabledFirst}">
				<a class="page-link" href="#" @click.prevent="goToPage(page-1)">Previous</a>
			</li>
			<template v-if="showFirst">
				<li class="page-item" aria-current="page">
					<a class="page-link" href="#" @click.prevent="goToPage(1)">1</a>
				</li>
				<li class="page-item" aria-current="page">
					<a class="page-link">...</a>
				</li>
			</template>
			<template v-for="p in pageRange" :key="p">
				<li class="page-item" :class="{active: p === page}">
					<a class="page-link" href="#" @click.prevent="goToPage(p)">{{p}}</a>
				</li>
			</template>
			<template v-if="showLast">
				<li class="page-item" aria-current="page">
					<a class="page-link">...</a>
				</li>
				<li class="page-item" aria-current="page">
					<a class="page-link" href="#" @click.prevent="goToPage(total)">{{total}}</a>
				</li>
			</template>
			<li class="page-item" :class="{disabled: isDisabledLast}">
				<a class="page-link" href="#" @click.prevent="goToPage(page+1)">Next</a>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	props: {
		page: {
			type: Number,
			default: 1,
			required: true
		},
		total: {
			type: Number,
			default: 0,
			required: true
		}
	},
	computed: {
		isDisabledFirst() {
			return this.page === 1
		},
		isDisabledLast() {
			return this.page === this.total
		},
		showFirst() {
			return this.page > 4 && this.total > 6
		},
		showLast() {
			return this.page < this.total - 3 && this.total > 6
		},
		pageRange() {
			let from = this.page - 2;
			let to = this.page + 2;

			if (this.page < 5) {
				from = 1;
				to = 5;
			}

			if (this.page > this.total - 4) {
				from = this.total - 4;
				to = this.total;
			}

			if (from < 1) {
				from = 1
			}

			if (to > this.total) {
				to = this.total
			}

			if(this.total === 6){
				from = 1
			}

			return Array(to - from + 1).fill().map((_, idx) => from + idx)
		}
	},
	methods : {
		goToPage (new_page){
			this.$emit('goToPage', new_page)
		}
	}
}
</script>

<style lang="scss" scoped>
	.pagination {
	--bs-pagination-padding-x: 0.75rem;
	--bs-pagination-padding-y: 0.375rem;
	--bs-pagination-font-size: 1rem;
	--bs-pagination-color: var(--bs-link-color);
	--bs-pagination-bg: #fff;
	--bs-pagination-border-width: 1px;
	--bs-pagination-border-color: #dee2e6;
	--bs-pagination-border-radius: 0.375rem;
	--bs-pagination-hover-color: var(--bs-link-hover-color);
	--bs-pagination-hover-bg: #e9ecef;
	--bs-pagination-hover-border-color: #dee2e6;
	--bs-pagination-focus-color: var(--bs-link-hover-color);
	--bs-pagination-focus-bg: #e9ecef;
	--bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
	--bs-pagination-active-color: #fff;
	--bs-pagination-active-bg: #0d6efd;
	--bs-pagination-active-border-color: #0d6efd;
	--bs-pagination-disabled-color: #6c757d;
	--bs-pagination-disabled-bg: #fff;
	--bs-pagination-disabled-border-color: #dee2e6;
	display: flex;
	padding: 0px 20px;
	list-style: none
}

.pagination-wrap {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}

.page-link {
	position: relative;
	display: block;
	padding: var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);
	font-size: var(--bs-pagination-font-size);
	color: var(--bs-pagination-color);
	text-decoration: none;
	background-color: var(--bs-pagination-bg);
	border: var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);
	transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out
}

@media (prefers-reduced-motion:reduce) {
	.page-link {
		transition: none
	}
}

.page-link:hover {
	z-index: 2;
	color: var(--bs-pagination-hover-color);
	background-color: var(--bs-pagination-hover-bg);
	border-color: var(--bs-pagination-hover-border-color)
}

.page-link:focus {
	z-index: 3;
	color: var(--bs-pagination-focus-color);
	background-color: var(--bs-pagination-focus-bg);
	outline: 0;
	box-shadow: var(--bs-pagination-focus-box-shadow)
}

.active>.page-link,.page-link.active {
	z-index: 3;
	color: var(--bs-pagination-active-color);
	background-color: var(--bs-pagination-active-bg);
	border-color: var(--bs-pagination-active-border-color)
}

.disabled>.page-link,.page-link.disabled {
	color: var(--bs-pagination-disabled-color);
	pointer-events: none;
	background-color: var(--bs-pagination-disabled-bg);
	border-color: var(--bs-pagination-disabled-border-color)
}

.page-item:not(:first-child) .page-link {
	margin-left: -1px
}

.page-item:first-child .page-link {
	border-top-left-radius: var(--bs-pagination-border-radius);
	border-bottom-left-radius: var(--bs-pagination-border-radius)
}

.page-item:last-child .page-link {
	border-top-right-radius: var(--bs-pagination-border-radius);
	border-bottom-right-radius: var(--bs-pagination-border-radius)
}

@media screen and (max-width: 500px) {
	.pagination {
		flex-wrap: wrap;
	}
}

</style>

