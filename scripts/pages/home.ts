# Place holder/example file
$('./body') {
		$('.//div[@id="Menu"]') {
			add_class('mw-hidden')
		}
		insert("div", class:"mw-content"){
			move_here('//div[@id="Wrapper"]'){
				add_class('mw-wrapper')
				remove('./div[@class="Right"]')
				remove('./div[@class="Left"]')
				$('.//div[@class="Content"]') {
					$('.//div[@id="HomeFeaturedProducts"]') {
						add_class('mw-homeFeaturedProducts')

						$('.//div[@class="BlockContent"]') {
							add_class('mw-featuredProducts')
							attribute('data-ur-set', 'carousel')
							$('.//ul[@class="ProductList"]') {
								attribute('data-ur-carousel-component', "scroll_container")
								$('.//li') {
									add_class('mw-products')
									attribute('data-ur-carousel-component', 'item')
									$('.//div[@class="ProductActionAdd"]') {
										add_class('mw-addToCart')
									}
								}
							}
							insert("div", class:"mw-dots"){
								attribute("data-ur-carousel-component", "dots")
							}
						}
						$('.//div[@class="ProductPriceRating"]') {
							add_class('mw-bottomMargin')

							$('./span[contains(@class, "Rating")') {
								add_class('mw-bottomMargin')
								add_class('mw-topMargin')
							}
						}
					}
					$('.//div[@id="HomeNewProducts"]') {
						add_class('mw-homeNewProducts')
						$('.//div[@class="BlockContent"]') {
							add_class('mw-newProducts')
							attribute('data-ur-set', 'carousel')
							$('.//ul[@class="ProductList"]') {
								attribute('data-ur-carousel-component', "scroll_container")
								$('.//li') {
									add_class('mw-products')
									attribute('data-ur-carousel-component', 'item')
									$('.//div[@class="ProductActionAdd"]') {
										add_class('mw-addToCart')
									}
								}
							}
							insert("div", class:"mw-dots"){
								attribute("data-ur-carousel-component", "dots")
							}
						}
					}
				}
			}
		}
	remove('//span[contains(@class, "FeedLink")]')
	$('//em') {
		insert_after("br")
	}
}
