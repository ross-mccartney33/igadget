$('./body') {
	$('./div[@id="Container"]') {
		$('./div[@id="Outer"]') {
			//hide the menu div because it will be used differently
			$('./div[@id="Menu"]') {
				add_class("mw-hidden")
			}
			$('./div[@id="Wrapper"]') {
				remove('./div[@id="LayoutColumn1"]')
				remove('./div[@id="LayoutColumn3"]')
				$('./div[@id="LayoutColumn2"]') {
					remove('./div[@id="ProductBreadcrumb"]')
					$('./div[@id="ProductDetails"]') {
						$('./div[@class="BlockContent"]') {
							remove('./div[contains(@class, "AddThisButtonBox")]')
							remove('.//a[@id="ImageScrollNext"]')
							$('./div[@class="ProductMain"]') {
								add_class('mw-productMain')
								add_class('mw-padding')
								$('./div[@class="ProductDetailsGrid"]') {
									$('.//div[contains(@class, "DetailRow")]') {
										add_class('mw-detailRow')
									}
									$('.//div[contains(@class, "Label")]') {
										add_class('mw-label')
									}
									$('.//div[contains(@class, "Value")]') {
										add_class('mw-value')
									}

								}
								$('.//div[@class="productAddToCartRight"]') {
									$('.//div[contains(@class, "ProductAddToCart")]') {
										$('.//div[contains(@class, "Label")]') {
											add_class('mw-label')
										}
										$('.//span[@class="FloatLeft"]') {
											add_class('mw-value')
											add_class('mw-bottomMargin');
											insert_after("br", class:"clear")
										}
										$('.//div[@class="BulkDiscount"]') {
											$('./input') {
												attribute("type", "button")
												remove("./@src")
												remove("./@alt")
												attribute("value", "Add to Cart")
												add_class('mw-button')
											}
										}
									}
								}
							}
						}
					}
					$('./div[contains(@class, "ProductDescription")]') {
						add_class('mw-padding')
					}
					$('./div[@id="ProductReviews"]') {
						add_class('mw-padding')
					}
					remove('./div[@id="ProductByCategory"]')
					remove('./div[@id="SimilarProductsByCustomerViews"]')
				}
			}
		}
	}
}