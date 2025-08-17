<?php

	
	add_action( 'enqueue_block_editor_assets', function() {	    
	        wp_add_inline_style( 'generate-block-editor-styles',wtp_base_css() );	   
	}, 50 );

	add_action( 'wp_enqueue_scripts', function() {
	    wp_add_inline_style( 'generate-style', wtp_base_css() );
	}, 100 );

	function wtp_base_css() {
			if ( ! function_exists( 'generate_get_defaults' ) ) {
		        return;
		    }

			$generate_settings  = wp_parse_args(
				get_option( 'generate_settings', array() ),
				generate_get_defaults()
			);
			if ( ! class_exists( 'GeneratePress_CSS' ) ) {
		        return;
		    }
			$css = new GeneratePress_CSS;

			$form_button_text_color = $generate_settings['form_button_text_color'];
			$form_button_text_color_hover = $generate_settings['form_button_text_color_hover'];
			$form_button_background_color_hover = $generate_settings['form_button_background_color_hover'];

			/*Buttons*/
		
/*
			$css->set_selector( '.page-btn' );
			$css->add_property( 'color', $form_button_text_color.'!important' );

			$css->set_selector( '.page-btn:hover' );
			$css->add_property( 'color', $form_button_text_color_hover.'!important' );

			$css->set_selector( '.on-banner-top:hover' );
			$css->add_property( 'color', $form_button_background_color_hover.'!important' );

*/
			

			do_action( 'generate_base_css', $css );

			return apply_filters( 'wtp_base_css_output', $css->css_output() );
	}
