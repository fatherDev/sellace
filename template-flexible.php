<?php
/**
 * Template Name: Flexible content
 * Description: A Page Template with a darker design.
 */

 $context = Timber::context();

 $timber_post = new Timber\Post();
 $context['post'] = $timber_post;
 Timber::render(
     ['page-' . $timber_post->post_name . '.twig', 'page-flexible.twig'],
     $context
 );
 