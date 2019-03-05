## CSS

```html
.fluid_grid {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin: -5px;
	
	> div {
		position: relative;
		margin: 5px;
		
		img {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
		}
	}
}
```

## JS

```html
<script src="https://cerjan.github.io/resources/js/imagesloaded.pkgd.min.js"></script>
<script src="https://cerjan.github.io/resources/js/fluidGrid.jquery.js"></script>
<script>
  $(function() {
    $('.fluid_grid').fluidGrid(options);
  });
</script>
```
