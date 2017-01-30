Shopify Variant Image Plugin
=====================

Shopify does not currently have the ability to filter per-variant images. This can be an issue when, for example, a particular color variant has several preview images. 

This plugin is an easy workaround that sorts based on the "alt" attribute. Simply copy and paste the snippet into your theme code. The code is designed to be super lightweight with minimal effect on page load time. 

Installation
---------------
* Navigate to your theme code
* Copy the code in product.liquid to your image placeholder
* Copy the code in theme.liquid into the footer of your page, or into your main shop.js.liquid script.
* Create a file called image-variant.js and load it into the bottom of your theme.liquid, or add the code to the bottom of your shop.js.liquid.
* Change the "alt" tag of your variant image either to be "all" or "imagevariant" ("imagevariant" will be whatever the name of the variant is that you want to filter for")

Requirements
---------------
Theme must use Slick slider.

License
---------------
This plugin is under MIT license.
