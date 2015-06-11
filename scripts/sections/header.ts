$('./body') {
	$('.//div[@id="AjaxLoading"]') {
	 add_class('mw-hidden')
	}
	remove("//div[@id='TopMenu']")
	$('.//div[@id="Outer"]') {
		insert_before("header",class:"mw-header") {
			move_here("//div[@id='Header']"){
				add_class('mw-headerClass')
			}
			$('.//div[@id="Logo"]') {
				add_class('mw-logo')
				$('.//div[@id="LogoContainter"]'){
					add_class('mw-logo')
				}
			}
			$('.//div[@id="SearchForm"]'){
				add_class('mw-search')
				remove("p");
				$('.//input[@id="search_query"]') {
					add_class('mw-searchQuery')
				}
			}
		}
	}
}
