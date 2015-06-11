//Used to get more information about the website prior to importing anything
match($path) {
      with(/^\/$|^\/\?/) {
        $page_type = "Home"
      }
      with(/sample-product/) {
        $page_type = "Products"
      }
      with(/cart\.php/) {
      	//$content_type = "mw-fragment"
      	$page_type = "Home"
      	log("--> Content type has been changed!")
      }
      else() {
        log("--> No page match in mappings.ts")
      }
}