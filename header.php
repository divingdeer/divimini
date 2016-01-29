<!DOCTYPE html>
  <?php $lang = explode('-', get_bloginfo('language')); ?>
  <?php $lang = $lang[0]; ?>
<html lang="<?php echo $lang ?>">
<head>
  <meta charset="utf-8">
  <title><?php wp_title('', true, 'right'); ?></title>
  <meta http-equiv="Content-Type" content="text/html">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css" rel="stylesheet" type="text/css" />
  <link href="<?php bloginfo('stylesheet_url'); ?>" rel="stylesheet" type="text/css" />
  <?php wp_head(); ?>
  </head>
  <body>
    <header>
      <?php bloginfo('name'); ?>
      <p class="ft-small"><?php bloginfo('description'); ?></p>
    </header>
    <nav>
      <?php wp_nav_menu() ?>
    </nav>
