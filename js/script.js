jQuery(document).ready(function(){

jQuery.fancybox.defaults.i18n.ru = {
	CLOSE: "Закрыть",
	NEXT: "Следующий",
	PREV: "Предыдущий",
	ERROR: "Запрошенное содержимое не может быть загружено. <br/> Пожалуйста, повторите попытку позже.",
	PLAY_START: "Запуск слайд-шоу",
	PLAY_STOP: "Остановить слайд-шоу",
	FULL_SCREEN: "На весь экран",
	THUMBS: "Галерея",
	DOWNLOAD: "Скачать",
	SHARE: "Поделиться",
	ZOOM: "Приблизить"
};
jQuery.fancybox.defaults.lang = 'ru';


let sc = jQuery('.scrollbar').customScrollbar();

jQuery('div.header__mobile-mgl-parent').click(function () {
jQuery(this).parent().toggleClass('active');
jQuery(this).parent().find('.header__mobile-mgl-hidden').slideToggle('fast');
});

jQuery('.header__mobile-back').click(function () {
jQuery('.header__mobile-menu-wrapper').slideUp('fast');
jQuery('body').removeClass('overflow');
});

jQuery('.header__mobile-cor').click(function () {
jQuery('.header__mobile-menu-wrapper').slideDown('fast');
jQuery('body').addClass('overflow');
});

jQuery('.product-page__colors').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 3,
	variableWidth: true,
	responsive: [
	{
		breakpoint: 768,
		settings: {
		slidesToShow: 2,
		dots: false,
		arrows: false
	}
	}
	]
});

jQuery('.product-page__sizes').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 3,
	variableWidth: true,
	responsive: [
	{
		breakpoint: 768,
		settings: {
		slidesToShow: 2,
		dots: false,
		arrows: false
	}
	}
	]
});

jQuery('.slider-product__items').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 4000,
	responsive: [
	{
		breakpoint: 1280,
		settings: {
		slidesToShow: 3
	}
	},
	{
		breakpoint: 768,
		settings: {
		slidesToShow: 2,
		dots: false,
		arrows: false
	}
	}
	]
});

jQuery('.slider-product__items2').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 4000,
	responsive: [
	{
		breakpoint: 1280,
		settings: {
		slidesToShow: 3
	}
	},
	{
		breakpoint: 768,
		settings: {
		slidesToShow: 2,
		dots: false,
		arrows: false
	}
	}
	]
});

jQuery('.slider__wrapper').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	responsive: [
	{
		breakpoint: 768,
		settings: {
		arrows: false,
		dots: false
	}
	}
	]
});

jQuery('.product-page__slider-pr').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 2,
	vertical: true,
	centerMode: true,
	swipe: true,
	verticalScrolling: true,
	verticalSwiping: true,
	responsive: [
	{
		breakpoint: 960,
		settings: {
		slidesToShow: 5,
		vertical: false,
			centerMode: false,
	}
	},
	{
		breakpoint: 768,
		settings: {
		slidesToShow: 1,
		vertical: false,
		arrows: false,
		dots: false,
		slidesToScroll: 1,
	}
	}
	]
});

jQuery('.product-page__slider-pr').on('afterChange', function(event, slick, currentSlide, nextSlide){
	var src=jQuery('.product-page__slider-pr-url.slick-active').attr('href');
	jQuery('.product-page__slider-big-image').attr('src', src);
	jQuery('.product-page__slider-big-url').attr('href', src);
});

jQuery('body').on('click', '.product-page__slider-pr-url', function(){
	var src=jQuery(this).attr('href');
	jQuery('.product-page__slider-pr-url').removeClass('active');
	jQuery(this).addClass('active');
	jQuery('.product-page__slider-big-image').attr('src', src);
	jQuery('.product-page__slider-big-url').attr('href', src);
	
	return false;
});


jQuery(".slider-product__img").on({
	mouseenter: function () {
		jQuery(this).find('.slider-product__image-gl').hide();
		jQuery(this).find('.slider-product__image-hidden').show();
	},
	mouseleave: function () {
		jQuery(this).find('.slider-product__image-hidden').hide();
		jQuery(this).find('.slider-product__image-gl').show();
	}
});

jQuery(".product__img").on({
	mouseenter: function () {
		jQuery(this).find('.product__image-gl').hide();
		jQuery(this).find('.product__image-hidden').show();
	},
	mouseleave: function () {
		jQuery(this).find('.product__image-hidden').hide();
		jQuery(this).find('.product__image-gl').show();
	}
});


jQuery('.header__city span, .header__mobile-city-url, .product-page__city-url').click(function () {
jQuery('html, body').animate({ scrollTop: 0 }, 300);
jQuery('.city-form').slideToggle('fast');
return false;
});

jQuery('.city-form__close').click(function () {
jQuery('.city-form').slideUp('fast');
});

jQuery(document).mouseup(function (e){
var div = jQuery('.city-form');
var div2 = jQuery('.header__city span');
var div3 = jQuery('.header__mobile-city-url');
var div4 = jQuery('.product-page__city-url');
if (!div.is(e.target)&& div.has(e.target).length === 0) {
if (!div2.is(e.target)&& div2.has(e.target).length === 0) {
if (!div3.is(e.target)&& div3.has(e.target).length === 0) {
if (!div4.is(e.target)&& div4.has(e.target).length === 0) {
	div.slideUp('fast');
} } } }
});

jQuery('.header__search-ico').click(function () {
jQuery('.header__search-form').fadeIn('fast');
});

jQuery(document).mouseup(function (e){
var div = jQuery('.header__search-form');
if (!div.is(e.target)&& div.has(e.target).length === 0) {
	div.fadeOut('fast');
}
});

jQuery('.header-menu__item').on({
	mouseenter: function () {
		//jQuery(this).parent().find('.header-menu__hidden').slideDown('fast');
		jQuery(this).find('.header-menu__hidden').slideDown('fast');
	},
	mouseleave: function () {
		//jQuery(this).parent().find('.header-menu__hidden').slideUp('fast');
		jQuery(this).find('.header-menu__hidden').slideUp('fast');
	}
});

jQuery('.partition__block-caption-hs').click(function () {
	jQuery(this).toggleClass('active');
	jQuery(this).parent().find('.checkbox-block__hidden').slideToggle(0);
	window.dispatchEvent(new Event('resize'));
	return false;
});

jQuery('.hide-filter').click(function () {
	jQuery('.partition__wrapper-block').slideUp('fast');
	return false;
});

jQuery('.show-filter').click(function () {
	jQuery('.partition__wrapper-block').slideDown('fast');
	return false;
});


jQuery('.product-page__toggle-caption').click(function () {
	jQuery(this).toggleClass('active');
	jQuery(this).parent().find('.product-page__toggle-hidden').slideToggle('fast');
});

jQuery('.product-page__size').click(function () {
	var id=jQuery(this).attr('rel');
	jQuery('.product-page__size').removeClass('active');
	jQuery(this).addClass('active');
	jQuery('.product-page__sizes input').val(id);
});

jQuery('.product-page__color').click(function () {
	var id=jQuery(this).attr('rel');
	var color=jQuery(this).attr('color');
	jQuery('.product-page__color').removeClass('active');
	jQuery(this).addClass('active');
	jQuery('.product-page__colors input').val(id);
	jQuery('.product-page__color-current span').html(color);
});

jQuery('.fly-sh-subscription').click(function () {
	jQuery('.fly-subscription').fadeIn('fast');
	jQuery('body').addClass('overflow');
	return false;
});

jQuery('.fly-sh-order').click(function () {
	jQuery('.fly-order').fadeIn('fast');
	jQuery('body').addClass('overflow');
	return false;
});

jQuery('.fly-sh-sucess').click(function () {
	jQuery('.fly').hide();
	jQuery('.fly-success').fadeIn('fast');
	jQuery('body').addClass('overflow');
	return false;
});

jQuery('.product-page__define-size').click(function () {
	jQuery('.fly-table-size').fadeIn('fast');
	jQuery('body').addClass('overflow');
	return false;
});

jQuery('.fly__close, .fly__shadow').click(function () {
	jQuery('.fly').fadeOut('fast');
	jQuery('body').removeClass('overflow');
});

jQuery('body').on('click', '.quantity__minus', function(){
	var v=parseInt(jQuery(this).parent().find('.quantity__input').val());
	if (v>1) {
		jQuery(this).parent().parent().find('.quantity__input').val(v-1);
	}
	return false;
});

jQuery('body').on('click', '.quantity__plus', function(){
	var v=parseInt(jQuery(this).parent().find('.quantity__input').val());
	jQuery(this).parent().find('.quantity__input').val(v+1);
	return false;
});

jQuery('body').on('click', '.footer__caption', function(){
	var w=jQuery( window ).width();
	if(w<=768) {
		jQuery(this).toggleClass('active');
		jQuery(this).parent().find('.footer__menu').slideToggle('fast');
	}
});

jQuery('body').on('click', '.pa__data-edit-button', function(){
	jQuery(this).hide();
	jQuery(this).parent().find('.pa__data-form').fadeIn('fast');
	return false;
});

jQuery('body').on('click', '.pa__data-form-button', function(){
	let z=jQuery(this).closest('.pa__data-edit');
	jQuery(z).find('.pa__data-form').hide();
	jQuery(z).find('.pa__data-edit-button').fadeIn('fast');
	return false;
});

jQuery('body').on('click', '.faq__item-question', function(){
	jQuery(this).toggleClass('active');
	jQuery(this).parent().find('.faq__item-answer').slideToggle('fast');
	return false;
});

jQuery('body').on('click', '.pb__caption', function(){
	jQuery(this).toggleClass('active');
	jQuery(this).parent().find('.pb__hidden').slideToggle('fast');
	return false;
});

jQuery('body').on('click', '.pa__data-change-password', function(){
	jQuery(this).toggleClass('active');
	jQuery(this).parent().find('.pa__data-reset').slideToggle('fast');
	return false;
});

jQuery('body').on('click', '.pa__add-adres', function(){
	jQuery(this).toggleClass('active');
	jQuery(this).parent().find('.pa__data-adress-hidden').slideToggle('fast');
	return false;
});

jQuery('body').on('click', '.promo-sh', function(){
	jQuery(this).hide();
	jQuery('.cart__itogo-promo-hidden').fadeIn('fast');
	return false;
});

jQuery(document).mouseup(function (e){
var div = jQuery('.cart__itogo-promo-hidden');
if (!div.is(e.target)&& div.has(e.target).length === 0) {
	div.hide();
	jQuery('.promo-sh').fadeIn('fast');
}
});

});


jQuery( function() {
	var slider = $('#slider').slider({
    	min: 0,
    	max: 5000,
	range: true,
	values: [ 233, 2100 ],
		create: function() {
			jQuery('.price-block__line-from').html($('#slider').slider( "values", 0 ));
			jQuery('.price-block__line-to').html($('#slider').slider( "values", 1 ));
			jQuery('.price-block__from').val($('#slider').slider( "values", 0 ));
			jQuery('.price-block__to').val($('#slider').slider( "values", 1 ));
		},
		slide: function( event, ui ) {
			jQuery('.price-block__line-from').html(ui.values[0]);
			jQuery('.price-block__line-to').html(ui.values[1]);
			jQuery('.price-block__from').val(ui.values[0]);
			jQuery('.price-block__to').val(ui.values[1]);
		}
		}
	);
	jQuery('.price-block__from').on('keyup', function() {
		jQuery('#slider').slider('values',0,jQuery(this).val());
		jQuery('.price-block__line-from').html(jQuery(this).val());
	});
	jQuery('.price-block__to').on('keyup', function() {
		jQuery('#slider').slider('values',1,jQuery(this).val());
		jQuery('.price-block__line-to').html(jQuery(this).val());
	});
});


jQuery('.about-item__counter').each(function () {
	var $this = jQuery(this);
	jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
		duration: 5000,
		easing: 'swing',
		step: function () {
			$this.text(Math.ceil(this.Counter));
		}
	});
});