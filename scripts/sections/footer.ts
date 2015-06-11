$("./body") {
	insert_bottom("footer", class:"mw-footer"){
	  	insert("span", "Powered by ") {
	  		insert("div", "Moovweb", class: "mw-footerBold")
	    	# Move stuff here
	  	}
		move_here('//div[@id="Footer"]', "top")
		remove('.//a')
		$('.//span') {
			insert_after("span", "<br />", class:"breakPoint")
		}
	}
}
