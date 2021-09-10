export const GridColumn = () => {
  return /*CSS*/ `
    :root {
	/* 0,4,8,12,16 */
	--plus-gutters: 12px;
	--minus-gutters: -12px;
	}

* {
	box-sizing: border-box;
	margin: 0px;
}

.container {
	width: 1200px;
	padding-right: 12px;
	padding-left: 12px;
	margin-right: auto;
	margin-left: auto;
}

.container-fluid {
	width: 100%;
	padding-right: 12px;
	padding-left: 12px;
	margin-right: auto;
	margin-left: auto;
}

.row {
	display: flex;
	flex-wrap: wrap;
	margin-left: var(--minus-gutters);
	margin-right: var(--minus-gutters);
}

.row > * {
	max-width: 100%;
	padding-left: var(--plus-gutters);
	padding-right: var(--plus-gutters);
}

.gx-5 {
	margin-left: -24px;
	margin-right: -24px;
}

.g-2 {
	margin-left: -4px;
	margin-right: -4px;
}

.col {
	padding-left: 4px;
	padding-right: 4px;
}

/* default */
.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12 {
	display: block;
}
.col-0 {
	display: none;
}
.col-1 {
	flex: 0 0 auto;
	width: 8.3333333333%;
}
.col-2 {
	flex: 0 0 auto;
	width: 16.6666666667%;
}
.col-3 {
	flex: 0 0 auto;
	width: 25%;
}
.col-4 {
	flex: 0 0 auto;
	width: 33.3333333333%;
}
.col-5 {
	flex: 0 0 auto;
	width: 41.6666666667%;
}
.col-6 {
	flex: 0 0 auto;
	width: 50%;
}
.col-7 {
	flex: 0 0 auto;
	width: 58.3333333333%;
}
.col-8 {
	flex: 0 0 auto;
	width: 66.6666666667%;
}
.col-9 {
	flex: 0 0 auto;
	width: 75%;
}
.col-10 {
	flex: 0 0 auto;
	width: 83.3333333333%;
}
.col-11 {
	flex: 0 0 auto;
	width: 91.6666666667%;
}
.col-12 {
	flex: 0 0 auto;
	width: 100%;
}

/* flag: s -- mobile */
@media (min-width: 576px) {
	.container {
		max-width: 540px;
	}
	.sm-1,
	.sm-2,
	.sm-3,
	.sm-4,
	.sm-5,
	.sm-6,
	.sm-7,
	.sm-8,
	.sm-9,
	.sm-10,
	.sm-11,
	.sm-12 {
		display: block;
	}
	.sm-0 {
		display: none;
	}
	.sm-1 {
		flex: 0 0 auto;
		width: 8.3333333333%;
	}
	.sm-2 {
		flex: 0 0 auto;
		width: 16.6666666667%;
	}
	.sm-3 {
		flex: 0 0 auto;
		width: 25%;
	}
	.sm-4 {
		flex: 0 0 auto;
		width: 33.3333333333%;
	}
	.sm-5 {
		flex: 0 0 auto;
		width: 41.6666666667%;
	}
	.sm-6 {
		flex: 0 0 auto;
		width: 50%;
	}
	.sm-7 {
		flex: 0 0 auto;
		width: 58.3333333333%;
	}
	.sm-8 {
		flex: 0 0 auto;
		width: 66.6666666667%;
	}
	.sm-9 {
		flex: 0 0 auto;
		width: 75%;
	}
	.sm-10 {
		flex: 0 0 auto;
		width: 83.3333333333%;
	}
	.sm-11 {
		flex: 0 0 auto;
		width: 91.6666666667%;
	}
	.sm-12 {
		flex: 0 0 auto;
		width: 100%;
	}
}

/* flag: md -- tablet */
@media (min-width: 768px) {
	.container {
		max-width: 720px;
	}
	.md-1,
	.md-2,
	.md-3,
	.md-4,
	.md-5,
	.md-6,
	.md-7,
	.md-8,
	.md-9,
	.md-10,
	.md-11,
	.md-12 {
		display: block;
	}
	.md-0 {
		display: none;
	}
	.md-1 {
		flex: 0 0 auto;
		width: 8.3333333333%;
	}
	.md-2 {
		flex: 0 0 auto;
		width: 16.6666666667%;
	}
	.md-3 {
		flex: 0 0 auto;
		width: 25%;
	}
	.md-4 {
		flex: 0 0 auto;
		width: 33.3333333333%;
	}
	.md-5 {
		flex: 0 0 auto;
		width: 41.6666666667%;
	}
	.md-6 {
		flex: 0 0 auto;
		width: 50%;
	}
	.md-7 {
		flex: 0 0 auto;
		width: 58.3333333333%;
	}
	.md-8 {
		flex: 0 0 auto;
		width: 66.6666666667%;
	}
	.md-9 {
		flex: 0 0 auto;
		width: 75%;
	}
	.md-10 {
		flex: 0 0 auto;
		width: 83.3333333333%;
	}
	.md-11 {
		flex: 0 0 auto;
		width: 91.6666666667%;
	}
	.md-12 {
		flex: 0 0 auto;
		width: 100%;
	}
}

/* flag: l -- pc */
@media (min-width: 992px) {
	.container {
		max-width: 960px;
	}
	.lg-1,
	.lg-2,
	.lg-3,
	.lg-4,
	.lg-5,
	.lg-6,
	.lg-7,
	.lg-8,
	.lg-9,
	.lg-10,
	.lg-11,
	.lg-12 {
		display: block;
	}
	.lg-0 {
		display: none;
	}
	.lg-1 {
		flex: 0 0 auto;
		width: 8.3333333333%;
	}
	.lg-2 {
		flex: 0 0 auto;
		width: 16.6666666667%;
	}

	.lg-2-5 {
		flex: 0 0 auto;
		width: 20%;
	}

	.lg-3 {
		flex: 0 0 auto;
		width: 25%;
	}
	.lg-4 {
		flex: 0 0 auto;
		width: 33.3333333333%;
	}
	.lg-5 {
		flex: 0 0 auto;
		width: 41.6666666667%;
	}
	.lg-6 {
		flex: 0 0 auto;
		width: 50%;
	}
	.lg-7 {
		flex: 0 0 auto;
		width: 58.3333333333%;
	}
	.lg-8 {
		flex: 0 0 auto;
		width: 66.6666666667%;
	}
	.lg-9 {
		flex: 0 0 auto;
		width: 75%;
	}
	.lg-10 {
		flex: 0 0 auto;
		width: 83.3333333333%;
	}
	.lg-11 {
		flex: 0 0 auto;
		width: 91.6666666667%;
	}
	.lg-12 {
		flex: 0 0 auto;
		width: 100%;
	}
}

/* flag: xl -- desktop */
@media (min-width: 1200px) {
	.container {
		max-width: 1140px;
	}
	.xl-1,
	.xl-2,
	.xl-3,
	.xl-4,
	.xl-5,
	.xl-6,
	.xl-7,
	.xl-8,
	.xl-9,
	.xl-10,
	.xl-11,
	.xl-12 {
		display: block;
	}
	.xl-0 {
		display: none;
	}

	.xl-1 {
		flex: 0 0 auto;
		width: 8.3333333333%;
	}
	.xl-2 {
		flex: 0 0 auto;
		width: 16.6666666667%;
	}
	.xl-2-5 {
		flex: 0 0 auto;
		width: 20%;
	}
	.xl-3 {
		flex: 0 0 auto;
		width: 25%;
	}
	.xl-4 {
		flex: 0 0 auto;
		width: 33.3333333333%;
	}
	.xl-5 {
		flex: 0 0 auto;
		width: 41.6666666667%;
	}
	.xl-6 {
		flex: 0 0 auto;
		width: 50%;
	}
	.xl-7 {
		flex: 0 0 auto;
		width: 58.3333333333%;
	}
	.xl-8 {
		flex: 0 0 auto;
		width: 66.6666666667%;
	}
	.xl-9 {
		flex: 0 0 auto;
		width: 75%;
	}
	.xl-10 {
		flex: 0 0 auto;
		width: 83.3333333333%;
	}
	.xl-11 {
		flex: 0 0 auto;
		width: 91.6666666667%;
	}
	.xl-12 {
		flex: 0 0 auto;
		width: 100%;
	}
}

  `;
};
